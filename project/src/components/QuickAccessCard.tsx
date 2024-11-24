import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickAccessCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function QuickAccessCard({ Icon, title, description }: QuickAccessCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white/30 rounded-xl">
      <Icon className="w-12 h-12 text-[#023336] mb-4" />
      <h3 className="text-lg font-semibold text-[#023336]">{title}</h3>
      <p className="text-center text-[#023336]/70 mt-2">{description}</p>
    </div>
  );
}