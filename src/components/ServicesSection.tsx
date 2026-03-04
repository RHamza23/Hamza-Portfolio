import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Monitor, Globe, Rocket, Palette, Video } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    description: 'Pixel-perfect, performant interfaces built with React and TypeScript. Component-driven architecture designed for scale.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web applications from concept to deployment. SEO-optimized, responsive, and built to convert.',
  },
  {
    icon: Rocket,
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development — from MVP to growth stage. Auth, billing, dashboards, and everything in between.',
  },
  {
    icon: Palette,
    title: 'UI Development',
    description: 'Translating Figma designs into living, breathing interfaces. Design systems, component libraries, and seamless handoffs.',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing for product demos, marketing content, and social media — storytelling that captures attention.',
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Services</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll stagger-1">
          How I Can <span className="gold-gradient-text">Help</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl animate-on-scroll stagger-2">
          Whether you need a technical co-founder, a senior frontend hire, or a reliable freelancer — here's what I bring to the table.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-panel-hover rounded-xl p-8 group animate-on-scroll stagger-${(i % 5) + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
