/**
 * All story content lives here, so it can be edited without touching components.
 * Any string that starts with "[" is treated as an editable placeholder and is
 * rendered in a dashed, muted style so it is obvious it still needs your words.
 */

export type IconKey =
  | "school"
  | "book"
  | "cap"
  | "code"
  | "database"
  | "globe"
  | "rocket"
  | "heart"
  | "users"
  | "server"
  | "shield"
  | "compass"
  | "trophy"
  | "theater"
  | "lightbulb"
  | "megaphone"
  | "target"
  | "handshake"
  | "building"
  | "sparkles";

export const isPlaceholder = (text: string) => text.trim().startsWith("[");

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroLines = [
  { lead: "Engineer", rest: "by Education." },
  { lead: "Entrepreneur", rest: "by Experiment." },
  { lead: "Marketer", rest: "by Passion." },
  { lead: "Management Professional", rest: "by Evolution." },
];

/* ------------------------------------------------------------------ */
/* Journey timeline                                                    */
/* ------------------------------------------------------------------ */

export type Chapter = {
  number: number;
  title: string;
  period: string;
  blurb: string;
};

export type JourneyEvent = {
  id: string;
  chapter: number;
  period: string;
  title: string;
  place?: string;
  summary: string;
  details: string[];
  icon: IconKey;
  link?: { href: string; label: string };
};

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "The Beginning",
    period: "2016 – 2023",
    blurb: "Education and curiosity: where analytical thinking took root.",
  },
  {
    number: 2,
    title: "First Professional Steps",
    period: "2021 – 2023",
    blurb: "Three internships that turned classroom skills into real work.",
  },
  {
    number: 3,
    title: "Learning by Doing",
    period: "College years and beyond",
    blurb: "Business experiments that taught me sales, people and execution.",
  },
  {
    number: 4,
    title: "The Corporate Journey",
    period: "2023 – 2026",
    blurb: "Thirty-three months keeping critical banking systems running.",
  },
  {
    number: 5,
    title: "The Management Transformation",
    period: "2026 – 2028",
    blurb: "The deliberate move from technology to business leadership.",
  },
];

