import type { HeadingProps } from "../../interface";

const Heading: React.FC<HeadingProps> = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      <h2 className="h2">{title}</h2>
    </div>
  );
};

export default Heading;
