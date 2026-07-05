import type { Variants } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: i * 0.08 },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const lineMask: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
};

export const viewport = { once: true, margin: "-15% 0px" } as const;
