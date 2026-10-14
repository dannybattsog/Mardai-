import { InsightItem } from '../types';

export const INSIGHT_CATEGORIES = [
  { id: 'all', label: 'All Insights', desc: 'Browse all practical ideas and frameworks' },
  { id: 'self', label: 'Self', desc: 'Purpose, values, self-awareness, growth mindset, and Johari Window' },
  { id: 'career', label: 'Career', desc: 'Career strategy, skills, positioning, networking, and leadership' },
  { id: 'health-habits', label: 'Health & Habits', desc: 'Habit formation, routines, energy management, and wellbeing' },
  { id: 'money-decisions', label: 'Money & Decisions', desc: 'Financial habits, opportunity cost, compounding, and decision frameworks' },
  { id: 'relationships', label: 'Relationships', desc: 'Emotional intelligence, communication, storytelling, and connection' },
  { id: 'productivity', label: 'Productivity & Execution', desc: 'Eisenhower Matrix, time blocking, 80/20 principle, Atomic Habits, and Kaizen' },
  { id: 'thinking-systems', label: 'Thinking & Systems', desc: 'Systems thinking, mental models, feedback loops, and second-order thinking' },
  { id: 'whats-next', label: 'What\'s Next', desc: 'AI, future of work, adaptability, and lifelong learning' },
] as const;

