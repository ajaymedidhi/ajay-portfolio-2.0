import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-32 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <div className="glass max-w-4xl mx-auto p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-indigo-900/20 to-slate-900/80 border-white/10 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] transition-all duration-700">

          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/30 group-hover:scale-125 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-indigo-500/30 group-hover:scale-125 transition-all duration-1000"></div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-white/20"
          >
            <Mail size={28} className="text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black heading mb-4 tracking-tight text-white drop-shadow-lg">Let's Build Something Impactful 🚀</h2>

          <div className="font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-6 py-2 rounded-full inline-block mb-8 text-xs md:text-sm">
            Open to Full Stack / Backend opportunities
          </div>

          <div className="mb-10">
            <a href="mailto:ajaymedidhi858@gmail.com" className="group/btn inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-base transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1">
              Let's Connect
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-gray-400 font-medium text-base font-mono">ajaymedidhi858@gmail.com</p>
          </div>

          <div className="flex justify-center gap-6 border-t border-white/10 pt-8">
            <a href="https://linkedin.com/in/ajaymedidhi" target="_blank" rel="noreferrer" className="group/icon p-5 bg-slate-900 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/20 rounded-2xl text-gray-400 hover:text-white transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(99,102,241,0.5)]">
              <FaLinkedin size={28} className="group-hover/icon:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/ajaymedidhi" target="_blank" rel="noreferrer" className="group/icon p-5 bg-slate-900 border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/20 rounded-2xl text-gray-400 hover:text-white transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(168,85,247,0.5)]">
              <FaGithub size={28} className="group-hover/icon:scale-110 transition-transform" />
            </a>
            <a href="mailto:ajaymedidhi858@gmail.com" className="group/icon p-5 bg-slate-900 border border-white/5 hover:border-pink-500/50 hover:bg-pink-500/20 rounded-2xl text-gray-400 hover:text-white transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(236,72,153,0.5)]">
              <Mail size={28} className="group-hover/icon:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-20">
        <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">Designed and Engineered by Ajay Medidhi ❤️</p>
        <p className="text-xs text-gray-700">Built with React, Tailwind v4, and Framer Motion.</p>
      </div>
    </section>
  );
}
