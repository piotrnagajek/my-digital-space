import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Service Delivery Management",
    description: "Full ownership of Incident, Major Incident & RCA processes at Fujitsu, managing cross-functional teams and senior-level customer relationships.",
    tags: ["ITIL", "Leadership"],
    image: project1,
  },
  {
    title: "AI-Driven Process Optimization",
    description: "Implemented AI-driven improvements and proactive service strategies, leveraging 2+ years of Generative AI experience to enhance daily operations.",
    tags: ["AI", "Innovation"],
    image: project2,
  },
  {
    title: "Financial & Risk Management",
    description: "Oversaw financial aspects including POs and small projects, along with service risk management — delivering consistently high CSAT scores.",
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
