import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code2, Braces, Server, Boxes, Sparkles } from 'lucide-react';

const skills = [
  {
    name: 'HTML5/CSS3',
    icon: Code2,
    level: 98,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'JavaScript',
    icon: Braces,
    level: 95,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Node.js',
    icon: Server,
    level: 90,
    color: 'from-orange-500 to-green-500',
  },
  {
    name: 'React',
    icon: Boxes,
    level: 92,
    color: 'from-orange-500 to-cyan-500',
  },
  {
    name: 'AI',
    icon: Sparkles,
    level: 85,
    color: 'from-orange-500 to-purple-500',
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-orange-500 mb-12 relative inline-block">
            Technical Skills
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative"
              >
                <motion.div
                  className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#252525] to-[#1a1a1a] border border-orange-500/20 hover:border-orange-500/50 transition-colors duration-300 flex flex-col items-center justify-center p-6 group overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Rotating border effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl`}
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${
                        hoveredSkill === skill.name ? 'rgba(249, 115, 22, 0.5)' : 'transparent'
                      }, transparent)`,
                    }}
                    animate={{
                      rotate: hoveredSkill === skill.name ? 360 : 0,
                    }}
                    transition={{ duration: 2, repeat: hoveredSkill === skill.name ? Infinity : 0, ease: "linear" }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className="mb-4"
                      animate={{
                        y: hoveredSkill === skill.name ? [0, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: hoveredSkill === skill.name ? Infinity : 0,
                      }}
                    >
                      <Icon className="w-12 h-12 text-orange-500" />
                    </motion.div>
                    
                    <h3 className="text-gray-100 text-center">{skill.name}</h3>
                    
                    {/* Skill level indicator */}
                    <motion.div
                      className="mt-3 text-orange-500 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                    >
                      {skill.level}%
                    </motion.div>
                  </div>

                  {/* Particle effect on hover */}
                  {hoveredSkill === skill.name && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-orange-500"
                          initial={{
                            x: '50%',
                            y: '50%',
                            opacity: 1,
                          }}
                          animate={{
                            x: `${50 + Math.cos((i * Math.PI * 2) / 6) * 100}%`,
                            y: `${50 + Math.sin((i * Math.PI * 2) / 6) * 100}%`,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="space-y-6"
        >
          {skills.map((skill, index) => (
            <div key={skill.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-orange-500"
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="relative h-2 bg-[#252525] rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5 + index * 0.1,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
