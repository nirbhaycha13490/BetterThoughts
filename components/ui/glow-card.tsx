'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function GlowCard({ children, delay = 0, className = '' }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1],
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      <Card className="h-full relative overflow-hidden border border-border/50 group bg-card hover:border-primary/40 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
        {/* Subtle glow on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
          whileHover={{
            background: 'linear-gradient(135deg, var(--primary)/10, var(--accent)/5)',
          }}
        />
        
        {/* Gentle shine effect with morphing */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Subtle border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--primary)/20, transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </motion.div>
  );
}

