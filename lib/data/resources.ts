import { Resource } from '@/types';

export const resources: Resource[] = [
  {
    id: '1',
    name: '988 Suicide & Crisis Lifeline',
    type: 'crisis',
    phone: '988',
    text: '988',
    website: 'https://988lifeline.org',
    hours: '24/7',
    description: 'Free, confidential support for people in distress, prevention and crisis resources for you or your loved ones.',
    category: 'Crisis'
  },
  {
    id: '2',
    name: 'Crisis Text Line',
    type: 'crisis',
    text: 'HOME to 741741',
    website: 'https://www.crisistextline.org',
    hours: '24/7',
    description: 'Free, 24/7 crisis support via text message. Text HOME to 741741 from anywhere in the US.',
    category: 'Crisis'
  },
  {
    id: '3',
    name: 'National Alliance on Mental Illness (NAMI)',
    type: 'national',
    phone: '1-800-950-NAMI (6264)',
    website: 'https://www.nami.org',
    hours: 'Monday-Friday, 10am-10pm ET',
    description: 'Provides advocacy, education, support and public awareness so that all individuals and families affected by mental illness can build better lives.',
    category: 'Support'
  },
  {
    id: '4',
    name: 'Substance Abuse and Mental Health Services Administration (SAMHSA)',
    type: 'national',
    phone: '1-800-662-HELP (4357)',
    website: 'https://www.samhsa.gov',
    hours: '24/7',
    description: 'National helpline providing free, confidential treatment referral and information services for individuals and families facing mental and/or substance use disorders.',
    category: 'Treatment'
  },
  {
    id: '5',
    name: 'National Institute of Mental Health (NIMH)',
    type: 'national',
    website: 'https://www.nimh.nih.gov',
    hours: 'Monday-Friday, 8:30am-5pm ET',
    description: 'The lead federal agency for research on mental disorders, providing information and resources about mental health conditions.',
    category: 'Information'
  },
  {
    id: '6',
    name: 'Anxiety and Depression Association of America (ADAA)',
    type: 'national',
    website: 'https://adaa.org',
    hours: 'Monday-Friday, 9am-5pm ET',
    description: 'Dedicated to preventing, treating, and curing anxiety, depression, OCD, PTSD, and co-occurring disorders through education, practice, and research.',
    category: 'Support'
  },
  {
    id: '7',
    name: 'Depression and Bipolar Support Alliance (DBSA)',
    type: 'national',
    website: 'https://www.dbsalliance.org',
    hours: 'Monday-Friday, 9am-5pm CT',
    description: 'Provides hope, help, support, and education to improve the lives of people living with mood disorders.',
    category: 'Support'
  },
  {
    id: '8',
    name: 'Veterans Crisis Line',
    type: 'crisis',
    phone: '1-800-273-8255',
    text: '838255',
    website: 'https://www.veteranscrisisline.net',
    hours: '24/7',
    description: 'Free, confidential support for Veterans and their loved ones. Press 1 after connecting.',
    category: 'Crisis'
  },
  {
    id: '9',
    name: 'The Trevor Project',
    type: 'crisis',
    phone: '1-866-488-7386',
    text: 'START to 678678',
    website: 'https://www.thetrevorproject.org',
    hours: '24/7',
    description: 'Crisis intervention and suicide prevention services for LGBTQ+ young people under 25.',
    category: 'Crisis'
  },
  {
    id: '10',
    name: 'National Eating Disorders Association (NEDA)',
    type: 'national',
    phone: '1-800-931-2237',
    website: 'https://www.nationaleatingdisorders.org',
    hours: 'Monday-Thursday, 11am-9pm ET; Friday, 11am-5pm ET',
    description: 'Support, resources, and treatment options for individuals and families affected by eating disorders.',
    category: 'Support'
  },
  {
    id: '11',
    name: 'Mental Health America (MHA)',
    type: 'national',
    website: 'https://www.mhanational.org',
    hours: 'Monday-Friday, 9am-5pm ET',
    description: 'Community-based nonprofit dedicated to addressing the needs of those living with mental illness and promoting overall mental health.',
    category: 'Support'
  },
  {
    id: '12',
    name: 'International OCD Foundation',
    type: 'national',
    website: 'https://iocdf.org',
    hours: 'Monday-Friday, 9am-5pm ET',
    description: 'Resources and support for individuals with OCD and related disorders, their families, and treatment providers.',
    category: 'Support'
  }
];

export function getResourcesByType(type: 'national' | 'local' | 'crisis'): Resource[] {
  return resources.filter(r => r.type === type);
}

export function getAllResources(): Resource[] {
  return resources;
}

export function getCrisisResources(): Resource[] {
  return resources.filter(r => r.type === 'crisis');
}


