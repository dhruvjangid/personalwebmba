import { BadgeCheck } from "lucide-react";
import { certifications, education, imt } from "@/lib/data";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education & Certifications"
          title={
            <>
              Where I learned, and where I&apos;m <span className="italic text-accent">heading</span>.
            </>
          }
        />

        {/* Forward-looking feature: IMT */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-950 p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="absolute -left-20 bottom-[-6rem] h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
            />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow">Chapter 5 · {imt.period} · Now</p>
                <h3 className="mt-3 font-serif text-4xl text-white sm:text-5xl">{imt.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-zinc-300">{imt.intro}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {imt.focus.map((f) => (
                    <span key={f} className="chip border-accent/30 text-accent">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-3">
                {imt.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] leading-relaxed text-zinc-300"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Academic record */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {education.map((e, i) => {
            const Icon = iconMap[e.icon];
            return (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="glass glass-hover h-full rounded-3xl p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                      <Icon size={20} />
                    </span>
                    <span className="font-serif text-3xl text-white">{e.score}</span>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {e.period}
                  </p>
                  <h4 className="mt-2 font-serif text-2xl text-white">{e.title}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{e.place}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow">Certifications</p>
            <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Building the marketing and strategy toolkit.
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass glass-hover flex h-full flex-col rounded-3xl p-7">
                  <BadgeCheck size={26} className="text-accent" />
                  <h4 className="mt-5 font-serif text-xl leading-snug text-white">{c.title}</h4>
                  <p className="mt-auto pt-6 text-sm text-zinc-400">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
