import { useState } from "react";
import { useLocation } from "react-router-dom";
import brainwave from "../../assets/brainwave.svg";
import { navigation } from "../constants";
import Button from "../ui/Button";
import { HambugerMenu } from "../design/Header";
import MenuSvg from "../../assets/svg/MenuSvg";
import scrollLock from "scroll-lock";

const Header: React.FC = () => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const location = useLocation();

  const toggleNavigation = () => {
    setOpenNavigation((pre) => !pre);
    if (!openNavigation) scrollLock.disablePageScroll();
    else scrollLock.enablePageScroll();
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      scrollLock.enablePageScroll();
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="brainwave" />
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            }  fixed top-[5rem] right-0 left-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === location.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HambugerMenu />
          </nav>
          <a
            href="#singup"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New account
          </a>
          <Button
            className="hidden lg:flex px-7"
            isWhite={false}
            withSvg={true}
          >
            <a href="#login">Sing in</a>
          </Button>
          <Button
            isWhite={false}
            withSvg={true}
            className="ml-auto lg:hidden px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
