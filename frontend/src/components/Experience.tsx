import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";
import { Section } from "./Section";
import type { Profile } from "../data/profile";

export function Experience({ profile }: { profile: Profile }) {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Where I've worked"
      className="py-28 md:py-40"
    >
      <div className="mt-20 md:mt-28">
        {profile.experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            custom={i}
            className="group grid gap-6 border-t border-line py-14 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-3">
              <p className="eyebrow transition-colors duration-500 group-hover:text-accent">
                {job.period}
              </p>
            </div>

            <div className="md:col-span-6">
              <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                {job.company}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted">{job.role}</p>
              <p className="mt-6 leading-relaxed text-muted">{job.summary}</p>
              <ul className="mt-4 space-y-3">
                {job.details.map((detail) => (
                  <li key={detail} className="flex gap-4 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-muted/50" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 md:text-right">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:items-end md:gap-y-2">
                {job.stack.map((tech) => (
                  <li key={tech} className="font-mono text-xs text-muted/80">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
