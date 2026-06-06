import GlassCard from './GlassCard';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Step Global',
    period: '06/2025 — 09/2025',
    location: 'Melbourne, Australia',
    color: 'from-blue-500 to-blue-400',
    dot: 'bg-blue-400',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Tornelo',
    period: '02/2023 — 10/2023',
    location: 'Melbourne, Australia',
    color: 'from-blue-500 to-blue-400',
    dot: 'bg-blue-400',
  },
  {
    role: 'Freelance UI/UX Developer',
    company: 'Freelance',
    period: '01/2022 — 01/2023',
    location: 'Remote',
    color: 'from-blue-500 to-blue-400',
    dot: 'bg-blue-400',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-5">
      <div className="max-w-4xl mx-auto">

        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Career
          </div>
          <h2 className="section-title text-gradient">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-black/12 to-transparent hidden sm:block" />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative sm:pl-12">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${exp.dot} ring-4 ring-[#ffffff] shadow-lg`} />
                </div>

                <GlassCard
                  hoverable
                  className={`p-6 transition-all duration-300 ${i === 0 ? 'border-black/12' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <div>
                          <h3 className="font-semibold text-[#000] text-base">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                              {exp.company}
                            </span>
                            <span className="text-[#ddd] text-xs">·</span>
                            <span className="text-xs text-[#999]">{exp.location}</span>
                          </div>
                        </div>
                        <span className="sm:ml-auto glass text-xs px-3 py-1 rounded-lg text-[#888] border-black/8 font-mono shrink-0">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
