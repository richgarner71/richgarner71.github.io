import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkHistory } from './components/WorkHistory';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <WorkHistory />
        <Projects />
        <Skills />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-orange-500/20 bg-[#0f0f0f]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p className="mb-2">© 2025 Rich Garner - Senior Web Applications Developer</p>
          <p className="text-sm">Built with React, Motion, and Advanced CSS</p>
          <div className="mt-4 text-xs">
            <p>🎓 Saint Leo University - Associates Degree in Computer Arts & Computer Science</p>
            <p className="mt-1">🔒 Security Clearance: SECRET (Inactive) | ✓ Section 508 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
