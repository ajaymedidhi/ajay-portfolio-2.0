import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CurrentlyBuildingSection from './components/CurrentlyBuildingSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateBar = () => {
      const el = document.getElementById('scroll-bar');
      const top = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (el) el.style.width = `${(top / total) * 100}%`;
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', updateBar, { passive: true });
    return () => window.removeEventListener('scroll', updateBar);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.07, rootMargin: '-40px 0px' });
    document.querySelectorAll('.fade-in-section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div id="scroll-bar" />
      <div id="app">
        <Nav scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="page-content">
          <main>
            <HeroSection />
            <div className="fade-in-section"><AboutSection /></div>
            <div className="fade-in-section"><ExperienceSection /></div>
            <div className="fade-in-section"><ProjectsSection /></div>
            <div className="fade-in-section"><SkillsSection /></div>
            <div className="fade-in-section"><CurrentlyBuildingSection /></div>
            <div className="fade-in-section"><AchievementsSection /></div>
            <div className="fade-in-section"><ContactSection /></div>
          </main>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
