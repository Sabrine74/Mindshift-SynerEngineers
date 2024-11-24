import React from 'react';
import { MessageCircle, Users, Video, Bot } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function StudentDashboard() {
  const navigate = useNavigate();

  const chatRooms = [
    { id: 'studies', name: 'Studies Room', description: 'Academic support and study tips' },
    { id: 'family', name: 'Family Room', description: 'Family relationship guidance' },
    { id: 'friends', name: 'Friends Room', description: 'Social connections and friendship advice' },
    { id: 'general', name: 'General Room', description: 'General discussion and support' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#023336]">Welcome, Student</h1>
        <p className="text-[#023336]/80 mt-2">Access your support resources and connect with others</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chat Rooms Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-[#023336] mr-2" />
            <h2 className="text-xl font-semibold text-[#023336]">Chat Rooms</h2>
          </div>
          <div className="space-y-3">
            {chatRooms.map((room) => (
              <Link
                key={room.id}
                to={`/chat/${room.id}`}
                className="block w-full px-4 py-3 bg-white/30 rounded-lg text-[#023336] hover:bg-white/40 transition group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{room.name}</span>
                  <MessageCircle className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-sm text-[#023336]/70 mt-1">{room.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Consultations Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Video className="w-6 h-6 text-[#023336] mr-2" />
            <h2 className="text-xl font-semibold text-[#023336]">Consultations</h2>
          </div>
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/consultations/book')}
              className="w-full px-4 py-2 bg-[#023336] text-white rounded-lg hover:bg-[#023336]/90 transition"
            >
              Book New Session
            </button>
            <div className="bg-white/30 rounded-lg p-4">
              <p className="font-medium text-[#023336]">Next Session</p>
              <p className="text-sm text-[#023336]/80">No upcoming sessions</p>
            </div>
          </div>
        </div>

        {/* AI Support Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Bot className="w-6 h-6 text-[#023336] mr-2" />
            <h2 className="text-xl font-semibold text-[#023336]">AI Support</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-4 h-48 overflow-y-auto">
              <div className="space-y-2">
                <p className="text-sm text-[#023336]/80">How can I help you today?</p>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-white/50 rounded-lg focus:ring-2 focus:ring-[#4DA674] outline-none"
              />
              <button className="px-4 py-2 bg-[#023336] text-white rounded-lg hover:bg-[#023336]/90 transition">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}