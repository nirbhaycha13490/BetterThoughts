import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/data/blog';
import { format } from 'date-fns';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const allPosts = getAllBlogPosts();

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Convert markdown-like content to HTML (simple version)
  const contentLines = post.content.split('\n');
  const renderContent = () => {
    return contentLines.map((line, idx) => {
      if (line.startsWith('# ')) {
        return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{line.substring(2)}</h2>;
      } else if (line.startsWith('## ')) {
        return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{line.substring(3)}</h3>;
      } else if (line.startsWith('### ')) {
        return <h4 key={idx} className="text-lg font-semibold mt-4 mb-2">{line.substring(4)}</h4>;
      } else if (line.startsWith('- ')) {
        return <li key={idx} className="ml-6 list-disc">{line.substring(2)}</li>;
      } else if (line.trim() === '') {
        return <br key={idx} />;
      } else {
        return <p key={idx} className="mb-4 leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
          Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-8">
            {renderContent()}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <Badge variant="secondary" className="mb-2">{relatedPost.category}</Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-4">
          <Link href="/blog">
            <Button variant="outline">View All Posts</Button>
          </Link>
          <Link href="/appointments">
            <Button>Get Help</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


