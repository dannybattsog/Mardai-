import { InsightItem } from '../types';

export const INSIGHT_CATEGORIES = [
  { id: 'all', label: 'All Insights' },
  { id: 'think-better', label: 'Think Better', desc: 'Mental models, systems thinking, decision making, and root cause analysis' },
  { id: 'work-better', label: 'Work Better', desc: 'Prioritization, productivity, goal setting, execution, and AI-enabled workflows' },
  { id: 'know-yourself', label: 'Know Yourself', desc: 'Self-awareness, emotional intelligence, strengths, and personal values' },
  { id: 'build-career', label: 'Build Your Career', desc: 'Career strategy, positioning, networking, interviews, and professional growth' },
  { id: 'lead-better', label: 'Lead Better', desc: 'Communication, leadership, feedback, and team effectiveness' },
  { id: 'navigate-next', label: 'Navigate What\'s Next', desc: 'AI adoption, future of work, organizational change, and transitions' },
] as const;

export const INSIGHT_ITEMS: InsightItem[] = [
  {
    id: 'second-order-thinking',
    title: 'Second-Order Thinking: How High-Performing Leaders Avoid Unintended Traps',
    subtitle: 'Moving past immediate outcomes to evaluate the downstream consequences of strategic decisions.',
    category: 'think-better',
    categoryLabel: 'Think Better',
    readTime: '6 min read',
    format: 'Framework',
    author: 'Danny Battsog',
    date: 'August 2026',
    summary: 'First-order thinking asks: "What happens if we do this?" Second-order thinking asks: "And then what happens after that?" Understanding system feedback loops separates reactive managers from strategic leaders.',
    interactiveFrameworkType: 'second-order',
    keyTakeaways: [
      'First-order thinking is fast, obvious, and usually shared by all competitors.',
      'Second-order thinking requires asking: "What does this optimize for at the expense of what else?"',
      'Track 1st order (immediate gain), 2nd order (behavioral adaptation), and 3rd order (systemic equilibrium) effects before committing resources.'
    ],
    content: [
      'Most professional mistakes do not occur because people are unintelligent; they occur because people evaluate decisions solely on their immediate, first-order effects.',
      'When you solve a short-term issue with a quick fix, you inadvertently introduce incentives that alter team behavior. For example, rewarding bug fixes often incentivizes rushed code; speeding up delivery without refactoring accumulates invisible organizational debt.',
      'At Mardai, we teach leaders to map decisions through a simple three-tier cascade:',
      '1. Tier 1 (Immediate Effect): The direct result of the action (0-30 days).',
      '2. Tier 2 (Behavioral Response): How people and systems adapt to the new rule or tool (1-6 months).',
      '3. Tier 3 (Equilibrium State): The permanent culture or operational pattern that solidifies over time (6-18 months).',
      'By holding dedicated strategic review moments to run second-order simulations before major organizational shifts, teams save months of corrective friction.'
    ]
  },
  {
    id: 'ai-augmented-knowledge-worker',
    title: 'The AI-Augmented Professional: Preserving Judgment While Scaling Execution',
    subtitle: 'How to build pragmatic AI workflows that amplify human critical thinking rather than replacing it.',
    category: 'work-better',
    categoryLabel: 'Work Better',
    readTime: '8 min read',
    format: 'Framework',
    author: 'Danny Battsog',
    date: 'August 2026',
    summary: 'Generative AI makes drafting, synthesizing, and formatting nearly zero-cost. Therefore, the premium on human judgment, taste, problem definition, and relational trust has never been higher.',
    interactiveFrameworkType: 'prioritization-matrix',
    keyTakeaways: [
      'Separate execution bandwidth (drafting, parsing, summarizing) from judgment bandwidth (prioritizing, empathy, context).',
      'Never delegate the definition of the problem to an AI model — only the generation of candidate solutions.',
      'Build repeatable prompts as modular micro-processes rather than ad-hoc chat conversations.'
    ],
    content: [
      'In our corporate workshops and career programs, we frequently observe two opposing mistakes with AI: outright dismissal as hype, or uncritical reliance on generic outputs.',
      'The modern professional must treat AI as a cognitive apprentice. An apprentice who can read 10,000 words in three seconds, spot grammatical patterns, and generate 15 variations — but has zero stake in the outcome and no visceral understanding of organizational politics.',
      'Effective AI integration follows three clear stages: 1) Context Loading (feeding clear constraints, objectives, and examples), 2) Divergent Generation (prompting for alternatives), and 3) Human Curation & Grounding (applying experience and ethical judgment).',
      'When you automate the baseline synthesis, you reclaim four to six hours every week for high-touch human conversations and deep strategic architecture.'
    ]
  },
  {
    id: 'transferable-capabilities-positioning',
    title: 'The Transferable Capability Matrix: Translating What You Know for New Arenas',
    subtitle: 'Why listing your past job duties fails, and how to articulate your core problem-solving capability instead.',
    category: 'build-career',
    categoryLabel: 'Build Your Career',
    readTime: '7 min read',
    format: 'Framework',
    author: 'Danny Battsog',
    date: 'July 2026',
    summary: 'When transitioning roles or industries, employers do not buy your previous job title — they buy your ability to reduce risk and solve high-value problems in their specific context.',
    interactiveFrameworkType: 'career-positioning',
    keyTakeaways: [
      'Shift from an "Experience Catalogue" mindset to a "Problem-Solver Proposition".',
      'Group your capabilities into three universal categories: Diagnostic, Structural, and Relational.',
      'Translate industry-specific jargon into measurable business outcomes.'
    ],
    content: [
      'During career transition points — whether moving from individual contributor to director, pivoting into a new sector, or rebuilding after immigration — professionals often get stuck in title-matching.',
      'Your real value is not the specific tool you used in 2022. Your value is your meta-skill: How do you identify bottlenecks? How do you rally skeptical cross-functional stakeholders? How do you translate ambiguous mandates into disciplined roadmaps?',
      'In the Mardai Breakthrough program, we guide professionals through the 3x3 Capability Matrix to dissect their career history into universal business currencies: Revenue growth, risk mitigation, operational efficiency, and talent enablement.'
    ]
  },
  {
    id: 'the-wheel-of-basecamp',
    title: 'The Breakthrough Review: Why High-Achievers Fall Into Survival Mode and How to Reset',
    subtitle: 'An 8-dimension diagnostic framework to assess alignment across career, energy, relationships, and intention.',
    category: 'know-yourself',
    categoryLabel: 'Know Yourself',
    readTime: '5 min read',
    format: 'Tool',
    author: 'Danny Battsog',
    date: 'July 2026',
    summary: 'Life rarely breaks down in a single catastrophic moment; it drifts through unexamined trade-offs. The Breakthrough Review provides a calm, objective snapshot of where you are right now.',
    interactiveFrameworkType: 'wheel-of-life',
    keyTakeaways: [
      'Intentional progress requires pausing to diagnose your baseline, survey the terrain, and design your next move.',
      'High performance without intentional boundaries is merely accelerated burnout.',
      'Score yourself across 8 foundational life pillars to pinpoint your highest-leverage growth area for the next 90 days.'
    ],
    content: [
      'When people are intelligent and hardworking, their default response to stress is to push harder. But if you are climbing the wrong mountain, running faster only takes you further from where you want to be.',
      'The Breakthrough Review examines eight foundational pillars: Career Direction, Physical Energy & Health, Primary Relationships, Financial Sovereignty, Continuous Learning, Purpose & Meaning, Community Belonging, and 90-Day Execution.',
      'You cannot improve what you refuse to look at clearly. A structured diagnostic audit turns vague unease into crisp, actionable priorities.'
    ]
  },
  {
    id: 'psychological-safety-systems',
    title: 'Psychological Safety as a Delivery Engine: Creating High-Trust, High-Accountability Teams',
    subtitle: 'Debunking the myth that psychological safety means lower standards. How real candor accelerates velocity.',
    category: 'lead-better',
    categoryLabel: 'Lead Better',
    readTime: '6 min read',
    format: 'Article',
    author: 'Danny Battsog',
    date: 'June 2026',
    summary: 'Psychological safety is not about comfort or artificial politeness; it is the confidence that taking an interpersonal risk will not result in humiliation or retribution. It is the prerequisite for rigorous accountability.',
    keyTakeaways: [
      'High safety + Low accountability = Comfort zone; High safety + High accountability = The Learning & High-Performance Zone.',
      'Leaders must explicitly distinguish between blameworthy failures (negligence) and intelligent failures (exploratory hypotheses).',
      'Establish structured post-mortems focused on systemic flaws rather than personal scapegoating.'
    ],
    content: [
      'In our organizational workshops across Alberta and beyond, leaders often ask: "If I make everyone feel safe, won\'t team standards slip?"',
      'The data indicates the exact opposite. When team members fear admitting confusion or pointing out a defect, problems stay hidden until they become customer-facing catastrophes.',
      'When you decouple failure from character judgment and anchor it in systems analysis, people report friction early, brainstorm bolder solutions, and take collective ownership of delivery.'
    ]
  },
  {
    id: 'navigating-organizational-inflection',
    title: 'Managing Change When Everyone Is Fatigued: The Human Side of Transformation',
    subtitle: 'Why 70% of change initiatives stall, and how practical communication frameworks rebuild employee agency.',
    category: 'navigate-next',
    categoryLabel: 'Navigate What\'s Next',
    readTime: '9 min read',
    format: 'Case Study',
    author: 'Danny Battsog',
    date: 'May 2026',
    summary: 'Organizations do not transform because of new software or executive memos; they transform when individual people feel equipped, respected, and capable of operating in the new reality.',
    keyTakeaways: [
      'Distinguish between Change (the external event) and Transition (the internal psychological adaptation).',
      'Communicate the "Why", the "What stays the same", and the "Immediate next step" in every all-hands.',
      'Empower frontline champions with localized autonomy rather than rigid top-down enforcement.'
    ],
    content: [
      'Between AI adoption, restructuring, and economic shifts, workplace fatigue is at an all-time high. Telling people to "embrace innovation" without providing tools or breathing room breeds cynicism.',
      'Our approach to organizational change focuses on micro-habits and psychological readiness. By delivering structured development workshops within teams, we help employees process the transition, identify friction points, and co-design pragmatic workflows.'
    ]
  }
];
