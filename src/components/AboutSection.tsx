const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">About</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 text-foreground">
          A little bit about me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
            I'm an ITIL-certified Service Delivery Manager with 7+ years of experience ensuring excellence in IT Service Delivery. 
            I specialize in Incident & Major Incident Management, Root Cause Analysis, and SLA compliance — consistently delivering CSAT scores averaging 9.5.
          </p>
          <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
            Experienced in leading international teams and driving process optimization, I'm passionate about leveraging Generative & Agentic AI to enhance workflows. 
            I hold a Master's degree in International Relations from the University of Lodz.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Service Delivery", "ITIL / ITSM", "Customer Relationship", "Leadership",
            "SLA / SLT Delivery", "Risk Management", "Continual Improvement", "Generative & Agentic AI"
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs sm:text-sm font-body text-muted-foreground border border-border rounded-full px-4 py-2 text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
