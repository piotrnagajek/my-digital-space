import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-2xl">
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Contact</p>
        <h2 className="font-display text-3xl md:text-5xl mb-4 text-foreground">
          Let's work together
        </h2>
        <p className="font-body text-muted-foreground text-lg mb-12">
          Have a project in mind? Drop me a line and let's make something great.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border font-body h-12"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border font-body h-12"
            />
          </div>
          <Textarea
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={6}
            className="bg-card border-border font-body resize-none"
          />
          <Button type="submit" size="lg" className="font-body tracking-wide">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
