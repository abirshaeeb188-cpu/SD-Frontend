import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, User } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { useAuth } from "../lib/auth-context";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [{ title: "My Profile | Sand and Gravel Concrete Supply" }],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate({ to: "/login", search: { redirect: "/profile" } });
    }
  }, [isLoading, user, navigate]);

  if (isLoading || !user) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-offwhite pt-32 pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-white p-8 shadow-elegant">
            <div className="flex items-center gap-4">
              <Avatar className="size-16">
                <AvatarFallback className="bg-navy-gradient text-xl font-bold text-white">
                  {user.name
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0]?.toUpperCase())
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-extrabold text-navy">{user.name}</h1>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>

            <dl className="mt-8 space-y-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <User className="size-4 text-gold-deep" />
                <dt className="w-24 shrink-0 text-sm font-semibold text-navy">Full Name</dt>
                <dd className="text-sm text-muted-foreground">{user.name}</dd>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-gold-deep" />
                <dt className="w-24 shrink-0 text-sm font-semibold text-navy">Email</dt>
                <dd className="text-sm text-muted-foreground">{user.email}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
              <Link
                to="/settings"
                className="inline-flex items-center justify-center rounded-md border border-navy/20 px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:border-gold hover:text-gold-deep"
              >
                Go to Settings
              </Link>
              <Link
                to="/reviews"
                className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
              >
                My Reviews
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
