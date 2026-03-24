import { motion } from 'framer-motion';

export function TechStack() {
  const categories = [
    {
      title: "Embedded & Edge Intelligence",
      description: "Hardware integration, edge computing, and real-time sensor fusion.",
      skills: ['C', 'C++', 'VHDL', 'Arduino', 'Raspberry Pi', 'OpenCV']
    },
    {
      title: "Data Science & Machine Learning",
      description: "Deep learning architectures, predictive modeling, and data analytics.",
      skills: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: "Data Engineering",
      description: "Scalable data pipelines, ETL processes, and database architecture.",
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'Apache Spark', 'Apache Airflow']
    },
    {
      title: "Infrastructure & Systems",
      description: "Containerization, system administration, and version control and other tools",
      skills: ['Docker', 'Linux', 'Git', 'Bash', 'n8n']
    }
  ];

  return (
    <section id="tech" className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 divider-top-red bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20 max-w-2xl"
        >
               <span className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1.5 text-green-600 font-bold tracking-widest text-[12px] uppercase mb-6">
            TECH STACK
          </span>
          <h2 className="text-[1.9rem] sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
            Technical Skills
          </h2>
          <p className="text-muted font-light text-base sm:text-lg leading-relaxed">
            A comprehensive stack bridging the physical and digital worlds, from microcontrollers to large-scale data systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group rounded-[28px] border border-border/40 bg-card/45 p-5 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
            >
              <div className="mb-6">
                <h3 className="mb-2 text-[1.05rem] sm:text-lg font-bold text-foreground tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-[13px] sm:text-sm font-light text-gray-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="rounded-full bg-card border border-border px-3.5 py-2 text-[12px] sm:px-4 sm:text-[13px] font-semibold tracking-wide text-muted hover:border-blue-500 hover:text-foreground transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
