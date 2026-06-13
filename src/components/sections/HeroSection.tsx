import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveHelmet from "../InteractiveHelmet";
import { SignalLog } from "../../types";
import { Radio, ShieldAlert, Cpu, Terminal, Sparkles, Database, HelpCircle, Loader2 } from "lucide-react";

export default function HeroSection({ onNavigateTo }: { onNavigateTo: (tab: any) => void }) {
  // Signal Decryption State Management
  const [frequency, setFrequency] = useState("1420.405 MHz (Hydrogen Line)");
  const [cipher, setCipher] = useState("Direct Transceiver Intercept");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [decryptedLog, setDecryptedLog] = useState<SignalLog | null>(null);

  // Suggested frequencies lists
  const frequencies = [
    { value: "1420.405 MHz (Hydrogen Line)", label: "Deep-Space H1" },
    { value: "1665.401 MHz (Hydroxyl Aura)", label: "OH Hydroxyl" },
    { value: "327.010 MHz (Deuterium Core)", label: "Pulsar Deuterium" },
    { value: "WOW! Signal Intercept-77", label: "Sagittarius WOW!" }
  ];

  const ciphers = [
    { value: "Direct Transceiver Intercept", label: "Unencrypted Raw" },
    { value: "Vigenere Starfield Quantum v2", label: "Quantum Starfield" },
    { value: "X-88 Polyalphabetic Beacon Shift", label: "X-88 Beacon Shift" }
  ];

  const handleIntercept = async () => {
    setIsDecrypting(true);
    setDecryptedLog(null);
    setConsoleLogs([]);

    // Step-by-step matrix decode console log messages for highly immersive design
    const terminalSteps = [
      `Initializing telemetry dishes at Coordinates Lat 44° N / Long 122° W...`,
      `Locking antenna sweep path onto frequencies: ${frequency}...`,
      `Incoming carrier wave detected. Standard Deviance: ±0.034 Hz`,
      `Applying cryptographic decipher module: [${cipher}]...`,
      `Bypassing secondary cloud layers... Demodulating spectral density...`,
      `Compiling bits... Decoding celestial packet logs...`
    ];

    for (let i = 0; i < terminalSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 380));
      setConsoleLogs(prev => [...prev, `[SEC-9://SYS] ${terminalSteps[i]}`]);
    }

    try {
      const response = await fetch("/api/gemini/decrypted-transmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ frequency, encryptionKey: cipher })
      });

      const data = await response.json();
      if (data.success) {
        setDecryptedLog(data);
      } else {
        throw new Error("Telemetry channel collapsed.");
      }
    } catch (err: any) {
      setConsoleLogs(prev => [
        ...prev,
        `[CRITICAL://ERR] Decryption collapsed: ${err?.message || "Channel collapsed."}`
      ]);
    } finally {
      setIsDecrypting(false);
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Editorial floating stage container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Columns 1-5 Left: Oversized Astronaut and character placement */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center relative select-none">
          {/* Subtle rim glowing ring background representing orbit */}
          <div className="absolute w-[110%] h-[110%] border border-white/[0.02] rounded-full pointer-events-none" />
          
          {/* Vertical Accent Panel from requested Design HTML */}
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-4">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#12E6F2] to-transparent"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#12E6F2] font-mono" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Sector 0049-X
            </span>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#12E6F2] to-transparent"></div>
          </div>

          <motion.div 
            className="w-full max-w-[420px] md:max-w-[480px]"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <InteractiveHelmet />
          </motion.div>
        </div>

        {/* Columns 6-12 Right: Editorial Title, Copy and Interactive Decode Panel */}
        <div className="col-span-1 lg:col-span-7 flex flex-col text-left items-start">
          
          {/* Floating Neon Accent Label */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#12E6F2]/10 to-[#9A5CFF]/10 border border-white/10 rounded-full mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#12E6F2]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.4em] text-white uppercase font-bold">
              Project Aeterna
            </span>
          </motion.div>

          {/* Massive Display Editorial Headline */}
          <motion.div
            className="relative select-none whitespace-normal mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[72px] sm:text-[96px] md:text-[112px] font-black uppercase tracking-tighter leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              BEYOND<br/>THE VEIL
            </h1>
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-2 font-mono text-[9px] sm:text-[11px] tracking-widest text-[#12E6F2]">
              EST. 2096 // AD
            </div>
          </motion.div>

          {/* Concise Supporting Editorial Narrative with Left Border */}
          <motion.p
            className="text-[#A3A9B7] text-xs sm:text-sm leading-relaxed mb-8 max-w-[460px] border-l border-white/10 pl-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Witness the silent expanse where time dissipates. Our telemetry arrays process real-time 
            signals from the Event Horizon of the Sagittarius constellation, turning cosmic noise into 
            intelligible coordinates. Discover deep space anomalies, orbital mechanics, and interstellar coordinate beacons.
          </motion.p>

          {/* Editorial Join & Play Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <button 
              onClick={() => onNavigateTo("contact")}
              className="px-8 py-4 bg-[#12E6F2] hover:bg-[#12E6F2]/80 text-black text-xs uppercase font-black tracking-widest hover:brightness-110 transition-all cursor-pointer rounded"
            >
              Join Expedition
            </button>
            <a 
              href="#signal-terminal"
              className="flex items-center space-x-3 group cursor-pointer bg-transparent border-0"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#12E6F2]/40 transition-colors">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold border-b border-white/20 pb-1 group-hover:text-[#12E6F2] transition-colors">
                Listen Deep Signal
              </span>
            </a>
          </motion.div>

          {/* TELEMETRY INTERCEPT TERMINAL ELEMENT */}
          <motion.div
            className="w-full bg-[#0F1523]/80 border border-white/5 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            id="signal-terminal"
          >
            {/* Gloss Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#12E6F2]" />
                <span className="text-[10px] font-mono tracking-widest text-white uppercase">
                  DEEP SPACE COMMUNICATIONS RECEIVER
                </span>
              </div>
              <div className="bg-[#12E6F2]/10 px-2 py-0.5 rounded text-[8px] font-mono text-[#12E6F2] uppercase">
                A.I. Enabled
              </div>
            </div>

            {/* Select Channel options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[9px] font-mono text-[#A3A9B7] uppercase tracking-widest mb-1.5">
                  FREQUENCY TUNER CHANNEL
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.value}
                      onClick={() => setFrequency(freq.value)}
                      className={`px-3 py-1.5 rounded text-[9px] font-mono tracking-widest uppercase transition-all duration-300 border ${
                        frequency === freq.value
                          ? "bg-[#12E6F2]/10 border-[#12E6F2] text-white"
                          : "bg-white/[0.02] border-white/5 text-[#A3A9B7] hover:bg-white/[0.05]"
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-mono text-[#A3A9B7] uppercase tracking-widest mb-1.5">
                  DECRYPTION CIPHER SYSTEM
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ciphers.map((cip) => (
                    <button
                      key={cip.value}
                      onClick={() => setCipher(cip.value)}
                      className={`px-3 py-1.5 rounded text-[9px] font-mono tracking-widest uppercase transition-all duration-300 border ${
                        cipher === cip.value
                          ? "bg-[#9A5CFF]/10 border-[#9A5CFF] text-white"
                          : "bg-white/[0.02] border-white/5 text-[#A3A9B7] hover:bg-white/[0.05]"
                      }`}
                    >
                      {cip.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* TUNING EXTRAS SUMMARY */}
            <div className="text-[9px] font-mono text-[#A3A9B7] tracking-widest bg-white/[0.01] border border-white/[0.03] p-2.5 rounded mb-4">
              <span className="text-[#12E6F2]">TUNED RATE:</span> {frequency} //{" "}
              <span className="text-[#9A5CFF]">CIPHER-SET:</span> {cipher}
            </div>

            {/* INTERCEPT ACTION */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <button
                onClick={handleIntercept}
                disabled={isDecrypting}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#12E6F2] to-[#9A5CFF] hover:opacity-90 disabled:opacity-50 text-black text-xs font-mono font-bold tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              >
                {isDecrypting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>INTERCEPTING...</span>
                  </>
                ) : (
                  <>
                    <Radio className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>INTERCEPT TELEMETRY LOG</span>
                  </>
                )}
              </button>

              <div className="text-[9px] font-mono text-[#A3A9B7] tracking-wide flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#12E6F2]" />
                <span>Interactions run server-side via Gemini 3.5 Flash</span>
              </div>
            </div>

            {/* TERMINAL STATUS CASCADE OUTPUT */}
            <AnimatePresence>
              {(isDecrypting || consoleLogs.length > 0 || decryptedLog) && (
                <motion.div
                  className="mt-5 border-t border-white/5 pt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {/* Console line logs waterfall */}
                  <div className="bg-black/40 rounded-xl p-3.5 font-mono text-[9px] sm:text-[10px] text-emerald-400 space-y-1.5 overflow-y-auto max-h-[140px] border border-white/5">
                    {consoleLogs.map((log, index) => (
                      <div key={index} className="leading-tight break-words">
                        {log}
                      </div>
                    ))}
                    {isDecrypting && (
                      <div className="flex items-center gap-2 text-white animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>RECEIVING DECODED PACKETS FROM COGNITIVE NEBULA...</span>
                      </div>
                    )}
                  </div>

                  {/* DECRYPTED LOG RESULTS BOARD */}
                  {decryptedLog && (
                    <motion.div
                      className="mt-4 bg-[#070B16] border border-white/10 rounded-xl p-4 relative overflow-hidden shadow-inner"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Spectral Neon glowing background corresponding to signal status */}
                      <div
                        className={`absolute top-0 right-0 w-36 h-36 rounded-full filter blur-[50px] opacity-25 translate-x-12 -translate-y-12 ${
                          decryptedLog.status === "critical"
                            ? "bg-red-500"
                            : decryptedLog.status === "warning"
                            ? "bg-amber-400"
                            : decryptedLog.status === "anomalous"
                            ? "bg-[#9A5CFF]"
                            : "bg-[#12E6F2]"
                        }`}
                      />

                      {/* Decrypted Header tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2.5 mb-3 relative z-10 font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#A3A9B7]">ORIGIN STATIONS:</span>
                          <span className="text-[11px] text-white font-bold tracking-wider">
                            {decryptedLog.origin}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className={`px-2 py-0.5 rounded-[4px] text-[8px] font-bold uppercase tracking-wider ${
                            decryptedLog.status === "critical"
                              ? "bg-red-500/15 text-red-400 border border-red-500/20"
                              : decryptedLog.status === "warning"
                              ? "bg-amber-500/15 text-amber-400 border border-amber-500/20"
                              : decryptedLog.status === "anomalous"
                              ? "bg-[#9A5CFF]/15 text-[#9A5CFF] border border-[#9A5CFF]/20"
                              : "bg-[#12E6F2]/15 text-[#12E6F2] border border-[#12E6F2]/20"
                          }`}>
                            {decryptedLog.status.toUpperCase()}
                          </div>
                          <span className="text-[10px] text-white">{decryptedLog.year}</span>
                        </div>
                      </div>

                      {/* Transmitted Payload Message */}
                      <div className="relative z-10 mb-3.5">
                        <div className="text-[10px] font-mono text-[#A3A9B7] tracking-widest uppercase mb-1">
                          SPECTRUM PAYLOAD MESSAGE:
                        </div>
                        <p className="text-xs sm:text-sm text-white italic leading-relaxed">
                          "{decryptedLog.payload}"
                        </p>
                      </div>

                      {/* Operational recommendations */}
                      <div className="relative z-10 border-t border-white/5 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono">
                        <div>
                          <div className="text-[9px] text-[#A3A9B7] tracking-widest uppercase mb-0.5">
                            EXPEDITION RECOMMENDATION:
                          </div>
                          <div className="text-[11px] text-[#12E6F2] tracking-wider font-semibold">
                            {decryptedLog.recommends}
                          </div>
                        </div>

                        {/* Dispatch Button Redirect */}
                        <button
                          onClick={() => onNavigateTo("missions")}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded text-[9px] tracking-widest uppercase transition-all"
                        >
                          OPEN DIRECTIVE
                        </button>
                      </div>

                      {/* Offline notification banner if fell back */}
                      {decryptedLog.datasource === "offline_fallback" && (
                        <div className="mt-3.5 bg-blue-950/20 border border-blue-900/30 rounded p-2.5 flex items-start gap-2 relative z-10">
                          <HelpCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                          <p className="text-[8.5px] font-mono text-blue-300 leading-normal">
                            System simulating secure logs using local cache state. For dynamic Gemini API responses, define your GEMINI_API_KEY inside the secrets drawer.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Frame Decorative Panels mirroring the reference blocks */}
      <div className="absolute top-[30%] right-0 w-8 md:w-16 h-48 bg-gradient-to-l from-white/3 to-transparent pointer-events-none border-r border-white/5" />
      <div className="absolute bottom-[20%] left-0 w-8 md:w-16 h-48 bg-gradient-to-r from-white/3 to-transparent pointer-events-none border-l border-white/5" />

      {/* Far Right Neon Utility Panel from requested Design HTML */}
      <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 bg-white/5 border-l border-y border-white/10 py-12 flex flex-col items-center justify-between space-y-12 backdrop-blur-md z-30">
        {/* Glowing Indicator bar */}
        <div className="w-1.5 h-1.5 bg-[#12E6F2] shadow-[0_0_8px_#12E6F2] animate-pulse"></div>
        
        {/* Vertical Nodes list */}
        <div className="flex flex-col space-y-6">
          <div className="w-1.5 h-1.5 bg-[#12E6F2] rounded-full shadow-[0_0_8px_#12E6F2]"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-[#9A5CFF] rounded-full shadow-[0_0_8px_#9A5CFF]"></div>
          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
        </div>

        {/* Action cross trigger block */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-px h-12 bg-white/25"></div>
          <button 
            onClick={handleIntercept} 
            title="Tuning Signal Broadcast Trigger"
            className="w-7 h-7 bg-[#12E6F2] hover:bg-white hover:text-black transition-all shadow-[0_0_12px_rgba(18,230,242,0.4)] flex items-center justify-center rounded-sm text-black font-mono font-bold text-xs cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
