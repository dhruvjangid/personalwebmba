import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, lead, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {lead ? (
        <p className={`section-lead ${align === "center" ? "mx-auto" : ""}`}>{lead}</p>
      ) : null}
    </Reveal>
  );
}
