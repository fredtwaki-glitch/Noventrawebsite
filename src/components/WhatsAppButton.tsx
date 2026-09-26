"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Noventra Technologies on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <MessageCircle size={26} className="relative" fill="white" />
    </motion.a>
  );
}
