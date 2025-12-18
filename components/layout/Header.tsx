'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Disorders', href: '/disorders' },
  { name: 'Resources', href: '/resources' },
  { name: 'Appointments', href: '/appointments' },
  { name: 'Community', href: '/community' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Main navigation">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5 group" aria-label="BrighterThoughts home">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
            </motion.div>
            <motion.span
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              BrighterThoughts
            </motion.span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  initial={false}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/appointments">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button className="rounded-xl">Get Help</Button>
            </motion.div>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

