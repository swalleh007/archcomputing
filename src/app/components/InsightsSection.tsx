import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const insights = [
  {
    category: "Engineering",
    title: "The Future of Headless Commerce in Africa",
    readTime: "5 min read",
    image: "/images/web_bg.png",
  },
  {
    category: "Design",
    title: "Why Minimalist UI Converts Better in 2026",
    readTime: "4 min read",
    image: "/images/team_artifact_1782480085547.png",
  }
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-32 relative bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Insights & Thinking.
            </h2>
            <p className="text-slate-500 text-lg max-w-lg">
              Our perspectives on design, technology, and the future of digital experiences.
            </p>
          </motion.div>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-500 transition-colors uppercase tracking-widest text-sm font-semibold"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {insights.map((insight, idx) => (
            <motion.a
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group block"
            >
              <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-6 relative">
                <ImageWithFallback 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-3 uppercase tracking-widest font-medium">
                <span className="text-indigo-600">{insight.category}</span>
                <span>•</span>
                <span>{insight.readTime}</span>
              </div>
              <h3 className="font-['Inter'] text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {insight.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
