import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProductShowcase from "@/components/ProductShowcase";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import WhyUs from "@/components/WhyUs";
import DemoBooking from "@/components/DemoBooking";
import FAQSection from "@/components/FAQSection";
import QuoteForm from "@/components/QuoteForm";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProductShowcase />
      <Portfolio />
      <TechStack />
      <WhyUs />
      <DemoBooking />
      <FAQSection />
      <QuoteForm />
      <ContactSection />
      <BlogPreview />
      <Newsletter />
    </>
  );
}
