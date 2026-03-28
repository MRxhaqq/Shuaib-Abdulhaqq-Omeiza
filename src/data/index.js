export const personalInfo = {
  name: "Shuaib Abdulhaqq Omeiza",
  firstName: "Shuaib",
  lastName: "Abdulhaqq",
  title: "Frontend Developer",
  // "I build things that looks good, feels smooth, and actually work — one line of code at a time."
  tagline:
    "I write codes that gives you the best visual representation of your ideas in line with a quality actualization from my end.",
  email: "mrxhaqq@gmail.com",
  github: "https://github.com/MRxhaqq",
  linkedin: "https://linkedin.com/in/abdulhaqq-shuaib-56769239b",
  status: "Open to work",
  degree: "B.Sc. Computer Science",
  location: "Nigeria",
};

export const aboutText = [
  "I'm Shuaib Abdulhaqq Omeiza, a self-taught frontend developer with a degree in Computer Science. My journey into coding started when a role model introduced me to the world of building things on the web — and I never looked back.",
  "What keeps me going is the unique mix of creativity and logic that coding demands every single day — the satisfaction of solving a problem that stumped me for hours, the thrill of seeing a UI come alive exactly as I imagined it, and yes, even the beautifully frustrating process of debugging that makes the breakthrough feel that much sweeter.",
  "I'm driven by the fact that this industry never stops evolving. There is always something new to learn, a better way to build, a smarter solution to find. I build with React, Tailwind CSS, and modern JavaScript — always pushing to make every project cleaner, faster, and more thoughtful than the last.",
];

export const differentiator =
  "Shuaib doesn't just write code — he thinks about the person on the other side of the screen. With a degree in Computer Science and a self-driven approach to mastering modern frontend tools, he brings both academic foundation and real-world building experience to every project. He obsesses over the details that most developers skip — the micro-animations that make an interaction feel alive, the layout that works on every screen size, the small touches that turn a good UI into one people genuinely enjoy using. He believes great frontend development is part engineering, part empathy — and he brings both to everything he builds.";

export const skills = [
  { name: "React", level: 75, category: "framework" },
  { name: "JavaScript", level: 80, category: "language" },
  { name: "HTML & CSS", level: 90, category: "language" },
  { name: "Tailwind CSS", level: 78, category: "styling" },
  { name: "Chakra UI", level: 70, category: "styling" },
  { name: "Framer Motion", level: 65, category: "animation" },
  { name: "Chart.js", level: 60, category: "library" },
  { name: "Git & GitHub", level: 72, category: "tool" },
];

export const projects = [
  {
    id: 1,
    title: "DevHive",
    subtitle: "Tech Job Board",
    description:
      "A premium dark-themed tech job board with real-time job listings from the Adzuna API. Features instant search with debouncing, smart filters, animated job cards, a slide-in detail panel, and a bookmark system.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Adzuna API"],
    liveUrl: "https://dev-hive-tech-job-board.vercel.app/",
    githubUrl: "https://github.com/MRxhaqq/DevHive-Tech-Job-Board",
    color: "#00ffff",
    gradient: "from-cyan-400 to-blue-600",
    number: "01",
  },
  {
    id: 2,
    title: "WealthWise",
    subtitle: "Finance Dashboard",
    description:
      "A full personal finance dashboard with animated stat cards, bar and donut charts, complete CRUD transaction management, light/dark mode, category breakdowns, and monthly analytics.",
    tech: ["React", "Tailwind CSS", "Chart.js", "Framer Motion"],
    liveUrl: "https://wealth-wise-finance-dashboard.vercel.app/",
    githubUrl: "https://github.com/MRxhaqq/WealthWise-finance-dashboard",
    color: "#00ff88",
    gradient: "from-emerald-400 to-teal-600",
    number: "02",
  },
  {
    id: 3,
    title: "Luxury Hijabi",
    subtitle: "E-Commerce Store",
    description:
      "A premium e-commerce storefront for a modest fashion brand. Built with React and custom CSS, featuring product listings, a shopping cart, product detail pages, and a clean luxury aesthetic designed to convert browsers into buyers.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    liveUrl: "https://luxury-hijabi.vercel.app",
    githubUrl: "https://github.com/MRxhaqq/Luxury-Hijabi-Project",
    color: "#d4af37",
    gradient: "from-amber-400 to-yellow-600",
    number: "03",
  },
  {
    id: 4,
    title: "MultiStep Form",
    subtitle: "Onboarding Form",
    description:
      "A polished 5-step user onboarding form with per-step validation, profile photo upload with live preview, interest selection, newsletter toggle, a full review screen before submission, session persistence across page refreshes, and an animated success screen.",
    tech: ["React", "Chakra UI v3", "sessionStorage"],
    liveUrl: "https://mrxhaqq-multi-step-form.vercel.app/",
    githubUrl: "https://github.com/MRxhaqq/multi-step-form",
    color: "#a855f7",
    gradient: "from-purple-400 to-violet-600",
    number: "04",
  },

  {
    id: 5,
    title: "NoteFlow",
    subtitle: "Markdown Notes App",
    description:
      "A premium markdown notes app with a split-pane editor and live preview, full-text search, a tag system with filtering, debounced autosave, word count and reading time, keyboard shortcuts, and complete localStorage persistence.",
    tech: ["React", "Tailwind CSS", "shadcn/ui", "react-markdown"],
    liveUrl: "https://mrxhaqq-noteflow.vercel.app/",
    githubUrl: "https://github.com/MRxhaqq/NoteFlow-",
    color: "#f97316",
    gradient: "from-orange-400 to-rose-500",
    number: "05",
  },

  {
    id: 6,
    title: "Zesti",
    subtitle: "Recipe Finder",
    description:
      "A premium recipe discovery app powered by TheMealDB API. Features instant search, category filtering with live API fetch and silent fallback, CLS-matched skeleton loading, a tabbed recipe modal with servings scaler, bookmark system, and a drag-and-drop weekly meal planner.",
    tech: ["React", "React Router", "Motion", "@dnd-kit", "TheMealDB API"],
    liveUrl: "https://zesti-pro.vercel.app",
    githubUrl: "https://github.com/MRxhaqq/zesti",
    color: "#0d9488",
    gradient: "from-teal-500 to-emerald-600",
    number: "06",
  },
];
