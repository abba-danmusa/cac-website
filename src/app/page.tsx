import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProcessSection from "@/components/Processes";
import ServicesSection from "@/components/Services";
import AdditionalInfo from "@/components/AdditionalInfo"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}
