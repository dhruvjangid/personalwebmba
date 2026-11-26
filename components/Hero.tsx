"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { heroLines } from "@/lib/data";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Background: grid + soft accent glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[18%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px] animate-float" />
        <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          {site.name} · My journey, experiences &amp; beyond
        </motion.p>

        <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="sr-only">{site.headline}</span>
          <span aria-hidden="true">
            {heroLines.map((line, i) => (
              <motion.span
                key={line.lead}
                className="block"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={i === heroLines.length - 1 ? "text-gradient animate-shimmer" : ""}>
                  {line.lead}
                </span>{" "}
                <span className="italic text-zinc-500">{line.rest}</span>
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          This isn&apos;t a résumé. It&apos;s the story of how code, customers and curiosity
          shaped the person now building a career in marketing, business development and strategy.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#journey" className="btn btn-primary">
            Begin the journey <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let&apos;s connect
          </a>
        </motion.div>
      </div>

      <a
        href="#journey"
        aria-label="Scroll to the journey"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white md:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </a>
    </section>
  );
}