export const journeyEvents: JourneyEvent[] = [
  // Chapter 1
  {
    id: "school",
    chapter: 1,
    period: "2016",
    title: "School Education",
    place: "Guru Siddharth International School",
    summary: "Where it started: 87.40% in Class X.",
    details: [
      "Completed Class X at Guru Siddharth International School with 87.40%.",
      "The first chapter of building discipline and a habit of showing up.",
    ],
    icon: "school",
  },
  {
    id: "higher-secondary",
    chapter: 1,
    period: "2019",
    title: "Higher Secondary Education",
    place: "Guru Deep Academy",
    summary: "Class XII completed with 75.20%.",
    details: [
      "Completed Class XII at Guru Deep Academy with 75.20%.",
      "The bridge between school curiosity and a serious choice: engineering.",
    ],
    icon: "book",
  },
  {
    id: "btech",
    chapter: 1,
    period: "2020 – 2023",
    title: "The Engineering Journey",
    place: "AIETM, Jaipur · Rajasthan Technical University",
    summary:
      "B.Tech in Computer Science Engineering, and the way of thinking that came with it.",
    details: [
      "Pursued B.Tech in Computer Science Engineering at AIETM, Jaipur, affiliated with Rajasthan Technical University.",
      "Achieved 94.70% in the academic record.",
      "Secured second position in academic performance in the third and fourth years.",
      "Engineering taught me to break messy problems into small, solvable pieces. That analytical, structured habit still shapes how I approach every business question.",
      "It was also where my interest in technology and problem-solving began to meet an interest in business.",
    ],
    icon: "cap",
  },
  // Chapter 2
  {
    id: "dot-squares",
    chapter: 2,
    period: "Nov – Dec 2021",
    title: "Software Developer Intern",
    place: "Dot Squares · Australia",
    summary: "A first step into professional software work.",
    details: [
      "Role: Software Developer.",
      "My first exposure to how software gets built inside a real company.",
    ],
    icon: "code",
  },
  {
    id: "mitash",
    chapter: 2,
    period: "Jun – Aug 2022",
    title: "Web Developer Intern",
    place: "Mitash Digital · Australia",
    summary: "Web development with a digital business lens.",
    details: [
      "Role: Web Developer.",
      "Deepened my understanding of digital businesses and what clients expect from a website.",
    ],
    icon: "globe",
  },
  {
    id: "rnf",
    chapter: 2,
    period: "Feb – Aug 2023",
    title: "Data Research Analyst Intern",
    place: "RNF Technologies · Noida",
    summary: "From building things to researching and making sense of data.",
    details: [
      "Role: Data Research Analyst.",
      "My introduction to data research and to working in a structured professional environment.",
    ],
    icon: "database",
  },
  // Chapter 3
  {
    id: "cosmic",
    chapter: 3,
    period: "~1.5 years during college",
    title: "CosmicDesigner.in",
    summary: "My first serious entrepreneurial experiment: 53 websites sold.",
    details: [
      "Started a website development venture with a friend while in college.",
      "I handled sales and clients; my friend handled development.",
      "The income funded my third-year college fees.",
    ],
    icon: "rocket",
    link: { href: "#ventures", label: "Read the full story" },
  },
  {
    id: "sanitizer",
    chapter: 3,
    period: "COVID-19 era",
    title: "The Sanitizer Venture",
    summary: "Affordable sanitizers, ~32 volunteers, and a profit within four days.",
    details: [
      "Worked with Life Line Raktadata Bank NGO to make affordable sanitizers accessible.",
      "Led by action: grassroots marketing, operations, distribution and community engagement.",
    ],
    icon: "heart",
    link: { href: "#ventures", label: "Read the full story" },
  },
  {
    id: "teaching",
    chapter: 3,
    period: "Ongoing, Operations Head in 2025",
    title: "Education & Social Impact",
    summary: "100+ students taught, and a community I keep returning to.",
    details: [
      "Taught more than 100 economically weaker students.",
      "Worked with Newtons Education Wizard Sansthan and served as Operations Head in 2025.",
      "Volunteered with Lifeline Blood Group in Beawar, Rajasthan.",
    ],
    icon: "users",
    link: { href: "#ventures", label: "Read the full story" },
  },
  // Chapter 4
  {
    id: "tech-mahindra",
    chapter: 4,
    period: "29 Aug 2023 – 30 May 2026",
    title: "Software Engineer, Tech Mahindra",
    place: "BFSI · Critical banking applications",
    summary: "Thirty-three months, 20 critical banking applications, 7,000+ incidents resolved.",
    details: [
      "Supported and managed 20 critical banking applications in a BFSI environment.",
      "Resolved more than 7,000 incidents while maintaining 99.7%+ SLA compliance.",
      "Improved application reliability by 37% through proactive analysis and automation.",
      "Received the Standing Ovation Award for Outstanding Contribution in 2025.",
    ],
    icon: "server",
    link: { href: "#experience", label: "See the numbers" },
  },
  // Chapter 5
  {
    id: "imt",
    chapter: 5,
    period: "2026 – 2028",
    title: "PGDM, IMT Ghaziabad",
    place: "Corporate Relations Team · Placement Committee",
    summary: "The next chapter: from engineering systems to building businesses.",
    details: [
      "Currently pursuing PGDM at IMT Ghaziabad.",
      "Focused on Marketing, Consumer Behaviour, Business Development and Strategy.",
      "Member of the Corporate Relations Team and involved with the Placement Committee, coordinating corporate recruitment and recruiter communication.",
    ],
    icon: "compass",
    link: { href: "#education", label: "Where I'm heading" },
  },
];

/* ------------------------------------------------------------------ */
/* Ventures                                                            */
/* ------------------------------------------------------------------ */

