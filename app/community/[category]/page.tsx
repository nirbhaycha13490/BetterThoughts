import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageSquare, Eye, Clock } from 'lucide-react';
import { getForumCategoryBySlug, getAllForumCategories, getThreadsByCategory } from '@/lib/data/forums';
import { formatDistanceToNow } from 'date-fns';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllForumCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function ForumCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getForumCategoryBySlug(categorySlug);
  const threads = category ? getThreadsByCategory(categorySlug) : [];

  if (!category) {
    notFound();
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/community" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
          Back to Forums
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">{category.icon}</div>
            <div>
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{category.threadCount} threads</span>
            <span>•</span>
            <span>{category.postCount} posts</span>
          </div>
        </div>

        <div className="space-y-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <Card key={thread.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Link href={`/community/${categorySlug}/${thread.id}`}>
                        <CardTitle className="hover:text-primary transition-colors mb-2">
                          {thread.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="line-clamp-2">{thread.excerpt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" aria-hidden="true" />
                        <span>{thread.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" aria-hidden="true" />
                        <span>{thread.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>
                          {formatDistanceToNow(new Date(thread.lastActivity), { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      by <span className="font-medium">{thread.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No threads yet in this category. Be the first to start a discussion!
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <Button>Start New Thread</Button>
        </div>
      </div>
    </div>
  );
}


