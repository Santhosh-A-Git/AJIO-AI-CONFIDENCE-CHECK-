import Groq from 'groq-sdk';

export const getGroqClient = () => new Groq({
  apiKey: process.env.GROQ_API_KEY || 'placeholder_key_for_build',
});

// A standard list in case fetching models fails
const DEFAULT_FALLBACKS = [
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
  'mixtral-8x7b-32768',
  'gemma2-9b-it'
];

export async function callGroqWithFallback(messages: any[], isJson: boolean = false, retries = 3): Promise<any> {
  const groq = getGroqClient();
  let delayMs = 2000;
  
  let modelsToTry = DEFAULT_FALLBACKS;
  
  try {
    const modelsResponse = await groq.models.list();
    if (modelsResponse && modelsResponse.data) {
      modelsToTry = modelsResponse.data.map(m => m.id);
      console.log('Dynamically fetched available Groq models:', modelsToTry);
    }
  } catch (err) {
    console.warn('Could not fetch dynamic models list, using defaults.');
  }
  
  const errorDetails: string[] = [];

  for (const model of modelsToTry) {
    let attempt = 0;
    while (attempt < retries) {
      try {
        console.log(`Trying Groq model: ${model}`);
        const response = await groq.chat.completions.create({
          messages,
          model: model,
          ...(isJson ? { response_format: { type: 'json_object' } } : {}),
          temperature: 0.1,
        });
        return response.choices[0]?.message?.content;
      } catch (error: any) {
        // Rate limit: retry same model
        if (error.status === 429 && attempt < retries - 1) {
          console.warn(`Rate limited by Groq on model ${model}. Retrying...`);
          await new Promise(resolve => setTimeout(resolve, delayMs));
          delayMs *= 2; 
          attempt++;
        } 
        // 400 or 404: Usually means model decommissioned, unsupported JSON mode, or access denied
        else if (error.status === 400 || error.status === 404) {
          const msg = error.error?.message || error.message;
          console.warn(`Model ${model} failed (${error.status}): ${msg}`);
          errorDetails.push(`${model}: ${msg}`);
          break; 
        } 
        // Other errors: break to next model just in case, but usually we'd throw. We'll add it to errors.
        else {
          const msg = error.error?.message || error.message;
          console.warn(`Model ${model} failed unexpectedly (${error.status}): ${msg}`);
          errorDetails.push(`${model}: ${msg}`);
          break;
        }
      }
    }
  }
  
  throw new Error("All fallback models failed. Errors: " + errorDetails.join(" | "));
}
