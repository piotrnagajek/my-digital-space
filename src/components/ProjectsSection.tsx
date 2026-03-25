import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Service Delivery Management",
    description: "Full ownership of Incident, Major Incident & RCA processes at Fujitsu, managing cross-functional teams and senior stakeholder relationships. Drove targeted improvements that reduced major incidents by ~75% — from 6–7 down to just 1–2 per year — while consistently achieving high CSAT scores through proactive communication and service excellence.",
    tags: ["ITIL", "Leadership"],
    image: project1,
  },
  {
    title: "AI-Driven Process Optimization",
    description: "Leveraged 2+ years of hands-on Generative AI experience to drive meaningful improvements across daily operations. Built custom AI agents that significantly optimised trend analysis, cutting manual effort and boosting accuracy — an initiative that earned formal recognition and a company reward for innovation.",
    tags: ["AI", "Innovation"],
    image: project2,
  },
  {
    title: "Financial & Risk Management",
    description: "Developed and streamlined an end-to-end process for managing and quoting non-contractual small projects, securing an additional revenue stream of up to ~£100K per fiscal year. Oversaw purchase orders, budgets, and service risk management to ensure financial governance and operational resilience.",
    tags: ["Finance", "Risk Management"],
    image: project3,
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="max-w-5xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-12 md:mb-16 text-foreground font-bold">
            Key achievements
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
