import { useState } from 'react';
import { ChatWindow } from './ChatWindow';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#171E2E] text-amber-400 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all z-50 border-2 border-amber-400"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
}