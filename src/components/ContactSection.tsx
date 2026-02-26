import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { Facebook, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxR3sjp5N9lM15VYNVOeDdt3YlzkNLU7Orkn_Ow91ak1NFS6Glth90mDrXlBOZ7jZYp/exec';
      const formData = new FormData(e.currentTarget);

      const response = await fetch(scriptURL, { method: 'POST', body: formData });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error!', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-14">
            Have a question or want to work together? Drop me a message!
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-shadow space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="you@example.com"
                  maxLength={200}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  placeholder="Your message…"
                  maxLength={2000}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-6 mt-10">
              <a href="https://github.com/pamoda2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pamoda-jayathilaka-ba4b5339a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/share/1CArm8zGzc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/pamoda__r?igsh=MW9oNjZvbGJuaW1rMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all">
                <Instagram size={20} />
              </a>
              <a href="jayathilakapamoda9@gmail.com" aria-label="Email"
                className="w-11 h-11 rounded-full bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all">
                <Mail size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
