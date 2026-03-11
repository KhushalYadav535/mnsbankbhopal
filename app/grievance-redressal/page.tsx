import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function GrievancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Grievance Redressal</h1>
              <p className="text-lg text-foreground/70 max-w-3xl">
                We take your feedback seriously. At MNS Bank, we are committed to resolving any grievances promptly and fairly.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Escalation Process */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Complaint & Grievance Escalation</h2>
            
            <div className="space-y-6">
              {/* Level 1 */}
              <Card className="p-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-foreground mb-2">Level 1 - Customer Service</h3>
                <p className="text-foreground/70 mb-4">
                  Contact our customer service team directly for immediate assistance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <Phone className="w-4 h-4 text-primary mt-0.5" />
                    <span>1800-BANK-123</span>
                  </div>
                  <div className="flex gap-2">
                    <Mail className="w-4 h-4 text-primary mt-0.5" />
                    <span>support@mnsbankbhopal.com</span>
                  </div>
                </div>
              </Card>

              {/* Level 2 */}
              <Card className="p-8 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-foreground mb-2">Level 2 - Complaint Handling Officer</h3>
                <p className="text-foreground/70 mb-4">
                  If not resolved within 7 days, escalate to our Complaint Handling Officer.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <Mail className="w-4 h-4 text-accent mt-0.5" />
                    <span>complaints@mnsbankbhopal.com</span>
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-accent mt-0.5" />
                    <span>Head Office, 123 Gandhi Road, Bhopal</span>
                  </div>
                </div>
              </Card>

              {/* Level 3 */}
              <Card className="p-8 border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-foreground mb-2">Level 3 - RBI Banking Ombudsman</h3>
                <p className="text-foreground/70 mb-4">
                  If still unresolved, file a complaint with the RBI Banking Ombudsman (Free Service).
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Banking Ombudsman - Bhopal</h4>
                    <div className="space-y-1">
                      <div className="flex gap-2">
                        <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                        <span>Reserve Bank of India, Bhopal</span>
                      </div>
                      <div className="flex gap-2">
                        <Phone className="w-4 h-4 text-secondary mt-0.5" />
                        <span>1800-22-0722</span>
                      </div>
                      <div className="flex gap-2">
                        <Mail className="w-4 h-4 text-secondary mt-0.5" />
                        <a href="https://www.rbi.org.in/UMS/htmlold/upload/BO_OFFICES.html" className="text-primary hover:underline">
                          View RBI Official Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Filing a Complaint */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">How to File a Complaint</h2>
                <p className="text-foreground/70">
                  Follow these simple steps to lodge a formal complaint.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: 1,
                    title: 'Provide Details',
                    description: 'Include your account number, transaction details, and description of the issue',
                  },
                  {
                    step: 2,
                    title: 'Submit in Writing',
                    description: 'Email, mail, or visit the branch to submit your written complaint',
                  },
                  {
                    step: 3,
                    title: 'Get Reference Number',
                    description: 'You will receive an acknowledgment with a reference number for tracking',
                  },
                  {
                    step: 4,
                    title: 'Follow Up',
                    description: 'We will resolve your complaint within 21 days and inform you of the action taken',
                  },
                ].map((item) => (
                  <Card key={item.step} className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-foreground/70">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Important Information */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Important Information</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• All complaints will be handled confidentially and with utmost priority</li>
                    <li>• No costs involved in filing a complaint to the RBI Banking Ombudsman</li>
                    <li>• We are committed to fair and transparent grievance resolution</li>
                    <li>• Complaint Status can be tracked using your reference number</li>
                    <li>• Complainants will receive communication in their preferred language</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to File a Complaint?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 rounded-lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="rounded-lg" asChild>
                <a href="mailto:complaints@mnsbankbhopal.com">Email Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
