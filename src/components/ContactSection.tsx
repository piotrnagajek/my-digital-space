import { Linkedin, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="max-w-2xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground font-bold">
            Let's connect
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg mb-6">
            Interested in working together or just want to say hello? Reach out below.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/piotr-nagajek-799475bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body text-primary hover:text-foreground transition-colors duration-300 border border-border hover:border-primary/40 rounded-full px-5 py-2.5 glow-border"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:Piotr.Nagajek@gmail.com"
              className="flex items-center gap-2 text-sm font-body text-primary hover:text-foreground transition-colors duration-300 border border-border hover:border-primary/40 rounded-full px-5 py-2.5 glow-border"
            >
              <Mail className="w-4 h-4" />
              Piotr.Nagajek@gmail.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
