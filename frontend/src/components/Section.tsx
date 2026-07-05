import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "../lib/motion";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  index,
  label,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.header
          id={id}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="border-t border-line pt-8"
        >
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">
              {index} / {label}
            </span>
            <span className="eyebrow hidden md:inline text-line" aria-hidden>
              AK — {index}
            </span>
          </div>
          {title && (
            <h2 className="font-display mt-10 text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight">
              {title}
            </h2>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
