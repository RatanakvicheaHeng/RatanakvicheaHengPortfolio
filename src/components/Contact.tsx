import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import GlassCard from './GlassCard';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'vicheaheng81@gmail.com', href: 'mailto:vicheaheng@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Melbourne, Australia' },
  { icon: Clock, label: 'Availability', value: 'Open to opportunities' },
];

const socials = [
  { icon: Github, href: 'https://github.com/RatanakvicheaHeng?tab=repositories', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ratanakvichea-heng-74a211236', label: 'LinkedIn' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-5">
      <div className="max-w-4xl mx-auto">

        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-[#666] border-black/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Get In Touch
          </div>
          <h2 className="section-title text-gradient">Let's work together</h2>
          <p className="text-[#777] max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <GlassCard strong specular className="p-8 space-y-6">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border-black/8">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#999] uppercase tracking-wider font-medium">{label}</div>
                    {href ? (
                      <a href={href} className="text-base text-[#333] hover:text-[var(--accent)] transition-colors duration-200 font-semibold">
                        {value}
                      </a>
                    ) : (
                      <div className="text-base text-[#333] font-semibold">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-black/8">
              <p className="text-xs text-[#999] uppercase tracking-wider font-medium mb-4">Follow</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="btn-glass w-11 h-11 rounded-xl flex items-center justify-center text-[#888] hover:text-[#000] hover:bg-black/8 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
