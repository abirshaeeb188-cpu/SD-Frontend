import { r as __toESM } from "../_runtime.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime, n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as useAuth, i as whatsappHref, n as navLinks, r as site } from "./router-CyTaXnVW.mjs";
import { n as cn, t as Logo } from "./Logo-0UU_F3KX.mjs";
import { A as Circle, M as ChevronRight, P as Check, _ as Menu, c as Settings, d as Phone, i as User, n as X, v as MapPin, x as LogOut, y as Mail } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FloatingActions-DFmfGgMA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
}
function ProfileMenu({ scrolled }) {
	const { user, logout } = useAuth();
	if (!user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-label": "Open account menu",
			className: cn("inline-flex items-center gap-2 rounded-full border p-1 pr-3 transition-colors", scrolled ? "border-navy/15 text-navy hover:border-gold" : "border-white/30 text-white hover:border-gold"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
				className: "size-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
					className: "bg-navy-gradient text-xs font-bold text-white",
					children: initials(user.name) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "max-w-[8rem] truncate text-sm font-semibold",
				children: user.name
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
				className: "truncate",
				children: user.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/profile",
					className: "flex w-full cursor-pointer items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), " Profile"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/settings",
					className: "flex w-full cursor-pointer items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), " Settings"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: () => logout(),
				className: "flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), " Logout"]
			})
		]
	})] });
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, logout } = useAuth();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onResize = () => {
			if (window.innerWidth >= 1024) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [open]);
	const mobileMenu = open ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "mobile-menu",
		className: "fixed inset-0 z-[999] flex h-[100dvh] w-screen flex-col overflow-hidden bg-navy-gradient lg:hidden",
		style: { backgroundColor: "var(--navy-deep)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-18 shrink-0 items-center justify-between px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(false),
				"aria-label": "Close menu",
				className: "inline-flex size-11 items-center justify-center rounded-md border border-white/25 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain px-4 pb-8 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-1",
				children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "block border-b border-white/10 py-4 text-lg font-bold text-white transition-colors hover:text-gold",
					children: link.label
				}) }, link.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3",
				children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-md border border-white/15 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							className: "size-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
								className: "bg-gold text-sm font-bold text-navy-deep",
								children: initials(user.name)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-bold text-white",
								children: user.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-white/60",
								children: user.email
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/profile",
						onClick: () => setOpen(false),
						className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-4 text-base font-bold text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" }), " Profile"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/settings",
						onClick: () => setOpen(false),
						className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-4 text-base font-bold text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" }), " Settings"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							logout();
							setOpen(false);
						},
						className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-4 text-base font-bold text-navy-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-5" }), " Logout"]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					onClick: () => setOpen(false),
					className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-4 text-base font-bold text-white",
					children: "Login"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					onClick: () => setOpen(false),
					className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-4 text-base font-bold text-navy-deep",
					children: "Get Started"
				})] })
			})]
		})]
	}), document.body) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "bg-white/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "bg-navy-deep/25 backdrop-blur-md"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-x-0 bottom-0 h-px transition-opacity duration-500", scrolled ? "bg-border opacity-100" : "bg-white/15 opacity-100") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Main",
				className: "mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#home",
						className: "shrink-0",
						"aria-label": "SAND AND GRAVEL CONCRETE SUPPLY — home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: scrolled ? "dark" : "light" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: cn("relative rounded-md px-3 py-2 text-sm font-semibold transition-colors", "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100", scrolled ? "text-navy hover:text-gold-deep" : "text-white/90 hover:text-white"),
							children: link.label
						}) }, link.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center gap-2 lg:flex",
						children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileMenu, { scrolled }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: cn("inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold transition-colors", scrolled ? "border-navy/20 text-navy hover:border-gold hover:text-gold-deep" : "border-white/35 text-white hover:border-gold hover:text-gold"),
							children: "Login"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signup",
							className: "inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
							children: "Get Started"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						"aria-label": open ? "Close menu" : "Open menu",
						className: cn("relative z-[70] inline-flex size-11 items-center justify-center rounded-md border transition-colors lg:hidden", scrolled ? "border-navy/15 text-navy" : "border-white/30 text-white", open && "border-white/30 text-white"),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			mobileMenu
		]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.24c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.1-8.24 8.1Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" })
	});
}
var quickLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Materials",
		href: "#materials"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var serviceLinks = [
	{
		label: "Sand Supply",
		href: "#materials"
	},
	{
		label: "Gravel Supply",
		href: "#materials"
	},
	{
		label: "Aggregate Supply",
		href: "#materials"
	},
	{
		label: "Building Materials",
		href: "#services"
	},
	{
		label: "Truck Delivery",
		href: "#services"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-navy-deep pt-16 pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-white/60",
						children: "Reliable supplier of sand, gravel, aggregates and construction materials in Abu Dhabi and the UAE."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Quick links",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-bold tracking-[0.18em] text-gold uppercase",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: quickLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "text-sm text-white/65 transition-colors hover:text-gold",
								children: l.label
							}) }, l.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Our services",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-bold tracking-[0.18em] text-gold uppercase",
							children: "Our Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "text-sm text-white/65 transition-colors hover:text-gold",
								children: l.label
							}) }, l.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold tracking-[0.18em] text-gold uppercase",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-4 text-sm text-white/65",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-0.5 size-4 shrink-0 text-gold",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Mussafah Industrial Area",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Abu Dhabi, UAE"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "mt-0.5 size-4 shrink-0 text-gold",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.phoneHref,
									className: "transition-colors hover:text-gold",
									children: site.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "mt-0.5 size-4 shrink-0 text-gold",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "break-all transition-colors hover:text-gold",
									children: site.email
								})]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/45",
				children: "© 2026 Sand and Gravel Concrete Supply. All Rights Reserved."
			})]
		})
	});
}
function FloatingActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: site.phoneHref,
			"aria-label": `Call ${site.phone}`,
			className: "inline-flex size-13 items-center justify-center rounded-full bg-navy text-white shadow-elegant ring-1 ring-gold/40 transition-transform hover:-translate-y-0.5 sm:size-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
				className: "size-5",
				"aria-hidden": "true"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: whatsappHref,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Chat with us on WhatsApp",
			className: "inline-flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:-translate-y-0.5 sm:size-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-6" })
		})]
	});
}
//#endregion
export { Navbar as a, Footer as i, AvatarFallback as n, WhatsAppIcon as o, FloatingActions as r, Avatar as t };
