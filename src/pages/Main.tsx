import Benefits from "../components/benefits/Benefits";
import Collaboration from "../components/collaboration/Collaboration";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Main: React.FC = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
    </>
  );
};

export default Main;
