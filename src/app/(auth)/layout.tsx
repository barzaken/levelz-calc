'use client'
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[color:var(--brand-primary)] to-transparent opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-[color:var(--brand-secondary)] to-transparent opacity-10 blur-3xl" />
      </motion.div>
      <Suspense fallback={<div className="relative z-10 w-full flex items-center justify-center py-12">Loading...</div>}>
        <div className="relative z-10 w-full">{children}</div>
      </Suspense>
    </div>
  );
} 