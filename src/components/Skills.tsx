import { Search, Globe, Terminal, Code, Cpu, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Recon & Enumeration',
      icon: Search,
      skills: [
        { name: 'Nmap', level: 90 },
        { name: 'Amass', level: 85 },
        { name: 'Nuclei', level: 80 },
        { name: 'masscan', level: 75 },
      ],
    },
    {
      title: 'Web & App Testing',
      icon: Globe,
      skills: [
        { name: 'Burp Suite', level: 85 },
        { name: 'OWASP ZAP', level: 80 },
        { name: 'SQLMap', level: 75 },
      ],
    },
    {
      title: 'Exploitation',
      icon: Terminal,
      skills: [
        { name: 'Metasploit', level: 80 },
        { name: 'Exploit-DB', level: 75 },
      ],
    },
    {
      title: 'Scripting & Automation',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash', level: 80 },
      ],
    },
    {
      title: 'OS & Platforms',
      icon: Cpu,
      skills: [
        { name: 'Linux', level: 90 },
        { name: 'Windows', level: 70 },
      ],
    },
    {
      title: 'Other',
      icon: Settings,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Wireshark', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono cyber-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card p-6 rounded-lg shadow-md card-hover transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="cyber-text w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;