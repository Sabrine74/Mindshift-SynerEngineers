import React from 'react';
import { QrCode, Users, Calendar, MessageCircle } from 'lucide-react';
import { QuickAccessCard } from '../components/QuickAccessCard';
import { FeatureCard } from '../components/FeatureCard';

export function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-[#023336] leading-tight">
            Your Mental Well-being
            <span className="block text-[#4DA674]">Matters to Us</span>
          </h1>
          <p className="text-xl text-[#023336]/80">
            Connect with professional psychologists, join supportive communities, and access tools for your emotional well-being. We're here to help you thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-lg bg-[#023336] hover:bg-[#023336]/90 text-white font-medium transition text-lg">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-[#023336] hover:bg-[#023336]/10 text-[#023336] font-medium transition text-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-white/20 backdrop-blur-lg rounded-2xl -z-10"></div>
          <div className="grid grid-cols-2 gap-6 p-6">
            <QuickAccessCard
              Icon={QrCode}
              title="Mobile Access"
              description="Scan to access on your phone"
            />
            <QuickAccessCard
              Icon={Users}
              title="Peer Support"
              description="Connect with others"
            />
            <QuickAccessCard
              Icon={Calendar}
              title="Consultations"
              description="Book professional help"
            />
            <QuickAccessCard
              Icon={MessageCircle}
              title="Chat Support"
              description="24/7 emotional support"
            />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#023336]">How We Support You</h2>
          <p className="mt-4 text-lg text-[#023336]/80">Comprehensive support tailored to your needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            Icon={Users}
            title="Free Chat Rooms"
            description="Connect with peers facing similar challenges in topic-based chat rooms"
          />
          <FeatureCard
            Icon={Calendar}
            title="Professional Help"
            description="Schedule consultations with licensed psychologists"
          />
          <FeatureCard
            Icon={MessageCircle}
            title="AI Support"
            description="Access our emotional support chatbot anytime, anywhere"
          />
        </div>
      </div>
    </main>
  );
}