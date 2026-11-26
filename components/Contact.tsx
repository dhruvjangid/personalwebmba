import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { contactItems } from "./ContactLinks";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-5 pb-16 pt-28 sm:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-12 md:py-24">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
            />
            <div className="relative">
              <p className="eyebrow">Let&apos;s Connect</p>
              <h2 className="section-title mx-auto mt-4 max-w-3xl">
                The next chapter is <span className="italic text-accent">still being written</span>.
              </h2>
              <p className="section-lead mx-auto">
                If you&apos;re hiring for marketing, business development, consulting, strategy or
                management, or just want to talk about the journey, I&apos;d love to hear from you.
              </p>

              <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const body = (
                    <>
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl ${
                          item.href
                            ? "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-ink-950"
                            : "bg-white/5 text-zinc-600"
                        } transition`}
                      >
                        <Icon size={22} />
                      </span>
                      <span className="mt-4 block text-base font-medium text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-all text-xs text-zinc-500">{item.hint}</span>
                      {item.href ? (
                        <ArrowUpRight
                          size={16}
                          className="absolute right-4 top-4 text-zinc-600 transition group-hover:text-accent"
                        />
                      ) : null}
                    </>
                  );

                  return (
                    <li key={item.key}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          {...(item.download ? { download: item.download } : {})}
                          className="glass glass-hover group relative block h-full rounded-3xl p-6 text-left"
                        >
                          {body}
                        </a>
                      ) : (
                        <div
                          aria-disabled="true"
                          title="Not configured yet. Add it in your .env.local file."
                          className="relative block h-full cursor-not-allowed rounded-3xl border border-dashed border-white/10 p-6 text-left opacity-70"
                        >
                          {body}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS and Framer
            Motion.
          </p>
          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
