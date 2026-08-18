import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useSearch, g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAuth, o as ApiError } from "./router-CyTaXnVW.mjs";
import { n as cn, t as Logo } from "./Logo-0UU_F3KX.mjs";
import { C as LoaderCircle, S as Lock, y as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-B9dCpda_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const { redirect } = useSearch({ from: "/login" });
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
			setError("Please enter a valid email address.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		setLoading(true);
		try {
			await login(email.trim(), password);
			toast.success("Welcome back!");
			navigate({ to: redirect || "/" });
		} catch (err) {
			setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-xl bg-white p-8 shadow-elegant sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						variant: "dark",
						compact: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-center text-2xl font-extrabold text-navy",
					children: "Welcome Back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-center text-sm text-muted-foreground",
					children: "Login to your account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-8 space-y-4",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "email",
							className: "mb-1.5 block text-sm font-semibold text-navy",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								autoComplete: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@example.com",
								className: "w-full rounded-md border border-input py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1.5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "password",
								className: "block text-sm font-semibold text-navy",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/forgot-password",
								className: "text-xs font-semibold text-navy hover:text-gold-deep",
								children: "Forgot password?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "password",
								type: "password",
								autoComplete: "current-password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								placeholder: "••••••••",
								className: "w-full rounded-md border border-input py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
							})]
						})] }),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-destructive",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: cn("inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform", loading ? "opacity-70" : "hover:-translate-y-0.5"),
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, loading ? "Logging in..." : "Login"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: [
						"Don't have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signup",
							className: "font-semibold text-navy hover:text-gold-deep",
							children: "Sign Up"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-gold-deep",
						children: "← Back to home"
					})
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