export type Venture = {
  id: string;
  name: string;
  kind: string;
  period: string;
  tagline: string;
  icon: IconKey;
  metrics: { value: string; label: string }[];
  contribution: string[];
  story: string;
  challenge: string;
  outcome: string[];
  learning: string[];
};

export const ventures: Venture[] = [
  {
    id: "cosmicdesigner",
    name: "CosmicDesigner.in",
    kind: "Business 01 · Web development venture",
    period: "~1.5 years · during college",
    tagline: "My first serious entrepreneurial experiment.",
    icon: "rocket",
    metrics: [
      { value: "53", label: "websites sold" },
      { value: "4", label: "person team" },
      { value: "1.5 yrs", label: "of running it" },
    ],
    contribution: [
      "Primarily handled sales, customer communication and client acquisition.",
      "My friend and co-founder handled development.",
      "Built a team of four: three developers and one salesperson.",
    ],
    story:
      "Alongside college, a friend and I started building websites for paying clients. We began by exploring platforms such as Fiverr, then moved to direct shop-to-shop selling. I took on the part many engineers avoid: finding customers, pitching them and closing the deal.",
    challenge:
      "Moving from online platforms to direct, shop-to-shop selling meant learning to find, pitch and convince customers myself.",
    outcome: [
      "Successfully sold 53 websites.",
      "Generated enough income to fund my third-year college fees.",
    ],
    learning: [
      "Sales and persuasion",
      "Customer acquisition",
      "Business development",
      "Team management",
      "Pricing and negotiation",
      "Converting an idea into revenue",
    ],
  },
  {
    id: "sanitizer",
    name: "COVID-19 Sanitizer Venture",
    kind: "Business 02 · Community initiative",
    period: "During the COVID-19 pandemic",
    tagline: "Execution at speed, with a social purpose.",
    icon: "heart",
    metrics: [
      { value: "~32", label: "volunteers" },
      { value: "4 days", label: "to profit" },
    ],
    contribution: [
      "Participated in an initiative with Life Line Raktadata Bank NGO.",
      "Worked with a group of approximately 32 volunteers.",
      "[Add: your specific role, e.g. what you personally handled]",
    ],
    story:
      "During the pandemic, I joined an initiative with Life Line Raktadata Bank NGO to make affordable sanitizers accessible to people. It was grassroots work: marketing on the ground, operations, distribution and community engagement, all driven by a group of volunteers.",
    challenge: "[Add: the biggest obstacle you faced and how you worked through it]",
    outcome: [
      "Affordable sanitizers made accessible to the community.",
      "The venture generated enough profit within four days to purchase a Royal Enfield motorcycle.",
    ],
    learning: [
      "Grassroots marketing",
      "Operations and distribution",
      "Community engagement",
      "Coordinating volunteers",
      "Execution under pressure",
    ],
  },
  {
    id: "education-impact",
    name: "Education & Social Impact",
    kind: "Business 03 · Teaching and community",
    period: "Ongoing · Operations Head in 2025",
    tagline: "Where leadership meets empathy.",
    icon: "users",
    metrics: [
      { value: "100+", label: "students taught" },
      { value: "2025", label: "Operations Head" },
    ],
    contribution: [
      "Taught more than 100 economically weaker students.",
      "Worked with Newtons Education Wizard Sansthan and served as Operations Head in 2025.",
      "Volunteered with Lifeline Blood Group in Beawar, Rajasthan.",
    ],
    story:
      "Not every venture is measured in revenue. Teaching students from economically weaker backgrounds, running operations at Newtons Education Wizard Sansthan and volunteering with Lifeline Blood Group taught me how to lead people and communicate with them.",
    challenge: "[Add: a challenge from teaching or running operations]",
    outcome: [
      "More than 100 students taught.",
      "Operations Head at Newtons Education Wizard Sansthan in 2025.",
    ],
    learning: [
      "Leadership",
      "Communication",
      "Empathy",
      "Working with people",
      "Running operations",
    ],
  },
];

