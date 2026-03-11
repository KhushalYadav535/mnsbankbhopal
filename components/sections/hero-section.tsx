"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { MagneticButton } from "../magnetic-button";
import { ShieldCheck, Zap, BadgeCheck } from "lucide-react";

const MARQUEE_ITEMS = [
  "🏦 New Deposit Rates Available",
  "Now Hiring — Check Careers",
  "Special FD Rate: 360 Days @ 6.00%",
  "DICGC Insured Deposits",
  "Zero Balance Payroll Accounts",
  "Lowest Gold Loan Interest Rates"
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 600], [0, -120]);
  const blobY2 = useTransform(scrollY, [0, 600], [0, -80]);
  const blobY3 = useTransform(scrollY, [0, 600], [0, -50]);
  const gridY = useTransform(scrollY, [0, 600], [0, -40]);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <div className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-background">

      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 animate-gradient-mesh"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, oklch(0.70 0.18 55 / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, oklch(0.15 0.06 250 / 0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, oklch(0.5 0.1 240 / 0.06) 0%, transparent 50%)"
          }}
        />
      </div>

      {/* Background Animated Blobs with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Gold Blob */}
        <motion.div
          style={{ y: blobY1 }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-blob"
        />
        {/* Bottom Left Blue Blob */}
        <motion.div
          style={{ y: blobY2 }}
          className="absolute top-[40%] -left-[20%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[140px] mix-blend-screen animate-blob animation-delay-2000"
        />
        {/* Center Subdued Glow */}
        <motion.div
          style={{ y: blobY3 }}
          className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-blue-400/10 blur-[100px] mix-blend-screen animate-blob animation-delay-4000"
        />

        {/* CSS Grid Overlay with parallax + pulse */}
        <motion.div
          style={{
            y: gridY,
            backgroundImage: `linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            opacity: 0.03,
          }}
          className="absolute inset-0 animate-grid-pulse"
        />

        {/* Animated dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-32 pb-24">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVars} className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-muted border border-border text-sm font-medium tracking-wide text-muted-foreground backdrop-blur-md">
              Mahanagar Nagrik Sahakari Bank
            </span>
          </motion.div>

          <motion.h1
            variants={itemVars}
            className="text-6xl md:text-8xl lg:text-[96px] font-display font-medium text-foreground leading-[1.05] tracking-tight mb-8"
          >
            Welcome to the <br className="hidden md:block" />
            <span className="relative">
              World of Privileges.
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVars}
            className="text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Bhopal's most trusted cooperative bank since decades.
            Experience uncompromising security paired with ultra-premium digital banking.
          </motion.p>

          <motion.div
            variants={itemVars}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton>
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(20,30,80,0.5)] transition-all hover:scale-[1.03] duration-300" asChild>
                <Link href="/open-account">Open Account</Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl bg-card/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-card hover:border-accent transition-all hover:scale-[1.03] duration-300">
                Explore Services
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Floating Glassmorphism Badges */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute top-[20%] right-[8%] animate-badge-drift-1"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-foreground">Secure</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-[40%] right-[3%] animate-badge-drift-2"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-foreground">Fast</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute top-[60%] right-[10%] animate-badge-drift-3"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">
              <BadgeCheck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold text-foreground">Trusted</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker at the absolute bottom */}
      <div className="absolute bottom-0 inset-x-0 w-full bg-card/40 backdrop-blur-xl border-t border-white/10 dark:border-white/5 py-4 overflow-hidden z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Double the array for seamless infinite scrolling */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-wider uppercase text-foreground/80 flex items-center gap-8">
              {text}
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
