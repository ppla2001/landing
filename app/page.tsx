import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCases from "@/components/ProductCases";
import ScrollToTop from "@/components/ScrollToTop";
import ImpactMetrics from "@/components/ImpactMetrics";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 relative">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <ProductCases />
      <ImpactMetrics />
      <Background />
      <Contact />
      <Footer />
    </main>
  );
}
