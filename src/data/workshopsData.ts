import { WorkshopCategory } from '../types';

export const WORKSHOP_CATEGORIES: WorkshopCategory[] = [
  {
    id: 'think-better',
    title: '1. THINK BETTER',
    subtitle: 'Systems Thinking & Decision Making',
    description: 'Equip leaders and teams with rigorous cognitive frameworks to diagnose complex bottlenecks, avoid unintended second-order traps, and make high-stakes decisions with clarity.',
    topics: [
      'Mental models for high-velocity teams',
      'Root cause analysis & 5-Whys in modern operations',
      'Prioritization frameworks (Impact vs. Effort vs. Reversibility)',
      'Second- and third-order consequence mapping',
      'Strategic problem solving under ambiguity'
    ],
    outcomes: [
      'Reduction in reactionary fire-fighting',
      'Unified decision-making language across cross-functional teams',
      'Faster convergence on strategic initiatives'
    ]
  },
  {
    id: 'work-better',
    title: '2. WORK BETTER',
    subtitle: 'Personal Effectiveness in the AI Era',
    description: 'Help knowledge workers transcend digital overload and build pragmatic human + AI workflows that amplify productivity, focus, and critical thinking.',
    topics: [
      'Designing deep work architecture in an interrupted workplace',
      'Pragmatic AI workflows: Prompting, synthesizing, and validating',
      'Separating judgment bandwidth from execution bandwidth',
      'Time blocking, energy management, and high-leverage outputs',
      'Human + AI collaboration protocols'
    ],
    outcomes: [
      'Reclaiming 4–6 hours of weekly deep focus time per employee',
      'Responsible, confident adoption of generative AI tools',
      'Higher output quality with less cognitive fatigue'
    ]
  },
  {
    id: 'lead-better',
    title: '3. LEAD BETTER',
    subtitle: 'Self-Awareness, Communication & Team Effectiveness',
    description: 'Cultivate emotionally intelligent leaders who foster high trust, constructive candor, psychological safety, and clear accountability without micro-management.',
    topics: [
      'Emotional intelligence & self-awareness in leadership',
      'Adaptive communication styles across diverse teams',
      'Delivering actionable, constructive feedback without friction',
      'Building psychological safety as an operational standard',
      'Accountability pacts and clear delegation frameworks'
    ],
    outcomes: [
      'Measurable boost in team engagement & retention',
      'Proactive identification of project risks before escalation',
      'Strengthened cross-departmental collaboration'
    ]
  },
  {
    id: 'navigate-change',
    title: '4. NAVIGATE CHANGE',
    subtitle: 'Human-Centred Organizational Transformation',
    description: 'Guide organizations through complex transitions — technology rollouts, restructuring, M&A, and culture shifts — by focusing on the human psychology of adaptation.',
    topics: [
      'Change readiness diagnostic and friction identification',
      'Managing the psychological transition curve for employees',
      'Effective communication strategies during uncertainty',
      'Workplace and AI adoption without culture erosion',
      'Designing micro-habits that make transformation stick'
    ],
    outcomes: [
      'Accelerated user adoption rates for new tools & systems',
      'Minimized transformation fatigue and employee cynicism',
      'Sustained behavioral change and organizational resilience'
    ]
  }
];

export const WORKSHOP_FORMATS = [
  {
    name: 'Keynote / Interactive Briefing',
    duration: '60 – 90 Minutes',
    idealFor: 'All-hands meetings, company retreats, annual kickoffs, or leadership offsites.',
    description: 'High-impact, engaging presentation combined with live audience reflection exercises to introduce core frameworks and shift mindsets quickly.'
  },
  {
    name: 'Half-Day Intensive Workshop',
    duration: '3.5 – 4 Hours',
    idealFor: 'Departmental teams, manager cohorts, or project squads needing targeted capability development.',
    description: 'Hands-on deep dive combining framework instruction, live case study workshops, peer feedback, and customized team action plans.'
  },
  {
    name: 'Full-Day Transformation Masterclass',
    duration: '7 Hours',
    idealFor: 'Senior leadership teams, high-potential talent cohorts, or business units undergoing major change.',
    description: 'Immersive full-day experience with multi-stage breakout exercises, live systems simulation, role-playing, and tangible operational playbooks.'
  },
  {
    name: 'Multi-Session Enterprise Program',
    duration: '4 – 8 Weeks (Modular)',
    idealFor: 'Sustained organizational capability building and leadership development pipelines.',
    description: 'Blended learning journey featuring bi-weekly workshops, micro-assignments, executive coaching, and measurable milestone check-ins.'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    name: 'Diagnose',
    description: 'We conduct pre-engagement stakeholder interviews and team assessments to understand your specific organizational context, team dynamics, and operational bottlenecks.'
  },
  {
    step: '02',
    name: 'Design',
    description: 'We tailor our core frameworks to your industry, team language, and strategic objectives — ensuring zero generic, off-the-shelf lecture material.'
  },
  {
    step: '03',
    name: 'Facilitate',
    description: 'We deliver high-engagement, psychologically safe sessions focused on active application, honest dialogue, and practical problem-solving.'
  },
  {
    step: '04',
    name: 'Apply',
    description: 'Participants leave with concrete tools, custom cheat sheets, and 30-day behavioral commitment commitments to apply immediately in their daily workflow.'
  },
  {
    step: '05',
    name: 'Measure',
    description: 'We provide post-session pulse diagnostics, participant feedback summaries, and actionable recommendations for management to sustain the gains.'
  }
];
