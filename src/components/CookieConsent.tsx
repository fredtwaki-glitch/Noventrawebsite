"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "noventra-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const respond = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl glass-strong p-5 shadow-2xl sm:inset-x-auto sm:right-6"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-bg text-white">
              <Cookie size={16} />
            </span>
            <div className="flex-1">
              <p className="text-sm text-foreground/80">
                We use cookies to improve your experience on our site. Read our{" "}
                <Link href="/privacy" className="font-medium underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                to learn more.
              </p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => respond("accepted")}
                  className="rounded-full gradient-bg px-4 py-2 text-xs font-semibold text-white"
                >
                  Accept
                </button>
                <button
                  onClick={() => respond("declined")}
                  className="rounded-full border border-border-soft px-4 py-2 text-xs font-semibold"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
