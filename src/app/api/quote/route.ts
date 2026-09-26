import { NextResponse } from "next/server";
import { getResendClient, FROM_EMAIL, TO_EMAIL } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const projectType = String(body.projectType || "").trim();
    const details = String(body.details || "").trim();

    if (!name || !email || !projectType || !details) {
      return NextResponse.json(
        { error: "Please fill in your name, email, project type and details." },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New quote request — ${projectType} (${name})`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || "—"}`,
        `Project type: ${projectType}`,
        "",
        "Details:",
        details,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error (quote):", error);
      return NextResponse.json(
        { error: "Could not send your request right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
