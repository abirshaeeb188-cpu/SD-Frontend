import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as useAuth } from "./router-CyTaXnVW.mjs";
import { i as User, y as Mail } from "../_libs/lucide-react.mjs";
import { a as Navbar, i as Footer, n as AvatarFallback, r as FloatingActions, t as Avatar } from "./FloatingActions-DFmfGgMA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-C-M64K9f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { user, isLoading } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isLoading && !user) navigate({
			to: "/login",
			search: { redirect: "/profile" }
		});
	}, [
		isLoading,
		user,
		navigate
	]);
	if (isLoading || !user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "min-h-screen bg-offwhite pt-32 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-2xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-white p-8 shadow-elegant",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								className: "size-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
									className: "bg-navy-gradient text-xl font-bold text-white",
									children: user.name.split(" ").slice(0, 2).map((p) => p[0]?.toUpperCase()).join("")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-extrabold text-navy",
								children: user.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: user.email
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 space-y-4 border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4 text-gold-deep" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "w-24 shrink-0 text-sm font-semibold text-navy",
										children: "Full Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted-foreground",
										children: user.name
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-gold-deep" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "w-24 shrink-0 text-sm font-semibold text-navy",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted-foreground",
										children: user.email
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3 border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/settings",
								className: "inline-flex items-center justify-center rounded-md border border-navy/20 px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:border-gold hover:text-gold-deep",
								children: "Go to Settings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reviews",
								className: "inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
								children: "My Reviews"
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
	] });
}
//#endregion
export { ProfilePage as component };
