import { motion } from 'framer-motion';
import { Zap, Server, ShieldCheck, Database } from 'lucide-react';

export default function WhatIBringSection() {
  const offerings = [
    {
      title: 'Performance Optimization',
      metrics: '60% Improvements',
      description: 'Proven track record of drastically improving system performance utilizing advanced data ingestion pipelines and optimized queries.',
      icon: <Zap size={28} />
    },
    {
      title: 'Scalable System Design',
      metrics: 'High Concurrency',
      description: 'Architecting robust, fault-tolerant solutions capable of handling massive scale and traffic seamlessly in production.',
      icon: <Server size={28} />
    },
    {
      title: 'Production-Grade Reliability',
      metrics: '99.9% Uptime',
      description: 'Battle-tested experience in resolving critical, high-priority production issues across complex microservice environments.',
      icon: <ShieldCheck size={28} />
    },
    {
      title: 'Cloud & Data Engineering',
      metrics: 'GCP & BigQuery',
      description: 'Deep technical mindset for analyzing massive data streams, relying on enterprise cloud technologies to drive data decisions.',
      icon: <Database size={28} />
    }
  ];

  return (
    <section id="what-i-bring" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading mb-4 flex items-center gap-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-500"></span>
            Why Me?
          </h2>
          <p className="text-xl text-indigo-300/80 font-light md:ml-[5.5rem] tracking-wide">
            What sets me apart as an engineer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass p-8 md:p-10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border-white/5 hover:border-indigo-500/30 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.2)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px] transform translate-x-12 -translate-y-12 group-hover:scale-150 group-hover:bg-indigo-500/20 transition-all duration-700 pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-6 mb-6">
                <div className="text-indigo-400 inline-flex p-4 bg-slate-900 shadow-inner rounded-2xl border border-indigo-500/20 group-hover:border-indigo-400/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 shadow-sm self-start whitespace-nowrap">
                  {item.metrics}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold heading mb-3 tracking-wide text-white group-hover:text-indigo-200 transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg group-hover:text-gray-300 transition-colors font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
