const API_BASE_URL =
  (import.meta.env["VITE_API_URL"] as string | undefined) || "http://localhost:5000/api";

const TOKEN_KEY = "sgcs_auth_token";

export function getToken(): string | null {
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  try {
    if (token) window.localStorage.setItem(TOKEN_KEY, token);
    else window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
}

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function request<T>(
  path: string,
  options: { method?: string; body?: unknown; auth?: boolean } = {},
): Promise<T> {
  const { method = "GET", body, auth = false } = options;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const init: RequestInit = { method, headers };
  if (body !== undefined) init.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE_URL}${path}`, init);

  const contentType = res.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json") ? await res.json() : undefined;

  if (!res.ok) {
    const message = (data && (data as { message?: string }).message) || res.statusText;
    throw new ApiError(res.status, message || "Something went wrong.");
  }

  return data as T;
}

export type ApiUser = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  title: string;
  message: string;
  date: string;
};

export function apiSignup(input: { name: string; email: string; phone: string; password: string }) {
  return request<{ message: string; devOtp?: string }>("/api/auth/signup", {
    method: "POST",
    body: input,
  });
}

export function apiRequestOtp(email: string, purpose: "verify" | "reset") {
  return request<{ message: string; devOtp?: string }>("/api/auth/request-otp", {
    method: "POST",
    body: { email, purpose },
  });
}

export function apiVerifyEmail(email: string, code: string) {
  return request<{ token: string; user: ApiUser }>("/api/auth/verify-email", {
    method: "POST",
    body: { email, code },
  });
}

export function apiLogin(email: string, password: string) {
  return request<{ token: string; user: ApiUser }>("/api/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export function apiResetPassword(email: string, code: string, newPassword: string) {
  return request<{ message: string }>("/api/auth/reset-password", {
    method: "POST",
    body: { email, code, newPassword },
  });
}

export function apiGetMe() {
  return request<{ user: ApiUser }>("/api/users/me", { auth: true });
}

export function apiUpdateMe(input: { name: string }) {
  return request<{ user: ApiUser }>("/api/users/me", { method: "PUT", body: input, auth: true });
}

export function apiSendContactMessage(input: {
  name: string;
  email: string;
  phone: string;
  material: string;
  message: string;
}) {
  return request<{ message: string }>("/api/contact", { method: "POST", body: input });
}

export function apiListReviews() {
  return request<{ reviews: Review[]; average: number }>("/api/reviews");
}

export function apiCreateReview(input: { rating: number; title: string; message: string }) {
  return request<{ review: Review }>("/api/reviews", { method: "POST", body: input, auth: true });
}
