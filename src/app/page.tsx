
import { Hero } from "../components/hero";
import { Process } from "../components/process";
import { ProjectGrid } from "../components/projects";
import { ServicesGrid } from "../components/services-grid";
import { WhyChooseUs } from "../components/why-choose-us";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <ServicesGrid/>
      <Process/>
      <ProjectGrid/>
      {/* <div className="w-full h-screen"></div> */}
    </div>
  );
}