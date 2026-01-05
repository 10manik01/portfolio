// import { motion } from 'framer-motion';
// import { GraduationCap, TrendingUp, Calendar, Briefcase } from 'lucide-react';

// export function Experience() {
//   const experiences = [
//     {
//       title: "Data Analyst",
//       company: "University of West London",
//       period: "March 2024 - June 2024",
//       description: "Leading data analysis initiatives, developing insights from complex datasets, and creating visualization dashboards for academic research projects.",
//       icon: GraduationCap,
//       skills: ["Python", "SQL", "Power BI", "Statistical Analysis"]
//     },
//     {
//       title: "Data Analyst Intern",
//       company: "Protrainy",
//       period: "September 2021 - January 2022",
//       description: "Collaborated on machine learning projects, performed data preprocessing and feature engineering, and contributed to predictive modeling initiatives.",
//       icon: TrendingUp,
//       skills: ["Machine Learning", "Data Preprocessing", "Feature Engineering", "Model Training"]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 px-6 bg-white overflow-hidden">
//       <div className="max-w-4xl mx-auto">
//         {/* Header - Styled exactly like your Education section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6 tracking-tight">
//             EXPERIENCE
//           </h2>
//           <p className="text-gray-500 text-lg max-w-2xl mx-auto">
//             My journey in data science and AI engineering
//           </p>
//         </motion.div>

//         {/* Unified Timeline Entity */}
//         <div className="relative">
//           {/* Central Vertical Line */}
//           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-gray-200 to-transparent md:-translate-x-1/2" />

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={exp.title}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`relative flex flex-col md:flex-row items-start md:items-center ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >


// {/* Timeline Dot */}
// <div className="absolute left-4 md:left-1/2 w-4 h-4 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-white border-4 border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
//                 {/* Content Card */}
//                 <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
//                   index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
//                 }`}>
//                   <div className="p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-xl hover:border-blue-100 transition-all duration-300">
//                     <div className={`flex items-center gap-2 mb-3 text-blue-600 font-bold text-xs uppercase tracking-wider ${
//                       index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                     }`}>
//                       <Calendar size={14} />
//                       {exp.period}
//                     </div>

//                     <h3 className="text-xl font-bold text-gray-900 mb-1">
//                       {exp.title}
//                     </h3>
                    
//                     <p className="text-blue-500 font-medium mb-4 flex items-center gap-1 justify-start md:justify-start">
//                       <Briefcase size={14} className={index % 2 === 0 ? 'md:order-last' : ''} />
//                       {exp.company}
//                     </p>

//                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                       {exp.description}
//                     </p>

//                     {/* Skills Tags */}
//                     <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
//                       {exp.skills.map((skill) => (
//                         <span
//                           key={skill}
//                           className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-semibold border border-gray-200"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }