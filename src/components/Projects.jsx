import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'GSA FEDSIM & AAS Web Portals',
    description: 'Designed and deployed comprehensive web portals for GSA contracts, including an online university featuring interactive courses with full Section 508/WCAG compliance.',
    tech: ['Jekyll', '11ty', 'USWDS', 'GitHub Pages'],
    color: 'from-orange-500/20 to-red-500/20',
    icon: '🏛️',
  },
  {
    title: 'A-Train Learning Environment',
    description: 'Developed modular training delivery platform for enterprise-level intranet-based training with comprehensive UI/UX design and interactive learning modules.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SCORM'],
    color: 'from-orange-500/20 to-yellow-500/20',
    icon: '📚',
  },
  {
    title: 'Mobile Inspection Assistant',
    description: 'Created interactive mobile application for facility inspections with real-time data collection, offline support, and seamless backend integration.',
    tech: ['Flex', 'ActionScript', 'SQL', 'EXTJS'],
    color: 'from-orange-500/20 to-blue-500/20',
    icon: '📱',
  },
  {
    title: 'DOD Flash Training Products',
    description: 'Built comprehensive Flash-based training products for Department of Defense projects with interactive multimedia resources and assessment tools.',
    tech: ['Flash', 'ActionScript', 'JavaScript', 'XML'],
    color: 'from-orange-500/20 to-green-500/20',
    icon: '🎓',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-orange-500 mb-12 relative inline-block">
            Special Projects
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                className={`relative bg-gradient-to-br ${project.color} p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full overflow-hidden`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="text-4xl"
                      animate={{
                        rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-[#1a1a1a]/50 rounded-lg hover:bg-orange-500/20 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4 text-orange-500" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-[#1a1a1a]/50 rounded-lg hover:bg-orange-500/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-orange-500" />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="text-gray-100 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-[#1a1a1a]/50 border border-orange-500/30 rounded-full text-sm text-orange-500"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Code icon decoration */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-10"
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="w-16 h-16 text-orange-500" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
