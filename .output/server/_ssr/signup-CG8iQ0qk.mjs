import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAuth, o as ApiError } from "./router-CyTaXnVW.mjs";
import { n as cn, t as Logo } from "./Logo-0UU_F3KX.mjs";
import { C as LoaderCircle, S as Lock, d as Phone, i as User, y as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-CG8iQ0qk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	name: "",
	email: "",
	phone: "",
	password: "",
	confirm: ""
};
function validate(v) {
	const errors = {};
	if (v.name.trim().length < 2) errors.name = "Please enter your full name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = "Please enter a valid email address.";
	if (v.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
	if (v.password.length < 6) errors.password = "Password must be at least 6 characters.";
	if (v.confirm !== v.password) errors.confirm = "Passwords do not match.";
	return errors;
}
function SignupPage() {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [formError, setFormError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	function set(key, val) {
		setValues((prev) => ({
			...prev,
			[key]: val
		}));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setFormError("");
		const errs = validate(values);
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;
		setLoading(true);
		try {
			const { devOtp } = await signup({
				name: values.name.trim(),
				email: values.email.trim(),
				phone: values.phone.trim(),
				password: values.password
			});
			if (devOtp) toast.message("Verification code sent", { description: `(Dev mode — no email service yet) Your code is ${devOtp}` });
			else toast.success("Account created — check your email for a verification code.");
			navigate({
				to: "/verify-email",
				search: {
					email: values.email.trim(),
					name: values.name.trim()
				}
			});
		} catch (err) {
			setFormError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}
	const fieldClass = "w-full rounded-md border border-input py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";
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
					children: "Create Your Account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-8 space-y-4",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Full Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									value: values.name,
									onChange: (e) => set("name", e.target.value),
									className: fieldClass,
									placeholder: "Your full name"
								})]
							}),
							errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.name
							}) : null
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									type: "email",
									value: values.email,
									onChange: (e) => set("email", e.target.value),
									className: fieldClass,
									placeholder: "you@example.com"
								})]
							}),
							errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.email
							}) : null
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "phone",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									value: values.phone,
									onChange: (e) => set("phone", e.target.value),
									className: fieldClass,
									placeholder: "05xxxxxxxx"
								})]
							}),
							errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.phone
							}) : null
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "password",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Password"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "password",
									type: "password",
									value: values.password,
									onChange: (e) => set("password", e.target.value),
									className: fieldClass,
									placeholder: "••••••••"
								})]
							}),
							errors.password ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.password
							}) : null
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "confirm",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Confirm Password"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "confirm",
									type: "password",
									value: values.confirm,
									onChange: (e) => set("confirm", e.target.value),
									className: fieldClass,
									placeholder: "••••••••"
								})]
							}),
							errors.confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.confirm
							}) : null
						] }),
						formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-destructive",
							children: formError
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: cn("inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform", loading ? "opacity-70" : "hover:-translate-y-0.5"),
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, loading ? "Creating account..." : "Create Account"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: [
						"Already have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "font-semibold text-navy hover:text-gold-deep",
							children: "Login"
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
export { SignupPage as component };
