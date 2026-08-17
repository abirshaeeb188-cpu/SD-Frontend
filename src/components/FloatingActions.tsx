import { Phone } from "lucide-react";
import { site, whatsappHref } from "../lib/site";
import { WhatsAppIcon } from "./Navbar";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        className="inline-flex size-13 items-center justify-center rounded-full bg-navy text-white shadow-elegant ring-1 ring-gold/40 transition-transform hover:-translate-y-0.5 sm:size-14"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:-translate-y-0.5 sm:size-14"
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </div>
  );
}
