
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, ExternalLink } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "B.E. Electronics, Communication & Information",
      school: "Sagarmatha Engineering College",
      link: "https://sagarmatha.edu.np/",
      period: "2021 - 2025",
      details: "In-depth study of signal processing, embedded systems, and AI/ML. Developing a strong foundation in telecommunications and data engineering.",
      icon: GraduationCap
    },
    {
      degree: "High School (+2 Science)",
      school: "Hetauda School of Management and Social Sciences",
      link: "https://hsm.edu.np/",
      period: "2018 - 2020",
      details: "Located in Hetauda, Nepal. Focused on advanced sciences and mathematics.",
      icon: BookOpen
    },
    {
      degree: "Secondary School (SEE)",
      school: "Shree Bhrikutee Secondary School",
      link: "https://www.google.com/maps/place/Shree+Bhrikuti+Secondary+School/@27.3855041,84.9876692,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb4b3be1976d9f:0xc6bd4a2ef47ec0dd!8m2!3d27.3855041!4d84.9876692!16s%2Fg%2F11rsb3b_76?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
      period: "2017 passout",
      details: "School located at Kalopani, Hetauda, Nepal.",
      icon: School
    }
  ];

  return (
    <section id="education" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Header Section - Kept exactly as requested */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6 tracking-tight">
            EDUCATION
          </h2>
          <p className="text-gray-400 tracking-[0.15em] text-base md:text-xl mt-4 max-w-2xl mx-auto">
            Academic background and lifelong learning journey
          </p>
        </motion.div>

        {/* Single Timeline Entity */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-gray-200 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center rounded-full bg-white border-2 border-yellow-500 z-10 shadow-sm">
                  <item.icon className="w-5 h-5 text-yellow-600" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="p-6 bg-gray-50/50 border border-gray-100 rounded-3xl hover:shadow-md transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold mb-3">
                      {item.period}
                    </span>
                    
                    <h3 className="text-xl font-bold tracking-[0.15em] text-gray-900 leading-tight mb-2">
                      {item.degree}
                    </h3>
                    
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-blue-600 hover:text-blue-500 font-medium text-sm mb-3 transition-colors ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {item.school}
                      <ExternalLink size={12} />
                    </a>
                    
                    <p className="text-gray-600 tracking-[0.15em] text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}