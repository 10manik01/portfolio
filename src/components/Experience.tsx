// import { motion } from 'framer-motion';

// export function Experience() {
//   const experiences = [
//     {
//       role: "AI & ML Researcher / Student",
//       company: "Sagarmatha Engineering College",
//       period: "2021 - Present",
//       location: "Lalitpur, Nepal",
//       description: "Focusing on hardware-software integration, deep learning applications, and computer vision. Leading final year research projects involving real-world data acquisition and embedded system processing."
//     },
//     {
//       role: "Freelance Data Engineer",
//       company: "Independent",
//       period: "2023 - Present",
//       location: "Remote",
//       description: "Building automated data collection pipelines, optimizing databases for analytical queries, and creating clear, actionable data visualizations for clients."
//     }
//   ];

//   return (
//     <section id="experience" className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 divider-top-red">
//       <div className="max-w-2xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-12 sm:mb-16"
//         >
//           <span className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1.5 text-green-600 font-bold tracking-widest text-[12px] uppercase mb-6">
//             EXPERIENCE
//           </span>
//           <h2 className="text-[1.9rem] sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
//             Professional Journey
//           </h2>
//         </motion.div>

//         <div className="space-y-6 sm:space-y-8 md:space-y-16">
//           {experiences.map((exp, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//               viewport={{ once: true, margin: "-50px" }}
//               className="relative rounded-[26px] border-l border-border/50 bg-card/55 px-5 py-5 pl-6 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.55)] group transition-colors duration-500 hover:border-blue-500 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:pl-8 sm:shadow-none"
//             >
//               <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-500 ring-4 ring-card" />

//               <div className="mb-3 flex flex-col gap-2 sm:mb-2 sm:flex-row sm:items-baseline sm:justify-between">
//                 <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-blue-600 transition-colors duration-300">
//                   {exp.role}
//                 </h3>
//                 <span className="text-xs font-bold text-muted font-mono tracking-wider shrink-0">
//                   {exp.period}
//                 </span>
//               </div>

//               <div className="mb-4 flex flex-wrap items-center gap-3">
//                 <span className="text-[13px] font-bold text-muted uppercase tracking-widest">
//                   {exp.company}
//                 </span>
//                 <span className="w-1 h-1 rounded-full bg-muted" />
//                 <span className="text-[13px] font-medium text-muted">
//                   {exp.location}
//                 </span>
//               </div>

//               <p className="max-w-lg text-[14px] sm:text-[15px] font-light text-muted leading-relaxed">
//                 {exp.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
