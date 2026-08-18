import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useAuth, c as apiListReviews, o as ApiError, s as apiCreateReview } from "./router-CyTaXnVW.mjs";
import { n as cn } from "./Logo-0UU_F3KX.mjs";
import { C as LoaderCircle, g as MessageSquarePlus, s as Star, u as Quote } from "../_libs/lucide-react.mjs";
import { a as Navbar, i as Footer, r as FloatingActions } from "./FloatingActions-DFmfGgMA.mjs";
import { n as SectionHeading, t as Reveal } from "./SectionHeading-URAispR5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-CrsxL8-Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Stars({ value, size = "size-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-0.5",
		"aria-label": `${value} out of 5 stars`,
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn(size, i < value ? "fill-gold text-gold" : "fill-none text-muted-foreground/40") }, i))
	});
}
function StarInput({ value, onChange }) {
	const [hover, setHover] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1",
		role: "radiogroup",
		"aria-label": "Rating",
		children: Array.from({ length: 5 }).map((_, i) => {
			const star = i + 1;
			const active = hover ? star <= hover : star <= value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": value === star,
				"aria-label": `${star} star${star > 1 ? "s" : ""}`,
				onMouseEnter: () => setHover(star),
				onMouseLeave: () => setHover(0),
				onClick: () => onChange(star),
				className: "p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-7 transition-colors", active ? "fill-gold text-gold" : "fill-none text-muted-foreground/40") })
			}, star);
		})
	});
}
function ReviewCard({ review }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-elegant",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				className: "size-6 text-gold",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: review.rating }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-lg font-bold text-navy",
				children: review.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: review.message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between border-t border-border pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold text-navy",
					children: review.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "text-xs text-muted-foreground",
					dateTime: review.date,
					children: new Date(review.date).toLocaleDateString("en-GB", {
						day: "numeric",
						month: "short",
						year: "numeric"
					})
				})]
			})
		]
	});
}
function ReviewFormCard({ onSubmit, submitting }) {
	const [rating, setRating] = (0, import_react.useState)(0);
	const [title, setTitle] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function handleSubmit(e) {
		e.preventDefault();
		if (rating < 1) {
			setError("Please select a star rating.");
			return;
		}
		if (title.trim().length < 3) {
			setError("Please add a short title.");
			return;
		}
		if (message.trim().length < 10) {
			setError("Please write at least 10 characters.");
			return;
		}
		setError("");
		onSubmit({
			rating,
			title: title.trim(),
			message: message.trim()
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "rounded-xl border border-border bg-white p-6 shadow-elegant sm:p-8",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-bold text-navy",
				children: "Write a Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-sm font-semibold text-navy",
					children: "Your Rating"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarInput, {
					value: rating,
					onChange: setRating
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "review-title",
					className: "mb-1.5 block text-sm font-semibold text-navy",
					children: "Review Title"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "review-title",
					value: title,
					onChange: (e) => setTitle(e.target.value),
					placeholder: "e.g. Reliable and fast delivery",
					className: "w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "review-message",
					className: "mb-1.5 block text-sm font-semibold text-navy",
					children: "Your Review"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "review-message",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					rows: 4,
					placeholder: "Tell us about your experience...",
					className: "w-full resize-none rounded-md border border-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium text-destructive",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: submitting,
				className: "mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-70",
				children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, submitting ? "Submitting..." : "Submit Review"]
			})
		]
	});
}
function ReviewsPage() {
	const { user } = useAuth();
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [loadingReviews, setLoadingReviews] = (0, import_react.useState)(true);
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		apiListReviews().then(({ reviews: fetched }) => {
			if (!cancelled) setReviews(fetched);
		}).catch(() => {
			if (!cancelled) toast.error("Could not load reviews right now.");
		}).finally(() => {
			if (!cancelled) setLoadingReviews(false);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	const alreadyReviewed = (0, import_react.useMemo)(() => user ? reviews.some((r) => r.name === user.name) : false, [reviews, user]);
	const average = (0, import_react.useMemo)(() => reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0, [reviews]);
	async function handleAddReview(r) {
		if (!user) return;
		setSubmitting(true);
		try {
			const { review } = await apiCreateReview(r);
			setReviews((prev) => [review, ...prev]);
			setShowForm(false);
			toast.success("Thanks for your review!");
		} catch (err) {
			toast.error(err instanceof ApiError ? err.message : "Could not submit your review.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "bg-offwhite pt-32 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Testimonials",
						title: "What Our Customers Say",
						description: "Real feedback from contractors and homeowners we've supplied across Abu Dhabi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-extrabold text-navy",
								children: average.toFixed(1)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
								value: Math.round(average),
								size: "size-5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted-foreground",
							children: [
								"Based on ",
								reviews.length,
								" review",
								reviews.length === 1 ? "" : "s"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center",
						children: user ? alreadyReviewed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted-foreground",
							children: "You've already shared a review — thank you!"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowForm((v) => !v),
							className: "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "size-4" }), showForm ? "Cancel" : "Write a Review"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login",
							search: { redirect: "/reviews" },
							className: "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "size-4" }), "Write a Review"]
						})
					}),
					showForm && user && !alreadyReviewed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-8 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewFormCard, {
							onSubmit: handleAddReview,
							submitting
						})
					}) : null,
					loadingReviews ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-16 text-center text-muted-foreground",
						children: "Loading reviews…"
					}) : reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-16 text-center text-muted-foreground",
						children: "Be the first to share your experience."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { review }, review.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
	] });
}
//#endregion
export { ReviewsPage as component };
