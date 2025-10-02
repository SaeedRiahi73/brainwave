import CompanyLogos from "../components/company/CompanyLogos";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Main: React.FC = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <CompanyLogos />
      </div>
    </>
  );
};

export default Main;
