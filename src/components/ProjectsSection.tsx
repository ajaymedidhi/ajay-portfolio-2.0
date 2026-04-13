import { motion } from 'framer-motion';
import { ExternalLink, Activity, Users, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'PreventVital',
      metrics: [
        { icon: <Activity className="w-4 h-4" />, value: '100% Real-time', label: 'Data Sync' },
        { icon: <Users className="w-4 h-4" />, value: 'Role-Based', label: 'Access Control' }
      ],
      problem: 'Healthcare platforms often suffer from delayed reporting and fragmented patient data management.',
      solution: 'Architected a comprehensive health & wellness platform with real-time dashboards, automated PDF generation, and secure JWT-based RBAC.',
      highlights: [
        'Built scalable MERN stack architecture using TypeScript for type-safety.',
        'Implemented Redux Toolkit for complex real-time state management.',
        'Engineered an automated PDF report generation pipeline.'
      ],
      tags: ['MERN', 'TypeScript', 'Redux Toolkit', 'JWT', 'PDF Automation'],
      featured: true,
      github: '#',
      demo: 'https://prevent-vital.netlify.app/'
    },
    {
      title: 'Role-Based Ticketing System',
      metrics: [
        { icon: <Zap className="w-4 h-4" />, value: '+40%', label: 'Efficiency' },
        { icon: <Users className="w-4 h-4" />, value: '10+', label: 'Hospitals' }
      ],
      problem: 'Hospital IT and support teams faced massive inefficiencies managing large-ticket volumes across non-connected systems.',
      solution: 'Developed a robust multi-tenant system to govern the end-to-end technical support lifecycle with advanced analytics capabilities.',
      highlights: [
        'Designed multi-tenant architecture supporting separate environments for 10+ hospitals.',
        'Built custom analytics dashboards to track resolution times and bottlenecks.',
        'Optimized database queries in MongoDB to handle high-concurrency ticket updates.'
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      featured: false,
      github: '#',
      demo: 'https://client-ticketing.vercel.app/login'
    }
  ];

  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold heading flex items-center gap-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-md md:text-right">A selection of high-impact systems engineered for scalability and real-world performance.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative h-full flex flex-col"
            >
              {project.featured && (
                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent rounded-3xl blur-md opacity-20 group-hover:opacity-60 transition duration-500"></div>
              )}
              <div className={`relative h-full glass p-6 md:p-8 rounded-3xl flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.3)]
                ${project.featured ? 'border-indigo-500/40 bg-white/[0.04]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
              >

                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                  {project.featured ? (
                    <span className="text-xs font-bold text-indigo-300 tracking-widest uppercase bg-indigo-500/20 px-4 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]">Featured Project</span>
                  ) : (
                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10">Project</span>
                  )}
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group/btn">
                      <FaGithub size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-indigo-400 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-indigo-500/10 transition-all border border-transparent hover:border-indigo-500/30 group/btn">
                      <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                <h3 className="text-3xl font-bold heading mb-6 group-hover:text-indigo-300 transition-colors">{project.title}</h3>

                {/* Metrics Bar */}
                <div className="flex gap-4 mb-8 pb-6 border-b border-white/5">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                        {metric.icon}
                        <span className="font-bold text-lg">{metric.value}</span>
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Problem / Solution */}
                <div className="mb-6 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">The Problem</span>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-400/80 uppercase tracking-widest block mb-1">The Solution</span>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">{project.solution}</p>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mb-8 space-y-3 mt-auto">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-indigo-500 mt-1 flex-shrink-0">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded bg-slate-900 border border-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
