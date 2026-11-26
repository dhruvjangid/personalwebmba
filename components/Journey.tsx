"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { chapters, journeyEvents } from "@/lib/data";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>("btech");
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <section id="journey" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Journey"
          title={
            <>
              Scroll through <span className="italic text-accent">my life</span>, one chapter at a
              time.
            </>
          }
          lead="Five chapters, a few detours, and one thread running through them all: learning by doing. Tap any milestone to open it."
        />

        <div ref={trackRef} className="relative mt-20">
          {/* Track */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 md:left-[27px]"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: fill }}
            className="absolute bottom-0 left-[19px] top-0 w-px origin-top bg-gradient-to-b from-accent via-accent to-accent/40 md:left-[27px]"
          />

          <ol className="space-y-4">
            {chapters.map((chapter) => {
              const events = journeyEvents.filter((e) => e.chapter === chapter.number);
              return (
                <Fragment key={chapter.number}>
                  <li className="relative pb-2 pl-14 pt-10 md:pl-20">
                    <Reveal>
                      <p className="eyebrow">
                        Chapter {chapter.number} · {chapter.period}
                      </p>
                      <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                        {chapter.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-zinc-400">{chapter.blurb}</p>
                    </Reveal>
                  </li>

                  {events.map((event) => {
                    const Icon = iconMap[event.icon];
                    const isOpen = openId === event.id;
                    return (
                      <li key={event.id} className="relative pl-14 md:pl-20">
                        {/* Node */}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-full border transition duration-300 md:h-14 md:w-14 ${
                            isOpen
                              ? "border-accent bg-accent text-ink-950 shadow-[0_0_30px_-4px_rgba(255,180,84,0.7)]"
                              : "border-white/15 bg-ink-900 text-accent"
                          }`}
                        >
                          <Icon size={18} />
                        </span>

                        <Reveal>
                          <div className="glass glass-hover rounded-2xl">
                            <button
                              type="button"
                              onClick={() => setOpenId(isOpen ? null : event.id)}
                              aria-expanded={isOpen}
                              aria-controls={`panel-${event.id}`}
                              className="flex w-full items-start justify-between gap-4 rounded-2xl p-5 text-left sm:p-6"
                            >
                              <span>
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                                  {event.period}
                                </span>
                                <span className="mt-1.5 block font-serif text-2xl text-white">
                                  {event.title}
                                </span>
                                {event.place ? (
                                  <span className="mt-1 block text-sm text-zinc-500">
                                    {event.place}
                                  </span>
                                ) : null}
                                <span className="mt-3 block text-[15px] leading-relaxed text-zinc-400">
                                  {event.summary}
                                </span>
                              </span>
                              <ChevronDown
                                size={20}
                                className={`mt-1 shrink-0 text-zinc-500 transition-transform duration-300 ${
                                  isOpen ? "rotate-180 text-accent" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen ? (
                                <motion.div
                                  id={`panel-${event.id}`}
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="border-t border-white/5 px-5 pb-6 pt-5 sm:px-6">
                                    <ul className="space-y-3">
                                      {event.details.map((d) => (
                                        <li
                                          key={d}
                                          className="flex gap-3 text-[15px] leading-relaxed text-zinc-300"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                                          />
                                          {d}
                                        </li>
                                      ))}
                                    </ul>
                                    {event.link ? (
                                      <a
                                        href={event.link.href}
                                        className="mt-5 inline-block text-sm font-medium text-accent hover:text-accent-soft"
                                      >
                                        {event.link.label} →
                                      </a>
                                    ) : null}
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </div>
                        </Reveal>
                      </li>
                    );
                  })}
                </Fragment>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
