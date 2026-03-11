'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export function InquiryCTASection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you! We\'ll contact you soon.');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-accent/90 relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Inquiry Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Ready to Join <span className="text-accent">Us?</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                Get in touch with our team to open your account or learn more about our premium banking solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/15 border-white/40 text-white placeholder:text-white/70 rounded-xl py-6 text-base font-medium backdrop-blur-sm focus:border-white/80 transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-primary hover:bg-white/95 rounded-xl font-bold py-6 text-base shadow-xl hover:shadow-2xl transition-all"
              >
                {loading ? 'Sending...' : 'Get in Touch'}
              </Button>

              <p className="text-sm text-white/80 font-light">
                We'll contact you within 24 hours with personalized assistance.
              </p>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-white/80">
                Reach out to us through any of these channels
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call Us</div>
                  <div className="text-white/70">1800-BANK-123 (Toll Free)</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-white/70">support@mnsbankbhopal.com</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Visit Us</div>
                  <div className="text-white/70">Multiple branches in Bhopal</div>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/20">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-lg"
                asChild
              >
                <Link href="/contact">Contact Page</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-lg"
                asChild
              >
                <Link href="/faq">FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
