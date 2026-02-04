import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-22">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        {/* NAME */}
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-8">
          MANTHAN SHARMA
        </h1>

        <p className="uppercase tracking-[0.28em] text-[11px] text-sky-400/80 mb-10">
          Full-Stack & GenAI Systems Engineer
        </p>

        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          I build <span className="text-white">production-ready systems</span> — from
          GenAI pipelines to real-time applications — not demos.
        </p>

        <p className="text-base text-slate-400 leading-relaxed mb-14">
          I enjoy working close to real-world constraints, designing systems that
          are practical, maintainable, and built to last.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="/Manthan_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-semibold shadow-lg hover:opacity-90 transition"
          >
            View Resume
          </a>

          <a
            href="/Manthan_Sharma_Resume.pdf"
            download="Manthan_Sharma_Resume.pdf"
            className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 hover:border-sky-400 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["RAG Systems", "Ingestion · Retrieval · Vector DBs"],
            ["Real-Time Apps", "Live GPS · Auth · Dashboards"],
            ["Production GenAI", "RAG · Guardrails · LLM Workflows"],
            ["System Design", "Scalability · APIs · Reliability"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-left hover:scale-[1.03] hover:border-sky-400/40 transition-transform duration-300"
            >
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-slate-400 mt-2">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
