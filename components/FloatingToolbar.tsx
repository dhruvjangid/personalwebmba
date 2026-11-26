"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { contactItems } from "./ContactLinks";

/**
 * Floating contact toolbar. Appears once the visitor leaves the hero and
 * tucks away when the full contact section is on screen.
 */
export function FloatingToolbar() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    let observer: IntersectionObserver | undefined;
    if (contact) {
      observer = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), {
        threshold: 0.25,
      });
      observer.observe(contact);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const show = pastHero && !atContact;

  return (
    <AnimatePresence>
      {show ? (
        <motion.nav
          aria-label="Quick contact"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="glass fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full p-1.5 shadow-2xl shadow-black/50 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2"
        >
          <ul className="flex items-center gap-1 md:flex-col">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const common =
                "group relative grid h-11 w-11 place-items-center rounded-full transition";
              return (
                <li key={item.key}>
                  {item.href ? (
                    <a
                      href={item.href}
                      aria-label={item.label}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(item.download ? { download: item.download } : {})}
                      className={`${common} text-zinc-300 hover:bg-accent hover:text-ink-950`}
                    >
                      <Icon size={18} />
                      <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-lg bg-ink-700 px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:opacity-100 md:block">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <span
                      aria-label={`${item.label} (not configured yet)`}
                      aria-disabled="true"
                      title={`${item.label}: not configured yet`}
                      className={`${common} cursor-not-allowed text-zinc-600`}
                    >
                      <Icon size={18} />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
