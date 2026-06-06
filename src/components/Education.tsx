import { BookOpen, Award } from 'lucide-react';
import GlassCard from './GlassCard';

const education = [
  {
    school: 'Monash Colleage, Melbourne',
    degree: 'Foundation Year',
    year: '2018-2019',
    color: 'from-blue-500 to-cyan-400',
    dot: 'bg-blue-400',
  },
  {
    school: 'Monash Colleage, Melbourne',
    degree: 'Diploma of Engineering',
    year: '2019-2020',
    color: 'from-blue-500 to-cyan-400',
    dot: 'bg-blue-400',
  },
  {
    school: 'Monash University, Melbourne',
    degree: 'Bachelor of Software Engineering (Honours)',
    year: '2020 - 2024',
    color: 'from-blue-500 to-cyan-400',
    dot: 'bg-blue-400',
  },
    {
    school: 'Monash Colleage, Melbourne',
    degree: 'Professional Year in Information Technology',
    year: '2024-2025',
    color: 'from-blue-500 to-cyan-400',
    dot: 'bg-blue-400',
  }
];

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google Cloud', year: '2021' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2020' },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-5">
      <div className="max-w-4xl mx-auto">

        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Education
          </div>
          <h2 className="section-title text-gradient">
            Learning &amp; Growth
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-black/12 to-transparent hidden sm:block" />

          <div className="space-y-5">
            {education.map((edu, i) => (
              <div key={edu.school} className="relative sm:pl-12">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${edu.dot} ring-4 ring-[#ffffff] shadow-lg`} />
                </div>

                <GlassCard hoverable className={`p-6 transition-all duration-300 ${i === 0 ? 'border-black/12' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <div>
                          <h3 className="font-semibold text-[#000] text-base">{edu.degree}</h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                              {edu.school}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 sm:ml-auto shrink-0">
                          <span className="glass text-xs px-3 py-1 rounded-lg text-[#888] border-black/8 font-mono">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
      </div>
    </section>
  );
}
