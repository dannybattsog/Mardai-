import { MardaiEvent } from '../types';
import canadianRockiesImg from '../assets/images/canadian_rockies_1789409917301.jpg';
import torontoDowntownImg from '../assets/images/toronto_downtown_1789409931206.jpg';
import vancouverDowntownImg from '../assets/images/vancouver_downtown_1789409943787.jpg';

export const MARDAI_EVENTS: MardaiEvent[] = [
  {
    id: 'calgary-surviving-to-thriving',
    city: 'Calgary',
    eventName: 'Mardai: From Surviving to Thriving',
    subtitle: 'A one-day human development, career, business, and connection experience for people building their future in Canada.',
    date: 'Saturday, November 8, 2025',
    time: '8:30 AM – 5:30 PM MDT',
    venue: 'Calgary Central Library — Patricia A. Whelan Performance Hall',
    address: '800 3 St SE, Calgary, AB T2G 2E7',
    description: 'Spend one meaningful day learning how Canadian systems work, understanding where opportunities are heading, strengthening financial and career capability, meeting professionals who navigated similar journeys, and building relationships for what comes next.',
    status: 'available',
    ticketPrice: '$189 CAD',
    seatsRemaining: 34,
    image: canadianRockiesImg,
    speakers: [
      {
        name: 'Danny Battsog',
        role: 'Founder & Principal Advisor',
        organization: 'Mardai Human Development',
        category: 'Future & AI',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Guest HR Executive & Recruiter',
        role: 'VP People & Talent Acquisition (Announced soon)',
        organization: 'Energy & Tech Sector Leader',
        category: 'Career'
      },
      {
        name: 'Chartered Professional Accountant (CPA)',
        role: 'Tax & Corporate Structuring Specialist',
        organization: 'Independent Advisory Practice',
        category: 'Finance & Tax'
      },
      {
        name: 'Canadian Entrepreneur Panelist',
        role: 'Founder & Managing Partner',
        organization: 'Western Canada Scale-up',
        category: 'Business'
      }
    ],
    pillarsCovered: [
      'Thrive in Canada',
      'Understand What’s Next (AI & Work)',
      'Money, Tax & Business',
      'Career & Opportunity'
    ]
  },
  {
    id: 'edmonton-surviving-to-thriving',
    city: 'Edmonton',
    eventName: 'Mardai: From Surviving to Thriving',
    subtitle: 'Full-day human development and connection experience for professionals in Northern Alberta.',
    date: 'Spring 2026',
    time: '8:30 AM – 5:30 PM MDT',
    venue: 'Downtown Edmonton Innovation Hub (To be confirmed)',
    address: 'Edmonton, AB',
    description: 'Expanding Mardai’s flagship one-day progression to Edmonton. Practical frameworks, career positioning, financial literacy, and community building.',
    status: 'coming_soon',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80',
    pillarsCovered: [
      'Thrive in Canada',
      'Understand What’s Next',
      'Money, Tax & Business',
      'Career & Opportunity'
    ]
  },
  {
    id: 'toronto-surviving-to-thriving',
    city: 'Toronto',
    eventName: 'Mardai: From Surviving to Thriving',
    subtitle: 'Connecting internationally experienced professionals and ambitious career builders across the GTA.',
    date: 'Spring 2026',
    time: '8:30 AM – 5:30 PM EDT',
    venue: 'Downtown Toronto Conference Centre (To be confirmed)',
    address: 'Toronto, ON',
    description: 'Bringing Mardai’s human capability framework and high-trust peer network to Canada’s largest commercial and financial hub.',
    status: 'coming_soon',
    image: torontoDowntownImg,
    pillarsCovered: [
      'Thrive in Canada',
      'Understand What’s Next',
      'Money, Tax & Business',
      'Career & Opportunity'
    ]
  },
  {
    id: 'vancouver-surviving-to-thriving',
    city: 'Vancouver',
    eventName: 'Mardai: From Surviving to Thriving',
    subtitle: 'Empowering ambitious professionals, tech innovators, and entrepreneurs on the West Coast.',
    date: 'Fall 2026',
    time: '8:30 AM – 5:30 PM PDT',
    venue: 'Vancouver Waterfront Hub (To be confirmed)',
    address: 'Vancouver, BC',
    description: 'A full day of cross-disciplinary capability building, Canadian labour market insights, and peer-to-peer relationships.',
    status: 'coming_soon',
    image: vancouverDowntownImg,
    pillarsCovered: [
      'Thrive in Canada',
      'Understand What’s Next',
      'Money, Tax & Business',
      'Career & Opportunity'
    ]
  }
];

