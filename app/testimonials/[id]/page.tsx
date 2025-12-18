import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Heart, MapPin } from 'lucide-react';
import { getTestimonialById, getAllTestimonials, getTestimonialsByTopic } from '@/lib/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const testimonials = getAllTestimonials();
  return testimonials.map((testimonial) => ({
    id: testimonial.id,
  }));
}

export default async function TestimonialPage({ params }: PageProps) {
  const { id } = await params;
  const testimonial = getTestimonialById(id);
  const allTestimonials = getAllTestimonials();

  if (!testimonial) {
    notFound();
  }

  // Get related testimonials (same topic, excluding current)
  const relatedTestimonials = getTestimonialsByTopic(testimonial.topic)
    .filter(t => t.id !== testimonial.id)
    .slice(0, 3);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/testimonials" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
          Back to Testimonials
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{testimonial.topic}</Badge>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              <h1 className="text-4xl font-bold">{testimonial.name}'s Story</h1>
            </div>
            {testimonial.location && (
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>{testimonial.location}</span>
              </div>
            )}
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed whitespace-pre-line">{testimonial.story}</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-primary/10 rounded-lg">
            <h2 className="text-xl font-bold mb-2">A Message of Hope</h2>
            <p className="text-muted-foreground">
              Stories like {testimonial.name}'s remind us that recovery is possible. If you're struggling with {testimonial.topic.toLowerCase()}, know that you're not alone and that help is available.
            </p>
          </div>
        </article>

        {relatedTestimonials.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">More Stories About {testimonial.topic}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTestimonials.map((related) => (
                <Link key={related.id} href={`/testimonials/${related.id}`}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <Badge variant="secondary" className="mb-2">{related.topic}</Badge>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                        {related.name}'s Story
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {related.story}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-4">
          <Link href="/testimonials">
            <Button variant="outline">View All Stories</Button>
          </Link>
          <Link href="/appointments">
            <Button>Get Help</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


