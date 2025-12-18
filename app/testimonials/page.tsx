'use client';

import { useState, useMemo } from 'react';
import { TestimonialCard } from '@/components/features/TestimonialCard';
import { getAllTestimonials, getTestimonialsByTopic } from '@/lib/data/testimonials';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const topics = ['All', 'Anxiety', 'Depression', 'PTSD', 'Bipolar Disorder', 'OCD'];

export default function TestimonialsPage() {
  const allTestimonials = getAllTestimonials();
  const [selectedTopic, setSelectedTopic] = useState('All');

  const filteredTestimonials = useMemo(() => {
    if (selectedTopic === 'All') {
      return allTestimonials;
    }
    return getTestimonialsByTopic(selectedTopic);
  }, [selectedTopic, allTestimonials]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read inspiring stories from individuals who have overcome mental health challenges. Their journeys remind us that recovery is possible and that you are not alone.
          </p>
        </div>

        <Card className="mb-8 bg-primary/10">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              <strong>Note:</strong> These testimonials are shared with permission to inspire hope and reduce stigma. Every journey is unique, and recovery looks different for everyone.
            </p>
          </CardContent>
        </Card>

        <Tabs value={selectedTopic} onValueChange={setSelectedTopic} className="mb-8">
          <TabsList className="grid w-full grid-cols-6">
            {topics.map((topic) => (
              <TabsTrigger key={topic} value={topic}>
                {topic}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No testimonials found for this topic.
          </div>
        )}

        <Card className="mt-12 bg-muted">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Share Your Story</h2>
            <p className="text-muted-foreground mb-4">
              If you'd like to share your recovery story to inspire others, we'd love to hear from you. Your story can provide hope and encouragement to others on their journey.
            </p>
            <p className="text-sm text-muted-foreground">
              Please note that all submissions are reviewed and shared only with explicit permission. Your privacy and comfort are our top priorities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


