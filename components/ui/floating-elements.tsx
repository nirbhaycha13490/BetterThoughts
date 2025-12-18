'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating hearts */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0.1,
          }}
          animate={{
            y: [null, -30, 0],
            x: [null, Math.random() * 50 - 25, null],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          <Heart className="h-6 w-6 text-primary/20" />
        </motion.div>
      ))}

      {/* Floating sparkles */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0.15,
          }}
          animate={{
            y: [null, -40, 0],
            x: [null, Math.random() * 40 - 20, null],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="h-4 w-4 text-accent/30" />
        </motion.div>
      ))}
    </div>
  );
}

