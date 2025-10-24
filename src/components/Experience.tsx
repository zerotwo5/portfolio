const Experience = () => {
  const experiences = [
    {
      title: 'Jr. Red Team Analyst (Intern)',
      company: 'Bytecapsulit',
      period: '2025 - Present',
      responsibilities: [
        'Conducted penetration tests on web applications and internal networks to identify security vulnerabilities.',
        'Assisted in developing custom scripts and tools to automate security testing processes.',
        'Participated in red team exercises simulating real-world attack scenarios.',
        'Documented findings and provided remediation recommendations to development teams.',
      ],
    },
    {
      title: 'Bug Hunter',
      company: 'HackerOne, Bugcrowd, YesWeHack',
      period: '2024 - Present',
      responsibilities: [
        'Identified and responsibly disclosed security vulnerabilities in various web applications and APIs.',
        'Specialized in finding authentication bypass, XSS, CSRF, and business logic vulnerabilities.',
        'Ranked in the top 20% of researchers on platforms based on vulnerability severity and quality.',
        'Collaborated with security teams to verify and remediate reported issues.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono cyber-text">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="bg-card p-6 rounded-lg shadow-md card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="cyber-text font-medium">{exp.company}</p>
                </div>
                <span className="text-sm cyber-text bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;