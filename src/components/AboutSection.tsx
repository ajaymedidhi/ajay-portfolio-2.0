import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    "I’m Ajay Medidhi, a Full Stack Engineer at Accenture, where I work on building scalable, high-performance systems. My work focuses on transforming complex business requirements into efficient, production-ready solutions using Angular, Node.js, and Google Cloud.",
    "My engineering background is not a past chapter—it’s my edge. The same principles of precision, system thinking, and problem-solving that govern flight now guide how I design reliable and scalable software systems.",
    "During my time at Proptelligence, I discovered my passion for building end-to-end products—combining clean architecture with seamless user experiences. That experience shaped my approach: think deeply, build efficiently, and deliver impact.",
    "Beyond work, I actively explore AI and data-driven systems, constantly pushing myself to stay ahead in a rapidly evolving tech landscape. I believe great engineering is about clarity, curiosity, and execution."
  ];

  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold heading mb-16 flex flex-col md:flex-row md:items-center gap-6">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500 hidden md:block"></span>
          About Me
        </h2>

        <div className="glass p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group max-w-4xl">
          {/* Main Short Paragraph (Reverted Content) */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            Results-driven Full Stack Developer with experience building high-performance applications using <span className="text-white font-bold">Angular, Node.js, and Google Cloud</span>. Skilled in backend optimization, large-scale reporting, and production systems. I am passionate about creating technical solutions that drive real-world impact and reliability at scale.
          </p>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-colors uppercase tracking-widest text-xs"
          >
            {isExpanded ? 'Hide Full Journey' : 'Read Full Journey: From Aircraft to Algorithms 🚀'}
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Expandable Story Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-8 border-t border-white/5 relative z-10 flex flex-col md:flex-row gap-10">
                  {/* Left Column Statement */}
                  <div className="md:w-1/3 shrink-0">
                    <h3 className="text-xl md:text-2xl font-bold leading-snug text-indigo-100 heading mb-6">
                      My journey from <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">aeronautical engineering</span> to software development reflects my drive to build, optimize, and innovate across domains.
                    </h3>
                    <div className="w-12 h-1 bg-indigo-500/50 rounded-full"></div>
                  </div>

                  {/* Right Column Body */}
                  <div className="md:w-2/3 space-y-5">
                    {paragraphs.map((para, index) => (
                      <p key={index} className="text-base text-gray-400 leading-relaxed font-medium">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
