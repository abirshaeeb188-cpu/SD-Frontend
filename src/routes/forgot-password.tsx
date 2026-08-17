import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { KeyRound, Loader2, Lock, Mail } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "../components/Logo";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";
import { ApiError, useAuth } from "../lib/auth-context";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password | Sand and Gravel Concrete Supply" },
      { name: "description", content: "Reset your Sand and Gravel Concrete Supply password." },
    ],
  }),
  component: ForgotPasswordPage,
});

type Step = "request" | "reset";

const fieldClass =
  "w-full rounded-md border border-input py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

function ForgotPasswordPage() {
  const { requestOtp, resetPassword } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRequest(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { devOtp } = await requestOtp(email.trim(), "reset");
      if (devOtp) {
        toast.message("Reset code sent", {
          description: `(Dev mode — no email service yet) Your code is ${devOtp}`,
        });
      } else {
        toast.success("If that account exists, a reset code has been sent.");
      }
      setStep("reset");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleReset(e: FormEvent) {
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
      setError(
        err instanceof ApiError ? err.message : "That code is incorrect or has expired. Go back and resend it.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-16">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-elegant sm:p-10">
        <div className="flex justify-center">
          <Logo variant="dark" compact />
        </div>

        {step === "request" ? (
          <>
            <h1 className="mt-6 text-center text-2xl font-extrabold text-navy">Forgot Password</h1>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Enter your email and we&apos;ll send you a reset code.
            </p>

            <form onSubmit={handleRequest} className="mt-8 space-y-4" noValidate>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform",
                  loading ? "opacity-70" : "hover:-translate-y-0.5",
                )}
              >
                {loading ? <Loader2 className="size-4 animate-spin" /> : null}
                {loading ? "Sending..." : "Send Reset Code"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-center text-2xl font-extrabold text-navy">Reset Password</h1>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Enter the code sent to <span className="font-semibold text-navy">{email}</span> and
              choose a new password.
            </p>

            <form onSubmit={handleReset} className="mt-8 space-y-4" noValidate>
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={code} onChange={setCode}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-navy">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm" className="mb-1.5 block text-sm font-semibold text-navy">
                  Confirm New Password
                </label>
                <div className="relative">
                  <KeyRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="confirm"
                    type="password"
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="••••••••"
                    className={fieldClass}
                  />
                </div>
              </div>

              {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform",
                  loading ? "opacity-70" : "hover:-translate-y-0.5",
                )}
              >
                {loading ? <Loader2 className="size-4 animate-spin" /> : null}
                {loading ? "Resetting..." : "Reset Password"}
              </button>

              <button
                type="button"
                onClick={() => setStep("request")}
                className="w-full text-center text-sm font-semibold text-navy hover:text-gold-deep"
              >
                ← Use a different email
              </button>
            </form>
          </>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Remembered it?{" "}
          <Link to="/login" className="font-semibold text-navy hover:text-gold-deep">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
