import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-4xl">
        <p className="text-muted-foreground font-body text-base md:text-lg mb-4 tracking-wide uppercase">
          Service Delivery Manager
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-foreground">
          Piotr <br />
          <span className="text-primary italic">Nagajek</span>
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
          ITIL-certified Service Delivery Manager driving excellence in IT service delivery, process optimization, and AI-driven improvements.
        </p>
      </div>
      <a
        href="#about"
        className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-wide uppercase"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        Scroll
      </a>
    </section>
  );
};

export default HeroSection;
