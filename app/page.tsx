import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { QuickAssistanceStrip } from "@/components/sections/quick-assistance";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { StatsBar } from "@/components/sections/stats-bar";
import { LoanProducts } from "@/components/sections/loan-products";
import { DepositRates } from "@/components/sections/deposit-rates";
import { MobileAppSection } from "@/components/sections/mobile-app";
import { LatestUpdates } from "@/components/sections/latest-updates";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <QuickAssistanceStrip />
        <FeaturedProducts />
        <StatsBar />
        <LoanProducts />
        <DepositRates />
        <MobileAppSection />
        <LatestUpdates />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
