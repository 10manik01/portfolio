import { motion } from 'framer-motion';
import { Code, FileSearch, Focus } from 'lucide-react';
import profileImage from '../assets/monic.jpeg';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6 tracking-tight">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image with Modern Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              {/* Modern Background Decorative Element */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={profileImage} 
                  alt="Manik Syangtan" 
                  className="w-full h-full object-cover transition-all duration-700"/*grayscale hover:grayscale-0*/
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 hidden md:block">
                <p className="text-blue-600 font-bold tracking-[0.15em] text-sm leading-none">Elex, Comm and Info Engineer</p>
                <p className="text-gray-400 text-sm tracking-[0.15em] font-light uppercase tracking-wider">NEC Registered</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-2xl font-light text-gray-300 mb-6 tracking-tight">
              Graduate Electronics, Communication and Information Engineer
            </h3>

            <p className="text-sm tracking-[0.25em] font-light text-gray-600">
              I am an NEC-registered Electronics, Communication, and Information Engineer 
              from Kalopani, Hetauda, Nepal. I hold a Bachelor’s degree in Electronics, 
              Communication, and Information Engineering from Sagarmatha Engineering 
              College, affiliated with Tribhuvan University.
            </p>

            <p className="text-gray-600 mb-12 max-w-xl mx-auto italic font-light leading-relaxed">
              "Learning is a never-ending journey and I've chosen to walk it with 
              AI and Machine Learning by my side."
            </p>

            <p className="text-sm tracking-[0.25em] font-light text-gray-600">
             I enjoy tackling complex problems and researching AI/ML solutions that create 
             meaningful real-world impact. Outside of coding, I explore physics, read science
             fiction, and watch documentaries about the universe.
            </p>

            {/* Icon Grid - Modernized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-gray-700 font-light">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Code className="text-blue-500" size={20} />
                </div>
                <span className="text-sm tracking-[0.1em]">Fluent in Algorithms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Focus className="text-purple-500" size={20} />
                </div>
                <span className="text-sm tracking-[0.1em]">Detail Oriented</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-pink-50 rounded-lg">
                  <FileSearch className="text-pink-500" size={20} />
                </div>
                <span className="text-sm tracking-[0.1em]">Research Driven</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}