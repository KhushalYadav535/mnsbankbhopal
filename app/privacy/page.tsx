import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-foreground/70">
              Last Updated: March 11, 2026
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
            <div className="space-y-8 text-foreground/80">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  Mahanagar Nagrik Sahakari Bank (hereinafter "MNS Bank", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                <p className="mb-4">
                  We may collect the following personal information from you:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Name, email address, and phone number</li>
                  <li>Financial information (account details, transaction history)</li>
                  <li>Identity documents (PAN, Aadhaar, Passport)</li>
                  <li>Address and employment information</li>
                  <li>Device information and browsing data</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we automatically collect certain information about your device, including IP address, browser type, and pages visited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To process your banking transactions</li>
                  <li>To provide customer service and support</li>
                  <li>To improve our services and website</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To prevent fraudulent activity and enhance security</li>
                  <li>To send promotional materials (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  MNS Bank implements comprehensive security measures including encryption, firewalls, and secure socket layer (SSL) technology to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data subject to regulatory requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Disclosure</h2>
                <p>
                  We do not sell or trade your personal information to third parties. We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Service providers assisting in our operations</li>
                  <li>Regulatory authorities as required by law</li>
                  <li>Other financial institutions for legitimate banking purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p>
                  Under applicable data protection laws, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings if you prefer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at privacy@mnsbankbhopal.com or call 1800-BANK-123.
                </p>
              </div>

              <div className="border-t border-border/50 pt-8">
                <p className="text-sm text-foreground/70">
                  This Privacy Policy is subject to change. We will notify you of any significant changes by posting the updated policy on our website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
