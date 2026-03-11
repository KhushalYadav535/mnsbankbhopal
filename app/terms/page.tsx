import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg text-foreground/70">
              Last Updated: March 11, 2026
            </p>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-foreground/80">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website and our banking services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on MNS Bank's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p>
                The materials on MNS Bank's website are provided on an 'as is' basis. MNS Bank makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
              <p>
                In no event shall MNS Bank or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on MNS Bank's website, even if we have been notified of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on MNS Bank's website could include technical, typographical, or photographic errors. MNS Bank does not warrant that any of the materials on its website are accurate, complete, or current. MNS Bank may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
              <p>
                MNS Bank has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MNS Bank of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
              <p>
                MNS Bank may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bhopal, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@mnsbankbhopal.com or call 1800-BANK-123.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
