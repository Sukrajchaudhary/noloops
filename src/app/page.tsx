import Benefits from "@/components/Benefits/Benefits";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Homepage from "@/components/home";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/pricing";
import Process from "@/components/proces";
import Schedule from "@/components/Schedule/Schedule";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonials/Testimonials";
import WhoWeAre from "@/components/whoweare";

export default function Home() {
  return (
    <main>
      <Homepage/>
      <WhoWeAre/>
      <Process/>
      <Services/>
      <Portfolio/>
      <Pricing/>
      <Benefits/>
      <Testimonial/>
      <Contact/>
      <FAQ/>
      <Schedule/>
      <Footer/>
    </main>
  );
}
