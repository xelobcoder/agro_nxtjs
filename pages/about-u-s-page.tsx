import React from "react";
import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import NavDesktop from "../components/nav-desktop";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import Container from "../components/container";
import Leading from "../components/leading";
import LeaderSections from "../components/leader-sections";
import ContainerOurSubsidiar from "../components/container-our-subsidiar";
import Transform from "../components/transform";
import FrameComponent21 from "../components/frame-component";

const AboutUSPage: NextPage = () => {
  const router = useRouter();
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

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

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
      <main
        className="relative w-full flex flex-col items-center justify-start"
        id="6-aboutsUs-pageMain"
      >
        <header className="self-stretch bg-gray-1900 [backdrop-filter:blur(200px)] flex flex-col items-start justify-start">
          <NavDesktop />
          <nav
            className="m-0 self-stretch bg-gray-1700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="self-stretch flex-1 relative">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos13]:hover:flex">
                  <div
                    className="oursubsidiarylogos13 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                      src="/clip-path-group5@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group6@2x.png"
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
                    src="/images-2-1@2x.png"
                  />
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo21@2x.png"
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
                    className="relative max-h-full w-10 object-cover"
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
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos3]:hover:flex">
                  <div
                    className="absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                      src="/clip-path-group8@2x.png"
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
                    id="logo"
                    alt=""
                    src="/logo31@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[30px]">
                <button
                  className="cursor-pointer py-3 px-5 bg-[transparent] rounded-31xl box-border w-[152px] flex flex-row items-center justify-between border-[1px] border-solid border-olivedrab-100"
                  onClick={onContactUsContainerClick}
                >
                  <div
                    className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b6c2f1,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center cursor-pointer"
                    onClick={onContactUsTextClick}
                  >
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
        </header>
        <section
          className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[100px] bg-[url('/herosec@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-hard-light text-center text-51xl text-white font-poppins lg:h-[600px] lg:gap-[100px] lg:pl-5 lg:pt-0 lg:pr-5 lg:box-border"
          id="aboutUs_herosection"
        >
          <div
            className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[120px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div
              className="w-[887px] flex flex-row items-start justify-start gap-[13.3px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-52xl"
              data-animate-on-scroll
            >
              <div className="rounded-[8.87px] bg-goldenrod-200 w-[371.8px] flex flex-row items-center justify-center py-[4.434999942779541px] px-[8.869999885559082px] box-border hover:bg-gray-500">
                <b className="relative tracking-[0.35px] leading-[70.96px]">
                  Platform
                </b>
              </div>
              <b className="flex-1 relative text-43xl-1 tracking-[0.35px] leading-[70.96px] whitespace-pre-wrap">{`for the  future `}</b>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center p-[9.210000038146973px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg-4"
              data-animate-on-scroll
            >
              <div className="self-stretch relative leading-[120%] font-medium">
                <p className="m-0">{`We provide an ecosystem for all the players in the agricultural supply chain to `}</p>
                <p className="m-0">{`function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className="m-0">
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div
              className="self-stretch flex flex-row items-center justify-between [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mid-1"
              data-animate-on-scroll
            >
              <div className="relative w-[119.3px] h-[44.6px]">
                <Box
                  className="absolute top-[0px] left-[0px]"
                  sx={{ width: 44.6 }}
                >
                  <CircularProgress />
                </Box>
                <img
                  className="absolute top-[17.8px] left-[62.4px] w-[12.3px] h-[12.3px]"
                  alt=""
                  src="/group-1881.svg"
                />
                <img
                  className="absolute top-[17.8px] left-[106.9px] w-[12.3px] h-[12.3px]"
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className="relative w-[39.8px] h-[17px]">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[22.75px]">
                  <div className="relative leading-[100%] font-medium opacity-[0.4]">
                    1
                  </div>
                  <b className="relative leading-[100%]">3</b>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[28.14000129699707px] pr-[550px] pl-[380px]">
              <img
                className="relative rounded-[20.64px] w-[32.8px] h-[76px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_infinite_normal_forwards_bounce-top] opacity-[1]"
                alt=""
                src="/frame-71.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className="w-[960px] overflow-hidden hidden flex-col items-start justify-start py-10 px-[90px] box-border gap-[10px] bg-[url('/960@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-38xl-1 text-white font-poppins md:flex sm:hidden">
            <b
              className="self-stretch relative tracking-[0.33px] leading-[65.3px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div
              className="w-[684px] flex flex-row items-start justify-start gap-[10.93px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-39xl-3"
              data-animate-on-scroll
            >
              <div className="rounded-[7.29px] bg-goldenrod-200 w-[305.4px] flex flex-row items-center justify-center py-[3.643749952316284px] px-[7.287499904632568px] box-border hover:bg-gray-500">
                <b className="relative tracking-[0.29px] leading-[58.3px]">
                  Platform
                </b>
              </div>
              <b className="flex-1 relative text-32xl tracking-[0.29px] leading-[58.3px] whitespace-pre-wrap">{`for the  future `}</b>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center p-[8.1875px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-base-4"
              data-animate-on-scroll
            >
              <div className="self-stretch relative leading-[120%] font-medium">
                <p className="m-0">{`We provide an ecosystem for all the players in the agricultural supply chain to function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className="m-0">
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div
              className="self-stretch flex flex-row items-center justify-between [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm-9"
              data-animate-on-scroll
            >
              <div className="relative w-[97.3px] h-[36.4px]">
                <Box
                  className="absolute top-[0px] left-[0px]"
                  sx={{ width: 36.4 }}
                >
                  <CircularProgress />
                </Box>
                <img
                  className="absolute top-[14.5px] left-[50.9px] w-[10.1px] h-[10.1px]"
                  alt=""
                  src="/group-1882.svg"
                />
                <img
                  className="absolute top-[14.5px] left-[87.3px] w-[10.1px] h-[10.1px]"
                  alt=""
                  src="/group-1891.svg"
                />
              </div>
              <div className="relative w-[32.6px] h-3.5">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[18.57px]">
                  <div className="relative leading-[100%] font-medium opacity-[0.4]">
                    1
                  </div>
                  <b className="relative leading-[100%]">3</b>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[22.274999618530273px] pr-[390px] pl-[300px]">
              <img
                className="relative rounded-[16.34px] w-[26px] h-[60.1px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_infinite_normal_forwards_bounce-top] opacity-[1]"
                alt=""
                src="/frame-72.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className="w-[420px] overflow-hidden hidden flex-col items-start justify-start pt-[47.65595245361328px] px-[39.374996185302734px] pb-[23.82797622680664px] box-border gap-[11.91px] bg-[url('/420@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-16xl-7 text-white font-poppins sm:flex mq350small:hidden">
            <b
              className="self-stretch relative tracking-[0.14px] leading-[28.57px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[9.53px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-26xl-3"
              data-animate-on-scroll
            >
              <div className="rounded-[6.34px] bg-goldenrod-200 w-[219.2px] flex flex-row items-center justify-start py-[3.1687722206115723px] px-[6.3375444412231445px] box-border hover:bg-gray-500">
                <b className="relative tracking-[0.25px] leading-[50.7px]">
                  Platform
                </b>
              </div>
              <b className="self-stretch relative text-16xl-7 tracking-[0.13px] leading-[25.51px] whitespace-pre-wrap">{`for the  future `}</b>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center py-[11.91398811340332px] px-[3.582031011581421px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xs-9"
              data-animate-on-scroll
            >
              <div className="self-stretch relative leading-[120%]">{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </div>
            <div
              className="self-stretch flex flex-row items-center justify-between [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xs-1"
              data-animate-on-scroll
            >
              <div className="relative w-[42.6px] h-[15.9px]">
                <Box
                  className="absolute top-[0px] left-[0px]"
                  sx={{ width: 15.9 }}
                >
                  <CircularProgress />
                </Box>
                <img
                  className="absolute top-[6.4px] left-[22.3px] w-[4.4px] h-[4.4px]"
                  alt=""
                  src="/group-1883.svg"
                />
                <img
                  className="absolute top-[6.4px] left-[38.2px] w-[4.4px] h-[4.4px]"
                  alt=""
                  src="/group-1892.svg"
                />
              </div>
              <div className="relative w-[15.1px] h-1.5">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[8.12px]">
                  <div className="relative leading-[100%] font-medium opacity-[0.4]">
                    1
                  </div>
                  <b className="relative leading-[100%]">3</b>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[9.745311737060547px] px-[216.34593200683594px]">
              <img
                className="relative rounded-[7.15px] w-[11.4px] h-[26.3px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_infinite_normal_forwards_bounce-top] opacity-[1]"
                alt=""
                src="/frame-73.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className="w-[352.5px] overflow-hidden hidden flex-col items-start justify-start pt-10 px-[33.04938507080078px] pb-5 box-border gap-[10px] bg-[url('/3501@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-11xl text-white font-poppins mq350small:flex">
            <b className="self-stretch relative tracking-[0.12px] leading-[23.98px]">{`Digitalization `}</b>
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-19xl"
              data-animate-on-scroll
            >
              <div className="rounded-[5.32px] bg-goldenrod-200 w-[184px] flex flex-row items-center justify-start py-[2.6597073078155518px] px-[5.3194146156311035px] box-border hover:bg-gray-600 hover:animate-[2s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
                <b className="relative tracking-[0.21px] leading-[42.56px]">
                  Platform
                </b>
              </div>
              <b className="relative text-11xl tracking-[0.11px] leading-[21.41px] flex whitespace-pre-wrap items-center w-[259px]">{`for the  future `}</b>
            </div>
            <section
              className="self-stretch flex flex-col items-center justify-center py-2.5 px-[3.0065758228302px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-left text-3xs text-white font-poppins"
              data-animate-on-scroll
            >
              <div className="self-stretch relative leading-[120%]">{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </section>
            <div className="self-stretch flex flex-row items-center justify-between text-7xs-1">
              <div className="relative w-[35.7px] h-[13.4px]">
                <Box
                  className="absolute top-[0px] left-[0px]"
                  sx={{ width: 13.4 }}
                >
                  <CircularProgress />
                </Box>
                <img
                  className="absolute top-[5.3px] left-[18.7px] w-[3.7px] h-[3.7px]"
                  alt=""
                  src="/group-1884.svg"
                />
                <img
                  className="absolute top-[5.3px] left-[32.1px] w-[3.7px] h-[3.7px]"
                  alt=""
                  src="/group-1893.svg"
                />
              </div>
              <div className="relative w-[12.8px] h-[5px]">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[6.82px]">
                  <div className="relative leading-[100%] font-medium opacity-[0.4]">
                    1
                  </div>
                  <b className="relative leading-[100%]">3</b>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[8.179722785949707px] pr-[150px] pl-[100px]">
              <img
                className="relative rounded-md w-[9.5px] h-[22.1px] overflow-hidden shrink-0 object-cover [&.animate]:mq350small:animate-[3s_ease_s_infinite_normal_forwards_bounce-top] mq350small:opacity-[1]"
                alt=""
                src="/frame-74@2x.png"
                data-animate-on-scroll
              />
            </div>
          </section>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="[background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] overflow-hidden flex flex-col items-start justify-start py-0 px-[34px] lg:hidden">
            <div className="flex flex-col items-start justify-start">
              <div className="relative w-[1658px] h-[84px]">
                <img
                  className="absolute top-[16px] left-[1605.9px] w-[52.1px] h-[52.1px] object-cover"
                  alt=""
                  src="/download-22@2x.png"
                />
                <img
                  className="absolute top-[16.8px] left-[264.6px] w-[87.4px] h-[57.1px] object-cover"
                  alt=""
                  src="/download-54@2x.png"
                />
                <img
                  className="absolute top-[5.9px] left-[1475.7px] w-[57.1px] h-[63px] object-cover"
                  alt=""
                  src="/download2@2x.png"
                />
                <img
                  className="absolute top-[12.6px] left-[0px] w-[70.6px] h-[58.8px] object-cover"
                  alt=""
                  src="/download-55@2x.png"
                />
                <img
                  className="absolute top-[20.2px] left-[136.1px] w-[49.6px] h-[48.7px] object-cover"
                  alt=""
                  src="/download-32@2x.png"
                />
                <img
                  className="absolute top-[10.9px] left-[406.5px] w-[141.9px] h-[62.2px] object-cover"
                  alt=""
                  src="/capture3@2x.png"
                />
                <img
                  className="absolute top-[16.8px] left-[597.2px] w-[248.6px] h-[52.1px] object-cover"
                  alt=""
                  src="/mofa-color3@2x.png"
                />
                <img
                  className="absolute top-[24.4px] left-[881.1px] w-[115.9px] h-[39.5px] object-cover mix-blend-difference"
                  alt=""
                  src="/images2@2x.png"
                />
                <img
                  className="absolute top-[11.8px] left-[1027.2px] w-[104.1px] h-[59.6px] object-cover"
                  alt=""
                  src="/download-63@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1172.5px] w-[84px] h-[84px] object-cover"
                  alt=""
                  src="/images-13@2x.png"
                />
                <img
                  className="absolute top-[15.1px] left-[1301px] w-[137.7px] h-[54.6px] object-cover"
                  alt=""
                  src="/download-13@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2.8px_43.11px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(41.71px)] overflow-hidden hidden flex-col items-start justify-start py-0 px-[23.638473510742188px] lg:flex md:hidden">
            <div className="flex flex-col items-start justify-start">
              <div className="relative w-[1152.7px] h-[58.4px]">
                <img
                  className="absolute top-[11.1px] left-[1116.5px] w-[36.2px] h-[36.2px] object-cover"
                  alt=""
                  src="/download-23@2x.png"
                />
                <img
                  className="absolute top-[11.7px] left-[183.9px] w-[60.7px] h-[39.7px] object-cover"
                  alt=""
                  src="/download-56@2x.png"
                />
                <img
                  className="absolute top-[4.1px] left-[1026px] w-[39.7px] h-[43.8px] object-cover"
                  alt=""
                  src="/download3@2x.png"
                />
                <img
                  className="absolute top-[8.8px] left-[0px] w-[49.1px] h-[40.9px] object-cover"
                  alt=""
                  src="/download-57@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[94.6px] w-[34.5px] h-[33.9px] object-cover"
                  alt=""
                  src="/download-33@2x.png"
                />
                <img
                  className="absolute top-[7.6px] left-[282.6px] w-[98.7px] h-[43.2px] object-cover"
                  alt=""
                  src="/capture4@2x.png"
                />
                <img
                  className="absolute top-[11.7px] left-[415.2px] w-[172.9px] h-[36.2px] object-cover"
                  alt=""
                  src="/mofa-color4@2x.png"
                />
                <img
                  className="absolute top-[16.9px] left-[612.6px] w-[80.6px] h-[27.4px] object-cover mix-blend-difference"
                  alt=""
                  src="/images3@2x.png"
                />
                <img
                  className="absolute top-[8.2px] left-[714.2px] w-[72.4px] h-[41.5px] object-cover"
                  alt=""
                  src="/download-64@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[815.2px] w-[58.4px] h-[58.4px] object-cover"
                  alt=""
                  src="/images-14@2x.png"
                />
                <img
                  className="absolute top-[10.5px] left-[904.5px] w-[95.8px] h-[38px] object-cover"
                  alt=""
                  src="/download-14@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2.2px_34.48px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(33.37px)] overflow-hidden hidden flex-col items-start justify-start py-0 px-[18.91077995300293px] md:flex sm:hidden">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative w-[922.2px] h-[46.7px]">
                <img
                  className="absolute top-[8.9px] left-[893.2px] w-[29px] h-[29px] object-cover"
                  alt=""
                  src="/download-24@2x.png"
                />
                <img
                  className="absolute top-[9.3px] left-[147.2px] w-[48.6px] h-[31.8px] object-cover"
                  alt=""
                  src="/download-58@2x.png"
                />
                <img
                  className="absolute top-[3.3px] left-[820.8px] w-[31.8px] h-[35px] object-cover"
                  alt=""
                  src="/download4@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[0px] w-[39.2px] h-[32.7px] object-cover"
                  alt=""
                  src="/download-59@2x.png"
                />
                <img
                  className="absolute top-[11.2px] left-[75.7px] w-[27.6px] h-[27.1px] object-cover"
                  alt=""
                  src="/download-34@2x.png"
                />
                <img
                  className="absolute top-[6.1px] left-[226.1px] w-[79px] h-[34.6px] object-cover"
                  alt=""
                  src="/capture5@2x.png"
                />
                <img
                  className="absolute top-[9.3px] left-[332.2px] w-[138.3px] h-[29px] object-cover"
                  alt=""
                  src="/mofa-color5@2x.png"
                />
                <img
                  className="absolute top-[13.5px] left-[490.1px] w-[64.5px] h-[22px] object-cover mix-blend-difference"
                  alt=""
                  src="/images4@2x.png"
                />
                <img
                  className="absolute top-[6.5px] left-[571.3px] w-[57.9px] h-[33.2px] object-cover"
                  alt=""
                  src="/download-65@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[652.2px] w-[46.7px] h-[46.7px] object-cover"
                  alt=""
                  src="/images-15@2x.png"
                />
                <img
                  className="absolute top-[8.4px] left-[723.6px] w-[76.6px] h-[30.4px] object-cover"
                  alt=""
                  src="/download-15@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_1px_16.24px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(15.72px)] overflow-hidden hidden flex-col items-start justify-start py-0 px-[8.905624389648438px] sm:flex mq350small:hidden">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative w-[434.3px] h-[22px]">
                <img
                  className="absolute top-[4.2px] left-[420.6px] w-[13.6px] h-[13.6px] object-cover"
                  alt=""
                  src="/download-25@2x.png"
                />
                <img
                  className="absolute top-[4.4px] left-[69.3px] w-[22.9px] h-[15px] object-cover"
                  alt=""
                  src="/download-510@2x.png"
                />
                <img
                  className="absolute top-[1.5px] left-[386.5px] w-[15px] h-[16.5px] object-cover"
                  alt=""
                  src="/download5@2x.png"
                />
                <img
                  className="absolute top-[3.3px] left-[0px] w-[18.5px] h-[15.4px] object-cover"
                  alt=""
                  src="/download-511@2x.png"
                />
                <img
                  className="absolute top-[5.3px] left-[35.6px] w-[13px] h-[12.8px] object-cover"
                  alt=""
                  src="/download-35@2x.png"
                />
                <img
                  className="absolute top-[2.9px] left-[106.5px] w-[37.2px] h-[16.3px] object-cover"
                  alt=""
                  src="/capture6@2x.png"
                />
                <img
                  className="absolute top-[4.4px] left-[156.4px] w-[65.1px] h-[13.6px] object-cover"
                  alt=""
                  src="/mofa-color6@2x.png"
                />
                <img
                  className="absolute top-[6.4px] left-[230.8px] w-[30.4px] h-[10.3px] object-cover mix-blend-difference"
                  alt=""
                  src="/images5@2x.png"
                />
                <img
                  className="absolute top-[3.1px] left-[269.1px] w-[27.3px] h-[15.6px] object-cover"
                  alt=""
                  src="/download-66@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[307.1px] w-[22px] h-[22px] object-cover"
                  alt=""
                  src="/images-16@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[340.8px] w-[36.1px] h-[14.3px] object-cover"
                  alt=""
                  src="/download-16@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_0.9px_14.3px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(13.84px)] overflow-hidden hidden flex-col items-start justify-start py-0 px-[7.840097427368164px] mq350small:flex">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative w-[382.3px] h-[19.4px]">
                <img
                  className="absolute top-[3.7px] left-[370.3px] w-3 h-3 object-cover"
                  alt=""
                  src="/download-26@2x.png"
                />
                <img
                  className="absolute top-[3.9px] left-[61px] w-[20.1px] h-[13.2px] object-cover"
                  alt=""
                  src="/download-512@2x.png"
                />
                <img
                  className="absolute top-[1.4px] left-[340.3px] w-[13.2px] h-[14.5px] object-cover"
                  alt=""
                  src="/download6@2x.png"
                />
                <img
                  className="absolute top-[2.9px] left-[0px] w-[16.3px] h-[13.6px] object-cover"
                  alt=""
                  src="/download-513@2x.png"
                />
                <img
                  className="absolute top-[4.6px] left-[31.4px] w-[11.4px] h-[11.2px] object-cover"
                  alt=""
                  src="/download-36@2x.png"
                />
                <img
                  className="absolute top-[2.5px] left-[93.7px] w-[32.7px] h-[14.3px] object-cover"
                  alt=""
                  src="/capture7@2x.png"
                />
                <img
                  className="absolute top-[3.9px] left-[137.7px] w-[57.3px] h-3 object-cover"
                  alt=""
                  src="/mofa-color7@2x.png"
                />
                <img
                  className="absolute top-[5.6px] left-[203.2px] w-[26.7px] h-[9.1px] object-cover mix-blend-difference"
                  alt=""
                  src="/images6@2x.png"
                />
                <img
                  className="absolute top-[2.7px] left-[236.9px] w-6 h-[13.8px] object-cover"
                  alt=""
                  src="/download-67@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[270.4px] w-[19.4px] h-[19.4px] object-cover"
                  alt=""
                  src="/images-17@2x.png"
                />
                <img
                  className="absolute top-[3.5px] left-[300px] w-[31.8px] h-[12.6px] object-cover"
                  alt=""
                  src="/download-17@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <section className="self-stretch bg-gray-500 overflow-hidden flex flex-col items-center justify-start pt-[60px] px-[200px] pb-20 relative gap-[10px] text-center text-lgi text-goldenrod-500 font-poppins lg:hidden">
            <div
              className="absolute my-0 mx-[!important] top-[-117.9px] left-[1533px] rounded-[50%] bg-seagreen-400 [filter:blur(146.6px)] [backdrop-filter:blur(133.5px)] w-[387px] h-[387px] [&.animate]:animate-[15s_ease_0s_infinite_normal_forwards_bounce-in-top] opacity-[0] z-[0]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[413px] left-[-177px] w-[795.4px] h-[1191px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[1]"
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div
              className="absolute my-0 mx-[!important] top-[1009px] left-[1170px] rounded-[50%] bg-goldenrod-400 [filter:blur(146.6px)] w-[650px] h-[650px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[2] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <div className="flex flex-col items-center justify-start gap-[30px] z-[3]">
              <div
                className="self-stretch overflow-hidden flex flex-col items-center justify-start py-5 px-[119px] gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row items-start justify-center p-2.5">
                  <div className="flex-1 relative leading-[100%] font-extrabold">
                    The nation’s best digital Agric Platform
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-base text-white">
                  <div className="flex-1 relative">{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className="self-stretch relative text-[100px] text-goldenrod-100 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className="font-extrabold">{` Work with `}</span>
                <span>us</span>
                <span className="font-extrabold">{` `}</span>
                <span>?</span>
              </div>
              <div className="w-[1036px] flex flex-col items-center justify-start gap-[100px] text-left text-11xl text-white font-inter">
                <div className="self-stretch flex flex-row items-start justify-start gap-[76px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <img
                      className="relative rounded-21xl w-[475px] h-[347px] object-cover"
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start p-2.5">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[48px]">
                      <div
                        className="self-stretch relative font-semibold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                        data-animate-on-scroll
                      >
                        We offer a Comprehensive Suite of Agriculture Supply
                        Chain Management tools.
                      </div>
                      <div
                        className="self-stretch relative text-lg [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                        data-animate-on-scroll
                      >
                        <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, `}</p>
                        <p className="m-0">{`Agrospectrum emerges as a beacon of innovation, `}</p>
                        <p className="m-0">
                          poised to transform the industry through the power of
                          digitalization. We are committed promoting inclusivity
                          and granting farmers access to finances and markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[76px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                    <div
                      className="self-stretch relative font-semibold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <p className="m-0">{`Unlocking Ghana's Agricultural `}</p>
                      <p className="m-0">Potential</p>
                    </div>
                    <div
                      className="self-stretch relative text-lg [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      Ghana's agricultural sector holds immense potential,
                      brimming with untapped opportunities. Agrospectrum is
                      committed to unlocking this potential by providing a
                      digital infrastructure that empowers all stakeholders,
                      from farmers to processors. Our platform is not merely a
                      tool; it is a catalyst for Ghana's agricultural
                      revolution.
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-start">
                    <img
                      className="relative rounded-21xl w-[475px] h-[347px] object-cover"
                      alt=""
                      src="/rectangle-9401@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="self-stretch flex flex-row items-start justify-center text-center text-31xl-9 text-white font-poppins md:gap-[40px] md:pl-2.5 md:pr-2.5 md:box-border">
          <div className="flex-1 [background:linear-gradient(#172310,_#172310),_linear-gradient(90.57deg,_rgba(3,_11,_1,_0.6),_rgba(3,_11,_1,_0.28)_10.54%,_rgba(219,_236,_215,_0.07)_78.44%,_rgba(219,_236,_215,_0.07))] overflow-hidden flex flex-row items-start justify-between py-16 px-[200px] lg:hidden lg:py-[60px] lg:px-[140px] lg:box-border md:py-10 md:px-[100px] md:box-border">
            <div
              className="flex-1 flex flex-row items-start justify-center gap-[80px] [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
              data-animate-on-scroll
            >
              <div className="flex-1 flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.3%] top-[0.15%] left-[-13.95%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    1. 7 M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                    Farmers Registered
                  </div>
                </div>
                <div className="relative box-border w-[96.3px] h-[0.8px] border-t-[0.8px] border-solid border-seagreen-100" />
                <div
                  className="relative text-xs-7 font-extralight whitespace-pre-wrap inline-block w-[264.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div
                    className="absolute w-[136.3%] top-[0.15%] left-[-13.95%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    60+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div
                    className="absolute w-full top-[0%] left-[0%] font-semibold inline-block [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    Districts Covered
                  </div>
                </div>
                <div className="relative box-border w-[96.3px] h-[0.8px] border-t-[0.8px] border-solid border-seagreen-100" />
                <div
                  className="relative text-xs-7 font-extralight inline-block w-[264.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <p className="m-0">
                    With our technology, we have successfully
                  </p>
                  <p className="m-0">run several partner programs across</p>
                  <p className="m-0">sixty districts.</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div
                    className="absolute w-[136.3%] top-[0.15%] left-[-13.95%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    20M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">{`Farming Acres `}</div>
                </div>
                <div className="relative box-border w-[96.3px] h-[0.8px] border-t-[0.8px] border-solid border-seagreen-100" />
                <div
                  className="relative text-xs-7 font-extralight inline-block w-[264.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <p className="m-0">{`We have documented millions of farming `}</p>
                  <p className="m-0">lands, detailing their per seasonal</p>
                  <p className="m-0">cultivation and yields.</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.3%] top-[0.15%] left-[-13.95%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    5 Acres
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                    Average farm size
                  </div>
                </div>
                <div className="relative box-border w-[96.3px] h-[0.8px] border-t-[0.8px] border-solid border-seagreen-100" />
                <div
                  className="relative text-xs-7 font-extralight whitespace-pre-wrap inline-block w-[264.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(#172310,_#172310),_linear-gradient(90.57deg,_rgba(3,_11,_1,_0.6),_rgba(3,_11,_1,_0.28)_10.54%,_rgba(219,_236,_215,_0.07)_78.44%,_rgba(219,_236,_215,_0.07))] w-[1200px] overflow-hidden shrink-0 hidden flex-row items-start justify-start py-[44.80368423461914px] px-[140.0115203857422px] box-border text-16xl-6 lg:flex md:hidden">
            <div
              className="w-[921.3px] flex flex-row items-start justify-start gap-[60.2px] [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
              data-animate-on-scroll
            >
              <div className="w-[193.9px] flex flex-col items-center justify-start gap-[9.31px]">
                <div
                  className="self-stretch relative h-[47.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.31%] top-[0.21%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    1. 7 M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[26.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mid-5"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.05%] top-[0%] left-[0%] font-semibold inline-block">
                    Farmers Registered
                  </div>
                </div>
                <div className="relative box-border w-[67.4px] h-[0.5px] border-t-[0.5px] border-solid border-seagreen-100" />
                <div
                  className="relative text-4xs-2 font-extralight whitespace-pre-wrap inline-block w-[185.2px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className="w-[193.9px] flex flex-col items-center justify-start gap-[9.31px]">
                <div
                  className="self-stretch relative h-[47.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.31%] top-[0.21%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    60+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[26.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mid-5"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.05%] top-[0%] left-[0%] font-semibold inline-block">
                    Districts Covered
                  </div>
                </div>
                <div className="relative box-border w-[67.4px] h-[0.5px] border-t-[0.5px] border-solid border-seagreen-100" />
                <div
                  className="relative text-4xs-2 font-extralight inline-block w-[185.2px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <p className="m-0">
                    With our technology, we have successfully
                  </p>
                  <p className="m-0">run several partner programs across</p>
                  <p className="m-0">sixty districts.</p>
                </div>
              </div>
              <div className="w-[193.9px] flex flex-col items-center justify-start gap-[9.31px]">
                <div
                  className="self-stretch relative h-[47.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.31%] top-[0.21%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    20M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[26.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mid-5"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.05%] top-[0%] left-[0%] font-semibold inline-block">{`Farming Acres `}</div>
                </div>
                <div className="relative box-border w-[67.4px] h-[0.5px] border-t-[0.5px] border-solid border-seagreen-100" />
                <div
                  className="relative text-4xs-2 font-extralight inline-block w-[185.2px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <p className="m-0">{`We have documented millions of farming `}</p>
                  <p className="m-0">lands, detailing their per seasonal</p>
                  <p className="m-0">cultivation and yields.</p>
                </div>
              </div>
              <div className="w-[193.9px] flex flex-col items-center justify-start gap-[9.31px]">
                <div
                  className="self-stretch relative h-[47.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.31%] top-[0.21%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    5 Acres
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[26.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mid-5"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.05%] top-[0%] left-[0%] font-semibold inline-block">
                    Average farm size
                  </div>
                </div>
                <div className="relative box-border w-[67.4px] h-[0.5px] border-t-[0.5px] border-solid border-seagreen-100" />
                <div
                  className="relative text-4xs-2 font-extralight whitespace-pre-wrap inline-block w-[185.2px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(#172310,_#172310),_linear-gradient(90.57deg,_rgba(3,_11,_1,_0.6),_rgba(3,_11,_1,_0.28)_10.54%,_rgba(219,_236,_215,_0.07)_78.44%,_rgba(219,_236,_215,_0.07))] w-[953px] overflow-hidden shrink-0 hidden flex-row items-start justify-start py-[35.58159255981445px] px-[111.1924819946289px] box-border text-9xl-3 md:flex sm:hidden">
            <div
              className="w-[731.6px] flex flex-row items-start justify-start gap-[47.81px] [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
              data-animate-on-scroll
            >
              <div className="w-[154px] flex flex-col items-center justify-start gap-[7.39px]">
                <div
                  className="self-stretch relative h-[37.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.3%] top-[0.27%] left-[-13.96%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    1. 7 M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[20.9px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm-9"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                    Farmers Registered
                  </div>
                </div>
                <div className="relative box-border w-[53.5px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                <div
                  className="relative text-6xs-5 font-extralight whitespace-pre-wrap inline-block w-[147.1px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className="w-[154px] flex flex-col items-center justify-start gap-[7.39px]">
                <div
                  className="self-stretch relative h-[37.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.3%] top-[0.27%] left-[-13.96%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    60+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[20.9px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm-9"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                    Districts Covered
                  </div>
                </div>
                <div className="relative box-border w-[53.5px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                <div
                  className="relative text-6xs-5 font-extralight inline-block w-[147.1px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <p className="m-0">
                    With our technology, we have successfully
                  </p>
                  <p className="m-0">run several partner programs across</p>
                  <p className="m-0">sixty districts.</p>
                </div>
              </div>
              <div className="w-[154px] flex flex-col items-center justify-start gap-[7.39px]">
                <div
                  className="self-stretch relative h-[37.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.3%] top-[0.27%] left-[-13.96%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    20M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[20.9px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm-9"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">{`Farming Acres `}</div>
                </div>
                <div className="relative box-border w-[53.5px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                <div
                  className="relative text-6xs-5 font-extralight inline-block w-[147.1px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <p className="m-0">{`We have documented millions of farming `}</p>
                  <p className="m-0">lands, detailing their per seasonal</p>
                  <p className="m-0">cultivation and yields.</p>
                </div>
              </div>
              <div className="w-[154px] flex flex-col items-center justify-start gap-[7.39px]">
                <div
                  className="self-stretch relative h-[37.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.3%] top-[0.27%] left-[-13.96%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    5 Acres
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[20.9px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm-9"
                  data-animate-on-scroll
                >
                  <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                    Average farm size
                  </div>
                </div>
                <div className="relative box-border w-[53.5px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                <div
                  className="relative text-6xs-5 font-extralight whitespace-pre-wrap inline-block w-[147.1px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 overflow-hidden hidden flex-col items-start justify-start py-[31.727195739746094px] px-[69.7998275756836px] text-4xl-4 sm:flex mq350small:hidden">
            <div
              className="flex flex-col items-start justify-start gap-[10.58px] [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
              data-animate-on-scroll
            >
              <div className="flex flex-col items-center justify-start">
                <div className="self-stretch h-[104.7px] flex flex-row items-start justify-start gap-[39.13px]">
                  <div className="w-[127.3px] flex flex-col items-center justify-start gap-[6.11px]">
                    <div
                      className="self-stretch relative h-[31px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-[136.37%] top-[0.32%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                        20M+
                      </div>
                    </div>
                    <div
                      className="self-stretch relative h-[17.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xs-5"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-[100.08%] top-[0%] left-[0%] font-semibold inline-block">{`Farming Acres `}</div>
                    </div>
                    <div className="relative box-border w-[44.3px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                    <div
                      className="relative text-7xs-4 font-extralight inline-block w-[121.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <p className="m-0">{`We have documented millions of farming `}</p>
                      <p className="m-0">lands, detailing their per seasonal</p>
                      <p className="m-0">cultivation and yields.</p>
                    </div>
                  </div>
                  <div className="w-[127.3px] flex flex-col items-center justify-start gap-[6.11px]">
                    <div
                      className="self-stretch relative h-[31px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-[136.37%] top-[0.32%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                        5 Acres
                      </div>
                    </div>
                    <div
                      className="self-stretch relative h-[17.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xs-5"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-[100.08%] top-[0%] left-[0%] font-semibold inline-block">
                        Average farm size
                      </div>
                    </div>
                    <div className="relative box-border w-[44.3px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                    <div
                      className="relative text-7xs-4 font-extralight whitespace-pre-wrap inline-block w-[121.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      We collected data on average farm size per farmer,
                      including thousands of livestock farmers covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[282.4px] h-[92px] flex flex-row items-start justify-center gap-[39.13px]">
                <div className="w-[127.3px] flex flex-col items-center justify-start gap-[6.11px]">
                  <div
                    className="self-stretch relative h-[31px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-[136.37%] top-[0.32%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      1. 7 M+
                    </div>
                  </div>
                  <div
                    className="self-stretch relative h-[17.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xs-5"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-[100.08%] top-[0%] left-[0%] font-semibold inline-block">
                      Farmers Registered
                    </div>
                  </div>
                  <div className="relative box-border w-[44.3px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                  <div
                    className="relative text-7xs-4 font-extralight whitespace-pre-wrap inline-block w-[121.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    registrated and KYC for regular farmers, commercial farmers
                    outgrower farmer across the northern region
                  </div>
                </div>
                <div className="w-[127.3px] flex flex-col items-center justify-start gap-[6.11px]">
                  <div
                    className="self-stretch relative h-[31px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-[136.37%] top-[0.32%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      60+
                    </div>
                  </div>
                  <div
                    className="self-stretch relative h-[17.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xs-5"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-[100.08%] top-[0%] left-[0%] font-semibold inline-block">
                      Districts Covered
                    </div>
                  </div>
                  <div className="relative box-border w-[44.3px] h-[0.4px] border-t-[0.4px] border-solid border-seagreen-100" />
                  <div
                    className="relative text-7xs-4 font-extralight inline-block w-[121.6px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <p className="m-0">
                      With our technology, we have successfully
                    </p>
                    <p className="m-0">run several partner programs across</p>
                    <p className="m-0">sixty districts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 overflow-hidden hidden flex-col items-start justify-start py-[26.723854064941406px] px-[58.792476654052734px] text-lgi-7 mq350small:flex">
            <div
              className="flex flex-col items-start justify-start gap-[8.91px] [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
              data-animate-on-scroll
            >
              <div className="flex flex-col items-center justify-start">
                <div className="self-stretch h-[88.2px] flex flex-row items-start justify-start gap-[32.96px]">
                  <div className="w-[107.3px] flex flex-col items-center justify-start gap-[5.15px]">
                    <div
                      className="self-stretch relative h-[26.1px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-[136.25%] top-[0%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                        20M+
                      </div>
                    </div>
                    <div
                      className="self-stretch relative h-[14.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-3xs-7"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">{`Farming Acres `}</div>
                    </div>
                    <div className="relative box-border w-[37.3px] h-[0.3px] border-t-[0.3px] border-solid border-seagreen-100" />
                    <div
                      className="relative text-8xs-5 font-extralight inline-block w-[102.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <p className="m-0">{`We have documented millions of farming `}</p>
                      <p className="m-0">lands, detailing their per seasonal</p>
                      <p className="m-0">cultivation and yields.</p>
                    </div>
                  </div>
                  <div className="w-[107.3px] flex flex-col items-center justify-start gap-[5.15px]">
                    <div
                      className="self-stretch relative h-[26.1px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-[136.25%] top-[0%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                        5 Acres
                      </div>
                    </div>
                    <div
                      className="self-stretch relative h-[14.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-3xs-7"
                      data-animate-on-scroll
                    >
                      <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                        Average farm size
                      </div>
                    </div>
                    <div className="relative box-border w-[37.3px] h-[0.3px] border-t-[0.3px] border-solid border-seagreen-100" />
                    <div
                      className="relative text-8xs-5 font-extralight whitespace-pre-wrap inline-block w-[102.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      We collected data on average farm size per farmer,
                      including thousands of livestock farmers covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[237.9px] h-[77.5px] flex flex-row items-start justify-center gap-[32.96px]">
                <div className="w-[107.3px] flex flex-col items-center justify-start gap-[5.15px]">
                  <div
                    className="self-stretch relative h-[26.1px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-[136.25%] top-[0%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      1. 7 M+
                    </div>
                  </div>
                  <div
                    className="self-stretch relative h-[14.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-3xs-7"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                      Farmers Registered
                    </div>
                  </div>
                  <div className="relative box-border w-[37.3px] h-[0.3px] border-t-[0.3px] border-solid border-seagreen-100" />
                  <div
                    className="relative text-8xs-5 font-extralight whitespace-pre-wrap inline-block w-[102.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    registrated and KYC for regular farmers, commercial farmers
                    outgrower farmer across the northern region
                  </div>
                </div>
                <div className="w-[107.3px] flex flex-col items-center justify-start gap-[5.15px]">
                  <div
                    className="self-stretch relative h-[26.1px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-[136.25%] top-[0%] left-[-13.98%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                      60+
                    </div>
                  </div>
                  <div
                    className="self-stretch relative h-[14.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-3xs-7"
                    data-animate-on-scroll
                  >
                    <div className="absolute w-full top-[0%] left-[0%] font-semibold inline-block">
                      Districts Covered
                    </div>
                  </div>
                  <div className="relative box-border w-[37.3px] h-[0.3px] border-t-[0.3px] border-solid border-seagreen-100" />
                  <div
                    className="relative text-8xs-5 font-extralight inline-block w-[102.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <p className="m-0">
                      With our technology, we have successfully
                    </p>
                    <p className="m-0">run several partner programs across</p>
                    <p className="m-0">sixty districts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Container />
        <Leading />
        <LeaderSections />
        <ContainerOurSubsidiar />
        <section
          className="w-[1766px] overflow-hidden flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] w-[1750px] h-[107px] overflow-hidden shrink-0">
            <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
              <div className="absolute top-[0px] left-[0px] w-[1974px] h-[100px]">
                <img
                  className="relative w-[43.8px] h-[16.4px]"
                  alt=""
                  src="/download-222@2x.png"
                />
                <div className="relative w-[248px] h-[13px] overflow-hidden shrink-0">
                  <div className="absolute h-[14.62%] w-[112.9%] top-[-0.77%] right-[0%] bottom-[86.15%] left-[-12.9%] bg-gray-1400" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[35px] text-left text-lgi text-darkolivegreen-100">
              <div className="relative leading-[100%] font-extrabold">
                <span>{`The renown companies that `}</span>
                <span className="text-3xl">Trust Us</span>
              </div>
              <FrameComponent51 />
            </div>
          </div>
        </div>
        <section className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px] text-left text-lgi text-goldenrod-200 font-poppins">
          <div className="self-stretch bg-gray-500 overflow-hidden flex flex-col items-center justify-start py-[60px] px-0 relative gap-[20px] text-center text-white lg:hidden md:hover:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[757.6px] left-[295px] w-[835.5px] h-[1191px] z-[0]"
              alt=""
              src="/vector-21.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[-634.4px] left-[-273px] w-[835.5px] h-[1191px] z-[1]"
              alt=""
              src="/vector-21.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-5 z-[2] text-goldenrod-200">
              <div className="self-stretch relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[1604.6px] left-[1070px] w-[835.5px] h-[1191px] z-[3]"
              alt=""
              src="/vector-21.svg"
            />
            <div
              className="self-stretch flex flex-row items-center justify-center gap-[8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[4] text-left text-6xl font-lexend-deca"
              data-animate-on-scroll
            >
              <div className="relative w-[317.4px] h-[416px]">
                <div className="absolute top-[0px] left-[0px] w-[317.4px] h-[416px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-12xl w-[317px] h-[373px] object-cover"
                    alt=""
                    src="/base8@2x.png"
                  />
                  <div className="absolute top-[315px] left-[0px] w-[317.4px] h-[101px]">
                    <div className="absolute top-[0px] left-[0px] w-[317.4px] h-[101px]">
                      <div className="absolute top-[0px] left-[0px] rounded-12xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[317.4px] h-[101px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[19.6px] left-[calc(50%_-_120.2px)] w-[241.1px] h-[53.7px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_120.55px)] tracking-[-0.01em] leading-[40px] capitalize font-extrabold flex items-center w-[241.1px] h-[29.3px]">
                        Xose Ahlijah, SWE
                      </div>
                      <div className="absolute top-[31.8px] left-[calc(50%_-_104.05px)] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.92deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[188px] h-[21.9px]">
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[383.4px] h-[497px]">
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-11xl w-[383.2px] h-[433.2px] object-cover"
                  alt=""
                  src="/download-546@2x.png"
                />
                <div className="absolute top-[377px] left-[0px] w-[383.2px] h-[120px]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[383.2px] h-[120px] border-[1px] border-solid border-gray-1500" />
                </div>
                <div className="absolute top-[403.2px] left-[calc(50%_-_131.5px)] w-[270.5px] h-[55.8px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_135.25px)] tracking-[-0.01em] leading-[40px] capitalize font-extrabold flex items-center w-[270.5px] h-[34px]">
                    Castro Antwi-Danso
                  </div>
                  <div className="absolute top-[29.8px] left-[calc(50%_-_78.25px)] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[156px] h-[26px]">
                    General Manager
                  </div>
                </div>
              </div>
              <div className="relative w-[336.6px] h-[416px] text-9xl">
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-11xl w-[336.4px] h-[362.4px] object-cover"
                  alt=""
                  src="/download23@2x.png"
                />
                <div className="absolute top-[305.9px] left-[0px] w-[336.4px] h-[110.1px]">
                  <div className="absolute top-[0px] left-[0px] w-[336.4px] h-[110.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-11xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[336.4px] h-[110.1px] border-[1px] border-solid border-gray-1500" />
                  </div>
                  <div className="absolute top-[20.1px] left-[calc(50%_-_112.8px)] w-[228.9px] h-[59.6px]">
                    <div className="absolute top-[0px] left-[calc(50%_-_114.45px)] tracking-[-0.01em] leading-[40px] capitalize font-extrabold flex items-center w-[228.9px] h-[31px]">
                      Otis A. Apaloo
                    </div>
                    <div className="absolute top-[36.2px] left-[56.8px] text-lgi tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.74deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[127.7px] h-[23.4px]">{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px] z-[5]">
              <div className="relative bg-gainsboro-300 w-[15px] h-1.5" />
              <div className="relative bg-goldenrod-200 w-[30px] h-1.5" />
              <div className="relative bg-gainsboro-300 w-[15px] h-1.5" />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-[60px] px-[21px] relative z-[6] text-left text-19xl text-darkslategray-200 font-lexend-deca">
              <div className="bg-white w-[1402px] h-[448px] flex flex-col items-start justify-start p-2.5 box-border z-[0]">
                <div className="self-stretch flex flex-row items-center justify-center gap-[79px]">
                  <img
                    className="relative w-[555px] h-[487.3px] object-contain"
                    alt=""
                    src="/group-206@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[60px]">
                    <b
                      className="relative tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <p className="m-0">We support Agribusiness Industry</p>
                      <p className="m-0">To Utilize modern Equipments</p>
                      <p className="m-0">for a Better Result.</p>
                    </b>
                    <div className="flex flex-row items-center justify-center py-[25px] px-10 gap-[10px] text-mini border-[3px] border-solid border-seagreen-100">
                      <img
                        className="relative max-w-full overflow-hidden h-[14.7px]"
                        alt=""
                        src="/arrow-9.svg"
                      />
                      <div className="relative uppercase font-semibold">
                        view produCts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[498px] left-[125px] flex flex-col items-start justify-start p-2.5 z-[1]">
                <div className="relative bg-goldenrod-200 w-[500px] h-2.5" />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-2.5 px-[400px] z-[7] lg:pl-60 lg:pr-60 lg:box-border md:pl-[140px] md:pr-[140px] md:box-border sm:pl-[60px] sm:pr-[60px] sm:box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[60px] lg:hidden md:hidden">
                <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
                  <b className="self-stretch relative tracking-[3px] leading-[32px] uppercase text-goldenrod-200">
                    FAQ
                  </b>
                  <b className="self-stretch relative text-37xl tracking-[-2px] leading-[64px] sm:text-26xl">
                    <p className="m-0">{`Frequently `}</p>
                    <p className="m-0">Asked Questions</p>
                  </b>
                  <div className="self-stretch relative text-xl leading-[32px]">
                    <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                    <p className="m-0">enquiries for fast response.</p>
                  </div>
                </div>
                <Faqs />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[1200px] overflow-hidden hidden flex-col items-center justify-start py-[41.222713470458984px] px-0 box-border relative gap-[13.74px] text-sm-1 lg:flex md:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-435.9px] left-[-187.6px] w-[574px] h-[818.3px] z-[0]"
              alt=""
              src="/vector-23.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[13.740903854370117px] gap-[3.44px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className="relative text-8xl-5 text-white">{`Our Teams & Experts`}</b>
            </div>
            <div className="relative w-[724.4px] h-[341.5px] z-[2] text-mid-2 text-white font-lexend-deca">
              <div
                className="absolute top-[2.4px] left-[0px] w-[218px] h-[285.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[218px] h-[285.8px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-2xl-3 w-[217.8px] h-[256.3px] object-cover"
                    alt=""
                    src="/base11@2x.png"
                  />
                  <div className="absolute top-[216.4px] left-[0px] w-[218px] h-[69.4px]">
                    <div className="absolute top-[0px] left-[0px] w-[218px] h-[69.4px]">
                      <div className="absolute top-[0px] left-[0px] rounded-2xl-3 bg-darkslateblue shadow-[0px_16.5px_32.98px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(44.82px)] box-border w-[218px] h-[69.4px] border-[0.7px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[13.4px] left-[calc(50%_-_82.6px)] w-[165.6px] h-[36.9px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_82.8px)] tracking-[-0.01em] leading-[27.48px] capitalize font-extrabold flex items-center w-[165.6px] h-[20.1px]">
                        Xose Ahlijah, SWE
                      </div>
                      <div className="absolute top-[21.8px] left-[calc(50%_-_71.5px)] text-smi-4 tracking-[-0.01em] leading-[20.61px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.92deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[129.2px] h-[15.1px]">
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[-0.4px] left-[225.2px] w-[263.4px] h-[341.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-[20.61px] w-[263.3px] h-[297.6px] object-cover"
                  alt=""
                  src="/download-5110@2x.png"
                />
                <div className="absolute top-[259px] left-[0px] w-[263.3px] h-[82.4px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[20.61px] bg-dimgray-200 shadow-[0px_16.5px_32.98px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(44.82px)] box-border w-[263.3px] h-[82.4px] border-[0.7px] border-solid border-gray-1500" />
                </div>
                <div className="absolute top-[277px] left-[calc(50%_-_90.3px)] w-[185.8px] h-[38.3px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_92.9px)] tracking-[-0.01em] leading-[27.48px] capitalize font-extrabold flex items-center w-[185.8px] h-[23.4px]">
                    Castro Antwi-Danso
                  </div>
                  <div className="absolute top-[20.5px] left-[calc(50%_-_53.7px)] text-smi-4 tracking-[-0.01em] leading-[20.61px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[107.2px] h-[17.9px]">
                    General Manager
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[2.4px] left-[493.1px] w-[231.3px] h-[285.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lgi-2"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-[20.61px] w-[231.1px] h-[249px] object-cover"
                  alt=""
                  src="/download-318@2x.png"
                />
                <div className="absolute top-[210.2px] left-[0px] w-[231.1px] h-[75.6px]">
                  <div className="absolute top-[0px] left-[0px] w-[231.1px] h-[75.6px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[20.61px] bg-darkslateblue shadow-[0px_16.5px_32.98px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(44.82px)] box-border w-[231.1px] h-[75.6px] border-[0.7px] border-solid border-gray-1500" />
                  </div>
                  <div className="absolute top-[13.8px] left-[calc(50%_-_77.45px)] w-[157.2px] h-[40.9px]">
                    <div className="absolute top-[0px] left-[calc(50%_-_78.6px)] tracking-[-0.01em] leading-[27.48px] capitalize font-extrabold flex items-center w-[157.2px] h-[21.3px]">
                      Otis A. Apaloo
                    </div>
                    <div className="absolute top-[24.8px] left-[39px] text-sm-1 tracking-[-0.01em] leading-[20.61px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.74deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[87.8px] h-[16.1px]">{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6.87px] z-[3]">
              <div className="relative bg-gainsboro-300 w-[10.3px] h-[4.1px]" />
              <div className="relative bg-goldenrod-200 w-[20.6px] h-[4.1px]" />
              <div className="relative bg-gainsboro-300 w-[10.3px] h-[4.1px]" />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[520.4px] left-[202.7px] w-[574px] h-[818.3px] z-[4]"
              alt=""
              src="/vector-211.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[1102.4px] left-[735.1px] w-[574px] h-[818.3px] z-[5]"
              alt=""
              src="/vector-22.svg"
            />
            <div className="relative w-[962.6px] h-[439px] z-[6] text-2xs-3 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[61.5px] left-[55.3px] bg-white w-[906.9px] h-[307.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <div className="absolute top-[264.8px] left-[475.8px] bg-dimgray-300 box-border w-[167px] h-[41.2px] border-[0.7px] border-solid border-goldenrod-200" />
              <div className="absolute top-[264.8px] left-[475.1px] w-[42.6px] h-[41.2px]">
                <img
                  className="absolute top-[0px] left-[42.6px] w-[42.6px] h-[41.2px] object-contain"
                  alt=""
                  src="/capture22@2x.png"
                />
                <img
                  className="absolute top-[14.4px] left-[11px] w-[13.7px] h-[13.7px] overflow-hidden"
                  alt=""
                  src="/mofa-color16@2x.png"
                />
              </div>
              <div className="absolute top-[278.6px] left-[532.8px] uppercase font-semibold">
                view produCts
              </div>
              <div className="absolute top-[369.3px] left-[21px] bg-goldenrod-200 w-[343.5px] h-[6.9px]" />
              <b
                className="absolute top-[124.7px] left-[475.1px] text-7xl-1 tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[-0.4px] left-[-0.3px] w-[480.9px] h-[471.3px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[391.6px] h-[422.5px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[-0.4px] left-[calc(50%_+_2.1px)] tracking-[2.06px] leading-[21.99px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[34px] left-[0px] w-[391.6px] h-[371px] text-19xl-5 text-white">
                <b className="absolute top-[0px] left-[0px] tracking-[-1.37px] leading-[43.97px]">
                  <p className="m-0">{`Frequently `}</p>
                  <p className="m-0">Asked Questions</p>
                </b>
                <div className="absolute top-[107.9px] left-[0px] text-sm-7 leading-[21.99px] inline-block w-[391.6px] h-[47.4px]">
                  <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                  <p className="m-0">enquiries for fast response.</p>
                </div>
                <div className="absolute top-[184.1px] left-[0px] w-[267px] h-[186.9px] text-base-5">
                  <b className="absolute top-[0px] left-[0px] leading-[21.99px]">
                    What does the platform do
                  </b>
                  <b className="absolute top-[55px] left-[0px] leading-[21.99px]">
                    How can I access the platform ?
                  </b>
                  <b className="absolute top-[109.9px] left-[0px] leading-[21.99px]">
                    Is the platform free ?
                  </b>
                  <b className="absolute top-[164.9px] left-[0px] leading-[21.99px]">
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <div className="absolute top-[212.6px] left-[0px] w-[391.6px] h-[209.5px]">
                <img
                  className="absolute top-[0px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/images23@2x.png"
                />
                <div className="absolute top-[44px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[55px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/download-616@2x.png"
                />
                <div className="absolute top-[98.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[109.9px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/images-121@2x.png"
                />
                <div className="absolute top-[153.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[164.9px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/download-123@2x.png"
                />
                <div className="absolute top-[208.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[960px] overflow-hidden hidden flex-col items-center justify-start py-[33.10615158081055px] px-0 box-border relative gap-[11.04px] text-2xs-5 md:flex sm:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-350.2px] left-[-150.6px] w-[461px] h-[657.2px] z-[0]"
              alt=""
              src="/vector-231.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[11.035383224487305px] gap-[2.76px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className="relative text-3xl-1 text-white">
                <span>{`Our Teams & `}</span>
                <span className="[background:linear-gradient(92.14deg,_#fff,_#f0c024)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experts
                </span>
              </b>
            </div>
            <div className="relative w-[581.8px] h-[274.2px] z-[2] text-sm-8 text-white font-lexend-deca">
              <div
                className="absolute top-[1.9px] left-[0px] w-[175.1px] h-[229.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[175.1px] h-[229.5px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-mid-1 w-[174.9px] h-[205.8px] object-cover"
                    alt=""
                    src="/base15@2x.png"
                  />
                  <div className="absolute top-[173.8px] left-[0px] w-[175.1px] h-[55.7px]">
                    <div className="absolute top-[0px] left-[0px] w-[175.1px] h-[55.7px]">
                      <div className="absolute top-[0px] left-[0px] rounded-mid-1 bg-darkslateblue shadow-[0px_13.2px_26.48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(36px)] box-border w-[175.1px] h-[55.7px] border-[0.6px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[10.8px] left-[calc(50%_-_66.35px)] w-[133px] h-[29.6px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_66.5px)] tracking-[-0.01em] leading-[22.07px] capitalize font-extrabold flex items-center w-[133px] h-[16.2px]">
                        Xose Ahlijah, SWE
                      </div>
                      <div className="absolute top-[17.5px] left-[calc(50%_-_57.4px)] text-3xs-9 tracking-[-0.01em] leading-[16.55px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.92deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[103.7px] h-[12.1px]">
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[-0.4px] left-[180.9px] w-[211.6px] h-[274.2px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[16.55px] w-[211.4px] h-[239px] object-cover"
                  alt=""
                  src="/download-222@2x.png"
                />
                <div className="absolute top-[208px] left-[0px] w-[211.4px] h-[66.2px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[16.55px] bg-dimgray-200 shadow-[0px_13.2px_26.48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(36px)] box-border w-[211.4px] h-[66.2px] border-[0.6px] border-solid border-gray-1500" />
                </div>
                <div className="absolute top-[222.5px] left-[calc(50%_-_72.6px)] w-[149.3px] h-[30.8px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_74.65px)] tracking-[-0.01em] leading-[22.07px] capitalize font-extrabold flex items-center w-[149.3px] h-[18.8px]">
                    Castro Antwi-Danso
                  </div>
                  <div className="absolute top-[16.4px] left-[calc(50%_-_43.15px)] text-3xs-9 tracking-[-0.01em] leading-[16.55px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[86.1px] h-[14.3px]">
                    General Manager
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[1.9px] left-[396px] w-[185.7px] h-[229.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-[15.4px]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[16.55px] w-[185.6px] h-[199.9px] object-cover"
                  alt=""
                  src="/download-546@2x.png"
                />
                <div className="absolute top-[168.8px] left-[0px] w-[185.6px] h-[60.7px]">
                  <div className="absolute top-[0px] left-[0px] w-[185.6px] h-[60.7px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[16.55px] bg-darkslateblue shadow-[0px_13.2px_26.48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(36px)] box-border w-[185.6px] h-[60.7px] border-[0.6px] border-solid border-gray-1500" />
                  </div>
                  <div className="absolute top-[11.1px] left-[calc(50%_-_62.2px)] w-[126.3px] h-[32.9px]">
                    <div className="absolute top-[0px] left-[calc(50%_-_63.15px)] tracking-[-0.01em] leading-[22.07px] capitalize font-extrabold flex items-center w-[126.3px] h-[17.1px]">
                      Otis A. Apaloo
                    </div>
                    <div className="absolute top-[19.9px] left-[31.4px] text-2xs-5 tracking-[-0.01em] leading-[16.55px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.74deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[70.5px] h-[12.9px]">{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[5.52px] z-[3]">
              <div className="relative bg-gainsboro-300 w-[8.3px] h-[3.3px]" />
              <div className="relative bg-goldenrod-200 w-[16.6px] h-[3.3px]" />
              <div className="relative bg-gainsboro-300 w-[8.3px] h-[3.3px]" />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[417.9px] left-[162.8px] w-[461px] h-[657.2px] z-[4]"
              alt=""
              src="/vector-212.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[885.2px] left-[590.4px] w-[461px] h-[657.2px] z-[5]"
              alt=""
              src="/vector-221.svg"
            />
            <div className="relative w-[773px] h-[352.6px] z-[6] text-4xs-3 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[49.3px] left-[44.4px] bg-white w-[728.3px] h-[247.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[212.6px] left-[382.1px] bg-dimgray-300 box-border w-[134.1px] h-[33.1px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.6px] border-solid border-goldenrod-200"
                data-animate-on-scroll
              />
              <div className="absolute top-[212.6px] left-[381.5px] w-[34.2px] h-[33.1px]">
                <img
                  className="absolute top-[0px] left-[34.2px] w-[34.2px] h-[33.1px] object-contain"
                  alt=""
                  src="/download23@2x.png"
                />
                <img
                  className="absolute top-[11.6px] left-[8.8px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/download-5110@2x.png"
                />
              </div>
              <div className="absolute top-[223.7px] left-[427.9px] uppercase font-semibold">
                view produCts
              </div>
              <div className="absolute top-[296.5px] left-[16.8px] bg-goldenrod-200 w-[275.9px] h-[5.5px]" />
              <b
                className="absolute top-[100.1px] left-[381.5px] text-2xl tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[-0.4px] left-[-0.3px] w-[386.2px] h-[378.5px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients1@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[314.5px] h-[339.3px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[-0.4px] left-[calc(50%_+_1.65px)] tracking-[1.66px] leading-[17.66px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[27.2px] left-[0px] w-[314.5px] h-[298.3px] text-11xl-9 text-white">
                <b className="absolute top-[0px] left-[0px] tracking-[-1.1px] leading-[35.31px]">
                  <p className="m-0">{`Frequently `}</p>
                  <p className="m-0">Asked Questions</p>
                </b>
                <div className="absolute top-[86.6px] left-[0px] text-2xs leading-[17.66px] inline-block w-[314.5px] h-[38.1px]">
                  <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                  <p className="m-0">enquiries for fast response.</p>
                </div>
                <div className="absolute top-[147.9px] left-[0px] w-[214px] h-[150.4px] text-sm-2">
                  <b className="absolute top-[0px] left-[0px] leading-[17.66px]">
                    What does the platform do
                  </b>
                  <b className="absolute top-[44.1px] left-[0px] leading-[17.66px]">
                    How can I access the platform ?
                  </b>
                  <b className="absolute top-[88.3px] left-[0px] leading-[17.66px]">
                    Is the platform free ?
                  </b>
                  <b className="absolute top-[132.4px] left-[0px] leading-[17.66px]">
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <div className="absolute top-[170.7px] left-[0px] w-[314.5px] h-[168.3px]">
                <img
                  className="absolute top-[0px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/download-318@2x.png"
                />
                <div className="absolute top-[35.3px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[44.1px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/capture22@2x.png"
                />
                <div className="absolute top-[79.5px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[88.3px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/mofa-color16@2x.png"
                />
                <div className="absolute top-[123.6px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[132.4px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/images23@2x.png"
                />
                <div className="absolute top-[167.7px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[420px] overflow-hidden hidden flex-col items-center justify-start py-[15.49566650390625px] px-0 box-border relative gap-[5.17px] text-8xs-9 sm:flex mq350small:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-164.1px] left-[-70.5px] w-[215.8px] h-[307.6px] z-[0]"
              alt=""
              src="/vector-232.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[5.16522216796875px] gap-[1.29px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className="relative text-2xs-3 text-white">
                <span>{`Our Teams & `}</span>
                <span className="[background:linear-gradient(92.14deg,_#fff,_#f0c024)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experts
                </span>
              </b>
            </div>
            <div
              className="relative w-[272.3px] h-[128.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[2] text-6xs-5 text-white font-lexend-deca"
              data-animate-on-scroll
            >
              <div
                className="absolute top-[0.7px] left-[0px] w-[82px] h-[107.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[82px] h-[107.4px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[8.01px] w-[81.9px] h-[96.3px] object-cover"
                    alt=""
                    src="/base19@2x.png"
                  />
                  <div className="absolute top-[81.4px] left-[0px] w-[82px] h-[26.1px]">
                    <div className="absolute top-[0px] left-[0px] w-[82px] h-[26.1px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[8.01px] bg-darkslateblue shadow-[0px_6.2px_12.4px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(16.85px)] box-border w-[82px] h-[26.1px] border-[0.3px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[5.1px] left-[calc(50%_-_31.1px)] w-[62.3px] h-[13.9px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_31.15px)] tracking-[-0.01em] leading-[10.33px] capitalize font-extrabold flex items-center w-[62.3px] h-[7.6px]">
                        Xose Ahlijah, SWE
                      </div>
                      <div className="absolute top-[8.2px] left-[calc(50%_-_26.85px)] text-8xs-6 tracking-[-0.01em] leading-[7.75px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.92deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[48.6px] h-[5.7px]">
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[-0.4px] left-[84.7px] w-[99px] h-[128.4px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[7.75px] w-[99px] h-[111.9px] object-cover"
                  alt=""
                  src="/download-616@2x.png"
                />
                <div className="absolute top-[97.4px] left-[0px] w-[99px] h-[31px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[7.75px] bg-dimgray-200 shadow-[0px_6.2px_12.4px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(16.85px)] box-border w-[99px] h-[31px] border-[0.3px] border-solid border-gray-1500" />
                </div>
                <div className="absolute top-[104.1px] left-[calc(50%_-_33.9px)] w-[69.9px] h-[14.4px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_34.95px)] tracking-[-0.01em] leading-[10.33px] capitalize font-extrabold flex items-center w-[69.9px] h-[8.8px]">
                    Castro Antwi-Danso
                  </div>
                  <div className="absolute top-[7.7px] left-[calc(50%_-_20.25px)] text-8xs-6 tracking-[-0.01em] leading-[7.75px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[40.3px] h-[6.7px]">
                    General Manager
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[0.7px] left-[185.4px] w-[86.9px] h-[107.4px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xs-2"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[7.75px] w-[86.9px] h-[93.6px] object-cover"
                  alt=""
                  src="/images-121@2x.png"
                />
                <div className="absolute top-[79px] left-[0px] w-[86.9px] h-[28.4px]">
                  <div className="absolute top-[0px] left-[0px] w-[86.9px] h-[28.4px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[7.75px] bg-darkslateblue shadow-[0px_6.2px_12.4px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(16.85px)] box-border w-[86.9px] h-[28.4px] border-[0.3px] border-solid border-gray-1500" />
                  </div>
                  <div className="absolute top-[5.2px] left-[calc(50%_-_29.15px)] w-[59.1px] h-[15.4px]">
                    <div className="absolute top-[0px] left-[calc(50%_-_29.55px)] tracking-[-0.01em] leading-[10.33px] capitalize font-extrabold flex items-center w-[59.1px] h-2">
                      Otis A. Apaloo
                    </div>
                    <div className="absolute top-[9.3px] left-[14.7px] text-8xs-9 tracking-[-0.01em] leading-[7.75px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.74deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[33px] h-1.5">{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2.58px] z-[3]">
              <div className="relative bg-gainsboro-300 w-[3.9px] h-[1.5px]" />
              <div className="relative bg-goldenrod-200 w-[7.7px] h-[1.5px]" />
              <div className="relative bg-gainsboro-300 w-[3.9px] h-[1.5px]" />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[195.4px] left-[76.2px] w-[215.8px] h-[307.6px] z-[4]"
              alt=""
              src="/vector-213.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[414.2px] left-[276.3px] w-[215.8px] h-[307.6px] z-[5]"
              alt=""
              src="/vector-222.svg"
            />
            <div className="relative w-[340px] h-[122px] z-[6] text-9xs-9 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[18.4px] left-[30px] bg-white box-border w-[281px] h-[93px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-black"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[78.4px] left-[131px] w-[63px] h-[15.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0.3px] bg-dimgray-300 box-border w-[62.8px] h-[15.5px] border-[0.3px] border-solid border-goldenrod-200" />
                <img
                  className="absolute top-[0px] left-[16px] w-4 h-[15.5px] object-contain"
                  alt=""
                  src="/download-123@2x.png"
                />
                <img
                  className="absolute top-[5.4px] left-[4.1px] w-[5.2px] h-[5.2px] overflow-hidden"
                  alt=""
                  src="/arrowright2.svg"
                />
                <div className="absolute top-[5.2px] left-[21.7px] uppercase font-semibold">
                  view produCts
                </div>
              </div>
              <div className="absolute top-[110.4px] left-[8px] bg-goldenrod-200 w-[129.1px] h-[2.6px]" />
              <b
                className="absolute top-[35.4px] left-[127px] text-3xs-8 tracking-[-0.02em] capitalize [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[11.4px] left-[20px] w-[117px] h-[115px] overflow-hidden object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients2@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[147.2px] h-[158.8px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[-0.4px] left-[calc(50%_+_0.8px)] tracking-[0.77px] leading-[8.26px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[12.6px] left-[0px] w-[147.2px] h-[140.2px] text-mini-5 text-white">
                <b className="absolute top-[0px] left-[0px] tracking-[-0.52px] leading-[16.53px]">
                  <p className="m-0">{`Frequently `}</p>
                  <p className="m-0">Asked Questions</p>
                </b>
                <div className="absolute top-[40.5px] left-[0px] text-7xs-2 leading-[8.26px] inline-block w-[147.2px] h-[17.8px]">
                  <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                  <p className="m-0">enquiries for fast response.</p>
                </div>
                <div className="absolute top-[69.2px] left-[0px] w-[101px] h-[71px] text-6xs-2">
                  <b className="absolute top-[0px] left-[0px] leading-[8.26px]">
                    What does the platform do
                  </b>
                  <b className="absolute top-[20.7px] left-[0px] leading-[8.26px]">
                    How can I access the platform ?
                  </b>
                  <b className="absolute top-[41.3px] left-[0px] leading-[8.26px]">
                    Is the platform free ?
                  </b>
                  <b className="absolute top-[62px] left-[0px] leading-[8.26px]">
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <img
                className="absolute top-[79.7px] left-[0px] w-[147.2px] h-[78.8px] object-contain"
                alt=""
                src="/group-893@2x.png"
              />
            </div>
          </div>
        </section>
        <footer className="self-stretch bg-darkolivegreen-600 overflow-hidden flex flex-col items-center justify-start py-[30px] px-20 text-left text-mini text-seagreen-100 font-poppins lg:self-stretch lg:w-auto">
          <div
            className="self-stretch flex flex-row items-start justify-between py-10 px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:items-center lg:justify-between lg:gap-[0px] lg:pl-0 lg:box-border"
            id="footercontent"
            data-animate-on-scroll
          >
            <Transform1 />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[40px] lg:flex-[unset] lg:self-stretch">
              <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                <div className="flex-1 h-[205px] flex flex-col items-start justify-between">
                  <div className="relative tracking-[0.9px] leading-[46px] uppercase font-medium inline-block w-[95px] h-[46px] shrink-0">
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
                <div className="flex-1 flex flex-col items-start justify-start gap-[34px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase font-medium flex items-center h-[46px] shrink-0">{`CONTACT US `}</div>
                    <div className="self-stretch relative text-lg tracking-[0.9px] leading-[46px] capitalize font-semibold text-white">
                      Agrospectrum Ltd.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-base text-white">
                    <div className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase font-extrabold flex items-center h-9 shrink-0">
                      EAST LEGON office
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                      <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                        No 24 Maseru St
                      </b>
                      <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                        East Legon,
                      </b>
                      <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                        Accra - ghana
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between text-base text-white">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase">
                    BSL HEAD OFFICE
                  </b>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                    No 24 Botwe
                  </b>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                    Dzorwulu - Accra
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                  <div className="self-stretch relative tracking-[0.9px] leading-[46px] uppercase font-extrabold">
                    TAMALE office
                  </div>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize">
                    Tamale.
                  </b>
                  <b className="self-stretch relative tracking-[0.9px] leading-[46px] capitalize flex items-center h-[46px] shrink-0">
                    16 Dagomba Road,
                  </b>
                </div>
              </div>
            </div>
            <FrameComponent21 />
          </div>
        </footer>
      </main>
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

export default Homepage;
