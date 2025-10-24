import { Box } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const Projects = () => {
  const projects = [
    {
      title: 'exe_signer | Github',
      description: 'A specialized Linux-based executable signing utility designed specifically for Red Team Operations! Also Perfect for Penetration Testing, Security Research, Code Signing Automation',
      technologies: ['Python3', 'OpenSSL', 'osslsigncode'],
      link: 'https://github.com/zerotwo5/exe_signer/'
    },
    {
      title: 'Web App Auth Bypass Lab ',
      description: 'A deliberately vulnerable web application demonstrating common authentication bypass techniques, with educational documentation on prevention methods.',
      technologies: ['Burp Suite', 'JWT', 'Session Hijacking'],
      link: 'https://portswigger.net/web-security/authentication/bypass'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono cyber-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card-secondary p-6 rounded-lg shadow-md card-hover transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
            >
              <div className="flex items-center mb-4">
                <Box className="cyber-text w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted text-cyber-green text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;