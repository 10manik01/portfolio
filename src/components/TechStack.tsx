import { motion } from 'framer-motion';
const pythonLogo = import.meta.env.BASE_URL + 'images/python.png';
const Cpp = import.meta.env.BASE_URL + 'images/c-.png';
const SQL = import.meta.env.BASE_URL + 'images/database.png';
const Docker = import.meta.env.BASE_URL + 'images/Docker.png';
const Git = import.meta.env.BASE_URL + 'images/Git.png';
const keras = import.meta.env.BASE_URL + 'images/Keras.png';
const C = import.meta.env.BASE_URL + 'images/letter-c.png';
const Matplot = import.meta.env.BASE_URL + 'images/Matplotlib.png';
const NumPy = import.meta.env.BASE_URL + 'images/NumPy.png';
const OpenCV = import.meta.env.BASE_URL + 'images/OpenCV.png';
const Pandas = import.meta.env.BASE_URL + 'images/Pandas.png';
const Raspberry = import.meta.env.BASE_URL + 'images/Raspberry Pi.png';
const scikit = import.meta.env.BASE_URL + 'images/scikit-learn.png';
const tensor = import.meta.env.BASE_URL + 'images/TensorFlow.png';
const vhdl = import.meta.env.BASE_URL + 'images/chip.png';
const Arduino = import.meta.env.BASE_URL + 'images/Arduino.png';
const Postgres = import.meta.env.BASE_URL + 'images/PostgresSQL.png';
const MySQL = import.meta.env.BASE_URL + 'images/MySQL.png';
const Spark = import.meta.env.BASE_URL + 'images/Apache Spark.png';
const Airflow = import.meta.env.BASE_URL + 'images/Apache Airflow.png';
const n8n = import.meta.env.BASE_URL + 'images/n8n.png';
const Linux = import.meta.env.BASE_URL + 'images/Linux.png';

export function TechStack() {
  type Skill = { name: string; logo?: string; icon?: string };
  type Category = { category: string; skills: Skill[] };

  const techCategories: Category[] = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: pythonLogo },
        { name: "SQL", logo: SQL },
        { name: "C", logo: C },
        { name: "C++", logo: Cpp },
        { name: "VHDL", logo: vhdl }
      ]
    },
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", logo: tensor },
        { name: "Scikit-learn", logo: scikit },
        { name: "Keras", logo: keras }
      ]
    },
    {
      category: "Data & Visualization",
      skills: [
        { name: "Pandas", logo: Pandas },
        { name: "NumPy", logo: NumPy },
        { name: "Matplotlib", logo: Matplot },
        { name: "OpenCV", logo: OpenCV }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "PostgreSQL", logo: Postgres },
        { name: "Apache Airflow", logo: Airflow },
        { name: "Apache Spark", logo: Spark },
        { name: "MySQL", logo: MySQL },
        { name: "Docker", logo: Docker },
        { name: "Git", logo: Git },
        { name: "Raspberry Pi", logo: Raspberry },
        { name: "Arduino UNO", logo: Arduino },
        { name: "Linux", logo: Linux },
        { name: "n8n", logo: n8n }
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Maintained exact font and size */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6 tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="text-gray-400 tracking-[0.15em] text-base md:text-xl mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Organized Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl tracking-[0.15em] font-bold text-gray-900 md:whitespace-nowrap">
                  {category.category}
                </h3>
                <div className="h-[1px] w-full bg-gray-100" />
              </div>

              {/* Simplified Grid of Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-200"
                  >
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xl">{skill.icon}</span>
                      )}
                    </div>
                    <span className="text-xs tracking-[0.15em] font-bold text-gray-700 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}