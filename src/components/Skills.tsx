import GlassCard from './GlassCard';

const categories = [
  {
    label: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    glow: 'rgba(41,151,255,0.35)',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    label: 'Backend',
    color: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16,185,129,0.35)',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'PostgreSQL', level: 80},
      { name: 'Supabase', level: 86 },
      { name: 'REST API', level: 87 },
    ],
  },
  {
    label: 'Tools & DevOps',
    color: 'from-amber-500 to-orange-400',
    glow: 'rgba(245,158,11,0.35)',
    skills: [
      { name: 'Git / GitHub', level: 93 },
      { name: 'Docker', level: 75 },
      { name: 'Figma', level: 80 },
      { name: 'CI / CD', level: 72 },
    ],
  },
];

const tools = [
  'VS Code', 'Figma', 'Postman', 'Docker',
   'Notion', 'Supabase', 'GitHub',
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">

        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Skills &amp; Expertise
          </div>
          <h2 className="section-title text-gradient">
            What I work with
          </h2>
          <p className="text-[#777] max-w-xl mx-auto text-sm leading-relaxed">
            A carefully curated toolkit refined over years of building production-grade applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {categories.map(({ label, color, glow, skills }) => (
            <GlassCard key={label} strong specular className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <div
                  className={`w-1 h-5 rounded-full bg-gradient-to-b ${color}`}
                  style={{ boxShadow: `0 0 8px ${glow}` }}
                />
                <h3 className="font-semibold text-[#000] text-sm">{label}</h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-[#666]">{name}</span>
                      <span className="text-xs text-[#999] font-mono">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
                        style={{ width: `${level}%`, boxShadow: `0 0 6px ${glow}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Tools Row */}
        <GlassCard className="p-5">
          <p className="text-xs text-[#888] mb-4 font-medium uppercase tracking-widest">Daily Tools</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="glass-hover glass text-xs px-3 py-1.5 rounded-lg text-[#666] border-black/8 font-medium transition-all duration-200 hover:text-[#333]"
              >
                {tool}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
