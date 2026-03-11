"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import Link from "next/link";

export function FraudBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("mns-fraud-banner-dismissed");
    if (!wasDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("mns-fraud-banner-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[60] overflow-hidden"
        >
          <div className="bg-amber-500/10 border-b border-amber-500/20 py-3 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex-shrink-0 p-1.5 rounded-full bg-amber-500/20">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200 truncate">
                  <span className="font-bold">Fraud Alert:</span> MNS Bank never asks for OTP, PIN, or passwords via call/SMS.{" "}
                  <Link
                    href="/cyber-awareness"
                    className="underline underline-offset-2 hover:text-amber-600 dark:hover:text-amber-300 transition-colors font-semibold"
                  >
                    Learn to stay safe →
                  </Link>
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 p-1.5 rounded-full hover:bg-amber-500/20 transition-colors"
                aria-label="Dismiss fraud awareness banner"
              >
                <X className="w-4 h-4 text-amber-700 dark:text-amber-300" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
