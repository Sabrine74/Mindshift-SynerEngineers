import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl">
      <div className="bg-[#4DA674]/20 p-3 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-[#023336]" />
      </div>
      <h3 className="text-xl font-semibold text-[#023336] mt-4">{title}</h3>
      <p className="mt-2 text-[#023336]/80">{description}</p>
    </div>
  );
}