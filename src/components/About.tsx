import { ArrowRight, Check } from "lucide-react";
import aboutImg from "../assets/about-yard.jpg";
import { Reveal } from "./Reveal";

const supplies = [
  "Sand",
  "Gravel",
  "Aggregates",
  "Building materials",
  "Construction materials",
];

const areas = ["Abu Dhabi", "Mussafah", "Industrial areas", "Surrounding UAE locations"];

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="absolute -top-5 -left-5 hidden size-32 rounded-md border-2 border-gold/40 lg:block" />
          <img
            src={aboutImg}
            alt="Wheel loader filling building sand at a construction material depot"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-elegant"
          />
          <div className="absolute right-4 -bottom-6 rounded-md bg-navy-gradient px-6 py-4 ring-1 ring-gold/30 lg:right-8">
            <p className="text-2xl font-extrabold text-gold">24/7</p>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
              Service
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-bold tracking-[0.22em] text-gold-deep uppercase">About Us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Your Reliable Construction Material Supplier in Abu Dhabi
            </h2>
            <span className="gold-rule mt-5 block" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              SAND AND GRAVEL CONCRETE SUPPLY supplies sand, gravel, aggregates and building
              materials for construction projects of every size. We focus on quality materials,
              honest pricing and delivery you can plan around.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold tracking-[0.16em] text-navy uppercase">We supply</h3>
              <ul className="mt-3 space-y-2">
                {supplies.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-[0.16em] text-navy uppercase">
                Available in
              </h3>
              <ul className="mt-3 space-y-2">
                {areas.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted-foreground">
              Reliability, quality, affordable pricing and timely delivery are the reasons
              contractors, builders and homeowners keep calling us back.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-deep"
            >
              Learn More
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
