'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { BlogCard } from '@/components/features/BlogCard';
import { getAllBlogPosts, getBlogPostsByCategory } from '@/lib/data/blog';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const categories = ['All', 'Anxiety', 'Depression', 'Awareness', 'Wellness', 'Support'];

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === 'All' 
      ? allPosts 
      : getBlogPostsByCategory(selectedCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, selectedCategory, allPosts]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mental Health Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational articles, coping strategies, and insights to support your mental health journey.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Search blog posts"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No blog posts found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}


