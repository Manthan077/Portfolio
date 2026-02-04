import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="relative py-40">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-24 items-start"
      >

        {/* LEFT — TEXT */}
        <div>
          <p className="uppercase tracking-[0.3em] text-[11px] text-sky-400/60 mb-8">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-10 max-w-xl">
            A practical stack built for
            <span className="text-sky-400"> real-world engineering</span>.
          </h2>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            My technical skill set reflects a balance between strong programming
            fundamentals, modern full-stack development, and AI-driven systems.
            I focus on tools that scale beyond demos and remain maintainable in
            production environments.
          </p>
        </div>

        {/* RIGHT — SKILLS GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCard
            title="Core Engineering"
            skills={["C", "C++", "Java", "JavaScript", "TypeScript"]}
          />

          <SkillCard
            title="Frontend"
            skills={["React", "Tailwind CSS", "HTML", "CSS"]}
          />

          <SkillCard
            title="Backend"
            skills={["Node.js", "Express.js", "REST APIs"]}
          />

          <SkillCard
            title="Databases"
            skills={["MongoDB", "MySQL", "PostgreSQL", "Qdrant"]}
          />

          <SkillCard
            title="AI & GenAI"
            skills={["Generative AI", "RAG", "LangChain", "LangGraph", "Gemini API"]}
          />

          <SkillCard
            title="Tooling"
            skills={["Git", "GitHub", "Docker", "Postman", "VS Code"]}
          />

        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-sky-400/40 transition">
      <p className="text-white font-medium mb-4">{title}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs bg-black/40 border border-white/10 text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
