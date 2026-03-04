import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - integrate with email service
    alert('Thanks for reaching out! This form will be connected soon.');
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll stagger-1">
          Let's Build <span className="gold-gradient-text">Together</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 animate-on-scroll stagger-2">
          Got a project in mind? Looking for a frontend partner who thinks in outcomes? Drop me a line.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5 animate-on-scroll stagger-3">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3 rounded-lg bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3 rounded-lg bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
            <textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-5 py-3 rounded-lg bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5"
            >
              <Send size={18} /> Send Message
            </button>
          </form>

          <div className="md:col-span-2 space-y-6 animate-on-scroll stagger-4">
            <div className="glass-panel rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <a href="mailto:hello@hamzanisar.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors mb-3">
                <Mail size={18} /> Hamza.officaill23@gmail.com
              </a>
            </div>

            <div className="glass-panel rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/RHamza23', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-nisar23/', label: 'LinkedIn' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
