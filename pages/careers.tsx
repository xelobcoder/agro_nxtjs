import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";

const Careers: NextPage = () => {
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
    router.push("/");
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

  const onFrameButton16Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onNowWereTextClick = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainerClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onFrameButton17Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
  }, []);

  const onArrowIcon2Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer2Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onFrameButton18Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
  }, []);

  const onArrowIcon3Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer3Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onArrowIcon4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onArrowIcon5Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer5Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  return (
    <>
      <div className="relative bg-darkolivegreen-600 w-full overflow-hidden flex flex-col items-center justify-start text-left text-2xl-8 text-black font-poppins">
        <div className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] flex flex-col items-start justify-start">
          <nav
            className="m-0 self-stretch bg-gray-1700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
            id="navBar"
          >
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos3]:hover:flex">
                  <div
                    className="oursubsidiarylogos3 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group@2x.png"
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
                    src="/logo@2x.png"
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
                    className="oursubsidiarylogos3 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup12Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group@2x.png"
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
                    src="/images-2-1@2x.png"
                  />
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo1@2x.png"
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
        <header className="self-stretch bg-gray-400 flex flex-col items-center justify-start text-center text-[135px] text-white font-poppins">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-[15px] px-0 pb-0 gap-[40px] bg-[url('/frame-939@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-color-dodge md:gap-[30px]">
            <div
              className="self-stretch flex flex-row items-center justify-center pt-[30px] px-0 pb-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div
                className="relative leading-[96.75%] font-extrabold inline-block w-[1746px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] sm:text-46xl"
                data-animate-on-scroll
              >
                Careers
              </div>
            </div>
            <div className="self-stretch h-[97px] flex flex-col items-center justify-start md:hidden">
              <div className="relative bg-gainsboro-300 [filter:blur(221.8px)] w-[1724px] h-[222px]" />
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div
            className="self-stretch [background:linear-gradient(102.82deg,_#113a09,_#113a09_33.71%,_#f0c024)] overflow-hidden flex flex-row items-start justify-center py-[60px] px-[200px] relative gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:hidden [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_scale-up] lg:opacity-[1] md:hidden mq350small:hidden"
            data-animate-on-scroll
          >
            <div
              className="absolute my-0 mx-[!important] top-[-161px] left-[1277px] rounded-[50%] bg-seagreen-400 [filter:blur(146.6px)] [backdrop-filter:blur(133.5px)] w-[387px] h-[387px] [&.animate]:animate-[15s_ease_0s_infinite_normal_forwards_bounce-in-top] opacity-[0] z-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute my-0 mx-[!important] top-[607px] left-[1211px] rounded-[50%] bg-goldenrod-300 [filter:blur(146.6px)] w-[650px] h-[650px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[1] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[27px] left-[-277px] w-[795.4px] h-[1191px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[2]"
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className="flex-1 flex flex-row items-start justify-center gap-[10px] z-[3]">
              <section className="flex-1 flex flex-col items-start justify-start py-5 px-0 gap-[20px] text-left text-61xl text-goldenrod-100 font-poppins">
                <div className="self-stretch flex flex-row items-center justify-start py-[7px] px-2.5">
                  <div className="flex-1 relative leading-[96.75%]">
                    <p className="m-0 font-light">{`Work with `}</p>
                    <p className="m-0 font-extrabold">Us</p>
                  </div>
                </div>
                <div className="w-[633px] h-[241px] flex flex-col items-start justify-start gap-[13px] text-11xl text-darkgray-300">
                  <div className="self-stretch flex flex-row items-center justify-start p-2.5">
                    <h5
                      className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      CAREERS
                    </h5>
                  </div>
                  <p
                    className="m-0 self-stretch flex flex-row items-center justify-center p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg text-white"
                    data-animate-on-scroll
                  >
                    <div className="flex-1 relative">
                      Our innovative group believes in the value and talent in
                      team work. Join the ever growing team of creative minds
                      and talents. Browse through our available positions or
                      send an open application by attaching your CV
                    </div>
                  </p>
                </div>
              </section>
              <div className="rounded-[33.53px] bg-whitesmoke-200 box-border w-[610px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[17.220195770263672px] px-[16.31386947631836px] gap-[31.72px] border-[0.9px] border-solid border-gray-200">
                <div className="self-stretch flex flex-row items-center justify-center p-[9.063261032104492px]">
                  <div className="relative tracking-[0.04em] font-semibold">
                    Enquiry type
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start">
                  <button className="cursor-pointer p-0 bg-[transparent] relative rounded-[18.13px] box-border w-[172.2px] h-[42.1px] overflow-hidden shrink-0 border-[0.9px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[9.1px] left-[48.5px] text-base-3 tracking-[0.04em] font-poppins text-gray-300 text-left inline-block w-[75.2px]">
                      General
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] flex-1 relative rounded-[18.13px] box-border h-[40.8px] border-[0.9px] border-solid border-seagreen-300 hover:bg-gray-900 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[-10.3px] left-[108.3px] w-[19.9px] h-[18.1px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[19.9px] h-[18.1px]"
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className="absolute top-[17.2px] left-[-48px] text-base-3 tracking-[0.04em] font-poppins text-gray-300 text-left">
                        Business
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] rounded-[18.13px] box-border w-[147.7px] h-[42.6px] flex flex-col items-start justify-start border-[0.9px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="self-stretch relative text-base-3 tracking-[0.04em] font-poppins text-gray-300 text-center flex items-center justify-center h-[40.8px] shrink-0">
                      Careers
                    </div>
                  </button>
                </div>
                <input
                  className="[outline:none] font-poppins text-mini-5 bg-[transparent] self-stretch rounded-[27.19px] overflow-hidden flex flex-row items-center justify-start py-[15.407543182373047px] px-[24.47080421447754px] text-gray-1200 border-[0.9px] border-solid border-darkslategray-600"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-mini-5 bg-[transparent] self-stretch rounded-[27.19px] overflow-hidden flex flex-row items-center justify-start py-[15.407543182373047px] px-[24.47080421447754px] text-gray-1200 border-[0.9px] border-solid border-darkslategray-600"
                  placeholder="Phone"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-mini-5 bg-[transparent] self-stretch rounded-[27.19px] overflow-hidden flex flex-row items-center justify-start py-[15.407543182373047px] px-[24.47080421447754px] text-gray-1200 border-[0.9px] border-solid border-darkslategray-600"
                  placeholder="Email"
                  type="text"
                />
                <div className="self-stretch rounded-[26.28px] overflow-hidden flex flex-row items-center justify-start py-[10.8759126663208px] px-[15.407543182373047px] gap-[11.78px] border-[0.9px] border-solid border-darkslategray-600">
                  <input
                    className="[border:none] [outline:none] font-poppins text-mini-5 bg-darkslategray-500 rounded-[5.44px] w-[119.6px] flex flex-row items-center justify-center py-[4.531630516052246px] px-[9.063261032104492px] box-border text-gray-1100"
                    placeholder="Choose file"
                    type="text"
                  />
                  <input
                    className="[border:none] [outline:none] font-poppins text-smi-7 bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left"
                    placeholder="No file chosen"
                    type="text"
                  />
                </div>
                <input
                  className="[outline:none] font-poppins text-mini-5 bg-[transparent] self-stretch rounded-[19.94px] box-border h-[142.3px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[14.501216888427734px] px-[24.47080421447754px] text-gray-1200 border-[0.9px] border-solid border-darkslategray-600"
                  placeholder="Type your message here"
                  type="text"
                />
                <div className="self-stretch flex flex-col items-center justify-start text-base-3 text-white">
                  <div className="rounded-[22.66px] [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-[9.063261032104492px] px-[22.658151626586914px]">
                    <div className="relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(102.82deg,_#113a09,_#113a09_33.71%,_#f0c024)] w-[1200px] overflow-hidden hidden flex-row items-start justify-center py-[41.62285614013672px] px-[100px] box-border relative gap-[6.94px] text-base-1 lg:flex md:hidden mq350small:hidden">
            <div
              className="absolute my-0 mx-[!important] top-[-111.7px] left-[885.9px] rounded-[50%] bg-seagreen-400 [filter:blur(101.7px)] [backdrop-filter:blur(92.61px)] w-[268.5px] h-[268.5px] [&.animate]:animate-[15s_ease_0s_infinite_normal_forwards_bounce-in-top] opacity-[0] z-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute my-0 mx-[!important] top-[371.1px] left-[840.1px] rounded-[50%] bg-goldenrod-300 [filter:blur(101.7px)] w-[450.9px] h-[450.9px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[1] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[18.7px] left-[-192.2px] w-[551.8px] h-[826.2px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[2]"
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className="flex-1 flex flex-row items-center justify-center gap-[6.94px] z-[3]">
              <section className="w-[371.1px] flex flex-col items-center justify-center py-[13.874284744262695px] px-0 box-border gap-[13.87px] text-left text-[55.5px] text-goldenrod-100 font-poppins">
                <div className="self-stretch flex flex-row items-center justify-start py-[4.855999946594238px] px-[6.937142372131348px]">
                  <div className="flex-1 relative leading-[96.75%]">
                    <span className="font-light">{`Make an `}</span>
                    <span className="font-extrabold">enquiry</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9.02px] text-xl-8 text-darkgray-300">
                  <div className="self-stretch flex flex-row items-center justify-start p-[6.937142372131348px]">
                    <h5
                      className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className="m-0 self-stretch flex flex-row items-center justify-center p-[6.937142372131348px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg-7 text-white"
                    data-animate-on-scroll
                  >
                    <div className="flex-1 relative">
                      <p className="m-0">Agrospectrum Ltd.</p>
                      <p className="m-0">HEAD OFFICE</p>
                      <p className="m-0">No. 24 Maseru St</p>
                      <p className="m-0">East Legon, G/A</p>
                      <p className="m-0">Accra - Ghana</p>
                    </div>
                  </p>
                  <div className="h-[68.7px] flex flex-col items-start justify-start gap-[3.47px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      PHONE
                    </div>
                    <div className="flex-1 relative text-lg-7 text-white inline-block w-[357.3px]">
                      +233(0) 593 808 064
                    </div>
                  </div>
                  <div className="h-[68.7px] flex flex-col items-start justify-start gap-[3.47px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      EMAIL
                    </div>
                    <div className="flex-1 relative text-lg-8 tracking-[0.04em] text-white inline-block w-[357.3px]">
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <div className="rounded-[23.26px] bg-whitesmoke-200 box-border w-[423.1px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.945895195007324px] px-[11.317163467407227px] gap-[22.01px] border-[0.6px] border-solid border-gray-200">
                <div className="self-stretch flex flex-row items-center justify-center p-[6.287313461303711px]">
                  <div className="relative tracking-[0.04em] font-semibold">
                    Enquiry type
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start">
                  <button className="cursor-pointer p-0 bg-[transparent] relative rounded-[12.57px] box-border w-[119.5px] h-[29.2px] overflow-hidden shrink-0 border-[0.6px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[6.3px] left-[33.6px] text-xs-3 tracking-[0.04em] font-poppins text-gray-300 text-left inline-block w-[52.2px]">
                      General
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] flex-1 relative rounded-[12.57px] box-border h-[28.3px] border-[0.6px] border-solid border-seagreen-300 hover:bg-gray-900 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[-7.1px] left-[75.1px] w-[13.8px] h-[12.6px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[13.8px] h-[12.6px]"
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className="absolute top-[11.9px] left-[-33.3px] text-xs-3 tracking-[0.04em] font-poppins text-gray-300 text-left">
                        Business
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] rounded-[12.57px] box-border w-[102.5px] h-[29.6px] flex flex-col items-start justify-start border-[0.6px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="self-stretch relative text-xs-3 tracking-[0.04em] font-poppins text-gray-300 text-center flex items-center justify-center h-[28.3px] shrink-0">
                      Careers
                    </div>
                  </button>
                </div>
                <input
                  className="[outline:none] font-poppins text-2xs-1 bg-[transparent] self-stretch rounded-[18.86px] overflow-hidden flex flex-row items-center justify-start py-[10.688432693481445px] px-[16.975746154785156px] text-gray-1200 border-[0.6px] border-solid border-darkslategray-600"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-2xs-1 bg-[transparent] self-stretch rounded-[18.86px] overflow-hidden flex flex-row items-center justify-start py-[10.688432693481445px] px-[16.975746154785156px] text-gray-1200 border-[0.6px] border-solid border-darkslategray-600"
                  placeholder="Phone"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-2xs-1 bg-[transparent] self-stretch rounded-[18.86px] overflow-hidden flex flex-row items-center justify-start py-[10.688432693481445px] px-[16.975746154785156px] text-gray-1200 border-[0.6px] border-solid border-darkslategray-600"
                  placeholder="Email"
                  type="text"
                />
                <div className="self-stretch rounded-[18.23px] overflow-hidden flex flex-row items-center justify-start py-[7.544775485992432px] px-[10.688432693481445px] gap-[8.17px] border-[0.6px] border-solid border-darkslategray-600">
                  <input
                    className="[border:none] [outline:none] font-poppins text-2xs-1 bg-darkslategray-500 rounded-[3.77px] w-[83px] flex flex-row items-center justify-center py-[3.1436567306518555px] px-[6.287313461303711px] box-border text-gray-1100"
                    placeholder="Choose file"
                    type="text"
                  />
                  <input
                    className="[border:none] [outline:none] font-poppins text-4xs-8 bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left"
                    placeholder="No file chosen"
                    type="text"
                  />
                </div>
                <input
                  className="[outline:none] font-poppins text-2xs-1 bg-[transparent] self-stretch rounded-[13.83px] box-border h-[98.7px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[10.059700965881348px] px-[16.975746154785156px] text-gray-1200 border-[0.6px] border-solid border-darkslategray-600"
                  placeholder="Type your message here"
                  type="text"
                />
                <div className="self-stretch flex flex-col items-center justify-start text-xs-3 text-white">
                  <div className="rounded-[15.72px] [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-[6.287313461303711px] px-[15.718282699584961px]">
                    <div className="relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(102.82deg,_#113a09,_#113a09_33.71%,_#f0c024)] w-[960px] overflow-hidden hidden flex-row items-start justify-center py-5 px-[30px] box-border relative gap-[5.59px] text-[12.2px] md:flex sm:hidden mq350small:hidden">
            <div
              className="absolute my-0 mx-[!important] top-[-90px] left-[714px] rounded-[50%] bg-seagreen-400 [filter:blur(81.96px)] [backdrop-filter:blur(74.64px)] w-[216.4px] h-[216.4px] [&.animate]:animate-[15s_ease_0s_infinite_normal_forwards_bounce-in-top] opacity-[0] z-[0]"
              data-animate-on-scroll
            />
            <div
              className="absolute my-0 mx-[!important] top-[299.1px] left-[677.1px] rounded-[50%] bg-goldenrod-300 [filter:blur(81.96px)] w-[363.4px] h-[363.4px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[1] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[15.1px] left-[-154.9px] w-[444.7px] h-[665.9px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[2]"
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className="flex flex-row items-center justify-center gap-[5.59px] z-[3]">
              <section className="w-[299.1px] flex flex-col items-center justify-center py-[11.181878089904785px] px-0 box-border gap-[11.18px] text-left text-[44.7px] text-goldenrod-100 font-poppins">
                <div className="self-stretch flex flex-row items-center justify-start py-[3.9136571884155273px] px-[5.590939044952393px]">
                  <div className="flex-1 relative leading-[96.75%]">
                    <span className="font-light">{`Make an `}</span>
                    <span className="font-extrabold">enquiry</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7.27px] text-base-8 text-darkgray-300">
                  <div className="self-stretch flex flex-row items-center justify-start p-[5.590939044952393px]">
                    <h5
                      className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className="m-0 self-stretch flex flex-row items-center justify-center p-[5.590939044952393px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-base-1 text-white"
                    data-animate-on-scroll
                  >
                    <div className="flex-1 relative">
                      <p className="m-0">Agrospectrum Ltd.</p>
                      <p className="m-0">HEAD OFFICE</p>
                      <p className="m-0">No. 24 Maseru St</p>
                      <p className="m-0">East Legon, G/A</p>
                      <p className="m-0">Accra - Ghana</p>
                    </div>
                  </p>
                  <div className="h-[55.4px] flex flex-col items-start justify-start gap-[2.8px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      PHONE
                    </div>
                    <div className="flex-1 relative text-base-1 text-white inline-block w-[287.9px]">
                      +233(0) 593 808 064
                    </div>
                  </div>
                  <div className="h-[55.4px] flex flex-col items-start justify-start gap-[2.8px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      EMAIL
                    </div>
                    <div className="flex-1 relative text-base-1 tracking-[0.04em] text-white inline-block w-[287.9px]">
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <div className="rounded-[18.75px] bg-whitesmoke-200 box-border w-[341px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[9.627706527709961px] px-[9.12098503112793px] gap-[17.74px] border-[0.5px] border-solid border-gray-200">
                <div className="self-stretch flex flex-row items-center justify-center p-[5.067214012145996px]">
                  <div className="relative tracking-[0.04em] font-semibold">
                    Enquiry type
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start">
                  <button className="cursor-pointer p-0 bg-[transparent] relative rounded-[10.13px] box-border w-[96.3px] h-[23.6px] overflow-hidden shrink-0 border-[0.5px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[5.1px] left-[27.1px] text-3xs-1 tracking-[0.04em] font-poppins text-gray-300 text-left inline-block w-[42.1px]">
                      General
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] flex-1 relative rounded-[10.13px] box-border h-[22.8px] border-[0.5px] border-solid border-seagreen-300 hover:bg-gray-900 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[-5.7px] left-[60.6px] w-[11.1px] h-[10.1px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[11.1px] h-[10.1px]"
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className="absolute top-[9.6px] left-[-26.9px] text-3xs-1 tracking-[0.04em] font-poppins text-gray-300 text-left">
                        Business
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] rounded-[10.13px] box-border w-[82.6px] h-[23.8px] flex flex-col items-start justify-start border-[0.5px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="self-stretch relative text-3xs-1 tracking-[0.04em] font-poppins text-gray-300 text-center flex items-center justify-center h-[22.8px] shrink-0">
                      Careers
                    </div>
                  </button>
                </div>
                <input
                  className="[outline:none] font-poppins text-4xs-1 bg-[transparent] self-stretch rounded-base-2 overflow-hidden flex flex-row items-center justify-start py-[8.614263534545898px] px-[13.681477546691895px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-4xs-1 bg-[transparent] self-stretch rounded-base-2 overflow-hidden flex flex-row items-center justify-start py-[8.614263534545898px] px-[13.681477546691895px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Phone"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-4xs-1 bg-[transparent] self-stretch rounded-base-2 overflow-hidden flex flex-row items-center justify-start py-[8.614263534545898px] px-[13.681477546691895px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Email"
                  type="text"
                />
                <div className="self-stretch rounded-[14.69px] overflow-hidden flex flex-row items-center justify-start py-[6.0806565284729px] px-[8.614263534545898px] gap-[6.59px] border-[0.5px] border-solid border-darkslategray-600">
                  <input
                    className="[border:none] [outline:none] font-poppins text-4xs-1 bg-darkslategray-500 rounded-[3.04px] w-[66.9px] flex flex-row items-center justify-center py-[2.533607006072998px] px-[5.067214012145996px] box-border text-gray-1100"
                    placeholder="Choose file"
                    type="text"
                  />
                  <input
                    className="[border:none] [outline:none] font-poppins text-[7.1px] bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left"
                    placeholder="No file chosen"
                    type="text"
                  />
                </div>
                <input
                  className="[outline:none] font-poppins text-4xs-1 bg-[transparent] self-stretch rounded-[11.15px] box-border h-[79.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[8.107542037963867px] px-[13.681477546691895px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Type your message here"
                  type="text"
                />
                <div className="self-stretch flex flex-col items-center justify-start text-3xs-1 text-white">
                  <div className="rounded-[12.67px] [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-[5.067214012145996px] px-[12.668034553527832px]">
                    <div className="relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(168.12deg,_#113a09,_#f0c024)] w-[420px] overflow-hidden hidden flex-row items-start justify-center py-3 px-5 box-border relative text-smi-3 sm:flex mq350small:hidden">
            <div className="flex flex-col items-center justify-start relative gap-[30px] z-[0]">
              <section className="w-[289px] flex flex-col items-center justify-center py-2.5 px-0 box-border gap-[5px] z-[0] text-left text-21xl text-goldenrod-100 font-poppins">
                <div className="self-stretch flex flex-row items-center justify-start py-[4.876821041107178px] px-[6.9668869972229px]">
                  <div className="flex-1 relative leading-[96.75%]">
                    <span className="font-light">{`Make an `}</span>
                    <span className="font-extrabold">enquiry</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-xl-9 text-darkgray-300">
                  <div className="self-stretch flex flex-row items-center justify-start p-[6.9668869972229px]">
                    <h5
                      className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className="m-0 self-stretch flex flex-row items-center justify-center p-[6.9668869972229px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg-8 text-white"
                    data-animate-on-scroll
                  >
                    <div className="flex-1 relative">
                      <p className="m-0">Agrospectrum Ltd.</p>
                      <p className="m-0">HEAD OFFICE</p>
                      <p className="m-0">No. 24 Maseru St</p>
                      <p className="m-0">East Legon, G/A</p>
                      <p className="m-0">Accra - Ghana</p>
                    </div>
                  </p>
                  <div className="w-[289px] h-[69px] flex flex-col items-start justify-start gap-[3.48px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      PHONE
                    </div>
                    <div className="flex-1 relative text-lg-8 text-white inline-block w-[289px]">
                      +233(0) 593 808 064
                    </div>
                  </div>
                  <div className="w-[289px] h-[69px] flex flex-col items-start justify-start gap-[3.48px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      EMAIL
                    </div>
                    <div className="flex-1 relative text-lg-8 tracking-[0.04em] text-white inline-block w-[289px]">
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <img
                className="absolute my-0 mx-[!important] top-[12.6px] left-[-353px] w-[516px] h-[773px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[1]"
                alt=""
                src="/bg-blur.svg"
                data-animate-on-scroll
              />
              <div className="rounded-[19.02px] bg-whitesmoke-200 box-border w-[346px] overflow-hidden flex flex-col items-center justify-center py-[9.768203735351562px] px-[9.254087448120117px] gap-[17.99px] z-[2] border-[0.5px] border-solid border-gray-200">
                <div className="self-stretch flex flex-row items-center justify-center p-[5.141159534454346px]">
                  <div className="relative tracking-[0.04em] font-semibold">
                    Enquiry type
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start">
                  <button className="cursor-pointer p-0 bg-[transparent] relative rounded-[10.28px] box-border w-[97.7px] h-[23.9px] overflow-hidden shrink-0 border-[0.5px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[5.1px] left-[27.5px] text-3xs-3 tracking-[0.04em] font-poppins text-gray-300 text-left inline-block w-[42.7px]">
                      General
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] flex-1 relative rounded-[10.28px] box-border h-[23.1px] border-[0.5px] border-solid border-seagreen-300 hover:bg-gray-900 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[-5.8px] left-[61.4px] w-[11.3px] h-[10.3px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[11.3px] h-[10.3px]"
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className="absolute top-[9.8px] left-[-27.2px] text-3xs-3 tracking-[0.04em] font-poppins text-gray-300 text-left">
                        Business
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] rounded-[10.28px] box-border w-[83.8px] h-[24.2px] flex flex-col items-start justify-start border-[0.5px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="self-stretch relative text-3xs-3 tracking-[0.04em] font-poppins text-gray-300 text-center flex items-center justify-center h-[23.1px] shrink-0">
                      Careers
                    </div>
                  </button>
                </div>
                <input
                  className="[outline:none] font-poppins text-4xs-2 bg-[transparent] self-stretch rounded-[15.42px] overflow-hidden flex flex-row items-center justify-start py-[8.739971160888672px] px-[13.881131172180176px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-4xs-2 bg-[transparent] self-stretch rounded-[15.42px] overflow-hidden flex flex-row items-center justify-start py-[8.739971160888672px] px-[13.881131172180176px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Phone"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-4xs-2 bg-[transparent] self-stretch rounded-[15.42px] overflow-hidden flex flex-row items-center justify-start py-[8.739971160888672px] px-[13.881131172180176px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Email"
                  type="text"
                />
                <div className="self-stretch rounded-[14.91px] overflow-hidden flex flex-row items-center justify-start py-[6.16939115524292px] px-[8.739971160888672px] gap-[6.68px] border-[0.5px] border-solid border-darkslategray-600">
                  <input
                    className="[border:none] [outline:none] font-poppins text-4xs-2 bg-darkslategray-500 rounded-[3.08px] w-[67.9px] flex flex-row items-center justify-center py-[2.570579767227173px] px-[5.141159534454346px] box-border text-gray-1100"
                    placeholder="Choose file"
                    type="text"
                  />
                  <input
                    className="[border:none] [outline:none] font-poppins text-5xs-2 bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left"
                    placeholder="No file chosen"
                    type="text"
                  />
                </div>
                <input
                  className="[outline:none] font-poppins text-4xs-2 bg-[transparent] self-stretch rounded-[11.31px] box-border h-[80.7px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[8.225854873657227px] px-[13.881131172180176px] text-gray-1200 border-[0.5px] border-solid border-darkslategray-600"
                  placeholder="Type your message here"
                  type="text"
                />
                <div className="self-stretch flex flex-col items-center justify-start text-3xs-3 text-white">
                  <div className="rounded-[12.85px] [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-[5.141159534454346px] px-[12.852898597717285px]">
                    <div className="relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute my-0 mx-[!important] top-[86px] left-[339px] rounded-[50%] bg-goldenrod-300 [filter:blur(36.6px)] w-[162.3px] h-[162.3px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[1] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[-96px] left-[-76px] w-[198.6px] h-[297.3px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[2]"
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
          </div>
          <div className="[background:linear-gradient(168.12deg,_#113a09,_#f0c024)] w-[350px] overflow-hidden hidden flex-row items-start justify-center py-[10.107216835021973px] px-5 box-border relative text-2xs-4 mq350small:flex">
            <div className="flex flex-col items-center justify-start relative gap-[25.27px] z-[0]">
              <section className="w-[243.4px] flex flex-col items-center justify-center py-[8.422680854797363px] px-0 box-border gap-[4.21px] z-[0] text-left text-[33.7px] text-goldenrod-100 font-poppins">
                <div className="self-stretch flex flex-row items-center justify-start py-[4.107590675354004px] px-[5.86798620223999px]">
                  <div className="flex-1 relative leading-[96.75%]">
                    <span className="font-light">{`Make an `}</span>
                    <span className="font-extrabold">enquiry</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-mid-6 text-darkgray-300">
                  <div className="self-stretch flex flex-row items-center justify-start p-[5.86798620223999px]">
                    <h5
                      className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className="m-0 self-stretch flex flex-row items-center justify-center p-[5.86798620223999px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-[15.8px] text-white"
                    data-animate-on-scroll
                  >
                    <div className="flex-1 relative">
                      <p className="m-0">Agrospectrum Ltd.</p>
                      <p className="m-0">HEAD OFFICE</p>
                      <p className="m-0">No. 24 Maseru St</p>
                      <p className="m-0">East Legon, G/A</p>
                      <p className="m-0">Accra - Ghana</p>
                    </div>
                  </p>
                  <div className="w-[243.4px] h-[58.1px] flex flex-col items-start justify-start gap-[2.93px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      PHONE
                    </div>
                    <div className="flex-1 relative text-[15.8px] text-white inline-block w-[243.4px]">
                      +233(0) 593 808 064
                    </div>
                  </div>
                  <div className="w-[243.4px] h-[58.1px] flex flex-col items-start justify-start gap-[2.93px]">
                    <div className="relative tracking-[0.04em] font-extralight">
                      EMAIL
                    </div>
                    <div className="flex-1 relative text-[15.9px] tracking-[0.04em] text-white inline-block w-[243.4px]">
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <img
                className="absolute my-0 mx-[!important] top-[10.9px] left-[-33.3px] w-[171px] h-[651px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[1]"
                alt=""
                src="/bg-blur.svg"
                data-animate-on-scroll
              />
              <div className="rounded-[16.02px] bg-whitesmoke-200 box-border w-[291.4px] overflow-hidden flex flex-col items-center justify-center py-[8.227445602416992px] px-[7.794422149658203px] gap-[15.16px] z-[2] border-[0.4px] border-solid border-gray-200">
                <div className="self-stretch flex flex-row items-center justify-center p-[4.330234527587891px]">
                  <div className="relative tracking-[0.04em] font-semibold">
                    Enquiry type
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start">
                  <button className="cursor-pointer p-0 bg-[transparent] relative rounded-[8.66px] box-border w-[82.3px] h-[20.1px] overflow-hidden shrink-0 border-[0.4px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[4.3px] left-[23.2px] text-5xs-8 tracking-[0.04em] font-poppins text-gray-300 text-left inline-block w-[35.9px]">
                      General
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] flex-1 relative rounded-[8.66px] box-border h-[19.5px] border-[0.4px] border-solid border-seagreen-300 hover:bg-gray-900 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="absolute top-[-4.9px] left-[51.7px] w-[9.5px] h-[8.7px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-[9.5px] h-[8.7px]"
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className="absolute top-[8.2px] left-[-22.9px] text-5xs-8 tracking-[0.04em] font-poppins text-gray-300 text-left">
                        Business
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer p-0 bg-[transparent] rounded-[8.66px] box-border w-[70.6px] h-[20.4px] flex flex-col items-start justify-start border-[0.4px] border-solid border-darkslategray-600 hover:bg-gray-1000 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div className="self-stretch relative text-5xs-8 tracking-[0.04em] font-poppins text-gray-300 text-center flex items-center justify-center h-[19.5px] shrink-0">
                      Careers
                    </div>
                  </button>
                </div>
                <input
                  className="[outline:none] font-poppins text-6xs-9 bg-[transparent] self-stretch rounded-[12.99px] overflow-hidden flex flex-row items-center justify-start py-[7.361398696899414px] px-[11.691633224487305px] text-gray-1200 border-[0.4px] border-solid border-darkslategray-600"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-6xs-9 bg-[transparent] self-stretch rounded-[12.99px] overflow-hidden flex flex-row items-center justify-start py-[7.361398696899414px] px-[11.691633224487305px] text-gray-1200 border-[0.4px] border-solid border-darkslategray-600"
                  placeholder="Phone"
                  type="text"
                />
                <input
                  className="[outline:none] font-poppins text-6xs-9 bg-[transparent] self-stretch rounded-[12.99px] overflow-hidden flex flex-row items-center justify-start py-[7.361398696899414px] px-[11.691633224487305px] text-gray-1200 border-[0.4px] border-solid border-darkslategray-600"
                  placeholder="Email"
                  type="text"
                />
                <div className="self-stretch rounded-[12.56px] overflow-hidden flex flex-row items-center justify-start py-[5.1962809562683105px] px-[7.361398696899414px] gap-[5.63px] border-[0.4px] border-solid border-darkslategray-600">
                  <input
                    className="[border:none] [outline:none] font-poppins text-6xs-9 bg-darkslategray-500 rounded-[2.6px] w-[57.2px] flex flex-row items-center justify-center py-[2.1651172637939453px] px-[4.330234527587891px] box-border text-gray-1100"
                    placeholder="Choose file"
                    type="text"
                  />
                  <input
                    className="[border:none] [outline:none] font-poppins text-6xs-1 bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left"
                    placeholder="No file chosen"
                    type="text"
                  />
                </div>
                <input
                  className="[outline:none] font-poppins text-6xs-9 bg-[transparent] self-stretch rounded-[9.53px] box-border h-[68px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[6.928374767303467px] px-[11.691633224487305px] text-gray-1200 border-[0.4px] border-solid border-darkslategray-600"
                  placeholder="Type your message here"
                  type="text"
                />
                <div className="self-stretch flex flex-col items-center justify-start text-5xs-8 text-white">
                  <div className="rounded-[10.83px] [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-[4.330234527587891px] px-[10.82558536529541px]">
                    <div className="relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute my-0 mx-[!important] top-[94px] left-[263px] rounded-[50%] bg-goldenrod-300 [filter:blur(30.83px)] w-[68px] h-[69px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[1] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[-80.9px] left-[-64px] w-[167.3px] h-[250.4px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[2]"
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start text-15xl text-seagreen-100">
          <div
            className="self-stretch flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:hidden"
            data-animate-on-scroll
          >
            <div className="w-[1728px] overflow-hidden flex flex-col items-start justify-start">
              <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] w-[1750px] h-[107px] overflow-hidden shrink-0">
                <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
                  <div className="absolute top-[0px] left-[0px] w-[1974px] h-[100px]">
                    <img
                      className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[2034px] w-[1974px] h-[100px]">
                    <img
                      className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-darkolivegreen-600 overflow-hidden flex flex-col items-center justify-start py-[30px] px-20 lg:self-stretch lg:w-auto">
              <div
                className="self-stretch flex flex-row items-start justify-between py-10 px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:items-center lg:justify-between lg:gap-[0px] lg:pl-0 lg:box-border"
                id="footercontent"
                data-animate-on-scroll
              >
                <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 gap-[8px] text-white lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-center justify-start p-2.5">
                    <div className="relative tracking-[0.9px] leading-[46px] uppercase">
                      TRANSFORM with
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start p-2.5 text-26xl">
                    <div className="relative tracking-[0.9px] leading-[46px] uppercase font-black">
                      AGROSPECTRUM
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-2.5 pb-2.5 text-xl text-gainsboro-200">
                    <div className="flex-1 relative leading-[32px]">
                      <p className="m-0">{`Transform your agricultural practices and `}</p>
                      <p className="m-0">
                        <span className="font-poppins">
                          cultivate success with
                        </span>
                        <b className="font-poppins"> industry's best</b>
                        <span>
                          —empowering farmers, streamlining operations,
                        </span>
                      </p>
                      <p className="m-0">
                        <span>{`and fostering a connected `}</span>
                        <b className="font-poppins">global community</b>
                      </p>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <button
                      className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center box-border"
                      onClick={onFrameButton16Click}
                    >
                      <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                        GET IN TOUCH
                      </div>
                    </button>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[40px] text-mini lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="flex-1 h-[205px] flex flex-col items-start justify-between">
                      <div className="relative tracking-[0.9px] leading-[46px] uppercase font-medium inline-block w-[95px] h-[46px] shrink-0">
                        business
                      </div>
                      <div className="self-stretch h-36 flex flex-col items-start justify-between text-base text-white">
                        <div
                          className="self-stretch h-[29px] flex flex-row items-center justify-start cursor-pointer"
                          onClick={onFrameContainerClick}
                        >
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
                          src="/vector.svg"
                        />
                      </div>
                      <div className="rounded-[40.35px] bg-darkgray-400 w-[49.3px] h-[48.8px] flex flex-col items-center justify-center p-[19.9257869720459px] box-border">
                        <img
                          className="relative w-[16.1px] h-[15px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="bg-darkolivegreen-600 w-[1728px] flex flex-row items-start justify-between lg:w-auto lg:[align-self:unset] lg:h-auto lg:pl-10 lg:pr-10 lg:box-border">
              <div className="flex-1 h-[25px] flex flex-col items-start justify-start py-0 px-[200px] box-border">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white" />
              </div>
            </section>
            <div className="self-stretch bg-darkolivegreen-600 flex flex-row items-end justify-between py-2.5 px-[150px] text-center text-base text-white lg:flex-col lg:items-center lg:justify-start lg:pl-[120px] lg:pr-[116px] lg:box-border">
              <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[406px] h-7 shrink-0">
                No 24 Maseru Street,East Legon -Accra
              </b>
              <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[533px] h-7 shrink-0">
                © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
              </b>
            </div>
          </div>
          <div
            className="relative w-[1199.7px] h-[511px] hidden text-4xl-6 lg:flex [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_scale-up] lg:opacity-[1] md:hidden"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] w-[1199.7px] overflow-hidden flex flex-col items-start justify-start">
              <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_2.8px_43.05px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(41.66px)] w-[1215px] h-[74.3px] overflow-hidden shrink-0">
                <div className="absolute top-[-3.5px] left-[43.7px] w-[2782.7px] h-[69.4px]">
                  <div className="absolute top-[0px] left-[0px] w-[1370.5px] h-[69.4px]">
                    <img
                      className="absolute top-[13.2px] left-[1327.5px] w-[43px] h-[43px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[218.7px] w-[72.2px] h-[47.2px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[4.9px] left-[1219.9px] w-[47.2px] h-[52.1px] object-cover"
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className="absolute top-[10.4px] left-[0px] w-[58.3px] h-[48.6px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[9px] left-[336px] w-[117.3px] h-[51.4px] object-cover"
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[493.6px] w-[205.5px] h-[43px] object-cover"
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className="absolute top-[20.1px] left-[728.3px] w-[95.8px] h-[32.6px] object-cover mix-blend-difference"
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className="absolute top-[9.7px] left-[849.1px] w-[86.1px] h-[49.3px] object-cover"
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[969.2px] w-[69.4px] h-[69.4px] object-cover"
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[1412.2px] w-[1370.5px] h-[69.4px]">
                    <img
                      className="absolute top-[13.2px] left-[1327.5px] w-[43px] h-[43px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[218.7px] w-[72.2px] h-[47.2px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[4.9px] left-[1219.9px] w-[47.2px] h-[52.1px] object-cover"
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className="absolute top-[10.4px] left-[0px] w-[58.3px] h-[48.6px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[9px] left-[336px] w-[117.3px] h-[51.4px] object-cover"
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[493.6px] w-[205.5px] h-[43px] object-cover"
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className="absolute top-[20.1px] left-[728.3px] w-[95.8px] h-[32.6px] object-cover mix-blend-difference"
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className="absolute top-[9.7px] left-[849.1px] w-[86.1px] h-[49.3px] object-cover"
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[969.2px] w-[69.4px] h-[69.4px] object-cover"
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[74.3px] left-[0px] bg-darkolivegreen-600 w-[1199.7px] overflow-hidden flex flex-col items-center justify-start py-[20.828781127929688px] px-[55.54341506958008px] box-border">
              <div
                className="self-stretch flex flex-row items-start justify-between py-[27.77170753479004px] px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:items-center lg:justify-between lg:gap-[0px] lg:pl-0 lg:box-border"
                id="footercontent"
                data-animate-on-scroll
              >
                <div className="flex-1 flex flex-col items-start justify-start pt-[13.88585376739502px] px-0 pb-0 gap-[5.55px] text-white lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-center justify-start p-[6.94292688369751px]">
                    <div className="relative tracking-[0.62px] leading-[31.94px] uppercase">
                      TRANSFORM with
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start p-[6.94292688369751px] text-12xl-2">
                    <div className="relative tracking-[0.62px] leading-[31.94px] uppercase font-black">
                      AGROSPECTRUM
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[6.94292688369751px] pb-[6.94292688369751px] text-sm-9 text-gainsboro-200">
                    <div className="flex-1 relative leading-[22.22px]">
                      <p className="m-0">{`Transform your agricultural practices and `}</p>
                      <p className="m-0">
                        <span className="font-poppins">
                          cultivate success with
                        </span>
                        <b className="font-poppins"> industry's best</b>
                        <span>
                          —empowering farmers, streamlining operations,
                        </span>
                      </p>
                      <p className="m-0">
                        <span>{`and fostering a connected `}</span>
                        <b className="font-poppins">global community</b>
                      </p>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] p-[6.942927360534668px] bg-[transparent] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    onClick={onFrameButton17Click}
                    data-animate-on-scroll
                  >
                    <div className="rounded-[28.15px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[171.1px] h-[43.7px] flex flex-row items-center justify-center py-[17.322946548461914px] px-[34.64589309692383px] box-border">
                      <div className="relative text-sm-9 leading-[8.83px] font-poppins text-white text-left">
                        GET IN TOUCH
                      </div>
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[27.77px] text-2xs-4 lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.39px]">
                    <div className="flex-1 h-[142.3px] flex flex-col items-start justify-between">
                      <div className="relative tracking-[0.62px] leading-[31.94px] uppercase font-medium inline-block w-[66px] h-[31.9px] shrink-0">
                        business
                      </div>
                      <div className="self-stretch h-[100px] flex flex-col items-start justify-between text-xs-1 text-white">
                        <div className="self-stretch h-[20.1px] flex flex-row items-center justify-start">
                          <b className="flex-1 relative tracking-[0.62px] leading-[31.94px] uppercase flex items-center h-[25.7px]">
                            CAREERS
                          </b>
                        </div>
                        <div className="self-stretch h-[20.1px] flex flex-row items-center justify-start">
                          <b className="flex-1 relative tracking-[0.62px] leading-[31.94px] uppercase flex items-center h-[19.4px]">{`ABOUT US `}</b>
                        </div>
                        <div className="self-stretch h-[24.3px] flex flex-row items-center justify-start py-[6.94292688369751px] px-0 box-border">
                          <b className="flex-1 relative tracking-[0.62px] leading-[31.94px] uppercase flex items-center h-[19.4px]">
                            PRIVACY POLICY
                          </b>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-center">
                          <b className="flex-1 relative tracking-[0.62px] leading-[31.94px] uppercase flex items-center h-[22.2px]">
                            PARTNERS
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[23.61px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[2.78px]">
                        <div className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase font-medium flex items-center h-[31.9px] shrink-0">{`CONTACT US `}</div>
                        <div className="self-stretch relative text-smi-5 tracking-[0.62px] leading-[31.94px] capitalize font-semibold text-white">
                          Agrospectrum Ltd.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4.86px] text-xs-1 text-white">
                        <div className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase font-extrabold flex items-center h-[25px] shrink-0">
                          EAST LEGON office
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[11.11px]">
                          <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize">
                            No 24 Maseru St
                          </b>
                          <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize">
                            East Legon,
                          </b>
                          <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize">
                            Accra - ghana
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-xs-1 text-white">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6.94px]">
                      <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase">
                        BSL HEAD OFFICE
                      </b>
                      <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize">
                        No 24 Botwe
                      </b>
                      <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize">
                        Dzorwulu - Accra
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2.08px]">
                      <div className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase font-extrabold">
                        TAMALE office
                      </div>
                      <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize">
                        Tamale.
                      </b>
                      <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center h-[31.9px] shrink-0">
                        16 Dagomba Road,
                      </b>
                    </div>
                  </div>
                </div>
                <div className="flex-1 h-[288.8px] flex flex-col items-start justify-start py-[20.828781127929688px] px-[3.471463441848755px] box-border gap-[30.55px] text-xs-1 lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[29.85px] text-white">
                    <img
                      className="relative w-[23.4px] h-0 cursor-pointer"
                      alt=""
                      src="/arrow-6.svg"
                      onClick={onArrowIcon2Click}
                    />
                    <div
                      className="relative w-[246px] h-0 cursor-pointer"
                      onClick={onNowWereContainer2Click}
                    >
                      <div className="absolute w-full left-[0%] tracking-[0.95px] leading-[48.57px] uppercase font-medium flex items-center">
                        GET DIRECTIONS
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative w-[299.2px] h-0">
                      <div className="absolute w-full left-[0%] tracking-[0.93px] leading-[47.64px] uppercase font-medium flex items-center">{`PHONE `}</div>
                    </div>
                    <b className="self-stretch relative tracking-[0.93px] leading-[47.64px] capitalize flex text-white items-center h-[47.9px] shrink-0">
                      +233(0) 593 808 064
                    </b>
                  </div>
                  <div className="w-[183.3px] flex flex-col items-start justify-start gap-[6.94px]">
                    <div className="self-stretch relative h-[20.1px]">
                      <div className="absolute w-[96.13%] top-[-51.74%] left-[-0.87%] tracking-[0.8px] leading-[40.78px] uppercase font-medium flex items-center">
                        EMAIL
                      </div>
                    </div>
                    <div className="self-stretch relative h-[18.1px] text-white">
                      <b className="absolute top-[4.9px] left-[-0.7px] tracking-[0.8px] leading-[40.78px] lowercase">
                        customercare@bsl.com.gh
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3.471463441848755px] relative gap-[6.94px]">
                    <div className="relative w-[91px] h-[27.1px] z-[0]">
                      <div className="absolute top-[-25.83%] left-[0%] tracking-[0.8px] leading-[40.78px] uppercase font-medium">{`FOLLOW US `}</div>
                    </div>
                    <div className="my-0 mx-[!important] absolute top-[27.1px] left-[-0.7px] flex flex-row items-end justify-start gap-[11.8px] z-[1]">
                      <div className="rounded-[22.13px] bg-darkgray-400 w-[32.2px] h-[32.5px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[13.834328651428223px] box-border">
                        <img
                          className="relative w-[9.7px] h-[10.4px]"
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <div className="rounded-[25.59px] bg-darkgray-400 w-[32.9px] h-[33.9px] flex flex-row items-center justify-center py-[13.834328651428223px] px-[17.292909622192383px] box-border">
                        <img
                          className="relative w-[5.4px] h-[10.4px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="rounded-[40.47px] bg-darkgray-400 w-[31.5px] h-[31.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[13.834328651428223px] px-[12.105037689208984px] box-border">
                        <img
                          className="relative w-[11.6px] h-[9.7px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="rounded-[28.01px] bg-darkgray-400 w-[34.2px] h-[33.9px] flex flex-col items-center justify-center p-[13.834328651428223px] box-border">
                        <img
                          className="relative w-[11.2px] h-[10.4px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[477.7px] left-[0px] bg-darkolivegreen-600 w-[1199.7px] flex flex-row items-end justify-between py-[6.94292688369751px] px-[104.1438980102539px] box-border text-center text-xs-1 text-white lg:flex-col lg:items-center lg:justify-start lg:pl-[120px] lg:pr-[116px] lg:box-border">
              <b className="flex-1 relative tracking-[0.62px] leading-[31.94px] capitalize inline-block h-[19.4px] lg:flex-[unset] lg:self-stretch">
                No 24 Maseru Street,East Legon -Accra
              </b>
              <b className="flex-1 relative tracking-[0.62px] leading-[31.94px] capitalize inline-block h-[19.4px] lg:flex-[unset] lg:self-stretch">
                © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
              </b>
            </div>
            <section className="absolute top-[460.3px] left-[0px] bg-darkolivegreen-600 w-[1199.7px] flex flex-row items-start justify-between lg:w-auto lg:[align-self:unset] lg:h-auto lg:pl-10 lg:pr-10 lg:box-border">
              <div className="flex-1 h-[17.4px] flex flex-col items-start justify-start py-0 px-[138.85853576660156px] box-border">
                <div className="self-stretch relative box-border h-[0.7px] border-t-[0.7px] border-solid border-white" />
              </div>
            </section>
          </div>
          <div
            className="relative w-[960px] h-[408.9px] hidden text-lg-9 md:flex [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_scale-up] md:opacity-[1] sm:hidden"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] w-[960px] overflow-hidden flex flex-col items-start justify-start">
              <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_2.2px_34.44px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(33.33px)] w-[972.2px] h-[59.4px] overflow-hidden shrink-0">
                <div className="absolute top-[-2.8px] left-[35px] w-[2226.7px] h-[55.6px]">
                  <div className="absolute top-[0px] left-[0px] w-[1096.7px] h-[55.6px]">
                    <img
                      className="absolute top-[10.6px] left-[1062.2px] w-[34.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[175px] w-[57.8px] h-[37.8px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[3.9px] left-[976.1px] w-[37.8px] h-[41.7px] object-cover"
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className="absolute top-[8.3px] left-[0px] w-[46.7px] h-[38.9px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[13.3px] left-[90px] w-[32.8px] h-[32.2px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[7.2px] left-[268.9px] w-[93.9px] h-[41.1px] object-cover"
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[395px] w-[164.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className="absolute top-[16.1px] left-[582.8px] w-[76.7px] h-[26.1px] object-cover mix-blend-difference"
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className="absolute top-[7.8px] left-[679.4px] w-[68.9px] h-[39.4px] object-cover"
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[775.6px] w-[55.6px] h-[55.6px] object-cover"
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[1130px] w-[1096.7px] h-[55.6px]">
                    <img
                      className="absolute top-[10.6px] left-[1062.2px] w-[34.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[175px] w-[57.8px] h-[37.8px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[3.9px] left-[976.1px] w-[37.8px] h-[41.7px] object-cover"
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className="absolute top-[8.3px] left-[0px] w-[46.7px] h-[38.9px] object-cover"
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className="absolute top-[13.3px] left-[90px] w-[32.8px] h-[32.2px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[7.2px] left-[268.9px] w-[93.9px] h-[41.1px] object-cover"
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[395px] w-[164.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className="absolute top-[16.1px] left-[582.8px] w-[76.7px] h-[26.1px] object-cover mix-blend-difference"
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className="absolute top-[7.8px] left-[679.4px] w-[68.9px] h-[39.4px] object-cover"
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[775.6px] w-[55.6px] h-[55.6px] object-cover"
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[59.4px] left-[0px] bg-darkolivegreen-600 w-[960px] overflow-hidden flex flex-col items-center justify-start py-[16.66666603088379px] px-[44.44443893432617px] box-border">
              <div
                className="self-stretch flex flex-row items-start justify-between py-[22.222219467163086px] px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:items-center lg:justify-between lg:gap-[0px] lg:pl-0 lg:box-border"
                id="footercontent"
                data-animate-on-scroll
              >
                <div className="flex-1 flex flex-col items-start justify-start pt-[11.111109733581543px] px-0 pb-0 gap-[4.44px] text-white lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-center justify-start p-[5.5555548667907715px]">
                    <div className="relative tracking-[0.5px] leading-[25.56px] uppercase">
                      TRANSFORM with
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start p-[5.5555548667907715px] text-6xl">
                    <div className="relative tracking-[0.5px] leading-[25.56px] uppercase font-black">
                      AGROSPECTRUM
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[5.5555548667907715px] pb-[5.5555548667907715px] text-xs-1 text-gainsboro-200">
                    <div className="flex-1 relative leading-[17.78px]">
                      <p className="m-0">{`Transform your agricultural practices and `}</p>
                      <p className="m-0">
                        <span className="font-poppins">
                          cultivate success with
                        </span>
                        <b className="font-poppins"> industry's best</b>
                        <span>
                          —empowering farmers, streamlining operations,
                        </span>
                      </p>
                      <p className="m-0">
                        <span>{`and fostering a connected `}</span>
                        <b className="font-poppins">global community</b>
                      </p>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] p-[5.55555534362793px] bg-[transparent] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    onClick={onFrameButton18Click}
                    data-animate-on-scroll
                  >
                    <div className="rounded-[22.52px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[136.9px] h-[35px] flex flex-row items-center justify-center py-[13.861384391784668px] px-[27.722768783569336px] box-border">
                      <div className="relative text-xs-1 leading-[7.07px] font-poppins text-white text-left">
                        GET IN TOUCH
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[22.22px] text-4xs-3 lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.11px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8.33px]">
                      <div className="relative tracking-[0.5px] leading-[25.56px] uppercase font-medium inline-block w-[52.8px] h-[25.6px] shrink-0">
                        business
                      </div>
                      <div className="self-stretch h-20 flex flex-col items-start justify-between text-4xs-9 text-white">
                        <div className="self-stretch h-[16.1px] flex flex-row items-center justify-start">
                          <b className="flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase flex items-center h-[20.6px]">
                            CAREERS
                          </b>
                        </div>
                        <div className="self-stretch h-[16.1px] flex flex-row items-center justify-start">
                          <b className="flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase flex items-center h-[15.6px]">{`ABOUT US `}</b>
                        </div>
                        <div className="self-stretch h-[19.4px] flex flex-row items-center justify-start py-[5.5555548667907715px] px-0 box-border">
                          <b className="flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase flex items-center h-[15.6px]">
                            PRIVACY POLICY
                          </b>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-center">
                          <b className="flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase flex items-center h-[17.8px]">
                            PARTNERS
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[18.89px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[2.22px]">
                        <div className="self-stretch relative tracking-[0.5px] leading-[25.56px] uppercase font-medium flex items-center h-[25.6px] shrink-0">{`CONTACT US `}</div>
                        <div className="self-stretch relative text-3xs tracking-[0.5px] leading-[25.56px] capitalize font-semibold text-white">
                          Agrospectrum Ltd.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[3.89px] text-4xs-9 text-white">
                        <div className="self-stretch relative tracking-[0.5px] leading-[25.56px] uppercase font-extrabold flex items-center h-5 shrink-0">
                          EAST LEGON office
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8.89px]">
                          <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize">
                            No 24 Maseru St
                          </b>
                          <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize">
                            East Legon,
                          </b>
                          <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize">
                            Accra - ghana
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-4xs-9 text-white">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[5.56px]">
                      <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] uppercase">
                        BSL HEAD OFFICE
                      </b>
                      <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize">
                        No 24 Botwe
                      </b>
                      <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize">
                        Dzorwulu - Accra
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.67px]">
                      <div className="self-stretch relative tracking-[0.5px] leading-[25.56px] uppercase font-extrabold">
                        TAMALE office
                      </div>
                      <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize">
                        Tamale.
                      </b>
                      <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center h-[25.6px] shrink-0">
                        16 Dagomba Road,
                      </b>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-[16.66666603088379px] px-[2.7777774333953857px] gap-[24.44px] text-4xs-9 lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[23.89px] text-white">
                    <img
                      className="relative w-[18.7px] h-0 cursor-pointer"
                      alt=""
                      src="/arrow-6.svg"
                      onClick={onArrowIcon3Click}
                    />
                    <div
                      className="relative w-[196.9px] h-0 cursor-pointer"
                      onClick={onNowWereContainer3Click}
                    >
                      <div className="absolute w-full left-[0%] tracking-[0.76px] leading-[38.87px] uppercase font-medium flex items-center">
                        GET DIRECTIONS
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative w-[239.4px] h-0">
                      <div className="absolute w-full left-[0%] tracking-[0.75px] leading-[38.12px] uppercase font-medium flex items-center">{`PHONE `}</div>
                    </div>
                    <b className="self-stretch relative tracking-[0.75px] leading-[38.12px] capitalize flex text-white items-center h-[38.3px] shrink-0">
                      +233(0) 593 808 064
                    </b>
                  </div>
                  <div className="w-[146.7px] flex flex-col items-start justify-start gap-[5.56px]">
                    <div className="self-stretch relative h-[16.1px]">
                      <div className="absolute w-[96.11%] top-[-51.55%] left-[-0.89%] tracking-[0.64px] leading-[32.63px] uppercase font-medium flex items-center">
                        EMAIL
                      </div>
                    </div>
                    <div className="self-stretch relative h-[14.4px] text-white">
                      <b className="absolute top-[3.9px] left-[-0.6px] tracking-[0.64px] leading-[32.63px] lowercase">
                        customercare@bsl.com.gh
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 px-[2.7777774333953857px] relative gap-[5.56px]">
                    <div className="relative w-[72.8px] h-[21.7px] z-[0]">
                      <div className="absolute top-[-27.65%] left-[0%] tracking-[0.64px] leading-[32.63px] uppercase font-medium">{`FOLLOW US `}</div>
                    </div>
                    <div className="my-0 mx-[!important] absolute top-[21.7px] left-[-0.6px] flex flex-row items-end justify-start gap-[9.44px] z-[1]">
                      <div className="rounded-[17.71px] bg-darkgray-400 w-[25.7px] h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[11.069880485534668px] box-border">
                        <img
                          className="relative w-[7.7px] h-[8.3px]"
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <div className="rounded-[20.48px] bg-darkgray-400 w-[26.3px] h-[27.1px] flex flex-row items-center justify-center py-[11.069880485534668px] px-[13.837349891662598px] box-border">
                        <img
                          className="relative w-[4.3px] h-[8.3px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="rounded-[32.38px] bg-darkgray-400 w-[25.2px] h-[25.2px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.069880485534668px] px-[9.686145782470703px] box-border">
                        <img
                          className="relative w-[9.3px] h-[7.8px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="rounded-[22.42px] bg-darkgray-400 w-[27.4px] h-[27.1px] flex flex-col items-center justify-center p-[11.069880485534668px] box-border">
                        <img
                          className="relative w-[9px] h-[8.3px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[382.2px] left-[0px] bg-darkolivegreen-600 w-[960px] flex flex-row items-end justify-between py-[5.5555548667907715px] px-[83.33332061767578px] box-border text-center text-4xs-9 text-white lg:flex-col lg:items-center lg:justify-start lg:pl-[120px] lg:pr-[116px] lg:box-border">
              <b className="flex-1 relative tracking-[0.5px] leading-[25.56px] capitalize inline-block h-[15.6px] lg:flex-[unset] lg:self-stretch">
                No 24 Maseru Street,East Legon -Accra
              </b>
              <b className="flex-1 relative tracking-[0.5px] leading-[25.56px] capitalize inline-block h-[15.6px] lg:flex-[unset] lg:self-stretch">
                © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
              </b>
            </div>
            <section className="absolute top-[368.3px] left-[0px] bg-darkolivegreen-600 w-[960px] flex flex-row items-start justify-between lg:w-auto lg:[align-self:unset] lg:h-auto lg:pl-10 lg:pr-10 lg:box-border">
              <div className="flex-1 h-[13.9px] flex flex-col items-start justify-start py-0 px-[111.11109924316406px] box-border">
                <div className="self-stretch relative box-border h-[0.6px] border-t-[0.6px] border-solid border-white" />
              </div>
            </section>
          </div>
          <div
            className="w-[428px] overflow-hidden hidden flex-col items-start justify-start text-xs-6 text-white sm:flex [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_scale-up] sm:opacity-[1] mq350small:hidden"
            data-animate-on-scroll
          >
            <div className="relative [background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2.4px_37.73px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(36.51px)] w-[707px] h-[58px] overflow-hidden shrink-0">
              <div className="absolute top-[-3px] left-[38.3px] w-[2438.7px] h-[60.8px]">
                <div className="absolute top-[0px] left-[0px] w-[1201.1px] h-[60.8px]">
                  <img
                    className="absolute top-[11.6px] left-[1163.4px] w-[37.7px] h-[37.7px] object-cover"
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[191.7px] w-[63.3px] h-[41.4px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[4.3px] left-[1069.1px] w-[41.4px] h-[45.6px] object-cover"
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-cover"
                    alt=""
                    src="/download-3@2x.png"
                  />
                  <img
                    className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-cover"
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className="absolute top-[17.6px] left-[638.3px] w-[84px] h-[28.6px] object-cover mix-blend-difference"
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className="absolute top-[8.5px] left-[744.2px] w-[75.5px] h-[43.2px] object-cover"
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[849.4px] w-[60.8px] h-[60.8px] object-cover"
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1237.6px] w-[1201.1px] h-[60.8px]">
                  <img
                    className="absolute top-[11.6px] left-[1163.4px] w-[37.7px] h-[37.7px] object-cover"
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[191.7px] w-[63.3px] h-[41.4px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[4.3px] left-[1069.1px] w-[41.4px] h-[45.6px] object-cover"
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-cover"
                    alt=""
                    src="/download-3@2x.png"
                  />
                  <img
                    className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-cover"
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className="absolute top-[17.6px] left-[638.3px] w-[84px] h-[28.6px] object-cover mix-blend-difference"
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className="absolute top-[8.5px] left-[744.2px] w-[75.5px] h-[43.2px] object-cover"
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[849.4px] w-[60.8px] h-[60.8px] object-cover"
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative bg-darkolivegreen-600 w-[428px] h-[1060px] overflow-hidden shrink-0">
              <div className="absolute top-[808.9px] left-[59.3px] flex flex-col items-start justify-start text-seagreen-100">
                <div className="relative w-[37.8px] h-[21.1px]">
                  <div className="absolute top-[-51.66%] left-[0%] tracking-[0.83px] leading-[42.67px] uppercase font-medium">
                    EMAIL
                  </div>
                </div>
                <div className="relative w-[191.8px] h-[18.9px] text-white">
                  <b className="absolute top-[5.1px] left-[0px] tracking-[0.83px] leading-[42.67px] lowercase">
                    customercare@bsl.com.gh
                  </b>
                </div>
              </div>
              <div className="absolute top-[240.8px] left-[994.2px] w-[72.6px] h-[72.6px] overflow-hidden" />
              <div className="absolute top-[527.8px] left-[10.6px] w-[149.7px] h-[33.4px]" />
              <div className="absolute top-[578.4px] left-[53px] flex flex-row items-start justify-start gap-[109px] text-3xs-8">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[13px]">
                      <b className="self-stretch relative tracking-[0.55px] leading-[28.05px] uppercase inline-block h-7 shrink-0">
                        BSL HEAD OFFICE
                      </b>
                      <b className="self-stretch relative tracking-[0.55px] leading-[28.05px] capitalize inline-block h-[9.8px] shrink-0">
                        No 24 Botwe
                      </b>
                      <b className="self-stretch relative tracking-[0.55px] leading-[28.05px] capitalize">
                        Dzorwulu - Accra
                      </b>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2.29px] text-3xs-2">
                  <div className="self-stretch relative h-[21.2px]">
                    <div className="absolute top-[-3.2px] left-[-0.4px] tracking-[0.52px] leading-[26.36px] uppercase font-extrabold inline-block w-[147.8px] h-[26.4px]">
                      TAMALE office
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[9.17px]">
                    <div className="relative w-[98px] h-[21.8px]">
                      <b className="absolute top-[10.6px] left-[-0.4px] tracking-[0.52px] leading-[26.36px] capitalize inline-block w-[147.8px] h-[26.4px]">
                        16 Dagomba Road,
                      </b>
                    </div>
                    <b className="self-stretch relative tracking-[0.52px] leading-[26.36px] capitalize">
                      Tamale.
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[721px] left-[13.5px] w-[138px] h-[25.4px] text-seagreen-100">
                <div className="absolute top-[20.3px] left-[45.8px] flex flex-col items-start justify-start gap-[4.36px]">
                  <div className="relative w-[66.8px] h-[21.8px]">
                    <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.98px] leading-[49.85px] uppercase font-medium flex items-center">{`PHONE `}</div>
                  </div>
                  <div className="relative w-[191.8px] h-[18.9px] text-white">
                    <b className="absolute top-[5.1px] left-[0px] tracking-[0.98px] leading-[49.85px] capitalize">
                      +233(0) 593 808 064
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[374.5px] left-[53px] w-[323.5px] flex flex-row items-start justify-start gap-[100px] text-3xs-6">
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative w-[92px] h-[25px] text-4xs text-seagreen-100">
                    <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.54px] leading-[27.49px] uppercase font-medium inline-block">
                      business
                    </div>
                  </div>
                  <b className="self-stretch relative tracking-[0.54px] leading-[27.49px] uppercase">
                    ABOUT US
                  </b>
                  <b className="self-stretch relative tracking-[0.54px] leading-[27.49px] uppercase">
                    CAREERS
                  </b>
                  <b className="self-stretch relative tracking-[0.54px] leading-[27.49px] uppercase">
                    PARTNERS
                  </b>
                  <b className="self-stretch relative tracking-[0.54px] leading-[27.49px] uppercase flex items-center h-[21.5px] shrink-0">
                    PRIVACY POLICY
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start text-3xs-7">
                  <div className="w-[131px] h-[159px] flex flex-col items-start justify-start gap-[7.24px]">
                    <div className="relative w-[92.9px] h-[27.7px] text-4xs text-seagreen-100">
                      <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.54px] leading-[27.75px] uppercase font-medium inline-block">{`CONTACT US `}</div>
                    </div>
                    <div className="relative w-[131.5px] h-[27.7px] text-2xs-9">
                      <div className="absolute top-[10px] left-[0px] tracking-[0.54px] leading-[27.75px] capitalize font-semibold">
                        Agrospectrum Ltd.
                      </div>
                    </div>
                    <div className="relative w-[131px] h-7">
                      <div className="absolute top-[0px] left-[0px] tracking-[0.54px] leading-[27.75px] uppercase font-extrabold">
                        EAST LEGON office
                      </div>
                    </div>
                    <div className="self-stretch relative h-[17.5px]">
                      <b className="absolute top-[10.9px] left-[0px] tracking-[0.54px] leading-[27.75px] capitalize">
                        East Legon,
                      </b>
                    </div>
                    <b className="relative tracking-[0.54px] leading-[27.75px] capitalize">
                      Accra - ghana
                    </b>
                    <b className="relative text-3xs-4 tracking-[0.65px] leading-[33.42px] capitalize">
                      No 24 Maseru St
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[686.9px] left-[67.3px] flex flex-row items-center justify-start gap-[31.24px]">
                <img
                  className="relative w-[24.4px] h-0 cursor-pointer"
                  alt=""
                  src="/arrow-6.svg"
                  onClick={onArrowIcon4Click}
                />
                <div
                  className="relative w-[117.7px] h-[36.3px] cursor-pointer"
                  onClick={onNowWereContainer4Click}
                >
                  <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.99px] leading-[50.82px] uppercase font-medium flex items-center">
                    GET DIRECTIONS
                  </div>
                </div>
              </div>
              <div className="absolute top-[882.3px] left-[52.7px] flex flex-col items-start justify-start py-0 px-[3.6323156356811523px] gap-[7.26px] text-seagreen-100">
                <div className="relative w-[95.2px] h-[28.3px] z-[0]">
                  <div className="absolute top-[-24.73%] left-[0%] tracking-[0.83px] leading-[42.67px] uppercase font-medium">{`FOLLOW US `}</div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[28.3px] left-[0px] flex flex-row items-end justify-start gap-[12.35px] z-[1]">
                  <div className="rounded-[23.16px] bg-darkgray-400 w-[33.7px] h-[34px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[14.475349426269531px] box-border">
                    <img
                      className="relative w-[10.1px] h-[10.9px]"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className="rounded-[26.78px] bg-darkgray-400 w-[34.4px] h-[35.5px] flex flex-row items-center justify-center py-[14.475349426269531px] px-[18.094186782836914px] box-border">
                    <img
                      className="relative w-[5.7px] h-[10.9px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="rounded-[42.34px] bg-darkgray-400 w-[32.9px] h-[32.9px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[14.475349426269531px] px-[12.665931701660156px] box-border">
                    <img
                      className="relative w-[12.1px] h-[10.2px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="rounded-[29.31px] bg-darkgray-400 w-[35.8px] h-[35.5px] flex flex-col items-center justify-center p-[14.475349426269531px] box-border">
                    <img
                      className="relative w-[11.7px] h-[10.9px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[53.4px] left-[calc(50%_-_173.6px)] flex flex-col items-start justify-start gap-[14.76px] text-4xl-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12.3px]">
                  <div className="relative tracking-[0.55px] leading-[28.29px] uppercase inline-block w-[228.2px] h-[28.3px] shrink-0">
                    TRANSFORM with
                  </div>
                  <div className="relative text-17xl-9 tracking-[0.55px] leading-[28.29px] uppercase font-black inline-block w-[332.2px] h-[28.3px] shrink-0">
                    AGROSPECTRUM
                  </div>
                  <div className="flex flex-row items-center justify-center p-[6.1509809494018555px] text-smi-3 text-gainsboro-200">
                    <div className="relative leading-[19.68px] inline-block w-[332.8px] shrink-0">
                      <span>
                        Transform your agricultural practices and cultivate
                        success with
                      </span>
                      <b> industry's best</b>
                      <span>{`—empowering farmers, streamlining operations, and fostering a connected `}</span>
                      <b>global community</b>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24.94px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[151.6px] h-[38.8px] flex flex-row items-center justify-center py-[15.347000122070312px] px-[30.694000244140625px] box-border text-smi-3">
                  <div className="relative leading-[7.83px]">GET IN TOUCH</div>
                </div>
              </div>
              <div className="absolute top-[1004.3px] left-[-0.3px] w-[405.4px] h-[29.8px] text-2xs-2">
                <div className="absolute top-[0px] left-[15.3px] flex flex-col items-start justify-start py-2.5 px-[86px] gap-[10px]">
                  <div className="flex flex-col items-center justify-start gap-[4px] z-[0]">
                    <div className="relative tracking-[0.65px] leading-[33.42px] capitalize font-extralight inline-block w-[232.5px]">
                      Agrospectrum Ltd. All Rights Reserved.
                    </div>
                    <div className="relative text-4xs-7 tracking-[0.65px] leading-[33.42px] capitalize font-light flex items-center w-[90.8px] h-[17.4px] shrink-0">
                      © Copyright 2023
                    </div>
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[-0.5px] left-[-0.5px] box-border w-[406.5px] h-[1.1px] z-[1] border-t-[1.1px] border-solid border-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[351.1px] overflow-hidden hidden flex-col items-start justify-start text-3xs-5 text-white mq350small:flex">
            <div className="relative [background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2px_30.94px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(29.94px)] w-[579.9px] h-[47.6px] overflow-hidden shrink-0">
              <div className="absolute top-[-2.5px] left-[31.4px] w-[2000.3px] h-[49.9px]">
                <div className="absolute top-[0px] left-[0px] w-[985.2px] h-[49.9px]">
                  <img
                    className="absolute top-[9.5px] left-[954.2px] w-[30.9px] h-[30.9px] object-cover"
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[157.2px] w-[51.9px] h-[33.9px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[3.5px] left-[876.9px] w-[33.9px] h-[37.4px] object-cover"
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-cover"
                    alt=""
                    src="/download-3@2x.png"
                  />
                  <img
                    className="absolute top-[6.5px] left-[241.6px] w-[84.3px] h-[36.9px] object-cover"
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[354.8px] w-[147.7px] h-[30.9px] object-cover"
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className="absolute top-[14.5px] left-[523.5px] w-[68.9px] h-[23.5px] object-cover mix-blend-difference"
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-cover"
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[696.7px] w-[49.9px] h-[49.9px] object-cover"
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1015.1px] w-[985.2px] h-[49.9px]">
                  <img
                    className="absolute top-[9.5px] left-[954.2px] w-[30.9px] h-[30.9px] object-cover"
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[157.2px] w-[51.9px] h-[33.9px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[3.5px] left-[876.9px] w-[33.9px] h-[37.4px] object-cover"
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-cover"
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-cover"
                    alt=""
                    src="/download-3@2x.png"
                  />
                  <img
                    className="absolute top-[6.5px] left-[241.6px] w-[84.3px] h-[36.9px] object-cover"
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[354.8px] w-[147.7px] h-[30.9px] object-cover"
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className="absolute top-[14.5px] left-[523.5px] w-[68.9px] h-[23.5px] object-cover mix-blend-difference"
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-cover"
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[696.7px] w-[49.9px] h-[49.9px] object-cover"
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative bg-darkolivegreen-600 w-[351.1px] h-[869.4px] overflow-hidden shrink-0">
              <div className="absolute top-[663.5px] left-[48.6px] flex flex-col items-start justify-start text-seagreen-100">
                <div className="relative w-[31px] h-[17.3px]">
                  <div className="absolute top-[-51.45%] left-[0%] tracking-[0.68px] leading-[35px] uppercase font-medium">
                    EMAIL
                  </div>
                </div>
                <div className="relative w-[157.3px] h-[15.5px] text-white">
                  <b className="absolute top-[4.2px] left-[0px] tracking-[0.68px] leading-[35px] lowercase">
                    customercare@bsl.com.gh
                  </b>
                </div>
              </div>
              <div className="absolute top-[197.5px] left-[815.5px] w-[59.6px] h-[59.6px] overflow-hidden" />
              <div className="absolute top-[474.6px] left-[45.6px] flex flex-col items-start justify-start gap-[11px] text-5xs">
                <b className="relative tracking-[0.45px] leading-[23px] uppercase inline-block w-[84px] h-[23px] shrink-0">
                  BSL HEAD OFFICE
                </b>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <b className="relative tracking-[0.45px] leading-[23px] capitalize inline-block w-[57.5px] h-2 shrink-0">
                    No 24 Botwe
                  </b>
                  <b className="relative tracking-[0.45px] leading-[23px] capitalize flex items-center w-[80.5px]">
                    Dzorwulu - Accra
                  </b>
                </div>
              </div>
              <div className="absolute top-[432.9px] left-[8.7px] w-[122.7px] h-[27.4px]" />
              <div className="absolute top-[474.6px] left-[201.1px] flex flex-col items-start justify-start gap-[1.88px] text-5xs-5">
                <div className="relative w-[72.4px] h-[17.4px]">
                  <div className="absolute top-[-2.8px] left-[0px] tracking-[0.42px] leading-[21.62px] uppercase font-extrabold inline-block w-[121.3px] h-[21.6px]">
                    TAMALE office
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[7.52px]">
                  <div className="relative w-[80.4px] h-[17.9px]">
                    <b className="absolute top-[8.5px] left-[0px] tracking-[0.42px] leading-[21.62px] capitalize inline-block w-[121.3px] h-[21.6px]">
                      16 Dagomba Road,
                    </b>
                  </div>
                  <b className="relative tracking-[0.42px] leading-[21.62px] capitalize">
                    Tamale.
                  </b>
                </div>
              </div>
              <div className="absolute top-[591.4px] left-[11.1px] w-[113.2px] h-[20.9px] text-seagreen-100">
                <div className="absolute top-[16.7px] left-[37.5px] flex flex-col items-start justify-start gap-[3.58px]">
                  <div className="relative w-[54.8px] h-[17.9px]">
                    <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.8px] leading-[40.89px] uppercase font-medium flex items-center">{`PHONE `}</div>
                  </div>
                  <div className="relative w-[157.3px] h-[15.5px] text-white">
                    <b className="absolute top-[4.2px] left-[0px] tracking-[0.8px] leading-[40.89px] capitalize">
                      +233(0) 593 808 064
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[307.2px] left-[200.6px] flex flex-col items-start justify-start gap-[7.75px] text-5xs-9">
                <div className="flex flex-col items-start justify-start gap-[5.94px]">
                  <div className="relative w-[76.2px] h-[22.8px] text-5xs-4 text-seagreen-100">
                    <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.45px] leading-[22.76px] uppercase font-medium inline-block">{`CONTACT US `}</div>
                  </div>
                  <div className="relative w-[107.8px] h-[22.8px] text-4xs-9">
                    <div className="absolute top-[8px] left-[0px] tracking-[0.45px] leading-[22.76px] capitalize font-semibold">
                      Agrospectrum Ltd.
                    </div>
                  </div>
                  <div className="relative w-[94px] h-[22.8px]">
                    <div className="absolute top-[0px] left-[0px] tracking-[0.45px] leading-[22.76px] uppercase font-extrabold">
                      EAST LEGON office
                    </div>
                  </div>
                  <div className="relative w-[97px] h-[14.3px]">
                    <b className="absolute top-[8.9px] left-[0px] tracking-[0.45px] leading-[22.76px] capitalize">
                      East Legon,
                    </b>
                  </div>
                  <b className="relative tracking-[0.45px] leading-[22.76px] capitalize">
                    Accra - ghana
                  </b>
                </div>
                <b className="relative text-5xs-7 tracking-[0.54px] leading-[27.41px] capitalize">
                  No 24 Maseru St
                </b>
              </div>
              <div className="absolute top-[308.3px] left-[43.1px] w-[57.4px] flex flex-row flex-wrap items-start justify-start text-5xs-8">
                <div className="relative w-[59.8px] h-[22.6px] text-5xs-4 text-seagreen-100">
                  <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.44px] leading-[22.55px] uppercase font-medium inline-block">
                    business
                  </div>
                </div>
                <div className="relative w-[50px] h-[22.6px] ml-[-18.63px]">
                  <b className="absolute top-[0px] left-[0px] tracking-[0.44px] leading-[22.55px] uppercase inline-block w-[126.5px] h-[22.6px]">{`ABOUT US `}</b>
                </div>
                <b className="relative tracking-[0.44px] leading-[22.55px] uppercase inline-block ml-[-18.63px]">
                  CAREERS
                </b>
                <b className="relative tracking-[0.44px] leading-[22.55px] uppercase inline-block ml-[-18.63px]">
                  PARTNERS
                </b>
                <b className="relative tracking-[0.44px] leading-[22.55px] uppercase flex items-center w-[71.1px] h-[17.6px] shrink-0 ml-[-18.63px]">
                  PRIVACY POLICY
                </b>
              </div>
              <div className="absolute top-[563.4px] left-[55.2px] flex flex-row items-center justify-start gap-[25.62px]">
                <img
                  className="relative w-5 h-0 cursor-pointer"
                  alt=""
                  src="/arrow-6.svg"
                  onClick={onArrowIcon5Click}
                />
                <div
                  className="relative w-[96.5px] h-[29.8px] cursor-pointer"
                  onClick={onNowWereContainer5Click}
                >
                  <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.82px] leading-[41.69px] uppercase font-medium flex items-center">
                    GET DIRECTIONS
                  </div>
                </div>
              </div>
              <div className="absolute top-[723.7px] left-[43.2px] flex flex-col items-start justify-start py-0 px-[2.979278564453125px] gap-[5.96px] text-seagreen-100">
                <div className="relative w-[78.1px] h-[23.2px] z-[0]">
                  <div className="absolute top-[-25.86%] left-[0%] tracking-[0.68px] leading-[35px] uppercase font-medium">{`FOLLOW US `}</div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[23.2px] left-[0px] flex flex-row items-end justify-start gap-[10.13px] z-[1]">
                  <div className="rounded-lgi bg-darkgray-400 w-[27.6px] h-[27.9px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[11.872894287109375px] box-border">
                    <img
                      className="relative w-[8.3px] h-[8.9px]"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className="rounded-[21.96px] bg-darkgray-400 w-[28.2px] h-[29.1px] flex flex-row items-center justify-center py-[11.872894287109375px] px-[14.841116905212402px] box-border">
                    <img
                      className="relative w-[4.6px] h-[8.9px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="rounded-[34.73px] bg-darkgray-400 w-[27px] h-[27px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.872894287109375px] px-[10.38878345489502px] box-border">
                    <img
                      className="relative w-[9.9px] h-[8.3px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="rounded-[24.04px] bg-darkgray-400 w-[29.4px] h-[29.1px] flex flex-col items-center justify-center p-[11.872894287109375px] box-border">
                    <img
                      className="relative w-[9.6px] h-[8.9px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[43.8px] left-[calc(50%_-_142.45px)] flex flex-col items-start justify-start gap-[12.11px] text-lgi-2">
                <div className="flex flex-col items-start justify-start gap-[10.09px]">
                  <div className="relative tracking-[0.45px] leading-[23.21px] uppercase inline-block w-[187.2px] h-[23.2px] shrink-0">
                    TRANSFORM with
                  </div>
                  <div className="relative text-11xl-3 tracking-[0.45px] leading-[23.21px] uppercase font-black inline-block w-[272.4px] h-[23.2px] shrink-0">
                    AGROSPECTRUM
                  </div>
                  <div className="flex flex-row items-center justify-center p-[5.0451250076293945px] text-2xs-1 text-gainsboro-200">
                    <div className="relative leading-[16.14px] inline-block w-[272.9px] shrink-0">
                      <span>
                        Transform your agricultural practices and cultivate
                        success with
                      </span>
                      <b> industry's best</b>
                      <span>{`—empowering farmers, streamlining operations, and fostering a connected `}</span>
                      <b>global community</b>
                    </div>
                  </div>
                </div>
                <div className="rounded-[20.46px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[124.3px] h-[31.8px] flex flex-row items-center justify-center py-[12.587835311889648px] px-[25.175670623779297px] box-border text-2xs-1">
                  <div className="relative leading-[6.42px]">GET IN TOUCH</div>
                </div>
              </div>
              <div className="absolute top-[823.8px] left-[-0.3px] w-[332.5px] h-[24.4px] text-4xs-3">
                <div className="absolute top-[0px] left-[12.5px] flex flex-col items-start justify-start py-[8.202146530151367px] px-[70.53846740722656px] gap-[8.2px]">
                  <div className="flex flex-col items-center justify-start gap-[3.28px] z-[0]">
                    <div className="relative tracking-[0.54px] leading-[27.41px] capitalize font-extralight inline-block w-[190.7px]">
                      Agrospectrum Ltd. All Rights Reserved.
                    </div>
                    <div className="relative text-5xs-2 tracking-[0.54px] leading-[27.41px] capitalize font-light flex items-center w-[74.5px] h-[14.3px] shrink-0">
                      © Copyright 2023
                    </div>
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[-0.4px] left-[-0.4px] box-border w-[333.4px] h-[0.9px] z-[1] border-t-[0.9px] border-solid border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Careers;
