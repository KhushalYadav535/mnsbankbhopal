import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Lock, Shield, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function CyberAwarenessPage() {
  const threats = [
    {
      icon: AlertTriangle,
      title: 'Phishing Attacks',
      description: 'Fraudulent emails or messages pretending to be from the bank asking for personal information.',
      prevention: 'Never click links in unsolicited emails. Always verify through official channels.',
    },
    {
      icon: Eye,
      title: 'Shoulder Surfing',
      description: 'Someone watching you enter your PIN or password in public places.',
      prevention: 'Always cover the keypad when entering your PIN. Be aware of your surroundings.',
    },
    {
      icon: Shield,
      title: 'Malware & Spyware',
      description: 'Malicious software that can capture your banking credentials.',
      prevention: 'Keep your devices updated with latest security patches and use antivirus software.',
    },
    {
      icon: Lock,
      title: 'Password Compromise',
      description: 'Weak or compromised passwords leading to unauthorized account access.',
      prevention: 'Use strong, unique passwords and enable two-factor authentication.',
    },
  ];

  const bestPractices = [
    'Keep your login credentials confidential - never share your password with anyone',
    'Use strong passwords combining uppercase, lowercase, numbers, and special characters',
    'Enable two-factor authentication on your online banking account',
    'Always use official banking apps from Google Play or Apple App Store',
    'Never access online banking from public Wi-Fi networks',
    'Regularly monitor your account for unauthorized transactions',
    'Log out completely after each banking session',
    'Keep your device software and antivirus up to date',
    'Report any suspicious activity immediately to the bank',
    'Never respond to requests for OTP or sensitive information via email/SMS',
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Cyber Security Awareness</h1>
              <p className="text-lg text-foreground/70 max-w-3xl">
                Protect your account with our comprehensive cybersecurity guidelines and fraud prevention tips.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Alert Banner */}
        <section className="py-8 bg-destructive/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="border-destructive/50 bg-destructive/10">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> MNS Bank will never ask for your password, PIN, or OTP via email, SMS, or phone. Always report suspicious calls or messages immediately.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        {/* Common Threats */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Common Cyber Threats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {threats.map((threat) => {
                const Icon = threat.icon;
                return (
                  <Card key={threat.title} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground self-center">{threat.title}</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">What is it?</p>
                        <p className="text-sm text-foreground/70">{threat.description}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">How to prevent:</p>
                        <p className="text-sm text-foreground/70">{threat.prevention}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* Best Practices */}
        <section className="py-16 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestPractices.map((practice) => (
                <div key={practice} className="flex gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* If You Suspect Fraud */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">If You Suspect Fraud</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-destructive/5 border-destructive/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Immediate Steps</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold text-destructive min-w-6">1.</span>
                    <span>Stop all banking transactions immediately</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-destructive min-w-6">2.</span>
                    <span>Contact the bank immediately at 1800-BANK-123</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-destructive min-w-6">3.</span>
                    <span>Block/freeze your card if it's a card-related fraud</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-destructive min-w-6">4.</span>
                    <span>File an FIR with local police if money was defrauded</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-destructive min-w-6">5.</span>
                    <span>Change all your passwords immediately</span>
                  </li>
                </ol>
              </Card>

              <Card className="p-8 bg-accent/5 border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Emergency Banking Hotline</p>
                    <p className="text-foreground/70">1800-BANK-123 (24/7 Available)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Fraud Department</p>
                    <p className="text-foreground/70">fraud@mnsbankbhopal.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">RBI Cyber Fraud Cell</p>
                    <p className="text-foreground/70">cybercrime@rbi.org.in</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Local Police</p>
                    <p className="text-foreground/70">Register FIR for major frauds</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* 2FA Information */}
        <section className="py-16 bg-gradient-to-b from-secondary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Two-Factor Authentication (2FA)</h2>
            <Card className="p-8">
              <p className="text-foreground/70 mb-6">
                Enable 2FA on your online banking account for enhanced security. This requires you to verify your identity through two different methods:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How to Enable 2FA:</h3>
                  <ol className="space-y-2 text-sm text-foreground/70">
                    <li>1. Log in to your online banking account</li>
                    <li>2. Go to Security Settings</li>
                    <li>3. Select Two-Factor Authentication</li>
                    <li>4. Choose your preferred method (SMS/Email)</li>
                    <li>5. Verify and confirm activation</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Verification Methods:</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• OTP via SMS to your registered mobile</li>
                    <li>• OTP via Email to your registered email</li>
                    <li>• Mobile app push notifications</li>
                    <li>• Security questions and answers</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Resources */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">RBI Cyber Security Alerts</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Latest warnings and advisories from RBI
                </p>
                <a href="https://www.rbi.org.in" className="text-primary hover:underline text-sm font-semibold">
                  Visit RBI Website →
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">CERT-IN India</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Cyber security incident reporting platform
                </p>
                <a href="https://www.cert-in.org.in" className="text-primary hover:underline text-sm font-semibold">
                  Visit CERT-IN →
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">Report Cybercrime</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Official cybercrime reporting portal
                </p>
                <a href="https://cybercrime.gov.in" className="text-primary hover:underline text-sm font-semibold">
                  Visit Cybercrime Portal →
                </a>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
