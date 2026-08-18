import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAuth, o as ApiError } from "./router-CyTaXnVW.mjs";
import { C as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Navbar, i as Footer, r as FloatingActions } from "./FloatingActions-DFmfGgMA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-BEmWC8bC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const { user, isLoading, logout, updateProfile } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)(user?.name ?? "");
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!isLoading && !user) navigate({
			to: "/login",
			search: { redirect: "/settings" }
		});
	}, [
		isLoading,
		user,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		if (user) setName(user.name);
	}, [user]);
	if (isLoading || !user) return null;
	async function handleSave(e) {
		e.preventDefault();
		setSaving(true);
		try {
			await updateProfile(name.trim());
			toast.success("Settings saved.");
		} catch (err) {
			toast.error(err instanceof ApiError ? err.message : "Could not save settings.");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "min-h-screen bg-offwhite pt-32 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-extrabold text-navy",
						children: "Account Settings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSave,
						className: "mt-6 space-y-5 rounded-xl border border-border bg-white p-8 shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								value: user.email,
								disabled: true,
								className: "w-full cursor-not-allowed rounded-md border border-input bg-muted px-3 py-2.5 text-sm text-muted-foreground outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: saving,
								className: "inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-70",
								children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, saving ? "Saving..." : "Save Changes"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-destructive/20 bg-white p-6 shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-bold text-navy",
								children: "Log out of your account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "You'll need to log in again to write reviews or access your profile."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									logout();
									navigate({ to: "/" });
								},
								className: "mt-4 inline-flex items-center justify-center rounded-md border border-destructive/40 px-4 py-2.5 text-sm font-bold text-destructive transition-colors hover:bg-destructive/5",
								children: "Logout"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
	] });
}
//#endregion
export { SettingsPage as component };
