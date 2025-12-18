import { ForumCategory } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users } from 'lucide-react';

interface ForumCardProps {
  category: ForumCategory;
}

export function ForumCard({ category }: ForumCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="text-3xl">{category.icon}</div>
          <Badge variant="secondary">{category.threadCount} threads</Badge>
        </div>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span>{category.postCount} posts</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>Active community</span>
          </div>
        </div>
        <Link href={`/community/${category.slug}`}>
          <Button className="w-full">View Forum</Button>
        </Link>
      </CardContent>
    </Card>
  );
}


