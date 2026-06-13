import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Workflow, Compass, Cpu, Layers, Disc } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Compass,
      title: "Relativistic Exploration",
      description: "Navigating deep space coordinates securely utilizing premium Casimir Alcubierre warp systems and quantum beacons."
    },
    {
      icon: Cpu,
      title: "Automated Telemetry",
      description: "Our Sector-9 dishes process infinite incoming wave frequencies with real-time AI signal decrypters."
    },
    {
      icon: Layers,
      title: "Atmorphic Integrity",
      description: "Preserving human explorer biological safety through active crystalline filter quarantines and shields."
    }
  ];

  const teamList = [
    {
      name: "Dr. Alistair Vance",
      role: "Chief of Relativistic Propulsion",
      avatar: "/images/doc_vance.svg",
      badge: "FTL Eng"
    },
    {
      name: "Commander Lyra Thorne",
      role: "Lead Telemetry & Communications",
      avatar: "/images/cmd_thorne.svg",
      badge: "Radio Lead"
    },
    {
      name: "Vaelen Sol",
      role: "Quantum Coordinate Cartographer",
      avatar: "/images/eng_sol.svg",
      badge: "Cartography"
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen relative z-10 text-white">
      
      {/* SECTION HEADER */}
      <div className="border-b border-white/5 pb-11 mb-16">
        <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#9A5CFF] uppercase mb-3 font-bold">
          SEC_05 // INTERSTELLAR DISPATCH & CREW INTEL
        </div>
        <h2 className="text-4xl sm:text-5xl uppercase font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
          Dispatch & Philosophy
        </h2>
        <p className="text-sm sm:text-base text-[#A3A9B7] leading-relaxed max-w-3xl border-l border-white/10 pl-6 text-left">
          Cosmos Exploration Portal represents our active research facility and command hub. 
          Discover the core principles of Sector-9, our automated innovations, and the elite minds 
          engineering long-range telemetry relays.
        </p>
      </div>

      {/* CORE PHILOSOPHY BENTO CARDS */}
      <div className="grid grid-[#0F1523] grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {values.map((v, idx) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={idx}
              className="bg-[#0F1523]/70 border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-cyan-400/25 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-[#12E6F2]/10 border border-[#12E6F2]/20 rounded-xl flex items-center justify-center text-[#12E6F2] mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight uppercase text-white mb-3">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A9B7] leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* VISION & INNOVATION SHOWCASE PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-t border-dashed border-white/5 pt-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono tracking-widest text-[#12E6F2] uppercase">
            STATION INTEGRATED INFRASTRUCTURE
          </div>
          <h3 className="text-3xl sm:text-4xl uppercase font-bold tracking-tight text-white">
            Core Quantum Signaling System
          </h3>
          <p className="text-xs sm:text-sm text-[#A3A9B7] leading-relaxed">
            Unlike standard electromagnetic transmitters, the Sector-9 portal utilizes 
            superconducting helium cooling loops coupled directly with our server-side 
            Gemini decipher arrays. This allows telemetry packets traveling at warp velocities 
            to compile instantly back into human-readable logs.
          </p>
          <div className="space-y-3 font-mono text-[11px] text-[#A3A9B7]">
            <div className="flex items-center gap-2.5">
              <Disc className="w-4 h-4 text-[#12E6F2] animate-spin" style={{ animationDuration: "12s" }} />
              <span>SUPERHEATED CRYOGENIC HELIUM INDUCTION // ACTIVE</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Disc className="w-4 h-4 text-[#9A5CFF] animate-spin" style={{ animationDuration: "8s" }} />
              <span>RELATIVISTIC VECTOR NAVIGATION MATRIX // LOCK APPROVED</span>
            </div>
          </div>
        </div>

        {/* Compact geometric visual representation */}
        <div className="lg:col-span-5 bg-gradient-to-tr from-[#9A5CFF]/5 to-[#12E6F2]/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-center min-h-[220px]">
          <div className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-[#A3A9B7] uppercase">SYS_GRID</div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
              <span className="font-mono text-[#A3A9B7]">FTL STAGES:</span>
              <span className="font-mono text-[#12E6F2] font-semibold">9.82 WARP_MAX</span>
            </div>
            <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
              <span className="font-mono text-[#A3A9B7]">TRANSCEIVER RATE:</span>
              <span className="font-mono text-white font-semibold">1420.405 MHz</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-[#A3A9B7]">DATA DECRYPTERS:</span>
              <span className="font-mono text-[#9A5CFF] font-semibold">GEMINI 3.5 ACTIVE</span>
            </div>
          </div>

          {/* Dynamic line chart/grid placeholder */}
          <div className="mt-6 flex gap-1 h-12 items-end justify-between px-2">
            {[20, 45, 30, 85, 60, 40, 95, 20, 55, 75, 45, 90, 30, 60].map((h, i) => (
              <div 
                key={i} 
                className={`w-1 rounded-t transition-all duration-1000 ${
                  i % 2 === 0 ? "bg-[#12E6F2]/40" : "bg-[#9A5CFF]/30"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* COMMANDERS & ENGINEERS TEAM GALLERY */}
      <div className="border-t border-white/5 pt-16">
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-[#12E6F2] uppercase mb-2">
            COSMOS AUTHORIZED PERSONNEL
          </div>
          <h3 className="text-3xl uppercase font-bold tracking-tight text-white">
            Meet the Expedition Commanders
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamList.map((tm, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0F1523]/50 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden p-4 group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar block with referrerPolicy */}
              <div className="w-full h-56 rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={tm.avatar}
                  alt={tm.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-black/60 border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-widest text-cyan-400 backdrop-blur-sm">
                  {tm.badge}
                </span>
              </div>

              <div className="px-1.5 pb-2.5">
                <h4 className="text-lg font-bold tracking-tight uppercase text-white mb-0.5">
                  {tm.name}
                </h4>
                <div className="text-xs font-mono text-[#A3A9B7]">
                  {tm.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
