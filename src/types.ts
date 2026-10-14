export type PageId = 
  | 'home' 
  | 'events'
  | 'series'
  | 'beyond' 
  | 'breakthrough' 
  | 'basecamp' 
  | 'workshops' 
  | 'community' 
  | 'about' 
  | 'insights' 
  | 'contact';

export interface MardaiSeriesDeck {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  themeColor: string;
  badge: string;
  status: 'coming_soon_first' | 'coming_soon_later' | 'available';
  statusText: string;
  purpose: string;
  description: string;
  modelCount: number;
  sampleModels: {
    name: string;
    category: string;
    oneLiner: string;
  }[];
  accentHex: string;
  borderHex: string;
}

export interface MardaiEvent {
  id: string;
  city: 'Calgary' | 'Edmonton' | 'Toronto' | 'Vancouver';
  eventName: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  status: 'available' | 'coming_soon' | 'sold_out';
  ticketPrice?: string;
  seatsRemaining?: number;
  image: string;
  speakers?: {
    name: string;
    role: string;
    organization: string;
    category: 'Career' | 'Finance & Tax' | 'Business' | 'Future & AI' | 'Community';
    avatar?: string;
  }[];
  pillarsCovered: string[];
}

export interface EventRegistrationData {
  eventId: string;
  city: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  careerStage: string;
  industry: string;
  currentProfessionalSituation: string;
  mainReasonForAttending: string;
  priorityTopic: string;
  referralSource: string;
  linkedIn?: string;
  consentUpdates: boolean;
}

export interface Offering {
  id: 'series' | 'beyond' | 'breakthrough' | 'basecamp' | 'workshops' | 'community';
  title: string;
  tagline: string;
  badge: string;
  description: string;
  ctaText: string;
  pageId: PageId;
  idealFor: string;
  highlights: string[];
  secondaryTagline?: string;
}

export type InsightCategory = 
  | 'all'
  | 'self'
  | 'career'
  | 'health-habits'
  | 'money-decisions'
  | 'relationships'
  | 'productivity'
  | 'thinking-systems'
  | 'whats-next'
  | 'think-better'
  | 'work-better'
  | 'know-yourself'
  | 'build-career'
  | 'lead-better'
  | 'navigate-next';

export interface InsightItem {
  id: string;
  title: string;
  subtitle: string;
  category: InsightCategory;
  categoryLabel: string;
  readTime: string;
  format: 'Framework' | 'Article' | 'Case Study' | 'Video & Notes' | 'Tool' | 'Interview' | 'Conversation' | 'Practical Tool' | 'Story';
  summary: string;
  content: string[];
  keyTakeaways: string[];
  interactiveFrameworkType?: 'second-order' | 'system-loop' | 'prioritization-matrix' | 'wheel-of-life' | 'career-positioning';
  author: string;
  date: string;
}

export interface ReviewDimension {
  id: string;
  name: string;
  description: string;
  prompt: string;
  lowScoreAnchor: string;
  highScoreAnchor: string;
  guidingQuestions: string[];
}

export interface DimensionScore {
  [dimensionId: string]: number;
}

export interface RetreatDay {
  dayNumber: number;
  theme: string;
  title: string;
  description: string;
  activities: {
    time: string;
    title: string;
    description: string;
    pillar: 'Reflection' | 'Strategy' | 'Connection' | 'Outdoor' | 'Action';
  }[];
}

export interface BreakthroughWeek {
  weekNumber: number;
  title: string;
  theme: string;
  focus: string;
  deliverables: string[];
  tools: string[];
}

export interface WorkshopCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  outcomes: string[];
}

export interface ModalState {
  isOpen: boolean;
  type: 'basecamp-review' | 'find-path' | 'apply-breakthrough' | 'join-basecamp' | 'book-workshop' | 'framework-view' | 'event-register' | 'event-waitlist' | 'none';
  data?: any;
}
