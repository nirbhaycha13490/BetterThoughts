import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllDisorders } from '@/lib/data/disorders';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Mental Health Disorders | BrighterThoughts',
  description: 'Learn about common mental health disorders including anxiety, depression, PTSD, bipolar disorder, and OCD. Understand symptoms, causes, and treatment options.',
};

export default function DisordersPage() {
  const disorders = getAllDisorders();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mental Health Disorders</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding mental health conditions is the first step toward getting help. Learn about common disorders, their symptoms, causes, and treatment options.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {disorders.map((disorder) => (
            <Card key={disorder.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="mb-2">{disorder.name}</CardTitle>
                <CardDescription className="line-clamp-3">{disorder.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Common Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {disorder.symptoms.slice(0, 3).map((symptom, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                      {disorder.symptoms.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{disorder.symptoms.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Link href={`/disorders/${disorder.slug}`}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Important Note</h2>
          <p className="text-muted-foreground">
            This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you or someone you know is experiencing symptoms of a mental health condition, please consult with a qualified mental health professional.
          </p>
        </div>
      </div>
    </div>
  );
}

