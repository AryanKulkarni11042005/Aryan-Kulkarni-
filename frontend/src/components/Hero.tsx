import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, lineMask } from "../lib/motion";
import type { Profile } from "../data/profile";

export function Hero({ profile }: { profile: Profile }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Gentle parallax only — the name drifts up slightly slower than the page.
  // No opacity fade: the hero content (including the CTAs) must stay readable
  // and clickable the whole time it's on screen.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "12%"]);

  const [first, last] = profile.name.toUpperCase().split(" ");

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col justify-center px-6 py-24 md:px-12 md:py-28 lg:px-20"
    >
      {/* Top meta — pinned so it doesn't consume the centered block's height */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
        className="absolute inset-x-6 top-24 mx-auto max-w-6xl md:inset-x-12 md:top-28 lg:inset-x-20"
      >
        <span className="eyebrow">{profile.location} — Portfolio, 2026</span>
      </motion.p>

      <motion.div style={{ y }} className="mx-auto w-full max-w-6xl">
        <h1 className="font-display text-[clamp(3.25rem,12.5vw,10.5rem)] leading-[0.9] tracking-[-0.02em]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              variants={lineMask}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {first}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              variants={lineMask}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {last}
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.7 }}
            className="md:col-span-6"
          >
            <p className="text-lg leading-snug md:text-xl">
              {profile.roles.map((role, i) => (
                <span key={role} className={i === 0 ? "text-ink" : "text-muted"}>
                  {role}.{" "}
                </span>
              ))}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.85 }}
            className="flex flex-wrap gap-4 md:col-span-6 md:justify-end"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-ink"
            >
              View Work
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href="/resume.pdf"
              download="Aryan_Kulkarni_Resume.pdf"
              className="inline-flex items-center gap-3 border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-muted"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue — pinned to the bottom so it never pushes the CTAs off-screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 1.4 }}
        className="absolute inset-x-6 bottom-8 mx-auto flex max-w-6xl items-center justify-between md:inset-x-12 lg:inset-x-20"
      >
        <div className="flex items-center gap-4">
          <span className="eyebrow">Scroll</span>
          <span className="relative h-px w-16 overflow-hidden bg-line">
            <motion.span
              className="absolute inset-y-0 left-0 w-1/2 bg-muted"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            />
          </span>
        </div>
        <span className="eyebrow hidden sm:inline">{profile.coordinates}</span>
      </motion.div>
    </section>
  );
}
