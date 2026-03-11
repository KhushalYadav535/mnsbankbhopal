'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FAQItem {
  category: string;
  questions: {
    q: string;
    a: string;
  }[];
}

const faqData: FAQItem[] = [
  {
    category: 'Account Opening',
    questions: [
      {
        q: 'How do I open an account with MNS Bank?',
        a: 'You can open an account online through our website, through video KYC, or by visiting any of our branches. The process takes just 5 minutes online.',
      },
      {
        q: 'What documents do I need to open an account?',
        a: 'You need a valid photo ID (Aadhaar/PAN/Passport), address proof (utility bill/rental agreement), and income proof (salary slip/ITR).',
      },
      {
        q: 'What is the minimum age requirement?',
        a: 'You must be at least 18 years old to open a savings account independently. Minors can open accounts with parental guardianship.',
      },
      {
        q: 'Are there any account opening charges?',
        a: 'No, account opening is completely free. There are no hidden charges or processing fees.',
      },
    ],
  },
  {
    category: 'Digital Banking',
    questions: [
      {
        q: 'How do I access my account online?',
        a: 'Visit our website and click on "Login". Use your username and password. For first-time access, you can register using your account number.',
      },
      {
        q: 'Is online banking secure?',
        a: 'Yes, we use industry-leading encryption and security protocols. We also recommend enabling two-factor authentication for additional security.',
      },
      {
        q: 'What if I forgot my password?',
        a: 'Click on the "Forgot Password" link on the login page and follow the instructions sent to your registered email or phone.',
      },
      {
        q: 'Can I transfer money to other banks?',
        a: 'Yes, you can make NEFT, RTGS, or IMPS transfers to any bank account across India through our online banking platform.',
      },
    ],
  },
  {
    category: 'Interest Rates & Charges',
    questions: [
      {
        q: 'What is the current interest rate on savings accounts?',
        a: 'The current interest rate is 4.5% per annum on savings accounts. Rates are updated monthly and may vary based on market conditions.',
      },
      {
        q: 'Are there any account maintenance charges?',
        a: 'There are no maintenance charges for maintaining a savings account with us. Service charges apply only to specific additional services.',
      },
      {
        q: 'What about ATM withdrawal charges?',
        a: 'You get 5 free withdrawals per month at other bank ATMs. Additional withdrawals attract a charge of ₹20 per transaction.',
      },
      {
        q: 'Do you charge for fund transfers?',
        a: 'NEFT and RTGS transfers are free of charge. Other special transfer services may have nominal charges.',
      },
    ],
  },
  {
    category: 'Debit Card',
    questions: [
      {
        q: 'How do I get my debit card?',
        a: 'Your debit card is issued free with your savings account. It will be sent to your address within 7-10 business days.',
      },
      {
        q: 'What is the card validity period?',
        a: 'Your debit card is valid for 5 years from the date of issuance. A renewal card will be issued before expiry.',
      },
      {
        q: 'How do I block my lost card?',
        a: 'Contact our 24/7 customer service at 1800-BANK-123 immediately to block your card. You can also block it through our mobile app.',
      },
      {
        q: 'Are there any charges for card replacement?',
        a: 'Card replacement is free in case of damage or expiry. A replacement fee of ₹100 applies for lost cards.',
      },
    ],
  },
  {
    category: 'Deposits & Withdrawals',
    questions: [
      {
        q: 'Can I deposit cash at any branch?',
        a: 'Yes, you can deposit cash at any of our branches during business hours without any charges.',
      },
      {
        q: 'What is the maximum withdrawal limit per day?',
        a: 'There is no specific daily withdrawal limit. However, large cash withdrawals require prior notice.',
      },
      {
        q: 'Can I withdraw money from any ATM?',
        a: 'Yes, you can withdraw from any ATM across India using your RuPay debit card.',
      },
      {
        q: 'Are there any limits on NEFT/RTGS transfers?',
        a: 'NEFT and RTGS have no upper limit. You can transfer any amount subject to your account balance.',
      },
    ],
  },
  {
    category: 'Loans & Credits',
    questions: [
      {
        q: 'What loan products do you offer?',
        a: 'We offer home loans, personal loans, business loans, auto loans, and educational loans with competitive interest rates.',
      },
      {
        q: 'What are the eligibility criteria for a loan?',
        a: 'You should be at least 21 years old, have a stable income, good credit score, and be an Indian citizen or NRI.',
      },
      {
        q: 'How long does it take to get a loan approved?',
        a: 'Most loans are approved within 48 hours of application. Processing time depends on the loan type and documentation.',
      },
      {
        q: 'Can I apply for a loan online?',
        a: 'Yes, you can apply online through our website or mobile app. You can also visit our branches for assistance.',
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleExpand = (index: string) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-foreground">Frequently Asked Questions</h1>
              <p className="text-lg text-foreground/70">
                Find answers to common questions about our services and products.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ Sections */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {faqData.map((section) => (
              <div key={section.category} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
                <div className="space-y-3">
                  {section.questions.map((item, idx) => {
                    const itemId = `${section.category}-${idx}`;
                    const isExpanded = expandedIndex === itemId;

                    return (
                      <Card
                        key={itemId}
                        className="overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleExpand(itemId)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                        >
                          <span className="font-semibold text-foreground pr-4">{item.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-6 py-4 bg-gradient-to-b from-card/50 to-background border-t border-border/50">
                            <p className="text-foreground/70">{item.a}</p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Still Need Help */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Still have questions?</h2>
            <p className="text-lg text-foreground/70">
              Our customer service team is ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:1800BANK123"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Call: 1800-BANK-123
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
