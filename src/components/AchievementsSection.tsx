import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { FaGoogle, FaBuilding } from 'react-icons/fa';

export default function AchievementsSection() {
  const achievements = [
    {
      text: 'Google Associate Data Practitioner certified',
      tag: 'Cloud & Data',
      icon: <FaGoogle size={20} />,
      highlight: false
    },
    {
      text: 'Google Generative AI Leader certified',
      tag: 'AI / Leadership',
      icon: <FaGoogle size={20} />,
      highlight: false
    },
    {
      text: 'McKinsey Forward Fellow',
      tag: 'Leadership',
      icon: <FaBuilding size={20} />,
      highlight: false
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold heading mb-16 flex items-center gap-6">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
          Key Achievements
        </h2>
        
        {/* Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6 relative group overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="glass p-8 md:p-10 border-indigo-500/30 relative flex flex-col md:flex-row items-center md:items-start justify-between gap-8 hover:-translate-y-1 transition-transform duration-500">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">Performance</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full">Accenture</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold heading leading-tight mb-4 text-white">
                Improved system performance by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-black">60%</span> handling 40K+ records.
              </h3>
              <p className="text-gray-400 font-medium">Spearheaded the backend optimization utilizing BigQuery, significantly reducing processing overhead and increasing overall throughput for massive datasets.</p>
            </div>
            <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full border-[6px] border-indigo-500/20 flex items-center justify-center bg-slate-900 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <TrendingUp size={48} className="text-indigo-400" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass p-8 rounded-3xl bg-white/[0.02] border-white/5 flex flex-col gap-5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 bg-slate-900 rounded-2xl text-gray-400 border border-white/5 shadow-inner group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                  {achievement.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10">{achievement.tag}</span>
              </div>
              <p className="font-semibold text-lg text-white leading-tight">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
