import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { ApiError, useAuth } from "../lib/auth-context";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [{ title: "Account Settings | Sand and Gravel Concrete Supply" }],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { user, isLoading, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name ?? "");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate({ to: "/login", search: { redirect: "/settings" } });
    }
  }, [isLoading, user, navigate]);

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  if (isLoading || !user) return null;

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProfile(name.trim());
      toast.success("Settings saved.");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not save settings.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-offwhite pt-32 pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold text-navy">Account Settings</h1>

          <form
            onSubmit={handleSave}
            className="mt-6 space-y-5 rounded-xl border border-border bg-white p-8 shadow-elegant"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
                Full Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                Email
              </label>
              <input
                id="email"
                value={user.email}
                disabled
                className="w-full cursor-not-allowed rounded-md border border-input bg-muted px-3 py-2.5 text-sm text-muted-foreground outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {saving ? <Loader2 className="size-4 animate-spin" /> : null}
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </form>

          <div className="mt-6 rounded-xl border border-destructive/20 bg-white p-6 shadow-elegant">
            <h2 className="text-sm font-bold text-navy">Log out of your account</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              You'll need to log in again to write reviews or access your profile.
            </p>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate({ to: "/" });
              }}
              className="mt-4 inline-flex items-center justify-center rounded-md border border-destructive/40 px-4 py-2.5 text-sm font-bold text-destructive transition-colors hover:bg-destructive/5"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
