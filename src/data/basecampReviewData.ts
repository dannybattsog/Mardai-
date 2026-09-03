import { ReviewDimension } from '../types';

export const BASECAMP_REVIEW_DIMENSIONS: ReviewDimension[] = [
  {
    id: 'career',
    name: 'Career & Professional Direction',
    description: 'Alignment between your daily work, your true capabilities, market positioning, and long-term trajectory.',
    prompt: 'How clearly does your current work leverage your real strengths and move you toward your long-term ambitions?',
    lowScoreAnchor: 'Feeling stuck, underutilized, or in reactive survival mode.',
    highScoreAnchor: 'Clear positioning, high autonomy, deep fulfillment, and forward momentum.',
    guidingQuestions: [
      'Are you operating in your zone of highest competence?',
      'Do you have a clear strategy for your next career move?',
      'Is your current compensation and recognition aligned with your market value?'
    ]
  },
  {
    id: 'health',
    name: 'Physical Health & Energy Baseline',
    description: 'Vitality, sleep quality, stress recovery, nutrition, and daily physical capacity.',
    prompt: 'How sustained and resilient is your physical energy throughout the week?',
    lowScoreAnchor: 'Chronic fatigue, poor sleep, neglect of exercise, high stress strain.',
    highScoreAnchor: 'High sustained vitality, disciplined movement, deep restorative sleep.',
    guidingQuestions: [
      'Do you finish the day with energy left for personal life?',
      'Is your physical routine non-negotiable or first to get cut?',
      'How quickly do you bounce back from high-stress work periods?'
    ]
  },
  {
    id: 'relationships',
    name: 'Primary Relationships & Intimacy',
    description: 'Depth of connection, emotional presence, and mutual support with partner, family, and closest loved ones.',
    prompt: 'How present, authentic, and emotionally supportive are your closest primary relationships?',
    lowScoreAnchor: 'Emotionally drained, surface-level conversations, unresolved friction.',
    highScoreAnchor: 'Deep emotional intimacy, mutual vulnerability, strong partnership.',
    guidingQuestions: [
      'Are you truly present at home or constantly mentally at work?',
      'Can you express what you actually feel without fear of conflict?',
      'Do your closest relationships nourish you or add unspoken pressure?'
    ]
  },
  {
    id: 'finances',
    name: 'Financial Clarity & Sovereignty',
    description: 'Confidence in your financial foundation, risk runway, intentional spending, and future wealth architecture.',
    prompt: 'How much control, clarity, and peace of mind do you experience around your financial trajectory?',
    lowScoreAnchor: 'Anxiety over expenses, lack of clear runway, feeling trapped by golden handcuffs.',
    highScoreAnchor: 'Transparent metrics, strategic savings/investments, confident risk capacity.',
    guidingQuestions: [
      'Do your financial commitments dictate your life choices?',
      'Do you have a clear 12-month financial resilience runway?',
      'Are your financial decisions aligned with your long-term lifestyle values?'
    ]
  },
  {
    id: 'learning',
    name: 'Continuous Learning & Mental Growth',
    description: 'Deliberate acquisition of new mental models, systems thinking, AI tools, and intellectual curiosity.',
    prompt: 'How deliberately are you expanding your cognitive frameworks and modern skillset?',
    lowScoreAnchor: 'Stagnant routines, passive media consumption, feeling left behind by tech.',
    highScoreAnchor: 'Active learning regimen, testing new tools/AI, reading substantive ideas.',
    guidingQuestions: [
      'What was the last high-leverage skill or concept you mastered?',
      'Are you leveraging AI and modern tools to augment your capabilities?',
      'Do you set aside intentional weekly time for deep intellectual synthesis?'
    ]
  },
  {
    id: 'purpose',
    name: 'Purpose, Meaning & Core Values',
    description: 'Sense of significance, alignment with non-negotiable personal values, and making a meaningful impact.',
    prompt: 'How deeply does your daily life feel connected to a purpose larger than just paying bills?',
    lowScoreAnchor: 'Going through the motions, existential numbness, disconnected from core values.',
    highScoreAnchor: 'Clear personal ethos, high conviction, acting in accordance with principles.',
    guidingQuestions: [
      'Can you clearly articulate your top 3 non-negotiable core values?',
      'Does your daily schedule reflect what you claim matters most to you?',
      'Are you building something that outlasts your immediate comfort?'
    ]
  },
  {
    id: 'community',
    name: 'Community, Brotherhood & Peer Network',
    description: 'Having high-caliber peers with whom you can be completely candid, hold mutual accountability, and share opportunity.',
    prompt: 'Do you have trusted, high-caliber peers who challenge and support you without posturing?',
    lowScoreAnchor: 'Professional isolation, transactional networking only, lack of real male camaraderie.',
    highScoreAnchor: 'Rich circle of honest confidants, mutual accountability, genuine brotherhood.',
    guidingQuestions: [
      'Who can you call when you are genuinely struggling without saving face?',
      'Do the people around you hold you to higher standards or enable complacency?',
      'Are you actively contributing to a community of like-minded builders?'
    ]
  },
  {
    id: 'next90days',
    name: 'Next 90 Days Clarity & Execution',
    description: 'A focused, disciplined roadmap with clear quarterly milestones, weekly operating cadences, and zero ambiguity.',
    prompt: 'How crystal-clear and executable is your game plan for the upcoming 90 days?',
    lowScoreAnchor: 'Scattered priorities, procrastination, reactive fire-fighting.',
    highScoreAnchor: 'Top 3 measurable sprint goals, weekly review ritual, disciplined execution.',
    guidingQuestions: [
      'Can you name your single highest-leverage priority for this quarter in 5 seconds?',
      'Do you have a weekly rhythm to assess whether you moved the needle?',
      'What is the one commitment you need to stop making to protect your focus?'
    ]
  }
];
