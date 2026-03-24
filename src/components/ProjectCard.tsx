import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({ title, description, tags, image }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group cursor-pointer card-hover"
    >
      <div className="overflow-hidden rounded-lg mb-5 border border-border/50">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={640}
          height={512}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body tracking-wide uppercase text-primary border border-primary/30 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-xl sm:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300 font-semibold">
        {title}
      </h3>
      <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
