import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import KeyAdvantages from "@/components/KeyAdvantages";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import BoardMembers from "./BoardMembers";
import Achievements from "@/components/Achievements";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <KeyAdvantages />
      <TestimonialsSection />
      <AboutSection />
      <BoardMembers />
      <Achievements />
      <FAQSection   />
      <BlogSection />
      <ContactSection />
    </>
  
  );
}
