import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const fitplay = import.meta.env.BASE_URL + 'images/fitplay.png';
const waterbot = import.meta.env.BASE_URL + 'images/waterbot.png';
const covid = import.meta.env.BASE_URL + 'images/covid.png';
const student = import.meta.env.BASE_URL + 'images/stdmgmt.png';

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "MPU6050 Sensor based Human activity recognition using machine learning",
      category: "Machine Learning / Embedded Systems",
      desc: "Used various classifier models for human exercise prediction and achieved 83% accuracy with an SVM. Integrated predictions into a Unity-based endless runner game to promote fun and fitness. Used Arduino UNO as a microcontroller with 3 MPU6050 sensors integrated on a body suit for real-time data acquisition.",
      tech: ["Pandas", "NumPy", "scikit-learn", "TensorFlow"],
      image: fitplay,
      github: "https://github.com/10manik01",
      demo: "https://youtube.com/shorts/q4Tb-CpperY",
    },
    {
      id: "02",
      title: "Autonomous Water Waste cleaning Robot",
      category: "Computer Vision / Robotics",
      desc: "Led the development of a computer vision-based robot that collects floating water waste from the surface. Implemented OpenCV and NumPy for image processing to detect objects using Raspberry Pi and Pi Camera.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "NumPy"],
      image: waterbot,
      github: "https://github.com/10manik01",
      demo: "https://youtube.com/shorts/RPgxwPMWjCQ",
    },
    {
      id: "03",
      title: "Global COVID-19 Data Analysis",
      category: "Data Science / Analytics",
      desc: "Analyzed global COVID-19 datasets to extract insights on infection trends, recovery rates, and vaccination progress using Python libraries like Pandas, NumPy, and Matplotlib.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      image: covid,
      github: "https://github.com/10manik01/Python_Data_Analysis_Project---Covid19_data_analysis",
      demo: "https://github.com/10manik01/Python_Data_Analysis_Project---Covid19_data_analysis",
    },
    {
      id: "04",
      title: "Database Project - Student Management System",
      category: "Database / Web Development",
      desc: "Built a CRUD web app for managing student records using Flask and SQLAlchemy with a MySQL backend.",
      tech: ["Python", "Flask", "SQLAlchemy", "MySQL", "HTML", "CSS"],
      image: student,
      github: "https://github.com/10manik01/Database_Project---student_record_management_flaskapp",
      demo: "https://youtu.be/rut2C1qXSGk",
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 divider-top-red bg-card/10">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <span className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1.5 text-green-600 font-bold tracking-widest text-[12px] uppercase mb-6">
            PROJECTS
          </span>
          <h2 className="text-[2rem] sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-10 sm:space-y-16 md:space-y-32">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group rounded-[30px] border border-border/40 bg-card/50 p-4 shadow-[0_24px_55px_-40px_rgba(15,23,42,0.6)] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
            >
              <div className="relative mb-6 sm:mb-10 overflow-hidden rounded-[24px] sm:rounded-3xl bg-card aspect-[4/3] sm:aspect-[16/9] md:aspect-[18/9] border border-border shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover origin-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/[0.03] group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 md:gap-12 pl-0 sm:pl-2 md:pl-4 border-l-0 sm:border-l-2 border-transparent group-hover:border-blue-500 transition-colors duration-500">
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="rounded-sm bg-card px-2.5 py-1.5 text-[9px] sm:px-2 sm:py-1 sm:text-[10px] font-bold tracking-[0.2em] uppercase text-muted">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mb-5 sm:mb-6 text-[1.35rem] sm:text-xl md:text-2xl font-bold text-foreground leading-snug group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-4 sm:mt-2 flex flex-wrap gap-3 sm:gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/60 px-4 py-2.5 text-xs font-bold text-[color:var(--muted-foreground)] hover:!text-foreground uppercase tracking-widest transition-colors duration-300 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
                    >
                      <Github size={15} /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/60 px-4 py-2.5 text-xs font-bold text-[color:var(--muted-foreground)] hover:!text-blue-600 uppercase tracking-widest transition-colors duration-300 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
                    >
                      <ExternalLink size={15} /> View
                    </a>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="mb-6 sm:mb-8 text-[14px] sm:text-[15px] font-light text-muted leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-lg border border-border bg-card px-3 py-2 sm:py-1.5 text-[10px] uppercase font-bold tracking-wider text-muted shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
