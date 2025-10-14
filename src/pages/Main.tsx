import Benefits from "../components/benefits/Benefits";
import Collaboration from "../components/collaboration/Collaboration";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Pricing from "../components/Pricing/Pricing";
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
      </div>
    </>
  );
};

export default Main;
