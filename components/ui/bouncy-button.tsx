'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ReactNode, ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button>;

interface BouncyButtonProps extends ButtonProps {
  children: ReactNode;
}

export function BouncyButton({ children, className = '', ...props }: BouncyButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        className={`rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

