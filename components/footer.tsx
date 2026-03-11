'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Personal Banking',
      links: [
        { label: 'Savings Account', href: '/products/savings' },
        { label: 'Loans', href: '/products/loans' },
        { label: 'Investments', href: '/products/investments' },
        { label: 'Digital Banking', href: '/digital-banking' },
      ],
    },
    {
      title: 'Business Banking',
      links: [
        { label: 'Business Loans', href: '/products/business-loans' },
        { label: 'Trade Services', href: '/products/trade-services' },
        { label: 'Corporate Banking', href: '/products/corporate' },
        { label: 'Working Capital', href: '/products/working-capital' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Grievance Redressal', href: '/grievance-redressal' },
        { label: 'Cyber Awareness', href: '/cyber-awareness' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-card/50 to-primary/5 border-t border-border/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                MNS
              </div>
              <div>
                <span className="block text-xs font-semibold text-foreground/50 tracking-widest">MAHANAGAR</span>
                <span className="text-lg font-bold text-foreground">MNS Bank</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70 mb-7 leading-relaxed font-light">
              Premium banking solutions for personal and business customers since 1996.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Bhopal, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>1800-BANK-123</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@mnsbankbhopal.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-5 text-base">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Compliance & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Compliance & Policies</h3>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
              >
                Disclaimer
              </Link>
              <Link
                href="/rbi-compliance"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
              >
                RBI Compliance
              </Link>
            </div>
          </div>

          <div className="flex md:justify-end gap-4 pt-2">
            <h3 className="font-semibold text-foreground sr-only">Follow us</h3>
            <a
              href="https://facebook.com/mnsbankbhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 flex items-center justify-center text-primary transition-all duration-300 hover:shadow-lg"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/mnsbankbhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 flex items-center justify-center text-primary transition-all duration-300 hover:shadow-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/mnsbankbhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 flex items-center justify-center text-primary transition-all duration-300 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 gap-4">
          <p>
            &copy; {currentYear} Mahanagar Nagrik Sahakari Bank. All rights reserved.
          </p>
          <p className="text-xs">
            OFAC Compliant | Banking Regulated by RBI
          </p>
        </div>
      </div>
    </footer>
  );
}
