import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseDuration: number;
}

export default function GlowBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate starfield once
    const starList: Star[] = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.2,
      pulseDuration: 3 + Math.random() * 4,
    }));
    setStars(starList);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#070B16] z-0 pointer-events-none select-none">
      {/* Absolute Dark Star-mesh Space Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Dynamic Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.size > 1.2 ? "0 0 4px rgba(255, 255, 255, 0.8)" : "none",
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            }}
            transition={{
              duration: star.pulseDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Aurora Purple Nebula ( diffused glow ) */}
      <motion.div
        className="absolute -top-[30%] -right-[15%] w-[80vw] h-[80vw] rounded-full bg-[#9A5CFF]/15 mix-blend-screen blur-[140px]"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Electric Cyan Nebula ( diffused glow ) */}
      <motion.div
        className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#12E6F2]/10 mix-blend-screen blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central Volumetric Core Glow */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-[#00F0FF]/3 mix-blend-screen blur-[160px]" />
    </div>
  );
}
