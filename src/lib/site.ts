export const site = {
  name: "SAND AND GRAVEL CONCRETE SUPPLY",
  shortName: "Sand and Gravel Concrete Supply",
  phone: "0526167981",
  phoneHref: "tel:+971526167981",
  whatsappNumber: "971526167981",
  email: "meerbolach0952684@gmail.com",
  address: "Mussafah Industrial Area, Abu Dhabi, United Arab Emirates",
  hours: "24/7 Service",
} as const;

export const whatsappMessage =
  "Hello, I would like to inquire about sand, gravel and construction materials.";

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Contact Us", href: "/#contact" },
] as const;
