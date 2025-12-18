import Link from 'next/link';
import { Heart, Phone } from 'lucide-react';
import { getCrisisResources } from '@/lib/data/resources';

export function Footer() {
  const crisisResources = getCrisisResources();

  return (
    <footer className="bg-muted border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-lg font-bold">BrighterThoughts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A mental health awareness platform providing resources, support, and hope for those on their journey to wellness.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disorders" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mental Health Disorders
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources & Helplines
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-muted-foreground hover:text-foreground transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community Forums
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Crisis Resources</h3>
            <ul className="space-y-2 text-sm">
              {crisisResources.slice(0, 3).map((resource) => (
                <li key={resource.id}>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                    <div>
                      <div className="font-medium">{resource.name}</div>
                      {resource.phone && (
                        <div className="text-muted-foreground">{resource.phone}</div>
                      )}
                      {resource.text && (
                        <div className="text-muted-foreground">Text: {resource.text}</div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 space-y-4">
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-3 text-foreground">BPA Information</h3>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Chapter Name: Reedy High School BPA (Chapter 02-1308)</p>
              <p>Team Members: Saksham Shukla & Nirbhay Challa</p>
              <p>School: Reedy High School</p>
              <p>City, State: Frisco, TX</p>
              <p>Year: 2025</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} BrighterThoughts. This website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-xs text-center text-muted-foreground mt-2">
              If you are experiencing a mental health emergency, please call 988 or your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


