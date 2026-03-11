'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll contact you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  const branches = [
    {
      name: 'Head Office',
      address: '123 Gandhi Road, Bhopal - 462001',
      phone: '+91-755-2234567',
      email: 'headoffice@mnsbankbhopal.com',
      hours: 'Mon-Fri: 10 AM - 6 PM, Sat: 10 AM - 2 PM',
    },
    {
      name: 'New Market Branch',
      address: '456 Market Square, Bhopal - 462002',
      phone: '+91-755-2345678',
      email: 'newmarket@mnsbankbhopal.com',
      hours: 'Mon-Fri: 10 AM - 6 PM, Sat: 10 AM - 2 PM',
    },
    {
      name: 'JP Nagar Branch',
      address: '789 JP Nagar, Bhopal - 462003',
      phone: '+91-755-2456789',
      email: 'jpnagar@mnsbankbhopal.com',
      hours: 'Mon-Fri: 10 AM - 6 PM, Sat: 10 AM - 2 PM',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-foreground">Get in Touch</h1>
              <p className="text-lg text-foreground/70">
                Have questions? We're here to help. Contact us through any of these channels.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact Information Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-foreground/70 mb-4">Toll Free Number</p>
                <a href="tel:1800BANK123" className="text-primary font-semibold hover:underline">
                  1800-BANK-123
                </a>
              </Card>

              {/* Email */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-foreground/70 mb-4">We'll respond within 24 hours</p>
                <a href="mailto:support@mnsbankbhopal.com" className="text-primary font-semibold hover:underline">
                  support@mnsbankbhopal.com
                </a>
              </Card>

              {/* Hours */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                <p className="text-foreground/70">
                  Mon-Fri: 10 AM - 6 PM<br />
                  Sat: 10 AM - 2 PM<br />
                  Sun: Closed
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact Form & Branches */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-foreground/70">
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Branches */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Our Branches</h2>
                  <p className="text-foreground/70">
                    Visit any of our branches across Bhopal.
                  </p>
                </div>

                <div className="space-y-4">
                  {branches.map((branch) => (
                    <Card key={branch.name} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-bold text-foreground mb-4">{branch.name}</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{branch.address}</span>
                        </div>
                        
                        <div className="flex gap-3">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <a href={`tel:${branch.phone}`} className="text-primary hover:underline">
                            {branch.phone}
                          </a>
                        </div>
                        
                        <div className="flex gap-3">
                          <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <a href={`mailto:${branch.email}`} className="text-primary hover:underline">
                            {branch.email}
                          </a>
                        </div>
                        
                        <div className="flex gap-3">
                          <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{branch.hours}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Additional Support */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Other Support Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">FAQ</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Find answers to common questions
                </p>
                <Button variant="outline" className="rounded-lg" asChild>
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">Grievance</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Submit a complaint or grievance
                </p>
                <Button variant="outline" className="rounded-lg" asChild>
                  <Link href="/grievance-redressal">Lodge Grievance</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">Security</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Cyber security & fraud awareness
                </p>
                <Button variant="outline" className="rounded-lg" asChild>
                  <Link href="/cyber-awareness">Learn More</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
