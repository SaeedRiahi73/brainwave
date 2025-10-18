import Benefits from "../components/benefits/Benefits";
import Collaboration from "../components/collaboration/Collaboration";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import RoadMap from "../components/roadmap/Roadmap";
import Services from "../components/services/Services";

const Main: React.FC = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
    </>
  );
};

export default Main;
