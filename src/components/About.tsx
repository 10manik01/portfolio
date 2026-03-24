import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 divider-top-red">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1.5 text-green-600 font-bold tracking-widest text-[12px] uppercase mb-6">
            About
          </span>

          <h2 className="text-[1.45rem] sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-[1.2] sm:leading-[1.3] mb-8 sm:mb-12 max-w-2xl">
            AI/ML, Data Engineering, Big Data, and IoT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8 font-light text-[14px] sm:text-[15px] leading-relaxed text-muted">
            <div>
              <p className="mb-6">
                Growing up in Kalopani, a small rural village in Hetauda, Nepal, and transitioning from an average Nepali-medium government school education to becoming an NEC-registered engineer, I&apos;ve consistently adapted to new challenges and embraced continuous learning.
              </p>

              <p className="mb-6">
                I&apos;m an Electronics, Communication, and Information engineering graduate with a strong interest in AI/ML and data-driven systems. I have a solid foundation in engineering, mathematics, and programming, and I&apos;ve worked on projects involving machine learning, data analysis, and applied AI concepts.
              </p>
            </div>

            <div>
              <p>
                Right now, I&apos;m focused on building practical ML solutions and strengthening my skills in data, AI, and deployment so I can tackle real-world, scalable problems. I chose AI/ML not because of the hype, but because I&apos;m deeply research-driven and enjoy tackling challenging work. I genuinely like mathematics, and machine learning is heavily math-oriented and research-focused. Compared to other domains, AI/ML gives me more space to think, analyze, and innovate, which matches how I naturally work and learn.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-16 bg-card/50 p-5 sm:p-8 md:p-5 rounded-[24px] sm:rounded-[32px] border border-border">
            <blockquote className="font-serif italic text-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              &quot;God is the ultimate programmer, and the universe is His code.&quot;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
