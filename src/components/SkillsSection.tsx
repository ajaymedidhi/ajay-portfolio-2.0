import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiGooglecloud, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: [
        { name: 'Angular', level: 'Advanced', icon: <FaAngular className="text-red-500" /> },
        { name: 'React', level: 'Advanced', icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', level: 'Advanced', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'TypeScript', level: 'Intermediate', icon: <SiTypescript className="text-blue-500" /> }
      ]
    },
    {
      title: 'Backend Engineering',
      skills: [
        { name: 'Node.js', level: 'Advanced', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express', level: 'Advanced', icon: <SiExpress className="text-gray-300" /> },
        { name: 'REST APIs', level: 'Advanced', icon: <FaDatabase className="text-purple-400" /> }
      ]
    },
    {
      title: 'Data & Databases',
      skills: [
        { name: 'BigQuery', level: 'Advanced', icon: <SiGooglecloud className="text-blue-400" /> },
        { name: 'Spanner', level: 'Intermediate', icon: <FaDatabase className="text-blue-300" /> },
        { name: 'MongoDB', level: 'Advanced', icon: <SiMongodb className="text-green-500" /> }
      ]
    },
    {
      title: 'Infrastructure & Tools',
      skills: [
        { name: 'Google Cloud Platform', level: 'Intermediate', icon: <SiGooglecloud className="text-blue-500" /> },
        { name: 'Git', level: 'Advanced', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'CI/CD Pipelines', level: 'Intermediate', icon: <FaDatabase className="text-gray-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading mb-4 flex items-center gap-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
            Technical Arsenal
          </h2>
          <p className="text-xl text-indigo-300/80 font-light md:ml-[5.5rem]">
            Specialized in scalable frontend and high-performance backend systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border-t border-white/10 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.3)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-all duration-500"></div>
              
              <h3 className="text-lg font-bold heading mb-8 text-white group-hover:text-indigo-300 transition-colors">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center justify-between group/skill">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-lg group-hover/skill:border-white/20 transition-colors shadow-inner">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
                    </div>
                    {/* Proficiency Badge */}
                    <span className={`text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-sm border ${
                      skill.level === 'Advanced' 
                        ? 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10' 
                        : 'border-purple-500/30 text-purple-400 bg-purple-500/10'
                    }`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
