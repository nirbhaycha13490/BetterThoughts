'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border-2 hover:border-primary/20">
        {children}
      </Card>
    </motion.div>
  );
}


