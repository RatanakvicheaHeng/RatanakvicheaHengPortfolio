import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
  hoverable?: boolean;
  specular?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  strong = false,
  hoverable = false,
  specular = true,
  onClick,
}: GlassCardProps) {
  const base = strong ? 'glass-strong' : 'glass';
  const hover = hoverable ? 'glass-hover cursor-pointer' : '';
  const spec = specular ? 'glass-specular' : '';

  return (
    <div
      className={`rounded-2xl ${base} ${hover} ${spec} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
