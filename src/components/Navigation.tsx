import React from "react";
import { motion } from "motion/react";
import { ActiveTab } from "../types";
import { Orbit, Compass, Image, FileText, Send, Wifi } from "lucide-react";

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const menuItems: { id: ActiveTab; label: string; icon: React.ComponentType<any> }[] = [
    { id: "home", label: "Home", icon: Orbit },
    { id: "missions", label: "Missions", icon: Compass },
    { id: "gallery", label: "Archive", icon: Image },
    { id: "about", label: "Dispatch", icon: FileText },
    { id: "contact", label: "Signals", icon: Send },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6 bg-gradient-to-b from-[#070B16]/80 to-transparent backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Elite Sci-Fi Brand Logo */}
        <div 
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#12E6F2] to-[#9A5CFF] p-[1px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#0F1523] rounded-lg group-hover:opacity-0 transition-opacity duration-300" />
            <div className="z-10 text-white font-mono text-sm leading-none font-bold group-hover:scale-110 transition-transform duration-300">
              C
            </div>
            {/* Pulsing neon frame */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-indigo-500 blur-sm opacity-30 animate-pulse" />
          </div>
          <div>
            <div className="text-xs uppercase font-mono tracking-[0.25em] text-white">
              COSMOS
            </div>
            <div className="text-[9px] uppercase font-mono text-[#12E6F2] tracking-[0.15em] flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-[#12E6F2] animate-ping" />
              SEC_099_PORTAL
            </div>
          </div>
        </div>

        {/* Floating Minimal Grid Center Menu */}
        <nav className="hidden md:flex items-center gap-2 p-1 bg-gradient-to-r from-white/3 to-white/0 border border-white/5 rounded-full backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase font-mono tracking-widest transition-all duration-300 ${
                  isActive ? "text-white" : "text-[#A3A9B7] hover:text-white"
                }`}
                id={`nav-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#12E6F2]/10 to-[#9A5CFF]/10 border border-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#12E6F2]" : "text-[#A3A9B7]"}`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right HUD Element */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end text-right font-mono">
            <div className="text-[10px] text-white tracking-widest flex items-center gap-1.5 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              PORTAL STATUSL_LIVE
            </div>
            <div className="text-[8px] text-[#A3A9B7] tracking-widest">
              FREQ: 1420.405 MHz
            </div>
          </div>

          <button
            onClick={() => setActiveTab("contact")}
            className="group relative px-4 py-2 bg-gradient-to-tr from-[#9A5CFF]/20 to-[#12E6F2]/20 hover:from-[#9A5CFF]/30 hover:to-[#12E6F2]/30 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 overflow-hidden"
            id="nav-action-btn"
          >
            {/* Hover light reflection gloss */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000 ease-out" />
            
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white">
              <Wifi className="w-3.5 h-3.5 text-[#12E6F2] animate-pulse" />
              <span>SEND BEACON</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sticky Navigation (bottom bar) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="flex justify-around items-center p-2 bg-[#0F1523]/90 border border-white/10 rounded-2xl backdrop-blur-lg shadow-2xl">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all duration-300 ${
                  isActive ? "text-white" : "text-[#A3A9B7]"
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute inset-0 bg-[#12E6F2]/5 border border-white/5 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 ${isActive ? "text-[#12E6F2]" : "text-[#A3A9B7]"}`} />
                <span className="text-[8px] font-mono font-bold tracking-wider uppercase">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
