import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { LogOut, Menu, Settings, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "../lib/utils";
import { navLinks } from "../lib/site";
import { useAuth } from "../lib/auth-context";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ProfileMenu({ scrolled }: { scrolled: boolean }) {
  const { user, logout } = useAuth();
  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open account menu"
          className={cn(
            "inline-flex items-center gap-2 rounded-full border p-1 pr-3 transition-colors",
            scrolled
              ? "border-navy/15 text-navy hover:border-gold"
              : "border-white/30 text-white hover:border-gold",
          )}
        >
          <Avatar className="size-8">
            <AvatarFallback className="bg-navy-gradient text-xs font-bold text-white">
              {initials(user.name) || <User className="size-4" />}
            </AvatarFallback>
          </Avatar>
          <span className="max-w-[8rem] truncate text-sm font-semibold">{user.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="truncate">{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex w-full cursor-pointer items-center gap-2">
            <User className="size-4" /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex w-full cursor-pointer items-center gap-2">
            <Settings className="size-4" /> Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout()}
          className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
        >
          <LogOut className="size-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu automatically if the viewport is resized up to desktop width,
  // so it can never get "stuck" open/hidden behind a stale state.
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const mobileMenu = open
    ? createPortal(
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[999] flex h-[100dvh] w-screen flex-col overflow-hidden bg-navy-gradient lg:hidden"
          style={{ backgroundColor: "var(--navy-deep)" }}
        >
          <div className="flex h-18 shrink-0 items-center justify-between px-4 py-3 sm:px-6">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-md border border-white/25 text-white"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain px-4 pb-8 sm:px-6">
            <ul className="mt-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 text-lg font-bold text-white transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              {user ? (
                <>
                  <div className="flex items-center gap-3 rounded-md border border-white/15 px-4 py-3">
                    <Avatar className="size-9">
                      <AvatarFallback className="bg-gold text-sm font-bold text-navy-deep">
                        {initials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">{user.name}</p>
                      <p className="truncate text-xs text-white/60">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-4 text-base font-bold text-white"
                  >
                    <User className="size-5" /> Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-4 text-base font-bold text-white"
                  >
                    <Settings className="size-5" /> Settings
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-4 text-base font-bold text-navy-deep"
                  >
                    <LogOut className="size-5" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-4 text-base font-bold text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-4 text-base font-bold text-navy-deep"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "bg-navy-deep/25 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
          scrolled ? "bg-border opacity-100" : "bg-white/15 opacity-100",
        )}
      />
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="/#home" className="shrink-0" aria-label="SAND AND GRAVEL CONCRETE SUPPLY — home">
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100",
                  scrolled ? "text-navy hover:text-gold-deep" : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <ProfileMenu scrolled={scrolled} />
          ) : (
            <>
              <Link
                to="/login"
                className={cn(
                  "inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-bold transition-colors",
                  scrolled
                    ? "border-navy/20 text-navy hover:border-gold hover:text-gold-deep"
                    : "border-white/35 text-white hover:border-gold hover:text-gold",
                )}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Hamburger / Close toggle button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "relative z-[70] inline-flex size-11 items-center justify-center rounded-md border transition-colors lg:hidden",
            scrolled ? "border-navy/15 text-navy" : "border-white/30 text-white",
            open && "border-white/30 text-white",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu is rendered through a portal (see mobileMenu above) so it always
          sits directly under <body>. This makes it immune to any parent element's
          transform / overflow / stacking-context, which was the real cause of the
          menu opening but the links not appearing. */}
      {mobileMenu}
    </header>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.24c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.1-8.24 8.1Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export { WhatsAppIcon };
