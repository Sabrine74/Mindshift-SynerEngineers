import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ChatRoom } from '../components/chat/ChatRoom';

export function ChatRoomPage() {
  const { roomId } = useParams();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link
          to="/dashboard/student"
          className="inline-flex items-center text-[#023336] hover:text-[#023336]/80 transition mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-[#023336]">{roomId} Room</h1>
        <p className="text-[#023336]/80 mt-2">
          Connect with others and share your experiences
        </p>
      </div>
      
      <ChatRoom />
    </div>
  );
}