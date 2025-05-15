'use server';
import OpenAI from 'openai';

// For Llama 3: Use Fireworks.ai or local Ollama endpoint
const ai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'YOUR_LLAMA3_API_KEY',
  baseURL: process.env.OPENAI_BASE_URL || 'https://api.fireworks.ai/inference/v1' // For Llama 3
});

export async function askAI(code) {
  const response = await ai.chat.completions.create({
    model: process.env.AI_MODEL || "accounts/fireworks/models/llama-v3-70b-instruct",
    messages: [
      {
        role: "system",
        content: "You are an expert coding assistant. Provide concise answers."
      },
      { role: "user", content: code }
    ],
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}