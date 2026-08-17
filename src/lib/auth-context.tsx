import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ApiError,
  apiGetMe,
  apiLogin,
  apiRequestOtp,
  apiResetPassword,
  apiSignup,
  apiUpdateMe,
  apiVerifyEmail,
  getToken,
  setToken,
  type ApiUser,
} from "./api";

export type AuthUser = ApiUser;

type SignupInput = { name: string; email: string; phone: string; password: string };

type AuthContextValue = {
  user: AuthUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (input: SignupInput) => Promise<{ devOtp: string | undefined }>;
  logout: () => void;
  updateProfile: (name: string) => Promise<void>;
  requestOtp: (email: string, purpose: "verify" | "reset") => Promise<{ devOtp: string | undefined }>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  resetPassword: (email: string, code: string, newPassword: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ---------------------------------------------------------------------------
// Talks to the real backend (Node.js/Express + PostgreSQL) via src/lib/api.ts.
// A JWT is stored in localStorage (see api.ts) and sent as a Bearer token on
// every authenticated request.
// ---------------------------------------------------------------------------

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      const token = getToken();
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const { user: me } = await apiGetMe();
        if (!cancelled) setUser(me);
      } catch {
        // Token missing/expired/invalid — clear it silently.
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

  const value = useMemo<AuthContextValue>(
    () => ({
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
      },
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

export { ApiError };
