import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "../lib/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Materials", href: "#materials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Sand Supply", href: "#materials" },
  { label: "Gravel Supply", href: "#materials" },
  { label: "Aggregate Supply", href: "#materials" },
  { label: "Building Materials", href: "#services" },
  { label: "Truck Delivery", href: "#services" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Reliable supplier of sand, gravel, aggregates and construction materials in Abu Dhabi
              and the UAE.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-bold tracking-[0.18em] text-gold uppercase">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our services">
            <h2 className="text-sm font-bold tracking-[0.18em] text-gold uppercase">
              Our Services
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-[0.18em] text-gold uppercase">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Mussafah Industrial Area
                  <br />
                  Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.phoneHref} className="transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          © 2026 Sand and Gravel Concrete Supply. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
