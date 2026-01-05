
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Youtube, ExternalLink } from 'lucide-react';

export function Contact() {
  const socials = [
    { icon: Mail, label: "Email", info: "maniksyangtan01@gmail.com", href: "mailto:maniksyangtan01@gmail.com", color: "text-red-500", bg: "bg-red-50" },
    { icon: Linkedin, label: "LinkedIn", info: "Professional Network", href: "https://www.linkedin.com/in/maniksyangtan/", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Github, label: "GitHub", info: "Code & Projects", href: "https://github.com/10manik01", color: "text-gray-900", bg: "bg-gray-100" },
    { icon: Youtube, label: "YouTube", info: "Content Creation", href: "https://www.youtube.com/@MindMineNepal", color: "text-red-600", bg: "bg-red-50" },
    { icon: Phone, label: "Phone", info: "+977-9811233214", href: "tel:+9779811233214", color: "text-green-500", bg: "bg-green-50" },
    { icon: "🤗", label: "HuggingFace", info: "AI Models", href: "https://huggingface.co/manik01", color: "text-yellow-600", bg: "bg-yellow-50" }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header - Matching Hero Subheading Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-4 tracking-tight uppercase">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Square Wrapped Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200"
            >
              <div className="flex flex-col h-full space-y-4">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-2xl ${social.bg} ${social.color} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    {typeof social.icon === 'string' ? (
                      <span className="text-xl">{social.icon}</span>
                    ) : (
                      <social.icon size={24} />
                    )}
                  </div>
                  <ExternalLink size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <div>
                  <h3 className="text-gray-900 tracking-[0.2em] font-bold text-lg">{social.label}</h3>
                  <p className="text-gray-400 tracking-[0.15em] text-xs font-medium truncate group-hover:text-gray-600 transition-colors">
                    {social.info}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Concise Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center border-t border-gray-50 pt-12"
        >
          <h3 className="text-2xl font-black tracking-normal mb-2">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              MANIK SYANGTAN
            </span>
          </h3>
          <p className="text-gray-400 text-[10px] tracking-[0.5em] uppercase font-bold">
            © 2026 • Manik Syangtan • All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}