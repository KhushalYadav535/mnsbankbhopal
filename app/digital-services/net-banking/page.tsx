import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceShell } from '@/components/digital-services/service-shell';
import { MonitorSmartphone, ShieldCheck, Zap, RefreshCcw, Banknote } from 'lucide-react';

export default function NetBankingPage() {
  const benefits = [
    {
      title: "24/7 Account Access",
      description: "Check balances, download statements, and track your transactions securely from anywhere at any time.",
      icon: <MonitorSmartphone className="w-8 h-8" />
    },
    {
      title: "Instant Fund Transfers",
      description: "Transfer money seamlessly using NEFT, RTGS, and IMPS to any bank account in India.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Bank Grade Security",
      description: "Protected by industry-standard 256-bit encryption and mandatory Two-Factor Authentication (2FA).",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Utility Bill Payments",
      description: "Pay electricity, water, and gas bills or recharge instantly through the integrated BBPS platform.",
      icon: <RefreshCcw className="w-8 h-8" />
    }
  ];

  const steps = [
    {
      title: "Ensure your mobile number is registered",
      description: "Your mobile number must be registered with your bank account to receive OTPs for registration."
    },
    {
      title: "Click on 'Register for Net Banking'",
      description: "Visit our internet banking portal and click on the 'New User Registration' link."
    },
    {
      title: "Verify Identity",
      description: "Enter your Customer ID, Account Number, and the OTP sent to your registered mobile number."
    },
    {
      title: "Set Passwords",
      description: "Create a strong login password and a separate transaction password for secure funds transfer."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background pt-8 pb-8">
        <ServiceShell
          title="Internet Banking"
          subtitle="Digital Services"
          description="Experience the convenience of branch banking right from your desktop. Manage your wealth, transfer funds securely, and pay bills seamlessly with MNS Bank's robust Net Banking."
          icon={<MonitorSmartphone className="w-10 h-10 text-primary" />}
          benefits={benefits}
          steps={steps}
          primaryAction={{ label: "Login to Net Banking", href: "#" }}
          secondaryAction={{ label: "Register Now", href: "#" }}
        />
      </main>
      <Footer />
    </>
  );
}
