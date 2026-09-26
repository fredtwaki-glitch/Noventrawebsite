import { NextResponse } from "next/server";
import { getResendClient, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const slot = String(body.slot || "").trim();

    if (!name || !email || !slot) {
      return NextResponse.json(
        { error: "Please provide your name, email and a time slot." },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New demo request — ${name} (${slot})`,
      text: [
        `Name: ${name}`,
        `Work email: ${email}`,
        `Requested slot: ${slot}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error (demo):", error);
      return NextResponse.json(
        { error: "Could not send your request right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Demo route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
