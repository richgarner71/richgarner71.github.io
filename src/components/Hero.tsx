import { motion } from 'motion/react';
import { ChevronDown, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import richGarnerPhoto from 'figma:asset/b54f8505574d012ab0ccaee4f62811ac675ffc82.png';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-gray-100 mb-4 relative flex items-center justify-center gap-8"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={richGarnerPhoto}
                alt="Rich Garner"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-500 shadow-lg shadow-orange-500/30"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/30 to-orange-600/30 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <span className="relative">
              Rich Garner
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-orange-500 mb-2"
          >
            Senior Web Applications Developer | AI Developer | AI Researcher
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mb-2 max-w-2xl mx-auto"
        >
          20+ years of expertise in web development, UI/UX design, and accessibility compliance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm mb-8"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            Ashburn, VA
          </span>
          <span>•</span>
          <a href="mailto:RichGarner71@Gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Mail className="w-4 h-4 text-orange-500" />
            RichGarner71@Gmail.com
          </a>
          <span>•</span>
          <a href="tel:757-869-0361" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Phone className="w-4 h-4 text-orange-500" />
            757-869-0361
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/RichGarner71" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Linkedin className="w-4 h-4 text-orange-500" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg relative overflow-hidden group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500/10 transition-colors duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </motion.button>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </motion.div>
      </div>
    </section>
  );
}