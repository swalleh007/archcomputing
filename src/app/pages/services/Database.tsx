import { LazyMotion, domAnimation, m } from "motion/react";
import { useNavigate } from "react-router";
import { Server, ArrowRight } from "lucide-react";

const OFFERINGS = [
  { title: "schema design", desc: "Normalized schemas, indexing and access patterns for performant queries." },
  { title: "migrations & upgrades", desc: "Safe, repeatable migrations and rollback strategies for production." },
  { title: "managed hosting", desc: "Guidance for managed Postgres, Supabase, and cloud-native DBs." },
  { title: "analytics & reporting", desc: "Data pipelines, materialized views and reporting for business insights." },
];

const TIMELINE = [
  {
    step: "01",
    title: "Discovery",
    desc: "We unpack your objectives, constraints, and current systems so the scope is clear from the start."
  },
  {
    step: "02",
    title: "Strategy & Solution Design",
    desc: "We map the architecture, delivery plan, and priorities needed to turn the brief into a workable product or automation roadmap."
  },
  {
    step: "03",
    title: "Build, Launch, and Support",
    desc: "We implement, refine, and support the solution so it performs well in practice and continues to create value after launch."
  }
];

export function Database() {
  const navigate = useNavigate();

  return (
    <LazyMotion features={domAnimation}>
      <main className="w-full bg-white text-[#111111] min-h-screen font-sans overflow-hidden">
        <section className="pt-40 pb-20 px-6 lg:px-16 w-full">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row justify-between items-start gap-8"
          >
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#00ff66] rounded-full" />
                <span className="font-mono text-xs text-white/50 uppercase tracking-[0.18em]">01 – Capabilities - database</span>
              </div>

              <h1 className="text-[clamp(40px,6vw,88px)] font-bold leading-tight mb-6">
                database <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#dfff00]">{"{ your data platform }"}</span>
              </h1>

              <p className="text-black/60 text-lg leading-relaxed font-light mb-6">
                We design, migrate and operate reliable database systems for web, AI and mobile products. From schema design and migrations to managed hosting and analytics pipelines.
              </p>

              <div className="mt-6">
                <button onClick={() => navigate("?contact=true")} className="px-6 py-3 bg-gradient-primary text-white rounded-full font-bold flex items-center gap-3">
                  Talk to our team <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

              <div className="w-full lg:w-1/3">
              <div className="bg-white/5 border border-slate-700 rounded-2xl p-6">
                <Server className="w-10 h-10 text-[#00ff66] mb-4" />
                <h3 className="font-bold text-xl mb-2">Managed Postgres & Supabase</h3>
                <p className="text-sm text-white/60">From Architect to production, we handle the heavy lifting so your team can focus on product.</p>
              </div>
            </div>
          </m.div>
        </section>

        

        <section className="px-6 lg:px-16 w-full pb-20">
          <h2 className="text-3xl font-bold mb-6">What we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFERINGS.map((o, i) => (
              <div key={i} className="p-6 border rounded-lg bg-white/5">
                <h4 className="font-semibold mb-2">{o.title}</h4>
                <p className="text-sm text-black/60">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}
