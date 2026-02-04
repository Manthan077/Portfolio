import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return null;

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* BACK */}
        <Link
          to="/"
          onClick={() =>
            sessionStorage.setItem("scrollTarget", `project-${project.slug}`)
          }
          className="inline-flex items-center gap-2 mb-16 text-sm text-slate-400 hover:text-white transition"
        >
          ← Back to projects
        </Link>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-28 text-center max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[11px] text-sky-400/70 mb-6">
            {project.subtitle}
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-8">
            {project.title}
          </h1>

          <p className="text-lg text-center text-slate-400 max-w-3xl mx-auto mb-12">
            {project.overview}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-semibold hover:opacity-90 transition"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-white/15 text-white hover:border-sky-400 hover:bg-sky-400/10 transition"
              >
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>

        {/* IMAGE */}
        {project.image && (
          <div className="mb-36">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl border border-white/10"
            />
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-24 mb-36">
          <FlowBlock title="Problem" items={project.problem} />
          <FlowBlock title="Solution" items={project.solution} />
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          <FlowBlock title="Architecture" items={project.architecture} />
          <FlowBlock title="Impact" items={project.impact} />
        </div>

        <div className="mt-36 pt-12 border-t text-center border-white/10 text-sm text-sky-400">
          {project.tech}
        </div>

      </div>
    </section>
  );
}

function FlowBlock({ title, items }) {
  return (
    <div>
      {/* CENTERED HEADING */}
      <h2 className="text-2xl font-semibold mb-14 text-center">
        {title}
      </h2>

      <div className="relative space-y-10 pl-8">

        {/* vertical line */}
        <div className="absolute left-[10px] top-3 bottom-3 w-px bg-white/15" />

        {items.map((item, i) => (
          <div key={i} className="relative flex gap-6 items-stretch">
            
            {/* node */}
            <span className="w-3 h-3 rounded-full bg-sky-400 shrink-0 self-center" />

            {/* card */}
            <div className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-slate-300 text-sm leading-relaxed">
              {item}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
