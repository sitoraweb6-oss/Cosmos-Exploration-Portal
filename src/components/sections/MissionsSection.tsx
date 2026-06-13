import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mission, EpochMilestone } from "../../types";
import { Compass, Calendar, Users, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, Hourglass } from "lucide-react";

export default function MissionsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "active" | "completed" | "scheduled">("all");
  const [expandedMission, setExpandedMission] = useState<string | null>(null);

  // High-fidelity sci-fi Deep Space Missions data
  const missionsList: Mission[] = [
    {
      id: "m1",
      code: "EXP-X96",
      title: "Artemis Vanguard",
      destination: "Sagittarius A* Event Horizon Ring",
      status: "active",
      date: "Aug 2096",
      description: "Humanity's frontier voyage deploying quantum gravitational beacons around the supermassive black hole. Monitoring thermal accretion loops and gravitational warping.",
      crewSize: 6,
      hazards: ["Intense Spacetime Shear", "Gamma Bursts", "Relativistic Time Dilation Scale"],
      metrics: [
        { label: "DISTANCE FROM EARH", value: "26,000 Light-Years" },
        { label: "BEACON FREQUENCY", value: "1420.405 MHz" },
        { label: "WARP CURVATURE FACTOR", value: "9.82" }
      ]
    },
    {
      id: "m2",
      code: "SLR-E41",
      title: "Kepler Crystalline Harvesters",
      destination: "Kepler-186f Biosphere Cluster",
      status: "scheduled",
      date: "Nov 2097",
      description: "Mission to harvest atmospheric silicon compounds and organic crystalline code blocks. Setting automated bio-receptors for research.",
      crewSize: 9,
      hazards: ["Silicon Crystalline Ingestion", "Atmospheric Bio-Acidity", "Extreme Temp Drops"],
      metrics: [
        { label: "TARGET RADIUS", value: "1.17 Earth Radii" },
        { label: "ESTIMATED TRAVEL TIME", value: "5.2 Warp Cycles" },
        { label: "SURFACE GRAVITY", value: "1.08g" }
      ]
    },
    {
      id: "m3",
      code: "PUL-V11",
      title: "Iris Pulsar Observatory",
      destination: "Vela Segment Nebula Station",
      status: "completed",
      date: "Mar 2095",
      description: "Established the Iris Station deep in the Vela pulsar perimeter. Secured real-time synchronized binary signaling system mapping surrounding dark nebulae.",
      crewSize: 14,
      hazards: ["Extreme Magnetar Pulses", "High Radiation Flux", "Asteroid Belts"],
      metrics: [
        { label: "SYSTEM ROTATION RATE", value: "11.2 Rotations/Sec" },
        { label: "ESTABLISHED BEACON", value: "COSMOS-IRIS-1" },
        { label: "TOTAL TELEMETRY LOGGED", value: "14.2 Petabytes" }
      ]
    }
  ];

  // Editorial timeline milestones (Timeline of Discovery)
  const epochs: EpochMilestone[] = [
    {
      era: "Epoch I",
      year: "2082 AD",
      title: "The Faster-Than-Light Paradigm Shift",
      description: "Development of the Casimir Alcubierre drive engines, allowing micro-warp jumps breaching interstellar space boundaries.",
      coordinates: "Lunar Core Testing Range 14",
      authority: "Unified Cosmos Council"
    },
    {
      era: "Epoch II",
      year: "2091 AD",
      title: "Intercepting the Wow! Signal Resonator",
      description: "Deep space receivers decode the first intelligent radio response from Sagittarius A*, proving deep bio-networks exist.",
      coordinates: "Arecibo Array Mk-4, Farside Moon",
      authority: "Cosmic Signal Research Division"
    },
    {
      era: "Epoch III",
      year: "2096 AD",
      title: "Establishment of Sector-9 Frontiers",
      description: "Humanity reaches Kepler orbits and launches automated relay beacons which are controlled by our current telemetry systems.",
      coordinates: "Kepler Sector 186-Delta Boundary",
      authority: "Interplanetary Explorations Org"
    }
  ];

  const filteredMissions = selectedCategory === "all"
    ? missionsList
    : missionsList.filter(m => m.status === selectedCategory);

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen relative z-10 text-white">
      
      {/* SECTION HEADER: Mission Statement & Philosophy */}
      <div className="border-b border-white/5 pb-12 mb-16">
        <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#12E6F2] uppercase mb-3 font-bold">
          SEC_02 // STRATEGIC EXPLORATIONS & LOG COGNIZANCE
        </div>
        <h2 className="text-4xl sm:text-5xl uppercase font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
          Mission Statement & Directives
        </h2>
        <p className="text-sm sm:text-base text-[#A3A9B7] leading-relaxed max-w-3xl border-l border-white/10 pl-6 text-left">
          We venture into deep celestial coordinates not to conquer, but to intercept. 
          Through structured quantum arrays, orbital monitoring stations, and premium crew-expeditions, 
          humanity deciphers cosmic resonance. Below are our active, completed, and scheduled deep 
          space missions.
        </p>
      </div>

      {/* FILTER BUTTONS ROW */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {(["all", "active", "completed", "scheduled"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 border rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#12E6F2]/10 border-[#12E6F2] text-white"
                : "bg-white/[0.02] border-white/5 text-[#A3A9B7] hover:bg-white/[0.05]"
            }`}
          >
            {cat} (
            {cat === "all"
              ? missionsList.length
              : missionsList.filter((m) => m.status === cat).length}
            )
          </button>
        ))}
      </div>

      {/* COMPACT INTERACTIVE MISSION CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <AnimatePresence mode="popLayout">
          {filteredMissions.map((mission) => (
            <motion.div
              key={mission.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0F1523]/80 border border-white/5 hover:border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group flex flex-col justify-between"
              id={`mission-card-${mission.id}`}
            >
              {/* Outer light glow channel */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#12E6F2]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div>
                {/* Header info bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#A3A9B7]">
                    {mission.code}
                  </span>
                  
                  {/* Status Indicator Badges */}
                  <div className="flex items-center gap-1.5 font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      mission.status === "active"
                        ? "bg-[#12E6F2] animate-pulse"
                        : mission.status === "completed"
                        ? "bg-emerald-400"
                        : "bg-amber-400"
                    }`} />
                    <span className={`text-[9px] uppercase tracking-wider font-semibold ${
                      mission.status === "active"
                        ? "text-[#12E6F2]"
                        : mission.status === "completed"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}>
                      {mission.status}
                    </span>
                  </div>
                </div>

                {/* Destination Tag */}
                <div className="text-[9px] font-mono uppercase text-[#A3A9B7] tracking-widest mb-1">
                  DESTINATION
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                  {mission.title}
                </h3>
                <div className="text-xs text-[#12E6F2] font-mono mb-4 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{mission.destination}</span>
                </div>

                <p className="text-xs leading-relaxed text-[#A3A9B7] line-clamp-3 mb-6">
                  {mission.description}
                </p>
              </div>

              {/* Collapsible expansion card metrics */}
              <div className="border-t border-white/5 pt-4">
                <button
                  onClick={() => setExpandedMission(expandedMission === mission.id ? null : mission.id)}
                  className="w-full py-1.5 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] rounded-lg text-[10px] font-mono uppercase tracking-[0.2em] text-white flex items-center justify-center gap-2 transition-all"
                >
                  {expandedMission === mission.id ? "Minimize Directive" : "Analyze Metrics"}
                </button>

                <AnimatePresence>
                  {expandedMission === mission.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-4 pt-3.5 border-t border-dashed border-white/5 space-y-4 font-mono text-[10px]"
                    >
                      {/* Crew size and date */}
                      <div className="grid grid-cols-2 gap-2 text-[#A3A9B7]">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#9A5CFF]" />
                          <span>CREW: <strong className="text-white">{mission.crewSize} Pilots</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#12E6F2]" />
                          <span>LAUNCH: <strong className="text-white">{mission.date}</strong></span>
                        </div>
                      </div>

                      {/* Technical Metrics list */}
                      <div className="space-y-2 bg-black/25 p-2.5 rounded-lg border border-white/5">
                        <div className="text-[9px] tracking-widest text-[#A3A9B7] uppercase mb-1">REAL-TIME DATA RECEPTORS</div>
                        {mission.metrics.map((m, idx) => (
                          <div key={idx} className="flex justify-between items-center text-[9.5px]">
                            <span className="text-[#A3A9B7]">{m.label}:</span>
                            <span className="text-white font-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hazard Assessment warnings */}
                      <div className="space-y-1.5">
                        <div className="text-[9px] tracking-widest text-[#A3A9B7] uppercase flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                          <span>SECTOR HAZARD MATRIX</span>
                        </div>
                        <ul className="list-none space-y-1 pl-1.5">
                          {mission.hazards.map((haz, idx) => (
                            <li key={idx} className="text-rose-400 font-mono text-[9px] flex items-center gap-1.5">
                              <span className="inline-block w-1 h-1 bg-rose-500 rounded-full" />
                              {haz}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* COSMIC TIMELINE OF DISCOVERY SECTION */}
      <div className="mt-12">
        <div className="border-t border-white/5 pt-16 mb-16">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#9A5CFF] uppercase mb-3">
            SEC_03 // COSMIC EPOCHS & DISCOVERY DISPATCHES
          </div>
          <h2 className="text-4xl sm:text-5xl uppercase font-bold tracking-tight mb-6">
            Timeline of Discovery
          </h2>
          <p className="text-sm sm:text-base text-[#A3A9B7] leading-relaxed max-w-3xl">
            A linear progression detailing the monumental paradigms that connected humanity's core 
            to infinite space-time sectors. These historical coordinates trace our continuous search parameters.
          </p>
        </div>

        {/* Elegant Timeline vertical visualizer */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-12 border-l border-white/5 space-y-12 pb-12">
          
          {epochs.map((ep, idx) => (
            <motion.div 
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Outer timeline target node representing precise epochs */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#070B16] border-2 border-[#12E6F2] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(18,230,242,0.5)]">
                <div className="w-1.5 h-1.5 bg-[#12E6F2] rounded-full" />
              </div>

              {/* Cosmic epoch item cards */}
              <div className="bg-[#0F1523]/50 border border-white/5 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div className="max-w-xl">
                  {/* Epoch Year Tag */}
                  <div className="flex items-center gap-3 font-mono text-xs mb-2">
                    <span className="text-[#9A5CFF] uppercase tracking-widest font-bold">{ep.era}</span>
                    <span className="text-white/20">//</span>
                    <span className="text-white font-bold tracking-widest">{ep.year}</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight text-white mb-2.5 group-hover:text-cyan-400 transition-colors uppercase">
                    {ep.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A3A9B7] leading-relaxed">
                    {ep.description}
                  </p>
                </div>

                {/* Editorial secondary detail tags */}
                <div className="shrink-0 md:text-right border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 space-y-1.5 font-mono text-[10px]">
                  <div>
                    <div className="text-[8px] text-[#A3A9B7] tracking-widest uppercase">STATION COORD</div>
                    <div className="text-white tracking-widest leading-none font-medium text-[9px]">{ep.coordinates}</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#A3A9B7] tracking-widest uppercase">COGNIZANT FORCE</div>
                    <div className="text-[#12E6F2] tracking-widest leading-none font-medium text-[9px]">{ep.authority}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
