import { MouseParallax, ScrollParallax } from "react-just-parallax";

const PracticeOne: React.FC = () => {
  return (
    <>
      <div style={{ height: "200vh", padding: "100px" }}>
        <ScrollParallax isAbsolutelyPositioned>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRiWwCMJ9R8DoD4nRtNv0J-XHgJ-lwBarSA&s"
            alt="demo"
            width={300}
          />
        </ScrollParallax>
      </div>

      <div style={{ height: "100vh" }}>
        <MouseParallax enableOnTouchDevice>
          <h1>سلام سعید 👋</h1>
        </MouseParallax>
      </div>
    </>
  );
};

export default PracticeOne;
