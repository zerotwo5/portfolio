/* ==========================================================================
   PORTFOLIO DATA  -  edit this file to update your website.

   How to add things:
   - New experience  -> add one { ... } block inside EXPERIENCE (top = newest)
   - New project     -> add one { ... } block inside PROJECTS
   - New skill       -> add { name, level } inside a category in SKILL_CATEGORIES
   - New certificate -> 1) put  <id>.pdf  and  <id>.png  in the /certificates folder
                        2) add one { id: "<id>", ... } block inside CERTIFICATES
   No other file needs to be changed.
   ========================================================================== */

const CONFIG = {
  // EmailJS (contact form)
  emailjs: {
    serviceId: "service_kvpk9pt",
    templateId: "template_hopsq87",
    publicKey: "31A3X6gChGdZsGsJb",
  },
  // CV button link
  cvUrl: "https://drive.google.com/file/d/1ZtTwkmO1ka_IKpisS7JftIyk-RJA2Kd4/view",
  cvLastUpdated: "January 2026",
};

const SKILL_CATEGORIES = [
  {
    title: "Recon & Enumeration",
    icon: "search",
    skills: [
      { name: "Nmap", level: 90 },
      { name: "Amass", level: 85 },
      { name: "Nuclei", level: 80 },
      { name: "masscan", level: 75 },
    ],
  },
  {
    title: "Web & App Testing",
    icon: "globe",
    skills: [
      { name: "Burp Suite", level: 85 },
      { name: "OWASP ZAP", level: 80 },
      { name: "SQLMap", level: 75 },
    ],
  },
  {
    title: "Exploitation",
    icon: "terminal",
    skills: [
      { name: "Metasploit", level: 80 },
      { name: "Exploit-DB", level: 75 },
    ],
  },
  {
    title: "Scripting & Automation",
    icon: "code",
    skills: [
      { name: "Python", level: 85 },
      { name: "Bash", level: 80 },
    ],
  },
  {
    title: "OS & Platforms",
    icon: "cpu",
    skills: [
      { name: "Linux", level: 90 },
      { name: "Windows", level: 70 },
    ],
  },
  {
    title: "Other",
    icon: "settings",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Wireshark", level: 80 },
    ],
  },
];

// The certificate files must be: certificates/<id>.pdf and certificates/<id>.png
const CERTIFICATES = [
  {
    id: "bug-hunting-cert",
    title: "Professional Bug Hunting & Advanced Web Application Security Testing",
    vendor: "Bytecapsuleit",
    year: "September 2025",
    description:
      "Comprehensive training in identifying and exploiting web vulnerabilities, including OWASP Top 10, with hands-on labs and real-world scenarios.",
  },
  {
    id: "linux-shell-cert",
    title: "Hands-on Introduction to Linux Commands & Shell Scripting",
    vendor: "IBM",
    year: "March 2025",
    description:
      "Practical course covering essential Linux commands, filesystem navigation, permissions, and shell scripting for automation tasks.",
  },
  {
    id: "networking-cert",
    title: "Networking Fundamentals",
    vendor: "Akamami",
    year: "February 2025",
    description:
      "Fundamental concepts of networking including TCP/IP, DNS, DHCP, firewalls, and network security principles.",
  },
  {
    id: "web-design-cert",
    title: "Responsive Web Design Certificate",
    vendor: "Coders trust",
    year: "January 2021",
    description:
      "Certification covering HTML5, CSS3, and responsive design principles to create websites that work across all device types.",
  },
];

const EXPERIENCE = [
  {
    title: "Jr. Red Team Analyst (Intern)",
    company: "Bytecapsulit",
    period: "2025 - 2026",
    responsibilities: [
      "Conducted penetration tests on web applications and internal networks to identify security vulnerabilities.",
      "Assisted in developing custom scripts and tools to automate security testing processes.",
      "Participated in red team exercises simulating real-world attack scenarios.",
      "Documented findings and provided remediation recommendations to development teams.",
    ],
  },
  {
    title: "Bug Hunter",
    company: "HackerOne, Bugcrowd, YesWeHack",
    period: "2024 - 2026",
    responsibilities: [
      "Identified and responsibly disclosed security vulnerabilities in various web applications and APIs.",
      "Specialized in finding authentication bypass, XSS, CSRF, and business logic vulnerabilities.",
      "Ranked in the top 20% of researchers on platforms based on vulnerability severity and quality.",
      "Collaborated with security teams to verify and remediate reported issues.",
    ],
  },
];

const PROJECTS = [
  {
    title: "exe_signer | Github",
    description:
      "A specialized Linux-based executable signing utility designed specifically for Red Team Operations! Also Perfect for Penetration Testing, Security Research, Code Signing Automation",
    technologies: ["Python3", "OpenSSL", "osslsigncode"],
    link: "https://github.com/zerotwo5/exe_signer/",
  },
  {
    title: "Web App Auth Bypass Lab",
    description:
      "A deliberately vulnerable web application demonstrating common authentication bypass techniques, with educational documentation on prevention methods.",
    technologies: ["Burp Suite", "JWT", "Session Hijacking"],
    link: "https://portswigger.net/web-security/authentication",
  },
];

const SOCIAL_LINKS = [
  { name: "Email", icon: "mail", href: "mailto:mdpranto025@gmail.com", label: "mdpranto025@gmail.com" },
  { name: "GitHub", icon: "github", href: "https://github.com/zerotwo5", label: "github.com/zerotwo5" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/pranto025/", label: "linkedin.com/in/pranto025" },
  { name: "Telegram", icon: "send", href: "https://t.me/pranto025", label: "@pranto025" },
];
