
import CalBooking from "../components/cal-booking";
import CompetitorComparison from "../components/competitor-comparison";
import { CTA } from "../components/cta";
import { FAQSection } from "../components/faq-section";
import { Hero } from "../components/hero";
import { Process } from "../components/process";
import { ProjectGrid } from "../components/projects";
import { ServicesGrid } from "../components/services-grid";
import { Testimonials } from "../components/testimonials";
import { WhyChooseUs } from "../components/why-choose-us";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <ServicesGrid/>
      <Process/>
      <ProjectGrid/>
      <CalBooking/>
      <Testimonials/>
      <CompetitorComparison/>
      <FAQSection/>
      <CTA/>
      {/* <div className="w-full h-screen"></div> */}
    </div>
  );
}