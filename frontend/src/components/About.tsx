import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { Section } from "./Section";
import type { Profile } from "../data/profile";

export function About({ profile }: { profile: Profile }) {
  const [lede, ...rest] = profile.bio;

  return (
    <Section id="about" index="01" label="About" className="py-28 md:py-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12"
      >
        <motion.p
          variants={fadeUp}
          className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.18] tracking-tight md:col-span-9"
        >
          {lede.replace("systems.", "")}
          <em className="text-accent">systems.</em>
        </motion.p>

        <motion.div variants={fadeUp} className="md:col-span-4 md:col-start-2">
          <p className="text-base leading-relaxed text-muted">{rest[0]}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="md:col-span-4 md:col-start-7">
          <p className="text-base leading-relaxed text-muted">{rest[1]}</p>
          <p className="eyebrow mt-10">
            {profile.location} · Computer Engineering
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
