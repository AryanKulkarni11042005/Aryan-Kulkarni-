import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { Section } from "./Section";
import type { Profile } from "../data/profile";

export function Contact({ profile }: { profile: Profile }) {
  const links = [
    { label: "Email", href: `mailto:${profile.contact.email}`, meta: profile.contact.email },
    { label: "GitHub", href: profile.contact.github, meta: "github.com" },
    { label: "LinkedIn", href: profile.contact.linkedin, meta: "linkedin.com" },
  ];

  return (
    <Section id="contact" index="06" label="Contact" className="py-28 md:py-44">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:items-center md:gap-16"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight md:col-span-7"
        >
          Let's build
          <br />
          something
          <br />
          interesting<span className="text-accent">.</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="md:col-span-5">
          <ul className="grid gap-0">
            {links.map((link) => (
              <li key={link.label} className="border-t border-line last:border-b">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-baseline justify-between py-8 pr-6 transition-colors duration-300"
                >
                  <span>
                    <span className="block text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="mt-1 block font-mono text-xs text-muted/70">
                      {link.meta}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}
