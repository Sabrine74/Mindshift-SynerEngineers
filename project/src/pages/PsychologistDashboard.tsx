import React from 'react';
import { Calendar, Users, FileText, Video } from 'lucide-react';

export function PsychologistDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#023336]">Welcome, Dr.</h1>
        <p className="text-[#023336]/80 mt-2">Manage your sessions and support resources</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Schedule Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-[#023336] mr-2" />
            <h2 className="text-xl font-semibold text-[#023336]">Schedule</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-[#023336] text-white rounded-lg hover:bg-[#023336]/90 transition">
              Manage Availability
            </button>
            <div className="bg-white/30 rounded-lg p-4">
              <p className="font-medium text-[#023336]">Today's Sessions</p>
              <p className="text-sm text-[#023336]/80">No sessions scheduled</p>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-[#023336] mr-2" />
            <h2 className="text-xl font-semibold text-[#023336]">Topics</h2>
          </div>
          <div className="space-y-3">
            {['Studies', 'Family', 'Friends', 'General'].map((topic) => (
              <button
                key={topic}
                className="w-full px-4 py-2 bg-white/30 rounded-lg text-[#023336] hover:bg-white/40 transition flex justify-between items-center"
              >
                <span>{topic}</span>
                <span className="text-sm bg-white/30 px-2 py-1 rounded">Manage</span>
              </button>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Video className="w-6 h-6 text-[#023336] mr-2" />
            <h2 className="text-xl font-semibold text-[#023336]">Resources</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-[#023336] text-white rounded-lg hover:bg-[#023336]/90 transition">
              Upload Video
            </button>
            <button className="w-full px-4 py-2 bg-white/30 text-[#023336] rounded-lg hover:bg-white/40 transition">
              Create Questionnaire
            </button>
            <div className="bg-white/30 rounded-lg p-4">
              <p className="font-medium text-[#023336]">Recent Uploads</p>
              <p className="text-sm text-[#023336]/80">No recent uploads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}