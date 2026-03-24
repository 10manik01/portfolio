import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "B.E. Electronics, Communication & Information",
      school: "Sagarmatha Engineering College",
      link: "https://sagarmatha.edu.np/",
      period: "2021 - 2025",
      details: "In-depth study of signal processing, embedded systems, and AI/ML. Building a strong foundation in telecommunications and data engineering."
    },
    {
      degree: "High School (+2 Science)",
      school: "Hetauda School of Management and Social Sciences",
      link: "https://hsm.edu.np/",
      period: "2018 - 2020",
      details: "Located in Hetauda, Nepal. Focused on advanced sciences and mathematics."
    },
    {
      degree: "Secondary School (SEE)",
      school: "Shree Bhrikutee Secondary School",
      period: "2017",
      details: "School located at Kalopani, Hetauda, Nepal."
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 divider-top-red">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1.5 text-green-600 font-bold tracking-widest text-[12px] uppercase mb-6">
            EDUCATION
          </span>
          <h2 className="text-[1.9rem] sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
            Academic Background
          </h2>
        </motion.div>

        <div className="relative space-y-6 sm:space-y-8 md:space-y-16">
          <div className="absolute left-[7px] top-5 bottom-5 w-[1px] bg-border/50" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-[26px] bg-card/55 px-5 py-5 pl-10 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.55)] sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:pl-10 sm:shadow-none"
            >
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-card bg-muted group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 ring-1 ring-border z-10" />

              <div className="mb-3 sm:mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {item.degree}
                </h3>
                <span className="text-xs font-bold text-muted font-mono shrink-0">
                  {item.period}
                </span>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[color:var(--muted-foreground)] hover:!text-blue-600 text-[13px] font-bold tracking-wider uppercase mb-4 transition-colors duration-300"
                >
                  {item.school}
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
              ) : (
                <p className="inline-flex items-center gap-1.5 text-[color:var(--muted-foreground)] text-[13px] font-bold tracking-wider uppercase mb-4">
                  {item.school}
                </p>
              )}

              <p className="max-w-lg text-[14px] sm:text-[15px] font-light text-muted leading-relaxed">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
