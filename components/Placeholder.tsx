import { isPlaceholder } from "@/lib/data";

/** Renders text normally, or as a dashed "fill me in" marker if it is a [placeholder]. */
export function Editable({ text, className = "" }: { text: string; className?: string }) {
  if (isPlaceholder(text)) {
    return (
      <span
        className={`rounded-md border border-dashed border-accent/40 bg-accent/5 px-2 py-0.5 italic text-accent/80 ${className}`}
        title="Editable placeholder: update this in lib/data.ts"
      >
        {text}
      </span>
    );
  }
  return <span className={className}>{text}</span>;
}
