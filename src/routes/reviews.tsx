import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MessageSquarePlus, Quote, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ApiError, useAuth } from "../lib/auth-context";
import { apiCreateReview, apiListReviews, type Review } from "../lib/api";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Sand and Gravel Concrete Supply" },
      {
        name: "description",
        content:
          "Read what customers say about Sand and Gravel Concrete Supply's sand, gravel and aggregate delivery in Abu Dhabi.",
      },
    ],
  }),
  component: ReviewsPage,
});

function Stars({ value, size = "size-4" }: { value: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(size, i < value ? "fill-gold text-gold" : "fill-none text-muted-foreground/40")}
        />
      ))}
    </div>
  );
}

function StarInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const star = i + 1;
        const active = hover ? star <= hover : star <= value;
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(star)}
            className="p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
          >
            <Star className={cn("size-7 transition-colors", active ? "fill-gold text-gold" : "fill-none text-muted-foreground/40")} />
          </button>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Reveal className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-elegant">
      <Quote className="size-6 text-gold" aria-hidden="true" />
      <Stars value={review.rating} />
      <h3 className="mt-3 text-lg font-bold text-navy">{review.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{review.message}</p>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-sm font-semibold text-navy">{review.name}</span>
        <time className="text-xs text-muted-foreground" dateTime={review.date}>
          {new Date(review.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </time>
      </div>
    </Reveal>
  );
}

function ReviewFormCard({
  onSubmit,
  submitting,
}: {
  onSubmit: (r: { rating: number; title: string; message: string }) => void;
  submitting: boolean;
}) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
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
    onSubmit({ rating, title: title.trim(), message: message.trim() });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-white p-6 shadow-elegant sm:p-8" noValidate>
      <h3 className="text-lg font-bold text-navy">Write a Review</h3>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-navy">Your Rating</label>
        <StarInput value={rating} onChange={setRating} />
      </div>
      <div className="mt-4">
        <label htmlFor="review-title" className="mb-1.5 block text-sm font-semibold text-navy">
          Review Title
        </label>
        <input
          id="review-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Reliable and fast delivery"
          className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="review-message" className="mb-1.5 block text-sm font-semibold text-navy">
          Your Review
        </label>
        <textarea
          id="review-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Tell us about your experience..."
          className="w-full resize-none rounded-md border border-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
        />
      </div>
      {error ? <p className="mt-2 text-sm font-medium text-destructive">{error}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {submitting ? <Loader2 className="size-4 animate-spin" /> : null}
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}

function ReviewsPage() {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    apiListReviews()
      .then(({ reviews: fetched }) => {
        if (!cancelled) setReviews(fetched);
      })
      .catch(() => {
        if (!cancelled) toast.error("Could not load reviews right now.");
      })
      .finally(() => {
        if (!cancelled) setLoadingReviews(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const alreadyReviewed = useMemo(
    () => (user ? reviews.some((r) => r.name === user.name) : false),
    [reviews, user],
  );

  const average = useMemo(
    () => (reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0),
    [reviews],
  );

  async function handleAddReview(r: { rating: number; title: string; message: string }) {
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

  return (
    <>
      <Navbar />
      <main className="bg-offwhite pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            description="Real feedback from contractors and homeowners we've supplied across Abu Dhabi."
          />

          <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-navy">{average.toFixed(1)}</span>
              <Stars value={Math.round(average)} size="size-5" />
            </div>
            <span className="text-sm text-muted-foreground">
              Based on {reviews.length} review{reviews.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="mt-8 flex justify-center">
            {user ? (
              alreadyReviewed ? (
                <p className="text-sm font-medium text-muted-foreground">
                  You've already shared a review — thank you!
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowForm((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  <MessageSquarePlus className="size-4" />
                  {showForm ? "Cancel" : "Write a Review"}
                </button>
              )
            ) : (
              <Link
                to="/login"
                search={{ redirect: "/reviews" }}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
              >
                <MessageSquarePlus className="size-4" />
                Write a Review
              </Link>
            )}
          </div>

          {showForm && user && !alreadyReviewed ? (
            <div className="mx-auto mt-8 max-w-xl">
              <ReviewFormCard onSubmit={handleAddReview} submitting={submitting} />
            </div>
          ) : null}

          {loadingReviews ? (
            <p className="mt-16 text-center text-muted-foreground">Loading reviews…</p>
          ) : reviews.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              Be the first to share your experience.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
