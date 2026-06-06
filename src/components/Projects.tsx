import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';

const projects = [
  {
    title: 'CelebrationHub',
    description:
      'CelebrationHub is a web platform that helps people create personalized celebration pages for their loved ones. Users can design beautiful digital experiences for special occasions such as anniversaries, birthdays, Mother Day, Father Day, Valentine Day, and more.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite.ts'],
    image: '/images/CelebrationHub.png',
    accentColor: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(41,151,255,0.25)',
    featured: true,
    liveUrl: 'https://celebrationhubkh.netlify.app/',
    githubUrl: 'https://github.com/RatanakvicheaHeng/CelebrationHub',
  },
  {
    title: 'Apex Pandora Bot',
    description:
      'Apex Pandora Bot is a Discord Text-to-Speech (TTS) bot built with JavaScript and Node.js. It can join Discord voice channels and convert Khmer text into natural-sounding speech in real time.',
    tags: ['Node js', 'JavaScript', 'Google Text-to-Speech API', 'Discord.js'],
    image: 'https://miro.medium.com/v2/1*2z-HnUMhWWGHoEjzxJ8SBg.jpeg',
    accentColor: 'from-emerald-500 to-teal-400',
    glowColor: 'rgba(16,185,129,0.25)',
    featured: true,
    githubUrl: 'https://github.com/RatanakvicheaHeng/apex-pandora-bot/tree/main',
  },
  {
    title: 'ApsaraPOS',
    description:
      'ApsaraPOS is a Khmer-language Point of Sale (POS) system developed to support my family business operations. The system streamlines sales management, receipt generation, and inventory handling while providing a user-friendly interface tailored for local business needs.One of its key features is the flexibility to modify prices and add items even after a receipt has been generated. Instead of requiring the transaction to be recreated from scratch, the system can generate an updated receipt reflecting the changes, making day-to-day operations more efficient and reducing errors. The project was built with a focus on usability, speed, and adaptability for real-world business environments.',
    tags: ['TypeScript', 'tailwindcss', 'Supabase', 'React'],
    image: '/images/ApsaraPOS.png',
    accentColor: 'from-amber-500 to-orange-400',
    glowColor: 'rgba(245,158,11,0.25)',
    featured: true,
  },
  {
    title: 'Final Year Project - Monash University',
    description:
      'In a team of two, the project is to run quantum computing on one Raspberry Pi then increased number of Raspberry Pi over time to measure time efficiency. I was responsible for utilising Raspberry Pi to simulate quantum computing and measure the efficiency by increasing the number of Raspberry Pi and generating relevant graph. Achieved a Distinction for the project.',
    tags: ['Python', 'Raspberry Pi', 'Quantum Computing'],
    image: 'https://fyp.eng.monash.edu/sites/default/files/inline-images/monash-logo_0.png',
    accentColor: 'from-rose-500 to-pink-400',
    glowColor: 'rgba(244,63,94,0.25)',
    featured: true,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Selected Work
            </div>
            <h2 className="section-title text-gradient">Projects</h2>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {featured.map((project) => (
            <GlassCard key={project.title} hoverable strong className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-#ffffff via-[#ffffff]/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(ellipse at top right, ${project.glowColor} 0%, transparent 70%)` }}
                />
                {/* Links overlay */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.githubUrl}
                    className="btn-glass w-8 h-8 rounded-lg flex items-center justify-center"
                    aria-label="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="btn-glass w-8 h-8 rounded-lg flex items-center justify-center"
                    aria-label="Live"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-[#000] text-base">{project.title}</h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gradient-to-r ${project.accentColor} text-white shrink-0`}>
                    Featured
                  </span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] glass px-2.5 py-1 rounded-lg text-[#666] border-black/8 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 gap-5">
          {rest.map((project) => (
            <GlassCard key={project.title} hoverable className="p-5 flex gap-4 group">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-[#000] text-sm truncate">{project.title}</h3>
                  <div className="flex gap-1.5 shrink-0">
                    <a href={project.githubUrl} className="text-[#999] hover:text-[#555] transition-colors duration-200">
                      <Github size={13} />
                    </a>
                    <a href={project.liveUrl} className="text-[#999] hover:text-[#555] transition-colors duration-200">
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#777] leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] bg-black/6 border border-black/8 px-2 py-0.5 rounded-md text-[#777]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
