import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";

const siteUrl = "https://noventratechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Noventra Technologies — Custom Software Development & Rent Management System",
    template: "%s | Noventra Technologies",
  },
  description:
    "Noventra Technologies designs secure, scalable software — custom platforms, web and mobile apps, automation, and our flagship Rent Management System — for startups, SMEs, enterprises, schools and hospitals worldwide.",
  keywords: [
    "Noventra Technologies",
    "custom software development",
    "rent management system",
    "property management software",
    "business automation",
    "software development company Kenya",
  ],
  openGraph: {
    title: "Noventra Technologies — Custom Software Development & Rent Management System",
    description:
      "Secure, scalable software for startups, SMEs, enterprises, schools and hospitals — plus our flagship Rent Management System for landlords.",
    url: siteUrl,
    siteName: "Noventra Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noventra Technologies",
    description: "Custom software development and the Rent Management System for landlords worldwide.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
