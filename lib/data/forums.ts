import { ForumCategory, ForumThread, ForumPost } from '@/types';

export const forumCategories: ForumCategory[] = [
  {
    id: '1',
    slug: 'general-support',
    name: 'General Support',
    description: 'A safe space for general discussions, questions, and support about mental health.',
    threadCount: 45,
    postCount: 320,
    icon: '💬'
  },
  {
    id: '2',
    slug: 'anxiety',
    name: 'Anxiety Support',
    description: 'Connect with others who understand anxiety disorders. Share experiences, coping strategies, and support.',
    threadCount: 38,
    postCount: 285,
    icon: '🌊'
  },
  {
    id: '3',
    slug: 'depression',
    name: 'Depression Support',
    description: 'A supportive community for those dealing with depression. You are not alone.',
    threadCount: 42,
    postCount: 310,
    icon: '☀️'
  },
  {
    id: '4',
    slug: 'ptsd',
    name: 'PTSD & Trauma',
    description: 'Support for those who have experienced trauma. A safe space to share and heal together.',
    threadCount: 28,
    postCount: 195,
    icon: '🕊️'
  },
  {
    id: '5',
    slug: 'bipolar',
    name: 'Bipolar Disorder',
    description: 'Connect with others managing bipolar disorder. Share experiences and support each other.',
    threadCount: 22,
    postCount: 165,
    icon: '⚡'
  },
  {
    id: '6',
    slug: 'ocd',
    name: 'OCD Support',
    description: 'A community for those living with OCD. Share strategies, experiences, and encouragement.',
    threadCount: 19,
    postCount: 142,
    icon: '🔄'
  },
  {
    id: '7',
    slug: 'recovery',
    name: 'Recovery & Wellness',
    description: 'Celebrate progress, share recovery stories, and discuss wellness strategies.',
    threadCount: 35,
    postCount: 250,
    icon: '🌟'
  },
  {
    id: '8',
    slug: 'family-friends',
    name: 'Family & Friends',
    description: 'A space for family members and friends to support each other and learn how to help loved ones.',
    threadCount: 31,
    postCount: 220,
    icon: '👨‍👩‍👧‍👦'
  }
];

export const forumThreads: ForumThread[] = [
  {
    id: '1',
    title: 'First time reaching out - feeling overwhelmed',
    author: 'NewMember2024',
    replies: 12,
    views: 145,
    lastActivity: '2024-02-20',
    category: 'general-support',
    excerpt: 'I\'ve been struggling silently for a while and finally decided to reach out. It\'s scary but also a relief to know I\'m not alone.'
  },
  {
    id: '2',
    title: 'Coping strategies that actually work',
    author: 'WellnessSeeker',
    replies: 28,
    views: 342,
    lastActivity: '2024-02-19',
    category: 'anxiety',
    excerpt: 'What coping strategies have helped you manage anxiety? Let\'s share what works for us.'
  },
  {
    id: '3',
    title: 'Having a difficult day - need support',
    author: 'HopefulHeart',
    replies: 15,
    views: 198,
    lastActivity: '2024-02-20',
    category: 'depression',
    excerpt: 'Today has been really hard. Just need to know someone understands.'
  },
  {
    id: '4',
    title: 'Therapy progress - celebrating small wins',
    author: 'RecoveryJourney',
    replies: 22,
    views: 267,
    lastActivity: '2024-02-18',
    category: 'recovery',
    excerpt: 'Had a breakthrough in therapy this week. Wanted to share and encourage others that progress is possible.'
  },
  {
    id: '5',
    title: 'How to support a friend with mental health challenges',
    author: 'CaringFriend',
    replies: 18,
    views: 223,
    lastActivity: '2024-02-19',
    category: 'family-friends',
    excerpt: 'My best friend is struggling and I want to help but don\'t know how. Any advice?'
  },
  {
    id: '6',
    title: 'Medication questions and experiences',
    author: 'SeekingAnswers',
    replies: 31,
    views: 389,
    lastActivity: '2024-02-20',
    category: 'general-support',
    excerpt: 'Considering medication but have concerns. Would love to hear others\' experiences.'
  },
  {
    id: '7',
    title: 'Panic attack management techniques',
    author: 'CalmSeeker',
    replies: 19,
    views: 245,
    lastActivity: '2024-02-17',
    category: 'anxiety',
    excerpt: 'What techniques help you during a panic attack? Looking for practical advice.'
  },
  {
    id: '8',
    title: 'Self-care ideas that don\'t feel like work',
    author: 'TiredButTrying',
    replies: 24,
    views: 298,
    lastActivity: '2024-02-19',
    category: 'recovery',
    excerpt: 'Struggling to practice self-care when I\'m already exhausted. Need low-energy self-care ideas.'
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: '1',
    threadId: '1',
    author: 'NewMember2024',
    content: 'I\'ve been struggling silently for a while and finally decided to reach out. It\'s scary but also a relief to know I\'m not alone. I don\'t really know where to start, but I\'m here.',
    date: '2024-02-15',
    replies: [
      {
        id: '2',
        threadId: '1',
        author: 'SupportiveSoul',
        content: 'Welcome! It takes courage to reach out. You\'re in a safe space here. We\'re all here to support each other.',
        date: '2024-02-15'
      },
      {
        id: '3',
        threadId: '1',
        author: 'UnderstandingHeart',
        content: 'You\'re definitely not alone. Many of us started right where you are. Take your time, and know that this community is here for you.',
        date: '2024-02-16'
      }
    ]
  },
  {
    id: '4',
    threadId: '2',
    author: 'WellnessSeeker',
    content: 'What coping strategies have helped you manage anxiety? Let\'s share what works for us. I\'ve found that deep breathing exercises and going for walks help me when I feel anxious.',
    date: '2024-02-10',
    replies: [
      {
        id: '5',
        threadId: '2',
        author: 'AnxietyWarrior',
        content: 'Grounding techniques work really well for me. The 5-4-3-2-1 method helps me stay present when anxiety gets overwhelming.',
        date: '2024-02-11'
      },
      {
        id: '6',
        threadId: '2',
        author: 'CalmMind',
        content: 'I use a combination of things: meditation in the morning, regular exercise, and keeping a worry journal. It\'s not perfect, but it helps.',
        date: '2024-02-12'
      }
    ]
  }
];

export function getForumCategoryBySlug(slug: string): ForumCategory | undefined {
  return forumCategories.find(cat => cat.slug === slug);
}

export function getAllForumCategories(): ForumCategory[] {
  return forumCategories;
}

export function getThreadsByCategory(categorySlug: string): ForumThread[] {
  return forumThreads.filter(thread => thread.category === categorySlug);
}

export function getThreadById(id: string): ForumThread | undefined {
  return forumThreads.find(thread => thread.id === id);
}

export function getPostsByThreadId(threadId: string): ForumPost[] {
  return forumPosts.filter(post => post.threadId === threadId);
}


