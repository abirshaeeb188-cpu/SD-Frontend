import { Phone, ChevronDown } from "lucide-react";
import heroImg from "../assets/hero-yard.jpg";
import { site, whatsappHref } from "../lib/site";
import { WhatsAppIcon } from "./Navbar";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${45 + ((i * 17) % 50)}%`,
  size: 2 + (i % 4),
  duration: 9 + (i % 7) * 2,
  delay: (i % 9) * 1.3,
}));

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Dumper truck and wheel loader handling sand and gravel at an aggregate yard near Abu Dhabi"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,var(--navy-deep)_8%,color-mix(in_oklab,var(--navy)_88%,transparent)_45%,color-mix(in_oklab,var(--navy-deep)_55%,transparent)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_10%_100%,color-mix(in_oklab,var(--navy-deep)_75%,transparent),transparent_70%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="dust-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-gold uppercase backdrop-blur-sm">
            Abu Dhabi • Mussafah • UAE
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-[4.1rem]">
            Reliable Sand &amp; Gravel <span className="text-gradient-gold">Supplier</span> in Abu
            Dhabi
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            High-quality sand, gravel, aggregates and construction materials with fast and reliable
            delivery across Abu Dhabi and the UAE.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="size-5" /> WhatsApp Us
            </a>
          </div>

          <p className="mt-9 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 backdrop-blur-sm">
            <span>24/7 Service</span>
            <span className="text-gold">•</span>
            <span>Fast Delivery</span>
            <span className="text-gold">•</span>
            <span>Quality Materials</span>
          </p>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 transition-colors hover:text-gold lg:block"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  );
}
