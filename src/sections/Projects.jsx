import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <section id="projects" className="relative py-40">

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-32">
          <p className="uppercase tracking-[0.3em] text-[11px] text-sky-400/60 mb-8">
            Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-10">
            Systems built with
            <span className="text-sky-400"> real-world impact</span>.
          </h2>

          <p className="text-lg text-slate-400">
            A selection of projects showcasing full-stack engineering,
            system design, and AI-powered development.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-44">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              id={`project-${project.slug}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center"
            >

              {/* IMAGE */}
              <div
                className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#020617]
                ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""} max-w-xl`}>
                <p className="uppercase tracking-[0.25em] text-[11px] text-sky-400/60 mb-6">
                  {project.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-lg mb-8">
                  {project.description}
                </p>

                <p className="text-sm text-sky-400 mb-12">
                  {project.tech}
                </p>

                {/* CTA */}
                <Link
                  to={`/projects/${project.slug}`}
                  onClick={() =>
                    sessionStorage.setItem(
                      "scrollTarget",
                      `project-${project.slug}`
                    )
                  }
                  className="
                    inline-flex items-center gap-2
                    px-7 py-3 rounded-xl
                    border border-white/15
                    text-sm font-medium text-white
                    hover:border-sky-400
                    hover:bg-sky-400/10
                    transition
                  "
                >
                  View project
                  <span className="text-sky-400">→</span>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
