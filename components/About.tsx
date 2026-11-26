"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { aboutIntro, lenses, openTo, philosophy } from "@/lib/data";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const [active, setActive] = useState(0);
  const lens = lenses[active];
  const Icon = iconMap[lens.icon];

  return (
    <section id="about" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Four lenses, <span className="italic text-accent">one person</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-300">
              {aboutIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <figure className="mt-10 border-l-2 border-accent pl-6">
              <blockquote className="font-serif text-2xl italic leading-snug text-white sm:text-3xl">
                &ldquo;{philosophy}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-zinc-500">
                My professional philosophy
              </figcaption>
            </figure>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Open to roles in</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {openTo.map((o) => (
                  <span key={o} className="chip border-accent/30 text-accent">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-3 sm:p-4">
              <div role="tablist" aria-label="Ways of looking at me" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {lenses.map((l, i) => (
                  <button
                    key={l.key}
                    type="button"
                    role="tab"
                    id={`lens-tab-${i}`}
                    aria-selected={active === i}
                    aria-controls="lens-panel"
                    onClick={() => setActive(i)}
                    className={`rounded-2xl px-3 py-3 text-sm font-medium transition ${
                      active === i
                        ? "bg-accent text-ink-950"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {l.key}
                  </button>
                ))}
              </div>

              <div
                id="lens-panel"
                role="tabpanel"
                aria-labelledby={`lens-tab-${active}`}
                className="min-h-[260px] p-5 sm:p-7"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lens.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent">
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-6 font-serif text-3xl text-white">The {lens.key}</h3>
                    <p className="mt-4 text-[17px] leading-relaxed text-zinc-300">{lens.text}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
