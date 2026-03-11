"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Landmark, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { MagneticButton } from "./magnetic-button";
import { FraudBanner } from "./fraud-banner";

const NAV_LINKS = [
  { label: "Personal", href: "/products/savings-account" },
  { label: "Business", href: "/products/loans/business" },
  { label: "Loans", href: "/products/loans/personal" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <FraudBanner />
        <header
          className={`transition-all duration-500 border-b ${isScrolled
              ? "bg-background/80 backdrop-blur-2xl border-white/10 dark:border-white/5 py-4 shadow-sm"
              : "bg-transparent border-transparent py-6"
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground overflow-hidden shadow-[0_0_30px_rgba(20,30,80,0.3)] dark:shadow-[0_0_30px_rgba(200,160,50,0.15)] transition-transform duration-500 group-hover:scale-105">
                <Landmark className="w-6 h-6 z-10" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-tight text-foreground">
                  MNS Bank
                </span>
                <span className="text-[0.65rem] font-medium tracking-widest uppercase text-muted-foreground mt-1">
                  Since 1996
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group py-2"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <MagneticButton>
                <Button
                  variant="outline"
                  className="rounded-full px-6 font-semibold border-border bg-background/50 backdrop-blur-md hover:bg-background hover:border-accent transition-all duration-300"
                  asChild
                >
                  <a href="https://www.mnsbankonline.com:8444/#/termCondition" target="_blank" rel="noopener noreferrer">
                    Net Banking
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button className="rounded-full px-6 font-semibold shadow-[0_0_20px_rgba(200,160,50,0.2)] hover:shadow-[0_0_30px_rgba(200,160,50,0.4)] hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground" asChild>
                  <Link href="/open-account">Open Account</Link>
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-serif font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label} <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex flex-col w-full max-w-sm gap-4 mt-8"
              >
                <Button variant="outline" className="w-full rounded-full h-14 text-lg" asChild>
                  <a href="https://www.mnsbankonline.com:8444/#/termCondition" target="_blank" rel="noopener noreferrer">
                    Login to Net Banking
                  </a>
                </Button>
                <Button className="w-full rounded-full h-14 text-lg bg-primary text-primary-foreground" asChild>
                  <Link href="/open-account">Open an Account</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
