import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-5xl relative z-10 flex flex-col items-start gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase font-medium"
        >
          Service Delivery Manager
        </motion.p>

        {/* Photo + Name row */}
        <div className="flex items-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="shrink-0"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]">
              <img
                src={profilePhoto}
                alt="Piotr Nagajek"
                className="w-full h-full object-cover object-top"
                style={{ background: 'hsl(var(--background))' }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-bold"
          >
            <span className="text-foreground">Piotr</span> <br />
            <span className="text-gradient">Nagajek</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed"
        >
          ITIL-certified Service Delivery Manager driving excellence in IT service delivery, process optimization, and AI-driven improvements.
        </motion.p>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-[0.2em] uppercase"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        Scroll
      </motion.a>
    </section>
  );
};

export default HeroSection;
