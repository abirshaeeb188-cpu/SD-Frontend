import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { no: "01", title: "Contact Us", description: "Tell us what materials you need." },
  { no: "02", title: "Get a Quote", description: "Discuss quantity, requirements and delivery." },
  {
    no: "03",
    title: "We Prepare Your Order",
    description: "Materials are prepared for transportation.",
  },
  { no: "04", title: "Fast Delivery", description: "Your materials are delivered to your location." },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="How It Works" />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-7 right-0 left-0 hidden h-px bg-[linear-gradient(90deg,transparent,var(--gold),transparent)] lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 110} className="relative">
                <div className="flex gap-5 lg:block">
                  <div className="relative flex flex-col items-center lg:block">
                    <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full bg-navy-gradient text-base font-extrabold text-gold ring-1 ring-gold/40">
                      {s.no}
                    </span>
                    {i < steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="mt-2 w-px flex-1 bg-[linear-gradient(180deg,var(--gold),transparent)] lg:hidden"
                      />
                    ) : null}
                  </div>
                  <div className="pb-8 lg:pb-0">
                    <h3 className="mt-0 text-lg font-bold text-navy lg:mt-6">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
