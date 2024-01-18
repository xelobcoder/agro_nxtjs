import React from "react";
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
import router from "next/router";

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


  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onClipPathGroup3Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup12Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup22Click = useCallback(() => {
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
    //Synced "homepage" to the project
    router.push("/careers");
  }, [router]);

  return (
    <>
      <div className="relative bg-darkolivegreen-500 w-full overflow-hidden flex flex-col items-start justify-start text-center text-base text-white font-poppins">
        <div className="self-stretch bg-darkslategray-800 [backdrop-filter:blur(500px)] flex flex-col items-start justify-start">
          <nav
            className="m-0 self-stretch bg-gray-1700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
            id="navBar"
          >
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos11]:hover:flex">
                  <div
                    className="oursubsidiarylogos11 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
                    id="ourSubsidiaries"
                  >
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
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo61@2x.png"
                  />
                </div>
              </div>
              <div className="w-[649px] flex flex-row items-center justify-end gap-[20px]">
                <div className="w-[42px] flex flex-col items-start justify-start gap-[5px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[42px] h-[18px] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[-5.56%] left-[0%] text-smi tracking-[0.32px] leading-[19.2px] font-medium font-poppins text-white text-left">
                      Home
                    </div>
                  </button>
                  <img
                    className="relative w-10 h-0 object-cover hidden"
                    alt=""
                    src="/line-1@2x.png"
                  />
                </div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                  onClick={onAboutUsClick}
                >
                  <div className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                    About Us
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                  onClick={onProducAndServicesClick}
                >
                  <div className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">{`Product & Services`}</div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                  onClick={onClientspartnersClick}
                >
                  <div className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">{`Clients & Partners`}</div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
                  onClick={onMediaClick}
                >
                  <div className="relative text-mini-8 tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                    Media
                  </div>
                </button>
                <button
                  className="cursor-pointer py-3 px-5 bg-[transparent] flex-1 rounded-31xl flex flex-row items-center justify-between border-[1px] border-solid border-yellowgreen-100 hover:bg-gray-1600"
                  onClick={onContactUsContainerClick}
                >
                  <div className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                    Contact Us
                  </div>
                </button>
                <div className="h-[25px] hidden flex-col items-start justify-start relative gap-[5px]">
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[29.5px] h-[5.3px] z-[0]" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[29.5px] h-[5.3px] z-[1]" />
                  <div className="absolute my-0 mx-[!important] top-[19.7px] left-[0px] rounded-[378.41px] bg-yellowgreen-200 w-[29.5px] h-[5.3px] z-[2]" />
                </div>
              </div>
            </div>
          </nav>
          <nav
            className="m-0 self-stretch [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] hidden flex-row items-center justify-center py-3.5 px-[90px] border-[1px] border-solid border-gray-1800 lg:flex md:hidden sm:hidden"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="self-stretch flex-1 relative">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos11]:hover:flex">
                  <div
                    className="oursubsidiarylogos11 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
                    id="ourSubsidiaries"
                  >
                    <img
                      className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroup3Click}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group7@2x.png"
                      onClick={onClipPathGroup12Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group18@2x.png"
                      onClick={onClipPathGroup22Click}
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
                    alt=""
                    src="/logo11@2x.png"
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[51px] px-[65px] relative bg-[url('/team-faq-cta@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-goldenrod-200 font-poppins sm:hidden mq350small:hidden">
            <div className="flex-1 flex flex-col items-center justify-start pt-5 px-20 pb-[50px] gap-[40px] z-[0] sm:gap-[20px] sm:p-[15px] sm:box-border">
              <b className="self-stretch relative tracking-[3px] leading-[32px] uppercase hover:animate-[2s_ease_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">{`Blog & News`}</b>
              <b className="self-stretch relative text-37xl tracking-[-2px] leading-[64px] text-white hover:animate-[4s_ease_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">
                <p className="m-0">Learn Recent Practices</p>
                <p className="m-0">News and Blogs</p>
              </b>
              <section
                className="w-[1338px] flex flex-row items-start justify-center gap-[34px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1] text-left text-9xl text-darkslategray-200 font-lexend-deca lg:flex-col sm:gap-[25px] sm:p-[15px] sm:box-border"
                data-animate-on-scroll
              >
                <section className="flex-1 flex flex-col items-center justify-start gap-[60px] text-left text-9xl text-darkslategray-200 font-lexend-deca lg:flex-row lg:items-start lg:justify-center lg:flex-[unset] lg:self-stretch md:flex-col md:items-center md:justify-center">
                  <div
                    className="flex flex-col items-start justify-start gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[420px] h-[321px] text-right">
                      <img
                        className="absolute top-[3px] left-[0px] w-[420px] h-[300px] object-cover"
                        alt=""
                        src="/base48@2x.png"
                      />
                      <div className="absolute top-[259px] left-[26px] w-[65px] h-[65px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[65px] h-[65px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="absolute top-[6px] left-[14.5px] w-8 h-[53px]">
                          <div className="absolute top-[0px] left-[0px] capitalize font-medium">
                            25
                          </div>
                          <div className="absolute top-[27px] left-[2px] text-sm tracking-[-0.01em] leading-[26px] font-medium text-left">
                            DEC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[393px] h-[131px] text-xl text-gray-100 font-poppins">
                      <div className="absolute top-[3px] left-[0px] flex flex-col items-start justify-start gap-[15px]">
                        <div className="relative tracking-[-0.01em] leading-[28px] capitalize font-semibold">
                          <p className="m-0">{`Agrospectrum is Revolutionizing `}</p>
                          <p className="m-0">
                            Agriculture Through Digital Innovation
                          </p>
                        </div>
                        <div className="relative text-mid tracking-[0.01em] leading-[30px] font-light text-whitesmoke-100 whitespace-pre-wrap">
                          <p className="m-0">
                            In the Ghanaian space and beyond we at
                          </p>
                          <p className="m-0">Agropspectrum has equipped...</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[23px] text-sm text-whitesmoke-100">
                      <div className="relative bg-gainsboro-300 w-[194px] h-px" />
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        By Audrey K
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        2 Comments
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-start justify-start gap-[9px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-right"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[420px] h-[333px]">
                      <img
                        className="absolute top-[3px] left-[0px] w-[420px] h-[300px] object-cover"
                        alt=""
                        src="/base49@2x.png"
                      />
                      <div className="absolute top-[271px] left-[26px] w-[65px] h-[65px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[65px] h-[65px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="absolute top-[6px] left-[16px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[33px] left-[18px] text-sm tracking-[-0.01em] leading-[26px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[42px] text-left text-xl text-gray-100 font-poppins">
                      <div className="flex flex-col items-center justify-start gap-[13px]">
                        <div className="relative tracking-[-0.01em] leading-[28px] capitalize font-semibold">
                          <p className="m-0">{`How Digitalization Connects Farmers `}</p>
                          <p className="m-0">with Global Opportunities"</p>
                        </div>
                        <div className="relative text-mid tracking-[0.01em] leading-[30px] font-light text-whitesmoke-100">
                          <p className="m-0">
                            Varius sedu. Magna sollicitud volutpat nim
                          </p>
                          <p className="m-0">
                            quis. Sed sit leoys quis nibh...
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[23px] text-sm text-whitesmoke-100 font-lexend-deca">
                        <div className="relative bg-gainsboro-300 w-[194px] h-px" />
                        <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                          By Audrey K
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                          2 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex-1 flex flex-col items-center justify-start gap-[60px] lg:flex-row lg:items-start lg:justify-center lg:flex-[unset] lg:self-stretch md:flex-col md:items-center md:justify-center">
                  <div className="flex flex-col items-start justify-start gap-[25px]">
                    <div className="relative w-[420px] h-[315px] text-right">
                      <img
                        className="absolute top-[3px] left-[0px] w-[420px] h-[300px] object-cover"
                        alt=""
                        src="/base50@2x.png"
                      />
                      <div className="absolute top-[253px] left-[29px] w-[65px] h-[65px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[65px] h-[65px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="absolute top-[6px] left-[16px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[33px] left-[18px] text-sm tracking-[-0.01em] leading-[26px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[15px] text-xl text-gray-100 font-poppins">
                      <div className="relative tracking-[-0.01em] leading-[28px] capitalize font-semibold">
                        <p className="m-0">{`A Deep Dive into the Impact of `}</p>
                        <p className="m-0">
                          Agrospectrum on Agricultural Operations
                        </p>
                      </div>
                      <div className="relative text-mid tracking-[0.01em] leading-[30px] font-light text-whitesmoke-100">
                        <p className="m-0">
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className="m-0">quis. Sed sit leoys quis nibh...</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[36px] text-sm text-whitesmoke-100">
                      <div className="relative bg-gainsboro-300 w-[194px] h-px" />
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        By Big O
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        2 Comments
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[28px]">
                    <div className="relative w-[420px] h-[315px] text-right">
                      <img
                        className="absolute top-[3px] left-[0px] w-[420px] h-[300px] object-cover"
                        alt=""
                        src="/base51@2x.png"
                      />
                      <div className="absolute top-[253px] left-[21.2px] w-[65px] h-[65px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[65px] h-[65px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="absolute top-[6px] left-[16.2px] w-8 h-[50px]">
                          <div className="absolute top-[0px] left-[0px] capitalize font-medium">
                            25
                          </div>
                          <div className="absolute top-[24px] left-[2px] text-sm tracking-[-0.01em] leading-[26px] font-medium text-left">
                            DEC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[15px] text-xl text-gray-100 font-poppins">
                      <div className="relative tracking-[-0.01em] leading-[28px] capitalize font-semibold">
                        <p className="m-0">{`Enhancing Agricultural Resilience Through `}</p>
                        <p className="m-0">Ignitia's Climate Monitoring"</p>
                      </div>
                      <div className="relative text-mid tracking-[0.01em] leading-[30px] font-light text-whitesmoke-100">
                        <p className="m-0">
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className="m-0">quis. Sed sit leoys quis nibh...</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[23px] text-sm text-whitesmoke-100">
                      <div className="relative bg-gainsboro-300 w-[194px] h-px" />
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        Failu M.
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        2 Comments
                      </div>
                    </div>
                  </div>
                </div>
                <section className="flex-1 flex flex-col items-center justify-start gap-[56px] text-left text-9xl text-darkslategray-200 font-lexend-deca lg:flex-row lg:items-start lg:justify-center lg:flex-[unset] lg:self-stretch md:flex-col md:items-center md:justify-center">
                  <div className="flex flex-col items-start justify-start gap-[27px]">
                    <div className="relative w-[420px] h-[315px] text-right">
                      <img
                        className="absolute top-[3px] left-[0px] w-[420px] h-[300px] object-cover"
                        alt=""
                        src="/base52@2x.png"
                      />
                      <div className="absolute top-[253px] left-[30px] w-[65px] h-[65px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[65px] h-[65px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="absolute top-[6px] left-[16px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[33px] left-[18px] text-sm tracking-[-0.01em] leading-[26px] font-medium text-left">
                          OCT
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[15px] text-xl text-gray-100 font-poppins">
                      <div className="relative tracking-[-0.01em] leading-[28px] capitalize font-semibold">
                        <p className="m-0">
                          Unveiling the Power of Data Analytics
                        </p>
                        <p className="m-0">in Agriculture with our platform</p>
                      </div>
                      <div className="relative text-mid tracking-[0.01em] leading-[30px] font-light text-whitesmoke-100">
                        <p className="m-0">
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className="m-0">quis. Sed sit leoys quis nibh...</p>
                      </div>
                    </div>
                    <div className="w-[403px] flex flex-row items-center justify-between text-sm text-whitesmoke-100">
                      <div className="relative bg-gainsboro-300 w-[194px] h-px" />
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        Morenika
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        2 Comments
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[29px]">
                    <div className="relative w-[420px] h-[315px] text-right">
                      <img
                        className="absolute top-[3px] left-[0px] w-[420px] h-[300px] object-cover"
                        alt=""
                        src="/base53@2x.png"
                      />
                      <div className="absolute top-[253px] left-[21.8px] w-[65px] h-[65px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[65px] h-[65px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className="absolute top-[5px] left-[14.8px] w-8 h-[53px]">
                          <div className="absolute top-[0px] left-[0px] capitalize font-medium">
                            25
                          </div>
                          <div className="absolute top-[27px] left-[2px] text-sm tracking-[-0.01em] leading-[26px] font-medium text-left">
                            OCT
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[15px] text-xl text-gray-100 font-poppins">
                      <div className="relative tracking-[-0.01em] leading-[28px] capitalize font-semibold">
                        <p className="m-0">
                          A Sustainable Future with Agrospectrum's
                        </p>
                        <p className="m-0">Environmental Impact Monitoring"</p>
                      </div>
                      <div className="relative text-mid tracking-[0.01em] leading-[30px] font-light text-whitesmoke-100">
                        <p className="m-0">
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className="m-0">quis. Sed sit leoys quis nibh...</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[23px] text-sm text-whitesmoke-100">
                      <div className="relative bg-gainsboro-300 w-[194px] h-px" />
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        Failu M.
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[26px] font-medium">
                        2 Comments
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[1325px] left-[1500px] w-[106px] h-[106px] cursor-pointer z-[1]"
              alt=""
              src="/group5.svg"
              onClick={onGroupClick}
            />
          </section>
          <section className="w-[367.3px] overflow-hidden hidden flex-row items-center justify-center py-[11.012103080749512px] px-3 box-border bg-[url('/350@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[3.5px] text-goldenrod-200 font-poppins sm:flex mq350small:flex">
            <div className="flex-1 flex flex-col items-center justify-start pt-[4.318471908569336px] px-0 pb-[10.796178817749023px] relative gap-[8.64px] sm:gap-[20px] sm:p-[15px] sm:box-border">
              <b className="self-stretch relative tracking-[0.65px] leading-[6.91px] uppercase z-[0] hover:animate-[2s_ease_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">{`Blog & News`}</b>
              <b className="self-stretch relative text-smi-1 tracking-[-0.43px] leading-[13.82px] text-white z-[1] hover:animate-[4s_ease_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">
                <p className="m-0">Learn Recent Practices</p>
                <p className="m-0">News and Blogs</p>
              </b>
              <section
                className="w-[288.9px] flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1] z-[2] lg:flex-col sm:gap-[25px] sm:p-[15px] sm:box-border"
                data-animate-on-scroll
              >
                <section className="self-stretch flex flex-col items-center justify-start gap-[12.96px] text-right text-lg-7 text-darkslategray-200 font-lexend-deca lg:flex-row lg:items-start lg:justify-center md:flex-col md:items-center md:justify-center">
                  <div
                    className="self-stretch flex flex-col items-center justify-start gap-[10px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[280.4px] h-[222.3px]">
                      <img
                        className="absolute top-[2px] left-[0px] w-[280.4px] h-[200.3px] object-cover"
                        alt=""
                        src="/base54@2x.png"
                      />
                      <div className="absolute top-[180.9px] left-[17.4px] w-[43.4px] h-[43.4px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[43.4px] h-[43.4px]"
                          alt=""
                          src="/vector-171.svg"
                        />
                        <div className="absolute top-[4px] left-[10.7px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[22px] left-[12px] text-3xs-3 tracking-[-0.01em] leading-[17.36px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="w-[293.1px] flex flex-col items-start justify-start gap-[11.51px] text-left text-smi-7 text-gray-100 font-poppins">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                        <div className="self-stretch relative tracking-[-0.01em] leading-[15px] capitalize font-semibold">
                          <p className="m-0">{`Agrospectrum is Revolutionizing `}</p>
                          <p className="m-0">
                            Agriculture Through Digital Innovation
                          </p>
                        </div>
                        <div className="self-stretch relative text-2xs tracking-[0.01em] leading-[12.69px] font-light text-whitesmoke-100 whitespace-pre-wrap">
                          <p className="m-0">
                            In the Ghanaian space and beyond we at
                          </p>
                          <p className="m-0">Agropspectrum has equipped...</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[13.15px] text-5xs text-whitesmoke-100 font-lexend-deca">
                        <div className="relative bg-gainsboro-300 w-[110.9px] h-[0.6px]" />
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          By Audrey K
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          2 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch flex flex-col items-center justify-start gap-[10px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[280.4px] h-[222.3px]">
                      <img
                        className="absolute top-[2px] left-[0px] w-[280.4px] h-[200.3px] object-cover"
                        alt=""
                        src="/base55@2x.png"
                      />
                      <div className="absolute top-[180.9px] left-[17.4px] w-[43.4px] h-[43.4px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[43.4px] h-[43.4px]"
                          alt=""
                          src="/vector-171.svg"
                        />
                        <div className="absolute top-[4px] left-[10.7px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[22px] left-[12px] text-3xs-3 tracking-[-0.01em] leading-[17.36px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="w-[293.1px] flex flex-col items-start justify-start gap-[11.51px] text-left text-smi-7 text-gray-100 font-poppins">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                        <div className="self-stretch relative tracking-[-0.01em] leading-[15px] capitalize font-semibold">
                          How Digitalization Connects Farmers with Global
                          Opportunities"
                        </div>
                        <div className="self-stretch relative text-2xs tracking-[0.01em] leading-[12.69px] font-light text-whitesmoke-100">
                          Digitalisation has being a an huge ddevelopmental step
                          ....
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[13.15px] text-5xs text-whitesmoke-100 font-lexend-deca">
                        <div className="relative bg-gainsboro-300 w-[110.9px] h-[0.6px]" />
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          By Audrey K
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          2 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch flex flex-col items-center justify-start gap-[10px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[280.4px] h-[222.3px]">
                      <img
                        className="absolute top-[2px] left-[0px] w-[280.4px] h-[200.3px] object-cover"
                        alt=""
                        src="/base56@2x.png"
                      />
                      <div className="absolute top-[180.9px] left-[17.4px] w-[43.4px] h-[43.4px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[43.4px] h-[43.4px]"
                          alt=""
                          src="/vector-171.svg"
                        />
                        <div className="absolute top-[4px] left-[10.7px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[22px] left-[12px] text-3xs-3 tracking-[-0.01em] leading-[17.36px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="w-[293.1px] flex flex-col items-start justify-start gap-[11.51px] text-left text-smi-7 text-gray-100 font-poppins">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                        <div className="self-stretch relative tracking-[-0.01em] leading-[15px] capitalize font-semibold">
                          <p className="m-0">{`A Deep Dive into the Impact of `}</p>
                          <p className="m-0">
                            Agrospectrum on Agricultural Operations
                          </p>
                        </div>
                        <div className="self-stretch relative text-2xs tracking-[0.01em] leading-[12.69px] font-light text-whitesmoke-100">
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[13.15px] text-5xs text-whitesmoke-100 font-lexend-deca">
                        <div className="relative bg-gainsboro-300 w-[110.9px] h-[0.6px]" />
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          By Audrey K
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          2 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch flex flex-col items-center justify-start gap-[10px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[280.4px] h-[222.3px]">
                      <img
                        className="absolute top-[2px] left-[0px] w-[280.4px] h-[200.3px] object-cover"
                        alt=""
                        src="/base57@2x.png"
                      />
                      <div className="absolute top-[180.9px] left-[17.4px] w-[43.4px] h-[43.4px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[43.4px] h-[43.4px]"
                          alt=""
                          src="/vector-171.svg"
                        />
                        <div className="absolute top-[4px] left-[10.7px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[22px] left-[12px] text-3xs-3 tracking-[-0.01em] leading-[17.36px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="w-[293.1px] flex flex-col items-start justify-start gap-[11.51px] text-left text-smi-7 text-gray-100 font-poppins">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                        <div className="self-stretch relative tracking-[-0.01em] leading-[15px] capitalize font-semibold">
                          <p className="m-0">{`Enhancing Agricultural Resilience Through `}</p>
                          <p className="m-0">Ignitia's Climate Monitoring"</p>
                        </div>
                        <div className="self-stretch relative text-2xs tracking-[0.01em] leading-[12.69px] font-light text-whitesmoke-100">
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[13.15px] text-5xs text-whitesmoke-100 font-lexend-deca">
                        <div className="relative bg-gainsboro-300 w-[110.9px] h-[0.6px]" />
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          By Audrey K
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          2 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch flex flex-col items-center justify-start gap-[10px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[280.4px] h-[222.3px]">
                      <img
                        className="absolute top-[2px] left-[0px] w-[280.4px] h-[200.3px] object-cover"
                        alt=""
                        src="/base58@2x.png"
                      />
                      <div className="absolute top-[180.9px] left-[17.4px] w-[43.4px] h-[43.4px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[43.4px] h-[43.4px]"
                          alt=""
                          src="/vector-171.svg"
                        />
                        <div className="absolute top-[4px] left-[10.7px] capitalize font-medium">
                          25
                        </div>
                        <div className="absolute top-[22px] left-[12px] text-3xs-3 tracking-[-0.01em] leading-[17.36px] font-medium text-left">
                          DEC
                        </div>
                      </div>
                    </div>
                    <div className="w-[293.1px] flex flex-col items-start justify-start gap-[11.51px] text-left text-smi-7 text-gray-100 font-poppins">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                        <div className="self-stretch relative tracking-[-0.01em] leading-[15px] capitalize font-semibold">
                          <p className="m-0">
                            A Sustainable Future with Agrospectrum's
                          </p>
                          <p className="m-0">
                            Environmental Impact Monitoring"
                          </p>
                        </div>
                        <div className="self-stretch relative text-2xs tracking-[0.01em] leading-[12.69px] font-light text-whitesmoke-100">
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[13.15px] text-5xs text-whitesmoke-100 font-lexend-deca">
                        <div className="relative bg-gainsboro-300 w-[110.9px] h-[0.6px]" />
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          By Audrey K
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[14.87px] font-medium">
                          2 Comments
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <img
                className="absolute my-0 mx-[!important] top-[1704.3px] left-[300px] w-[38.8px] h-[38.8px] cursor-pointer z-[3]"
                alt=""
                src="/group6.svg"
                onClick={onGroupIconClick}
              />
            </div>
          </section>
        </div>
        <div className="w-[1701px] overflow-hidden flex flex-col items-start justify-start">
          <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] w-[1750px] h-[107px] overflow-hidden shrink-0">
            <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
              <div className="absolute top-[0px] left-[0px] w-[1974px] h-[100px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                  alt=""
                  src="/download-21@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                  alt=""
                  src="/download-52@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                  alt=""
                  src="/download1@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                  alt=""
                  src="/download-53@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                  alt=""
                  src="/download-31@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                  alt=""
                  src="/capture2@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                  alt=""
                  src="/mofa-color2@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images1@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                  alt=""
                  src="/download-62@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                  alt=""
                  src="/images-12@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                  alt=""
                  src="/download-12@2x.png"
                />
              </div>
              <div className="absolute top-[0px] left-[2034px] w-[1974px] h-[100px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                  alt=""
                  src="/download-21@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                  alt=""
                  src="/download-52@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                  alt=""
                  src="/download1@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                  alt=""
                  src="/download-53@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                  alt=""
                  src="/download-31@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                  alt=""
                  src="/capture2@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                  alt=""
                  src="/mofa-color2@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images1@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                  alt=""
                  src="/download-62@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                  alt=""
                  src="/images-12@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                  alt=""
                  src="/download-12@2x.png"
                />
              </div>
            </div>
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
            <div className="flex-1 h-[416px] flex flex-col items-start justify-start py-[30px] px-[5px] box-border gap-[44px] text-base lg:flex-[unset] lg:self-stretch">
              <div className="self-stretch flex flex-row items-center justify-start gap-[43px] text-white">
                <img
                  className="relative max-h-full w-[33.6px] cursor-pointer"
                  alt=""
                  src="/arrow-6.svg"
                  onClick={onArrowIconClick}
                />
                <div
                  className="flex-1 relative h-0 cursor-pointer"
                  onClick={onNowWereContainerClick}
                >
                  <div className="absolute w-full left-[0%] tracking-[1.37px] leading-[69.96px] uppercase font-medium flex items-center">
                    GET DIRECTIONS
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative h-0">
                  <div className="absolute w-full left-[0%] tracking-[1.34px] leading-[68.62px] uppercase font-medium flex items-center">{`PHONE `}</div>
                </div>
                <b className="self-stretch relative tracking-[1.34px] leading-[68.62px] capitalize flex text-white items-center h-[69px] shrink-0">
                  +233(0) 593 808 064
                </b>
              </div>
              <div className="w-[264px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch relative h-[29px]">
                  <div className="absolute w-[96.14%] top-[-51.72%] left-[-0.91%] tracking-[1.15px] leading-[58.74px] uppercase font-medium flex items-center">
                    EMAIL
                  </div>
                </div>
                <div className="self-stretch relative h-[26px] text-white">
                  <b className="absolute top-[7px] left-[-1px] tracking-[1.15px] leading-[58.74px] lowercase">
                    customercare@bsl.com.gh
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-[5px] relative gap-[10px]">
                <div className="relative w-[131px] h-[39px] z-[0]">
                  <div className="absolute top-[-25.64%] left-[0%] tracking-[1.15px] leading-[58.74px] uppercase font-medium">{`FOLLOW US `}</div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[39px] left-[-1px] flex flex-row items-end justify-start gap-[17px] z-[1]">
                  <div className="rounded-[31.88px] bg-darkgray-400 w-[46.3px] h-[46.8px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[19.9257869720459px] box-border">
                    <img
                      className="relative w-[13.9px] h-[15px]"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className="rounded-[36.86px] bg-darkgray-400 w-[47.3px] h-[48.8px] flex flex-row items-center justify-center py-[19.9257869720459px] px-[24.90723419189453px] box-border">
                    <img
                      className="relative w-[7.8px] h-[15px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="rounded-[58.28px] bg-darkgray-400 w-[45.3px] h-[45.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[19.9257869720459px] px-[17.4350643157959px] box-border">
                    <img
                      className="relative w-[16.7px] h-3.5"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                  <div className="rounded-[40.35px] bg-darkgray-400 w-[49.3px] h-[48.8px] flex flex-col items-center justify-center p-[19.9257869720459px] box-border">
                    <img
                      className="relative w-[16.1px] h-[15px]"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
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
