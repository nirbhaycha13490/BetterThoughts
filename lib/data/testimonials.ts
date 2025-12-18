import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex M.',
    story: 'I struggled with anxiety for years before I finally reached out for help. The support I received through therapy and connecting with others who understood what I was going through changed my life. Today, I have tools to manage my anxiety, and I\'m living a full, meaningful life. Recovery is possible, and you don\'t have to do it alone.',
    topic: 'Anxiety',
    location: 'Chicago, IL'
  },
  {
    id: '2',
    name: 'Jordan K.',
    story: 'Depression made me feel like I was in a dark tunnel with no way out. It took courage to ask for help, but it was the best decision I ever made. With the right treatment and support, I learned that my depression doesn\'t define me. I still have difficult days, but now I have hope and strategies to cope. There is light at the end of the tunnel.',
    topic: 'Depression',
    location: 'Austin, TX'
  },
  {
    id: '3',
    name: 'Sam R.',
    story: 'After experiencing trauma, I thought I would never feel normal again. PTSD affected every aspect of my life. Through trauma-focused therapy and the support of my community, I\'ve learned to process my experiences and reclaim my life. Healing is a journey, not a destination, and I\'m grateful for every step forward.',
    topic: 'PTSD',
    location: 'Seattle, WA'
  },
  {
    id: '4',
    name: 'Taylor L.',
    story: 'Living with bipolar disorder was challenging, especially before I received proper treatment. The mood swings were exhausting, and I felt out of control. With medication management and therapy, I\'ve found stability. I\'ve learned to recognize my triggers and use coping strategies. My condition is part of who I am, but it doesn\'t control me anymore.',
    topic: 'Bipolar Disorder',
    location: 'Boston, MA'
  },
  {
    id: '5',
    name: 'Morgan P.',
    story: 'OCD consumed my life for years. The intrusive thoughts and compulsive behaviors felt impossible to overcome. Through exposure and response prevention therapy, I\'ve learned to manage my symptoms. It wasn\'t easy, but the freedom I\'ve gained is worth every difficult moment. I want others to know that recovery from OCD is possible.',
    topic: 'OCD',
    location: 'Denver, CO'
  },
  {
    id: '6',
    name: 'Casey D.',
    story: 'I was ashamed of my mental health struggles and tried to hide them for years. The stigma I felt was almost as difficult as the symptoms themselves. When I finally opened up and sought help, I was surprised by the support I received. Breaking the silence was the first step in my recovery. You don\'t have to suffer in silence.',
    topic: 'Anxiety',
    location: 'Portland, OR'
  },
  {
    id: '7',
    name: 'Riley J.',
    story: 'Depression made me feel like I was a burden to everyone around me. I isolated myself and thought I was better off alone. But reaching out for help showed me that people care and want to support me. Therapy gave me tools to challenge negative thoughts, and medication helped stabilize my mood. I\'m learning to love myself again.',
    topic: 'Depression',
    location: 'Miami, FL'
  },
  {
    id: '8',
    name: 'Quinn H.',
    story: 'I never thought I would overcome my anxiety. It felt like a life sentence. But with the right combination of therapy, medication, and lifestyle changes, I\'ve made incredible progress. I still have anxiety, but now I have the skills to manage it. I can do things I never thought possible. Recovery isn\'t linear, but it\'s real.',
    topic: 'Anxiety',
    location: 'Nashville, TN'
  }
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialsByTopic(topic: string): Testimonial[] {
  return testimonials.filter(t => t.topic === topic);
}

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find(t => t.id === id);
}


