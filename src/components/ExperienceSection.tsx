import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: 'Accenture',
      role: 'Associate Software Developer',
      period: 'Oct 2024 – Present',
      link: '#', 
      keyImpact: '60% Performance Boost',
      summary: `
        <p class="mb-4">Worked on enterprise-scale backend systems focusing on performance, data engineering, and production reliability.</p>
        <ul class="space-y-2 mb-2">
          <li class="flex items-start gap-3 text-base"><span class="text-indigo-500 mt-1 text-sm flex-shrink-0">✦</span> <span>Improved report performance by <strong class="text-indigo-300">60%</strong> using BigQuery optimization</span></li>
          <li class="flex items-start gap-3 text-base"><span class="text-indigo-500 mt-1 text-sm flex-shrink-0">✦</span> <span>Reduced API latency by <strong class="text-indigo-300">35%</strong> across critical endpoints</span></li>
          <li class="flex items-start gap-3 text-base"><span class="text-indigo-500 mt-1 text-sm flex-shrink-0">✦</span> <span>Built scalable Angular modules for enterprise Roster Management</span></li>
          <li class="flex items-start gap-3 text-base"><span class="text-indigo-500 mt-1 text-sm flex-shrink-0">✦</span> <span>Ensured <strong class="text-indigo-300">99.9% system reliability</strong> by resolving production issues</span></li>
        </ul>
      `,
      extendedHTML: `
        <div class="space-y-4">
          <h4 class="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-white/5 pb-3 mb-4">Key Contributions</h4>
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="bg-white/[0.02] p-4 rounded-2xl border border-white/5 group-hover/list:border-indigo-500/20 transition-colors">
              <h5 class="text-gray-200 font-semibold text-sm mb-1.5 flex items-center gap-2"><span class="text-lg">🚀</span> Performance & Data</h5>
              <p class="text-gray-400 text-sm leading-relaxed font-normal">Optimized BigQuery workflows, resolved data mismatches, and improved query structures for large datasets.</p>
            </div>
            <div class="bg-white/[0.02] p-4 rounded-2xl border border-white/5 group-hover/list:border-indigo-500/20 transition-colors">
              <h5 class="text-gray-200 font-semibold text-sm mb-1.5 flex items-center gap-2"><span class="text-lg">🐞</span> Production Stability</h5>
              <p class="text-gray-400 text-sm leading-relaxed font-normal">Resolved critical production bugs (e.g., False Roll-off), ensuring accurate reporting and system reliability.</p>
            </div>
            <div class="bg-white/[0.02] p-4 rounded-2xl border border-white/5 group-hover/list:border-indigo-500/20 transition-colors">
              <h5 class="text-gray-200 font-semibold text-sm mb-1.5 flex items-center gap-2"><span class="text-lg">⚙️</span> Feature Enhancements</h5>
              <p class="text-gray-400 text-sm leading-relaxed font-normal">Delivered enhancements like OSCA integration, improved exports, and data visibility fixes.</p>
            </div>
            <div class="bg-white/[0.02] p-4 rounded-2xl border border-white/5 group-hover/list:border-indigo-500/20 transition-colors">
              <h5 class="text-gray-200 font-semibold text-sm mb-1.5 flex items-center gap-2"><span class="text-lg">☁️</span> BigQuery Migration</h5>
              <p class="text-gray-400 text-sm leading-relaxed font-normal">Contributed to BQ migration by improving queries, adding metadata, and ensuring report consistency.</p>
            </div>
            <div class="bg-white/[0.02] p-4 rounded-2xl border border-white/5 group-hover/list:border-indigo-500/20 transition-colors">
              <h5 class="text-gray-200 font-semibold text-sm mb-1.5 flex items-center gap-2"><span class="text-lg">🤝</span> Collaboration</h5>
              <p class="text-gray-400 text-sm leading-relaxed font-normal">Worked cross-functionally, supported team members, and owned key modules like Departure Roster.</p>
            </div>
            <div class="bg-white/[0.02] p-4 rounded-2xl border border-white/5 group-hover/list:border-indigo-500/20 transition-colors">
              <h5 class="text-gray-200 font-semibold text-sm mb-1.5 flex items-center gap-2"><span class="text-lg">🛠️</span> Deployment</h5>
              <p class="text-gray-400 text-sm leading-relaxed font-normal">Handled deployments, hotfixes, and DRI incidents ensuring smooth production operations.</p>
            </div>
          </div>
        </div>
      `,
      tech: ['Angular', 'Node.js', 'BigQuery', 'Spanner', 'GCP']
    },
    {
      company: 'Proptelligence',
      role: 'Full Stack Developer Intern',
      period: 'Dec 2023 – June 2024',
      link: '#', 
      keyImpact: '40% Engagement Spike',
      summary: 'Developed interactive and highly scalable React applications, boosting overall user engagement metrics by an impressive <strong class="text-indigo-300">40%</strong>. Refactored legacy system endpoints and optimized server architecture to yield a <strong class="text-indigo-300">30%</strong> speed increase in API responses. Orchestrated the full-stack deployment of multiple connected applications seamlessly into live cloud environments.',
      tech: ['React', 'Node.js', 'REST APIs', 'Cloud Deployment']
    }
  ];

  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold heading mb-16 flex flex-col md:flex-row md:items-center gap-6">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500 hidden md:block"></span>
          Professional Experience
        </h2>
        
        <div className="group/list space-y-8 md:space-y-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group grid pb-1 transition-all md:grid-cols-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40 rounded-3xl p-5 md:p-6 hover:bg-white/[0.03] border border-transparent hover:border-white/5 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.1)]"
            >
              {/* Left Column: Dates & Key Impact */}
              <header className="z-10 mb-4 md:mb-0 text-xs font-bold uppercase tracking-widest text-gray-500 md:col-span-2 md:pt-2 flex flex-col gap-3 items-start" aria-label={exp.period}>
                <span>{exp.period}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 shadow-sm flex items-center gap-2 w-fit">
                   <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse"></span>
                  {exp.keyImpact}
                </span>
              </header>

              {/* Right Column: Content */}
              <div className="z-10 md:col-span-6 flex flex-col">
                <h3 className="font-bold text-2xl md:text-3xl leading-snug text-white mb-2 heading">
                  <div>
                    <a
                      className="inline-flex items-center gap-2 hover:text-indigo-400 focus-visible:text-indigo-400 group/link transition-colors"
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${exp.role} at ${exp.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {exp.role} <span className="text-gray-500 font-normal">·</span> <span className="text-indigo-300">{exp.company}</span>
                      </span>
                      <ArrowUpRight className="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </h3>

                {/* Using dangerouslySetInnerHTML to enable the bold custom colored metrics */}
                <div 
                  className="mt-4 text-base md:text-lg leading-relaxed text-gray-400 font-medium"
                  dangerouslySetInnerHTML={{ __html: exp.summary }}
                />

                {(exp as any).extendedHTML && (
                  <div className="mt-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setExpandedIndex(expandedIndex === index ? null : index);
                      }}
                      className="mt-2 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-colors uppercase tracking-widest text-xs relative z-20 group/toggle focus:outline-none"
                    >
                      {expandedIndex === index ? 'Hide Key Contributions' : 'View Key Contributions'}
                      {expandedIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden relative z-20"
                        >
                          <div dangerouslySetInnerHTML={{ __html: (exp as any).extendedHTML }} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Tech Stack Bubbles */}
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
                  {exp.tech.map((tech, i) => (
                    <li key={i}>
                      <div className="flex items-center rounded-lg bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold leading-5 text-indigo-300 border border-indigo-500/20 shadow-sm">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
