// ============================================================
// SITE CONTENT — Edit this file to update all portfolio data
// ============================================================

export const siteConfig = {
  name: "Jeeno SK",
  title: "Cyber Security Student | Security Researcher | CTF Learner",
  email: "jeenosk04@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeeno",
  github: "https://github.com/Jeeno-SK",
  college: "KPR Institute of Technology",
  year: "2nd Year CSE Student",
  resumeUrl: "/resume.pdf", // Replace with actual resume link
};

export const about = {
  headline: "Breaking things to build them better.",
  bio: "I'm Jeeno SK, a Cyber Security enthusiast and 2nd-year CSE student at KPR Institute of Technology, passionate about ethical hacking, security research, and hands-on problem solving.",
  focusAreas: ["Ethical Hacking", "Security Research", "CTF Challenges"],
};

export const stats = [
  { label: "Projects Completed", value: "4+", icon: "FolderGit2" },
  { label: "Labs Solved", value: "20+", icon: "FlaskConical" },
  { label: "Learning Tracks", value: "9", icon: "BookOpen" },
];

export const learningTopics = [
  { name: "Networking Fundamentals", percent: 75, status: "In Progress" },
  { name: "Linux Fundamentals", percent: 65, status: "In Progress" },
  { name: "Web Security", percent: 60, status: "In Progress" },
  { name: "Cryptography", percent: 40, status: "Learning" },
  { name: "Reverse Engineering", percent: 25, status: "Learning" },
  { name: "Binary Exploitation", percent: 15, status: "Exploring" },
  { name: "Cloud Security", percent: 0, status: "Not Yet" },
  { name: "Malware Analysis", percent: 0, status: "Not Yet" },
  { name: "Digital Forensics", percent: 0, status: "Not Yet" },
];

export const currentFocus =
  "Currently focusing on Web Exploitation and System Security — actively practicing on Hack The Box and PortSwigger Web Security Academy.";

export const platforms = [
  {
    name: "Hack The Box",
    color: "#9FEF00",
    bgColor: "#0D1117",
    stats: [
      { label: "Labs Completed", value: "—" },
      { label: "Current Path", value: "—" },
    ],
    link: "#", // Replace with actual HTB profile
    linkLabel: "View HTB Profile",
  },
  {
    name: "PortSwigger",
    color: "#FF6633",
    bgColor: "#1A0A00",
    stats: [
      { label: "Labs Completed", value: "—" },
      { label: "Current Module", value: "—" },
    ],
    link: "#", // Replace with actual PortSwigger profile
    linkLabel: "View PortSwigger Profile",
  },
];

export const projects = [
  {
    id: 1,
    name: "Memory Investigation Tool",
    description:
      "A forensics utility for analyzing memory dumps, extracting artifacts, and identifying indicators of compromise in volatile memory.",
    tech: ["Python", "Volatility", "Linux"],
    github: "#",
    demo: "",
    image: "",
    status: "In Development",
  },
  {
    id: 2,
    name: "AI Security Dashboard",
    description:
      "An intelligent dashboard that aggregates threat intelligence feeds, visualizes attack vectors, and provides AI-driven risk scoring.",
    tech: ["Next.js", "Python", "OpenAI API", "TypeScript"],
    github: "#",
    demo: "",
    image: "",
    status: "In Development",
  },
  {
    id: 3,
    name: "Malware Analysis Sandbox",
    description:
      "Isolated execution environment for safely running and analyzing suspicious binaries with behavioral monitoring and reporting.",
    tech: ["Python", "Docker", "YARA", "Linux"],
    github: "#",
    demo: "",
    image: "",
    status: "Planning",
  },
  {
    id: 4,
    name: "Threat Detection System",
    description:
      "Network-level anomaly detection system that uses pattern matching and heuristics to identify suspicious traffic in real time.",
    tech: ["Python", "Scapy", "ML", "Wireshark"],
    github: "#",
    demo: "",
    image: "",
    status: "Planning",
  },
];
