import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const workExperiences = [
  {
    company: 'DTS, LLC',
    role: 'Senior Web Applications Developer',
    period: 'Jan 2020 - Present',
    description: 'Designed, developed, deployed, and maintained web portals for GSA\'s FEDSIM and AAS contracts including a DTS-hosted online university of GSA interactive courses. Researched and adopted new website frameworks (Jekyll and 11ty) using Ruby, Node, JavaScript, advanced CSS, and integration of the government\'s USWDS web framework.',
    achievements: [
      'Raised 508/WCAG compliance scores to 95%',
      'Initiated and tracked Google Analytics for multiple GSA projects',
      'Maintained GitHub repositories and utilized GitHub Pages for deployment',
    ],
  },
  {
    company: 'NCI Inc.',
    role: 'Software Engineer',
    period: 'Jul 2017 - Jan 2020',
    description: 'Maintained Flex components for GIMS, SMMS, RCMS, PASS, and PRAS systems. Established debugging baseline and supported testing environments for enterprise applications.',
    achievements: [
      'Managed ActionScript developer on team projects',
      'Established comprehensive debugging protocols',
      'Supported multiple enterprise testing environments',
    ],
  },
  {
    company: 'Exelis Inc.',
    role: 'Software Engineer',
    period: 'Feb 2013 - Jun 2016',
    description: 'Developed interactive mobile tools with Flex, ActionScript, SQL, ColdFusion, and EXTJS. Created innovative solutions for facility management and inspections.',
    achievements: [
      'Created Mobile Inspection Assistant for facility inspections',
      'Built interactive mobile tools from scratch',
      'Integrated multiple technologies for seamless user experience',
    ],
  },
  {
    company: 'Garner New Media',
    role: 'VP/Creative Director',
    period: 'Jan 2010 - Feb 2013',
    description: 'Founded and led creative agency designing and deploying small business websites with HTML, CSS, and JavaScript. Led UX/UI design for client projects.',
    achievements: [
      'Led all UX/UI design initiatives',
      'Delivered custom websites for diverse client base',
      'Managed end-to-end project delivery',
    ],
  },
  {
    company: 'Amerigroup',
    role: 'Web Developer / Instructional Designer',
    period: 'Apr 2006 - Sept 2009',
    description: 'Led UI/UX design for intranet-based training sites. Developed A-Train Learning Environment for modular training delivery.',
    achievements: [
      'Developed A-Train Learning Environment platform',
      'Led UI/UX design for enterprise training sites',
      'Created modular training delivery system',
    ],
  },
  {
    company: 'Computer Sciences Corporation',
    role: 'Associate Member of Technical Staff',
    period: 'Sept 2001 - Apr 2006',
    description: 'Built Flash training products for DOD projects. Trained and supervised developers in Flash and ActionScript for government training initiatives.',
    achievements: [
      'Built Flash training products for DOD projects',
      'Trained and supervised development team',
      'Delivered government training solutions',
    ],
  },
];

export function WorkHistory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-orange-500 mb-12 relative inline-block">
            Work Experience
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-600 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className={`relative md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-auto md:right-[-1.5rem] top-6 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#1a1a1a] z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    left: index % 2 === 0 ? 'auto' : '0',
                    right: index % 2 === 0 ? '-0.75rem' : 'auto',
                  }}
                />

                <motion.div
                  className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 ml-8 md:ml-0 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                          <Briefcase className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="text-gray-100">{exp.role}</h3>
                          <p className="text-orange-500">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 1 + index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
