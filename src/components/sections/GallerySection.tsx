import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "../../types";
import { Eye, MapPin, Orbit as OrbitIcon, Navigation, Minimize2, ZoomIn } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "planet" | "station" | "phenomenon" | "vessel">("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Curated list of high-quality, high-contrast Unsplash space photographs
  const galleryItems: GalleryItem[] = [
    {
      id: "g1",
      title: "Iris Orbital Relay Station",
      category: "station",
      imageUrl: "/images/station.svg",
      description: "Humanity's main orbital transceiver located in the outer Vela Pulsar ring, harvesting solar and pulsative frequency waves.",
      system: "Vela System // S9-A"
    },
    {
      id: "g2",
      title: "Crystalline Bio-Nebula",
      category: "phenomenon",
      imageUrl: "/images/nebula.svg",
      description: "Atmospheric cloud compound displaying autonomous bioluminescent properties and crystalline organic composition.",
      system: "Kepler Frontier // S4-F"
    },
    {
      id: "g3",
      title: "Vela Event Accretion Disk",
      category: "planet",
      imageUrl: "/images/accretion.svg",
      description: "Superheated matter vortex orbiting around Vela pulsar core, reflecting extreme electric cyan and solar gold spectrum outputs.",
      system: "Vela Rim // S12-C"
    },
    {
      id: "g4",
      title: "Alcubierre Warp Cruiser",
      category: "vessel",
      imageUrl: "/images/vessel_warp.svg",
      description: "Next-generation cosmic explorer rig with integrated Casimir warp engine, designed for long-range void exploration.",
      system: "Titan Dockyard // S1-O"
    },
    {
      id: "g5",
      title: "Core Quantum Node Carrier",
      category: "vessel",
      imageUrl: "/images/vessel_carrier.svg",
      description: "Autonomous data network vessel deploying signal booster channels across unexplored sector margins.",
      system: "Sagittarius Outer Rim"
    },
    {
      id: "g6",
      title: "Proxima Centauri Gas Giant",
      category: "planet",
      imageUrl: "/images/gas_giant.svg",
      description: "Vibrant high-contrast hydrogen gas sphere with active electromagnetic aura flares extending into outer orbital boundaries.",
      system: "Centauri Boundary"
    }
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen relative z-10 text-white">
      
      {/* SECTION HEADER */}
      <div className="border-b border-white/5 pb-11 mb-16">
        <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#12E6F2] uppercase mb-3 font-bold">
          SEC_04 // COSMOS TELEMETRY PHOTO VISOR ARCHIVE
        </div>
        <h2 className="text-4xl sm:text-5xl uppercase font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
          Visual Archive
        </h2>
        <p className="text-sm sm:text-base text-[#A3A9B7] leading-relaxed max-w-3xl border-l border-white/10 pl-6 text-left">
          Observe detailed high-resolution signal photographs cataloged by automated deep 
          space probes. These orbital captures document the systems, vessels, and phenomena 
          encountered across Sector-9 space operations.
        </p>
      </div>

      {/* FILTER BUTTONS ROW */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(["all", "planet", "station", "phenomenon", "vessel"] as const).map((cat) => (
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
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === cat).length}
            )
          </button>
        ))}
      </div>

      {/* ASYMMETRICAL MOOD BENTO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#0F1523]/70 border border-white/5 rounded-2xl overflow-hidden group hover:border-[#12E6F2]/30 transition-all duration-500 relative flex flex-col justify-between ${
                idx === 1 || idx === 4 ? "lg:col-span-2" : "col-span-1"
              }`}
            >
              {/* Image box frame */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass overlays matching styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/20 to-transparent" />
                
                {/* Floating coordinate Tag */}
                <span className="absolute top-4 left-4 bg-black/60 border border-white/15 px-2.5 py-1 rounded text-[8.5px] font-mono uppercase tracking-widest text-cyan-400 backdrop-blur-md">
                  {item.system}
                </span>

                {/* Center Hover Magnifying Glass Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-500 cursor-pointer"
                       onClick={() => setActiveItem(item)}>
                    <ZoomIn className="w-5 h-5 text-[#12E6F2]" />
                  </div>
                </div>
              </div>

              {/* Text specifications box */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-[#070B16]">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#9A5CFF]">
                    Category // {item.category}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A3A9B7] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3.5 mt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-[#A3A9B7]">COSMIC LOG_ID: 104-{item.id}</span>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#12E6F2] hover:text-white transition-colors"
                  >
                    <span>Inspect</span>
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* FULL-SCREEN ZOOM VISOR DETAILS MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 sm:p-12 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0F1523] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close Button top corner */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black border border-white/10 flex items-center justify-center text-white hover:text-rose-400 transition-colors cursor-pointer"
              >
                <Minimize2 className="w-4 h-4" />
              </button>

              {/* Large Image Frame side */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[320px]">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F1523]/30 to-[#0F1523]" />
                
                {/* Core Coordinate overlay HUD */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 border border-white/5 p-3 rounded-lg backdrop-blur-sm text-[9px] font-mono">
                  <div className="text-[#12E6F2] tracking-widest font-bold">ORBITAL BEACON ALIGNED</div>
                  <div className="text-white/40">SYS STAGE: VELA-9 // TELEMETRY OK</div>
                </div>
              </div>

              {/* Specifications detailed panel */}
              <div className="p-6 sm:p-8 w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  {/* Category badging */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#9A5CFF]/15 text-[#9A5CFF] text-[9px] font-mono uppercase tracking-widest font-bold border border-[#9A5CFF]/20">
                      SYSTEM {activeItem.category.toUpperCase()}
                    </span>
                    <span className="text-white/20">//</span>
                    <span className="text-[10px] font-mono text-[#A3A9B7]">COORD RECEPTOR APPROVED</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase mb-4">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3A9B7] leading-relaxed mb-6">
                    {activeItem.description} Modern exploratory rigs are designated to monitor 
                    these coordinates continuously. Intergalactic telemetry streams highlight highly 
                    active solar radiation bands forming around this coordinate node.
                  </p>

                  {/* Simulated telemetry HUD stats */}
                  <div className="grid grid-cols-2 gap-4 bg-[#070B16] border border-white/5 p-4 rounded-xl font-mono text-[10px] mb-6">
                    <div>
                      <span className="text-[#A3A9B7] block mb-0.5">SECTOR SYSTEM_</span>
                      <span className="text-white font-bold">{activeItem.system}</span>
                    </div>
                    <div>
                      <span className="text-[#A3A9B7] block mb-0.5">COSMOS ORBIT_</span>
                      <span className="text-[#12E6F2] font-bold">1420.40 Hz // AUTO</span>
                    </div>
                    <div>
                      <span className="text-[#A3A9B7] block mb-0.5">THERMAL VELOCITY_</span>
                      <span className="text-white font-bold">428.40 Km/Sec</span>
                    </div>
                    <div>
                      <span className="text-[#A3A9B7] block mb-0.5">RADIATION SPECTR_</span>
                      <span className="text-rose-400 font-bold">ALBEDO HIGH (1.8)</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-[9px] font-mono text-[#A3A9B7]">EXPEDITION PORTAL CONTEXT APPROVED</span>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="px-4 py-2 bg-gradient-to-r from-[#12E6F2]/10 to-[#9A5CFF]/10 text-white rounded-lg border border-white/5 hover:border-white/25 text-xs font-mono uppercase tracking-widest transition-all"
                  >
                    Close Visor
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
