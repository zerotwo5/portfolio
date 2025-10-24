const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono cyber-text">
          About Me
        </h2>
        <div className="bg-card-secondary p-8 rounded-lg shadow-lg card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden cyber-glow">
                  <img
                    src="https://i.postimg.cc/Bbmb9nv4/01823052662-1-1-retouched.jpg"
                    alt="Md. Tanvir Rahman Pranto - Cybersecurity Professional"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg border-2 border-cyber-green/30"></div>
              </div>
            </div>

            {/* About Text */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Md. Tanvir Rahman Pranto, a passionate cybersecurity learner and aspiring Red Team professional.
                I specialize in ethical hacking, penetration testing, and network security, with a strong interest in automation
                and building efficient recon workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I spend my time exploring real-world attack scenarios, solving Hack The Box and TryHackMe labs, and continuously
                improving my skills in reconnaissance, privilege escalation, and web exploitation. I also enjoy scripting in Bash
                and Python to automate repetitive security tasks and make my workflow faster and more effective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to help secure systems by identifying vulnerabilities before attackers do. I am committed to continuous
                learning, staying up-to-date with the latest security tools, techniques, and methodologies, and sharing knowledge
                with the cybersecurity community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;