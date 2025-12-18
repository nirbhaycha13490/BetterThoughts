import { Disorder } from '@/types';

export const disorders: Disorder[] = [
  {
    id: '1',
    slug: 'anxiety',
    name: 'Anxiety Disorders',
    description: 'Anxiety disorders involve excessive worry, fear, or nervousness that interferes with daily life.',
    overview: 'Anxiety disorders are the most common mental health condition, affecting millions of people worldwide. They involve persistent, excessive worry or fear about everyday situations. While anxiety is a normal response to stress, anxiety disorders involve anxiety that is disproportionate to the situation and interferes with daily functioning.',
    symptoms: [
      'Excessive worry or fear',
      'Restlessness or feeling on edge',
      'Difficulty concentrating',
      'Sleep disturbances',
      'Physical symptoms (rapid heartbeat, sweating, trembling)',
      'Avoidance of anxiety-provoking situations',
      'Panic attacks'
    ],
    causes: [
      'Genetic factors and family history',
      'Brain chemistry imbalances',
      'Environmental stressors',
      'Traumatic experiences',
      'Medical conditions',
      'Substance use'
    ],
    treatments: [
      'Cognitive Behavioral Therapy (CBT)',
      'Medication (antidepressants, anti-anxiety medications)',
      'Exposure therapy',
      'Relaxation techniques (meditation, deep breathing)',
      'Lifestyle changes (exercise, sleep, diet)',
      'Support groups'
    ],
    resources: [
      'Anxiety and Depression Association of America (ADAA)',
      'National Institute of Mental Health (NIMH)',
      '988 Suicide & Crisis Lifeline',
      'Crisis Text Line: Text HOME to 741741'
    ]
  },
  {
    id: '2',
    slug: 'depression',
    name: 'Depression',
    description: 'Depression is a mood disorder that causes persistent feelings of sadness, hopelessness, and loss of interest.',
    overview: 'Depression, also known as major depressive disorder, is a serious mental health condition that affects how you feel, think, and handle daily activities. It\'s more than just feeling sad or going through a rough patch—it\'s a persistent condition that requires understanding and treatment.',
    symptoms: [
      'Persistent sad, anxious, or "empty" mood',
      'Feelings of hopelessness or pessimism',
      'Irritability',
      'Loss of interest in hobbies or activities',
      'Fatigue and decreased energy',
      'Difficulty concentrating or making decisions',
      'Changes in appetite or weight',
      'Sleep disturbances',
      'Thoughts of death or suicide'
    ],
    causes: [
      'Biological factors (brain chemistry, genetics)',
      'Hormonal changes',
      'Environmental factors (trauma, loss)',
      'Medical conditions',
      'Substance use',
      'Personality traits'
    ],
    treatments: [
      'Psychotherapy (CBT, interpersonal therapy)',
      'Antidepressant medications',
      'Electroconvulsive therapy (ECT) for severe cases',
      'Light therapy for seasonal depression',
      'Exercise and physical activity',
      'Support groups and peer support',
      'Lifestyle modifications'
    ],
    resources: [
      'National Alliance on Mental Illness (NAMI)',
      'Depression and Bipolar Support Alliance',
      '988 Suicide & Crisis Lifeline',
      'Crisis Text Line: Text HOME to 741741'
    ]
  },
  {
    id: '3',
    slug: 'ptsd',
    name: 'Post-Traumatic Stress Disorder (PTSD)',
    description: 'PTSD is a mental health condition triggered by experiencing or witnessing a traumatic event.',
    overview: 'Post-Traumatic Stress Disorder develops in some people who have experienced a shocking, scary, or dangerous event. While it\'s natural to feel afraid during and after a traumatic situation, people with PTSD continue to experience intense, disturbing thoughts and feelings related to their experience long after the event has ended.',
    symptoms: [
      'Intrusive memories or flashbacks',
      'Avoidance of trauma reminders',
      'Negative changes in thinking and mood',
      'Changes in physical and emotional reactions',
      'Hypervigilance',
      'Sleep disturbances and nightmares',
      'Emotional numbness'
    ],
    causes: [
      'Experiencing or witnessing trauma',
      'Combat exposure',
      'Physical or sexual assault',
      'Accidents or natural disasters',
      'Childhood abuse or neglect',
      'Medical trauma'
    ],
    treatments: [
      'Trauma-focused psychotherapy',
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'Cognitive Processing Therapy (CPT)',
      'Prolonged Exposure Therapy',
      'Medications (antidepressants, anti-anxiety)',
      'Group therapy',
      'Support groups'
    ],
    resources: [
      'National Center for PTSD',
      'PTSD Alliance',
      '988 Suicide & Crisis Lifeline',
      'Veterans Crisis Line: 1-800-273-8255'
    ]
  },
  {
    id: '4',
    slug: 'bipolar',
    name: 'Bipolar Disorder',
    description: 'Bipolar disorder causes extreme mood swings including emotional highs (mania) and lows (depression).',
    overview: 'Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These mood swings can affect sleep, energy, activity, judgment, behavior, and the ability to think clearly.',
    symptoms: [
      'Manic episodes: elevated mood, increased energy, reduced need for sleep',
      'Depressive episodes: sadness, hopelessness, loss of interest',
      'Racing thoughts',
      'Impulsive behavior',
      'Difficulty concentrating',
      'Changes in appetite and sleep',
      'Suicidal thoughts or behaviors'
    ],
    causes: [
      'Genetic factors',
      'Brain structure and function',
      'Environmental factors (stress, trauma)',
      'Substance use',
      'Hormonal imbalances'
    ],
    treatments: [
      'Mood stabilizers',
      'Antipsychotic medications',
      'Antidepressants (used carefully)',
      'Psychotherapy (CBT, family-focused therapy)',
      'Electroconvulsive therapy (ECT)',
      'Lifestyle management',
      'Support groups'
    ],
    resources: [
      'Depression and Bipolar Support Alliance',
      'International Bipolar Foundation',
      '988 Suicide & Crisis Lifeline',
      'Crisis Text Line: Text HOME to 741741'
    ]
  },
  {
    id: '5',
    slug: 'ocd',
    name: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'OCD involves unwanted, intrusive thoughts (obsessions) and repetitive behaviors (compulsions).',
    overview: 'Obsessive-Compulsive Disorder is a mental health condition characterized by a pattern of unwanted thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress.',
    symptoms: [
      'Obsessions: unwanted, intrusive thoughts or images',
      'Compulsions: repetitive behaviors or mental acts',
      'Fear of contamination',
      'Need for symmetry or order',
      'Unwanted thoughts about harm',
      'Excessive cleaning or checking',
      'Time-consuming rituals'
    ],
    causes: [
      'Genetic factors',
      'Brain structure and function',
      'Environmental factors',
      'Childhood trauma',
      'Infections (rare)'
    ],
    treatments: [
      'Cognitive Behavioral Therapy (CBT)',
      'Exposure and Response Prevention (ERP)',
      'Selective Serotonin Reuptake Inhibitors (SSRIs)',
      'Medication management',
      'Support groups',
      'Family therapy'
    ],
    resources: [
      'International OCD Foundation',
      'Anxiety and Depression Association of America',
      '988 Suicide & Crisis Lifeline',
      'Crisis Text Line: Text HOME to 741741'
    ]
  }
];

export function getDisorderBySlug(slug: string): Disorder | undefined {
  return disorders.find(d => d.slug === slug);
}

export function getAllDisorders(): Disorder[] {
  return disorders;
}


