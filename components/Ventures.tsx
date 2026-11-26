"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cosmicWorkflow, ventures, type Venture } from "@/lib/data";
import { iconMap } from "./icons";
import { Editable } from "./Placeholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{title}</h4>
      <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-zinc-300">{children}</div>
    </div>
  );
}

function VentureModal({ venture, onClose }: { venture: Venture; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const Icon = iconMap[venture.icon];

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${venture.id}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 p-6 shadow-2xl sm:rounded-3xl sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-accent hover:text-white"
        >
          <X size={18} />
        </button>

        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
          <Icon size={22} />
        </span>
        <p className="eyebrow mt-5">{venture.kind}</p>
        <h3 id={`modal-${venture.id}`} className="mt-2 font-serif text-4xl text-white">
          {venture.name}
        </h3>
        <p className="mt-1 text-sm text-zinc-500">{venture.period}</p>
        <p className="mt-5 text-lg leading-relaxed text-zinc-300">{venture.story}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {venture.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-serif text-3xl text-white">{m.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <Block title="My contribution">
            <ul className="space-y-2">
              {venture.contribution.map((c) => (
                <li key={c} className="flex gap-3">
                  <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                  <Editable text={c} />
                </li>
              ))}
            </ul>
          </Block>
          <Block title="The challenge">
            <p>
              <Editable text={venture.challenge} />
            </p>
          </Block>
          <Block title="Outcomes">
            <ul className="space-y-2">
              {venture.outcome.map((o) => (
                <li key={o} className="flex gap-3">
                  <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                  <Editable text={o} />
                </li>
              ))}
            </ul>
          </Block>
          <Block title="What I learned">
            <div className="flex flex-wrap gap-2">
              {venture.learning.map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </Block>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CosmicWorkflow() {
  return (
    <Reveal className="mt-16">
      <div className="glass rounded-3xl p-6 sm:p-10">
        <p className="eyebrow">How CosmicDesigner worked</p>
        <h3 className="mt-3 font-serif text-3xl text-white">From idea to revenue, six steps.</h3>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {cosmicWorkflow.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-start gap-3 lg:items-center lg:text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  <Icon size={22} />
                </span>
                {i < cosmicWorkflow.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-16 top-7 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-accent/50 to-transparent lg:block"
                  />
                ) : null}
                <span className="text-xs text-zinc-500">0{i + 1}</span>
                <span className="-mt-2 text-sm font-medium text-white">{step.label}</span>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}

export function Ventures() {
  const [selected, setSelected] = useState<Venture | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="ventures" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[420px] max-w-3xl rounded-full bg-accent/[0.07] blur-[140px]"
      />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Entrepreneurial Ventures"
          title={
            <>
              Not projects. <span className="italic text-accent">Business experiments.</span>
            </>
          }
          lead="Each one taught me something a classroom couldn't: how to sell, how to lead, how to be responsible for an outcome. Open a card for the full story."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {ventures.map((v, i) => {
            const Icon = iconMap[v.icon];
            return (
              <Reveal key={v.id} delay={i * 0.08}>
                <motion.button
                  type="button"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  onClick={() => setSelected(v)}
                  aria-haspopup="dialog"
                  className="glass glass-hover group flex h-full w-full flex-col rounded-3xl p-7 text-left"
                >
                  <span className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-ink-950">
                      <Icon size={22} />
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-zinc-600 transition group-hover:text-accent"
                    />
                  </span>
                  <span className="mt-6 text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {v.kind}
                  </span>
                  <span className="mt-2 font-serif text-3xl text-white">{v.name}</span>
                  <span className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                    {v.tagline}
                  </span>
                  <span className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                    {v.metrics.map((m) => (
                      <span key={m.label}>
                        <span className="block font-serif text-2xl text-white">{m.value}</span>
                        <span className="block text-xs text-zinc-500">{m.label}</span>
                      </span>
                    ))}
                  </span>
                  <span className="mt-6 text-sm font-medium text-accent">Explore the story →</span>
                </motion.button>
              </Reveal>
            );
          })}
        </div>

        <CosmicWorkflow />
      </div>

      <AnimatePresence>
        {selected ? <VentureModal venture={selected} onClose={close} /> : null}
      </AnimatePresence>
    </section>
  );
}
