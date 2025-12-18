import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, BookOpen, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BrighterThoughts</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive mental health resource and support platform
          </p>
        </div>

        <div className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            BrighterThoughts is dedicated to providing accessible, comprehensive mental health resources and support. We believe that everyone deserves access to information, support, and professional help for their mental health journey. Our mission is to reduce stigma, increase awareness, and connect individuals with the resources they need to thrive.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our platform provides a wide range of resources and tools to support mental health and wellness:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
              <CardTitle>Educational Resources</CardTitle>
              <CardDescription>
                Comprehensive information about mental health conditions, symptoms, and treatment options
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
              <CardTitle>Crisis Support</CardTitle>
              <CardDescription>
                Immediate access to crisis helplines and resources for those in need of urgent support
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
              <CardTitle>Community Support</CardTitle>
              <CardDescription>
                Safe, supportive forums where individuals can connect, share experiences, and find understanding
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
              <CardTitle>Professional Services</CardTitle>
              <CardDescription>
                Tools to connect with mental health professionals and schedule appointments
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="bg-muted mb-12">
          <CardHeader>
            <CardTitle>Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              BrighterThoughts is an informational resource and support platform. The information provided on this website is for educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-muted-foreground mb-4">
              Always seek the advice of qualified health providers with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
            <p className="text-muted-foreground">
              If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or your local emergency services immediately.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-6">
            Explore our resources, join our community, or reach out for support. We're here to help.
          </p>
        </div>
      </div>
    </div>
  );
}


