import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappHref } from "../lib/site";
import { SectionHeading } from "./SectionHeading";
import aggregate34 from "../assets/aggregate-3-4.jpg";
import aggregate38 from "../assets/aggregate38.jpeg";
import aggregate316 from "../assets/aggregate-3-16.jpg";
import aggregate318 from "../assets/aggregate-3-18.webp";
import aggregate2040 from "../assets/aggergate-20-40.webp";
import crushedAggregate from "../assets/aggergate34.jpeg";
import blackSand from "../assets/BlackSandPure.jpeg";
import gutchMaterial from "../assets/Gutuchmaterial.jpeg";
import hubailiSand from "../assets/hubaili-sand.jpg";
import roadBase from "../assets/road-base-fujairah.jpg";
import crushedRoadBase from "../assets/roadbase.jpeg";
import sevhanSand from "../assets/SevhanSand.jpeg";
import whiteSand from "../assets/whiteSand.jpeg";

const materials = [
  {
    name: "Aggregate 3/4",
    description: "3/4 inch graded aggregate for concrete mixing and heavy-duty construction.",
    image: aggregate34,
    alt: "Aggregate 3/4 stockpile",
  },
  {
    name: "Aggregate 3/8",
    description: "3/8 inch aggregate suitable for concrete production and finishing work.",
    image: aggregate38,
    alt: "Aggregate 3/8 close up texture",
  },
  {
    name: "Aggregate 3/16",
    description: "3/16 inch fine aggregate for concrete, plastering and construction mixes.",
    image: aggregate316,
    alt: "Aggregate 3/16 stockpile",
  },
  {
    name: "Aggregate 3/18",
    description: "3/18 aggregate grade for construction and road base applications.",
    image: aggregate318,
    alt: "Aggregate 3/18 stockpile",
  },
  {
    name: "Aggregate 20-40",
    description: "20-40mm coarse aggregate for road base, drainage and heavy construction.",
    image: aggregate2040,
    alt: "Aggregate 20-40mm stockpile at sunset",
  },
  {
    name: "Crushed Aggregate",
    description: "Crushed stone aggregate for construction, roads and infrastructure projects.",
    image: crushedAggregate,
    alt: "Crushed aggregate stockpile",
  },
  {
    name: "Black Sand",
    description: "Quality black sand for construction and specialised applications.",
    image: blackSand,
    alt: "Black sand stockpile",
  },
  {
    name: "Gutch Material",
    description: "Reliable gutch material for base filling and construction projects.",
    image: gutchMaterial,
    alt: "Gutch material stockpile",
  },
  {
    name: "Hubaili Sand",
    description: "Hubaili sand suitable for filling, leveling and construction work.",
    image: hubailiSand,
    alt: "Hubaili sand stockpile",
  },
  {
    name: "Road Base",
    description: "Reliable road base material for road construction and infrastructure projects.",
    image: roadBase,
    alt: "Road base material stockpile",
  },
  {
    name: "Crushed Road Base",
    description: "Compacted crushed road base material for durable road foundations.",
    image: crushedRoadBase,
    alt: "Crushed road base stockpile",
  },
  {
    name: "Sevhan Sand",
    description: "Sevhan sand for construction, filling and landscaping requirements.",
    image: sevhanSand,
    alt: "Sevhan sand stockpile",
  },
  {
    name: "White Sand",
    description: "Clean white sand for construction, plastering and finishing work.",
    image: whiteSand,
    alt: "White sand stockpile",
  },
];

export function Materials() {
  return (
    <section id="materials" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Materials"
          title="Construction Materials We Supply"
          description="Graded sand, gravel and aggregates prepared and delivered for projects across Abu Dhabi and the UAE."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 80}>
              <article className="card-lift group h-full overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.alt}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,color-mix(in_oklab,var(--navy-deep)_78%,transparent))]" />
                </div>
                <div className="relative p-6">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                  <h3 className="text-lg font-bold text-navy">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-deep transition-colors hover:text-navy"
                  >
                    Enquire
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="sr-only">about {m.name}</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
