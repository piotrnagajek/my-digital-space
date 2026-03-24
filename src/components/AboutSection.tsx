import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-5xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">About</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 text-foreground font-bold">
            A little bit about me
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection delay={0.1}>
            <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
              I'm an ITIL-certified Service Delivery Manager with 7+ years of experience ensuring excellence in IT Service Delivery. 
              I specialize in Incident & Major Incident Management, Root Cause Analysis, and SLA compliance — consistently delivering CSAT scores averaging 9.5.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
              Experienced in leading international teams and driving process optimization, I'm passionate about leveraging Generative & Agentic AI to enhance workflows. 
              I hold a Master's degree in International Relations from the University of Lodz.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Service Delivery", "ITIL / ITSM", "Customer Relationship", "Leadership",
              "SLA / SLT Delivery", "Risk Management", "Continual Improvement", "Generative & Agentic AI"
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs sm:text-sm font-body text-muted-foreground border border-border hover:border-primary/40 hover:text-primary rounded-full px-4 py-2.5 text-center transition-colors duration-300 glow-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
