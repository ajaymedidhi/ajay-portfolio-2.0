import { motion } from 'framer-motion';
import { Sparkles, TerminalSquare, Activity, Bot, Cpu, Zap, CodeSquare } from 'lucide-react';

export default function GenAISection() {
  const tools = [
    'OpenAI (GPT)', 'Google Gemini', 'Vertex AI', 'Prompt Engineering', 
    'LangChain', 'GitHub Copilot', 'Cursor', 'AI Automations'
  ];

  return (
    <section id="ai-engineering" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading mb-4 flex items-center gap-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
            AI Engineering & GenAI
          </h2>
          <p className="text-xl text-gray-400 font-light lg:w-3/4 leading-relaxed mt-6">
             I treat Generative AI natively as a <span className="text-white font-bold">productivity multiplier</span>. Beyond just knowing the tools, I actively integrate Large Language Models (LLMs) and intelligent APIs into development workflows to accelerate coding, automate testing, and build inherently smarter, scalable systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Capabilities */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="glass p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)] relative overflow-hidden group flex flex-col cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] -translate-y-10 translate-x-10 group-hover:bg-indigo-500/40 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-indigo-400 shadow-inner group-hover:border-indigo-500/60 group-hover:bg-indigo-500/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-500 shrink-0">
                <Bot size={22} className="transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold heading text-white group-hover:text-indigo-300 transition-colors leading-tight">Core Capabilities</h3>
            </div>
            <ul className="space-y-4 mb-6 relative z-10">
              <li className="flex items-start gap-4 text-gray-400 font-medium transition-transform duration-300 group-hover:translate-x-1">
                <CodeSquare size={18} className="text-indigo-500/50 mt-1 shrink-0 group-hover:text-indigo-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Build active AI-powered features utilizing modern LLMs.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 font-medium transition-transform duration-300 delay-75 group-hover:translate-x-1">
                <Cpu size={18} className="text-indigo-500/50 mt-1 shrink-0 group-hover:text-indigo-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Integrate advanced AI APIs natively into MERN architecture.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 font-medium transition-transform duration-300 delay-150 group-hover:translate-x-1">
                <TerminalSquare size={18} className="text-indigo-500/50 mt-1 shrink-0 group-hover:text-indigo-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Leverage deep prompt engineering for rigid data structuring.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Tools & Ecosystem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="glass p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] relative overflow-hidden group flex flex-col cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] -translate-y-10 translate-x-10 group-hover:bg-purple-500/40 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-purple-400 shadow-inner group-hover:border-purple-500/60 group-hover:bg-purple-500/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500 shrink-0">
                <Sparkles size={22} className="transform group-hover:animate-pulse transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold heading text-white group-hover:text-purple-300 transition-colors leading-tight">Ecosystem</h3>
            </div>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {tools.map((tool, i) => (
                <span key={i} className="text-sm font-semibold px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-gray-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 group-hover:text-white transition-all shadow-inner">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Real World Impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="glass p-6 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 hover:bg-slate-800/60 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(236,72,153,0.4)] relative overflow-hidden group flex flex-col cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-[60px] -translate-y-10 translate-x-10 group-hover:bg-pink-500/40 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-pink-400 shadow-inner group-hover:border-pink-500/60 group-hover:bg-pink-500/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-500 shrink-0">
                <Activity size={22} className="transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold heading text-white group-hover:text-pink-300 transition-colors leading-tight">Production Impact</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-4 text-gray-400 font-medium transition-transform duration-300 group-hover:translate-x-1">
                <Zap size={18} className="text-pink-500/50 mt-1 shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Accelerate full-stack development cycles and drastically reduce bug resolution times.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 font-medium transition-transform duration-300 delay-75 group-hover:translate-x-1">
                <Zap size={18} className="text-pink-500/50 mt-1 shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Enhance productivity by dynamically generating boilerplate and performing architectural validation.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 font-medium transition-transform duration-300 delay-150 group-hover:translate-x-1">
                <Zap size={18} className="text-pink-500/50 mt-1 shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">Design self-healing data pipelines leveraging AI for error correction and routing.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
