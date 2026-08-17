import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { site, whatsappHref } from "../lib/site";
import { WhatsAppIcon } from "./Navbar";

export function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-gradient py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 -z-10 size-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)] blur-2xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:leading-tight">
              Need Sand, Gravel or Construction Materials?
            </h2>
            <p className="mt-4 text-base text-white/75">
              Get in touch with our team today for reliable material supply and fast delivery.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-5" aria-hidden="true" /> Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-7 py-4 text-base font-bold text-white transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="size-5" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
