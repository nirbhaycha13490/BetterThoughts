'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResourceCard } from '@/components/features/ResourceCard';
import { getAllResources, getResourcesByType, getCrisisResources } from '@/lib/data/resources';
import { Search, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Note: Metadata should be in a separate metadata export for client components
// For now, we'll rely on the root layout metadata

export default function ResourcesPage() {
  const allResources = getAllResources();
  const crisisResources = getCrisisResources();
  const nationalResources = getResourcesByType('national');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    if (!searchQuery) return allResources;
    const query = searchQuery.toLowerCase();
    return allResources.filter(
      (resource) =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category?.toLowerCase().includes(query)
    );
  }, [searchQuery, allResources]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the support you need. Access national helplines, local resources, and crisis support services.
          </p>
        </div>

        {/* Crisis Resources Banner */}
        <Card className="mb-8 bg-destructive/10 border-destructive/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold text-destructive mb-2">Crisis Support Available 24/7</h2>
                <p className="text-muted-foreground mb-4">
                  If you or someone you know is in immediate danger or experiencing a mental health crisis, help is available right now.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {crisisResources.slice(0, 2).map((resource) => (
                    <div key={resource.id} className="p-4 bg-background rounded-md">
                      <div className="font-semibold mb-2">{resource.name}</div>
                      {resource.phone && (
                        <div className="text-sm">
                          <a
                            href={`tel:${resource.phone}`}
                            className="text-primary hover:underline font-medium"
                          >
                            {resource.phone}
                          </a>
                        </div>
                      )}
                      {resource.text && (
                        <div className="text-sm text-muted-foreground">
                          Text: {resource.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Search resources"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="crisis">Crisis</TabsTrigger>
            <TabsTrigger value="national">National</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
            {filteredResources.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No resources found matching your search.
              </div>
            )}
          </TabsContent>

          <TabsContent value="crisis" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crisisResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="national" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="local" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              Local resources are being added. Please check back soon or contact national resources for assistance.
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Important Information</h2>
          <p className="text-muted-foreground mb-2">
            These resources are provided for informational purposes. If you are experiencing a mental health emergency, please call 988 or your local emergency services immediately.
          </p>
          <p className="text-muted-foreground">
            This website does not provide medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions regarding mental health conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

