import { ForumCard } from '@/components/features/ForumCard';
import { getAllForumCategories } from '@/lib/data/forums';
import { MessageCircle, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function CommunityPage() {
  const categories = getAllForumCategories();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Forums</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with others who understand. Share experiences, find support, and build connections in our safe and supportive community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-bold">{categories.reduce((sum, cat) => sum + cat.threadCount, 0)}</div>
              <div className="text-sm text-muted-foreground">Total Threads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-bold">{categories.reduce((sum, cat) => sum + cat.postCount, 0)}</div>
              <div className="text-sm text-muted-foreground">Total Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-bold">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Active Forums</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Forum Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <ForumCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        <Card className="bg-muted">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Community Guidelines</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Be respectful and kind to all members</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Respect privacy and confidentiality</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>No medical advice - share experiences, not diagnoses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>This is a supportive space, not a substitute for professional help</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>If you're in crisis, please contact emergency services or a crisis line</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


