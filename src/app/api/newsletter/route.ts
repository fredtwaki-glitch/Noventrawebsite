import { NextResponse } from "next/server";
import { getResendClient, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const resend = getResendClient();
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (audienceId) {
      // Add the subscriber to a Resend Audience (Resend's mailing-list feature).
      const { error } = await resend.contacts.create({ email, audienceId });
      if (error) {
        console.error("Resend error (newsletter contact):", error);
        return NextResponse.json(
          { error: "Could not subscribe you right now. Please try again shortly." },
          { status: 502 }
        );
      }
    } else {
      // No audience configured yet — fall back to a plain notification email
      // so signups aren't silently lost.
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: "New newsletter signup",
        text: `New subscriber: ${email}`,
      });
      if (error) {
        console.error("Resend error (newsletter fallback email):", error);
        return NextResponse.json(
          { error: "Could not subscribe you right now. Please try again shortly." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
