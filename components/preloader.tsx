"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark } from "lucide-react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99990] flex flex-col items-center justify-center bg-background"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-[0_0_50px_rgba(20,30,80,0.3)]">
              <Landmark className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-3xl text-foreground tracking-tight">
                MNS Bank
              </span>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                Since 1996
              </span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
