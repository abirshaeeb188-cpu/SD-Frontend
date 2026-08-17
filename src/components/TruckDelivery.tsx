import { ArrowRight } from "lucide-react";
import truckImg from "../assets/truck-delivery.jpg";
import { Reveal } from "./Reveal";

export function TruckDelivery() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={truckImg}
        alt="Loaded tipper truck delivering gravel on a highway near Abu Dhabi"
        width={1920}
        height={1008}
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--navy-deep)_10%,color-mix(in_oklab,var(--navy-deep)_82%,transparent)_50%,color-mix(in_oklab,var(--navy)_35%,transparent)_100%)]" />

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">Transportation</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.7rem] lg:leading-tight">
            Fast &amp; Reliable Material Delivery
          </h2>
          <span className="gold-rule mt-5 block" />
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Our 3-ton dumper trucks and pickup trucks help us deliver construction materials quickly
            and efficiently across Abu Dhabi and nearby areas.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Request Delivery
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
