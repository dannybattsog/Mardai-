import { RetreatDay } from '../types';

export const BASECAMP_DAYS: RetreatDay[] = [
  {
    dayNumber: 1,
    theme: 'Where am I?',
    title: 'Arrive & Decompress',
    description: 'Stepping off the daily treadmill. Settle into the mountain lodge, meet fellow participants with zero social posturing, and conduct an honest baseline assessment of your current life and career state.',
    activities: [
      {
        time: '3:00 PM – 4:30 PM',
        title: 'Arrival & Check-in at Mountain Sanctuary',
        description: 'Check in to private accommodations in the foothills of the Canadian Rockies (Calgary/Kananaskis region). Unpack, disconnect from work notifications, and take in the natural surroundings.',
        pillar: 'Reflection'
      },
      {
        time: '5:00 PM – 6:30 PM',
        title: 'Opening Circle: Setting the Basecamp Mandate',
        description: 'Introduction to the Mardai Basecamp principles. Establishing a culture of psychological safety, candor, mutual confidentiality, and grounded authenticity.',
        pillar: 'Connection'
      },
      {
        time: '7:00 PM – 8:30 PM',
        title: 'Curated Welcome Dinner',
        description: 'Nourishing locally sourced meal prepared by private culinary staff. Unstructured, meaningful conversation around the table.',
        pillar: 'Connection'
      },
      {
        time: '8:45 PM – 10:00 PM',
        title: 'Fireside Reflection: The Unvarnished Baseline',
        description: 'Facilitated group reflection examining the subtle trade-offs, pressures, and silent burdens we carry when operating in survival mode.',
        pillar: 'Reflection'
      }
    ]
  },
  {
    dayNumber: 2,
    theme: 'What matters now?',
    title: 'Deep Exploration & Systems Alignment',
    description: 'The core working day. Dissecting personal values, cognitive blindspots, decision-making models, and career trajectories through facilitated workshops and mountain outdoor air.',
    activities: [
      {
        time: '7:30 AM – 8:30 AM',
        title: 'Morning Movement & Breathwork or Trail Walk',
        description: 'Optional guided morning alpine walk or quiet contemplation overlooking mountain vistas, followed by a hearty breakfast.',
        pillar: 'Outdoor'
      },
      {
        time: '9:00 AM – 11:30 AM',
        title: 'Workshop I: The Self-Awareness & Values Architecture',
        description: 'Analyzing pre-retreat diagnostic results. Unpacking internal scripts, strengths, emotional triggers, and core non-negotiables using structured reflection tools.',
        pillar: 'Strategy'
      },
      {
        time: '12:00 PM – 1:30 PM',
        title: 'Lunch & Solo Reflection Hour',
        description: 'Time alone with your Basecamp Journal on the lodge deck or walking paths to digest personal discoveries.',
        pillar: 'Reflection'
      },
      {
        time: '1:45 PM – 4:30 PM',
        title: 'Workshop II: Systems Thinking for Life & Career',
        description: 'Mapping your life as an interconnected system: How career demands impact relational energy, health habits, and mental clarity. Solving root causes rather than symptoms.',
        pillar: 'Strategy'
      },
      {
        time: '4:45 PM – 6:30 PM',
        title: 'Guided Outdoor Experience & Peer Walks',
        description: 'Structured 1-on-1 walking dialogues along forested mountain trails to exchange perspective and explore candid feedback.',
        pillar: 'Outdoor'
      },
      {
        time: '7:00 PM – 9:30 PM',
        title: 'Communal Dinner & The Men’s Roundtable',
        description: 'Deep, facilitated conversation on fatherhood, leadership, vulnerability, ambition, aging, and building enduring legacies.',
        pillar: 'Connection'
      }
    ]
  },
  {
    dayNumber: 3,
    theme: 'What comes next?',
    title: 'Strategy, Commitment & Moving Forward',
    description: 'Turning clarity into a concrete, disciplined 90-day plan. Establishing long-term peer accountability pacts before returning to work and family with renewed intention.',
    activities: [
      {
        time: '8:00 AM – 9:00 AM',
        title: 'Final Breakfast & Group Check-In',
        description: 'Reconvening in the main lodge to review insights from the weekend.',
        pillar: 'Connection'
      },
      {
        time: '9:15 AM – 11:45 AM',
        title: 'Workshop III: The 90-Day Personal Operating Plan',
        description: 'Building your customized Basecamp Action Plan: Top 3 priority objectives, boundary rules, weekly operating rhythm, and risk mitigation strategies.',
        pillar: 'Action'
      },
      {
        time: '12:00 PM – 1:00 PM',
        title: 'Commitment Circle & Accountability Pairing',
        description: 'Sharing your public commitment with the cohort and formalizing your Mardai Community peer accountability partner for the next 90 days.',
        pillar: 'Action'
      },
      {
        time: '1:00 PM – 2:00 PM',
        title: 'Closing Lunch & Departure',
        description: 'Final meal together, exchange of contact info, and stepping back into the world equipped for the next climb.',
        pillar: 'Connection'
      }
    ]
  }
];

export const BASECAMP_PRE_ASSESSMENTS = [
  {
    name: 'The Wheel of Life Diagnostic',
    description: 'A holistic 8-dimension rating of your current satisfaction across health, relationships, career, finances, purpose, and energy.'
  },
  {
    name: 'Personality & Cognitive Preferences Tool',
    description: 'A reflective framework (used for self-observation, not predictive labeling) to explore communication styles and stress patterns.'
  },
  {
    name: 'Career & Ambition Trajectory Review',
    description: 'Mapping where your professional energy is leaking versus where you experience genuine capability and flow.'
  },
  {
    name: 'Personal Priorities & Unsolved Dilemmas',
    description: 'Clarifying the 1-2 pressing dilemmas you need to resolve during the weekend retreat.'
  }
];

export const BASECAMP_FAQS = [
  {
    q: 'Is Mardai Basecamp group therapy or an aggressive bootcamp?',
    a: 'Neither. Mardai Basecamp is a grounded, intelligent, and premium professional development retreat. There is no forced shouting, military drills, or aggressive theatrics, nor is it clinical therapy. It is a thoughtful space designed for capable men to pause, reflect, engage with practical frameworks, and have honest conversations with high-caliber peers.'
  },
  {
    q: 'Where does the retreat take place?',
    a: 'Basecamp is hosted at private luxury mountain lodge settings nestled in the foothills of the Canadian Rockies, just 45–60 minutes west of Calgary, Alberta (near Kananaskis / Canmore). The venue features private rooms, mountain views, gourmet catering, and direct access to pristine nature.'
  },
  {
    q: 'Who attends Mardai Basecamp?',
    a: 'Our cohorts bring together professionals, business leaders, entrepreneurs, fathers, newcomers, and men navigating career transitions or leadership expansion. Group size is strictly capped at 12–16 participants to ensure intimate, high-trust discussions.'
  },
  {
    q: 'What do I walk away with after 2 days?',
    a: 'You leave with crystal clarity on your priorities, an individualized 90-Day Personal Basecamp Action Plan, practical systems-thinking frameworks, restored energy, and a vetted peer group in the Mardai Community for ongoing accountability.'
  }
];
