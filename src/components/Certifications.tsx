import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Professional Bug Hunting & Advanced Web Application Security Testing',
      vendor: 'Bytecapsuleit',
      year: 'September 2025',
      description:
        'Comprehensive training in identifying and exploiting web vulnerabilities, including OWASP Top 10, with hands-on labs and real-world scenarios.',
      pdfUrl: '/certificates/bug-hunting-cert.pdf',
    },
    {
      title: 'Hands-on Introduction to Linux Commands & Shell Scripting',
      vendor: 'IBM',
      year: 'March 2025',
      description:
        'Practical course covering essential Linux commands, filesystem navigation, permissions, and shell scripting for automation tasks.',
      pdfUrl: '/certificates/linux-shell-cert.pdf',
    },
    {
      title: 'Networking Fundamentals',
      vendor: 'Akamami',
      year: 'February 2025',
      description:
        'Fundamental concepts of networking including TCP/IP, DNS, DHCP, firewalls, and network security principles.',
      pdfUrl: '/certificates/networking-cert.pdf',
    },
    {
      title: 'Responsive Web Design Certificate',
      vendor: 'Coders trust',
      year: 'January 2021',
      description:
        'Certification covering HTML5, CSS3, and responsive design principles to create websites that work across all device types.',
      pdfUrl: '/certificates/web-design-cert.pdf',
    },
  ];

  const openCertificate = (pdfUrl: string) => {
    // Extract certificate ID from the URL
    const certificateId = pdfUrl.split('/').pop()?.split('.')[0];
    // Open in new tab with our viewer
    window.open(`/certificate/${certificateId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono cyber-text">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card-secondary p-6 rounded-lg shadow-md card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Award className="cyber-text w-6 h-6 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                </div>

                {/* 👇 এই Button এ click করলে নতুন tab এ PDF খুলবে */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => openCertificate(cert.pdfUrl)}
                  className="ml-2 p-2 hover:bg-muted"
                >
                  <ExternalLink className="w-4 h-4 cyber-text" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm cyber-text font-medium">
                  Vendor: {cert.vendor}
                </span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Click the <ExternalLink className="inline w-4 h-4 mx-1" /> icon to view certificate details
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
