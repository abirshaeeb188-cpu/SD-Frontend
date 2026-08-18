import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn } from "./Logo-0UU_F3KX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-URAispR5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", shown && "reveal-in", className),
		children
	});
}
function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold tracking-[0.22em] text-gold-deep uppercase",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[2.7rem] lg:leading-tight", tone === "dark" ? "text-white" : "text-navy"),
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("gold-rule mt-5 block", align === "center" && "mx-auto") }),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-5 text-base leading-relaxed", tone === "dark" ? "text-white/70" : "text-muted-foreground"),
				children: description
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as n, Reveal as t };
