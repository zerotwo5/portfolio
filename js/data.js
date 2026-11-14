/* ==========================================================================
   PORTFOLIO DATA  -  edit this file to update your website.

   How to add things:
   - New experience  -> add one { ... } block inside EXPERIENCE (top = newest)
   - New project     -> add one { ... } block inside PROJECTS
   - New skill       -> add { name, level } inside a category in SKILL_CATEGORIES
   - New certificate -> 1) put  <id>.pdf  and  <id>.png  in the /certificates folder
                        2) add one { id: "<id>", date: "YYYY-MM-DD", ... } block inside CERTIFICATES
                        (the site sorts certificates by date automatically, newest first)
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
// "date" is used for sorting (newest first) and is shown on the card as "Month Year".
const CERTIFICATES = [
  {
    id: "API sec CASA-cert",
    title: "Certified API Security Analyst (CASA)",
    vendor: "APISEC University",
    date: "2026-05-25",
    description:
      "Learned how APIs work and how to find common API vulnerabilities, including the OWASP API Security Top 10, such as broken authentication and broken object-level authorization.",
  },
  {
    id: "Jr. RED Team analyst-cert",
    title: "Jr Red Team Analyst (Trainee) Internship Program",
    vendor: "Byte Capsule",
    date: "2025-12-02",
    description:
      "Gained hands-on experience in penetration testing and red team work, including reconnaissance, vulnerability assessment, and reporting findings with remediation advice.",
  },
  {
    id: "bug-hunting-cert",
    title: "Professional Bug Hunting & Advanced Web Application Security Testing",
    vendor: "Byte Capsule",
    date: "2025-09-01", // only the month and year are shown
    description:
      "Comprehensive training in identifying and exploiting web vulnerabilities, including OWASP Top 10, with hands-on labs and real-world scenarios.",
  },
  {
    id: "Linux Server Management and Security-cert",
    title: "Linux Server Management and Security",
    vendor: "University of Colorado",
    date: "2025-03-22",
    description:
      "Learned to set up and manage Linux servers, including users and permissions, services, networking, firewalls, and basic server hardening.",
  },
  {
    id: "linux-shell-cert",
    title: "Hands-on Introduction to Linux Commands & Shell Scripting",
    vendor: "IBM",
    date: "2025-03-15",
    description:
      "Practical course covering essential Linux commands, filesystem navigation, permissions, and shell scripting for automation tasks.",
  },
  {
    id: "networking-cert",
    title: "Networking Fundamentals",
    vendor: "Akamami",
    date: "2025-02-09",
    description:
      "Fundamental concepts of networking including TCP/IP, DNS, DHCP, firewalls, and network security principles.",
  },
  {
    id: "CertifiedAppSecPractitioner",
    title: "Certified AppSec Practitioner (CAP) - Mock Exam",
    vendor: "The SecOps Group",
    date: "2025-01-21",
    description:
      "Practiced core application security concepts, including common web vulnerabilities from the OWASP Top 10, through a mock exam.",
  },
  {
    id: "web-design-cert",
    title: "Responsive Web Design Certificate",
    vendor: "Coders trust",
    date: "2021-01-01", // only the month and year are shown
    description:
      "Certification covering HTML5, CSS3, and responsive design principles to create websites that work across all device types.",
  },
];

const EXPERIENCE = [
  {
    title: "Jr. Red Team Analyst (Intern)",
    company: "Byte Capsule",
    period: "Sep 2025 - Dec 2025",
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
    period: "2024 - Present",
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
