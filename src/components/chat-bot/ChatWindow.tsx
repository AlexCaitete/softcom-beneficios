import { useState } from 'react';
import { ChatMessage } from './ChatMessage';

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso ajudar com as regras da Softcom hoje?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden z-50">
      <div className="bg-[#171E2E] p-4 text-white font-bold flex justify-between items-center">
        <span>Assistente Softcom</span>
        <button onClick={onClose} className="hover:text-amber-400">✕</button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((m, i) => (
          <ChatMessage key={i} text={m.text} isBot={m.isBot} />
        ))}
      </div>
      
      <div className="p-3 border-t flex gap-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 border rounded-lg p-2 text-sm outline-none focus:border-amber-400" 
          placeholder="Digite sua dúvida..."
        />
        <button onClick={handleSend} className="bg-[#171E2E] text-white px-4 rounded-lg font-semibold hover:bg-black">Enviar</button>
      </div>
    </div>
  );
}