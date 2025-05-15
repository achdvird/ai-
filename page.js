'use client';
import { MonacoEditor } from '@monaco-editor/react';
import { useState } from 'react';
import { askAI } from './actions';

export default function Home() {
  const [code, setCode] = useState('// Write code here...');
  const [output, setOutput] = useState('');

  const handleAskAI = async () => {
    const response = await askAI(code);
    setOutput(response);
  };

  return (
    <div className="h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🔮 AI Code Assistant</h1>
      <div className="flex h-[80vh] gap-4">
        <div className="flex-1">
          <MonacoEditor
            height="100%"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={setCode}
            options={{ minimap: { enabled: false } }}
          />
        </div>
        <div className="flex-1 bg-gray-800 p-4 rounded overflow-auto">
          <button 
            onClick={handleAskAI}
            className="bg-purple-600 px-4 py-2 rounded mb-4"
          >
            Ask AI
          </button>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
}