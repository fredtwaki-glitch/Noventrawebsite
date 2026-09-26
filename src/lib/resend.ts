import { Resend } from "resend";

// A single shared Resend client, built lazily so the app doesn't crash at
// import time if RESEND_API_KEY isn't set yet (e.g. during local dev setup).
let client: Resend | null = null;

export function getResendClient() {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "RESEND_API_KEY is not set. Add it to your .env.local (dev) or your host's environment variables (production)."
      );
    }
    client = new Resend(apiKey);
  }
  return client;
}

// Sender identity used on outgoing emails.
// Until you verify your own domain in Resend, you must use their shared
// "onboarding@resend.dev" sender — replace this once your domain is verified.
export const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Noventra Website <onboarding@resend.dev>";

// Where Quote/Demo/Newsletter-fallback notifications are sent.
export const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@noventra.tech";
