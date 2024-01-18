import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import NavDesktop from "../components/nav-desktop";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import FrameComponent6 from "../components/frame-component6";
import CONTACTFORM from "../components/c-o-n-t-a-c-t-f-o-r-m";
import Faqs1 from "../components/faqs1";
import { useRouter } from "next/router";

const ContactPAge: NextPage = () => {
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);
  const router = useRouter();

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

  const onFrameButtonClick = useCallback(() => {
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

  const onNowWereClick = useCallback(() => {
    window.location.href = "tel:+2330593808064";
  }, []);

  const onNowWereText2Click = useCallback(() => {
    window.location.href = "mailto:customercare@bsl.com.gh?subject=Enquiry";
  }, []);

  const onFrameButton1Click = useCallback(() => {
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

  const onFrameButton2Click = useCallback(() => {
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
      <main className="relative bg-darkolivegreen-600 w-full overflow-hidden flex flex-col items-center justify-start">
        <header
          className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] flex flex-col items-start justify-start"
          id="head3r"
        >
          <NavDesktop />
          <nav
            className="m-0 self-stretch [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] hidden flex-row items-center justify-center py-3.5 px-[90px] border-[1px] border-solid border-gray-1800 lg:flex sm:pl-[15px] sm:pr-[15px] sm:box-border"
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
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group11@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group12@2x.png"
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
                    src="/images-2-1-1@2x.png"
                  />
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo11@2x.png"
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
        </header>
        <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-20 px-[229px] bg-[url('/workwithframe@3x.png')] bg-cover bg-no-repeat bg-[top] lg:items-start lg:justify-center lg:p-[15px] lg:box-border md:gap-[30px]">
          <section className="self-stretch flex flex-row items-start justify-start py-[30px] px-0 gap-[45px] lg:hidden">
            <FrameComponent6 />
            <CONTACTFORM />
          </section>
          <section className="self-stretch h-[1237px] hidden flex-col items-start justify-start py-0 px-[150px] box-border gap-[20px] text-left text-41xl text-goldenrod-100 font-poppins lg:flex sm:pt-[15px] sm:px-5 sm:pb-2.5 sm:box-border">
            <div className="self-stretch flex flex-col items-center justify-start py-5 px-0 gap-[34px]">
              <div className="self-stretch flex flex-row items-center justify-center p-2.5">
                <div className="flex-1 relative leading-[96.75%]">
                  <span className="font-light">{`Work with `}</span>
                  <span className="font-extrabold">Us</span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-11xl text-darkgray-300">
                <div className="self-stretch flex flex-row items-center justify-start p-2.5">
                  <div className="relative tracking-[0.04em] font-extralight">{`CAREERS `}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-lg text-white">
                  <div className="flex-1 relative">
                    Our innovative group believes in the value and talent in
                    team work. Join the ever growing team of creative minds and
                    talents. Browse through our available positions or send an
                    open application by attaching your CV
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-18xl bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-[19px] px-[18px] gap-[35px] text-base text-gray-1200 border-[1px] border-solid border-gray-200">
              <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-5xl text-black">
                <div className="relative tracking-[0.04em] font-semibold">
                  Enquiry type
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start text-center text-lg text-gray-300">
                <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-center justify-center py-2.5 px-[43px] text-left border-[1px] border-solid border-darkslategray-600">
                  <div className="relative tracking-[0.04em] inline-block w-[83px] shrink-0">
                    General
                  </div>
                </div>
                <div className="rounded-10xl box-border w-[285px] flex flex-row items-center justify-center py-2.5 px-[45px] border-[1px] border-solid border-darkolivegreen-1200">
                  <div className="relative tracking-[0.04em]"> Business</div>
                </div>
                <div className="flex-1 rounded-xl box-border h-[47px] flex flex-col items-start justify-start border-[1px] border-solid border-darkslategray-600">
                  <div className="self-stretch relative tracking-[0.04em] flex items-center justify-center h-[45px] shrink-0">
                    Careers
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-11xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-[27px] border-[1px] border-solid border-darkslategray-600">
                <div className="flex-1 relative tracking-[0.04em]">Name</div>
              </div>
              <div className="self-stretch rounded-11xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-[27px] border-[1px] border-solid border-darkslategray-600">
                <div className="flex-1 relative tracking-[0.04em]">Phone</div>
              </div>
              <div className="self-stretch rounded-11xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-[27px] border-[1px] border-solid border-darkslategray-600">
                <div className="flex-1 relative tracking-[0.04em]">Email</div>
              </div>
              <div className="self-stretch rounded-10xl overflow-hidden flex flex-row items-center justify-start py-3 px-[17px] gap-[13px] text-gray-1100 border-[1px] border-solid border-darkslategray-600">
                <div className="rounded-md bg-darkslategray-500 w-[132px] flex flex-row items-center justify-center py-[5px] px-2.5 box-border">
                  <div className="relative tracking-[0.04em]">Choose file</div>
                </div>
                <div className="flex-1 relative text-sm tracking-[0.04em] text-gray-1200">
                  No file chosen
                </div>
              </div>
              <div className="self-stretch rounded-3xl box-border h-[157px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[27px] border-[1px] border-solid border-darkslategray-600">
                <div className="relative tracking-[0.04em]">
                  Type your message here
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start text-lg text-white">
                <div className="relative w-[99px] h-[47px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_49.5px)] rounded-6xl [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-2.5 px-[25px]">
                    <div className="relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-lgi text-goldenrod-200 font-poppins">
          <div className="self-stretch bg-gray-500 overflow-hidden flex flex-col items-center justify-start py-[60px] px-0 relative gap-[20px] text-center text-white lg:hidden md:hover:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[757.6px] left-[295px] w-[835.5px] h-[1191px] object-cover z-[0]"
              alt=""
              src="/vector-21@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] top-[-634.4px] left-[-273px] w-[835.5px] h-[1191px] object-cover z-[1]"
              alt=""
              src="/vector-232@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-5 gap-[5px] z-[2] text-goldenrod-200">
              <div className="self-stretch relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <div className="self-stretch relative text-21xl leading-[100%] font-extrabold text-white">{`Our Teams & Experts`}</div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[1604.6px] left-[1070px] w-[835.5px] h-[1191px] object-cover z-[3]"
              alt=""
              src="/vector-22@2x.png"
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
                    src="/base@2x.png"
                  />
                  <div className="absolute top-[315px] left-[0px] w-[317.4px] h-[101px]">
                    <div className="absolute top-[0px] left-[0px] w-[317.4px] h-[101px]">
                      <div className="absolute top-[0px] left-[0px] rounded-12xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[317.4px] h-[101px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[19.6px] left-[calc(50%_-_120.2px)] w-[241.1px] h-[53.7px]">
                      <h3 className="m-0 absolute top-[0px] left-[calc(50%_-_120.55px)] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[241.1px] h-[29.3px]">
                        Xose Ahlijah, SWE
                      </h3>
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
                  src="/base-1@2x.png"
                />
                <div className="absolute top-[377px] left-[0px] w-[383.2px] h-[120px]">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[383.2px] h-[120px] border-[1px] border-solid border-gray-1500" />
                </div>
                <div className="absolute top-[403.2px] left-[calc(50%_-_131.5px)] w-[270.5px] h-[55.8px]">
                  <h3 className="m-0 absolute top-[0px] left-[calc(50%_-_135.25px)] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[270.5px] h-[34px]">
                    Castro Antwi-Danso
                  </h3>
                  <div className="absolute top-[29.8px] left-[calc(50%_-_78.25px)] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[156px] h-[26px]">
                    General Manager
                  </div>
                </div>
              </div>
              <div className="relative w-[336.6px] h-[416px] text-9xl">
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-11xl w-[336.4px] h-[362.4px] object-cover"
                  alt=""
                  src="/base-2@2x.png"
                />
                <div className="absolute top-[305.9px] left-[0px] w-[336.4px] h-[110.1px]">
                  <div className="absolute top-[0px] left-[0px] w-[336.4px] h-[110.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-11xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[336.4px] h-[110.1px] border-[1px] border-solid border-gray-1500" />
                  </div>
                  <div className="absolute top-[20.1px] left-[calc(50%_-_112.8px)] w-[228.9px] h-[59.6px]">
                    <h2 className="m-0 absolute top-[0px] left-[calc(50%_-_114.45px)] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[228.9px] h-[31px]">
                      Otis A. Apaloo
                    </h2>
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
                    className="relative w-[555px] h-[487.3px] object-cover"
                    alt=""
                    src="/group-2061@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[60px]">
                    <h1
                      className="m-0 relative text-inherit tracking-[-0.02em] capitalize font-bold font-inherit [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <p className="m-0">We support Agribusiness Industry</p>
                      <p className="m-0">To Utilize modern Equipments</p>
                      <p className="m-0">for a Better Result.</p>
                    </h1>
                    <div className="flex flex-row items-center justify-center py-[25px] px-10 gap-[10px] text-mini border-[3px] border-solid border-seagreen-100">
                      <img
                        className="relative max-w-full overflow-hidden h-[14.7px] object-cover"
                        alt=""
                        src="/arrow-91@2x.png"
                      />
                      <div className="relative uppercase font-semibold">
                        view produCts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[499px] left-[125px] flex flex-col items-start justify-start p-2.5 z-[1]">
                <div className="relative bg-goldenrod-200 w-[500px] h-2.5" />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-2.5 px-[400px] z-[7] lg:pl-60 lg:pr-60 lg:box-border md:pl-[140px] md:pr-[140px] md:box-border sm:pl-[60px] sm:pr-[60px] sm:box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[60px] lg:hidden md:hidden">
                <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
                  <b className="self-stretch relative tracking-[3px] leading-[32px] uppercase text-goldenrod-200">
                    FAQ
                  </b>
                  <h1 className="m-0 self-stretch relative text-37xl tracking-[-2px] leading-[64px] font-bold font-inherit sm:text-26xl">
                    <p className="m-0">{`Frequently `}</p>
                    <p className="m-0">Asked Questions</p>
                  </h1>
                  <div className="self-stretch relative text-xl leading-[32px]">
                    <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                    <p className="m-0">enquiries for fast response.</p>
                  </div>
                </div>
                <Faqs1 />
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
              <div className="relative text-9xl leading-[100%] font-extrabold text-white">{`Our Teams & Experts`}</div>
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
                    src="/base-3@2x.png"
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
                  src="/base-4@2x.png"
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
                  src="/base-5@2x.png"
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
              src="/vector-2111.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[1102.4px] left-[735.1px] w-[574px] h-[818.3px] z-[5]"
              alt=""
              src="/vector-222.svg"
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
                  src="/base14.svg"
                />
                <img
                  className="absolute top-[14.4px] left-[11px] w-[13.7px] h-[13.7px] overflow-hidden"
                  alt=""
                  src="/arrowright.svg"
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
                src="/gradients2@2x.png"
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
                  src="/icon8@2x.png"
                />
                <div className="absolute top-[44px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[55px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon9@2x.png"
                />
                <div className="absolute top-[98.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[109.9px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon10@2x.png"
                />
                <div className="absolute top-[153.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[164.9px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon11@2x.png"
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
              <div className="relative text-3xl leading-[100%] font-extrabold text-white">{`Our Teams & Experts`}</div>
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
                    src="/base-7@2x.png"
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
                  src="/base-8@2x.png"
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
                  src="/base-9@2x.png"
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
                  src="/base18.svg"
                />
                <img
                  className="absolute top-[11.6px] left-[8.8px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/arrowright1.svg"
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
                src="/gradients@2x.png"
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
                  src="/icon12@2x.png"
                />
                <div className="absolute top-[35.3px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[44.1px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon13@2x.png"
                />
                <div className="absolute top-[79.5px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[88.3px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon14@2x.png"
                />
                <div className="absolute top-[123.6px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[132.4px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon15@2x.png"
                />
                <div className="absolute top-[167.7px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[420px] overflow-hidden hidden flex-col items-center justify-start py-[15.49566650390625px] px-0 box-border relative gap-[5.17px] text-8xs-9 sm:flex mq350small:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-164.1px] left-[-70.5px] w-[215.8px] h-[307.6px] z-[0]"
              alt=""
              src="/vector-2321.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[5.16522216796875px] gap-[1.29px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <div className="relative text-3xs leading-[100%] font-extrabold text-white">{`Our Teams & Experts`}</div>
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
                    src="/base-11@2x.png"
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
                  src="/base-12@2x.png"
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
                  src="/base-13@2x.png"
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
              src="/vector-2221.svg"
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
                  src="/base22.svg"
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
                src="/gradients1@2x.png"
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
                src="/group-8932@2x.png"
              />
            </div>
          </div>
          <div className="bg-gray-500 w-[351px] overflow-hidden hidden flex-col items-center justify-start py-[12.949950218200684px] px-0 box-border relative gap-[4.32px] text-8xs-1 mq350small:flex">
            <img
              className="absolute my-0 mx-[!important] top-[-137.2px] left-[-58.9px] w-[180.3px] h-[257.1px] z-[0]"
              alt=""
              src="/vector-233.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[4.316649913787842px] gap-[1.08px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <div className="self-stretch relative text-3xs leading-[100%] font-extrabold text-white text-center">{`Our Teams & Experts`}</div>
            </div>
            <div className="relative w-[227.6px] h-[107.3px] z-[2] text-7xs-4 text-white font-lexend-deca">
              <div
                className="absolute top-[0.5px] left-[0px] w-[68.5px] h-[89.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[68.5px] h-[89.8px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[6.69px] w-[68.4px] h-[80.5px] object-cover"
                    alt=""
                    src="/base-15@2x.png"
                  />
                  <div className="absolute top-[68px] left-[0px] w-[68.5px] h-[21.8px]">
                    <div className="absolute top-[0px] left-[0px] w-[68.5px] h-[21.8px]">
                      <div className="absolute top-[0px] left-[0px] rounded-[6.69px] bg-darkslateblue shadow-[0px_5.2px_10.36px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(14.08px)] box-border w-[68.5px] h-[21.8px] border-[0.2px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[4.2px] left-[calc(50%_-_25.95px)] w-[52px] h-[11.6px]">
                      <div className="absolute top-[0px] left-[calc(50%_-_26px)] tracking-[-0.01em] leading-[8.63px] capitalize font-extrabold flex items-center w-[52px] h-[6.3px]">
                        Xose Ahlijah, SWE
                      </div>
                      <div className="absolute top-[6.9px] left-[calc(50%_-_22.4px)] text-9xs-9 tracking-[-0.01em] leading-[6.47px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.92deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[40.6px] h-[4.7px]">
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[-0.4px] left-[70.7px] w-[82.8px] h-[107.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0px] rounded-[6.47px] w-[82.7px] h-[93.5px] object-cover"
                  alt=""
                  src="/base-16@2x.png"
                />
                <div className="absolute top-[81.4px] left-[0px] w-[82.7px] h-[25.9px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[6.47px] bg-dimgray-200 shadow-[0px_5.2px_10.36px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(14.08px)] box-border w-[82.7px] h-[25.9px] border-[0.2px] border-solid border-gray-1500" />
                </div>
                <div className="absolute top-[87px] left-[calc(50%_-_28.4px)] w-[58.4px] h-3">
                  <div className="absolute top-[0px] left-[calc(50%_-_29.2px)] tracking-[-0.01em] leading-[8.63px] capitalize font-extrabold flex items-center w-[58.4px] h-[7.3px]">
                    Castro Antwi-Danso
                  </div>
                  <div className="absolute top-[6.4px] left-[calc(50%_-_16.9px)] text-9xs-9 tracking-[-0.01em] leading-[6.47px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[33.7px] h-[5.6px]">
                    General Manager
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[0.5px] left-[154.9px] w-[72.7px] h-[89.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-7xs"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[6.47px] w-[72.6px] h-[78.2px] object-cover"
                  alt=""
                  src="/base-17@2x.png"
                />
                <div className="absolute top-[66px] left-[0px] w-[72.6px] h-[23.8px]">
                  <div className="absolute top-[0px] left-[0px] w-[72.6px] h-[23.8px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[6.47px] bg-darkslateblue shadow-[0px_5.2px_10.36px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(14.08px)] box-border w-[72.6px] h-[23.8px] border-[0.2px] border-solid border-gray-1500" />
                  </div>
                  <div className="absolute top-[4.3px] left-[calc(50%_-_24.3px)] w-[49.4px] h-[12.9px]">
                    <div className="absolute top-[0px] left-[calc(50%_-_24.7px)] tracking-[-0.01em] leading-[8.63px] capitalize font-extrabold flex items-center w-[49.4px] h-[6.7px]">
                      Otis A. Apaloo
                    </div>
                    <div className="absolute top-[7.8px] left-[12.3px] text-8xs-1 tracking-[-0.01em] leading-[6.47px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.74deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[27.6px] h-[5.1px]">{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2.16px] z-[3]">
              <div className="relative bg-gainsboro-300 w-[3.2px] h-[1.3px]" />
              <div className="relative bg-goldenrod-200 w-[6.5px] h-[1.3px]" />
              <div className="relative bg-gainsboro-300 w-[3.2px] h-[1.3px]" />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[163.2px] left-[63.7px] w-[180.3px] h-[257.1px] z-[4]"
              alt=""
              src="/vector-214.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[346.1px] left-[230.9px] w-[180.3px] h-[257.1px] z-[5]"
              alt=""
              src="/vector-223.svg"
            />
            <div className="relative w-[284.1px] h-[102px] z-[6] text-9xs-2 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[15.3px] left-[25.1px] bg-white w-[234.8px] h-[77.7px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <div className="absolute top-[65.4px] left-[109.5px] w-[52.7px] h-[12.9px]">
                <div className="absolute top-[0px] left-[0.2px] bg-dimgray-300 box-border w-[52.4px] h-[12.9px] border-[0.2px] border-solid border-goldenrod-200" />
                <img
                  className="absolute top-[0px] left-[13.4px] w-[13.4px] h-[12.9px] object-contain"
                  alt=""
                  src="/base26.svg"
                />
                <img
                  className="absolute top-[4.5px] left-[3.5px] w-[4.3px] h-[4.3px] overflow-hidden"
                  alt=""
                  src="/arrowright3.svg"
                />
                <div className="absolute top-[4.3px] left-[18.1px] uppercase font-semibold">
                  view produCts
                </div>
              </div>
              <div className="absolute top-[92.2px] left-[6.7px] bg-goldenrod-200 w-[107.9px] h-[2.2px]" />
              <b
                className="absolute top-[29.5px] left-[106.1px] text-4xs-2 tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[9.5px] left-[16.7px] w-[97.8px] h-[96.1px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients7@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[123px] h-[132.7px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[-0.4px] left-[calc(50%_+_0.7px)] tracking-[0.65px] leading-[6.91px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[10.4px] left-[0px] w-[123px] h-[116.6px] text-smi-1 text-white">
                <b className="absolute top-[0px] left-[0px] tracking-[-0.43px] leading-[13.81px]">
                  <p className="m-0">{`Frequently `}</p>
                  <p className="m-0">Asked Questions</p>
                </b>
                <div className="absolute top-[33.9px] left-[0px] text-8xs-3 leading-[6.91px] inline-block w-[123px] h-[14.9px]">
                  <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                  <p className="m-0">enquiries for fast response.</p>
                </div>
                <div className="absolute top-[57.8px] left-[0px] w-[84px] h-[58.8px] text-7xs-2">
                  <b className="absolute top-[0px] left-[0px] leading-[6.91px]">
                    What does the platform do
                  </b>
                  <b className="absolute top-[17.3px] left-[0px] leading-[6.91px]">
                    How can I access the platform ?
                  </b>
                  <b className="absolute top-[34.5px] left-[0px] leading-[6.91px]">
                    Is the platform free ?
                  </b>
                  <b className="absolute top-[51.8px] left-[0px] leading-[6.91px]">
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <img
                className="absolute top-[66.6px] left-[0px] w-[123px] h-[65.8px] object-contain"
                alt=""
                src="/group-8933@2x.png"
              />
            </div>
          </div>
        </section>
        <footer className="flex flex-col items-center justify-start">
          <footer
            className="flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-left text-15xl text-seagreen-100 font-poppins lg:hidden"
            data-animate-on-scroll
          >
            <div className="w-[1728px] overflow-hidden flex flex-col items-start justify-start">
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
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                      alt=""
                      src="/mofa-color2@2x.png"
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
                      src="/download-5-2@2x.png"
                    />
                    <img
                      className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                      alt=""
                      src="/download@2x.png"
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
                      src="/capture@2x.png"
                    />
                    <img
                      className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                      alt=""
                      src="/mofa-color2@2x.png"
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
                      src="/images-1-1@2x.png"
                    />
                    <img
                      className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                      alt=""
                      src="/download-12@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-darkolivegreen-600 w-[1728px] overflow-hidden flex flex-col items-center justify-start py-[30px] px-20 box-border lg:self-stretch lg:w-auto">
              <div
                className="w-[1568px] flex flex-row items-start justify-between py-10 px-0 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:items-center lg:justify-between lg:gap-[0px] lg:pl-0 lg:box-border"
                id="footercontent"
                data-animate-on-scroll
              >
                <div className="w-[606px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-[8px] text-white">
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
                    className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center box-border"
                    onClick={onFrameButtonClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl leading-[12.72px] font-poppins text-white text-left inline-block">
                      GET IN TOUCH
                    </button>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[40px] text-mini lg:flex-[unset] lg:self-stretch">
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
                <div className="w-[441px] flex flex-col items-start justify-start py-[30px] px-[5px] box-border gap-[44px] text-base">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[43px] text-white">
                    <img
                      className="relative max-h-full w-[33.6px] cursor-pointer"
                      alt=""
                      src="/arrow-61.svg"
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
                    <button
                      className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-base tracking-[1.34px] leading-[68.62px] capitalize font-bold font-poppins text-white text-left flex items-center h-[69px] shrink-0"
                      onClick={onNowWereClick}
                    >
                      +233(0) 593 808 064
                    </button>
                  </div>
                  <div className="w-[264px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch relative h-[29px]">
                      <div className="absolute w-[96.14%] top-[-51.72%] left-[-0.91%] tracking-[1.15px] leading-[58.74px] uppercase font-medium flex items-center">
                        EMAIL
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative h-[26px]">
                      <b
                        className="absolute top-[7px] left-[-1px] text-base tracking-[1.15px] leading-[58.74px] lowercase font-poppins text-white text-left cursor-pointer"
                        onClick={onNowWereText2Click}
                      >
                        customercare@bsl.com.gh
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 px-[5px] gap-[10px]">
                    <div className="relative w-[131px] h-[39px]">
                      <div className="absolute top-[-25.64%] left-[0%] tracking-[1.15px] leading-[58.74px] uppercase font-medium">{`FOLLOW US `}</div>
                    </div>
                    <div className="flex flex-row items-end justify-start gap-[17px]">
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
            </div>
            <section className="bg-darkolivegreen-600 w-[1728px] flex flex-row items-start justify-between lg:w-auto lg:[align-self:unset] lg:h-auto lg:pl-10 lg:pr-10 lg:box-border">
              <div className="flex-1 h-[25px] flex flex-col items-start justify-start py-0 px-[200px] box-border">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white" />
              </div>
            </section>
            <div className="bg-darkolivegreen-600 w-[1728px] flex flex-row items-end justify-between py-2.5 px-[150px] box-border text-center text-base text-white lg:flex-col lg:items-center lg:justify-start lg:pl-[120px] lg:pr-[116px] lg:box-border">
              <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[406px] h-7 shrink-0">
                No 24 Maseru Street,East Legon -Accra
              </b>
              <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[533px] h-7 shrink-0">
                © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
              </b>
            </div>
          </footer>
          <footer
            className="relative w-[1199.7px] h-[503.2px] hidden text-left text-4xl-6 text-seagreen-100 font-poppins lg:flex [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_scale-up] lg:opacity-[1] md:hidden"
            data-animate-on-scroll
          >
            <div className="absolute top-[0px] left-[0px] w-[1199.7px] overflow-hidden flex flex-col items-start justify-start">
              <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_2.8px_43.05px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(41.66px)] w-[1215px] h-[74.3px] overflow-hidden shrink-0">
                <div className="absolute top-[-3.5px] left-[43.7px] w-[2782.7px] h-[69.4px]">
                  <div className="absolute top-[0px] left-[0px] w-[1370.5px] h-[69.4px]">
                    <img
                      className="absolute top-[13.2px] left-[1327.5px] w-[43px] h-[43px] object-cover"
                      alt=""
                      src="/download-29@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[218.7px] w-[72.2px] h-[47.2px] object-cover"
                      alt=""
                      src="/download-5-4@2x.png"
                    />
                    <img
                      className="absolute top-[4.9px] left-[1219.9px] w-[47.2px] h-[52.1px] object-cover"
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className="absolute top-[10.4px] left-[0px] w-[58.3px] h-[48.6px] object-cover"
                      alt=""
                      src="/download-519@2x.png"
                    />
                    <img
                      className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                      alt=""
                      src="/download-39@2x.png"
                    />
                    <img
                      className="absolute top-[9px] left-[336px] w-[117.3px] h-[51.4px] object-cover"
                      alt=""
                      src="/capture-2@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[493.6px] w-[205.5px] h-[43px] object-cover"
                      alt=""
                      src="/mofa-color10@2x.png"
                    />
                    <img
                      className="absolute top-[20.1px] left-[728.3px] w-[95.8px] h-[32.6px] object-cover mix-blend-difference"
                      alt=""
                      src="/images-2@2x.png"
                    />
                    <img
                      className="absolute top-[9.7px] left-[849.1px] w-[86.1px] h-[49.3px] object-cover"
                      alt=""
                      src="/download-6-2@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[969.2px] w-[69.4px] h-[69.4px] object-cover"
                      alt=""
                      src="/images-1-2@2x.png"
                    />
                    <img
                      className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                      alt=""
                      src="/download-1-2@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[1412.2px] w-[1370.5px] h-[69.4px]">
                    <img
                      className="absolute top-[13.2px] left-[1327.5px] w-[43px] h-[43px] object-cover"
                      alt=""
                      src="/download-210@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[218.7px] w-[72.2px] h-[47.2px] object-cover"
                      alt=""
                      src="/download-5-6@2x.png"
                    />
                    <img
                      className="absolute top-[4.9px] left-[1219.9px] w-[47.2px] h-[52.1px] object-cover"
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className="absolute top-[10.4px] left-[0px] w-[58.3px] h-[48.6px] object-cover"
                      alt=""
                      src="/download-521@2x.png"
                    />
                    <img
                      className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                      alt=""
                      src="/download-310@2x.png"
                    />
                    <img
                      className="absolute top-[9px] left-[336px] w-[117.3px] h-[51.4px] object-cover"
                      alt=""
                      src="/capture-3@2x.png"
                    />
                    <img
                      className="absolute top-[13.9px] left-[493.6px] w-[205.5px] h-[43px] object-cover"
                      alt=""
                      src="/mofa-color11@2x.png"
                    />
                    <img
                      className="absolute top-[20.1px] left-[728.3px] w-[95.8px] h-[32.6px] object-cover mix-blend-difference"
                      alt=""
                      src="/images-3@2x.png"
                    />
                    <img
                      className="absolute top-[9.7px] left-[849.1px] w-[86.1px] h-[49.3px] object-cover"
                      alt=""
                      src="/download-6-3@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[969.2px] w-[69.4px] h-[69.4px] object-cover"
                      alt=""
                      src="/images-1-3@2x.png"
                    />
                    <img
                      className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                      alt=""
                      src="/download-1-3@2x.png"
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
                    onClick={onFrameButton1Click}
                    data-animate-on-scroll
                  >
                    <div className="rounded-[28.15px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[171.1px] h-[43.7px] flex flex-row items-center justify-center py-[17.322946548461914px] px-[34.64589309692383px] box-border">
                      <div className="relative text-sm-9 leading-[8.83px] font-poppins text-white text-left">
                        GET IN TOUCH
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[27.77px] text-2xs-4 lg:flex-[unset] lg:self-stretch">
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
                <div className="flex-1 flex flex-col items-start justify-start py-[20.828781127929688px] px-[3.471463441848755px] gap-[30.55px] text-xs-1 lg:flex-[unset] lg:self-stretch">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[29.85px] text-white">
                    <img
                      className="relative w-[23.4px] h-0 cursor-pointer"
                      alt=""
                      src="/arrow-62.svg"
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
                          src="/group1.svg"
                        />
                      </div>
                      <div className="rounded-[25.59px] bg-darkgray-400 w-[32.9px] h-[33.9px] flex flex-row items-center justify-center py-[13.834328651428223px] px-[17.292909622192383px] box-border">
                        <img
                          className="relative w-[5.4px] h-[10.4px]"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                      <div className="rounded-[40.47px] bg-darkgray-400 w-[31.5px] h-[31.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[13.834328651428223px] px-[12.105037689208984px] box-border">
                        <img
                          className="relative w-[11.6px] h-[9.7px]"
                          alt=""
                          src="/vector4.svg"
                        />
                      </div>
                      <div className="rounded-[28.01px] bg-darkgray-400 w-[34.2px] h-[33.9px] flex flex-col items-center justify-center p-[13.834328651428223px] box-border">
                        <img
                          className="relative w-[11.2px] h-[10.4px]"
                          alt=""
                          src="/vector5.svg"
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
          </footer>
          <footer className="relative w-[960px] h-[408.9px] hidden text-left text-lg-9 text-seagreen-100 font-poppins md:flex sm:hidden">
            <div className="absolute top-[0px] left-[0px] w-[960px] overflow-hidden flex flex-col items-start justify-start">
              <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_2.2px_34.44px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(33.33px)] w-[972.2px] h-[59.4px] overflow-hidden shrink-0">
                <div className="absolute top-[-2.8px] left-[35px] w-[2226.7px] h-[55.6px]">
                  <div className="absolute top-[0px] left-[0px] w-[1096.7px] h-[55.6px]">
                    <img
                      className="absolute top-[10.6px] left-[1062.2px] w-[34.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/download-211@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[175px] w-[57.8px] h-[37.8px] object-cover"
                      alt=""
                      src="/download-5-8@2x.png"
                    />
                    <img
                      className="absolute top-[3.9px] left-[976.1px] w-[37.8px] h-[41.7px] object-cover"
                      alt=""
                      src="/download-4@2x.png"
                    />
                    <img
                      className="absolute top-[8.3px] left-[0px] w-[46.7px] h-[38.9px] object-cover"
                      alt=""
                      src="/download-51@2x.png"
                    />
                    <img
                      className="absolute top-[13.3px] left-[90px] w-[32.8px] h-[32.2px] object-cover"
                      alt=""
                      src="/download-311@2x.png"
                    />
                    <img
                      className="absolute top-[7.2px] left-[268.9px] w-[93.9px] h-[41.1px] object-cover"
                      alt=""
                      src="/capture-4@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[395px] w-[164.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/mofa-color-4@2x.png"
                    />
                    <img
                      className="absolute top-[16.1px] left-[582.8px] w-[76.7px] h-[26.1px] object-cover mix-blend-difference"
                      alt=""
                      src="/images-4@2x.png"
                    />
                    <img
                      className="absolute top-[7.8px] left-[679.4px] w-[68.9px] h-[39.4px] object-cover"
                      alt=""
                      src="/download-610@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[775.6px] w-[55.6px] h-[55.6px] object-cover"
                      alt=""
                      src="/images-1-4@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                      alt=""
                      src="/download-1-4@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[1130px] w-[1096.7px] h-[55.6px]">
                    <img
                      className="absolute top-[10.6px] left-[1062.2px] w-[34.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/download-211@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[175px] w-[57.8px] h-[37.8px] object-cover"
                      alt=""
                      src="/download-5-10@2x.png"
                    />
                    <img
                      className="absolute top-[3.9px] left-[976.1px] w-[37.8px] h-[41.7px] object-cover"
                      alt=""
                      src="/download-4@2x.png"
                    />
                    <img
                      className="absolute top-[8.3px] left-[0px] w-[46.7px] h-[38.9px] object-cover"
                      alt=""
                      src="/download-51@2x.png"
                    />
                    <img
                      className="absolute top-[13.3px] left-[90px] w-[32.8px] h-[32.2px] object-cover"
                      alt=""
                      src="/download-311@2x.png"
                    />
                    <img
                      className="absolute top-[7.2px] left-[268.9px] w-[93.9px] h-[41.1px] object-cover"
                      alt=""
                      src="/capture-4@2x.png"
                    />
                    <img
                      className="absolute top-[11.1px] left-[395px] w-[164.4px] h-[34.4px] object-cover"
                      alt=""
                      src="/mofa-color-5@2x.png"
                    />
                    <img
                      className="absolute top-[16.1px] left-[582.8px] w-[76.7px] h-[26.1px] object-cover mix-blend-difference"
                      alt=""
                      src="/images-4@2x.png"
                    />
                    <img
                      className="absolute top-[7.8px] left-[679.4px] w-[68.9px] h-[39.4px] object-cover"
                      alt=""
                      src="/download-610@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[775.6px] w-[55.6px] h-[55.6px] object-cover"
                      alt=""
                      src="/images-1-5@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                      alt=""
                      src="/download-1-5@2x.png"
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
                    onClick={onFrameButton2Click}
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
                      src="/arrow-63.svg"
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
                          src="/group2.svg"
                        />
                      </div>
                      <div className="rounded-[20.48px] bg-darkgray-400 w-[26.3px] h-[27.1px] flex flex-row items-center justify-center py-[11.069880485534668px] px-[13.837349891662598px] box-border">
                        <img
                          className="relative w-[4.3px] h-[8.3px]"
                          alt=""
                          src="/vector6.svg"
                        />
                      </div>
                      <div className="rounded-[32.38px] bg-darkgray-400 w-[25.2px] h-[25.2px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.069880485534668px] px-[9.686145782470703px] box-border">
                        <img
                          className="relative w-[9.3px] h-[7.8px]"
                          alt=""
                          src="/vector7.svg"
                        />
                      </div>
                      <div className="rounded-[22.42px] bg-darkgray-400 w-[27.4px] h-[27.1px] flex flex-col items-center justify-center p-[11.069880485534668px] box-border">
                        <img
                          className="relative w-[9px] h-[8.3px]"
                          alt=""
                          src="/vector8.svg"
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
          </footer>
          <footer
            className="w-[428px] overflow-hidden hidden flex-col items-start justify-start text-left text-xs-6 text-white font-poppins sm:flex [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_scale-up] sm:opacity-[1] mq350small:hidden"
            data-animate-on-scroll
          >
            <div className="relative [background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2.4px_37.73px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(36.51px)] w-[707px] h-[58px] overflow-hidden shrink-0">
              <div className="absolute top-[-3px] left-[38.3px] w-[2438.7px] h-[60.8px]">
                <div className="absolute top-[0px] left-[0px] w-[1201.1px] h-[60.8px]">
                  <img
                    className="absolute top-[11.6px] left-[1163.4px] w-[37.7px] h-[37.7px] object-cover"
                    alt=""
                    src="/download-2111@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[191.7px] w-[63.3px] h-[41.4px] object-cover"
                    alt=""
                    src="/download-5-12@2x.png"
                  />
                  <img
                    className="absolute top-[4.3px] left-[1069.1px] w-[41.4px] h-[45.6px] object-cover"
                    alt=""
                    src="/download-61@2x.png"
                  />
                  <img
                    className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-cover"
                    alt=""
                    src="/download-523@2x.png"
                  />
                  <img
                    className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-cover"
                    alt=""
                    src="/download-3111@2x.png"
                  />
                  <img
                    className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                    alt=""
                    src="/capture-6@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-cover"
                    alt=""
                    src="/mofa-color1@2x.png"
                  />
                  <img
                    className="absolute top-[17.6px] left-[638.3px] w-[84px] h-[28.6px] object-cover mix-blend-difference"
                    alt=""
                    src="/images-6@2x.png"
                  />
                  <img
                    className="absolute top-[8.5px] left-[744.2px] w-[75.5px] h-[43.2px] object-cover"
                    alt=""
                    src="/download-6-6@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[849.4px] w-[60.8px] h-[60.8px] object-cover"
                    alt=""
                    src="/images-1-6@2x.png"
                  />
                  <img
                    className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                    alt=""
                    src="/download-1-6@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1237.6px] w-[1201.1px] h-[60.8px]">
                  <img
                    className="absolute top-[11.6px] left-[1163.4px] w-[37.7px] h-[37.7px] object-cover"
                    alt=""
                    src="/download-212@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[191.7px] w-[63.3px] h-[41.4px] object-cover"
                    alt=""
                    src="/download-5-14@2x.png"
                  />
                  <img
                    className="absolute top-[4.3px] left-[1069.1px] w-[41.4px] h-[45.6px] object-cover"
                    alt=""
                    src="/download-7@2x.png"
                  />
                  <img
                    className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-cover"
                    alt=""
                    src="/download-525@2x.png"
                  />
                  <img
                    className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-cover"
                    alt=""
                    src="/download-312@2x.png"
                  />
                  <img
                    className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                    alt=""
                    src="/capture-7@2x.png"
                  />
                  <img
                    className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-cover"
                    alt=""
                    src="/mofa-color12@2x.png"
                  />
                  <img
                    className="absolute top-[17.6px] left-[638.3px] w-[84px] h-[28.6px] object-cover mix-blend-difference"
                    alt=""
                    src="/images-7@2x.png"
                  />
                  <img
                    className="absolute top-[8.5px] left-[744.2px] w-[75.5px] h-[43.2px] object-cover"
                    alt=""
                    src="/download-6-7@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[849.4px] w-[60.8px] h-[60.8px] object-cover"
                    alt=""
                    src="/images-1-7@2x.png"
                  />
                  <img
                    className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                    alt=""
                    src="/download-1-7@2x.png"
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
                  src="/arrow-64.svg"
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
                      src="/group3.svg"
                    />
                  </div>
                  <div className="rounded-[26.78px] bg-darkgray-400 w-[34.4px] h-[35.5px] flex flex-row items-center justify-center py-[14.475349426269531px] px-[18.094186782836914px] box-border">
                    <img
                      className="relative w-[5.7px] h-[10.9px]"
                      alt=""
                      src="/vector9.svg"
                    />
                  </div>
                  <div className="rounded-[42.34px] bg-darkgray-400 w-[32.9px] h-[32.9px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[14.475349426269531px] px-[12.665931701660156px] box-border">
                    <img
                      className="relative w-[12.1px] h-[10.2px]"
                      alt=""
                      src="/vector10.svg"
                    />
                  </div>
                  <div className="rounded-[29.31px] bg-darkgray-400 w-[35.8px] h-[35.5px] flex flex-col items-center justify-center p-[14.475349426269531px] box-border">
                    <img
                      className="relative w-[11.7px] h-[10.9px]"
                      alt=""
                      src="/vector11.svg"
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
          </footer>
          <footer
            className="w-[351.1px] overflow-hidden hidden flex-col items-start justify-start text-left text-3xs-5 text-white font-poppins mq350small:flex [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
            data-animate-on-scroll
          >
            <div className="relative [background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2px_30.94px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(29.94px)] w-[579.9px] h-[47.6px] overflow-hidden shrink-0">
              <div className="absolute top-[-2.5px] left-[31.4px] w-[2000.3px] h-[49.9px]">
                <div className="absolute top-[0px] left-[0px] w-[985.2px] h-[49.9px]">
                  <img
                    className="absolute top-[9.5px] left-[954.2px] w-[30.9px] h-[30.9px] object-cover"
                    alt=""
                    src="/download-213@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[157.2px] w-[51.9px] h-[33.9px] object-cover"
                    alt=""
                    src="/download-5-16@2x.png"
                  />
                  <img
                    className="absolute top-[3.5px] left-[876.9px] w-[33.9px] h-[37.4px] object-cover"
                    alt=""
                    src="/download-8@2x.png"
                  />
                  <img
                    className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-cover"
                    alt=""
                    src="/download-527@2x.png"
                  />
                  <img
                    className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-cover"
                    alt=""
                    src="/download-313@2x.png"
                  />
                  <img
                    className="absolute top-[6.5px] left-[241.6px] w-[84.3px] h-[36.9px] object-cover"
                    alt=""
                    src="/capture-8@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[354.8px] w-[147.7px] h-[30.9px] object-cover"
                    alt=""
                    src="/mofa-color-8@2x.png"
                  />
                  <img
                    className="absolute top-[14.5px] left-[523.5px] w-[68.9px] h-[23.5px] object-cover mix-blend-difference"
                    alt=""
                    src="/images-8@2x.png"
                  />
                  <img
                    className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-cover"
                    alt=""
                    src="/download-611@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[696.7px] w-[49.9px] h-[49.9px] object-cover"
                    alt=""
                    src="/images-1-8@2x.png"
                  />
                  <img
                    className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                    alt=""
                    src="/download-1-8@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1015.1px] w-[985.2px] h-[49.9px]">
                  <img
                    className="absolute top-[9.5px] left-[954.2px] w-[30.9px] h-[30.9px] object-cover"
                    alt=""
                    src="/download-214@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[157.2px] w-[51.9px] h-[33.9px] object-cover"
                    alt=""
                    src="/download-5-18@2x.png"
                  />
                  <img
                    className="absolute top-[3.5px] left-[876.9px] w-[33.9px] h-[37.4px] object-cover"
                    alt=""
                    src="/download-9@2x.png"
                  />
                  <img
                    className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-cover"
                    alt=""
                    src="/download-529@2x.png"
                  />
                  <img
                    className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-cover"
                    alt=""
                    src="/download-314@2x.png"
                  />
                  <img
                    className="absolute top-[6.5px] left-[241.6px] w-[84.3px] h-[36.9px] object-cover"
                    alt=""
                    src="/capture-9@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[354.8px] w-[147.7px] h-[30.9px] object-cover"
                    alt=""
                    src="/mofa-color-9@2x.png"
                  />
                  <img
                    className="absolute top-[14.5px] left-[523.5px] w-[68.9px] h-[23.5px] object-cover mix-blend-difference"
                    alt=""
                    src="/images-9@2x.png"
                  />
                  <img
                    className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-cover"
                    alt=""
                    src="/download-6-9@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[696.7px] w-[49.9px] h-[49.9px] object-cover"
                    alt=""
                    src="/images-1-9@2x.png"
                  />
                  <img
                    className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                    alt=""
                    src="/download-1-9@2x.png"
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
                  src="/arrow-65.svg"
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
                      src="/group4.svg"
                    />
                  </div>
                  <div className="rounded-[21.96px] bg-darkgray-400 w-[28.2px] h-[29.1px] flex flex-row items-center justify-center py-[11.872894287109375px] px-[14.841116905212402px] box-border">
                    <img
                      className="relative w-[4.6px] h-[8.9px]"
                      alt=""
                      src="/vector12.svg"
                    />
                  </div>
                  <div className="rounded-[34.73px] bg-darkgray-400 w-[27px] h-[27px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.872894287109375px] px-[10.38878345489502px] box-border">
                    <img
                      className="relative w-[9.9px] h-[8.3px]"
                      alt=""
                      src="/vector13.svg"
                    />
                  </div>
                  <div className="rounded-[24.04px] bg-darkgray-400 w-[29.4px] h-[29.1px] flex flex-col items-center justify-center p-[11.872894287109375px] box-border">
                    <img
                      className="relative w-[9.6px] h-[8.9px]"
                      alt=""
                      src="/vector14.svg"
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
          </footer>
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

export default ContactPAge;
