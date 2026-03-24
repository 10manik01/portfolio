import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin, BookOpenText, MapPin } from 'lucide-react';
import { blogPath } from '../lib/site';

export function Contact() {
  const links = [
    {
      label: 'GitHub',
      handle: '@10manik01',
      href: 'https://github.com/10manik01',
      external: true,
      icon: Github,
      hoverBorderColor: 'hover:border-foreground',
      hoverTextColor: 'group-hover:!text-foreground'
    },
    {
      label: 'LinkedIn',
      handle: 'Professional Network',
      href: 'https://www.linkedin.com/in/maniksyangtan/',
      external: true,
      icon: Linkedin,
      hoverBorderColor: 'hover:border-blue-600',
      hoverTextColor: 'group-hover:!text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 divider-top-red bg-transparent">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1.5 text-green-600 font-bold tracking-widest text-[12px] uppercase mb-6">
            CONTACT
          </span>
          <h2 className="text-[1.95rem] sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.05] mb-6">
            Let&apos;s build something
            <br />
            <span className="text-red-600">intelligent</span> together.
          </h2>
          <p className="text-muted font-light text-base sm:text-lg leading-relaxed max-w-xl">
            Currently open to new opportunities, collaborations, and research roles. Whether it&apos;s a complex project or just a technical discussion, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-[28px] border border-border/40 bg-card/45 p-5 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
          >
            <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-6 block">
              Email
            </span>
            <a
              href="mailto:maniksyangtan01@gmail.com"
              className="group flex w-full max-w-full items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-transparent rounded-[24px] sm:rounded-full border border-red-500/70 hover:bg-[rgba(239,68,68,0.14)] transition-all duration-500 shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
            >
              <Mail size={16} className="md:size-[18px] text-white flex-shrink-0" />
              <span className="min-w-0 flex-1 text-white font-semibold tracking-wide text-xs sm:text-sm md:text-base break-all leading-relaxed">
                maniksyangtan01@gmail.com
              </span>
              <ArrowUpRight size={14} className="md:size-[16px] text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
            </a>

            <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mt-8 mb-6 block">
              Blog
            </span>
            <a
              href={blogPath}
              className="group flex w-full sm:inline-flex sm:w-auto items-center justify-between gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-transparent rounded-[24px] sm:rounded-full border border-[#008cba]/70 text-[#008cba] hover:bg-[rgba(0,140,186,0.14)] transition-all duration-500 shadow-lg hover:shadow-[0_18px_40px_-18px_rgba(0,140,186,0.28)] hover:-translate-y-0.5"
            >
              <BookOpenText size={16} className="md:size-[18px] text-[#008cba] flex-shrink-0" />
              <span className="font-semibold tracking-wide text-xs sm:text-sm md:text-base">
                Read Articles
              </span>
              <ArrowUpRight size={14} className="md:size-[16px] text-[#008cba]/60 group-hover:text-[#008cba] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
            </a>

            <div className="flex items-center gap-2.5 mt-8 sm:mt-10 text-muted">
              <MapPin size={14} strokeWidth={1.5} />
              <span className="text-[12px] font-semibold tracking-widest uppercase">Hetauda, Nepal</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-[28px] border border-border/40 bg-card/45 p-5 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
          >
            <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-6 block">
              Elsewhere
            </span>
            <div className="flex flex-col gap-4">
              {links.map((link) => {
                const linkProps = link.external
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {};

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...linkProps}
                    className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border border-border hover:shadow-md transition-all duration-300 ${link.hoverBorderColor}`}
                  >
                    <link.icon
                      size={20}
                      strokeWidth={1.5}
                      className={`text-[color:var(--muted-foreground)] transition-colors duration-300 ${link.hoverTextColor}`}
                    />
                    <div className="flex-1">
                      <span className={`block text-sm font-bold text-foreground tracking-tight transition-colors duration-300 ${link.hoverTextColor}`}>
                        {link.label}
                      </span>
                      <span className={`block text-xs text-[color:var(--muted-foreground)] font-light transition-colors duration-300 ${link.hoverTextColor}`}>
                        {link.handle}
                      </span>
                    </div>
                    <ArrowUpRight size={16} className={`text-[color:var(--muted-foreground)] transition-all duration-300 ${link.hoverTextColor}`} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 pt-8 sm:pt-10 divider-top-red flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[10px] text-muted font-bold uppercase tracking-[0.3em]">
            Manik Syangtan - Portfolio
          </span>
          <span className="text-[10px] text-muted font-bold uppercase tracking-[0.3em]">
            (c) 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
