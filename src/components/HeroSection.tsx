import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-4xl">
        <p className="text-muted-foreground font-body text-lg mb-4 tracking-wide uppercase">
          Designer & Developer
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-foreground">
          Alex <br />
          <span className="text-primary italic">Morgan</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          I craft thoughtful digital experiences that live at the intersection of design and engineering.
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
