import { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
        </Link>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" aria-hidden="true" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <Button variant="outline" className="w-full">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
}


