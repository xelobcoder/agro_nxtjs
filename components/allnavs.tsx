import type { NextPage } from "next";
import { useState, useCallback } from "react";
import NavDesktop1 from "./nav-desktop";
import DrwawerMenu from "./drwawer-menu";
import PortalDrawer from "./portal-drawer";

const Allnavs: NextPage = () => {
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] h-20 flex flex-col items-start justify-start">
        <NavDesktop1 />
        <nav
          className="m-0 self-stretch [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] hidden flex-row items-center justify-center py-3.5 px-[90px] border-[1px] border-solid border-gray-1800 lg:flex md:hidden sm:hidden"
          id="navBar"
        >
          <div className="flex-1 flex flex-row items-center justify-between">
            <div className="self-stretch flex-1 relative">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos17]:hover:flex">
                <div
                  className="oursubsidiarylogos17 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
                  id="ourSubsidiaries"
                >
                  <img
                    className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                    alt=""
                    src="/clip-path-group.svg"
                    onClick={onClipPathGroupClick}
                  />
                  <img
                    className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                    alt=""
                    src="/clip-path-group7@2x.png"
                    onClick={onClipPathGroup1Click}
                  />
                  <img
                    className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                    alt=""
                    src="/clip-path-group8@2x.png"
                    onClick={onClipPathGroup2Click}
                  />
                  <img
                    className="absolute h-[68.97%] w-[29.27%] top-[10.34%] right-[1.87%] bottom-[20.69%] left-[68.86%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-939.svg"
                  />
                </div>
                <img
                  className="absolute top-[7px] left-[5px] w-[15px] h-[21.9px] object-cover"
                  alt=""
                  src="/images-2-12@2x.png"
                />
              </button>
              <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  id="logo"
                  alt=""
                  src="/logo31@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-end gap-[30px]">
              <button className="cursor-pointer py-3 px-5 bg-[transparent] rounded-31xl box-border w-[152px] flex flex-row items-center justify-between border-[1px] border-solid border-olivedrab-100">
                <div className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b6c2f1,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                  Contact Us
                </div>
              </button>
              <div
                className="h-[27px] flex flex-col items-center justify-start gap-[5px] cursor-pointer"
                onClick={openDrwawerMenu}
              >
                <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-[5px]" />
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isDrwawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu}
        >
          <DrwawerMenu onClose={closeDrwawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Allnavs;
