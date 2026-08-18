import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as whatsappHref, l as apiSendContactMessage, o as ApiError, r as site } from "./router-CyTaXnVW.mjs";
import { n as cn } from "./Logo-0UU_F3KX.mjs";
import { C as LoaderCircle, D as Gem, E as Headphones, F as Building2, I as BadgeDollarSign, L as ArrowUpRight, N as ChevronDown, O as Forklift, P as Check, R as ArrowRight, a as Truck, d as Phone, f as PackageOpen, j as CircleCheck, k as Clock, l as Send, m as Mountain, o as Timer, p as PackageCheck, r as Users, t as Zap, v as MapPin, w as Layers, y as Mail } from "../_libs/lucide-react.mjs";
import { a as Navbar, i as Footer, o as WhatsAppIcon, r as FloatingActions } from "./FloatingActions-DFmfGgMA.mjs";
import { n as SectionHeading, t as Reveal } from "./SectionHeading-URAispR5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CMQOKmbt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_yard_default = "/assets/hero-yard-waR-w8-h.jpg";
var particles = Array.from({ length: 18 }, (_, i) => ({
	left: `${i * 37 % 100}%`,
	top: `${45 + i * 17 % 50}%`,
	size: 2 + i % 4,
	duration: 9 + i % 7 * 2,
	delay: i % 9 * 1.3
}));
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate flex min-h-[92vh] items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_yard_default,
				alt: "Dumper truck and wheel loader handling sand and gravel at an aggregate yard near Abu Dhabi",
				width: 1920,
				height: 1088,
				fetchPriority: "high",
				className: "absolute inset-0 -z-20 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(105deg,var(--navy-deep)_8%,color-mix(in_oklab,var(--navy)_88%,transparent)_45%,color-mix(in_oklab,var(--navy-deep)_55%,transparent)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_10%_100%,color-mix(in_oklab,var(--navy-deep)_75%,transparent),transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 -z-10",
				children: particles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dust-particle",
					style: {
						left: p.left,
						top: p.top,
						width: p.size,
						height: p.size,
						animationDuration: `${p.duration}s`,
						animationDelay: `${p.delay}s`
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] text-gold uppercase backdrop-blur-sm",
							children: "Abu Dhabi • Mussafah • UAE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-[4.1rem]",
							children: [
								"Reliable Sand & Gravel ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "Supplier"
								}),
								" in Abu Dhabi"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg",
							children: "High-quality sand, gravel, aggregates and construction materials with fast and reliable delivery across Abu Dhabi and the UAE."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-5",
									"aria-hidden": "true"
								}), " Call Now"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappHref,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), " WhatsApp Us"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-9 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 backdrop-blur-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "24/7 Service" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fast Delivery" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quality Materials" })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#stats",
				"aria-label": "Scroll to next section",
				className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 transition-colors hover:text-gold lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-7 animate-bounce" })
			})
		]
	});
}
var stats = [
	{
		icon: Clock,
		value: "24/7",
		label: "Service"
	},
	{
		icon: Zap,
		value: "Fast",
		label: "Delivery"
	},
	{
		icon: Truck,
		value: "3 Ton",
		label: "Dumper Trucks"
	},
	{
		icon: PackageCheck,
		value: "3 Ton",
		label: "Pickup Trucks"
	},
	{
		icon: MapPin,
		value: "UAE",
		label: "Coverage"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		className: "relative z-10 bg-navy-gradient",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 divide-white/10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-2 px-4 py-8 text-center lg:py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "size-6 text-gold",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-extrabold text-white lg:text-3xl",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-[0.16em] text-white/60 uppercase",
								children: s.label
							})
						]
					})
				}, s.label))
			})
		})
	});
}
var about_yard_default = "/assets/about-yard-CYWmMssd.jpg";
var supplies = [
	"Sand",
	"Gravel",
	"Aggregates",
	"Building materials",
	"Construction materials"
];
var areas$1 = [
	"Abu Dhabi",
	"Mussafah",
	"Industrial areas",
	"Surrounding UAE locations"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-background py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-5 -left-5 hidden size-32 rounded-md border-2 border-gold/40 lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_yard_default,
						alt: "Wheel loader filling building sand at a construction material depot",
						width: 1200,
						height: 1400,
						loading: "lazy",
						className: "relative aspect-[4/5] w-full rounded-lg object-cover shadow-elegant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-4 -bottom-6 rounded-md bg-navy-gradient px-6 py-4 ring-1 ring-gold/30 lg:right-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-extrabold text-gold",
							children: "24/7"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.18em] text-white/70 uppercase",
							children: "Service"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.22em] text-gold-deep uppercase",
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-extrabold text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-tight",
						children: "Your Reliable Construction Material Supplier in Abu Dhabi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-5 block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-muted-foreground",
						children: "SAND AND GRAVEL CONCRETE SUPPLY supplies sand, gravel, aggregates and building materials for construction projects of every size. We focus on quality materials, honest pricing and delivery you can plan around."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold tracking-[0.16em] text-navy uppercase",
						children: "We supply"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: supplies.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 size-4 shrink-0 text-gold-deep",
								"aria-hidden": "true"
							}), item]
						}, item))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold tracking-[0.16em] text-navy uppercase",
						children: "Available in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: areas$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 size-4 shrink-0 text-gold-deep",
								"aria-hidden": "true"
							}), item]
						}, item))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 160,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted-foreground",
						children: "Reliability, quality, affordable pricing and timely delivery are the reasons contractors, builders and homeowners keep calling us back."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#services",
						className: "mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-deep",
						children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})]
				})
			] })]
		})
	});
}
var materials = [
	{
		name: "Aggregate 3/4",
		description: "3/4 inch graded aggregate for concrete mixing and heavy-duty construction.",
		image: "/assets/aggregate-3-4-wUc2wERM.jpg",
		alt: "Aggregate 3/4 stockpile"
	},
	{
		name: "Aggregate 3/8",
		description: "3/8 inch aggregate suitable for concrete production and finishing work.",
		image: "/assets/aggregate38-DxDD5yVq.jpeg",
		alt: "Aggregate 3/8 close up texture"
	},
	{
		name: "Aggregate 3/16",
		description: "3/16 inch fine aggregate for concrete, plastering and construction mixes.",
		image: "/assets/aggregate-3-16-C9ptlN_J.jpg",
		alt: "Aggregate 3/16 stockpile"
	},
	{
		name: "Aggregate 3/18",
		description: "3/18 aggregate grade for construction and road base applications.",
		image: "/assets/aggregate-3-18-Bod19HgY.webp",
		alt: "Aggregate 3/18 stockpile"
	},
	{
		name: "Aggregate 20-40",
		description: "20-40mm coarse aggregate for road base, drainage and heavy construction.",
		image: "/assets/aggergate-20-40-Dnq6qaEW.webp",
		alt: "Aggregate 20-40mm stockpile at sunset"
	},
	{
		name: "Crushed Aggregate",
		description: "Crushed stone aggregate for construction, roads and infrastructure projects.",
		image: "/assets/aggergate34-DDZ1wM3b.jpeg",
		alt: "Crushed aggregate stockpile"
	},
	{
		name: "Black Sand",
		description: "Quality black sand for construction and specialised applications.",
		image: "/assets/BlackSandPure-CYAy1Hws.jpeg",
		alt: "Black sand stockpile"
	},
	{
		name: "Gutch Material",
		description: "Reliable gutch material for base filling and construction projects.",
		image: "/assets/Gutuchmaterial-BJK_Cr8g.jpeg",
		alt: "Gutch material stockpile"
	},
	{
		name: "Hubaili Sand",
		description: "Hubaili sand suitable for filling, leveling and construction work.",
		image: "/assets/hubaili-sand-D9piOfcU.jpg",
		alt: "Hubaili sand stockpile"
	},
	{
		name: "Road Base",
		description: "Reliable road base material for road construction and infrastructure projects.",
		image: "/assets/road-base-fujairah-DNEdvkIs.jpg",
		alt: "Road base material stockpile"
	},
	{
		name: "Crushed Road Base",
		description: "Compacted crushed road base material for durable road foundations.",
		image: "/assets/roadbase-karmLVC_.jpeg",
		alt: "Crushed road base stockpile"
	},
	{
		name: "Sevhan Sand",
		description: "Sevhan sand for construction, filling and landscaping requirements.",
		image: "/assets/SevhanSand-DwI_EjcX.jpeg",
		alt: "Sevhan sand stockpile"
	},
	{
		name: "White Sand",
		description: "Clean white sand for construction, plastering and finishing work.",
		image: "/assets/whiteSand-DPsUWsQ5.jpeg",
		alt: "White sand stockpile"
	}
];
function Materials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "materials",
		className: "bg-secondary py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Materials",
				title: "Construction Materials We Supply",
				description: "Graded sand, gravel and aggregates prepared and delivered for projects across Abu Dhabi and the UAE."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: materials.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-lift group h-full overflow-hidden rounded-lg border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.image,
								alt: m.alt,
								width: 900,
								height: 700,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,color-mix(in_oklab,var(--navy-deep)_78%,transparent))]" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-navy",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: m.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappHref,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-deep transition-colors hover:text-navy",
									children: [
										"Enquire",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "sr-only",
											children: ["about ", m.name]
										})
									]
								})
							]
						})]
					})
				}, m.name))
			})]
		})
	});
}
var services = [
	{
		icon: Mountain,
		title: "Sand & Gravel Supply",
		description: "Reliable supply of quality construction sand and gravel.",
		image: "/assets/black-sand-Cjdmo4RE.jpg"
	},
	{
		icon: Layers,
		title: "Aggregate Supply",
		description: "Aggregates suitable for concrete, roads and construction projects.",
		image: "/assets/recycle-road-CFDEy-0F.jpg"
	},
	{
		icon: Building2,
		title: "Building Material Supply",
		description: "Construction materials for residential, commercial and industrial projects.",
		image: "/assets/gutch-material-CGHHIvbL.jpg"
	},
	{
		icon: Truck,
		title: "3 Ton Dumper Truck",
		description: "Efficient transportation for construction materials.",
		image: "/assets/truck-1-BiXREajq.jpeg"
	},
	{
		icon: PackageOpen,
		title: "3 Ton Pickup Truck",
		description: "Fast solution for smaller orders and quick deliveries.",
		image: "/assets/truck-2-XDVwFNw0.jpeg"
	},
	{
		icon: Forklift,
		title: "Loading & Unloading",
		description: "Professional loading and unloading support.",
		image: "/assets/white-sand-dubai-KSZfTCSs.jpg"
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-background py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "What we do",
				title: "Our Services",
				description: "From material supply to transport and site handling, we cover the full delivery chain."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-lift group relative h-full overflow-hidden rounded-lg border border-border bg-card",
						children: [s.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.title,
									width: 900,
									height: 560,
									loading: "lazy",
									className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,color-mix(in_oklab,var(--navy-deep)_80%,transparent))]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-4 left-4 inline-flex size-14 items-center justify-center rounded-md bg-navy-gradient ring-1 ring-gold/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "size-6 text-gold",
										"aria-hidden": "true"
									})
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 size-40 rounded-full bg-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-8",
							children: [
								!s.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative -mt-2 mb-6 inline-flex size-14 items-center justify-center rounded-md bg-navy-gradient ring-1 ring-gold/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "size-6 text-gold",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative text-xl font-bold text-navy",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-3 text-sm leading-relaxed text-muted-foreground",
									children: s.description
								})
							]
						})]
					})
				}, s.title))
			})]
		})
	});
}
var truck_delivery_default = "/assets/truck-delivery-Cixm4Kj2.jpg";
function TruckDelivery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: truck_delivery_default,
				alt: "Loaded tipper truck delivering gravel on a highway near Abu Dhabi",
				width: 1920,
				height: 1008,
				loading: "lazy",
				className: "absolute inset-0 -z-20 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--navy-deep)_10%,color-mix(in_oklab,var(--navy-deep)_82%,transparent)_50%,color-mix(in_oklab,var(--navy)_35%,transparent)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.22em] text-gold uppercase",
							children: "Transportation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.7rem] lg:leading-tight",
							children: "Fast & Reliable Material Delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-5 block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-white/80",
							children: "Our 3-ton dumper trucks and pickup trucks help us deliver construction materials quickly and efficiently across Abu Dhabi and nearby areas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "mt-9 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
							children: ["Request Delivery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-5",
								"aria-hidden": "true"
							})]
						})
					]
				})
			})
		]
	});
}
var features = [
	{
		icon: Gem,
		title: "High Quality Materials",
		description: "Premium sand, gravel and aggregates suitable for construction applications."
	},
	{
		icon: Timer,
		title: "Fast Delivery",
		description: "Reliable delivery service for small and large construction projects."
	},
	{
		icon: Users,
		title: "Experienced Team",
		description: "Professional service for contractors, builders and homeowners."
	},
	{
		icon: BadgeDollarSign,
		title: "Affordable Pricing",
		description: "Competitive pricing for construction material supply."
	},
	{
		icon: Truck,
		title: "Flexible Transportation",
		description: "3-ton dumper and pickup truck options."
	},
	{
		icon: Headphones,
		title: "24/7 Service",
		description: "Customers can contact us whenever they need assistance."
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why-us",
		className: "bg-secondary py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why us",
				title: "Why Choose Our Sand & Gravel Supply Service?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full bg-card p-8 transition-colors duration-500 hover:bg-navy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
								className: "size-7 text-gold-deep transition-colors group-hover:text-gold",
								"aria-hidden": "true",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-lg font-bold text-navy transition-colors group-hover:text-white",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70",
								children: f.description
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
var steps = [
	{
		no: "01",
		title: "Contact Us",
		description: "Tell us what materials you need."
	},
	{
		no: "02",
		title: "Get a Quote",
		description: "Discuss quantity, requirements and delivery."
	},
	{
		no: "03",
		title: "We Prepare Your Order",
		description: "Materials are prepared for transportation."
	},
	{
		no: "04",
		title: "Fast Delivery",
		description: "Your materials are delivered to your location."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Process",
				title: "How It Works"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute top-7 right-0 left-0 hidden h-px bg-[linear-gradient(90deg,transparent,var(--gold),transparent)] lg:block"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-10 lg:grid-cols-4 lg:gap-8",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 110,
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-5 lg:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col items-center lg:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10 inline-flex size-14 items-center justify-center rounded-full bg-navy-gradient text-base font-extrabold text-gold ring-1 ring-gold/40",
									children: s.no
								}), i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mt-2 w-px flex-1 bg-[linear-gradient(180deg,var(--gold),transparent)] lg:hidden"
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pb-8 lg:pb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-0 text-lg font-bold text-navy lg:mt-6",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.description
								})]
							})]
						})
					}, s.no))
				})]
			})]
		})
	});
}
var applications = [
	{
		title: "Residential Construction",
		image: "/assets/app-residential-BxDmsbiN.jpg",
		alt: "Residential villa under construction"
	},
	{
		title: "Commercial Projects",
		image: "/assets/app-commercial-C68bH6-a.jpg",
		alt: "Commercial tower under construction with cranes"
	},
	{
		title: "Industrial Projects",
		image: "/assets/app-industrial-DQ-ty5ko.jpg",
		alt: "Industrial warehouse steel frame construction site"
	},
	{
		title: "Road Construction",
		image: "/assets/mat-roadbase-CizOEYxn.jpg",
		alt: "Roller compacting road base material"
	},
	{
		title: "Landscaping",
		image: "/assets/app-landscaping-BZxQa502.jpg",
		alt: "Decorative gravel and sand landscaping"
	},
	{
		title: "Foundations",
		image: "/assets/app-foundations-DRQDKMWR.jpg",
		alt: "Concrete foundation with sand fill"
	},
	{
		title: "Concrete Production",
		image: "/assets/app-concrete-C0DvvqgN.jpg",
		alt: "Concrete being poured from a mixer truck chute"
	},
	{
		title: "Infrastructure Projects",
		image: "/assets/app-infrastructure-HYFgPORB.jpg",
		alt: "Highway and bridge infrastructure construction"
	}
];
function Applications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy-deep py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Applications",
				title: "Where Our Materials Are Used",
				description: "Our sand, gravel and aggregates support projects from small residential work to large infrastructure sites.",
				tone: "dark"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: applications.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10 transition-shadow hover:ring-gold/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.image,
								alt: a.alt,
								width: 900,
								height: 700,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_oklab,var(--navy-deep)_88%,transparent))]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "absolute inset-x-0 bottom-0 p-5 text-base font-bold text-white transition-colors group-hover:text-gold",
								children: a.title
							})
						]
					})
				}, a.title))
			})]
		})
	});
}
var areas = [
	"Abu Dhabi",
	"Mussafah",
	"Industrial Area",
	"Abu Dhabi Industrial City",
	"Nearby UAE locations"
];
function ServiceAreas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Coverage",
					title: "Serving Abu Dhabi & Surrounding Areas",
					description: "We are based in the Mussafah Industrial Area and supply construction materials across Abu Dhabi and nearby locations. Contact us to confirm delivery to your site.",
					align: "left"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-8 flex flex-wrap gap-3",
					children: areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2.5 text-sm font-semibold text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-4 text-gold-deep",
							"aria-hidden": "true"
						}), area]
					}, area))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-lg bg-navy-gradient p-8 ring-1 ring-gold/20 sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "absolute inset-0 opacity-[0.16] [background-image:linear-gradient(var(--gold)_1px,transparent_1px),linear-gradient(90deg,var(--gold)_1px,transparent_1px)] [background-size:34px_34px]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold tracking-[0.22em] text-gold uppercase",
									children: "Base of operations"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-2xl font-extrabold text-white sm:text-3xl",
									children: "Mussafah Industrial Area"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-white/70",
									children: "Abu Dhabi, United Arab Emirates"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 space-y-3 border-t border-white/10 pt-6",
									children: areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3 text-sm text-white/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-1.5 rounded-full bg-gold",
											"aria-hidden": "true"
										}), area]
									}, area))
								})
							]
						})]
					})
				})]
			})
		})
	});
}
function CTABanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-navy-gradient py-20 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_70%)] blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -bottom-40 -left-24 -z-10 size-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)] blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold text-white sm:text-4xl lg:leading-tight",
							children: "Need Sand, Gravel or Construction Materials?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-white/75",
							children: "Get in touch with our team today for reliable material supply and fast delivery."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col gap-3 sm:flex-row lg:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.phoneHref,
							className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-5",
								"aria-hidden": "true"
							}), " Call Now"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappHref,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-7 py-4 text-base font-bold text-white transition-colors hover:border-gold hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), " WhatsApp Us"]
						})]
					})]
				})
			})
		]
	});
}
var empty = {
	name: "",
	email: "",
	phone: "",
	material: "",
	message: ""
};
var materialOptions = [
	"Building Sand",
	"Gravel",
	"Aggregates",
	"Backfilling Sand",
	"Black Sand",
	"Washed Sand",
	"Road Base Materials",
	"Crushed Aggregates",
	"Other / Not sure"
];
function validate(values) {
	const errors = {};
	if (values.name.trim().length < 2) errors.name = "Please enter your name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
	if (values.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
	if (!values.material) errors.material = "Please select the material you need.";
	if (values.message.trim().length < 10) errors.message = "Please add a few more details (min. 10 characters).";
	return errors;
}
var details = [
	{
		icon: MapPin,
		label: "Location",
		value: site.address
	},
	{
		icon: Mail,
		label: "Email",
		value: site.email,
		href: `mailto:${site.email}`
	},
	{
		icon: Phone,
		label: "Phone",
		value: site.phone,
		href: site.phoneHref
	},
	{
		icon: Clock,
		label: "Service",
		value: site.hours
	}
];
function Contact() {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const set = (key) => (value) => {
		setValues((v) => ({
			...v,
			[key]: value
		}));
		if (errors[key]) setErrors((e) => ({
			...e,
			[key]: void 0
		}));
	};
	const onSubmit = async (e) => {
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
			const message = err instanceof ApiError ? err.message : "Couldn't send your message. Please try again.";
			toast.error(message);
		} finally {
			setLoading(false);
		}
	};
	const inputClass = (key) => cn("w-full rounded-md border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30", errors[key] ? "border-destructive" : "border-border");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-secondary py-14 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Get In Touch",
				description: "Tell us what you need and we will get back to you with pricing and delivery details."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-lg bg-navy-gradient p-6 ring-1 ring-gold/20 sm:p-8 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-white sm:text-xl",
							children: "Contact details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-4 block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-5 sm:mt-8 sm:space-y-7",
							children: details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-white/5 sm:size-11",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, {
										className: "size-4 text-gold sm:size-5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold tracking-[0.18em] text-white/50 uppercase",
										children: d.label
									}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: d.href,
										className: "mt-1 block break-words text-sm font-semibold text-white transition-colors hover:text-gold sm:text-base",
										children: d.value
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 break-words text-sm font-semibold text-white sm:text-base",
										children: d.value
									})]
								})]
							}, d.label))
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						noValidate: true,
						className: "rounded-lg border border-border bg-card p-5 sm:p-8 lg:p-10",
						children: [
							sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-6 flex items-start gap-3 rounded-md border border-gold/40 bg-gold/10 p-4 text-sm font-semibold text-navy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-gold-deep" }),
									"Thank you — your message has been emailed to us. We'll get back to you shortly, or call us on ",
									site.phone,
									"."
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "name",
											className: "text-sm font-semibold text-navy",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "name",
											name: "name",
											autoComplete: "name",
											value: values.name,
											onChange: (e) => set("name")(e.target.value),
											"aria-invalid": Boolean(errors.name),
											"aria-describedby": errors.name ? "name-error" : void 0,
											placeholder: "Your full name",
											className: cn("mt-2", inputClass("name"))
										}),
										errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "name-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.name
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "email",
											className: "text-sm font-semibold text-navy",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											name: "email",
											type: "email",
											autoComplete: "email",
											value: values.email,
											onChange: (e) => set("email")(e.target.value),
											"aria-invalid": Boolean(errors.email),
											"aria-describedby": errors.email ? "email-error" : void 0,
											placeholder: "you@example.com",
											className: cn("mt-2", inputClass("email"))
										}),
										errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "email-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.email
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "phone",
											className: "text-sm font-semibold text-navy",
											children: "Phone"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone",
											name: "phone",
											type: "tel",
											inputMode: "tel",
											autoComplete: "tel",
											value: values.phone,
											onChange: (e) => set("phone")(e.target.value),
											"aria-invalid": Boolean(errors.phone),
											"aria-describedby": errors.phone ? "phone-error" : void 0,
											placeholder: "05X XXX XXXX",
											className: cn("mt-2", inputClass("phone"))
										}),
										errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "phone-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.phone
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "material",
											className: "text-sm font-semibold text-navy",
											children: "Material Required"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "material",
											name: "material",
											value: values.material,
											onChange: (e) => set("material")(e.target.value),
											"aria-invalid": Boolean(errors.material),
											"aria-describedby": errors.material ? "material-error" : void 0,
											className: cn("mt-2", inputClass("material")),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Select a material"
											}), materialOptions.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: m,
												children: m
											}, m))]
										}),
										errors.material ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "material-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.material
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "message",
												className: "text-sm font-semibold text-navy",
												children: "Message"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												id: "message",
												name: "message",
												rows: 5,
												value: values.message,
												onChange: (e) => set("message")(e.target.value),
												"aria-invalid": Boolean(errors.message),
												"aria-describedby": errors.message ? "message-error" : void 0,
												placeholder: "Quantity, delivery location and required date",
												className: cn("mt-2 resize-y", inputClass("message"))
											}),
											errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												id: "message-error",
												className: "mt-1.5 text-xs font-medium text-destructive",
												children: errors.message
											}) : null
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: cn("mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-navy-deep sm:mt-8 sm:w-auto sm:py-4", loading && "opacity-70"),
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "size-5 animate-spin",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
									className: "size-5",
									"aria-hidden": "true"
								}), loading ? "Sending..." : "Send Message"]
							})
						]
					})
				})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Materials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruckDelivery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Applications, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceAreas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
	] });
}
//#endregion
export { Index as component };
