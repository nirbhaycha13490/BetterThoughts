'use client';

import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

interface MorphingBlobProps {
  className?: string;
  delay?: number;
  size?: number;
  style?: CSSProperties;
}

export function MorphingBlob({ className = '', delay = 0, size = 200, style }: MorphingBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-10 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      animate={{
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

