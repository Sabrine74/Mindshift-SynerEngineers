import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'psychologist'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white/20 backdrop-blur-md rounded-xl">
      <h2 className="text-3xl font-bold text-[#023336] mb-6">Create Account</h2>
      <div className="flex gap-4 mb-6">
        <button
          className={`flex-1 py-2 rounded-lg transition ${
            role === 'student'
              ? 'bg-[#023336] text-white'
              : 'bg-white/30 text-[#023336]'
          }`}
          onClick={() => setRole('student')}
        >
          Student
        </button>
        <button
          className={`flex-1 py-2 rounded-lg transition ${
            role === 'psychologist'
              ? 'bg-[#023336] text-white'
              : 'bg-white/30 text-[#023336]'
          }`}
          onClick={() => setRole('psychologist')}
        >
          Psychologist
        </button>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#023336]">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white/50 border border-[#023336]/20 rounded-lg focus:ring-2 focus:ring-[#4DA674]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#023336]">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-white/50 border border-[#023336]/20 rounded-lg focus:ring-2 focus:ring-[#4DA674]"
            required
          />
        </div>
        {role === 'psychologist' && (
          <div>
            <label htmlFor="license" className="block text-sm font-medium text-[#023336]">
              License Number
            </label>
            <input
              type="text"
              id="license"
              className="mt-1 block w-full px-3 py-2 bg-white/50 border border-[#023336]/20 rounded-lg focus:ring-2 focus:ring-[#4DA674]"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#023336]">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-white/50 border border-[#023336]/20 rounded-lg focus:ring-2 focus:ring-[#4DA674]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#023336] text-white rounded-lg hover:bg-[#023336]/90 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-[#023336]/80">
        Already have an account?{' '}
        <Link to="/signin" className="text-[#4DA674] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}