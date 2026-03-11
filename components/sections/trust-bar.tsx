"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Landmark, CreditCard, Banknote } from "lucide-react";

const TRUST_BADGES = [
  { label: "DICGC Insured", sublabel: "Deposits up to ₹5 Lakhs", icon: <ShieldCheck className="w-6 h-6" />, href: "https://www.dicgc.org.in/" },
  { label: "RBI Regulated", sublabel: "Reserve Bank of India", icon: <Landmark className="w-6 h-6" />, href: "https://www.rbi.org.in/" },
  { label: "RuPay Network", sublabel: "NPCI Certified", icon: <CreditCard className="w-6 h-6" />, href: "https://www.npci.org.in/" },
  { label: "25+ Years", sublabel: "Since 1996", icon: <Banknote className="w-6 h-6" />, href: "/about" },
];

const PARTNER_LOGOS = [
  "Reserve Bank of India",
  "DICGC",
  "NPCI",
  "RuPay",
  "NEFT",
  "RTGS",
  "IMPS",
  "UPI",
  "BBPS",
  "CTS",
];

export function TrustBar() {
  return (
    <section className="py-16 relative overflow-hidden border-t border-border/50">
      {/* Badges Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-bold tracking-widest text-accent uppercase">Backed by Trust</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_BADGES.map((badge, idx) => (
            <motion.a
              key={badge.label}
              href={badge.href}
              target={badge.href.startsWith("http") ? "_blank" : undefined}
              rel={badge.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-primary/5 text-primary group-hover:text-accent transition-colors animate-pulse-ripple">
                {badge.icon}
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">{badge.label}</div>
                <div className="text-xs text-muted-foreground font-medium">{badge.sublabel}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Partner Marquee Strip */}
      <div className="w-full border-t border-b border-border/30 py-6 overflow-hidden bg-muted/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
            <span
              key={i}
              className="mx-10 text-sm font-bold tracking-widest uppercase text-muted-foreground/50 flex items-center gap-10"
            >
              {name}
              <span className="w-1 h-1 rounded-full bg-accent/40 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
