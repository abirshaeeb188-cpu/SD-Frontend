import { Gem, Timer, Users, BadgeDollarSign, Truck, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: Gem,
    title: "High Quality Materials",
    description: "Premium sand, gravel and aggregates suitable for construction applications.",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    description: "Reliable delivery service for small and large construction projects.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Professional service for contractors, builders and homeowners.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description: "Competitive pricing for construction material supply.",
  },
  {
    icon: Truck,
    title: "Flexible Transportation",
    description: "3-ton dumper and pickup truck options.",
  },
  {
    icon: Headphones,
    title: "24/7 Service",
    description: "Customers can contact us whenever they need assistance.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="Why Choose Our Sand & Gravel Supply Service?"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <article className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-navy">
                <f.icon
                  className="size-7 text-gold-deep transition-colors group-hover:text-gold"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 text-lg font-bold text-navy transition-colors group-hover:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70">
                  {f.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
