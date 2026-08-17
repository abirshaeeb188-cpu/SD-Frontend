import { Layers, Mountain, Building2, Truck, PackageOpen, Forklift } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import sandGravelImg from "../assets/black-sand.jpg";
import aggregateSupplyImg from "../assets/recycle-road.jpg";
import buildingMaterialImg from "../assets/gutch-material.jpg";
import loadingUnloadingImg from "../assets/white-sand-dubai.jpg";
import Truck1 from "../assets/truck-1.jpeg";
import Truck2 from "../assets/truck-2.jpeg";

const services = [
  {
    icon: Mountain,
    title: "Sand & Gravel Supply",
    description: "Reliable supply of quality construction sand and gravel.",
    image: sandGravelImg,
  },
  {
    icon: Layers,
    title: "Aggregate Supply",
    description: "Aggregates suitable for concrete, roads and construction projects.",
    image: aggregateSupplyImg,
  },
  {
    icon: Building2,
    title: "Building Material Supply",
    description: "Construction materials for residential, commercial and industrial projects.",
    image: buildingMaterialImg,
  },
  {
    icon: Truck,
    title: "3 Ton Dumper Truck",
    description: "Efficient transportation for construction materials.",
    image: Truck1,
  },
  {
    icon: PackageOpen,
    title: "3 Ton Pickup Truck",
    description: "Fast solution for smaller orders and quick deliveries.",
    image: Truck2,
  },
  {
    icon: Forklift,
    title: "Loading & Unloading",
    description: "Professional loading and unloading support.",
    image: loadingUnloadingImg,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Our Services"
          description="From material supply to transport and site handling, we cover the full delivery chain."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="card-lift group relative h-full overflow-hidden rounded-lg border border-border bg-card">
                {s.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={900}
                      height={560}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,color-mix(in_oklab,var(--navy-deep)_80%,transparent))]" />
                    <span className="absolute bottom-4 left-4 inline-flex size-14 items-center justify-center rounded-md bg-navy-gradient ring-1 ring-gold/30">
                      <s.icon className="size-6 text-gold" aria-hidden="true" />
                    </span>
                  </div>
                ) : (
                  <div className="absolute -top-16 -right-16 size-40 rounded-full bg-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                )}
                <div className="relative p-8">
                  {!s.image && (
                    <span className="relative -mt-2 mb-6 inline-flex size-14 items-center justify-center rounded-md bg-navy-gradient ring-1 ring-gold/30">
                      <s.icon className="size-6 text-gold" aria-hidden="true" />
                    </span>
                  )}
                  <h3 className="relative text-xl font-bold text-navy">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
