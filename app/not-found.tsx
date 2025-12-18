import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">404</CardTitle>
            <CardDescription className="text-lg">
              Page Not Found
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/">
                <Button>
                  <Home className="h-4 w-4 mr-2" aria-hidden="true" />
                  Return Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


