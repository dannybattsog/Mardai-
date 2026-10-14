import { WorkshopCategory } from '../types';

export const WORKSHOP_CATEGORIES: WorkshopCategory[] = [
  {
    id: 'human-development',
    title: '1. HUMAN DEVELOPMENT & PERSONAL EFFECTIVENESS',
    subtitle: 'Self-Awareness, Energy & High-Leverage Habits',
    description: 'Equip professionals with practical self-management frameworks to master personal energy, prevent burnout, focus attention, and develop deliberate daily operating systems.',
    topics: [
      'The 5 Dimensions of Professional Sustainability',
      'Cognitive load & attention architecture in distracted workplaces',
      'Designing non-negotiable personal boundaries and habit loops',
      'Prioritization frameworks (Impact vs. Effort vs. Reversibility)',
      'Energy management vs. time management'
    ],
    outcomes: [
      'Reduction in employee burnout and cognitive fatigue',
      'Reclaiming 4–6 hours of weekly focused productivity',
      'Higher clarity, personal agency, and daily resilience'
    ]
  },
  {
    id: 'leadership-development',
    title: '2. LEADERSHIP & TEAM EFFECTIVENESS',
    subtitle: 'Constructive Candor, Psychological Safety & Alignment',
    description: 'Cultivate emotionally intelligent leaders who foster high trust, constructive candor, psychological safety, and clear accountability without micromanagement.',
    topics: [
      'Emotional intelligence & self-awareness in leadership',
      'Delivering actionable, constructive feedback without friction',
      'Building psychological safety as an operational standard',
      'Accountability pacts, clear delegation, and shared ownership',
      'Navigating cross-functional tensions and interpersonal friction'
    ],
    outcomes: [
      'Measurable boost in team engagement and talent retention',
      'Faster conflict resolution and transparent team communication',
      'Strengthened psychological safety and collective ownership'
    ]
  },
  {
    id: 'systems-thinking',
    title: '3. SYSTEMS THINKING & DECISION MAKING',
    subtitle: 'Root Causes, Mental Models & Strategic Clarity',
    description: 'Equip leaders and teams with rigorous cognitive frameworks to diagnose complex bottlenecks, avoid unintended second-order consequences, and make high-stakes decisions.',
    topics: [
      'Mental models for high-velocity teams under ambiguity',
      'Root-cause analysis & separating symptoms from core constraints',
      'Second- and third-order consequence mapping',
      'Collaborative decision matrices and pre-mortems',
      'Unified decision-making frameworks across departments'
    ],
    outcomes: [
      'Reduction in reactionary firefighting',
      'Unified decision-making language across cross-functional teams',
      'Faster, higher-confidence strategic choices'
    ]
  },
  {
    id: 'ai-and-change',
    title: '4. AI-ERA CAPABILITY & CHANGE READINESS',
    subtitle: 'Human-Centered Adaptation & Modern Workflows',
    description: 'Guide organizations through complex transitions—technology rollouts, AI integration, restructuring, and culture shifts—by focusing on human psychology and augmented capability.',
    topics: [
      'Responsible human + AI workflows: Prompting, synthesis, and judgment',
      'Change readiness diagnostics and friction identification',
      'Managing the psychological transition curve for employees',
      'Preserving authentic human connection in digital environments',
      'Designing micro-habits that make organizational change stick'
    ],
    outcomes: [
      'Accelerated adoption rates for modern digital and AI tools',
      'Minimized transformation fatigue and employee cynicism',
      'Sustained behavioral change and organizational adaptability'
    ]
  }
];

export const WORKSHOP_FORMATS = [
  {
    name: 'Interactive Keynotes & Briefings',
    duration: '60 – 90 Minutes',
    idealFor: 'All-hands meetings, company retreats, annual kickoffs, or leadership summits.',
    description: 'High-impact, engaging presentation combined with live audience reflection exercises to introduce core frameworks and shift mindsets quickly.'
  },
  {
    name: 'Targeted Half-Day Workshops',
    duration: '3.5 – 4 Hours',
    idealFor: 'Departmental teams, manager cohorts, or project squads needing practical capability development.',
    description: 'Hands-on deep dive combining framework instruction, live case study work, peer feedback, and customized team action commitments.'
  },
  {
    name: 'Facilitated Team Offsites & Retreats',
    duration: '1 – 2 Days',
    idealFor: 'Senior leadership teams, high-potential talent cohorts, or business units stepping back to align.',
    description: 'Immersive offsite experiences combining strategic reflection, deep connection, systems diagnostics, and collaborative roadmap development.'
  },
  {
    name: 'Customized Learning Journeys',
    duration: '4 – 12 Weeks (Modular)',
    idealFor: 'Sustained organizational capability building and leadership development pipelines.',
    description: 'Blended organizational program featuring modular workshops, peer accountability pods, development assessments, and measurable milestone reviews.'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    name: 'ASSESS',
    description: 'We conduct team diagnostics and stakeholder interviews to uncover current baselines, operational bottlenecks, and relational dynamics.'
  },
  {
    step: '02',
    name: 'PRIORITIZE',
    description: 'We identify the single highest-leverage organizational constraint rather than trying to fix everything at once.'
  },
  {
    step: '03',
    name: 'DESIGN',
    description: 'We tailor our core frameworks to your industry, team language, and strategic objectives for seamless adoption.'
  },
  {
    step: '04',
    name: 'ACT',
    description: 'We deliver high-engagement, psychologically safe sessions where teams practice frameworks on real business challenges.'
  },
  {
    step: '05',
    name: 'CONNECT',
    description: 'We establish peer accountability partnerships and communication channels so team members support one another.'
  },
  {
    step: '06',
    name: 'REVIEW',
    description: 'We evaluate behavioral adoption, collect structured participant feedback, and assess tangible outcomes.'
  },
  {
    step: '07',
    name: 'ADAPT',
    description: 'We calibrate routines and systems based on operational realities to ensure permanent, compounding organizational capability.'
  }
];
