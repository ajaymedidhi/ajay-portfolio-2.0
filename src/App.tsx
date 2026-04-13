import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import WhatIBringSection from './components/WhatIBringSection';
import ContactSection from './components/ContactSection';
import GenAISection from './components/GenAISection';
import CurrentlyBuildingSection from './components/CurrentlyBuildingSection';
import ScrollToTop from './components/ScrollToTop';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleXValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const barWidth = useTransform(scaleXValue, v => `${v * 100}%`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
        <motion.div
          key="loader-spinner"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full shadow-[0_0_25px_rgba(99,102,241,0.6)]"
        />
        <motion.p
          key="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-indigo-400 font-heading tracking-widest text-sm uppercase"
        >
          Initializing Portfolio
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-950 text-gray-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden relative">

      {/* Scroll Progress Bar */}
      <motion.div
        key="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[100]"
        style={{ width: barWidth }}
      />

      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[150px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-4 px-6 md:px-12 flex justify-between items-center bg-slate-950/40">
        <div className="text-2xl font-bold tracking-tighter heading text-white">
          AM<span className="text-indigo-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors hover:scale-105 transform">About</a>
          <a href="#experience" className="hover:text-white transition-colors hover:scale-105 transform">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors hover:scale-105 transform">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors hover:scale-105 transform">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-24 space-y-40 relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CurrentlyBuildingSection />
        <SkillsSection />
        <GenAISection />
        <AchievementsSection />
        <WhatIBringSection />
        <ContactSection />
      </main>

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}

export default App;
