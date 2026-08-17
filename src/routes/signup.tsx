import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Loader2, Lock, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "../components/Logo";
import { ApiError, useAuth } from "../lib/auth-context";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create Account | Sand and Gravel Concrete Supply" },
      { name: "description", content: "Create your Sand and Gravel Concrete Supply account." },
    ],
  }),
  component: SignupPage,
});

type Fields = { name: string; email: string; phone: string; password: string; confirm: string };
const empty: Fields = { name: "", email: "", phone: "", password: "", confirm: "" };

function validate(v: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (v.password.length < 6) errors.password = "Password must be at least 6 characters.";
  if (v.confirm !== v.password) errors.confirm = "Passwords do not match.";
  return errors;
}

function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  function set<K extends keyof Fields>(key: K, val: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  async function handleSubmit(e: FormEvent) {
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
        password: values.password,
      });

      if (devOtp) {
        // Dev-only convenience: no email service is wired up on the backend
        // yet, so it echoes the code back while OTP_DEBUG_ECHO=true.
        toast.message("Verification code sent", {
          description: `(Dev mode — no email service yet) Your code is ${devOtp}`,
        });
      } else {
        toast.success("Account created — check your email for a verification code.");
      }

      navigate({
        to: "/verify-email",
        search: { email: values.email.trim(), name: values.name.trim() },
      });
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-md border border-input py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-16">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-elegant sm:p-10">
        <div className="flex justify-center">
          <Logo variant="dark" compact />
        </div>

        <h1 className="mt-6 text-center text-2xl font-extrabold text-navy">Create Your Account</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
              Full Name
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                className={fieldClass}
                placeholder="Your full name"
              />
            </div>
            {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>
            {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
              Phone
            </label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="phone"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                className={fieldClass}
                placeholder="05xxxxxxxx"
              />
            </div>
            {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-navy">
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="password"
                type="password"
                value={values.password}
                onChange={(e) => set("password", e.target.value)}
                className={fieldClass}
                placeholder="••••••••"
              />
            </div>
            {errors.password ? (
              <p className="mt-1 text-xs text-destructive">{errors.password}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="confirm" className="mb-1.5 block text-sm font-semibold text-navy">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="confirm"
                type="password"
                value={values.confirm}
                onChange={(e) => set("confirm", e.target.value)}
                className={fieldClass}
                placeholder="••••••••"
              />
            </div>
            {errors.confirm ? (
              <p className="mt-1 text-xs text-destructive">{errors.confirm}</p>
            ) : null}
          </div>

          {formError ? <p className="text-sm font-medium text-destructive">{formError}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform",
              loading ? "opacity-70" : "hover:-translate-y-0.5",
            )}
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : null}
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-navy hover:text-gold-deep">
            Login
          </Link>
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          <Link to="/" className="hover:text-gold-deep">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
