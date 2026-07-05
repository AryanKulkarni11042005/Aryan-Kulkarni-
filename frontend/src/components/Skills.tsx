import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { Section } from "./Section";
import type { Profile } from "../data/profile";

export function Skills({ profile }: { profile: Profile }) {
  const categories = Object.entries(profile.skills);

  return (
    <Section
      id="skills"
      index="05"
      label="Capabilities"
      title="What I work with"
      className="py-28 md:py-40"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-24 lg:grid-cols-3"
      >
        {categories.map(([category, items], i) => (
          <motion.div key={category} variants={fadeUp} className="border-t border-line pt-6">
            <div className="flex items-baseline justify-between">
              <h3 className="eyebrow text-ink">{category}</h3>
              <span className="font-mono text-[10px] text-muted/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-lg font-light tracking-tight text-muted transition-colors duration-300 hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
