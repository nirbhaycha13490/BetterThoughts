'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppointmentForm } from '@/components/features/AppointmentForm';
import { CheckCircle2, Calendar, Clock, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Note: Metadata should be in a separate metadata export for client components
// For now, we'll rely on the root layout metadata

export default function AppointmentsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (data: any) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Card className="border-green-500">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-green-500" aria-hidden="true" />
              </div>
              <CardTitle className="text-2xl">Appointment Request Submitted!</CardTitle>
              <CardDescription>
                Thank you for reaching out. We've received your appointment request.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Appointment Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <strong>Date:</strong> {submittedData?.date ? new Date(submittedData.date).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <strong>Time:</strong> {submittedData?.time || 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {submittedData?.preferredContact === 'email' ? (
                      <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                    ) : (
                      <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                    )}
                    <span>
                      <strong>Contact:</strong> {submittedData?.preferredContact === 'email' ? submittedData?.email : submittedData?.phone}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>What happens next?</strong>
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Our team will review your request within 24 hours</li>
                  <li>We'll contact you via your preferred method to confirm your appointment</li>
                  <li>You'll receive a confirmation email with appointment details</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="flex-1">
                  Book Another Appointment
                </Button>
                <Link href="/" className="flex-1">
                  <Button className="w-full">Return Home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule an online counseling appointment with a mental health professional. We're here to help you on your journey to wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Request Form</CardTitle>
                <CardDescription>
                  Please fill out the form below to request an appointment. All information is confidential.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AppointmentForm onSubmit={handleSubmit} />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Your first appointment will be a consultation to understand your needs and discuss treatment options.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Confidential & Safe</h3>
                  <p className="text-sm text-muted-foreground">
                    All sessions are confidential and conducted in a safe, supportive environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer flexible scheduling to accommodate your needs, including evening and weekend appointments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're experiencing a mental health crisis, please contact:
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>988 Suicide & Crisis Lifeline</strong>
                    <div className="text-muted-foreground">Call or text 988</div>
                  </div>
                  <div>
                    <strong>Crisis Text Line</strong>
                    <div className="text-muted-foreground">Text HOME to 741741</div>
                  </div>
                </div>
                <Link href="/resources" className="mt-4 block">
                  <Button variant="outline" className="w-full">View All Resources</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

