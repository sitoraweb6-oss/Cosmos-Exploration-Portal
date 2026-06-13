import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Ship, HelpCircle, Check, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coordinates: "RA 18h 36m // DEC -31° 26'",
    subject: "Scientific Partnership Inquiry",
    payloadMessage: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.payloadMessage) return;

    setIsSubmitting(true);

    // Simulate sending signal to deep space receivers
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        coordinates: "RA 18h 36m // DEC -31° 26'",
        subject: "Scientific Partnership Inquiry",
        payloadMessage: ""
      });
      
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1800);
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen relative z-10 text-white">
      
      {/* SECTION HEADER */}
      <div className="border-b border-white/5 pb-11 mb-16">
        <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#12E6F2] uppercase mb-3 font-bold">
          SEC_06 // INCOMING BEACONS & PARTNERSHIPS
        </div>
        <h2 className="text-4xl sm:text-5xl uppercase font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
          Reach Our Command
        </h2>
        <p className="text-sm sm:text-base text-[#A3A9B7] leading-relaxed max-w-3xl border-l border-white/10 pl-6 text-left">
          Transmit your parameters into our active receivers. Whether you seek scientific research 
          partnerships, expedition sponsorships, or elite communications clearance, our team answers 
          all intercepted beacons.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Command Details & Telemetry Beacons */}
        <div className="lg:col-span-5 space-y-8 font-mono text-xs text-[#A3A9B7]">
          
          <div className="bg-[#0F1523]/60 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#12E6F2] rounded-full animate-ping" />
              COSMOS COMMAND POSTS
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#12E6F2] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white uppercase tracking-wider font-semibold">Lunar Base Alpha</div>
                  <div>Mare Imbrium, Crater Rim 4B</div>
                  <div className="text-[10px] opacity-60">System Coord: L_COORD_14.82</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9A5CFF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white uppercase tracking-wider font-semibold">DIRECT RECEIVER CHANNELS</div>
                  <div>command@cosmos-portal.sec9</div>
                  <div className="text-[10px] opacity-60 font-sans">amitumif54321@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ship className="w-4 h-4 text-[#12E6F2] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white uppercase tracking-wider font-semibold">FTL RELAY TRANSMISSIONS</div>
                  <div>Transceiver Sector-099 Array</div>
                  <div className="text-[10px] opacity-60">Carrier Rate: 1420.405 MHz</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border border-dashed border-white/5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-[30%] left-[80%] w-24 h-24 rounded-full bg-[#12E6F2]/5 blur-[25px]" />
            <div className="text-[10px] text-[#A3A9B7] tracking-widest uppercase mb-1.5">SEC_9 WARNING NOTICE</div>
            <p className="text-[11px] leading-relaxed text-[#A3A9B7] font-sans">
              All communications sent are automatically logged on Sector-9 server caches. 
              Always transmit legal parameters and verify your astronomical coordinate bounds prior 
              to sending high-warp beacons.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit} 
            className="bg-[#0F1523]/80 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative shadow-2xl space-y-6"
            id="contact-portal-form"
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#12E6F2]/5 blur-[40px] pointer-events-none" />

            {/* Inputs layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[9px] font-mono text-[#A3A9B7] tracking-widest uppercase mb-2">
                  EXPLORER / INSTITUTION NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Commander Marcus"
                  className="w-full bg-black/40 border border-white/5 focus:border-[#12E6F2] hover:border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder-white/20 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-[#A3A9B7] tracking-widest uppercase mb-2">
                  COMMUNICATION EMAIL CLEARANCE
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. pilot@alpha.net"
                  className="w-full bg-black/40 border border-white/5 focus:border-[#12E6F2] hover:border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder-white/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[9px] font-mono text-[#A3A9B7] tracking-widest uppercase mb-2">
                  CELESTIAL BEACON SYSTEM COORDINATES
                </label>
                <input
                  type="text"
                  value={formData.coordinates}
                  onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 focus:border-[#12E6F2] hover:border-white/10 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder-white/20 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-[#A3A9B7] tracking-widest uppercase mb-2">
                  DISPATCH DIRECTIVE SUBJECT
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 focus:border-[#12E6F2] hover:border-white/10 rounded-xl px-4 py-3 text-xs text-white font-mono focus:outline-none transition-all appearance-none"
                >
                  <option className="bg-[#0F1523]" value="Scientific Partnership Inquiry">Scientific Partnership Inquiry</option>
                  <option className="bg-[#0F1523]" value="High-FTL System Sponsorship">High-FTL System Sponsorship</option>
                  <option className="bg-[#0F1523]" value="Stellar Archives Credentials">Stellar Archives Credentials</option>
                  <option className="bg-[#0F1523]" value="Beacon Station Application">Beacon Station Application</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-mono text-[#A3A9B7] tracking-widest uppercase mb-2">
                TRANSMISSION MESSAGE PAYLOAD (Details)
              </label>
              <textarea
                required
                rows={4}
                value={formData.payloadMessage}
                onChange={(e) => setFormData({ ...formData, payloadMessage: e.target.value })}
                placeholder="Inscribe deep space packet message..."
                className="w-full bg-black/40 border border-white/5 focus:border-[#12E6F2] hover:border-white/10 rounded-2xl px-4 py-3 text-sm text-white font-mono placeholder-white/20 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Action Box */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3 border-t border-white/5">
              <span className="text-[10px] font-mono text-[#A3A9B7] tracking-widest">
                VERIFY SIGNATURE KEYS PRIOR TO TRANSMITTING
              </span>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#12E6F2] to-[#9A5CFF] text-black text-xs font-mono font-bold tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-[0_0_15px_rgba(18,230,242,0.15)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                    <span>BROADCASTING...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>TRANSMITTED</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT BEACON</span>
                  </>
                )}
              </button>
            </div>

            {/* Success message popup within form */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 text-xs font-mono text-emerald-400 leading-normal flex items-start gap-2.5"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white uppercase tracking-widest block mb-0.5">Packet Broadcasted Successfully!</strong>
                    Your transmission payload has bounced off Sector-9 orbital relays and is headed to our Lunar Base Alpha receivers. A decrypted response will generate shortly in your mailbox sector.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

      </div>

    </div>
  );
}
