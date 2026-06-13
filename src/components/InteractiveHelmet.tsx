import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function InteractiveHelmet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coords relative to helmet center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for cinematic, fluid movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), springConfig);
  const shiftX = useSpring(useTransform(mouseX, [-200, 200], [-12, 12]), springConfig);
  const shiftY = useSpring(useTransform(mouseY, [-200, 200], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize coordinates based on container size
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square flex items-center justify-center cursor-pointer select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Orbital Aura Halo behind the helmet */}
      <motion.div
        className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#12E6F2]/20 filter blur-[1px]"
        animate={{
          rotate: 360,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.6, ease: "easeOut" },
        }}
      />

      <motion.div
        className="absolute w-[68%] h-[68%] rounded-full bg-gradient-to-tr from-[#9A5CFF]/15 to-[#12E6F2]/10 blur-[30px]"
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.9 : 0.7,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Main 3D Astronaut Helmet Frame */}
      <motion.div
        className="relative w-[92%] h-[92%] flex items-center justify-center filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
        style={{
          rotateX,
          rotateY,
          x: shiftX,
          y: shiftY,
        }}
        animate={{
          y: [0, -6, 0], // Drifting animation
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          viewBox="0 0 400 420"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark glossy shell gradient */}
            <linearGradient id="helmetShell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E2640" />
              <stop offset="40%" stopColor="#0E1220" />
              <stop offset="100%" stopColor="#05070D" />
            </linearGradient>

            {/* Astronaut white material padding with rim lighting */}
            <linearGradient id="astronautBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#CCD2E3" />
              <stop offset="100%" stopColor="#5A647A" />
            </linearGradient>

            {/* Glow neon gradients */}
            <linearGradient id="cyanNeon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#12E6F2" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            <linearGradient id="purpleNeon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9A5CFF" />
              <stop offset="100%" stopColor="#6F5BFF" />
            </linearGradient>

            {/* Glow Filters */}
            <filter id="neonGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND SHADOW / AMBIENCE */}
          <ellipse cx="200" cy="380" rx="140" ry="25" fill="black" opacity="0.65" filter="blur(15px)" />

          {/* BACKPACK COLLAR BACKROUND RING */}
          <path d="M 110,310 C 110,270 290,270 290,310 L 310,360 C 310,380 90,380 90,360 Z" fill="#0A0F1D" stroke="#1D2E49" strokeWidth="2" />

          {/* SHOULDER EXPEDITION SUIT HARNESS (Upper Torso) */}
          <g>
            {/* Main Suit Form */}
            <path d="M 60,390 C 80,340 120,330 200,330 C 280,330 320,340 340,390 L 330,420 H 70 Z" fill="url(#astronautBody)" />
            {/* Suit Details and seams */}
            <path d="M 120,330 L 110,420" stroke="#4F5E7B" strokeWidth="3" opacity="0.4" />
            <path d="M 280,330 L 290,420" stroke="#4F5E7B" strokeWidth="3" opacity="0.4" />
            {/* Collar lock ring */}
            <path d="M 130,332 C 145,340 255,340 270,332" fill="none" stroke="#2C374E" strokeWidth="8" strokeLinecap="round" />
            <path d="M 130,332 C 145,340 255,340 270,332" fill="none" stroke="#12E6F2" strokeWidth="2" filter="url(#subtleGlow)" strokeLinecap="round" />
          </g>

          {/* PRIMARY HELMET OUTER SHELL */}
          <path d="M 90,200 C 90,80 310,80 310,200 C 310,270 295,330 200,330 C 105,330 90,270 90,200 Z" fill="url(#helmetShell)" stroke="#222B43" strokeWidth="3" />

          {/* VOLUMETRIC RIM LIGHT EFFECTS (Left Electric Cyan, Right Aurora Purple) */}
          <path d="M 92,200 C 92,95 200,85 200,82" fill="none" stroke="#12E6F2" strokeWidth="4" opacity="0.75" filter="url(#subtleGlow)" />
          <path d="M 308,200 C 308,95 200,85 200,82" fill="none" stroke="#9A5CFF" strokeWidth="4" opacity="0.6" filter="url(#subtleGlow)" />

          {/* HELMET AUDIO ANTENNA CAPSULE ASSEMBLY */}
          {/* Left Capsule */}
          <rect x="75" y="175" width="20" height="40" rx="6" fill="#1C233A" stroke="#2F3B5D" strokeWidth="1.5" transform="rotate(-12 85 195)" />
          <rect x="78" y="185" width="5" height="20" rx="2" fill="#12E6F2" filter="url(#subtleGlow)" transform="rotate(-12 85 195)" />
          
          {/* Right Capsule */}
          <rect x="305" y="175" width="20" height="40" rx="6" fill="#1C233A" stroke="#2F3B5D" strokeWidth="1.5" transform="rotate(12 315 195)" />
          <circle cx="315" cy="195" r="4" fill="#9A5CFF" filter="url(#subtleGlow)" />

          {/* HELMET TOP VENTILATOR SHIELD */}
          <path d="M 160,82 C 180,75 220,75 240,82 C 248,84 250,90 238,92 C 220,95 180,95 162,92 C 150,90 152,84 160,82 Z" fill="#2E3A5A" stroke="#485A8A" strokeWidth="1" />

          {/* THE SEAM CHANNELS (Futuristic grooves) */}
          <path d="M 100,150 C 120,120 280,120 300,150" fill="none" stroke="#101525" strokeWidth="4" />
          <path d="M 100,150 C 120,120 280,120 300,150" fill="none" stroke="#9A5CFF" strokeWidth="1" opacity="0.5" filter="url(#subtleGlow)" />

          {/* FRONT VISOR CRYSTALLINE FACEPLATE FRAME */}
          <path d="M 115,145 C 150,135 250,135 285,145 C 302,175 302,235 285,275 C 255,295 145,295 115,275 C 98,235 98,175 115,145 Z" fill="#060914" stroke="#283556" strokeWidth="5" />

          {/* VISOR SHIELD INSIDE GLOW INNER GRADIENT */}
          <path d="M 115,145 C 150,135 250,135 285,145 C 302,175 302,235 285,275 C 255,295 145,295 115,275 C 98,235 98,175 115,145 Z" fill="#04060C" />

          {/* INTERACTIVE DYNAMIC REFLECTION GROUP */}
          <g>
            {/* Grid Line reflections */}
            <path d="M 120,200 Q 200,180 280,200" fill="none" stroke="#12E6F2" strokeWidth="0.5" opacity="0.32" />
            <path d="M 125,230 Q 200,210 275,230" fill="none" stroke="#9A5CFF" strokeWidth="0.5" opacity="0.25" />
            <path d="M 135,170 Q 200,160 265,170" fill="none" stroke="#12E6F2" strokeWidth="0.5" opacity="0.18" />

            {/* Side longitude curves */}
            <path d="M 160,150 Q 185,220 160,285" fill="none" stroke="rgba(18,230,242,0.15)" strokeWidth="0.5" />
            <path d="M 240,150 Q 215,220 240,285" fill="none" stroke="rgba(154,92,255,0.15)" strokeWidth="0.5" strokeDasharray="3,3" />

            {/* Glowing Space Constellation Coordinates Inside Faceplate */}
            <g opacity={isHovered ? "0.85" : "0.5"} style={{ transition: "opacity 0.6s ease" }}>
              {/* Linked Dots forming Orion or Cassiopeia constellation */}
              <line x1="150" y1="180" x2="190" y2="170" stroke="#12E6F2" strokeWidth="1" filter="url(#subtleGlow)" />
              <line x1="190" y1="170" x2="210" y2="200" stroke="#12E6F2" strokeWidth="1" />
              <line x1="210" y1="200" x2="250" y2="190" stroke="#9A5CFF" strokeWidth="1" filter="url(#subtleGlow)" />
              <line x1="210" y1="200" x2="180" y2="240" stroke="#9A5CFF" strokeWidth="0.75" />

              <circle cx="150" cy="180" r="3" fill="#12E6F2" filter="url(#subtleGlow)" />
              <circle cx="190" cy="170" r="2.5" fill="#FFFFFF" />
              <circle cx="210" cy="200" r="4.5" fill="#12E6F2" filter="url(#neonGlowEffect)" />
              <circle cx="250" cy="190" r="3.5" fill="#9A5CFF" filter="url(#subtleGlow)" />
              <circle cx="180" cy="240" r="2" fill="#FFFFFF" />
            </g>

            {/* Sweeping Neon Horizon Line (animated loop simulation) */}
            <path d="M 115,215 Q 200,195 285,215" fill="none" stroke="#12E6F2" strokeWidth="1.5" opacity="0.4" filter="url(#subtleGlow)" />

            {/* Holographic HUD UI Accent inside Visor */}
            <path d="M 130,265 L 140,270 L 160,270" fill="none" stroke="#12E6F2" strokeWidth="1.5" opacity="0.6" />
            <text x="168" y="273" fill="#12E6F2" fontSize="8" fontFamily="monospace" letterSpacing="1" opacity="0.7">COORD AUTH SEC-9</text>
            
            {/* Dynamic UI Pulse dot */}
            <circle cx="130" cy="265" r="2" fill="#12E6F2">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Visor Glare/Reflex Reflection Overlay */}
            <path
              d="M 120,150 C 160,140 240,140 280,150 C 295,160 210,165 140,165 C 120,165 115,155 120,150 Z"
              fill="white"
              opacity="0.12"
            />
          </g>

          {/* LOWER HELMET COMMUNICATIONS CHIP (Subtle geometric accent) */}
          <polygon points="190,320 210,320 215,328 185,328" fill="#161D32" stroke="#253255" strokeWidth="1" />
          <circle cx="200" cy="324" r="1.5" fill="#12E6F2" />
        </svg>
      </motion.div>

      {/* Outer Floating Decors: Neon framing tick marks */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#12E6F2] opacity-40 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#9A5CFF] opacity-30 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#9A5CFF] opacity-30 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#12E6F2] opacity-40 rounded-br-lg" />

      {/* Astronaut Coordinates Tag */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-[#0F1523]/80 border border-white/5 rounded-full backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#12E6F2] animate-ping" />
        <span className="text-[10px] font-mono tracking-widest text-[#A3A9B7] uppercase">UNIT: EXP-009 // SYSTEM ONLINE</span>
      </div>
    </div>
  );
}
