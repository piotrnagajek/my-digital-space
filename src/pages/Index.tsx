import { Linkedin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import PassionsSection from "@/components/PassionsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 lg:px-24 py-5 bg-background/80 backdrop-blur-md border-b border-border/30">
        <span className="font-display text-xl text-foreground font-bold">PN</span>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#about" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hidden sm:inline">About</a>
          <a href="#work" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hidden sm:inline">Experience</a>
          <a href="#passions" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hidden sm:inline">Passions</a>
          <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
          <a
            href="https://www.linkedin.com/in/piotr-nagajek-799475bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PassionsSection />
      <ContactSection />
      <footer className="py-10 md:py-12 px-6 md:px-16 lg:px-24 border-t border-border/30">
        <p className="font-body text-sm text-muted-foreground">© 2026 Piotr Nagajek. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
