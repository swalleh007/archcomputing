import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { PenTool, Globe, ShoppingBasket, Code2, Sparkles, Database } from "lucide-react";
import { DottedBg } from "./shared/DottedBg";
import { ScrollReveal } from "./shared/ScrollReveal";

const CARDS = [
  {
    id: "design",
    title: "design",
    tags: "branding · ui/ux · identity · packaging",
    desc: "Fueled by strategy and backed by strong technical ability and experience, we execute designs that are purposeful as well as beautiful",
    bgImage: "/images/team_artifact_1782480085547.png",
    iconColor: "#00E676", // Green
    Icon: PenTool,
    href: "/services/design",
  },
  {
    id: "web",
    title: "web",
    tags: "web studio · development · seo optimization",
    desc: "We have over 15 years' experience creating user focused and highly effective websites using agile principles",
    bgImage: "/images/web_bg.png",
    iconColor: "#AA00FF", // Purple
    Icon: Globe,
    href: "/services/web",
  },
  {
    id: "database",
    title: "database",
    tags: "schema design · migrations · managed db",
    desc: "Design, migrate and operate reliable database systems for web and mobile products.",
    bgImage: "/images/integrity_artifact_1782480057845.png",
    iconColor: "#00BCD4",
    Icon: Database,
    href: "/services/database",
  },
  {
    id: "pro",
    title: "pro",
    tags: "design systems · digital marketing · gtm strategy",
    desc: "Combining strategy, creativity, technical ability and years of knowledge we help clients create and manage integrated digital channels that engage customers.",
    bgImage: "/images/pro_bg.png",
    iconColor: "#2962FF", // Blue
    Icon: Code2,
    href: "/services/pro",
    isWide: true,
  },
  {
    id: "arch-ai",
    title: "arch ai",
    tags: "ai workflows · automation",
    desc: "Arch AI is our flagship product — a conversational business intelligence platform built for modern African enterprises.",
    bgImage: "/images/aura_ai_chat.png",
    iconColor: "#FF3D00", // Orange
    Icon: Sparkles,
    href: "/services/aura-ai",
  },
];

function ServiceCard({ card, delay }: { card: typeof CARDS[0], delay: number }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: delay }}
      className="h-full"
    >
      <Link to={card.href}
        className="group relative block h-full w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/75 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-400 hover:-translate-y-1.5 hover:border-indigo-300/80 hover:shadow-[0_26px_60px_rgba(79,70,229,0.14)] md:p-7"
        style={{
          minHeight: "420px",
          textDecoration: "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${card.bgImage})`, willChange: "transform" }}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div
          className="absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(15,23,42,0.12) 32%, rgba(15,23,42,0.74) 100%)`,
            opacity: hovered ? 0.94 : 0.9,
          }}
        />

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%)] opacity-100" />
        <div
          className="absolute -right-10 -top-10 z-0 h-28 w-28 rounded-full blur-3xl transition-opacity duration-500"
          style={{ backgroundColor: `${card.iconColor}66`, opacity: hovered ? 1 : 0.8 }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="mb-12 flex items-center justify-between">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-slate-950 shadow-[0_12px_30px_rgba(255,255,255,0.15)]"
              style={{ backgroundColor: card.iconColor }}
            >
              <card.Icon size={22} strokeWidth={2.5} />
            </div>

            <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              service
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-4 font-['Space_Grotesk'] text-[40px] font-medium leading-[0.96] tracking-[-0.05em] lowercase text-white drop-shadow-[0_12px_18px_rgba(15,23,42,0.35)] transition-transform duration-300 group-hover:translate-x-1 md:text-[52px]">
              {card.title}
            </h3>

            <p className="mb-6 max-w-[95%] text-[14px] font-medium leading-[1.6] text-white/90 drop-shadow-[0_6px_12px_rgba(15,23,42,0.32)] md:text-[15px]">
              {card.desc}
            </p>

            <div className="mb-5 h-px w-full bg-gradient-to-r from-white/60 via-white/25 to-transparent" />

            <div className="flex flex-wrap gap-2">
              {card.tags.split(" · ").map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/80 backdrop-blur-md md:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-12 md:py-16 overflow-hidden bg-transparent"
    >

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[#05050A] font-['Inter'] text-[14px] font-medium uppercase tracking-[0.1em] opacity-50">02 — Capabilities</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CARDS.map((card, i) => (
            <div key={card.id} className={card.isWide ? "md:col-span-2" : "md:col-span-1"}>
              <ServiceCard card={card} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
