import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { StudentDashboard } from './pages/StudentDashboard';
import { PsychologistDashboard } from './pages/PsychologistDashboard';
import { ChatRoomPage } from './pages/ChatRoomPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-[#EAF8E7] via-[#C1E6BA] to-[#4DA674]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/psychologist" element={<PsychologistDashboard />} />
          <Route path="/chat/:roomId" element={<ChatRoomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}