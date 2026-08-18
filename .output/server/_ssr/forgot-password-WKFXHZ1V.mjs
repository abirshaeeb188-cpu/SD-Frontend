import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAuth, o as ApiError } from "./router-CyTaXnVW.mjs";
import { n as cn, t as Logo } from "./Logo-0UU_F3KX.mjs";
import { C as LoaderCircle, S as Lock, T as KeyRound, y as Mail } from "../_libs/lucide-react.mjs";
import { n as InputOTPGroup, r as InputOTPSlot, t as InputOTP } from "./input-otp-DEiOuQFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-WKFXHZ1V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "w-full rounded-md border border-input py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";
function ForgotPasswordPage() {
	const { requestOtp, resetPassword } = useAuth();
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)("request");
	const [email, setEmail] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function handleRequest(e) {
		e.preventDefault();
		setError("");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
			setError("Please enter a valid email address.");
			return;
		}
		setLoading(true);
		try {
			const { devOtp } = await requestOtp(email.trim(), "reset");
			if (devOtp) toast.message("Reset code sent", { description: `(Dev mode — no email service yet) Your code is ${devOtp}` });
			else toast.success("If that account exists, a reset code has been sent.");
			setStep("reset");
		} catch (err) {
			setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}
	async function handleReset(e) {
		e.preventDefault();
		setError("");
		if (code.length !== 6) {
			setError("Please enter the 6-digit code.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		if (password !== confirm) {
			setError("Passwords do not match.");
			return;
		}
		setLoading(true);
		try {
			await resetPassword(email.trim(), code, password);
			toast.success("Password reset! Please log in.");
			navigate({ to: "/login" });
		} catch (err) {
			setError(err instanceof ApiError ? err.message : "That code is incorrect or has expired. Go back and resend it.");
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
				step === "request" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-center text-2xl font-extrabold text-navy",
						children: "Forgot Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-center text-sm text-muted-foreground",
						children: "Enter your email and we'll send you a reset code."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleRequest,
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
									className: fieldClass
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
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, loading ? "Sending..." : "Send Reset Code"]
							})
						]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-center text-2xl font-extrabold text-navy",
						children: "Reset Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-center text-sm text-muted-foreground",
						children: [
							"Enter the code sent to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-navy",
								children: email
							}),
							" and choose a new password."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleReset,
						className: "mt-8 space-y-4",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
									maxLength: 6,
									value: code,
									onChange: setCode,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputOTPGroup, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 0 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 1 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 2 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 3 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 4 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: 5 })
									] })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "password",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "New Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "password",
									type: "password",
									autoComplete: "new-password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									placeholder: "••••••••",
									className: fieldClass
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "confirm",
								className: "mb-1.5 block text-sm font-semibold text-navy",
								children: "Confirm New Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "confirm",
									type: "password",
									autoComplete: "new-password",
									value: confirm,
									onChange: (e) => setConfirm(e.target.value),
									placeholder: "••••••••",
									className: fieldClass
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
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, loading ? "Resetting..." : "Reset Password"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setStep("request"),
								className: "w-full text-center text-sm font-semibold text-navy hover:text-gold-deep",
								children: "← Use a different email"
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: [
						"Remembered it?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "font-semibold text-navy hover:text-gold-deep",
							children: "Login"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { ForgotPasswordPage as component };
