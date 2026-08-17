import { Clock, Truck, Zap, MapPin, PackageCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Clock, value: "24/7", label: "Service" },
  { icon: Zap, value: "Fast", label: "Delivery" },
  { icon: Truck, value: "3 Ton", label: "Dumper Trucks" },
  { icon: PackageCheck, value: "3 Ton", label: "Pickup Trucks" },
  { icon: MapPin, value: "UAE", label: "Coverage" },
];

export function Stats() {
  return (
    <section id="stats" className="relative z-10 bg-navy-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 divide-white/10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 70}>
              <div className="flex flex-col items-center gap-2 px-4 py-8 text-center lg:py-10">
                <s.icon className="size-6 text-gold" aria-hidden="true" />
                <span className="text-2xl font-extrabold text-white lg:text-3xl">{s.value}</span>
                <span className="text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
