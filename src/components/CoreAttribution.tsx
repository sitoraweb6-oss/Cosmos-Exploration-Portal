import React from "react";
import { Terminal } from "lucide-react";

/**
 * Core Attribution Component
 * Displays the required developer attribution for Sitora Web with subtle premium space-theme styling.
 * Supports active pointer-event protection, hover glow transitions, and responsive visibility.
 */
interface CoreAttributionProps {
  layout?: "footer" | "floating";
}

export default function CoreAttribution({ layout = "footer" }: CoreAttributionProps) {
  if (layout === "floating") {
    return (
      <div 
        id="sitora-floating-attribution"
        className="hidden md:flex fixed bottom-28 right-6 z-50 pointer-events-auto items-center gap-2 px-4 py-2 bg-[#0F1523]/80 border border-white/10 hover:border-[#12E6F2]/30 rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(18,230,242,0.15)] group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#12E6F2] animate-pulse shadow-[0_0_6px_#12E6F2]" />
        <span className="text-[9px] font-mono tracking-widest text-[#A3A9B7] select-none">
          Developed by{" "}
          <a
            href="https://sitora.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#12E6F2] font-semibold hover:text-[#9A5CFF] hover:underline underline-offset-4 transition-colors duration-300 pointer-events-auto"
          >
            Sitora Web
          </a>
        </span>
      </div>
    );
  }

  return (
    <div 
      id="sitora-footer-attribution"
      className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#A3A9B7] bg-white/[0.01] border border-white/5 hover:border-[#12E6F2]/10 px-3.5 py-1.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(18,230,242,0.05)] select-none pointer-events-auto inline-flex"
    >
      <Terminal className="w-3 h-3 text-[#9A5CFF] animate-pulse" />
      <span>
        Developed by{" "}
        <a
          href="https://sitora.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#12E6F2] hover:text-[#9A5CFF] font-semibold transition-colors duration-300 pointer-events-auto"
        >
          Sitora Web
        </a>
      </span>
    </div>
  );
}
