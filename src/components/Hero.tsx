import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative bg-white overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="text-center max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
{/* Main Name Heading */}
<h1 className="text-6xl md:text-8xl font-black mb-4">
  <span className="inline-block tracking-normal bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent transition-all duration-500 cursor-default">
    MANIK SYANGTAN
  </span>
</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl font-light text-gray-500 mb-6 tracking-tight"
          >
            Welcome to My Portfolio
          </motion.div>
        </motion.div>

        {/* The Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto italic font-serif leading-relaxed"
        >
          "God is the ultimate programmer, and the universe is His code."
        </motion.p>

        {/* Animated Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center space-x-12 mb-16"
        >
          {[
            { Icon: Brain, color: "text-blue-500" },
            { Icon: Cpu, color: "text-purple-500" },
            { Icon: Zap, color: "text-yellow-500" }
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.4
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm ${color}`}>
                <Icon size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-3"
        >
          <div className="text-sm uppercase tracking-[0.3em] font-bold text-gray-900">
            Electronics, Communication & Information Engineer
          </div>
          <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-400 uppercase tracking-widest">
            <span>Data Engineering</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>AI / ML</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>Research</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={30} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}