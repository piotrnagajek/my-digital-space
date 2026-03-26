import { Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const languages = [
  { language: "English", level: "Fluent / C1–C2" },
  { language: "Polish", level: "Native" },
];

const LanguagesSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Communication</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-10 text-foreground font-bold">Languages</h2>
        </AnimatedSection>

        <div className="flex flex-wrap gap-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/50"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-display text-foreground font-semibold">{lang.language}</span>
              <span className="text-muted-foreground font-body text-sm">— {lang.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
