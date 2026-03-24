import { Briefcase, Globe, Swords, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const passions = [
  {
    icon: Briefcase,
    title: "IT Service Excellence",
    description: "By day, I orchestrate seamless IT operations — turning complex incidents into resolved tickets and chaos into SLA-beating performance. There's a quiet thrill in watching a well-oiled service machine hum.",
  },
  {
    icon: Globe,
    title: "Diplomacy & International Relations",
    description: "By heart, I'm a diplomat at the negotiation table of ideas. With a Master's in International Relations, I find the same strategic thinking that resolves geopolitical tensions works wonders in cross-functional team alignment.",
  },
  {
    icon: Trophy,
    title: "Football",
    description: "On the pitch, every match is a masterclass in teamwork, quick decisions, and reading the play — skills that translate seamlessly to managing fast-paced IT environments.",
  },
  {
    icon: Swords,
    title: "Martial Arts",
    description: "The discipline and focus from martial arts training bring clarity to high-pressure situations — whether it's a sparring session or a critical P1 incident at 2 AM.",
  },
];

const PassionsSection = () => {
  return (
    <section id="passions" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-5xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Beyond Work</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground font-bold">
            Passions & Interests
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg mb-12 md:mb-16 max-w-2xl leading-relaxed">
            Where ITIL frameworks meet United Nations debates — and the occasional roundhouse kick. Life's too short for just one passion.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group p-6 md:p-8 rounded-xl bg-card border border-border/50 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <passion.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {passion.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                {passion.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
