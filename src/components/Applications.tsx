import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import residential from "../assets/app-residential.jpg";
import commercial from "../assets/app-commercial.jpg";
import industrial from "../assets/app-industrial.jpg";
import roadbase from "../assets/mat-roadbase.jpg";
import landscaping from "../assets/app-landscaping.jpg";
import foundations from "../assets/app-foundations.jpg";
import concrete from "../assets/app-concrete.jpg";
import infrastructure from "../assets/app-infrastructure.jpg";

const applications = [
  { title: "Residential Construction", image: residential, alt: "Residential villa under construction" },
  { title: "Commercial Projects", image: commercial, alt: "Commercial tower under construction with cranes" },
  { title: "Industrial Projects", image: industrial, alt: "Industrial warehouse steel frame construction site" },
  { title: "Road Construction", image: roadbase, alt: "Roller compacting road base material" },
  { title: "Landscaping", image: landscaping, alt: "Decorative gravel and sand landscaping" },
  { title: "Foundations", image: foundations, alt: "Concrete foundation with sand fill" },
  { title: "Concrete Production", image: concrete, alt: "Concrete being poured from a mixer truck chute" },
  { title: "Infrastructure Projects", image: infrastructure, alt: "Highway and bridge infrastructure construction" },
];

export function Applications() {
  return (
    <section className="bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Applications"
          title="Where Our Materials Are Used"
          description="Our sand, gravel and aggregates support projects from small residential work to large infrastructure sites."
          tone="dark"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 70}>
              <article className="group relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10 transition-shadow hover:ring-gold/50">
                <img
                  src={a.image}
                  alt={a.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_oklab,var(--navy-deep)_88%,transparent))]" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-bold text-white transition-colors group-hover:text-gold">
                  {a.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
