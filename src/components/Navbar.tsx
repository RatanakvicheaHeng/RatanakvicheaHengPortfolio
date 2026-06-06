import { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5">
          <nav
            className={`glass-specular rounded-2xl transition-all duration-500 ${
              scrolled
                ? 'glass-strong px-5 py-3 shadow-2xl'
                : 'glass px-6 py-4'
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105">
                  <Layers size={16} className="text-white" />
                </div>
                <span className="font-semibold text-[#000] text-sm tracking-tight">
                  Ratanakvichea Heng
                </span>
              </a>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-1">
                {links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      active === href
                        ? 'text-[#000]'
                        : 'text-[#666] hover:text-[#333]'
                    }`}
                  >
                    {active === href && (
                      <span className="absolute inset-0 rounded-xl bg-black/5 border border-black/8" />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                ))}
              </div>

              {/* CTA + Hamburger */}
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden btn-glass w-9 h-9 rounded-xl flex items-center justify-center"
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu"
                >
                  {open ? <X size={16} /> : <Menu size={16} />}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          >
            <div className="glass liquid-glass glass-hover rounded-3xl p-8 flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === href
                      ? 'bg-black/8 text-[#000] border border-black/12'
                      : 'text-[#666] hover:text-[#333] hover:bg-black/4'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>  
          </div>
        </div>
      </header>
    </>
  );
}
