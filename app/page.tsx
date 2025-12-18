'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BouncyButton } from '@/components/ui/bouncy-button';
import { GlowCard } from '@/components/ui/glow-card';
import { ParticleBackground } from '@/components/ui/particle-background';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen, Users, Calendar, FileText, Phone, Sparkles } from 'lucide-react';
import { getRecentBlogPosts } from '@/lib/data/blog';
import { MorphingBlob } from '@/components/ui/morphing-blob';

import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HomePage() {
  const recentPosts = getRecentBlogPosts(3);
  const features = [
    {
      icon: BookOpen,
      title: 'Mental Health Information',
      description: 'Learn about anxiety, depression, PTSD, and other mental health conditions',
      href: '/disorders',
      buttonText: 'Explore Disorders',
    },
    {
      icon: Phone,
      title: 'Resources & Helplines',
      description: 'Access national and local mental health resources and crisis support',
      href: '/resources',
      buttonText: 'View Resources',
    },
    {
      icon: Calendar,
      title: 'Book an Appointment',
      description: 'Schedule an online counseling appointment with a mental health professional',
      href: '/appointments',
      buttonText: 'Schedule Now',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others in our supportive community forums',
      href: '/community',
      buttonText: 'Join Community',
    },
    {
      icon: FileText,
      title: 'Educational Blog',
      description: 'Read informative articles about mental health and wellness',
      href: '/blog',
      buttonText: 'Read Blog',
    },
    {
      icon: Heart,
      title: 'Success Stories',
      description: 'Read inspiring testimonials from those who\'ve overcome mental health challenges',
      href: '/testimonials',
      buttonText: 'View Stories',
    },
  ];

  const stats = [
    { value: '1 in 5', label: 'Adults experience mental illness' },
    { value: '50%', label: 'Of mental illness begins by age 14' },
    { value: '80%', label: 'Can be effectively treated' },
    { value: '24/7', label: 'Crisis support available' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-background">
      {/* Hero Section - Calming and Welcoming */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-primary/3 to-background py-28 px-4 sm:px-6 lg:px-8 min-h-[650px] flex items-center">
        {/* Subtle background elements with morphing shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <MorphingBlob
              key={i}
              size={250 + i * 100}
              delay={i * 2}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
                background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
              }}
            />
          ))}
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 2,
              }}
            >
              <Heart className="h-8 w-8 text-primary/20" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Gentle logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.08, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <Heart className="h-14 w-14 text-primary relative z-10 drop-shadow-lg" aria-hidden="true" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="drop-shadow-lg"
              >
                <Sparkles className="h-6 w-6 text-accent" aria-hidden="true" />
              </motion.div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 text-foreground"
            >
              Welcome to{' '}
              <span className="text-primary font-medium">
                BrighterThoughts
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl sm:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-light"
            >
              Your comprehensive mental health resource hub. Find support, information, and hope on your journey to wellness.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/appointments">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <BouncyButton 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-2xl font-medium relative z-10 shadow-lg shadow-primary/30"
                >
                  Get Help Now
                </BouncyButton>
              </motion.div>
              </Link>
              <Link href="/resources">
                <BouncyButton 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 rounded-2xl font-medium border-2 hover:bg-primary/5 shadow-sm hover:shadow-md"
                >
                  View Resources
                </BouncyButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Crisis Resources Banner - Gentle but Clear */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-destructive/5 border-y border-destructive/20 py-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <Phone className="h-5 w-5 text-destructive" aria-hidden="true" />
            <p className="text-base font-medium text-foreground">
              In crisis? Call <a href="tel:988" className="text-destructive underline font-semibold">988</a> or text <strong>HOME</strong> to <strong>741741</strong>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section - Clean and Comfortable */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
        {/* Subtle pattern overlay with gentle animation */}
        <motion.div
          className="absolute inset-0 opacity-[0.015]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </motion.div>
        
        {/* Gentle morphing accent */}
        <MorphingBlob
          size={400}
          delay={0}
          className="absolute -right-20 top-1/4 bg-primary/5"
        />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold text-center mb-4 text-foreground"
          >
            How We Can Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-lg text-muted-foreground mb-16 font-light"
          >
            Everything you need in one place
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <GlowCard delay={index * 0.1}>
                    <CardHeader className="pb-4">
                      <motion.div
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.4 }}
                        className="inline-block mb-4 p-4 rounded-xl bg-primary/10 relative group/icon shadow-md shadow-primary/10"
                      >
                        <motion.div
                          className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        <motion.div
                          whileHover={{
                            filter: 'brightness(1.2)',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="h-8 w-8 text-primary relative z-10" aria-hidden="true" />
                        </motion.div>
                      </motion.div>
                      <CardTitle className="text-xl mb-2 font-semibold">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed font-light">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={feature.href}>
                        <motion.div
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <BouncyButton 
                            variant="outline" 
                            className="w-full rounded-xl border-2 font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors shadow-sm hover:shadow-md"
                          >
                            {feature.buttonText}
                          </BouncyButton>
                        </motion.div>
                      </Link>
                    </CardContent>
                  </GlowCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section - Soothing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Subtle morphing accent */}
        <MorphingBlob
          size={300}
          delay={1}
          className="absolute left-10 bottom-20 bg-accent/5"
        />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/40 hover:bg-muted/40 transition-all duration-300 group relative overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  className="text-4xl md:text-5xl font-semibold text-primary mb-3 relative z-10"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base text-muted-foreground font-light leading-relaxed relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section - Clean */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-4xl font-semibold text-foreground">Latest from Our Blog</h2>
            <Link href="/blog">
              <BouncyButton variant="ghost" className="text-base font-medium">
                View All
              </BouncyButton>
            </Link>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {recentPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <GlowCard delay={index * 0.1}>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl mb-2 font-semibold">{post.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed font-light">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6 font-light">
                      <span>{post.author}</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <BouncyButton variant="outline" className="w-full rounded-xl border-2 font-medium shadow-sm hover:shadow-md">
                        Read More
                      </BouncyButton>
                    </Link>
                  </CardContent>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Warm and Inviting */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/8 via-primary/4 to-background relative overflow-hidden">
        {/* Morphing background elements */}
        <div className="absolute inset-0">
          {[...Array(2)].map((_, i) => (
            <MorphingBlob
              key={i}
              size={400 + i * 150}
              delay={i * 3}
              className="absolute"
              style={{
                left: `${i * 40}%`,
                top: `${i * 30}%`,
                background: 'var(--primary)',
                opacity: 0.08,
              }}
            />
          ))}
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold mb-6 text-foreground"
          >
            You Don't Have to Face This Alone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 font-light leading-relaxed"
          >
            Whether you're seeking information, support, or professional help, we're here for you every step of the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/appointments">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <BouncyButton 
                  size="lg" 
                  className="text-lg px-10 py-7 rounded-2xl font-medium relative z-10 shadow-lg shadow-primary/30"
                >
                  Book an Appointment
                </BouncyButton>
              </motion.div>
            </Link>
            <Link href="/community">
              <BouncyButton 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 rounded-2xl font-medium border-2 hover:bg-primary/5 hover:border-primary/40 shadow-sm hover:shadow-lg"
              >
                Join Our Community
              </BouncyButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
