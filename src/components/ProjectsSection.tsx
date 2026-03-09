import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A real-time analytics platform for SaaS businesses, featuring interactive charts, user segmentation, and revenue tracking with a focus on actionable insights.',
    tags: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    live: '#',
    github: 'https://github.com/RHamza23',
  },
  {
    title: 'E-Commerce Storefront',
    description: 'High-conversion headless commerce frontend with dynamic filtering, cart management, and seamless checkout flow optimized for mobile-first experiences.',
    tags: ['Next.js', 'Stripe', 'REST API', 'Framer Motion'],
    live: '#',
    github: 'https://github.com/RHamza23',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative workspace application with real-time updates, drag-and-drop task boards, team management, and productivity analytics.',
    tags: ['React', 'TypeScript', 'WebSocket', 'Tailwind CSS'],
    live: '#',
    github: 'https://github.com/RHamza23',
  },
  {
    title: 'Content Creator Platform',
    description: 'A video-first content platform with scheduling, analytics, and audience engagement tools — built for creators who take growth seriously.',
    tags: ['React', 'Node.js', 'FFmpeg', 'SaaS'],
    live: '#',
    github: 'https://github.com/RHamza23',
  },
];

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll stagger-1">
          Selected <span className="gold-gradient-text">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-panel-hover rounded-xl p-8 flex flex-col animate-on-scroll stagger-${(i % 4) + 1}`}
            >
              {/* Decorative top bar */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
                <span className="ml-auto font-mono text-xs text-muted-foreground">project.tsx</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-muted text-xs font-mono text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href={project.live} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Github size={16} /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
