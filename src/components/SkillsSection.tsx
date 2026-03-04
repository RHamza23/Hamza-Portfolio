import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  primary?: boolean;
}

const primarySkills: Skill[] = [
  { name: 'React.js', level: 95, primary: true },
  { name: 'JavaScript', level: 92, primary: true },
  { name: 'TypeScript', level: 88, primary: true },
  { name: 'Frontend Development', level: 94, primary: true },
  { name: 'Business Development', level: 85, primary: true },
];

const secondarySkills: string[] = [
  'HTML5', 'CSS3', 'Tailwind CSS', 'REST API Integration',
  'Node.js', 'Firebase', 'Cloud Firestore', 'MongoDB',
  'Git', 'GitHub', 'SaaS Development', 'UI Development', 
  'Product Development', 'Responsive Design', 'E-commerce Systems',
  'HubSpot CRM', 'LinkedIn Sales Navigator', 'WordPress',
  'Lead Generation', 'Market Research', 'B2B Communication', 
  'Requirement Analysis'
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-4">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-on-scroll stagger-1">
          My <span className="gold-gradient-text">Arsenal</span>
        </h2>

        {/* Primary skills - bars */}
        <div className="space-y-6 mb-16">
          {primarySkills.map((skill, i) => (
            <div key={skill.name} className={`animate-on-scroll stagger-${i + 1}`}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="font-mono text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary via-gold-light to-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Secondary skills - tags */}
        <div className="animate-on-scroll">
          <h3 className="font-mono text-sm text-muted-foreground mb-6 tracking-widest uppercase">Also proficient in</h3>
          <div className="flex flex-wrap gap-3">
            {secondarySkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg glass-panel text-sm text-muted-foreground font-medium transition-all duration-300 hover:text-primary hover:border-primary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;