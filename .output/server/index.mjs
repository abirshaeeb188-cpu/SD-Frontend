globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4c-xF6KTprvjUau4Mr8lMMDOHe0ijA\"",
		"mtime": "2026-08-18T08:20:15.243Z",
		"size": 76,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"b7-T1N1cruX1pbONioHPJ/YuZ55FMs\"",
		"mtime": "2026-08-18T08:20:45.334Z",
		"size": 183,
		"path": "../public/sitemap.xml"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"58893-vnxu2mY7OfAXVcEr1OwqdlHmUNI\"",
		"mtime": "2026-08-16T14:30:25.000Z",
		"size": 362643,
		"path": "../public/favicon.png"
	},
	"/assets/about-yard-CYWmMssd.jpg": {
		"type": "image/jpeg",
		"etag": "\"36efc-WUyPJ58yAS510dM/9Xe9BXw3B+U\"",
		"mtime": "2026-08-18T08:23:12.692Z",
		"size": 225020,
		"path": "../public/assets/about-yard-CYWmMssd.jpg"
	},
	"/assets/aggergate-20-40-Dnq6qaEW.webp": {
		"type": "image/webp",
		"etag": "\"3d778-6SDDrDBPYCOVxX88vfAV27Tc8os\"",
		"mtime": "2026-08-18T08:23:12.744Z",
		"size": 251768,
		"path": "../public/assets/aggergate-20-40-Dnq6qaEW.webp"
	},
	"/assets/aggergate34-DDZ1wM3b.jpeg": {
		"type": "image/jpeg",
		"etag": "\"611a0-heU9g3rxCjK9uPWlpiJyKchbU9s\"",
		"mtime": "2026-08-18T08:23:12.765Z",
		"size": 397728,
		"path": "../public/assets/aggergate34-DDZ1wM3b.jpeg"
	},
	"/assets/aggregate-3-18-Bod19HgY.webp": {
		"type": "image/webp",
		"etag": "\"16f4c-en/JwtbI7QA9qbcUAlJSW4/nnb4\"",
		"mtime": "2026-08-18T08:23:12.767Z",
		"size": 94028,
		"path": "../public/assets/aggregate-3-18-Bod19HgY.webp"
	},
	"/assets/aggregate-3-16-C9ptlN_J.jpg": {
		"type": "image/jpeg",
		"etag": "\"78b49-3NbapQX2D4h338/DLrk8ALKHcS4\"",
		"mtime": "2026-08-18T08:23:12.767Z",
		"size": 494409,
		"path": "../public/assets/aggregate-3-16-C9ptlN_J.jpg"
	},
	"/assets/app-commercial-C68bH6-a.jpg": {
		"type": "image/jpeg",
		"etag": "\"e957-qv0dBKc2X5wrd8dngUfhEn6BJQQ\"",
		"mtime": "2026-08-18T08:23:12.767Z",
		"size": 59735,
		"path": "../public/assets/app-commercial-C68bH6-a.jpg"
	},
	"/assets/app-concrete-C0DvvqgN.jpg": {
		"type": "image/jpeg",
		"etag": "\"25f2b-JtNj5rjUNH/i9K0uIiBBQ8G/CLA\"",
		"mtime": "2026-08-18T08:23:12.775Z",
		"size": 155435,
		"path": "../public/assets/app-concrete-C0DvvqgN.jpg"
	},
	"/assets/aggregate38-DxDD5yVq.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5015b-JtG5LSMa0gXZOM6Cow+cvsXZvEM\"",
		"mtime": "2026-08-18T08:23:12.767Z",
		"size": 328027,
		"path": "../public/assets/aggregate38-DxDD5yVq.jpeg"
	},
	"/assets/app-foundations-DRQDKMWR.jpg": {
		"type": "image/jpeg",
		"etag": "\"177d5-kneCIVoZSUReCW95/IINCx8ZuR4\"",
		"mtime": "2026-08-18T08:23:12.775Z",
		"size": 96213,
		"path": "../public/assets/app-foundations-DRQDKMWR.jpg"
	},
	"/assets/app-infrastructure-HYFgPORB.jpg": {
		"type": "image/jpeg",
		"etag": "\"15558-ZBiwITFryq664LKv8YUt4h1c5hs\"",
		"mtime": "2026-08-18T08:23:12.801Z",
		"size": 87384,
		"path": "../public/assets/app-infrastructure-HYFgPORB.jpg"
	},
	"/assets/app-industrial-DQ-ty5ko.jpg": {
		"type": "image/jpeg",
		"etag": "\"121f7-bzG5n4dOR09aJBDP31nqY7NsJKo\"",
		"mtime": "2026-08-18T08:23:12.782Z",
		"size": 74231,
		"path": "../public/assets/app-industrial-DQ-ty5ko.jpg"
	},
	"/assets/app-landscaping-BZxQa502.jpg": {
		"type": "image/jpeg",
		"etag": "\"21f98-o5mB+8T9quHAuiohDNMbLBEU0kU\"",
		"mtime": "2026-08-18T08:23:12.846Z",
		"size": 139160,
		"path": "../public/assets/app-landscaping-BZxQa502.jpg"
	},
	"/assets/app-residential-BxDmsbiN.jpg": {
		"type": "image/jpeg",
		"etag": "\"14861-VlwBz2G4X2PUQcKu9O+ILoI59c8\"",
		"mtime": "2026-08-18T08:23:12.846Z",
		"size": 84065,
		"path": "../public/assets/app-residential-BxDmsbiN.jpg"
	},
	"/assets/forgot-password-CwkHSupK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17af-mlHfjXquDS4rr4DfMJ9eDugzSxQ\"",
		"mtime": "2026-08-18T08:23:12.611Z",
		"size": 6063,
		"path": "../public/assets/forgot-password-CwkHSupK.js"
	},
	"/assets/BlackSandPure-CYAy1Hws.jpeg": {
		"type": "image/jpeg",
		"etag": "\"444f2-cdFj0jP5t/nKXUkXQ6Sb/Y1xQB0\"",
		"mtime": "2026-08-18T08:23:12.644Z",
		"size": 279794,
		"path": "../public/assets/BlackSandPure-CYAy1Hws.jpeg"
	},
	"/assets/FloatingActions-DxyDtGU2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c94-UkNbVRaA4xEYgyieok3uH3wE0qU\"",
		"mtime": "2026-08-18T08:23:12.583Z",
		"size": 105620,
		"path": "../public/assets/FloatingActions-DxyDtGU2.js"
	},
	"/assets/black-sand-Cjdmo4RE.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f846-gQvGeSta8Jhepch010D3tgJc57s\"",
		"mtime": "2026-08-18T08:23:12.901Z",
		"size": 456774,
		"path": "../public/assets/black-sand-Cjdmo4RE.jpg"
	},
	"/assets/hero-yard-waR-w8-h.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c74c-W7jRmjB7DaG+UMBVX5xB82oOW14\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 313164,
		"path": "../public/assets/hero-yard-waR-w8-h.jpg"
	},
	"/assets/hubaili-sand-D9piOfcU.jpg": {
		"type": "image/jpeg",
		"etag": "\"74d9f-9kW5Wohu6iGDTQI/2DXe4l+o1lc\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 478623,
		"path": "../public/assets/hubaili-sand-D9piOfcU.jpg"
	},
	"/assets/aggregate-3-4-wUc2wERM.jpg": {
		"type": "image/jpeg",
		"etag": "\"a105a-M159tmlAepFObvVscitYIjNlviM\"",
		"mtime": "2026-08-18T08:23:12.767Z",
		"size": 659546,
		"path": "../public/assets/aggregate-3-4-wUc2wERM.jpg"
	},
	"/assets/Gutuchmaterial-BJK_Cr8g.jpeg": {
		"type": "image/jpeg",
		"etag": "\"465d3-qN3e2n7ud9ILlGT75mdk1twQkhg\"",
		"mtime": "2026-08-18T08:23:12.661Z",
		"size": 288211,
		"path": "../public/assets/Gutuchmaterial-BJK_Cr8g.jpeg"
	},
	"/assets/gutch-material-CGHHIvbL.jpg": {
		"type": "image/jpeg",
		"etag": "\"8c83f-IsTL9LTCRSiy6I7PlyUQ+A6Qd4A\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 575551,
		"path": "../public/assets/gutch-material-CGHHIvbL.jpg"
	},
	"/assets/input-otp-C4Hs11RD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c7-EiVZodGjiBmhZWzPnxGw3B0MoEA\"",
		"mtime": "2026-08-18T08:23:12.633Z",
		"size": 10439,
		"path": "../public/assets/input-otp-C4Hs11RD.js"
	},
	"/assets/loader-circle-vQyPlppO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84-BWkoMPCRc7ScWd7Aet66TKsveR4\"",
		"mtime": "2026-08-18T08:23:12.633Z",
		"size": 132,
		"path": "../public/assets/loader-circle-vQyPlppO.js"
	},
	"/assets/lock-CndPOVaK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c2-dJbMp4zJ5wPQ2egGcXijj4jCdUY\"",
		"mtime": "2026-08-18T08:23:12.633Z",
		"size": 194,
		"path": "../public/assets/lock-CndPOVaK.js"
	},
	"/assets/login-BAbnKgpm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9e-MQvMJEOStYP7iQ5QF5XEsYQ3Qmc\"",
		"mtime": "2026-08-18T08:23:12.640Z",
		"size": 3742,
		"path": "../public/assets/login-BAbnKgpm.js"
	},
	"/assets/Logo-BIQWMxNk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72cb-1/LbQJv+Ho6ximGMnnwJ/6odxTc\"",
		"mtime": "2026-08-18T08:23:12.585Z",
		"size": 29387,
		"path": "../public/assets/Logo-BIQWMxNk.js"
	},
	"/assets/index--rC5cw5z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5efed-3VaKUhZZFYn/IzfAyG7exssjsgE\"",
		"mtime": "2026-08-18T08:23:12.577Z",
		"size": 389101,
		"path": "../public/assets/index--rC5cw5z.js"
	},
	"/assets/mail-CQ36pxap.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c9-vPM+BddiPwfhwJV2q7xGp0JLQ3Q\"",
		"mtime": "2026-08-18T08:23:12.641Z",
		"size": 201,
		"path": "../public/assets/mail-CQ36pxap.js"
	},
	"/assets/profile-BF3fNIT6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97e-ooVu75FlBsxIKkzrr4OssOihk14\"",
		"mtime": "2026-08-18T08:23:12.642Z",
		"size": 2430,
		"path": "../public/assets/profile-BF3fNIT6.js"
	},
	"/assets/logo-DmhPgz3F.png": {
		"type": "image/png",
		"etag": "\"58893-vnxu2mY7OfAXVcEr1OwqdlHmUNI\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 362643,
		"path": "../public/assets/logo-DmhPgz3F.png"
	},
	"/assets/reviews-Bo8E5bz8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1efb-s2kr8KStoy/E6h0UJxrsXnlH+fg\"",
		"mtime": "2026-08-18T08:23:12.642Z",
		"size": 7931,
		"path": "../public/assets/reviews-Bo8E5bz8.js"
	},
	"/assets/mat-roadbase-CizOEYxn.jpg": {
		"type": "image/jpeg",
		"etag": "\"22247-AF7bw7sbuX8wO+EpwWzuwU4MFFE\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 139847,
		"path": "../public/assets/mat-roadbase-CizOEYxn.jpg"
	},
	"/assets/routes-DJJmhvQt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9374-+mLWru8RA8rTJh34R9RXwctE/lM\"",
		"mtime": "2026-08-18T08:23:12.643Z",
		"size": 37748,
		"path": "../public/assets/routes-DJJmhvQt.js"
	},
	"/assets/roadbase-karmLVC_.jpeg": {
		"type": "image/jpeg",
		"etag": "\"58288-FUx8LPijS2ad2AcnY6rfgBrF47w\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 361096,
		"path": "../public/assets/roadbase-karmLVC_.jpeg"
	},
	"/assets/SectionHeading-H0ao0WpI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d3-6UceUa8RfZvyEsU/a4DlMYNx+ss\"",
		"mtime": "2026-08-18T08:23:12.585Z",
		"size": 1235,
		"path": "../public/assets/SectionHeading-H0ao0WpI.js"
	},
	"/assets/settings-Dk62MfkY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b06-N/i8jSPDOp5hIxdIvWnbauDcy2k\"",
		"mtime": "2026-08-18T08:23:12.644Z",
		"size": 2822,
		"path": "../public/assets/settings-Dk62MfkY.js"
	},
	"/assets/signup-D-NFLtCb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1699-cpfUk+zIOoJT7A6bLvFk7fgg6XQ\"",
		"mtime": "2026-08-18T08:23:12.644Z",
		"size": 5785,
		"path": "../public/assets/signup-D-NFLtCb.js"
	},
	"/assets/styles-JhPotq83.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"185fa-23Hpl4ezmBYY1vPBIOAMO7sOfnQ\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 99834,
		"path": "../public/assets/styles-JhPotq83.css"
	},
	"/assets/truck-1-BiXREajq.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2e311-NX3xj3i2ONqgeYatq1dGmdvp034\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 189201,
		"path": "../public/assets/truck-1-BiXREajq.jpeg"
	},
	"/assets/SevhanSand-DwI_EjcX.jpeg": {
		"type": "image/jpeg",
		"etag": "\"54931-nCezM+pnHnTl18bDOGBppuVekFQ\"",
		"mtime": "2026-08-18T08:23:12.675Z",
		"size": 346417,
		"path": "../public/assets/SevhanSand-DwI_EjcX.jpeg"
	},
	"/assets/truck-2-XDVwFNw0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2652b-uuvtaE5KVGHo/IyelzpDfazUyzQ\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 156971,
		"path": "../public/assets/truck-2-XDVwFNw0.jpeg"
	},
	"/assets/road-base-fujairah-DNEdvkIs.jpg": {
		"type": "image/jpeg",
		"etag": "\"a34a3-fJ4rUIbX42/Hu82dIeBTTSUcuqA\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 668835,
		"path": "../public/assets/road-base-fujairah-DNEdvkIs.jpg"
	},
	"/assets/user-DTHBYchH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c5-baBM2zfImOnML3VSJODotkj5G64\"",
		"mtime": "2026-08-18T08:23:12.644Z",
		"size": 453,
		"path": "../public/assets/user-DTHBYchH.js"
	},
	"/assets/truck-delivery-Cixm4Kj2.jpg": {
		"type": "image/jpeg",
		"etag": "\"29687-lV3ARsB+YU6B3/hQJxJ/YHmnb4c\"",
		"mtime": "2026-08-18T08:23:12.926Z",
		"size": 169607,
		"path": "../public/assets/truck-delivery-Cixm4Kj2.jpg"
	},
	"/assets/recycle-road-CFDEy-0F.jpg": {
		"type": "image/jpeg",
		"etag": "\"f5efa-cioriB04CH+oiES9sDTfx8/8QYo\"",
		"mtime": "2026-08-18T08:23:12.910Z",
		"size": 1007354,
		"path": "../public/assets/recycle-road-CFDEy-0F.jpg"
	},
	"/assets/verify-email-DTlBnCUu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f44-XZ6INSowPLoa/Ra55EfvMvDnKB8\"",
		"mtime": "2026-08-18T08:23:12.644Z",
		"size": 3908,
		"path": "../public/assets/verify-email-DTlBnCUu.js"
	},
	"/assets/whiteSand-DPsUWsQ5.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3e823-eXyJS5B0f27aQU4tPuVf+1XfNjI\"",
		"mtime": "2026-08-18T08:23:12.929Z",
		"size": 256035,
		"path": "../public/assets/whiteSand-DPsUWsQ5.jpeg"
	},
	"/assets/white-sand-dubai-KSZfTCSs.jpg": {
		"type": "image/jpeg",
		"etag": "\"a26fc-S4C0gj0TpJdR2vcm79QTJ8N62Ow\"",
		"mtime": "2026-08-18T08:23:12.927Z",
		"size": 665340,
		"path": "../public/assets/white-sand-dubai-KSZfTCSs.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_kDKoed = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_kDKoed
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
