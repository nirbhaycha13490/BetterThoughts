import { Testimonial } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div>
            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
            {testimonial.location && (
              <CardDescription>{testimonial.location}</CardDescription>
            )}
          </div>
          <Badge variant="secondary">{testimonial.topic}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-4">{testimonial.story}</p>
        <Link href={`/testimonials/${testimonial.id}`}>
          <Button variant="outline" className="w-full">
            <Heart className="h-4 w-4 mr-2" aria-hidden="true" />
            Read Full Story
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}


