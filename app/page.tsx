import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Differentials />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
