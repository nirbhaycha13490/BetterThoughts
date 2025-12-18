export interface Disorder {
  id: string;
  slug: string;
  name: string;
  description: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  resources: string[];
  icon?: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'national' | 'local' | 'crisis';
  phone?: string;
  text?: string;
  website?: string;
  hours: string;
  description: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  featuredImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  story: string;
  topic: string;
  image?: string;
  location?: string;
}

export interface ForumCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  threadCount: number;
  postCount: number;
  icon?: string;
}

export interface ForumThread {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
  excerpt: string;
}

export interface ForumPost {
  id: string;
  threadId: string;
  author: string;
  content: string;
  date: string;
  replies?: ForumPost[];
}

export interface AppointmentSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  preferredContact: 'email' | 'phone';
}


