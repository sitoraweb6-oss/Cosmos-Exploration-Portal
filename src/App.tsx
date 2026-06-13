import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ActiveTab } from "./types";
import GlowBackground from "./components/GlowBackground";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import MissionsSection from "./components/sections/MissionsSection";
import GallerySection from "./components/sections/GallerySection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import { Sparkles, Terminal } from "lucide-react";
import CoreAttribution from "./components/CoreAttribution";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    // Elegant digital clock in GMT / UTC is highly suited to sci-fi dashboards
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-[#070B16] text-white selection:bg-cyan-500/20 selection:text-white block">
      {/* 1. Cinematic Deep Space Particle & Nebula Background Canvas */}
      <GlowBackground />

      {/* Accent Neon Corner from requested Design HTML */}
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none z-50">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-[#12E6F2] opacity-40"></div>
        <div className="absolute top-0 right-0 h-full w-[1px] bg-[#12E6F2] opacity-40"></div>
      </div>

      {/* 2. Top Navigation header */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Main Central Stage - Animate page transitions with cinematic Fade, Scale, & Blur */}
      <main className="relative pt-16 pb-24 z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)", y: 15 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)", y: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            {activeTab === "home" && <HeroSection onNavigateTo={setActiveTab} />}
            {activeTab === "missions" && <MissionsSection />}
            {activeTab === "gallery" && <GallerySection />}
            {activeTab === "about" && <AboutSection />}
            {activeTab === "contact" && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Editorial Stats / Micro UI HUD Footer */}
      <footer className="relative border-t border-white/5 pt-8 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 backdrop-blur-md z-30 flex flex-col md:flex-row items-stretch justify-between gap-8 bg-[#070B16]/90 mt-12 font-mono text-[10px] tracking-widest">
        {/* Left Side: Real-time Stats block from requested Design HTML */}
        <div className="flex flex-wrap gap-8 sm:gap-12 text-left">
          <div>
            <p className="text-[9px] text-[#A3A9B7] uppercase tracking-widest mb-1.5 font-mono">Distance</p>
            <p className="text-lg sm:text-xl font-bold tracking-tighter text-white font-mono">4.21 LY</p>
          </div>
          <div>
            <p className="text-[9px] text-[#A3A9B7] uppercase tracking-widest mb-1.5 font-mono">Velocity</p>
            <p className="text-lg sm:text-xl font-bold tracking-tighter text-[#12E6F2] font-mono">0.864 c</p>
          </div>
          <div>
            <p className="text-[9px] text-[#A3A9B7] uppercase tracking-widest mb-1.5 font-mono">Atmosphere</p>
            <p className="text-lg sm:text-xl font-bold tracking-tighter text-[#9A5CFF] font-mono">O₂ 98.4%</p>
          </div>
        </div>

        {/* Center Side: Original commander logs metadata summary */}
        <div className="flex flex-col justify-center text-left md:text-center space-y-1.5 border-t md:border-t-0 md:border-x border-white/5 pt-6 md:pt-0 md:px-8 flex-1">
          <div className="flex items-center md:justify-center gap-2 text-[#A3A9B7]">
            <Terminal className="w-3.5 h-3.5 text-[#12E6F2]" />
            <span className="text-[9px] uppercase tracking-widest">COSMOS PORTAL SEC_99_A</span>
          </div>
          <div className="text-[9px] text-[#12E6F2] uppercase">{timestamp}</div>
        </div>
        
        {/* Right Side: Editorial confirmation state */}
        <div className="text-left md:text-right flex flex-col justify-between items-start md:items-end gap-3.5">
          <div className="inline-block px-3 py-1 bg-[#12E6F2]/10 border border-[#12E6F2]/30 text-[#12E6F2] text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">
            Live Transmission // Est_Established
          </div>
          <div className="flex flex-col md:items-end gap-2.5">
            <p className="text-[9px] text-[#A3A9B7] uppercase tracking-widest">© 2096 COSMOS_PORTAL Int.</p>
            <CoreAttribution layout="footer" />
          </div>
        </div>
      </footer>
      <CoreAttribution layout="floating" />
    </div>
  );
}
