import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const TITLES = [
  'Frontend Developer',
  'Product Thinker',
  'SaaS Builder',
  'Growth Partner',
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentTitle.length) {
      timeout = setTimeout(() => setDisplayed(currentTitle.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle grid background */}
      <div className="absolute inset-0 particle-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-on-scroll visible">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">Available for Work</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">Hamza</span>{' '}
          <span className="gold-gradient-text">Nisar</span>
        </h1>

        {/* Typewriter */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-6">
          <span className="font-mono text-xl md:text-2xl text-primary">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I build high-performance frontends that drive real business outcomes — from SaaS products to conversion-focused experiences. Code meets strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg glass-panel font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;