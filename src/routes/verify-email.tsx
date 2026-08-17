import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Loader2, MailCheck } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "../components/Logo";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";
import { ApiError, useAuth } from "../lib/auth-context";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/verify-email")({
  head: () => ({
    meta: [
      { title: "Verify Email | Sand and Gravel Concrete Supply" },
      { name: "description", content: "Verify your email to finish creating your account." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    email: typeof search.email === "string" ? search.email : "",
    name: typeof search.name === "string" ? search.name : "",
  }),
  component: VerifyEmailPage,
});

const RESEND_COOLDOWN = 30;

function VerifyEmailPage() {
  const { requestOtp, verifyEmail } = useAuth();
  const navigate = useNavigate();
  const { email } = useSearch({ from: "/verify-email" });

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [sentOnce, setSentOnce] = useState(false);

  // The signup page already triggers the first OTP send. This just covers
  // the case where the user lands here directly (e.g. page refresh).
  useEffect(() => {
    if (!email || sentOnce) return;
    setSentOnce(true);
    setCooldown(RESEND_COOLDOWN);
  }, [email, sentOnce]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function handleResend() {
    if (cooldown > 0 || !email) return;
    try {
      const { devOtp } = await requestOtp(email, "verify");
      if (devOtp) {
        toast.message("New code sent", {
          description: `(Dev mode — no email service yet) Your code is ${devOtp}`,
        });
      } else {
        toast.success("New code sent to your email.");
      }
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

  if (!email) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-16">
        <div className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-elegant sm:p-10">
          <p className="text-sm text-muted-foreground">
            No email to verify.{" "}
            <Link to="/signup" className="font-semibold text-navy hover:text-gold-deep">
              Go back to sign up
            </Link>
            .
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy-gradient px-4 py-16">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-elegant sm:p-10">
        <div className="flex justify-center">
          <Logo variant="dark" compact />
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-gold/15">
            <MailCheck className="size-6 text-gold-deep" />
          </div>
        </div>

        <h1 className="mt-4 text-center text-2xl font-extrabold text-navy">Verify Your Email</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Enter the 6-digit code we sent to <span className="font-semibold text-navy">{email}</span>
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
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

          {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}

          <button
            type="button"
            onClick={handleVerify}
            disabled={loading}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform",
              loading ? "opacity-70" : "hover:-translate-y-0.5",
            )}
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : null}
            {loading ? "Verifying..." : "Verify Email"}
          </button>

          <button
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0}
            className="text-sm font-semibold text-navy hover:text-gold-deep disabled:cursor-not-allowed disabled:text-muted-foreground"
          >
            {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link to="/login" className="hover:text-gold-deep">
            ← Back to login
          </Link>
        </p>
      </div>
    </main>
  );
}
