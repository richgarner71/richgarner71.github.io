import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-orange-500 mb-12 relative inline-block">
            About Me
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-300">
              Highly skilled Front-End Developer and Web Application Engineer with 20+ years in web development, 
              instructional design, UI/UX, and accessibility compliance (Section 508, WCAG 2). Experienced in 
              building robust, feature-rich applications using HTML5/CSS3, JavaScript, Node.js, PHP, React, and 
              related libraries.
            </p>
            <p className="text-gray-300">
              Strong background in building performant websites from scratch, leading teams, collaborating across 
              projects, and adopting new technologies to optimize development workflows. Specialized in creating 
              accessible web experiences that meet and exceed government compliance standards.
            </p>
            <p className="text-gray-300">
              My expertise spans from modern static site generators (Jekyll, 11ty) to enterprise-level applications, 
              with a focus on user experience design, web-based training products, and cutting-edge AI integration. 
              Currently exploring AI development and research to push the boundaries of web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-8 border border-orange-500/30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-gray-300">Available for opportunities</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: 'Years Experience', value: '20+' },
                    { label: 'Projects Completed', value: '100+' },
                    { label: 'Technologies', value: '30+' },
                    { label: 'Government Contracts', value: '10+' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-[#0f0f0f]/50 p-4 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors duration-300"
                    >
                      <div className="text-orange-500 mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <motion.a
            href="/resume.pdf"
            download="Rich_Garner_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg relative overflow-hidden group w-full md:w-auto justify-center"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-5 h-5" />
              <span>Download My Resume (PDF)</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <motion.a
              href="/recommendation-letter.pdf"
              download="Rich_Garner_Recommendation_Letter.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500/10 transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              <span>Recommendation Letter #1 (PDF)</span>
            </motion.a>

            <motion.a
              href="/recommendation-letter-2.pdf"
              download="Rich_Garner_Recommendation_Letter_2.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500/10 transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              <span>Recommendation Letter #2 (PDF)</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}