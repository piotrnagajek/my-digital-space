interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({ title, description, tags, image }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-5">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={640}
          height={512}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body tracking-wide uppercase text-muted-foreground border border-border px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ProjectCard;
