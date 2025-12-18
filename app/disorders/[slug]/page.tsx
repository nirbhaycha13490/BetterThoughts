import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Phone } from 'lucide-react';
import { getDisorderBySlug, getAllDisorders } from '@/lib/data/disorders';
import { getCrisisResources } from '@/lib/data/resources';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const disorders = getAllDisorders();
  return disorders.map((disorder) => ({
    slug: disorder.slug,
  }));
}

export default async function DisorderPage({ params }: PageProps) {
  const { slug } = await params;
  const disorder = getDisorderBySlug(slug);
  const crisisResources = getCrisisResources();

  if (!disorder) {
    notFound();
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/disorders" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
          Back to Disorders
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{disorder.name}</h1>
          <p className="text-lg text-muted-foreground">{disorder.description}</p>
        </div>

        <div className="prose prose-slate max-w-none mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{disorder.overview}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Symptoms</CardTitle>
              <CardDescription>Common signs and symptoms</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {disorder.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Possible Causes</CardTitle>
              <CardDescription>Factors that may contribute</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {disorder.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Treatment Options</CardTitle>
            <CardDescription>Evidence-based approaches to treatment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disorder.treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-start">
                  <Badge variant="outline" className="mr-3 mt-1">
                    {idx + 1}
                  </Badge>
                  <span>{treatment}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Organizations and resources for support</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {disorder.resources.map((resource, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Crisis Resources */}
        <Card className="bg-destructive/10 border-destructive/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-destructive" aria-hidden="true" />
              <CardTitle className="text-destructive">Need Immediate Help?</CardTitle>
            </div>
            <CardDescription>If you're in crisis, these resources are available 24/7</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {crisisResources.slice(0, 2).map((resource) => (
                <div key={resource.id} className="p-3 bg-background rounded-md">
                  <div className="font-semibold">{resource.name}</div>
                  {resource.phone && (
                    <div className="text-sm text-muted-foreground">
                      Phone: <a href={`tel:${resource.phone}`} className="text-primary hover:underline">{resource.phone}</a>
                    </div>
                  )}
                  {resource.text && (
                    <div className="text-sm text-muted-foreground">
                      Text: {resource.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex gap-4">
          <Link href="/appointments">
            <Button>Book an Appointment</Button>
          </Link>
          <Link href="/resources">
            <Button variant="outline">View All Resources</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


