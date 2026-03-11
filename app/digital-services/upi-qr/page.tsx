import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceShell } from '@/components/digital-services/service-shell';
import { QrCode, SmartphoneNfc, Store, Zap } from 'lucide-react';

export default function UPIPage() {
  const benefits = [
    {
      title: "Instant Payments",
      description: "Send or receive money instantly, 24/7/365, without entering bank details or IFSC codes.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Scan & Pay",
      description: "Pay at over 50 million merchant outlets across India simply by scanning any standard UPI QR code.",
      icon: <QrCode className="w-8 h-8" />
    },
    {
      title: "Virtual Payment Address",
      description: "Share only your VPA (e.g., name@mnsbank) for payments. Your actual account details remain hidden.",
      icon: <SmartphoneNfc className="w-8 h-8" />
    },
    {
      title: "Merchant Solutions",
      description: "If you are a business owner, get your own MNS Bank QR code to accept zero-fee payments from customers.",
      icon: <Store className="w-8 h-8" />
    }
  ];

  const steps = [
    {
      title: "Download any UPI App",
      description: "Download BHIM, Google Pay, PhonePe, or use our mobile banking app."
    },
    {
      title: "Verify your Mobile Number",
      description: "Ensure the SIM card in your phone is the one registered with MNS Bank."
    },
    {
      title: "Select MNS Bank",
      description: "Search for 'Mahanagar Nagrik Sahakari Bank' in the app's bank list."
    },
    {
      title: "Set UPI PIN",
      description: "Use your Debit Card details to create a secure 4 or 6 digit UPI PIN. Never share this PIN with anyone."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-8">
        <ServiceShell
          title="UPI & QR Payments"
          subtitle="Digital Services"
          description="Powering the cashless revolution. Link your MNS Bank account to Unified Payments Interface (UPI) for lightning-fast, secure, and interoperable payments from your smartphone."
          icon={<QrCode className="w-10 h-10 text-primary" />}
          benefits={benefits}
          steps={steps}
          layout="center"
        />
      </main>
      <Footer />
    </>
  );
}
