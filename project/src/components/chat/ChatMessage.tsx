import React from 'react';
import { format } from 'date-fns';
import { User, Bot } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-[#4DA674]' : 'bg-[#023336]'
      }`}>
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div className={`flex flex-col ${isUser ? 'items-end' : ''}`}>
        <div className={`px-4 py-2 rounded-lg max-w-md ${
          isUser ? 'bg-[#4DA674] text-white' : 'bg-white/50'
        }`}>
          {message.content}
        </div>
        <span className="text-xs text-[#023336]/60 mt-1">
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>
    </div>
  );
}