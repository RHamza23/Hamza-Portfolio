import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, TrendingUp, Users, Lightbulb } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Scalable, maintainable architectures' },
  { icon: TrendingUp, label: 'Growth Mindset', desc: 'Features that move business metrics' },
  { icon: Users, label: 'User-First', desc: 'Interfaces people actually enjoy using' },
  { icon: Lightbulb, label: 'Product Vision', desc: 'Thinking beyond tickets to outcomes' },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-on-scroll stagger-1">
          More Than a <span className="gold-gradient-text">Developer</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed animate-on-scroll stagger-2">
              I'm Hamza — a frontend developer who doesn't just write code, but builds products that matter. Every component I create is designed with the end user and the bottom line in mind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-on-scroll stagger-3">
              Whether I'm collaborating with a startup founder on their MVP or architecting a SaaS dashboard for scale, I bring a rare blend of technical precision and business intuition. I don't wait for specs — I ask the right questions, challenge assumptions, and ship solutions that drive measurable growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-on-scroll stagger-4">
              My work sits at the intersection of engineering excellence and product thinking. If you need someone who can translate a business goal into a pixel-perfect, performant interface — let's talk.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className={`glass-panel-hover rounded-xl p-6 animate-on-scroll stagger-${i + 1}`}
              >
                <item.icon className="text-primary mb-3" size={28} />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
