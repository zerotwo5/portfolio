import { Button } from '@/components/ui/button';
import MatrixBackground from './MatrixBackground';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-black/90">
      <MatrixBackground />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono cyber-text animate-in fade-in duration-1000 text-[#00FFA1]">
          Md. Tanvir Rahman Pranto
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-mono text-muted-foreground animate-in fade-in duration-1000 delay-300">
          "Junior Red Team Analyst | Bug Hunter | Penetration Tester"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-1000 delay-500">
          <Button
            onClick={() => scrollToSection('#skills')}
            className="bg-cyber-green text-primary-foreground hover:bg-cyber-cyan font-medium"
          >
            View Skills
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="border-cyber-green text-cyber-green hover:bg-card-secondary"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;