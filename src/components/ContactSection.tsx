import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="max-w-2xl relative z-10">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground font-bold">
            Let's connect
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg mb-6">
            Interested in working together or just want to say hello? Reach out below.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/piotr-nagajek-799475bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body text-primary hover:text-foreground transition-colors duration-300 border border-border hover:border-primary/40 rounded-full px-5 py-2.5 glow-border"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:Piotr.Nagajek@gmail.com"
              className="flex items-center gap-2 text-sm font-body text-primary hover:text-foreground transition-colors duration-300 border border-border hover:border-primary/40 rounded-full px-5 py-2.5 glow-border"
            >
              <Mail className="w-4 h-4" />
              Piotr.Nagajek@gmail.com
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-card border-border font-body h-12 focus:border-primary/50 transition-colors"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-card border-border font-body h-12 focus:border-primary/50 transition-colors"
              />
            </div>
            <Textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={6}
              className="bg-card border-border font-body resize-none focus:border-primary/50 transition-colors"
            />
            <Button type="submit" size="lg" className="font-body tracking-wide font-medium">
              Send Message
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
