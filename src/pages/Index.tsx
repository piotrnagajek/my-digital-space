import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 lg:px-24 py-6 bg-background/80 backdrop-blur-sm">
        <span className="font-display text-xl text-foreground">AM</span>
        <div className="flex gap-8">
          <a href="#about" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#work" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </nav>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-border">
        <p className="font-body text-sm text-muted-foreground">© 2026 Alex Morgan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
