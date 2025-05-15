// For self-hosted Llama 3 (Ollama/vLLM)
export async function queryLocalLlama3(prompt) {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3:70b',
        prompt: `[INST] ${prompt} [/INST]`,
        stream: false
      })
    });
    return response.json();
  }