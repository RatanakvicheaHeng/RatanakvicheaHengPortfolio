import { Code2, Palette, Zap, Globe } from 'lucide-react';
import GlassCard from './GlassCard';

const traits = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code is a craft I take seriously.',
    color: 'text-blue-300',
    bg: 'bg-blue-500/15 border-blue-400/20',
  },
  {
    icon: Palette,
    title: 'Design-Driven',
    desc: 'Every pixel matters. I bridge the gap between design and engineering.',
    color: 'text-rose-300',
    bg: 'bg-rose-500/15 border-rose-400/20',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Fast, optimized experiences that delight users and rank well.',
    color: 'text-amber-300',
    bg: 'bg-amber-500/15 border-amber-400/20',
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    desc: 'Building accessible products for diverse, worldwide audiences.',
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/15 border-emerald-400/20',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              About Me
            </div>

            <h2 className="section-title text-gradient">
              Turning ideas into<br />
              <span className="text-gradient-accent">reality</span>
            </h2>

            <div className="space-y-4 text-[#666] leading-relaxed font-light text-[0.97rem]">
              <p>
                I'm Ratanakvichea Heng, a full-stack developer with a passion for building
                products that people love. I specialize in React, TypeScript, and Node.js —
                with a strong eye for design and an obsession for performance.
              </p>
              <p>
                I work across UI/UX design, mobile app development, and front-end development to create seamless and beautiful experiences. 
                Whether it's a sleek portfolio site, a dynamic dashboard, or a complex web app, I turn ideas into reality with clean code and thoughtful design.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Figma','Swift','JavaScript'].map((tag) => (
                <span
                  key={tag}
                  className="glass text-xs px-3 py-1.5 rounded-lg text-[#666] border-black/8 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="#contact"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
              >
                Work With Me
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {traits.map(({ icon: Icon, title, desc, color, bg }) => (
              <GlassCard key={title} hoverable className="p-5 space-y-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${bg}`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#000] mb-1">{title}</h3>
                  <p className="text-xs text-[#777] leading-relaxed">{desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
