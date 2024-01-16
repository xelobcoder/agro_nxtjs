import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import NavDesktop from "../components/nav-desktop";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import Container from "../components/container";
import Leading from "../components/leading";
import LeaderSections from "../components/leader-sections";
import ContainerOurSubsidiar from "../components/container-our-subsidiar";
import FrameComponent1 from "../components/frame-component1";
import Transform from "../components/transform";
import FrameComponent from "../components/frame-component";

const AboutUSPage: NextPage = () => {
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

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onNowWereTextClick = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  return (
    <>
      <div className="relative w-full flex flex-col items-start justify-start tracking-[normal]">
        <header className="self-stretch bg-gray-1900 [backdrop-filter:blur(200px)] flex flex-row items-center justify-center top-[0] z-[99] sticky max-w-full text-center text-mini font-inter">
          <NavDesktop />
          <div className="[background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] box-border hidden flex-row items-center justify-center py-3.5 px-5 max-w-full border-[1px] border-solid border-gray-1800">
            <div className="w-[1521px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
              <div className="relative w-[760px] h-[45px] max-w-full">
                <div className="absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos]:hover:flex">
                  <div className="oursubsidiarylogos absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden">
                    <img
                      className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
                      alt=""
                      src="/clip-path-group3@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
                      alt=""
                      src="/clip-path-group4@2x.png"
                      onClick={onClipPathGroup2Click}
                    />
                    <img
                      className="absolute h-[68.97%] w-[29.27%] top-[10.34%] right-[1.87%] bottom-[20.69%] left-[68.86%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-939.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[7px] left-[5px] w-[15px] h-[21.9px] object-contain"
                    alt=""
                    src="/images-2-12@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/logo1@2x.png"
                  />
                </div>
              </div>
              <div className="w-[760px] flex flex-row items-center justify-end gap-[30px] max-w-full">
                <div className="rounded-31xl box-border w-[152px] flex flex-row items-center justify-between py-3 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-olivedrab-100">
                  <div className="relative leading-[20.4px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b6c2f1,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-28 shrink-0 whitespace-nowrap">
                    Contact Us
                  </div>
                </div>
                <div
                  className="flex flex-col items-center justify-start gap-[5px] cursor-pointer"
                  onClick={openDrwawerMenu}
                >
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="self-stretch overflow-hidden flex flex-row items-start justify-center pt-0 px-0 pb-[100px] box-border bg-[url('/herosec@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-hard-light max-w-full text-center text-51xl text-white font-poppins lg:gap-[83px] mq450:gap-[41px]">
          <div
            className="flex-1 flex flex-row flex-wrap items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full"
            data-animate-on-scroll
          >
            <h1
              className="m-0 flex-1 relative text-inherit leading-[100%] whitespace-pre-wrap flex items-center h-[210px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full pl-5 pr-5 font-inherit mq825:text-37xl mq825:leading-[56px] mq450:text-23xl mq450:leading-[42px]"
              data-animate-on-scroll
            >
              <span className="w-full">
                <p className="m-0">
                  <span className="font-light font-poppins">{`We are `}</span>
                  <span className="font-extrabold">Transforming</span>
                </p>
                <p className="m-0">
                  <span className="font-extrabold">{` `}</span>
                  <span className="font-light">
                    {" "}
                    African agriculture, one innovation
                  </span>
                </p>
                <p className="m-0 font-light">{` at a time. `}</p>
              </span>
            </h1>
          </div>
        </section>
        <Container />
        <Leading />
        <LeaderSections />
        <ContainerOurSubsidiar />
        <FrameComponent1 />
        <footer className="self-stretch bg-darkolivegreen-600 overflow-hidden flex flex-row items-center justify-center p-[30px] box-border max-w-full text-left text-mini text-seagreen-100 font-poppins mq825:pt-5 mq825:pb-5 mq825:box-border">
          <div
            className="w-[1590px] flex flex-row items-start justify-start py-10 px-0 box-border gap-[1px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full mq825:pt-[26px] mq825:pb-[26px] mq825:box-border mq1500:flex-wrap"
            data-animate-on-scroll
          >
            <Transform />
            <div
              className="flex-1 flex flex-col items-start justify-start gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] min-w-[386px] min-h-[397px] max-w-full mq825:gap-[20px] mq825:min-w-full mq1500:flex-1 mq1500:min-h-[auto]"
              data-animate-on-scroll
            >
              <div className="self-stretch flex flex-row items-start justify-start gap-[2px] mq825:flex-wrap mq1500:justify-center">
                <div className="flex-1 flex flex-col items-start justify-between min-w-[192px]">
                  <div className="relative tracking-[0.9px] leading-[46px] uppercase font-medium inline-block w-[95px]">
                    business
                  </div>
                  <div className="self-stretch h-36 flex flex-col items-start justify-between text-base text-white">
                    <div className="self-stretch h-[29px] flex flex-row items-center justify-start">
                      <b
                        className="flex-1 relative tracking-[0.9px] leading-[46px] uppercase flex items-center h-[37px] cursor-pointer"
                        onClick={onNowWereTextClick}
                      >
                        CAREERS
                      </b>
                    </div>
                    <div className="self-stretch h-[29px] flex flex-row items-center justify-start">
                      <b className="flex-1 relative tracking-[0.9px] leading-[46px] uppercase flex items-center h-7">{`ABOUT US `}</b>
                    </div>
                    <div className="self-stretch h-[35px] flex flex-row items-center justify-start py-2.5 px-0 box-border">
                      <b className="flex-1 relative tracking-[0.9px] leading-[46px] uppercase flex items-center h-7">
                        PRIVACY POLICY
                      </b>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <b className="flex-1 relative tracking-[0.9px] leading-[46px] uppercase flex items-center h-8">
                        PARTNERS
                      </b>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[192px] mq450:gap-[17px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase font-medium">{`CONTACT US `}</div>
                    <div className="self-stretch relative text-lg tracking-[0.9px] leading-[46px] capitalize font-semibold text-white">
                      Agrospectrum Ltd.
                    </div>
                  </div>
                  <div className="self-stretch h-[108px] flex flex-col items-start justify-start gap-[7px] text-base text-white">
                    <div className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase font-extrabold flex items-center h-9 shrink-0">
                      EAST LEGON office
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                      <b className="self-stretch flex-1 relative tracking-[0.9px] leading-[46px] capitalize flex items-center">
                        No 24 Maseru St
                      </b>
                      <b className="self-stretch flex-1 relative tracking-[0.9px] leading-[46px] capitalize flex items-center">
                        East Legon,
                      </b>
                      <b className="self-stretch flex-1 relative tracking-[0.9px] leading-[46px] capitalize flex items-center">
                        Accra - ghana
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[0px] [row-gap:20px] text-base text-white mq825:flex-wrap mq1500:justify-center">
                <div className="w-[297px] h-[109px] flex flex-col items-start justify-start gap-[10px]">
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase">
                    BSL HEAD OFFICE
                  </b>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize flex items-center">
                    No 24 Botwe
                  </b>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize flex items-center">
                    Dzorwulu - Accra
                  </b>
                </div>
                <div className="w-[297px] flex flex-col items-start justify-start gap-[3px]">
                  <div className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase font-extrabold">
                    TAMALE office
                  </div>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize flex items-center">
                    Tamale.
                  </b>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                    16 Dagomba Road,
                  </b>
                </div>
              </div>
            </div>
            <FrameComponent />
          </div>
        </footer>
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

export default AboutUSPage;
