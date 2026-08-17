import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const areas = [
  "Abu Dhabi",
  "Mussafah",
  "Industrial Area",
  "Abu Dhabi Industrial City",
  "Nearby UAE locations",
];

export function ServiceAreas() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Coverage"
              title="Serving Abu Dhabi & Surrounding Areas"
              description="We are based in the Mussafah Industrial Area and supply construction materials across Abu Dhabi and nearby locations. Contact us to confirm delivery to your site."
              align="left"
            />
            <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2.5 text-sm font-semibold text-navy"
                >
                  <MapPin className="size-4 text-gold-deep" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-lg bg-navy-gradient p-8 ring-1 ring-gold/20 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(var(--gold)_1px,transparent_1px),linear-gradient(90deg,var(--gold)_1px,transparent_1px)] [background-size:34px_34px]"
              />
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
                  Base of operations
                </p>
                <p className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                  Mussafah Industrial Area
                </p>
                <p className="mt-2 text-white/70">Abu Dhabi, United Arab Emirates</p>

                <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  {areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
