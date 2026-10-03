import { useReducedMotion, LazyMotion, domAnimation, m } from "motion/react";
import { useState, useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { 
  Network, Search, BrainCircuit, Workflow, MessageSquareText, Zap,
  Database, LineChart, ShieldCheck, Target, ArrowRight
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════
// DATA CONSTANTS & UTILS
// ═══════════════════════════════════════════════════════════════════════
const NeonPill = ({ children, color = "green" }: { children: ReactNode, color?: "green" | "yellow" }) => (
  <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-slate-300 bg-white/5 backdrop-blur-md ${color === "green" ? "text-[#00ff66]" : "text-[#dfff00]"}`}>
    {children}
  </span>
);

// ═══════════════════════════════════════════════════════════════════════
// HERO: 3D NODE NETWORK SHOWCASE
// ═══════════════════════════════════════════════════════════════════════
function AuraIntelligenceCore({ navigate }: { navigate: any }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen pt-[160px] pb-24 px-6 md:px-12 w-full max-w-[1600px] mx-auto flex flex-col justify-center relative border-b border-slate-300 overflow-visible">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between relative z-10 items-center">
        <m.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[45%] pt-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 bg-[#00ff66] rounded-full animate-pulse shadow-[0_0_15px_#00ff66]" />
            <span className="font-mono text-xs text-black/50 uppercase tracking-[0.2em]">Arch Core v3.0 / Online</span>
          </div>

          <h1 className="text-[clamp(60px,7vw,120px)] leading-[0.85] tracking-[-0.04em] font-bold text-black mb-8">
            increase leads<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#dfff00]">without limits</span>
          </h1>

          <p className="text-black/60 text-lg leading-relaxed max-w-[480px] font-light mb-12">
            Arch is not a chat wrapper. Its a self-improving ai agent cognitive architecture built to understand deep context, reason through systemic complexity, and execute business-critical actions natively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("?contact=true")}
              className="bg-gradient-primary text-white px-8 py-4 rounded-full font-bold text-sm transform-gpu transition duration-300 hover:shadow-[0_0_30px_rgba(78,38,255,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group w-max focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4e26ff]/20"
            >
              Deploy Intelligence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </m.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// CAPABILITIES & OUTCOMES
// ═══════════════════════════════════════════════════════════════════════


const AURA_PLATFORM_LAYERS = [
  { icon: Network, title: "Self-improving agent", desc: "Learns from your workflows and customer interactions to improve with every task." },
  { icon: Search, title: "Custom knowledge", desc: "Connects to your internal systems and data so the agent understands your business context." },
  { icon: BrainCircuit, title: "Brand-aware conversations", desc: "Speaks in your tone and reflects your brand across every customer interaction." },
  { icon: Workflow, title: "Customer assistance", desc: "Handles support and service tasks across the journey without slowing your team down." },
  { icon: MessageSquareText, title: "Human handoff", desc: "Escalates complex or sensitive cases with all the relevant context already attached." },
  { icon: ShieldCheck, title: "Embed anywhere", desc: "Works across web, messaging, and internal tools while keeping governance in place." }
];


export function AuraAI() {
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const motionProps = (props: any) => (prefersReducedMotion ? {} : props);

  useEffect(() => {
    document.title = "Arch AI | Autonomous Cognitive Architecture";
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <main className="w-full bg-[#F5F5F7] text-[#111111] min-h-screen font-sans selection:bg-[#00ff66] selection:text-black overflow-hidden relative">
        
        {/* Background ambient glow */}
        <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-[#00ff66]/8 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#dfff00]/8 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none z-0" />
        
        {/* Noise texture overlay */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <AuraIntelligenceCore navigate={navigate} />


        <section className="py-[140px] px-6 md:px-12 max-w-[1600px] mx-auto w-full border-b border-slate-300 relative z-10">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-[clamp(40px,5vw,80px)] font-bold leading-[0.9] tracking-[-0.03em]">
              features
            </h2>
            <NeonPill color="green">Adaptive Systems</NeonPill>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AURA_PLATFORM_LAYERS.map((layer, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-10 bg-white border border-slate-300 rounded-[32px] hover:bg-slate-50 hover:border-[#00ff66]/50 transition-all duration-500 group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff66]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center mb-8 text-[#00ff66] group-hover:scale-110 transition-transform duration-500">
                  <layer.icon size={24} className="stroke-[1.5px]" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight relative z-10">{layer.title}</h3>
                <p className="font-light text-black/50 leading-relaxed relative z-10">{layer.desc}</p>
              </m.div>
            ))}
          </div>
        </section>

        

        

        {/* Business Outcomes */}
        <section className="py-[140px] px-6 md:px-12 max-w-[1600px] mx-auto w-full border-b border-slate-300 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <div className="w-full lg:w-[40%]">
              <h2 className="text-[clamp(50px,8vw,100px)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                business <br />
                <span className="text-black/20">outcomes.</span>
              </h2>
              <p className="text-lg text-black/50 font-light max-w-sm leading-relaxed">
                Avoid technical jargon overload. We deploy intelligence to solve specific operational bottlenecks and drive immediate ROI.
              </p>
            </div>

            <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { value: "24/7", label: "Respond Instantly", desc: "Never leave a customer waiting regardless of timezone." },
                { value: "-80%", label: "Reduce Repetitive Work", desc: "Eliminate manual data entry, routing, and reporting." },
                { value: "3x", label: "Increase Lead Conv.", desc: "Qualify leads and book meetings while intent is peak." },
                { value: "+45%", label: "Improve CSAT", desc: "Deliver accurate, context-aware support resolutions." }
              ].map((stat, i) => (
                <m.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex flex-col p-10 bg-white border border-slate-300 rounded-[32px] hover:border-[#dfff00]/50 transition-all duration-500"
                >
                  <span className="text-5xl lg:text-6xl font-bold tracking-tight text-[#dfff00] mb-6">{stat.value}</span>
                  <span className="text-xl font-bold text-black mb-3">{stat.label}</span>
                  <span className="font-light text-sm text-black/50">{stat.desc}</span>
                </m.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-[140px] px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center bg-white border border-slate-300 rounded-[40px] p-12 lg:p-24 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#00ff66]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-[clamp(40px,6vw,80px)] leading-[0.9] tracking-[-0.04em] font-bold mb-12 relative z-10">
              ready to deploy <br/>
              <span className="text-[#00ff66]">intelligence?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-10">
              <button
                onClick={() => navigate("?contact=true")}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-primary text-white rounded-full font-bold text-lg transform-gpu transition duration-300 hover:shadow-[0_0_30px_rgba(78,38,255,0.6)] hover:-translate-y-1 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4e26ff]/20"
              >
                Book a Strategy Session
              </button>
              <button
                onClick={() => navigate("/services/web")}
                className="w-full sm:w-auto px-10 py-5 bg-slate-50 border border-slate-300 text-[#111111] rounded-full font-bold text-lg hover:bg-white transition-colors backdrop-blur-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4e26ff]/8"
              >
                Explore Integrations
              </button>
            </div>
          </div>
        </section>

      </main>
    </LazyMotion>
  );
}
