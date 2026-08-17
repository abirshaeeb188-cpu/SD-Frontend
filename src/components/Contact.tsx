import { useState, type FormEvent } from "react";
import { Clock, Loader2, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "../lib/site";
import { cn } from "../lib/utils";
import { apiSendContactMessage, ApiError } from "../lib/api";

type Fields = {
  name: string;
  email: string;
  phone: string;
  material: string;
  message: string;
};

const empty: Fields = { name: "", email: "", phone: "", material: "", message: "" };

const materialOptions = [
  "Building Sand",
  "Gravel",
  "Aggregates",
  "Backfilling Sand",
  "Black Sand",
  "Washed Sand",
  "Road Base Materials",
  "Crushed Aggregates",
  "Other / Not sure",
];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 7)
    errors.phone = "Please enter a valid phone number.";
  if (!values.material) errors.material = "Please select the material you need.";
  if (values.message.trim().length < 10)
    errors.message = "Please add a few more details (min. 10 characters).";
  return errors;
}

const details = [
  { icon: MapPin, label: "Location", value: site.address },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Clock, label: "Service", value: site.hours },
];

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      toast.error("Please check the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      await apiSendContactMessage(values);
      setSent(true);
      setValues(empty);
      toast.success("Message sent — we'll get back to you soon.");
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : "Couldn't send your message. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (key: keyof Fields) =>
    cn(
      "w-full rounded-md border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30",
      errors[key] ? "border-destructive" : "border-border",
    );

  return (
    <section id="contact" className="bg-secondary py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="Tell us what you need and we will get back to you with pricing and delivery details."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal>
            <div className="h-full rounded-lg bg-navy-gradient p-6 ring-1 ring-gold/20 sm:p-8 lg:p-10">
              <h3 className="text-lg font-bold text-white sm:text-xl">Contact details</h3>
              <span className="gold-rule mt-4 block" />
              <ul className="mt-6 space-y-5 sm:mt-8 sm:space-y-7">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-3 sm:gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-white/5 sm:size-11">
                      <d.icon className="size-4 text-gold sm:size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold tracking-[0.18em] text-white/50 uppercase">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-1 block break-words text-sm font-semibold text-white transition-colors hover:text-gold sm:text-base"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 break-words text-sm font-semibold text-white sm:text-base">
                          {d.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-lg border border-border bg-card p-5 sm:p-8 lg:p-10"
            >
              {sent ? (
                <p className="mb-6 flex items-start gap-3 rounded-md border border-gold/40 bg-gold/10 p-4 text-sm font-semibold text-navy">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                  Thank you — your message has been emailed to us. We'll get back to you shortly, or
                  call us on {site.phone}.
                </p>
              ) : null}

              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-navy">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => set("name")(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your full name"
                    className={cn("mt-2", inputClass("name"))}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-xs font-medium text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-navy">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => set("email")(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                    className={cn("mt-2", inputClass("email"))}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-xs font-medium text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-navy">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    placeholder="05X XXX XXXX"
                    className={cn("mt-2", inputClass("phone"))}
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="mt-1.5 text-xs font-medium text-destructive">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="material" className="text-sm font-semibold text-navy">
                    Material Required
                  </label>
                  <select
                    id="material"
                    name="material"
                    value={values.material}
                    onChange={(e) => set("material")(e.target.value)}
                    aria-invalid={Boolean(errors.material)}
                    aria-describedby={errors.material ? "material-error" : undefined}
                    className={cn("mt-2", inputClass("material"))}
                  >
                    <option value="">Select a material</option>
                    {materialOptions.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.material ? (
                    <p id="material-error" className="mt-1.5 text-xs font-medium text-destructive">
                      {errors.material}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => set("message")(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Quantity, delivery location and required date"
                    className={cn("mt-2 resize-y", inputClass("message"))}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs font-medium text-destructive">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-navy-deep sm:mt-8 sm:w-auto sm:py-4",
                  loading && "opacity-70",
                )}
              >
                {loading ? (
                  <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="size-5" aria-hidden="true" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
