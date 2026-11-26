"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { achievements, leadership, numbers, type AchievementCategory } from "@/lib/data";
import { Counter } from "./Counter";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const filters: ("All" | AchievementCategory)[] = [
  "All",
  "Corporate",
  "Academic",
  "Creative",
  "Learning",
];

export function Achievements() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = achievements.filter((a) => filter === "All" || a.category === filter);

  return (
    <section id="achievements" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements & Leadership"
          title={
            <>
              Recognition, and the <span className="italic text-accent">people</span> behind it.
            </>
          }
        />

        {/* By the numbers */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">
          {numbers.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.05} className="bg-ink-950">
              <div className="h-full p-6">
                <p className="font-serif text-4xl text-white">
                  <Counter to={n.to} suffix={n.suffix} decimals={"decimals" in n ? n.decimals : 0} />
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Filterable achievements */}
        <div className="mt-16">
          <div role="tablist" aria-label="Filter achievements" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  filter === f
                    ? "border-accent bg-accent text-ink-950"
                    : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.ul layout className="mt-8 grid gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((a) => {
                const Icon = iconMap[a.icon];
                return (
                  <motion.li
                    key={a.title}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="glass glass-hover group flex gap-5 rounded-3xl p-7"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-ink-950">
                      <Icon size={24} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-accent">
                        {a.year} · {a.category}
                      </p>
                      <h3 className="mt-1.5 font-serif text-2xl leading-snug text-white">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">{a.org}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{a.note}</p>
                    </div>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </div>

        {/* Leadership */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow">Leadership & service</p>
            <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Leading, coordinating, showing up.
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l, i) => {
              const Icon = iconMap[l.icon];
              return (
                <Reveal key={l.title} delay={i * 0.07}>
                  <div className="glass glass-hover h-full rounded-3xl p-6">
                    <Icon size={22} className="text-accent" />
                    <h4 className="mt-5 font-serif text-xl text-white">{l.title}</h4>
                    <p className="mt-1 text-sm text-zinc-500">{l.org}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
