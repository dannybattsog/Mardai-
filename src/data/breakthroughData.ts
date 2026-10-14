export interface BreakthroughPhase {
  phaseNumber: number;
  stepName: string;
  title: string;
  focus: string;
  deliverables: string[];
  tools: string[];
}

export const BREAKTHROUGH_PHASES: BreakthroughPhase[] = [
  {
    phaseNumber: 1,
    stepName: 'ASSESS',
    title: 'Audit Your Baseline Across 5 Dimensions',
    focus: 'A rigorous, objective diagnostic of where you currently stand in Self, Career, Health, Financial Wellbeing, and Connection.',
    deliverables: [
      'The Mardai Development Map (current vs. desired baselines)',
      'Energy & Friction Audit (spotting leaks and bottlenecks)',
      'Identification of unstated assumptions and limiting patterns'
    ],
    tools: [
      '5-Dimension Diagnostic Matrix',
      'Cognitive Energy Audit',
      'Life Architecture Scorecard'
    ]
  },
  {
    phaseNumber: 2,
    stepName: 'PRIORITIZE',
    title: 'Isolate Your Highest-Leverage Constraint',
    focus: 'Resisting the urge to overhaul everything at once. Identifying the single area where intentional change produces systemic momentum.',
    deliverables: [
      'Root-Cause Bottleneck Diagnosis',
      'Second-Order Impact Evaluation',
      'Selected Primary Development Priority for the next 90 days'
    ],
    tools: [
      'Constraint Analysis Framework',
      'Second-Order Consequence Map',
      'Leverage vs. Friction Matrix'
    ]
  },
  {
    phaseNumber: 3,
    stepName: 'DESIGN',
    title: 'Select Frameworks & Build Your System',
    focus: 'Matching proven behavioral frameworks, systems-thinking tools, and decision models directly to your primary priority.',
    deliverables: [
      'Personal Operating System Blueprint',
      'Habit Architecture & Environmental Design',
      'Decision Rules & Non-Negotiable Boundaries'
    ],
    tools: [
      'Napkin-Model Framework Selector',
      'Eisenhower & 80/20 Alignment Tool',
      'Friction Reduction Blueprint'
    ]
  },
  {
    phaseNumber: 4,
    stepName: 'ACT',
    title: 'Turn Insight Into Daily Behavior',
    focus: 'Translating strategic clarity into executable 90-day sprints, weekly milestones, and low-friction daily micro-habits.',
    deliverables: [
      '90-Day Execution Roadmap',
      'Weekly Sprint Rhythm & Operating Cadence',
      'Trigger-Action Contingency Protocols'
    ],
    tools: [
      '90-Day Sprint Calendar',
      'Micro-Habit Stacking Sheet',
      'Weekly Priority Scorecard'
    ]
  },
  {
    phaseNumber: 5,
    stepName: 'CONNECT',
    title: 'Establish High-Trust Accountability',
    focus: 'Pairing with facilitators and dedicated peers who provide constructive candor, ongoing encouragement, and mutual accountability.',
    deliverables: [
      'Peer Accountability Pact & Cadence',
      'Relational Communication Scripts',
      'Active Mardai Community Integration'
    ],
    tools: [
      'Accountability Check-In Protocol',
      'High-Trust Feedback Framework',
      'Community Peer Exchange'
    ]
  },
  {
    phaseNumber: 6,
    stepName: 'REVIEW & ADAPT',
    title: 'Measure Change & Begin the Next Cycle',
    focus: 'Conducting structured milestone reviews to celebrate measurable growth, evaluate second-order outcomes, and calibrate the next climb.',
    deliverables: [
      '90-Day Retrospective & Baseline Comparison',
      'Lessons Learned & Systems Refinement',
      'Next Horizon Development Roadmap'
    ],
    tools: [
      'Progress Retrospective Template',
      'Cycle Calibrator',
      'Continuous Development Log'
    ]
  }
];

export const BREAKTHROUGH_FAQS = [
  {
    q: 'How is Mardai Breakthrough different from traditional coaching or therapy?',
    a: 'Breakthrough is not open-ended therapy, nor is it generic motivational coaching. It is a structured, practical human-development system. We do not offer medical or psychological treatment, nor do we promise instant magic. Instead, we provide diagnostic rigor, tested frameworks, and a disciplined 90-day operating cadence to turn insights into concrete daily behavior.'
  },
  {
    q: 'Why can’t I just work on improving all areas of my life at the same time?',
    a: 'When people try to overhaul their career, fitness, finances, relationships, and mindset simultaneously, cognitive overload sets in and changes collapse within two weeks. Breakthrough uses systems thinking to identify your primary constraint—the one lever that, when unlocked, naturally creates energy and momentum across the other four dimensions.'
  },
  {
    q: 'What time commitment is expected during the program?',
    a: 'Expect approximately 3 to 4 hours per week. This includes a 90-minute structured working session, 1 to 2 hours of deliberate personal implementation (completing your Development Map, designing routines, executing actions), and a brief weekly peer check-in.'
  },
  {
    q: 'Does Breakthrough offer job guarantees or financial returns?',
    a: 'No. Mardai does not guarantee employment, promotion, specific income increases, or financial returns. We provide the development structure, clarity, positioning frameworks, and accountability; your tangible progress depends on your own disciplined action and real-world execution.'
  },
  {
    q: 'What happens after completing the program?',
    a: 'Graduates seamlessly transition into Mardai Community for continued monthly gatherings, peer accountability partnerships, networking, and learning salons, ensuring long-term sustainability for your personal momentum.'
  }
];
