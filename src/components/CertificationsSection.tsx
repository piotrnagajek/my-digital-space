import { Award, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "ITIL® Foundation Certificate in IT Service Management",
    id: "GR750504406PN",
    issued: "December 2018",
    status: "Active",
  },
  {
    title: "ITIL® 4 Foundation Certificate in IT Service Management",
    id: "GR671380889PN",
    issued: "March 2022",
    renewal: "April 2028",
    status: "Active",
  },
  {
    title: "ITIL® 4 Specialist Create, Deliver and Support Certificate",
    id: "GR672006066PN",
    issued: "March 2022",
    renewal: "April 2028",
    status: "Active",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="max-w-5xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Credentials</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground font-bold">
            Certifications
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg mb-12 md:mb-16 max-w-2xl leading-relaxed">
            Industry-recognised qualifications that underpin my approach to IT service management and continuous improvement.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="group p-6 md:p-8 rounded-xl bg-card border border-border/50 card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60 group-hover:bg-primary transition-colors duration-300" />
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-body font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {cert.status}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              <div className="space-y-1.5 font-body text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground/60">ID:</span>{" "}
                  <span className="font-mono text-xs">{cert.id}</span>
                </p>
                <p>
                  <span className="text-foreground/60">Issued:</span> {cert.issued}
                </p>
                {cert.renewal && (
                  <p>
                    <span className="text-foreground/60">Renewal:</span> {cert.renewal}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
