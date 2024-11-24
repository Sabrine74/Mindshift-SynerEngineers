import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-[#023336]" />
            <span className="text-2xl font-bold text-[#023336]">Asma3ni</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/signin"
              className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-[#023336] font-medium transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-[#023336] hover:bg-[#023336]/90 text-white font-medium transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}