import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { Section } from "./Section";
import type { Profile } from "../data/profile";

export function Learning({ profile }: { profile: Profile }) {
  return (
    <Section
      id="learning"
      index="04"
      label="Notebook"
      title="Currently learning"
      className="py-28 md:py-40"
    >
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="mt-16 grid md:mt-24 md:grid-cols-2 md:gap-x-20"
      >
        {profile.learning.map((item, i) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="group flex items-baseline gap-6 border-b border-line py-7"
          >
            <span className="font-mono text-xs text-muted/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xl font-light tracking-tight transition-colors duration-500 md:text-2xl">
              {item}
            </span>
            <span
              aria-hidden
              className="ml-auto text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              ↗
            </span>
          </motion.li>
        ))}
      </motion.ol>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="eyebrow mt-12"
      >
        Field notes — updated continuously
      </motion.p>
    </Section>
  );
}
