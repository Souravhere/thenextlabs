
import { Hero } from "../components/hero";
import { ServicesGrid } from "../components/services-grid";
import { WhyChooseUs } from "../components/why-choose-us";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <ServicesGrid/>
      {/* <div className="w-full h-screen"></div> */}
    </div>
  );
}