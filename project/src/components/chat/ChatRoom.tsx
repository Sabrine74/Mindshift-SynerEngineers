import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { useChatStore } from '../../stores/chatStore';
import { useAIResponse } from '../../hooks/useAIResponse';

export function ChatRoom() {
  const { roomId } = useParams();
  const [message, setMessage] = useState('');
  const { messages, addMessage } = useChatStore();
  const { getAIResponse, isLoading } = useAIResponse();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages[roomId!]]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const newMessage = {
      id: Date.now(),
      content: message.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    addMessage(roomId!, newMessage);
    setMessage('');

    // Get AI response
    const aiResponse = await getAIResponse(message, roomId!);
    addMessage(roomId!, {
      id: Date.now() + 1,
      content: aiResponse,
      sender: 'ai',
      timestamp: new Date(),
    });
  };

  const roomMessages = messages[roomId!] || [];

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-white/20 backdrop-blur-md rounded-xl p-6">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-[#023336]/20 scrollbar-track-transparent">
        {roomMessages.length === 0 && (
          <div className="text-center text-[#023336]/60 mt-8">
            <p>Welcome to the {roomId} room!</p>
            <p className="text-sm mt-2">Start a conversation or ask for help.</p>
          </div>
        )}
        {roomMessages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 bg-white/50 rounded-lg focus:ring-2 focus:ring-[#4DA674] outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 bg-[#023336] text-white rounded-lg transition ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#023336]/90'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}