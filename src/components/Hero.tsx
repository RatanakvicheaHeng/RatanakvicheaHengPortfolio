import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-112px)] flex items-center justify-center px-5 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Welcome
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#000]">
            Hi, I'm <span className="text-gradient">Vichea</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto leading-relaxed font-light">
            Full-stack developer | UI/UX designer | Front-end enthusiast. I create beautiful, performant web experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#projects"
            className="btn-primary px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 group"
          >
            Explore My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="btn-glass px-8 py-3 rounded-xl text-sm font-semibold"
          >
            Get In Touch
          </a>
        </div>

        <div className="pt-8 text-sm text-[#777]">
          <p>Scroll to explore my latest projects and experience</p>
        </div>
      </div>
    </section>
  );
}
