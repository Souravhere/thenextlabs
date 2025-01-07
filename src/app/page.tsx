
import { Hero } from "../components/hero";
import { Process } from "../components/process";
import { ServicesGrid } from "../components/services-grid";
import { WhyChooseUs } from "../components/why-choose-us";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <ServicesGrid/>
      <Process/>
      {/* <div className="w-full h-screen"></div> */}
    </div>
  );
}