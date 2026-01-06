
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, BarChart3, CpuIcon } from 'lucide-react';
const fitplay = import.meta.env.BASE_URL + 'images/fitplay.png';
const waterbot = import.meta.env.BASE_URL + 'images/waterbot.png';
const covid = import.meta.env.BASE_URL + 'images/covid.png';
export function Projects() {
  const projects = [
    {
      title: "MPU6050 Sensor based Human activity recognition using machine learning",
      description: `• Used various classifier models for human exercise prediction; achieved 83% accuracy with an SVM. Integrated predictions into a Unity-based endless runner game to promote fun and fitness.
                    • Used Arduino UNO as microcontroller with 3 MPU6050 sensors integrated on a Body Suit for real time data acquisition`,
      image: fitplay,
      icon: CpuIcon,
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Arduino", "Unity"],
      link: "https://youtube.com/shorts/q4Tb-CpperY?si=oYgnfJpWkAqCBrMf",
      github: "https://github.com/10manik01/ML_Project---MPU6050_Sensor_based_Human_activity_recognition_using_machine_learning",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Autonomous Water Waste cleaning Robot",
      description: `• Led the development of a computer vision–based robot that collects floating water waste from the surface
                    • Implemeted OpenCV and Numpy for image processing to detect objects using Raspberry Pi and Pi camera`,
      image: waterbot,
      icon: Bot,
      tech: ["Python", "OpenCV", "Raspberry Pi", "Numpy"],
      link: "https://youtube.com/shorts/RPgxwPMWjCQ?si=nWs9gEOGSzGhD24M",
      github: "https://youtube.com/shorts/RPgxwPMWjCQ?si=nWs9gEOGSzGhD24M",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "COVID19 Data Analysis",
      description: "• Analyzed global COVID-19 datasets to extract insights on infection trends, recovery rates, and vaccination progress using Python libraries like Pandas, NumPy, and Matplotlib.",
      image: covid,
      icon: BarChart3,
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      link: "https://github.com/10manik01/Python_Data_Analysis_Project---Covid19_data_analysis",
      github: "https://github.com/10manik01/Python_Data_Analysis_Project---Covid19_data_analysis",
      gradient: "from-green-400 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Maintained your original H2 styling */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6 tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-400 tracking-[0.15em] text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image Box */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                    <project.icon className="w-5 h-5 text-gray-800" />
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-[0.08em] text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <div className="text-gray-600 tracking-[0.15em] text-sm leading-relaxed mb-6">
                  {project.description.split('\n').map((line, i) => (
                    <p key={i} className={i === 0 ? '' : 'mt-2'}>
                      {line}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 tracking-[0.1em] rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}