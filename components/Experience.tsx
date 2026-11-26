"use client";

import { motion } from "framer-motion";
import { Award, Check } from "lucide-react";
import { internships, techMahindra as tm } from "@/lib/data";
import { Counter } from "./Counter";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title={
            <>
              Thirty-three months on the <span className="italic text-accent">front line</span> of
              banking technology.
            </>
          }
          lead={`${tm.role} at ${tm.company} · ${tm.duration} · ${tm.industry}.`}
        />

        {/* Animated stats */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {tm.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-ink-950">
              <div className="h-full p-7">
                <p className="font-serif text-5xl text-white">
                  <Counter to={s.to} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
                </p>
                <p className="mt-3 text-sm font-medium text-accent">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {/* Highlights */}
          <Reveal className="lg:col-span-3">
            <div className="glass h-full rounded-3xl p-7 sm:p-9">
              <p className="eyebrow">What I did</p>
              <ul className="mt-6 space-y-4">
                {tm.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-zinc-300">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Transformation */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-transparent to-transparent p-7 sm:p-9">
              <p className="eyebrow">The transformation</p>
              <blockquote className="mt-5 font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">
                &ldquo;{tm.transformation}&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>

        {/* Award */}
        <Reveal className="mt-5">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent/25 blur-[100px]"
            />
            <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <motion.span
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-accent/50 bg-accent/10 text-accent shadow-[0_0_60px_-10px_rgba(255,180,84,0.6)]"
              >
                <Award size={44} strokeWidth={1.4} />
              </motion.span>
              <div>
                <p className="eyebrow">Recognition · {tm.award.year}</p>
                <h3 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                  {tm.award.title}
                </h3>
                <p className="mt-2 text-zinc-400">
                  {tm.award.subtitle} · {tm.award.org}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Internships */}
        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">Before Tech Mahindra</p>
            <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Three internships, three ways of seeing work.
            </h3>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Software development, web development and data research gave me my first view of
              digital businesses and professional working environments.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {internships.map((n, i) => {
              const Icon = iconMap[n.icon];
              return (
                <Reveal key={n.company} delay={i * 0.08}>
                  <div className="glass glass-hover h-full rounded-3xl p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                      <Icon size={20} />
                    </span>
                    <p className="mt-6 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {n.period}
                    </p>
                    <h4 className="mt-2 font-serif text-2xl text-white">{n.role}</h4>
                    <p className="mt-1 text-sm text-zinc-400">
                      {n.company} · {n.place}
                    </p>
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
