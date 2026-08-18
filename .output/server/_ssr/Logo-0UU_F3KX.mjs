import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-0UU_F3KX.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var logo_default = "/assets/logo-DmhPgz3F.png";
function Logo({ className, variant = "dark", compact = false }) {
	const title = variant === "light" ? "text-white" : "text-navy";
	const sub = variant === "light" ? "text-white/65" : "text-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative inline-flex size-14 shrink-0 items-center justify-center rounded-md bg-navy-gradient ring-1 ring-gold/40 sm:size-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logo_default,
				alt: "SAND AND GRAVEL CONCRETE SUPPLY logo"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("truncate font-extrabold tracking-tight", compact ? "text-[0.95rem]" : "text-base sm:text-[1.05rem]", title),
				children: "SAND AND GRAVEL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 truncate text-[0.62rem] font-semibold tracking-[0.28em] uppercase sm:text-[0.66rem]", sub),
				children: "Concrete Supply"
			})]
		})]
	});
}
//#endregion
export { cn as n, Logo as t };
