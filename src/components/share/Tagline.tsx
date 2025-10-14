import Brackets from "../../assets/svg/Brackets";
import type { TaglineProps } from "../../interface";

const Tagline: React.FC<TaglineProps> = ({ children, className }) => {
  return (
    <div className={`flex tagline items-center ${className}`}>
      <Brackets position={"left"} />
      <div className="mx-3 text-n-3">{children}</div>
      <Brackets position={"right"} />
    </div>
  );
};

export default Tagline;
