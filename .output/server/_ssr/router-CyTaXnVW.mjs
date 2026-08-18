import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CyTaXnVW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-JhPotq83.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var API_BASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_API_URL": "https://sd-backedn.vercel.app"
}["VITE_API_URL"] || "http://localhost:5000/api";
var TOKEN_KEY = "sgcs_auth_token";
function getToken() {
	try {
		return window.localStorage.getItem(TOKEN_KEY);
	} catch {
		return null;
	}
}
function setToken(token) {
	try {
		if (token) window.localStorage.setItem(TOKEN_KEY, token);
		else window.localStorage.removeItem(TOKEN_KEY);
	} catch {}
}
var ApiError = class extends Error {
	status;
	constructor(status, message) {
		super(message);
		this.status = status;
	}
};
async function request(path, options = {}) {
	const { method = "GET", body, auth = false } = options;
	const headers = { "Content-Type": "application/json" };
	if (auth) {
		const token = getToken();
		if (token) headers["Authorization"] = `Bearer ${token}`;
	}
	const init = {
		method,
		headers
	};
	if (body !== void 0) init.body = JSON.stringify(body);
	const res = await fetch(`${API_BASE_URL}${path}`, init);
	const data = (res.headers.get("content-type") ?? "").includes("application/json") ? await res.json() : void 0;
	if (!res.ok) {
		const message = data && data.message || res.statusText;
		throw new ApiError(res.status, message || "Something went wrong.");
	}
	return data;
}
function apiSignup(input) {
	return request("/api/auth/signup", {
		method: "POST",
		body: input
	});
}
function apiRequestOtp(email, purpose) {
	return request("/api/auth/request-otp", {
		method: "POST",
		body: {
			email,
			purpose
		}
	});
}
function apiVerifyEmail(email, code) {
	return request("/api/auth/verify-email", {
		method: "POST",
		body: {
			email,
			code
		}
	});
}
function apiLogin(email, password) {
	return request("/api/auth/login", {
		method: "POST",
		body: {
			email,
			password
		}
	});
}
function apiResetPassword(email, code, newPassword) {
	return request("/api/auth/reset-password", {
		method: "POST",
		body: {
			email,
			code,
			newPassword
		}
	});
}
function apiGetMe() {
	return request("/api/users/me", { auth: true });
}
function apiUpdateMe(input) {
	return request("/api/users/me", {
		method: "PUT",
		body: input,
		auth: true
	});
}
function apiSendContactMessage(input) {
	return request("/api/contact", {
		method: "POST",
		body: input
	});
}
function apiListReviews() {
	return request("/api/reviews");
}
function apiCreateReview(input) {
	return request("/api/reviews", {
		method: "POST",
		body: input,
		auth: true
	});
}
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function bootstrap() {
			if (!getToken()) {
				setIsLoading(false);
				return;
			}
			try {
				const { user: me } = await apiGetMe();
				if (!cancelled) setUser(me);
			} catch {
				setToken(null);
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		}
		bootstrap();
		return () => {
			cancelled = true;
		};
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		user,
		isLoading,
		login: async (email, password) => {
			const { token, user: loggedInUser } = await apiLogin(email, password);
			setToken(token);
			setUser(loggedInUser);
		},
		signup: async (input) => {
			const { devOtp } = await apiSignup(input);
			return { devOtp };
		},
		logout: () => {
			setToken(null);
			setUser(null);
		},
		updateProfile: async (name) => {
			const { user: updated } = await apiUpdateMe({ name });
			setUser(updated);
		},
		requestOtp: async (email, purpose) => {
			const { devOtp } = await apiRequestOtp(email, purpose);
			return { devOtp };
		},
		verifyEmail: async (email, code) => {
			const { token, user: verifiedUser } = await apiVerifyEmail(email, code);
			setToken(token);
			setUser(verifiedUser);
		},
		resetPassword: async (email, code, newPassword) => {
			await apiResetPassword(email, code, newPassword);
		}
	}), [user, isLoading]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
	return ctx;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sand & Gravel Supplier in Abu Dhabi | SP Sand & Gravel" },
			{
				name: "description",
				content: "SP Sand & Gravel is a sand, gravel and construction materials supplier in Abu Dhabi, UAE. We supply quality aggregates, sand, gravel and road base materials."
			},
			{
				name: "author",
				content: "SP Sand & Gravel"
			},
			{
				property: "og:title",
				content: "Sand & Gravel Supplier in Abu Dhabi | SP Sand & Gravel"
			},
			{
				property: "og:description",
				content: "Sand, gravel, aggregates and construction materials supplier in Abu Dhabi, UAE."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.spsandandgravel.com/"
			},
			{
				property: "og:site_name",
				content: "SP Sand & Gravel"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Sand & Gravel Supplier in Abu Dhabi | SP Sand & Gravel"
			},
			{
				name: "twitter:description",
				content: "Sand, gravel, aggregates and construction materials supplier in Abu Dhabi, UAE."
			},
			{
				name: "theme-color",
				content: "#0d1b30"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.spsandandgravel.com/"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true
		})] })
	});
}
var site = {
	name: "SAND AND GRAVEL CONCRETE SUPPLY",
	shortName: "Sand and Gravel Concrete Supply",
	phone: "0526167981",
	phoneHref: "tel:+971526167981",
	whatsappNumber: "971526167981",
	email: "meerbolach0952684@gmail.com",
	address: "Mussafah Industrial Area, Abu Dhabi, United Arab Emirates",
	hours: "24/7 Service"
};
var whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to inquire about sand, gravel and construction materials.")}`;
var navLinks = [
	{
		label: "Home",
		href: "/#home"
	},
	{
		label: "About Us",
		href: "/#about"
	},
	{
		label: "Services",
		href: "/#services"
	},
	{
		label: "Reviews",
		href: "/reviews"
	},
	{
		label: "Why Choose Us",
		href: "/#why-us"
	},
	{
		label: "Contact Us",
		href: "/#contact"
	}
];
var $$splitComponentImporter$7 = () => import("./routes-CMQOKmbt.mjs");
var title = "Sand & Gravel Supplier in Abu Dhabi | Sand and Gravel Concrete Supply";
var description = "Sand, gravel, aggregates and building materials supplied across Abu Dhabi, Mussafah and the UAE with fast 24/7 delivery by 3-ton dumper and pickup trucks.";
var Route$7 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.spsandandgravel.com/"
			},
			{
				property: "og:site_name",
				content: site.name
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.spsandandgravel.com/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: site.name,
				description: "Supplier of sand, gravel, aggregates and construction materials in Abu Dhabi and the UAE.",
				telephone: site.phone,
				email: site.email,
				url: "https://www.spsandandgravel.com/",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Mussafah Industrial Area",
					addressLocality: "Abu Dhabi",
					addressCountry: "AE"
				},
				areaServed: [
					"Abu Dhabi",
					"Mussafah",
					"Abu Dhabi Industrial City",
					"United Arab Emirates"
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./forgot-password-WKFXHZ1V.mjs");
var Route$6 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Forgot Password | Sand and Gravel Concrete Supply" }, {
		name: "description",
		content: "Reset your Sand and Gravel Concrete Supply password."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./login-B9dCpda_.mjs");
var Route$5 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login | Sand and Gravel Concrete Supply" }, {
		name: "description",
		content: "Login to your Sand and Gravel Concrete Supply account."
	}] }),
	validateSearch: (search) => ({ redirect: typeof search.redirect === "string" ? search.redirect : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./profile-C-M64K9f.mjs");
var Route$4 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "My Profile | Sand and Gravel Concrete Supply" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./reviews-CrsxL8-Y.mjs");
var Route$3 = createFileRoute("/reviews")({
	head: () => ({ meta: [{ title: "Customer Reviews | Sand and Gravel Concrete Supply" }, {
		name: "description",
		content: "Read what customers say about Sand and Gravel Concrete Supply's sand, gravel and aggregate delivery in Abu Dhabi."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./settings-BEmWC8bC.mjs");
var Route$2 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Account Settings | Sand and Gravel Concrete Supply" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./signup-CG8iQ0qk.mjs");
var Route$1 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Create Account | Sand and Gravel Concrete Supply" }, {
		name: "description",
		content: "Create your Sand and Gravel Concrete Supply account."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./verify-email-BnVy2zVS.mjs");
var Route = createFileRoute("/verify-email")({
	head: () => ({ meta: [{ title: "Verify Email | Sand and Gravel Concrete Supply" }, {
		name: "description",
		content: "Verify your email to finish creating your account."
	}] }),
	validateSearch: (search) => ({
		email: typeof search.email === "string" ? search.email : "",
		name: typeof search.name === "string" ? search.name : ""
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	ForgotPasswordRoute: Route$6.update({
		id: "/forgot-password",
		path: "/forgot-password",
		getParentRoute: () => Route$8
	}),
	LoginRoute: Route$5.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$8
	}),
	ProfileRoute: Route$4.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$8
	}),
	ReviewsRoute: Route$3.update({
		id: "/reviews",
		path: "/reviews",
		getParentRoute: () => Route$8
	}),
	SettingsRoute: Route$2.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$8
	}),
	SignupRoute: Route$1.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$8
	}),
	VerifyEmailRoute: Route.update({
		id: "/verify-email",
		path: "/verify-email",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useAuth as a, apiListReviews as c, whatsappHref as i, apiSendContactMessage as l, navLinks as n, ApiError as o, site as r, apiCreateReview as s, router_exports as t };
