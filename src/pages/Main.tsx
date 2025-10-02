import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Main: React.FC = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Main;