export const cosmicWorkflow = [
  { label: "Idea", icon: "lightbulb" as IconKey },
  { label: "Finding Customers", icon: "target" as IconKey },
  { label: "Pitching", icon: "megaphone" as IconKey },
  { label: "Closing Deals", icon: "handshake" as IconKey },
  { label: "Website Development", icon: "code" as IconKey },
  { label: "Revenue", icon: "sparkles" as IconKey },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const techMahindra = {
  company: "Tech Mahindra Ltd.",
  role: "Software Engineer",
  duration: "29 August 2023 – 30 May 2026",
  totalExperience: "33 Months",
  industry: "IT Services: Application Development, Maintenance, Support and Technology Consulting",
  environment: "BFSI",
  transformation:
    "From writing and maintaining code to understanding business operations, managing critical systems, and delivering measurable business outcomes.",
  stats: [
    { to: 20, suffix: "", label: "Applications", note: "critical banking applications supported" },
    { to: 7000, suffix: "+", label: "Incidents", note: "resolved" },
    { to: 99.7, suffix: "%+", label: "SLA", note: "compliance maintained", decimals: 1 },
    { to: 37, suffix: "%", label: "Reliability", note: "improvement via analysis and automation" },
    { to: 33, suffix: "", label: "Months", note: "in a BFSI environment" },
  ],
  highlights: [
    "Supported and managed 20 critical banking applications.",
    "Resolved more than 7,000 incidents.",
    "Maintained 99.7%+ SLA compliance.",
    "Improved application reliability by 37% through proactive analysis and automation.",
    "Worked in a BFSI environment supporting critical banking operations.",
  ],
  award: {
    title: "Standing Ovation Award",
    subtitle: "For Outstanding Contribution",
    org: "Tech Mahindra",
    year: "2025",
  },
};

export const internships = [
  {
    company: "Dot Squares",
    place: "Australia",
    role: "Software Developer",
    period: "Nov 2021 – Dec 2021",
    icon: "code" as IconKey,
  },
  {
    company: "Mitash Digital",
    place: "Australia",
    role: "Web Developer",
    period: "Jun 2022 – Aug 2022",
    icon: "globe" as IconKey,
  },
  {
    company: "RNF Technologies",
    place: "Noida",
    role: "Data Research Analyst",
    period: "Feb 2023 – Aug 2023",
    icon: "database" as IconKey,
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education = [
  {
    period: "2016",
    title: "Class X",
    place: "Guru Siddharth International School",
    score: "87.40%",
    icon: "school" as IconKey,
  },
  {
    period: "2019",
    title: "Class XII",
    place: "Guru Deep Academy",
    score: "75.20%",
    icon: "book" as IconKey,
  },
  {
    period: "2020 – 2023",
    title: "B.Tech, Computer Science Engineering",
    place: "AIETM, Jaipur · Rajasthan Technical University",
    score: "94.70%",
    icon: "cap" as IconKey,
  },
];

export const imt = {
  title: "PGDM, IMT Ghaziabad",
  period: "2026 – 2028",
  intro:
    "After 33 months of keeping critical systems running, I chose to learn how businesses are grown, positioned and led. This is the deliberate next step.",
  focus: ["Marketing", "Consumer Behaviour", "Business Development", "Strategy"],
  points: [
    "Transition from Software Engineering to Management.",
    "Learning business through practical projects, case studies and industry interactions.",
    "Member of the Corporate Relations Team.",
    "Placement Committee involvement and corporate recruitment coordination.",
    "Experience in stakeholder management and recruiter communication.",
  ],
};

export const certifications = [
  {
    title: "Market Research and Consumer Behaviour",
    issuer: "IE Business School",
    year: "2026",
  },
  {
    title: "Digital Marketing and E-commerce Professional Certificate",
    issuer: "Google",
    year: "2026",
  },
  {
    title: "Supply Chain Management with Gen AI for Data-Driven Business Decision-Making",
    issuer: "IIM Mumbai",
    year: "2025",
  },
];

/* ------------------------------------------------------------------ */
/* Achievements                                                        */
/* ------------------------------------------------------------------ */

export type AchievementCategory = "Corporate" | "Academic" | "Creative" | "Learning";

export const achievements: {
  title: string;
  org: string;
  year: string;
  category: AchievementCategory;
  icon: IconKey;
  note: string;
}[] = [
  {
    title: "Standing Ovation Award",
    org: "Tech Mahindra",
    year: "2025",
    category: "Corporate",
    icon: "trophy",
    note: "Recognised for outstanding contribution.",
  },
  {
    title: "Second Position in Academic Performance",
    org: "AIETM",
    year: "2024",
    category: "Academic",
    icon: "cap",
    note: "Consistent performance across the third and fourth years.",
  },
  {
    title: "Top 5 Finalist: Innovative Business Ideas",
    org: "AIETM",
    year: "2023",
    category: "Academic",
    icon: "lightbulb",
    note: "Early validation of the entrepreneurial instinct.",
  },
  {
    title: "First Position: Inter-College Drama Competition",
    org: "Shraddhanjali",
    year: "2022",
    category: "Creative",
    icon: "theater",
    note: "Proof that communication is as much performance as it is content.",
  },
  {
    title: "Professional Certifications",
    org: "Google · IE Business School · IIM Mumbai",
    year: "2025 – 2026",
    category: "Learning",
    icon: "sparkles",
    note: "Building the marketing and strategy toolkit.",
  },
];

export const leadership = [
  {
    title: "Operations Head, 2025",
    org: "Newtons Education Wizard Sansthan",
    icon: "users" as IconKey,
  },
  {
    title: "Corporate Relations Team",
    org: "IMT Ghaziabad",
    icon: "handshake" as IconKey,
  },
  {
    title: "Placement Committee",
    org: "IMT Ghaziabad · recruiter coordination",
    icon: "building" as IconKey,
  },
  {
    title: "Volunteer",
    org: "Lifeline Blood Group · Beawar, Rajasthan",
    icon: "heart" as IconKey,
  },
];

export const numbers = [
  { to: 33, suffix: "", label: "Months of corporate experience" },
  { to: 20, suffix: "", label: "Applications supported" },
  { to: 7000, suffix: "+", label: "Incidents resolved" },
  { to: 99.7, suffix: "%+", label: "SLA compliance", decimals: 1 },
  { to: 53, suffix: "", label: "Websites sold" },
  { to: 100, suffix: "+", label: "Students taught" },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutIntro = [
  "I'm Dhruv, an engineer by education, a marketer by interest, an entrepreneur by experimentation, and a management professional in development.",
  "My journey is a mix of technology, business, creativity, sales, leadership and people management. I started by learning how systems work, then learned how businesses work, and now I'm learning how to lead them.",
];

export const philosophy =
  "I believe every experience, whether a success, failure, experiment, or unexpected opportunity, contributes to the person we become.";

export const lenses = [
  {
    key: "Engineer",
    icon: "code" as IconKey,
    text: "B.Tech in Computer Science and 33 months at Tech Mahindra gave me a structured, analytical way of solving problems, and respect for reliability when systems matter.",
  },
  {
    key: "Entrepreneur",
    icon: "rocket" as IconKey,
    text: "From CosmicDesigner.in to the sanitizer initiative, I learned by doing: selling, building teams and carrying financial responsibility for outcomes.",
  },
  {
    key: "Marketer",
    icon: "megaphone" as IconKey,
    text: "Selling websites shop-to-shop and grassroots marketing taught me persuasion first. Consumer behaviour, market research and digital marketing are turning that instinct into method.",
  },
  {
    key: "Manager",
    icon: "compass" as IconKey,
    text: "At IMT Ghaziabad I'm building the strategy and business toolkit, and practising stakeholder management through the Corporate Relations Team and Placement Committee.",
  },
];

export const openTo = [
  "Marketing",
  "Business Development",
  "Consulting",
  "Strategy",
  "Management",
];
