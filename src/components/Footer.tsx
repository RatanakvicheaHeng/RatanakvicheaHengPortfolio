import { Layers, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const footerLinks = {
  Navigate: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  Connect: [
    { label: 'GitHub', href: 'https://github.com/RatanakvicheaHeng?tab=repositories' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ratanakvichea-heng-74a211236' },
  ],
};

const socials = [
  { icon: Github, href: 'https://github.com/RatanakvicheaHeng?tab=repositories', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ratanakvichea-heng-74a211236', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-5 border-t border-black/6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center shadow-lg">
                <Layers size={16} className="text-white" />
              </div>
              <span className="font-semibold text-[#000] text-sm">Ratanakvichea Heng</span>
            </div>
            <p className="text-sm text-[#999] leading-relaxed max-w-xs">
              Full-stack developer crafting beautiful, performant web experiences. Available for freelance and full-time opportunities.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="btn-glass w-9 h-9 rounded-xl flex items-center justify-center text-[#888] hover:text-[#333]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[#777] hover:text-[#333] transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#aaa]">
            &copy; {new Date().getFullYear()} Ratanakvichea Heng. All rights reserved.
          </p>
          <p className="text-xs text-[#bbb] flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose-400 fill-rose-400" /> using React, Tailwind &amp; Apple Liquid Glass
          </p>
        </div>
      </div>
    </footer>
  );
}
