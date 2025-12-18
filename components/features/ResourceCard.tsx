import { Resource } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Globe, MessageSquare } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{resource.name}</CardTitle>
          <Badge
            variant={
              resource.type === 'crisis'
                ? 'destructive'
                : resource.type === 'national'
                ? 'default'
                : 'secondary'
            }
          >
            {resource.type}
          </Badge>
        </div>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {resource.phone && (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            <a
              href={`tel:${resource.phone}`}
              className="text-primary hover:underline font-medium"
            >
              {resource.phone}
            </a>
          </div>
        )}
        {resource.text && (
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-sm">{resource.text}</span>
          </div>
        )}
        {resource.website && (
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
            <a
              href={resource.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Visit Website
            </a>
          </div>
        )}
        <div className="text-sm text-muted-foreground">
          <strong>Hours:</strong> {resource.hours}
        </div>
        {resource.category && (
          <Badge variant="outline" className="text-xs">
            {resource.category}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}


