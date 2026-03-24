import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Forma Brand Identity",
    description: "A complete visual identity system for a contemporary architecture studio.",
    tags: ["Branding", "Design"],
    image: project1,
  },
  {
    title: "Pulse Analytics",
    description: "A real-time analytics dashboard built for speed and clarity.",
    tags: ["UI/UX", "Development"],
    image: project2,
  },
  {
    title: "Verse Mobile App",
    description: "An iOS app that reimagines how people share poetry and prose.",
    tags: ["Mobile", "Product Design"],
    image: project3,
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Work</p>
        <h2 className="font-display text-3xl md:text-5xl mb-16 text-foreground">
          Selected projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
