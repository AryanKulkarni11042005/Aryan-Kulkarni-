import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { Section } from "./Section";
import { ProjectVisual } from "./ProjectVisual";
import type { Profile } from "../data/profile";

export function Projects({ profile }: { profile: Profile }) {
  return (
    <Section
      id="work"
      index="03"
      label="Selected Work"
      title="Projects"
      className="py-28 md:py-40"
    >
      <div className="mt-20 space-y-32 md:mt-28 md:space-y-44">
        {profile.projects.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
              className="grid items-center gap-10 md:grid-cols-12 md:gap-14"
            >
              <motion.div
                variants={fadeUp}
                className={`md:col-span-5 ${reversed ? "md:order-2 md:col-start-8" : ""}`}
              >
                <p className="eyebrow text-accent">Project {project.index}</p>
                <h3 className="font-display mt-6 text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-4 text-lg text-muted">{project.subtitle}</p>
                {project.status && (
                  <p className="mt-3 inline-block border border-line px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    {project.status}
                  </p>
                )}
                <p className="mt-8 leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-8 flex items-baseline gap-4 border-t border-line pt-6">
                  <span className="font-display text-2xl tracking-tight">
                    {project.metric.value}
                  </span>
                  <span className="eyebrow">{project.metric.label}</span>
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-muted/80">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className={`md:col-span-7 ${reversed ? "md:order-1 md:col-start-1" : ""}`}
              >
                <ProjectVisual index={project.index} title={project.title} />
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
