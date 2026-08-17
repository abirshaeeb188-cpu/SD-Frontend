import { cn } from "../lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-bold tracking-[0.22em] text-gold-deep uppercase">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[2.7rem] lg:leading-tight",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <span className={cn("gold-rule mt-5 block", align === "center" && "mx-auto")} />
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
