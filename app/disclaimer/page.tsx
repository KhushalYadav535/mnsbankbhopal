import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Disclaimer</h1>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-foreground/80">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                This disclaimer outlines the terms and conditions for using MNS Bank website and services.
              </AlertDescription>
            </Alert>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. General Disclaimer</h2>
              <p>
                The information contained on this website is provided on an "as is" basis without warranty of any kind, either express or implied. MNS Bank makes no representations or warranties regarding the completeness, accuracy, or reliability of any content, data, or information presented.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Financial Information</h2>
              <p>
                All interest rates, charges, and financial information provided are subject to change without notice. Customers should verify current rates with the bank before making any decisions. MNS Bank is not responsible for decisions made based on outdated information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Investment Advice</h2>
              <p>
                Any information regarding investment or financial planning on this website should not be considered as professional investment advice. Please consult with a qualified financial advisor before making any investment decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. MNS Bank is not responsible for the content, accuracy, or practices of these external sites. Use of any linked website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall MNS Bank be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Regulatory Compliance</h2>
              <p>
                MNS Bank is regulated by the Reserve Bank of India (RBI). All banking services are provided in compliance with applicable Indian banking laws and RBI guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact for Issues</h2>
              <p>
                If you have concerns regarding any information on this website, please contact us at support@mnsbankbhopal.com or call 1800-BANK-123.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
