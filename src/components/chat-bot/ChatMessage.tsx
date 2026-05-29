interface MessageProps {
  text: string;
  isBot: boolean;
}

export function ChatMessage({ text, isBot }: MessageProps) {
  return (
    <div className={`p-3 rounded-lg text-sm max-w-[80%] ${
      isBot 
        ? 'bg-white border text-gray-700' 
        : 'bg-amber-400 text-gray-900 ml-auto'
    }`}>
      {text}
    </div>
  );
}