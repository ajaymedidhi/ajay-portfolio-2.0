import { motion } from 'framer-motion';
import { Rocket, Server, Lightbulb, BrainCircuit, Target, Cpu } from 'lucide-react';

export default function CurrentlyBuildingSection() {
  return (
    <section id="currently-building" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading mb-4 flex items-center gap-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
            Currently Building 🚀
          </h2>
          <p className="text-xl text-gray-400 font-light lg:w-3/4 leading-relaxed mt-6">
            I am always experimenting, learning, and <span className="text-white font-bold">building the future</span>. Here is a glimpse into my active projects, my continuous learning journey, and the core disciplines I am focusing on right now.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: SkillSeed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="group relative h-full flex flex-col"
          >
            {/* Highlight Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-700"></div>
            
            <a
              href="https://skillseed-edu.netlify.app/" target="_blank" rel="noreferrer"
              className="relative h-full glass p-6 md:p-8 rounded-3xl border border-indigo-500/40 bg-slate-950/80 hover:bg-slate-900/90 shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] -translate-y-10 translate-x-10 group-hover:bg-indigo-500/30 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-950/50 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner group-hover:border-indigo-400 group-hover:bg-indigo-600/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 shrink-0">
                  <Rocket size={22} className="transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-3 py-1.5 rounded-full border border-indigo-500/30 inline-block transition-colors shadow-sm">Featured Project</span>
              </div>
              
              <div className="mb-5 relative z-10">
                <h3 className="text-2xl font-bold heading text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2 leading-tight">SkillSeed Edu-Tech Platform <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span></h3>
              </div>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow relative z-10 mb-4">
                Students in Class 11-12 often lack exposure to modern digital career paths. I am engineering an interactive educational platform to integrate robust <span className="text-gray-200 font-medium group-hover:text-indigo-200 transition-colors">Creator & Digital Paths</span> directly alongside their traditional studies.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 font-medium relative z-10 mt-auto pt-4 border-t border-white/5">
                <li className="flex items-start gap-2"><span className="text-indigo-500">✦</span> Dynamic UI cards mapping career tracks</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500">✦</span> Highly engaging student retention interface</li>
              </ul>
            </a>
          </motion.div>

          {/* Card 2: RAG & AI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="glass p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] relative overflow-hidden group flex flex-col cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] -translate-y-10 translate-x-10 group-hover:bg-purple-500/40 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-purple-400 shadow-inner group-hover:border-purple-500/60 group-hover:bg-purple-500/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500 shrink-0">
                <BrainCircuit size={22} className="transform group-hover:animate-pulse transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20 inline-block group-hover:bg-purple-500/20 transition-colors">Continuous Learning</span>
            </div>
            
            <div className="mb-5 relative z-10">
              <h3 className="text-2xl font-bold heading text-white group-hover:text-purple-300 transition-colors leading-tight">RAG & Intelligent AI</h3>
            </div>
            
            <p className="text-gray-400 font-light leading-relaxed flex-grow relative z-10">
              Deep diving into <span className="text-gray-200 font-medium group-hover:text-purple-200 transition-colors">Retrieval-Augmented Generation (RAG)</span> to construct context-aware AI systems that go beyond standard chatbots. Exploring vector databases and intelligent embedding strategies to deliver grounded, domain-specific AI logic.
            </p>
          </motion.div>

          {/* Card 3: Focus Areas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="glass p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 hover:bg-slate-800/60 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(236,72,153,0.4)] relative overflow-hidden group flex flex-col cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-[60px] -translate-y-10 translate-x-10 group-hover:bg-pink-500/40 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-pink-400 shadow-inner group-hover:border-pink-500/60 group-hover:bg-pink-500/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-500 shrink-0">
                <Target size={22} className="transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1.5 rounded-full border border-pink-500/20 inline-block group-hover:bg-pink-500/20 transition-colors">Core Objectives</span>
            </div>
            
            <div className="mb-5 relative z-10">
              <h3 className="text-2xl font-bold heading text-white group-hover:text-pink-300 transition-colors leading-tight">Strategic Focus Areas</h3>
            </div>
            
            <ul className="space-y-4 text-gray-400 font-medium flex-grow mt-2 relative z-10">
              <li className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <Cpu size={16} className="text-pink-500/70 group-hover:text-pink-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Next-Gen AI Applications</span>
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 delay-75 group-hover:translate-x-1">
                <Server size={16} className="text-pink-500/70 group-hover:text-pink-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Scalable Backend Distributed Systems</span>
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 delay-150 group-hover:translate-x-1">
                <Lightbulb size={16} className="text-pink-500/70 group-hover:text-pink-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Real-World Problem Solving Design</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