export const INSIGHT_ITEMS: InsightItem[] = [
  {
    id: 'second-order-thinking',
    title: 'Second-Order Thinking: How High-Performing Leaders Avoid Unintended Traps',
    subtitle: 'Moving past immediate outcomes to evaluate downstream consequences before committing resources.',
    category: 'thinking-systems',
    categoryLabel: 'Thinking & Systems',
    readTime: '6 min read',
    format: 'Framework',
    author: 'Danny Battsog',
    date: 'August 2026',
    summary: 'First-order thinking asks: "What happens if we do this?" Second-order thinking asks: "And then what happens after that?" Understanding system feedback loops separates reactive firefighting from strategic direction.',
    interactiveFrameworkType: 'second-order',
    keyTakeaways: [
      'First-order thinking is fast, obvious, and usually shared by everyone in the room.',
      'Second-order thinking asks: "What does this optimize for at the expense of what else?"',
      'Track 1st order (immediate gain), 2nd order (behavioral adaptation), and 3rd order (systemic equilibrium) effects.'
    ],
    content: [
      'Most mistakes in life and careers do not occur because people are unintelligent; they occur because people evaluate decisions solely on their immediate, first-order effects.',
      'When you solve a short-term issue with a quick fix, you inadvertently introduce incentives that alter team behavior. For example, rewarding bug fixes often incentivizes rushed code; speeding up delivery without refactoring accumulates invisible organizational debt.',
      'At Mardai, we teach leaders and individuals to map decisions through a three-tier cascade:',
      '1. Tier 1 (Immediate Effect): The direct result of the action (0-30 days).',
      '2. Tier 2 (Behavioral Response): How people and systems adapt to the new rule or tool (1-6 months).',
      '3. Tier 3 (Equilibrium State): The permanent culture or operational pattern that solidifies over time (6-18 months).',
      'By taking time to run second-order simulations before major life or organizational shifts, you avoid costly corrective friction.'
    ]
  },
  {
    id: 'ai-augmented-knowledge-worker',
    title: 'The AI-Augmented Professional: Preserving Judgment While Scaling Execution',
    subtitle: 'How to build pragmatic AI workflows that amplify human critical thinking rather than replacing it.',
    category: 'whats-next',
    categoryLabel: 'What\'s Next',
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
      'In our corporate workshops and development programs, we frequently observe two opposing mistakes with AI: outright dismissal as hype, or uncritical reliance on generic outputs.',
      'The modern professional must treat AI as a cognitive apprentice. An apprentice who can read 10,000 words in three seconds, spot grammatical patterns, and generate 15 variations — but has zero stake in the outcome and no visceral understanding of organizational context.',
      'Effective AI integration follows three clear stages: 1) Context Loading (feeding clear constraints, objectives, and examples), 2) Divergent Generation (prompting for alternatives), and 3) Human Curation & Grounding (applying experience and ethical judgment).',
      'When you automate baseline synthesis, you reclaim valuable hours every week for high-touch human conversations and deep strategic architecture.'
    ]
  },
  {
    id: 'eisenhower-and-80-20',
    title: 'The High-Leverage Operating System: Eisenhower Matrix Meets the 80/20 Principle',
    subtitle: 'Cutting through the trap of urgent trivia to focus on the 20% of actions generating 80% of progress.',
    category: 'productivity',
    categoryLabel: 'Productivity & Execution',
    readTime: '5 min read',
    format: 'Practical Tool',
    author: 'Danny Battsog',
    date: 'August 2026',
    summary: 'Activity is not progress. By combining urgent/important filtering with Pareto leverage, professionals eliminate cognitive clutter and protect dedicated blocks for deep work.',
    keyTakeaways: [
      'Urgent tasks scream for immediate attention; Important tasks rarely shout, yet dictate long-term trajectory.',
      'Audit your weekly schedule: which single 20% commitment is driving 80% of your real value?',
      'Schedule non-negotiable weekly time blocks for Quadrant II (Important / Not Urgent) strategic work.'
    ],
    content: [
      'Most people start their day by opening inboxes and Slack messages. This means they spend their highest-energy biological hours reacting to other people\'s agendas.',
      'The Eisenhower Matrix categorizes demands into four quadrants: 1) Urgent & Important (Crises), 2) Not Urgent but Important (Development, Health, Strategy), 3) Urgent but Not Important (Interruptions), and 4) Neither (Escape & Trivia).',
      'True breakthroughs happen almost exclusively in Quadrant 2. Without intentional systems, Quadrant 1 and Quadrant 3 consume 100% of your days.'
    ]
  },
  {
    id: 'transferable-capabilities-positioning',
    title: 'The Transferable Capability Matrix: Translating What You Know for New Arenas',
    subtitle: 'Why listing past job duties fails, and how to articulate your core problem-solving capability instead.',
    category: 'career',
    categoryLabel: 'Career',
    readTime: '7 min read',
    format: 'Framework',
    author: 'Danny Battsog',
    date: 'July 2026',
    summary: 'When transitioning roles or industries, employers and collaborators do not buy your past job title — they buy your ability to reduce risk and solve high-value problems in their specific context.',
    interactiveFrameworkType: 'career-positioning',
    keyTakeaways: [
      'Shift from an "Experience Catalogue" mindset to a "Problem-Solver Proposition".',
      'Group your capabilities into three universal categories: Diagnostic, Structural, and Relational.',
      'Translate industry-specific jargon into measurable business outcomes.'
    ],
    content: [
      'During career transition points — whether moving from individual contributor to director, pivoting into a new sector, or rebuilding after immigration — professionals often get stuck in title-matching.',
      'Your real value is your meta-skill: How do you identify bottlenecks? How do you rally skeptical cross-functional stakeholders? How do you translate ambiguous mandates into disciplined roadmaps?',
      'In Mardai Breakthrough, we guide participants through capability dissection to articulate their value in universal currencies: Growth, risk mitigation, operational efficiency, and team enablement.'
    ]
  },
  {
    id: 'the-wheel-of-basecamp',
    title: 'The Mardai Development Map: Diagnosing Your Baseline Across 5 Dimensions',
    subtitle: 'A holistic diagnostic framework to assess alignment across Self, Career, Health, Finances, and Connection.',
    category: 'self',
    categoryLabel: 'Self',
    readTime: '5 min read',
    format: 'Tool',
    author: 'Danny Battsog',
    date: 'July 2026',
    summary: 'Life rarely breaks down in a single catastrophic moment; it drifts through unexamined trade-offs. The Development Map provides a calm, objective snapshot of where you are right now.',
    interactiveFrameworkType: 'wheel-of-life',
    keyTakeaways: [
      'Intentional progress requires pausing to diagnose your baseline, survey the terrain, and design your next move.',
      'High performance without intentional boundaries is merely accelerated burnout.',
      'Score yourself across 5 foundational life dimensions to pinpoint your highest-leverage growth area for the next 90 days.'
    ],
    content: [
      'When people are intelligent and hardworking, their default response to stress is to push harder. But if you are climbing the wrong mountain, running faster only takes you further from where you want to be.',
      'The Mardai Development Map examines five foundational dimensions: Self & Direction, Career & Capability, Health & Energy, Financial Wellbeing, and Connection.',
      'You cannot improve what you refuse to look at clearly. A structured diagnostic audit turns vague unease into crisp, actionable priorities.'
    ]
  },
  {
    id: 'compounding-decisions',
    title: 'Financial Habits and Opportunity Cost: How Decisions Compound Over Decades',
    subtitle: 'Applying systems thinking to personal finances, career-income connections, and long-term security.',
    category: 'money-decisions',
    categoryLabel: 'Money & Decisions',
    readTime: '6 min read',
    format: 'Article',
    author: 'Danny Battsog',
    date: 'July 2026',
    summary: 'Financial wellbeing is less about predictive market timing and more about disciplined personal operating systems, understanding opportunity costs, and building compounding habits.',
    keyTakeaways: [
      'Every financial commitment has an invisible opportunity cost: what future freedom are you trading away?',
      'Small, automated habits beat occasional heroic financial efforts every time.',
      'Align your career investments with income-generating capabilities that compound over a 10-year horizon.'
    ],
    content: [
      'Financial decisions are frequently treated as isolated spreadsheet events rather than interconnected life systems.',
      'When you take a job solely for a 10% higher salary at the expense of skill acquisition, mentorship, or health, the true cost often exceeds the incremental income.',
      'Understanding compounding across finances, skills, and relationships enables deliberate choices that build enduring freedom.'
    ]
  },
  {
    id: 'psychological-safety-systems',
    title: 'Communication & Emotional Intelligence: Creating High-Trust Relationships',
    subtitle: 'Debunking the myth that empathy means lower standards. How candor and listening accelerate connection.',
    category: 'relationships',
    categoryLabel: 'Relationships',
    readTime: '6 min read',
    format: 'Framework',
    author: 'Danny Battsog',
    date: 'June 2026',
    summary: 'Trust is not built through charismatic speeches; it is forged through reliable commitments, psychological safety, and clear, respectful feedback.',
    keyTakeaways: [
      'High safety + Low accountability = Comfort zone; High safety + High accountability = The Growth Zone.',
      'Distinguish between person-level criticism and system/behavioral feedback.',
      'Active listening means listening to understand context, not merely waiting for your turn to speak.'
    ],
    content: [
      'In families, friendships, and professional teams alike, relationships degrade when difficult truths are left unsaid.',
      'When you decouple feedback from character attacks and anchor it in shared goals and respect, connection deepens and mutual accountability becomes natural.',
      'Learning to hold courageous, calm conversations is one of the highest-yield capabilities a person can develop.'
    ]
  },
  {
    id: 'habit-formation-energy',
    title: 'Habits & Energy Management: Why Willpower Fails and Systems Win',
    subtitle: 'Designing sleep, movement, and recovery micro-habits that protect your biological operating system.',
    category: 'health-habits',
    categoryLabel: 'Health & Habits',
    readTime: '5 min read',
    format: 'Article',
    author: 'Danny Battsog',
    date: 'June 2026',
    summary: 'Willpower is an exhaustible battery. If your daily energy depends on heroic self-discipline, you will crash when work or life stressors spike. Environmental design and micro-habits preserve momentum.',
    keyTakeaways: [
      'Make good habits obvious and low-friction; make destructive distractions inconvenient.',
      'Prioritize sleep and daily physical movement as non-negotiable biological baselines.',
      'Energy management beats time management: 2 hours of peak focus produces more than 8 hours of exhausted presence.'
    ],
    content: [
      'Many professionals treat sleep, exercise, and recovery as reward activities they can postpone until retirement.',
      'Your physical and mental energy is the foundation for every decision, relationship, and career opportunity.',
      'By designing simple micro-routines, you maintain consistent vitality without feeling overwhelmed.'
    ]
  }
];
