import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useSearch, g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAuth, o as ApiError } from "./router-CyTaXnVW.mjs";
import { n as cn, t as Logo } from "./Logo-0UU_F3KX.mjs";
import { C as LoaderCircle, b as MailCheck } from "../_libs/lucide-react.mjs";
import { n as InputOTPGroup, r as InputOTPSlot, t as InputOTP } from "./input-otp-DEiOuQFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-email-BnVy2zVS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RESEND_COOLDOWN = 30;
function VerifyEmailPage() {
	const { requestOtp, verifyEmail } = useAuth();
	const navigate = useNavigate();
	const { email } = useSearch({ from: "/verify-email" });
	const [code, setCode] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [cooldown, setCooldown] = (0, import_react.useState)(0);
	const [sentOnce, setSentOnce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!email || sentOnce) return;
		setSentOnce(true);
		setCooldown(RESEND_COOLDOWN);
	}, [email, sentOnce]);
	(0, import_react.useEffect)(() => {
		if (cooldown <= 0) return;
		const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1e3);
		return () => clearInterval(t);
	}, [cooldown]);
	async function handleResend() {
		if (cooldown > 0 || !email) return;
		try {
			const { devOtp } = await requestOtp(email, "verify");
			if (devOtp) toast.message("New code sent", { description: `(Dev mode — no email service yet) Your code is ${devOtp}` });
			else toast.success("New code sent to your email.");
			setCooldown(RESEND_COOLDOWN);
			setError("");
		} catch (err) {
			setError(err instanceof ApiError ? err.message : "Could not resend the code. Try again.");
		}
	}
	async function handleVerify() {
		setError("");
		if (code.length !== 6) {
			setError("Please enter the 6-digit code.");
			return;
		}
		setLoading(true);
		try {
			await verifyEmail(email, code);
			toast.success("Email verified — welcome!");
			navigate({ to: "/" });
		} catch (err) {
			setError(err instanceof ApiError ? err.message : "That code is incorrect or has expired.");
		} finally {
			setLoading(false);
		}
	}
	if (!email) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-elegant sm:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"No email to verify.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "font-semibold text-navy hover:text-gold-deep",
						children: "Go back to sign up"
					}),
					"."
				]
			})
		})
	});
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-12 items-center justify-center rounded-full bg-gold/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, { className: "size-6 text-gold-deep" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-center text-2xl font-extrabold text-navy",
					children: "Verify Your Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-center text-sm text-muted-foreground",
					children: ["Enter the 6-digit code we sent to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-navy",
						children: email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
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
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-destructive",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleVerify,
							disabled: loading,
							className: cn("inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform", loading ? "opacity-70" : "hover:-translate-y-0.5"),
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, loading ? "Verifying..." : "Verify Email"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleResend,
							disabled: cooldown > 0,
							className: "text-sm font-semibold text-navy hover:text-gold-deep disabled:cursor-not-allowed disabled:text-muted-foreground",
							children: cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "hover:text-gold-deep",
						children: "← Back to login"
					})
				})
			]
		})
	});
}
//#endregion
export { VerifyEmailPage as component };
