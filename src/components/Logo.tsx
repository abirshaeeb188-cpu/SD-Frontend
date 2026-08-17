import { cn } from "../lib/utils";
import logo from "../assets/logo.png";

export function Logo({
  className,
  variant = "dark",
  compact = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const title = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/65" : "text-muted-foreground";

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative inline-flex size-14 shrink-0 items-center justify-center rounded-md bg-navy-gradient ring-1 ring-gold/40 sm:size-12">
        <img src={logo} alt="SAND AND GRAVEL CONCRETE SUPPLY logo" />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate font-extrabold tracking-tight",
            compact ? "text-[0.95rem]" : "text-base sm:text-[1.05rem]",
            title,
          )}
        >
          SAND AND GRAVEL
        </span>
        <span
          className={cn(
            "mt-1 truncate text-[0.62rem] font-semibold tracking-[0.28em] uppercase sm:text-[0.66rem]",
            sub,
          )}
        >
          Concrete Supply
        </span>
      </span>
    </span>
  );
}
