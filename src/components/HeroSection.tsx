import { motion } from 'framer-motion';
import { ChevronsDown, Download } from 'lucide-react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import myProfile from '../assets/myprofile.jpg';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative py-12 lg:py-0">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">

        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs md:text-sm font-medium tracking-wide mx-auto lg:mx-0 w-fit">
            <span className="relative flex h-2 w-2 mr-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Currently available for new opportunities
          </div>

          <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide mb-4">Hello, I'm Ajay Medidhi.</h2>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black heading leading-[1.2] lg:leading-[1.1] mb-8 text-white drop-shadow-2xl">
            Full Stack <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg leading-tight lg:leading-[1.1]">
              Engineer
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-gray-400 max-w-2xl mb-4 leading-relaxed font-light">
            Building scalable systems with Angular, Node.js & Google Cloud.
          </p>
          <p className="text-sm md:text-base lg:text-xl text-indigo-200/60 max-w-2xl mb-12 leading-relaxed">
            Optimizing performance, reliability & real-world impact.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* Primary Action */}
            <a href="/resume.pdf" download="Ajay_Medidhi_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Download Resume" className="group flex items-center gap-3 bg-indigo-500 text-white rounded-full h-12 md:h-14 px-6 md:px-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]">
              <Download strokeWidth={2.5} className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-bold tracking-wide text-sm md:text-base">Resume</span>
            </a>

            <a href="https://linkedin.com/in/ajaymedidhi" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group flex items-center gap-3 bg-white text-slate-950 rounded-full h-12 md:h-14 px-6 md:px-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              <FaLinkedin className="text-[#0A66C2] text-xl md:text-2xl shrink-0" />
              <span className="font-bold tracking-wide text-sm md:text-base">Connect</span>
            </a>

            <a href="https://www.youtube.com/@ajayverse09" target="_blank" rel="noreferrer" aria-label="YouTube" className="group flex items-center gap-3 bg-white text-slate-950 rounded-full h-12 md:h-14 px-6 md:px-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              <FaYoutube className="text-[#FF0000] text-xl md:text-2xl shrink-0" />
              <span className="font-bold tracking-wide text-sm md:text-base">Subscribe</span>
            </a>

            {/* <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className="group flex items-center gap-3 bg-white text-slate-950 rounded-full h-12 md:h-14 px-6 md:px-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              <FaInstagram className="text-[#E1306C] text-xl md:text-2xl shrink-0" />
              <span className="font-bold tracking-wide text-sm md:text-base">Follow</span>
            </a> */}
          </div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap="tap"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          variants={{
            tap: { scale: 0.98 }
          }}
          className="lg:w-2/5 flex justify-center lg:justify-end relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none mx-auto lg:mx-0 z-10 cursor-pointer"
        >
          {/* Ambient Glow behind Image */}
          <motion.div
            variants={{
              animate: {
                opacity: [0.6, 0.9, 0.6],
                scale: [1.1, 1.25, 1.1],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              },
              tap: {
                opacity: 1,
                scale: 1.5,
                transition: {
                  duration: 0.15,
                }
              }
            }}
            animate="animate"
            whileTap="tap"
            className="absolute inset-0 bg-gradient-to-tr from-indigo-500/80 via-purple-500/80 to-pink-500/80 rounded-[3rem] blur-[60px] md:blur-[100px] -z-10 shadow-[0_0_40px_rgba(99,102,241,0.5)] md:shadow-none"
          />

          {/* Image Container */}
          <div className="relative aspect-square w-full rounded-[2.5rem] md:rounded-[3rem] p-3 border border-white/10 bg-white/[0.02] backdrop-blur-sm group-hover:border-indigo-500/30 group-hover:bg-white/[0.04] transition-all duration-500 shadow-2xl overflow-visible">

            {/* The Image Itself */}
            <div className="w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
              <img
                src={myProfile}
                alt="Ajay Medidhi"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                onError={(e) => {
                  /* Fallback to a solid gradient if github avatar fails to load */
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzRlMDBjMiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBlMGIyZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=';
                }}
              />
              {/* Overlay color tint that fades on hover */}
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
            </div>

            {/* Decorative orbit dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-purple-500 animate-pulse hidden md:block"></div>
            <div className="absolute bottom-12 -left-6 w-4 h-4 rounded-full bg-indigo-400 animate-bounce hidden md:block z-0"></div>

          </div>
        </motion.div>

      </div>

      {/* Down Arrow Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center hidden md:flex"
      >
        <a href="#about" aria-label="Scroll down" className="text-gray-500 hover:text-indigo-400 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronsDown size={64} strokeWidth={2.5} />
          </motion.div>
        </a>
      </motion.div>

    </section>
  );
}
