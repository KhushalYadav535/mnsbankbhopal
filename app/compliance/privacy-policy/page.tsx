import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Last updated: March 15, 2026
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12
            prose-p:leading-relaxed prose-p:text-foreground/80
            p-8 md:p-12 rounded-3xl bg-card/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl">
            
            <p>
              Mahanagar Nagrik Sahakari Bank Ltd. ("Bank", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you about how we look after your personal data when you visit our website (regardless of where you visit it from) or use our banking services, and tells you about your privacy rights and how the law protects you.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, gender, and KYC documents (Aadhaar, PAN).</li>
              <li><strong>Contact Data</strong> includes billing address, residential address, email address, and telephone/mobile numbers.</li>
              <li><strong>Financial Data</strong> includes bank account details, payment card details, and credit history.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., opening a savings account or processing a loan).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation (e.g., RBI mandates, Anti-Money Laundering laws, KYC directives).</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. By law (Prevention of Money Laundering Act), we must keep basic information about our customers (including Contact, Identity, Financial, and Transaction Data) for at least five (5) years after they cease being customers.
            </p>

            <h2>5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure (where permitted by banking regulations), and restriction of processing. To exercise any of these rights, please contact our Data Protection Officer.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              <br/><br/>
              <strong>Mahanagar Nagrik Sahakari Bank Ltd.</strong><br/>
              Head Office, Bairagarhi, Bhopal - 462030<br/>
              Email: privacy@mnsbankbhopal.com<br/>
              Phone: 1800-BANK-123
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
