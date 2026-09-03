export type PageId = 
  | 'home' 
  | 'beyond' 
  | 'breakthrough' 
  | 'basecamp' 
  | 'workshops' 
  | 'community' 
  | 'about' 
  | 'insights' 
  | 'contact';

export interface Offering {
  id: 'beyond' | 'breakthrough' | 'basecamp' | 'workshops' | 'community';
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
  format: 'Framework' | 'Article' | 'Case Study' | 'Video & Notes' | 'Tool';
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
  type: 'basecamp-review' | 'find-path' | 'apply-breakthrough' | 'join-basecamp' | 'book-workshop' | 'framework-view' | 'none';
  data?: any;
}