export const EVENT_FOUR_PILLARS = [
  {
    num: '01',
    title: 'Thrive in Canada',
    subtitle: 'From establishing yourself to building a fulfilling life.',
    subjects: [
      'Understanding Canadian institutional & social systems',
      'Building genuine social capital & professional relationships',
      'Navigating workplace culture with authenticity',
      'Developing grounded confidence without losing your cultural identity',
      'Lessons from people who have already navigated the journey'
    ]
  },
  {
    num: '02',
    title: 'Understand What’s Next',
    subtitle: 'Trends, AI, and the future outlook.',
    subjects: [
      'AI, automation, and the shifting reality of knowledge work',
      'Changing Canadian industries & emerging opportunities',
      'Adaptability & lifelong human capabilities in a tech-driven world',
      'Preparing intelligently without fear or speculation',
      'What technology cannot automate: judgement, trust, leadership'
    ]
  },
  {
    num: '03',
    title: 'Money, Tax & Business',
    subtitle: 'Financial and business literacy in Canada.',
    subjects: [
      'Personal finance fundamentals: credit, debt, saving & investing',
      'Canadian tax fundamentals: employment vs self-employment deductions',
      'Canadian business environment & entrepreneurial pathways',
      'Validating ideas, starting small, and customer discovery',
      'Important note: educational and informational frameworks'
    ]
  },
  {
    num: '04',
    title: 'Career & Opportunity',
    subtitle: 'Start, rebuild, and advance your professional trajectory.',
    subjects: [
      'Understanding the Canadian labour market & hidden job networks',
      'Translating international experience into domestic value',
      'Transferable capabilities, positioning, and professional branding',
      'LinkedIn, resumes, high-trust networking, and interviews',
      'Moving from "getting any job" to building an enduring career'
    ]
  }
];

export const EVENT_DAY_RHYTHM = [
  { time: '8:30 AM', title: 'Arrival, Specialty Coffee & Connection', type: 'Connect' },
  { time: '9:00 AM', title: 'Opening Keynote: From Surviving to Thriving', type: 'Learn' },
  { time: '9:30 AM', title: 'Pillar 1: Thrive in Canada & Social Capital', type: 'Learn & Discuss' },
  { time: '10:30 AM', title: 'Facilitated Connection Break', type: 'Connect' },
  { time: '10:50 AM', title: 'Pillar 2: What’s Next — AI, Work & Human Capability', type: 'Learn & Reflect' },
  { time: '12:00 PM', title: 'Shared Lunch + Structured Table Networking', type: 'Connect & Eat' },
  { time: '1:00 PM', title: 'Pillar 3: Money, Tax & Business Systems in Canada', type: 'Learn & Apply' },
  { time: '2:30 PM', title: 'Refreshment Break & 1-on-1 Introductions', type: 'Connect' },
  { time: '2:50 PM', title: 'Pillar 4: Career Strategy, Market Positioning & Opportunity', type: 'Learn & Strategize' },
  { time: '4:10 PM', title: 'Personal Action Session: The 90-Day Roadmap', type: 'Plan' },
  { time: '4:40 PM', title: 'Community Conversation & Closing Circle', type: 'Belong' },
  { time: '5:00 PM', title: 'Formal Event Close', type: 'Close' },
  { time: '5:00 – 6:00 PM', title: 'Optional Mixer & Continued Conversations', type: 'Connect' }
];
