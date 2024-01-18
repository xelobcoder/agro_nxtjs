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

  const onNowWeAreClick = useCallback(() => {
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

  const onNowWereText2Click = useCallback(() => {
    window.location.href = "tel:+2330593808064";
  }, []);

  const onNowWereText1Click = useCallback(() => {
    window.location.href = "mailto:customercare@bsl.com.gh?subject=Enquiry";
  }, []);

  const onFrameContainer3Click = useCallback(() => {
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

  const onFrameContainer32Click = useCallback(() => {
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
      <div className="relative bg-darkolivegreen-600 w-full overflow-hidden flex flex-col items-start justify-start tracking-[normal] text-left text-sm-1 text-goldenrod-200 font-poppins">
        <header className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] flex flex-row items-center justify-center top-[0] z-[99] sticky max-w-full text-center text-mini font-inter">
          <NavDesktop />
          <div className="[background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] box-border hidden flex-row items-center justify-center py-3.5 px-5 max-w-full border-[1px] border-solid border-gray-1800">
            <div className="w-[1548px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
              <div className="relative w-[774px] h-[45px] max-w-full">
                <div className="absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos2]:hover:flex">
                  <div className="oursubsidiarylogos2 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden">
                    <img
                      className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
                      alt=""
                      src="/clip-path-group11@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
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
                </div>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/logo11@2x.png"
                  />
                </div>
              </div>
              <div className="w-[774px] flex flex-row items-center justify-end gap-[30px] max-w-full">
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
        <section className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[110px] pr-[228px] pl-[229px] box-border gap-[46px] bg-[url('/workwithframe@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-41xl text-goldenrod-100 font-poppins mq450:gap-[23px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-[46px] mq800:pb-[46px] mq800:box-border mq1125:py-[71px] mq1125:px-[114px] mq1125:box-border mq1350:flex-wrap">
          <FrameComponent6 />
          <CONTACTFORM />
          <div className="hidden flex-col items-center justify-start gap-[20px] min-h-[1237px] max-w-full">
            <div className="w-[970px] flex flex-col items-center justify-start py-5 px-0 box-border gap-[34px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-center p-2.5 box-border max-w-full">
                <div className="flex-1 relative leading-[96.75%] inline-block max-w-full mq450:text-17xl mq450:leading-[35px] mq800:text-[48px] mq800:leading-[46px]">
                  <span className="font-light">{`Work with `}</span>
                  <span className="font-extrabold">Us</span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-11xl text-darkgray-300">
                <div className="self-stretch flex flex-row items-center justify-start p-2.5">
                  <div className="relative tracking-[0.04em] font-extralight mq450:text-lg mq800:text-5xl">{`CAREERS `}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 box-border max-w-full text-lg text-white">
                  <div className="flex-1 relative inline-block max-w-full">
                    Our innovative group believes in the value and talent in
                    team work. Join the ever growing team of creative minds and
                    talents. Browse through our available positions or send an
                    open application by attaching your CV
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-18xl bg-whitesmoke-200 box-border w-[970px] overflow-x-auto flex flex-col items-center justify-start py-[19px] px-[17px] gap-[35px] max-w-full text-base text-gray-1200 border-[1px] border-solid border-gray-200">
              <div className="w-[934px] flex flex-row items-center justify-center p-2.5 box-border text-5xl text-black">
                <div className="relative tracking-[0.04em] font-semibold mq450:text-lgi">
                  Enquiry type
                </div>
              </div>
              <div className="w-[934px] flex flex-row items-end justify-start text-center text-lg text-gray-300">
                <div className="flex-[0.7333] rounded-xl box-border h-[47px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[43px] max-w-full text-left border-[1px] border-solid border-darkslategray-600">
                  <div className="self-stretch relative tracking-[0.04em] inline-block w-[83px] shrink-0">
                    General
                  </div>
                </div>
                <div className="rounded-10xl box-border w-[285px] h-[47px] flex flex-row items-center justify-center py-2.5 px-[45px] whitespace-nowrap border-[1px] border-solid border-darkolivegreen-1200">
                  <div className="self-stretch relative tracking-[0.04em]">
                    {" "}
                    Business
                  </div>
                </div>
                <div className="flex-1 rounded-xl box-border flex flex-col items-start justify-start min-h-[47px] max-w-full border-[1px] border-solid border-darkslategray-600">
                  <div className="self-stretch relative tracking-[0.04em] flex items-center justify-center h-[45px] shrink-0">
                    Careers
                  </div>
                </div>
              </div>
              <div className="rounded-11xl box-border w-[934px] overflow-hidden flex flex-row items-center justify-start py-[17px] pr-7 pl-[26px] border-[1px] border-solid border-darkslategray-600">
                <div className="flex-1 relative tracking-[0.04em] inline-block max-w-full">
                  Name
                </div>
              </div>
              <div className="rounded-11xl box-border w-[934px] overflow-hidden flex flex-row items-center justify-start py-[17px] pr-7 pl-[26px] border-[1px] border-solid border-darkslategray-600">
                <div className="flex-1 relative tracking-[0.04em] inline-block max-w-full">
                  Phone
                </div>
              </div>
              <div className="rounded-11xl box-border w-[934px] overflow-hidden flex flex-row items-center justify-start py-[17px] pr-7 pl-[26px] border-[1px] border-solid border-darkslategray-600">
                <div className="flex-1 relative tracking-[0.04em] inline-block max-w-full">
                  Email
                </div>
              </div>
              <div className="rounded-10xl box-border w-[934px] overflow-hidden flex flex-row items-center justify-start py-3 pr-[18px] pl-4 gap-[13px] text-gray-1100 border-[1px] border-solid border-darkslategray-600">
                <div className="rounded-md bg-darkslategray-500 w-[132px] h-[34px] flex flex-row items-center justify-center py-[5px] px-2.5 box-border whitespace-nowrap">
                  <div className="self-stretch relative tracking-[0.04em]">
                    Choose file
                  </div>
                </div>
                <div className="flex-1 relative text-sm tracking-[0.04em] text-gray-1200 inline-block max-w-full">
                  No file chosen
                </div>
              </div>
              <div className="rounded-3xl box-border w-[934px] h-[157px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[27px] border-[1px] border-solid border-darkslategray-600">
                <div className="relative tracking-[0.04em]">
                  Type your message here
                </div>
              </div>
              <div className="w-[934px] flex flex-col items-center justify-start text-lg text-white">
                <div className="relative w-[99px] h-[47px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_49.5px)] rounded-6xl [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-2.5 px-[25px] box-border w-full h-full">
                    <div className="self-stretch flex-1 relative tracking-[0.04em] uppercase font-semibold">
                      send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-gray-500 overflow-hidden flex flex-col items-center justify-start pt-[60px] px-0 pb-[70px] box-border relative gap-[20px] max-w-full text-center text-lgi text-white font-poppins mq800:pt-5 mq800:pb-5 mq800:box-border mq1125:pt-[25px] mq1125:pb-[29px] mq1125:box-border mq1350:pt-[39px] mq1350:pb-[45px] mq1350:box-border">
          <div className="absolute my-0 mx-[!important] top-[-634.4px] left-[-273px] w-[835.5px] h-[1191px] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.841)]"
              alt=""
              src="/footer-logo@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[65px] box-border max-w-full text-goldenrod-200">
            <div className="flex-1 relative leading-[100%] font-extrabold inline-block max-w-full z-[1]">
              Our Team - The big brains behind Agrospectrum
            </div>
          </div>
          <h1 className="my-0 mx-[!important] absolute w-full top-[84px] left-[0px] text-21xl leading-[100%] font-extrabold font-inherit flex items-center justify-center mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">{`Our Teams & Experts`}</h1>
          <div className="absolute my-0 mx-[!important] right-[-177.5px] bottom-[-721.6px] w-[835.5px] h-[1191px] z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.841)]"
              alt=""
              src="/footer-logo@2x.png"
            />
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-center py-0 px-5 box-border gap-[9px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full z-[1] text-left text-6xl font-lexend-deca mq1125:flex-wrap mq1125:justify-center"
            data-animate-on-scroll
          >
            <div className="relative w-[317px] h-[456px]">
              <img
                className="absolute top-[19.5px] left-[0.3px] rounded-12xl w-[317px] h-[373px] object-cover"
                loading="eager"
                alt=""
                src="/base@2x.png"
              />
              <div className="absolute top-[334.5px] left-[0.3px] rounded-12xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-[101px] z-[1] border-[1px] border-solid border-gray-1500">
                <div className="absolute top-[0px] left-[0px] rounded-12xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-full hidden border-[1px] border-solid border-gray-1500" />
                <h3 className="m-0 absolute top-[19.6px] left-[38.5px] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[241.1px] h-[29.3px] z-[2] mq450:text-xl mq450:leading-[32px]">
                  Xose Ahlijah, SWE
                </h3>
                <div className="absolute top-[51.3px] left-[55px] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.92deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[188px] h-[21.9px] z-[2]">
                  Snr Technology Lead
                </div>
              </div>
            </div>
            <div className="relative w-[383px] h-[497px] max-w-full">
              <img
                className="absolute top-[0px] left-[-0.1px] rounded-11xl w-[383.2px] h-[433.2px] object-cover"
                alt=""
                src="/base-1@2x.png"
              />
              <div className="absolute top-[377px] left-[-0.3px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-[120px] z-[1] border-[1px] border-solid border-gray-1500">
                <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-full hidden border-[1px] border-solid border-gray-1500" />
                <h3 className="m-0 absolute top-[26.2px] left-[60.2px] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[270.5px] h-[34px] z-[2] mq450:text-xl mq450:leading-[32px]">
                  Castro Antwi-Danso
                </h3>
                <div className="absolute top-[56px] left-[117.2px] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[156px] h-[26px] z-[2]">
                  General Manager
                </div>
              </div>
            </div>
            <div className="relative w-[337px] h-[456px] max-w-full text-9xl">
              <img
                className="absolute top-[19.5px] left-[0.3px] rounded-11xl w-[336.4px] h-[362.4px] object-cover"
                alt=""
                src="/base-2@2x.png"
              />
              <div className="absolute top-[325.4px] left-[0.1px] rounded-11xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-[110.1px] z-[1] border-[1px] border-solid border-gray-1500">
                <div className="absolute top-[0px] left-[0px] rounded-11xl bg-darkslateblue shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-full hidden border-[1px] border-solid border-gray-1500" />
                <h2 className="m-0 absolute top-[20.1px] left-[55.4px] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[228.9px] h-[31px] z-[2] mq450:text-3xl mq450:leading-[32px]">
                  Otis A. Apaloo
                </h2>
                <div className="absolute top-[56.3px] left-[112.2px] text-lgi tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(88.74deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[127.7px] h-[23.4px] z-[2]">{`Data Analyst `}</div>
              </div>
            </div>
          </div>
          <div className="w-[1442px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[80px] min-h-[918px] max-w-full text-left text-19xl text-darkslategray-200 font-lexend-deca mq450:gap-[20px] mq800:gap-[40px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="relative bg-gainsboro-300 w-[15px] h-1.5" />
              <div className="relative bg-goldenrod-200 w-[30px] h-1.5" />
              <div className="relative bg-gainsboro-300 w-[15px] h-1.5" />
            </div>
            <div className="self-stretch bg-white h-[448px] flex flex-col items-start justify-start p-2.5 box-border relative gap-[10px] max-w-full z-[1] mq1350:h-auto">
              <div className="self-stretch flex flex-row items-center justify-center gap-[79px] max-w-full shrink-0 mq450:gap-[20px] mq800:gap-[39px] mq1350:flex-wrap">
                <img
                  className="relative max-h-full w-[555px] object-contain max-w-full mq1350:flex-1"
                  alt=""
                  src="/group-206@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[60px] min-w-[486px] max-w-full mq800:gap-[30px] mq800:min-w-full">
                  <h1
                    className="m-0 relative text-inherit tracking-[-0.02em] capitalize font-bold font-inherit flex items-center [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full mq450:text-4xl mq800:text-11xl"
                    data-animate-on-scroll
                  >
                    <span>
                      <p className="m-0">We support Agribusiness Industry</p>
                      <p className="m-0">To Utilize modern Equipments</p>
                      <p className="m-0">for a Better Result.</p>
                    </span>
                  </h1>
                  <button className="cursor-pointer py-[25px] px-[37px] bg-[transparent] box-border w-[236px] flex flex-row items-center justify-center gap-[10px] border-[3px] border-solid border-seagreen-100 hover:bg-mediumseagreen-300 hover:box-border hover:border-[3px] hover:border-solid hover:border-mediumseagreen-100">
                    <img
                      className="relative w-3.5 h-[14.7px] object-contain"
                      alt=""
                      src="/arrow-91@2x.png"
                    />
                    <div className="relative text-mini uppercase font-semibold font-lexend-deca text-darkslategray-200 text-left">
                      view produCts
                    </div>
                  </button>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute bottom-[-21px] left-[-38px] w-[520px] flex flex-col items-start justify-start p-2.5 box-border max-w-full z-[2]">
                <div className="self-stretch relative bg-goldenrod-200 h-2.5" />
              </div>
              <div className="my-0 mx-[!important] absolute bottom-[-734px] left-[132px] w-[1033px] flex flex-col items-end justify-start pt-[548px] px-0 pb-[389px] box-border gap-[15px] max-w-full text-center text-lgi text-white font-poppins">
                <div className="absolute my-0 mx-[!important] h-full top-[-0.4px] bottom-[0.4px] left-[0px] w-[835.5px] flex items-center justify-center z-[0]">
                  <img
                    className="h-full max-h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.841)]"
                    alt=""
                    src="/faq-frame@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[800px] pl-5 text-goldenrod-200">
                  <b className="relative tracking-[3px] leading-[32px] uppercase z-[1]">
                    FAQ
                  </b>
                </div>
                <h1 className="m-0 relative text-37xl tracking-[-2px] leading-[64px] font-bold font-inherit inline-block w-[928px] max-w-full z-[1] mq450:text-15xl mq450:leading-[38px] mq800:text-26xl mq800:leading-[51px]">
                  <p className="m-0">{`Frequently `}</p>
                  <p className="m-0">Asked Questions</p>
                </h1>
                <div className="relative text-xl leading-[32px] inline-block w-[928px] max-w-full z-[1] mq450:text-base mq450:leading-[26px]">
                  <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                  <p className="m-0">enquiries for fast response.</p>
                </div>
              </div>
            </div>
          </div>
          <Faqs1 />
        </section>
        <div className="bg-gray-500 w-[1200px] overflow-hidden hidden flex-col items-center justify-start py-[41.222713470458984px] px-0 box-border relative gap-[13.74px] max-w-full">
          <div className="absolute my-0 mx-[!important] top-[-435.9px] left-[-187.6px] w-[574px] h-[818.3px] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-23-1.svg"
            />
          </div>
          <div className="w-[367px] flex flex-col items-center justify-start pt-0 px-5 pb-[13.740903854370117px] box-border gap-[3.44px] max-w-full z-[1]">
            <div className="self-stretch relative leading-[100%] font-extrabold flex items-center">
              Our Team - The big brains behind Agrospectrum
            </div>
            <div className="relative text-9xl leading-[100%] font-extrabold text-white flex items-center mq450:text-3xl mq450:leading-[22px]">{`Our Teams & Experts`}</div>
          </div>
          <div className="relative w-[764.4px] h-[341.5px] max-w-full z-[2] text-mid-2 text-white font-lexend-deca">
            <div
              className="absolute top-[2.4px] left-[20px] w-[218px] h-[285.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <img
                  className="absolute top-[0px] left-[0px] rounded-2xl-3 w-[217.8px] h-[256.3px] object-cover"
                  alt=""
                  src="/base-3@2x.png"
                />
                <div className="absolute top-[216.4px] left-[0px] w-full h-[69.4px]">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl-3 bg-darkslateblue shadow-[0px_16.5px_32.98px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(44.82px)] box-border w-full h-full border-[0.7px] border-solid border-gray-1500" />
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
              className="absolute top-[-0.3px] left-[245.2px] w-[263.4px] h-[341.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.2px] rounded-[20.61px] w-[263.3px] h-[297.6px] object-cover"
                alt=""
                src="/base-4@2x.png"
              />
              <div className="absolute top-[259px] left-[0px] w-[263.3px] h-[82.4px]">
                <div className="absolute top-[0px] left-[0px] rounded-[20.61px] bg-dimgray-200 shadow-[0px_16.5px_32.98px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(44.82px)] box-border w-full h-full border-[0.7px] border-solid border-gray-1500" />
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
              className="absolute top-[2.4px] left-[513.1px] w-[231.3px] h-[285.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lgi-2"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.2px] rounded-[20.61px] w-[231.1px] h-[249px] object-cover"
                alt=""
                src="/base-5@2x.png"
              />
              <div className="absolute top-[210.2px] left-[0px] w-full h-[75.6px]">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] rounded-[20.61px] bg-darkslateblue shadow-[0px_16.5px_32.98px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(44.82px)] box-border w-full h-full border-[0.7px] border-solid border-gray-1500" />
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
          <div className="flex flex-row items-start justify-start py-0 px-5 gap-[6.87px] z-[3]">
            <div className="relative bg-gainsboro-300 w-[10.3px] h-[4.1px]" />
            <div className="relative bg-goldenrod-200 w-[20.6px] h-[4.1px]" />
            <div className="relative bg-gainsboro-300 w-[10.3px] h-[4.1px]" />
          </div>
          <div className="absolute my-0 mx-[!important] top-[520.4px] left-[202.7px] w-[574px] h-[818.3px] flex items-center justify-center z-[4]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-21-1.svg"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[1102.4px] left-[735.1px] w-[574px] h-[818.3px] flex items-center justify-center z-[5]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-22-1.svg"
            />
          </div>
          <div className="relative w-[1002.6px] h-[439px] max-w-full z-[6] text-2xs-3 text-darkslategray-200 font-lexend-deca">
            <div
              className="absolute top-[61.5px] left-[75.3px] bg-white w-[906.9px] h-[307.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            />
            <div className="absolute top-[264.9px] left-[495.8px] bg-dimgray-300 box-border w-[167px] h-[41.2px] border-[0.7px] border-solid border-goldenrod-200" />
            <div className="absolute top-[264.9px] left-[495.1px] w-[42.6px] h-[41.2px]">
              <img
                className="absolute top-[0px] left-[42.6px] w-full h-full object-contain"
                alt=""
                src="/base14.svg"
              />
              <img
                className="absolute top-[14.4px] left-[11px] w-[13.7px] h-[13.7px] overflow-hidden"
                alt=""
                src="/arrowright.svg"
              />
            </div>
            <div className="absolute top-[278.6px] left-[552.8px] uppercase font-semibold">
              view produCts
            </div>
            <div className="absolute top-[369.3px] left-[41px] bg-goldenrod-200 w-[343.5px] h-[6.9px]" />
            <b
              className="absolute top-[124.7px] left-[495.1px] text-7xl-1 tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] mq450:text-2xl"
              data-animate-on-scroll
            >
              <p className="m-0">We support Agribusiness Industry</p>
              <p className="m-0">To Utilize modern Equipments</p>
              <p className="m-0">for a Better Result.</p>
            </b>
            <img
              className="absolute top-[-0.3px] left-[19.7px] w-[480.9px] h-[471.3px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              alt=""
              src="/gradients@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div
            className="relative w-[431.6px] h-[422.5px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full z-[7]"
            data-animate-on-scroll
          >
            <b className="absolute top-[-0.4px] left-[calc(50%_+_2.1px)] tracking-[2.06px] leading-[21.99px] uppercase">
              FAQ
            </b>
            <div className="absolute top-[34px] left-[20px] w-[391.6px] h-[371px] text-19xl-5 text-white">
              <b className="absolute top-[0px] left-[0px] tracking-[-1.37px] leading-[43.97px] mq450:text-4xl mq450:leading-[26px] mq800:text-[31px] mq800:leading-[35px]">
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
            <div className="absolute top-[212.6px] left-[20px] w-[391.6px] h-[209.5px]">
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
        <div className="bg-gray-500 w-[960px] overflow-hidden hidden flex-col items-center justify-start py-[33.10615158081055px] px-0 box-border relative gap-[11.04px] max-w-full text-2xs-5">
          <div className="absolute my-0 mx-[!important] top-[-350.2px] left-[-150.6px] w-[461px] h-[657.2px] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-231.svg"
            />
          </div>
          <div className="w-[303px] flex flex-col items-center justify-start pt-0 px-5 pb-[11.035383224487305px] box-border gap-[2.76px] z-[1]">
            <div className="self-stretch relative leading-[100%] font-extrabold flex items-center">
              Our Team - The big brains behind Agrospectrum
            </div>
            <div className="relative text-3xl leading-[100%] font-extrabold text-white flex items-center mq450:text-lg mq450:leading-[18px]">{`Our Teams & Experts`}</div>
          </div>
          <div className="relative w-[621.8px] h-[274.2px] max-w-full z-[2] text-sm-8 text-white font-lexend-deca">
            <div
              className="absolute top-[1.9px] left-[20px] w-[175.1px] h-[229.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <img
                  className="absolute top-[0px] left-[0px] rounded-mid-1 w-[174.9px] h-[205.8px] object-cover"
                  alt=""
                  src="/base-7@2x.png"
                />
                <div className="absolute top-[173.8px] left-[0px] w-full h-[55.7px]">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-mid-1 bg-darkslateblue shadow-[0px_13.2px_26.48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(36px)] box-border w-full h-full border-[0.6px] border-solid border-gray-1500" />
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
              className="absolute top-[-0.3px] left-[200.9px] w-[211.6px] h-[274.2px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.1px] rounded-[16.55px] w-[211.4px] h-[239px] object-cover"
                alt=""
                src="/base-8@2x.png"
              />
              <div className="absolute top-[208px] left-[0px] w-[211.4px] h-[66.2px]">
                <div className="absolute top-[0px] left-[0px] rounded-[16.55px] bg-dimgray-200 shadow-[0px_13.2px_26.48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(36px)] box-border w-full h-full border-[0.6px] border-solid border-gray-1500" />
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
              className="absolute top-[1.9px] left-[416.1px] w-[185.7px] h-[229.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-[15.4px]"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.1px] rounded-[16.55px] w-[185.6px] h-[199.9px] object-cover"
                alt=""
                src="/base-9@2x.png"
              />
              <div className="absolute top-[168.8px] left-[0px] w-full h-[60.7px]">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] rounded-[16.55px] bg-darkslateblue shadow-[0px_13.2px_26.48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(36px)] box-border w-full h-full border-[0.6px] border-solid border-gray-1500" />
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
          <div className="flex flex-row items-start justify-start py-0 px-5 gap-[5.52px] z-[3]">
            <div className="relative bg-gainsboro-300 w-[8.3px] h-[3.3px]" />
            <div className="relative bg-goldenrod-200 w-[16.6px] h-[3.3px]" />
            <div className="relative bg-gainsboro-300 w-[8.3px] h-[3.3px]" />
          </div>
          <div className="absolute my-0 mx-[!important] top-[417.9px] left-[162.8px] w-[461px] h-[657.2px] flex items-center justify-center z-[4]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-212.svg"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[885.2px] left-[590.4px] w-[461px] h-[657.2px] flex items-center justify-center z-[5]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-221.svg"
            />
          </div>
          <div className="relative w-[813px] h-[352.6px] max-w-full z-[6] text-4xs-3 text-darkslategray-200 font-lexend-deca">
            <div
              className="absolute top-[49.4px] left-[64.4px] bg-white w-[728.3px] h-[247.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[212.7px] left-[402.1px] bg-dimgray-300 box-border w-[134.1px] h-[33.1px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.6px] border-solid border-goldenrod-200"
              data-animate-on-scroll
            />
            <div className="absolute top-[212.7px] left-[401.5px] w-[34.2px] h-[33.1px]">
              <img
                className="absolute top-[0px] left-[34.2px] w-full h-full object-contain"
                alt=""
                src="/base18.svg"
              />
              <img
                className="absolute top-[11.6px] left-[8.8px] w-[11px] h-[11px] overflow-hidden"
                alt=""

              />
            </div>
            <div className="absolute top-[223.7px] left-[447.9px] uppercase font-semibold">
              view produCts
            </div>
            <div className="absolute top-[296.5px] left-[36.8px] bg-goldenrod-200 w-[275.9px] h-[5.5px]" />
            <b
              className="absolute top-[100.1px] left-[401.5px] text-2xl tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] mq450:text-mid"
              data-animate-on-scroll
            >
              <p className="m-0">We support Agribusiness Industry</p>
              <p className="m-0">To Utilize modern Equipments</p>
              <p className="m-0">for a Better Result.</p>
            </b>
            <img
              className="absolute top-[-0.3px] left-[19.7px] w-[386.2px] h-[378.5px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              alt=""
              src="/gradients-1@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div
            className="relative w-[354.5px] h-[339.3px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full z-[7]"
            data-animate-on-scroll
          >
            <b className="absolute top-[-0.4px] left-[calc(50%_+_1.75px)] tracking-[1.66px] leading-[17.66px] uppercase">
              FAQ
            </b>
            <div className="absolute top-[27.2px] left-[20px] w-[314.5px] h-[298.3px] text-11xl-9 text-white">
              <b className="absolute top-[0px] left-[0px] tracking-[-1.1px] leading-[35.31px] mq450:text-lgi mq450:leading-[21px] mq800:text-6xl mq800:leading-[28px]">
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
            <div className="absolute top-[170.7px] left-[20px] w-[314.5px] h-[168.3px]">
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
        <div className="bg-gray-500 w-[420px] overflow-hidden hidden flex-col items-center justify-start py-[15.49566650390625px] px-0 box-border relative gap-[5.17px] max-w-full text-8xs-9">
          <div className="absolute my-0 mx-[!important] top-[-164.1px] left-[-70.5px] w-[215.8px] h-[307.6px] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-232.svg"
            />
          </div>
          <div className="w-[163px] flex flex-col items-center justify-start pt-0 px-5 pb-[5.16522216796875px] box-border gap-[1.29px] z-[1]">
            <div className="self-stretch relative leading-[100%] font-extrabold flex items-center">
              Our Team - The big brains behind Agrospectrum
            </div>
            <div className="relative text-3xs leading-[100%] font-extrabold text-white flex items-center">{`Our Teams & Experts`}</div>
          </div>
          <div
            className="relative w-[312.3px] h-[128.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[2] text-6xs-5 text-white font-lexend-deca"
            data-animate-on-scroll
          >
            <div
              className="absolute top-[0.7px] left-[20px] w-[82px] h-[107.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[8.01px] w-[81.9px] h-[96.3px] object-cover"
                  alt=""
                  src="/base-11@2x.png"
                />
                <div className="absolute top-[81.4px] left-[0px] w-full h-[26.1px]">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-[8.01px] bg-darkslateblue shadow-[0px_6.2px_12.4px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(16.85px)] box-border w-full h-full border-[0.3px] border-solid border-gray-1500" />
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
              className="absolute top-[-0.3px] left-[104.7px] w-[99px] h-[128.4px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.1px] rounded-[7.75px] w-[99px] h-[111.9px] object-cover"
                alt=""
                src="/base-12@2x.png"
              />
              <div className="absolute top-[97.4px] left-[0px] w-[99px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] rounded-[7.75px] bg-dimgray-200 shadow-[0px_6.2px_12.4px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(16.85px)] box-border w-full h-full border-[0.3px] border-solid border-gray-1500" />
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
              className="absolute top-[0.7px] left-[205.4px] w-[86.9px] h-[107.4px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xs-2"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.1px] rounded-[7.75px] w-[86.9px] h-[93.6px] object-cover"
                alt=""
                src="/base-13@2x.png"
              />
              <div className="absolute top-[79px] left-[0px] w-full h-[28.4px]">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] rounded-[7.75px] bg-darkslateblue shadow-[0px_6.2px_12.4px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(16.85px)] box-border w-full h-full border-[0.3px] border-solid border-gray-1500" />
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
          <div className="flex flex-row items-start justify-start py-0 px-5 gap-[2.58px] z-[3]">
            <div className="relative bg-gainsboro-300 w-[3.9px] h-[1.5px]" />
            <div className="relative bg-goldenrod-200 w-[7.7px] h-[1.5px]" />
            <div className="relative bg-gainsboro-300 w-[3.9px] h-[1.5px]" />
          </div>
          <div className="absolute my-0 mx-[!important] top-[195.4px] left-[76.2px] w-[215.8px] h-[307.6px] flex items-center justify-center z-[4]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-213.svg"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[414.2px] left-[276.3px] w-[215.8px] h-[307.6px] flex items-center justify-center z-[5]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-222.svg"
            />
          </div>
          <div className="relative w-[380px] h-[122px] max-w-full z-[6] text-9xs-9 text-darkslategray-200 font-lexend-deca">
            <div
              className="absolute top-[18.3px] left-[50px] bg-white box-border w-[281px] h-[93px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-black"
              data-animate-on-scroll
            />
            <div
              className="absolute top-[78.3px] left-[151px] w-[63px] h-[15.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="absolute top-[0px] left-[0.3px] bg-dimgray-300 box-border w-full h-full border-[0.3px] border-solid border-goldenrod-200" />
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
            <div className="absolute top-[110.3px] left-[28px] bg-goldenrod-200 w-[129.1px] h-[2.6px]" />
            <b
              className="absolute top-[35.3px] left-[147px] text-3xs-8 tracking-[-0.02em] capitalize [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <p className="m-0">We support Agribusiness Industry</p>
              <p className="m-0">To Utilize modern Equipments</p>
              <p className="m-0">for a Better Result.</p>
            </b>
            <img
              className="absolute top-[11.3px] left-[40px] w-[117px] h-[115px] overflow-hidden object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              alt=""
              src="/gradients-2@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div
            className="relative w-[187.2px] h-[158.8px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
            data-animate-on-scroll
          >
            <b className="absolute top-[-0.3px] left-[calc(50%_+_0.8px)] tracking-[0.77px] leading-[8.26px] uppercase">
              FAQ
            </b>
            <div className="absolute top-[12.6px] left-[20px] w-[147.2px] h-[140.2px] text-mini-5 text-white">
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
              className="absolute top-[79.7px] left-[20px] w-[147.2px] h-[78.8px] object-contain"
              alt=""
              src="/group-8932@2x.png"
            />
          </div>
        </div>
        <div className="bg-gray-500 w-[351px] overflow-hidden hidden flex-col items-center justify-start py-[12.949950218200684px] px-0 box-border relative gap-[4.32px] max-w-full text-8xs-1">
          <div className="absolute my-0 mx-[!important] top-[-137.2px] left-[-58.9px] w-[180.3px] h-[257.1px] flex items-center justify-center z-[0]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-233.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[4.316649913787842px] gap-[1.08px] z-[1]">
            <div className="relative leading-[100%] font-extrabold flex items-center pl-5 pr-5">
              Our Team - The big brains behind Agrospectrum
            </div>
            <div className="self-stretch relative text-3xs leading-[100%] font-extrabold text-white text-center flex items-center justify-center">{`Our Teams & Experts`}</div>
          </div>
          <div className="relative w-[267.6px] h-[107.3px] z-[2] text-7xs-4 text-white font-lexend-deca">
            <div
              className="absolute top-[0.5px] left-[20px] w-[68.5px] h-[89.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[6.69px] w-[68.4px] h-[80.5px] object-cover"
                  alt=""
                  src="/base-15@2x.png"
                />
                <div className="absolute top-[68px] left-[0px] w-full h-[21.8px]">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <div className="absolute top-[0px] left-[0px] rounded-[6.69px] bg-darkslateblue shadow-[0px_5.2px_10.36px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(14.08px)] box-border w-full h-full border-[0.2px] border-solid border-gray-1500" />
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
              className="absolute top-[-0.4px] left-[90.8px] w-[82.8px] h-[107.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0px] rounded-[6.47px] w-[82.7px] h-[93.5px] object-cover"
                alt=""
                src="/base-16@2x.png"
              />
              <div className="absolute top-[81.4px] left-[0px] w-[82.7px] h-[25.9px]">
                <div className="absolute top-[0px] left-[0px] rounded-[6.47px] bg-dimgray-200 shadow-[0px_5.2px_10.36px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(14.08px)] box-border w-full h-full border-[0.2px] border-solid border-gray-1500" />
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
              className="absolute top-[0.5px] left-[174.9px] w-[72.7px] h-[89.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-7xs"
              data-animate-on-scroll
            >
              <img
                className="absolute top-[0px] left-[0.1px] rounded-[6.47px] w-[72.6px] h-[78.2px] object-cover"
                alt=""
                src="/base-17@2x.png"
              />
              <div className="absolute top-[66px] left-[0px] w-full h-[23.8px]">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] rounded-[6.47px] bg-darkslateblue shadow-[0px_5.2px_10.36px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(14.08px)] box-border w-full h-full border-[0.2px] border-solid border-gray-1500" />
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
          <div className="flex flex-row items-start justify-start py-0 px-5 gap-[2.16px] z-[3]">
            <div className="relative bg-gainsboro-300 w-[3.2px] h-[1.3px]" />
            <div className="relative bg-goldenrod-200 w-[6.5px] h-[1.3px]" />
            <div className="relative bg-gainsboro-300 w-[3.2px] h-[1.3px]" />
          </div>
          <div className="absolute my-0 mx-[!important] top-[163.2px] left-[63.7px] w-[180.3px] h-[257.1px] flex items-center justify-center z-[4]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-214.svg"
            />
          </div>
          <div className="absolute my-0 mx-[!important] top-[346.1px] left-[230.9px] w-[180.3px] h-[257.1px] flex items-center justify-center z-[5]">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.84)]"
              alt=""
              src="/vector-223.svg"
            />
          </div>
          <div className="relative w-[324px] h-[102px] max-w-full z-[6] text-9xs-2 text-darkslategray-200 font-lexend-deca">
            <div
              className="absolute top-[15.3px] left-[45.05px] bg-white w-[234.8px] h-[77.7px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            />
            <div className="absolute top-[65.4px] left-[129.45px] w-[52.7px] h-[12.9px]">
              <div className="absolute top-[0px] left-[0.2px] bg-dimgray-300 box-border w-full h-full border-[0.2px] border-solid border-goldenrod-200" />
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
            <div className="absolute top-[92.1px] left-[26.65px] bg-goldenrod-200 w-[107.9px] h-[2.2px]" />
            <b
              className="absolute top-[29.5px] left-[126.15px] text-4xs-2 tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <p className="m-0">We support Agribusiness Industry</p>
              <p className="m-0">To Utilize modern Equipments</p>
              <p className="m-0">for a Better Result.</p>
            </b>
            <img
              className="absolute top-[9.4px] left-[36.65px] w-[97.8px] h-[96.1px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              alt=""
              src="/gradients7@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div
            className="relative w-[163px] h-[132.7px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
            data-animate-on-scroll
          >
            <b className="absolute top-[-0.3px] left-[calc(50%_+_0.6px)] tracking-[0.65px] leading-[6.91px] uppercase">
              FAQ
            </b>
            <div className="absolute h-[calc(100%_-_16.1px)] top-[10.5px] bottom-[5.6px] left-[20px] w-[123px] text-smi-1 text-white">
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
              className="absolute top-[66.6px] left-[20px] w-[123px] h-[65.8px] object-contain"
              alt=""
              src="/group-8933@2x.png"
            />
          </div>
        </div>
        <section
          className="self-stretch flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full text-center text-base text-white font-poppins"
          data-animate-on-scroll
        >
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] w-[1750px] h-[107px] overflow-hidden shrink-0 max-w-[101%]">
              <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1974px]">
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
                    className="absolute h-[calc(100%_-_26px)] top-[13px] bottom-[13px] left-[484px] max-h-full w-[169px] object-cover"
                    loading="eager"
                    alt=""
                    src="/capture@2x.png"
                  />
                  <img
                    className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                    loading="eager"
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
                    loading="eager"
                    alt=""
                    src="/download-6@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[1396px] max-h-full w-[100px] object-cover"
                    loading="eager"
                    alt=""
                    src="/images-1@2x.png"
                  />
                  <img
                    className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                    loading="eager"
                    alt=""
                    src="/download-12@2x.png"
                  />
                </div>
                <div className="absolute h-full top-[0px] bottom-[0px] left-[2034px] w-[1974px]">
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
                    className="absolute h-[calc(100%_-_26px)] top-[13px] bottom-[13px] left-[484px] max-h-full w-[169px] object-cover"
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
                    className="absolute h-full top-[0px] bottom-[0px] left-[1396px] max-h-full w-[100px] object-cover"
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
          <footer className="self-stretch bg-darkolivegreen-600 overflow-hidden flex flex-row items-center justify-center p-[30px] box-border max-w-full text-left text-15xl text-seagreen-100 font-poppins mq800:pt-5 mq800:pb-5 mq800:box-border">
            <div
              className="w-[1568px] flex flex-row flex-wrap items-start justify-start py-10 px-0 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] [row-gap:20px] max-w-full mq800:pt-[26px] mq800:pb-[26px] mq800:box-border"
              data-animate-on-scroll
            >
              <div className="w-[606px] flex flex-col items-start justify-start pt-[30px] pb-0 pr-2.5 pl-0 box-border max-w-full text-white">
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                    <h1 className="m-0 relative text-inherit tracking-[0.9px] leading-[46px] uppercase font-normal font-inherit mq450:text-xl mq450:leading-[28px] mq800:text-8xl mq800:leading-[37px]">
                      TRANSFORM with
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-26xl">
                    <div className="flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                      <h1 className="m-0 relative text-inherit tracking-[0.9px] leading-[46px] uppercase font-black font-inherit mq450:text-8xl mq450:leading-[28px] mq800:text-17xl mq800:leading-[37px]">
                        AGROSPECTRUM
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full text-xl text-gainsboro-200">
                      <div className="flex-1 relative leading-[32px] inline-block max-w-full mq450:text-base mq450:leading-[26px]">
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
                      className="cursor-pointer [border:none] py-[25px] pr-[55px] pl-14 bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center whitespace-nowrap"
                      onClick={onFrameButtonClick}
                    >
                      <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                        GET IN TOUCH
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[339px] max-w-full text-mini mq450:min-w-full mq800:gap-[20px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[2px] mq800:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-between min-w-[168px]">
                    <div className="relative tracking-[0.9px] leading-[46px] uppercase font-medium inline-block w-[95px]">
                      business
                    </div>
                    <div className="self-stretch h-36 flex flex-col items-start justify-between text-base text-white">
                      <div
                        className="self-stretch h-[29px] flex flex-row items-center justify-start cursor-pointer"
                        onClick={onNowWeAreClick}
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
                  <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[168px] mq450:gap-[17px]">
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
                <div className="self-stretch flex flex-row items-start justify-between gap-[0px] [row-gap:20px] text-base text-white mq800:flex-wrap">
                  <div className="w-[260.5px] h-[109px] flex flex-col items-start justify-start gap-[10px]">
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
                  <div className="w-[260.5px] flex flex-col items-start justify-start gap-[3px]">
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
              <div className="w-[441px] flex flex-col items-center justify-start py-[30px] pr-[5px] pl-[3px] box-border gap-[29px] max-w-full text-base mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="self-stretch h-[15px] flex flex-col items-start justify-start py-0 px-px box-border max-w-full text-white">
                  <div className="relative w-[33.6px] h-[22.1px] cursor-pointer flex items-center justify-center">
                    <img
                      className="w-full h-full cursor-pointer object-contain absolute left-[0px] top-[0px] [transform:scale(1.089)]"
                      alt=""
                      src="/arrow-61.svg"
                      onClick={onArrowIconClick}
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
                    <div
                      className="w-[354px] flex flex-row items-center justify-center max-w-full cursor-pointer"
                      onClick={onNowWereContainerClick}
                    >
                      <div className="flex-1 relative tracking-[1.37px] leading-[69.96px] uppercase font-medium inline-block max-w-full">
                        GET DIRECTIONS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-px box-border max-w-full shrink-0">
                  <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                    <div className="flex-1 relative tracking-[1.34px] leading-[68.62px] uppercase font-medium inline-block max-w-full">{`PHONE `}</div>
                  </div>
                  <b
                    className="self-stretch relative tracking-[1.34px] leading-[68.62px] capitalize text-white cursor-pointer"
                    onClick={onNowWereText2Click}
                  >
                    +233(0) 593 808 064
                  </b>
                </div>
                <div className="self-stretch h-[95px] flex flex-row items-start justify-start">
                  <div className="w-[254px] flex flex-col items-center justify-start gap-[2px]">
                    <div className="self-stretch relative tracking-[1.15px] leading-[58.74px] uppercase font-medium">
                      EMAIL
                    </div>
                    <b
                      className="relative tracking-[1.15px] leading-[58.74px] lowercase flex text-white items-center whitespace-nowrap cursor-pointer"
                      onClick={onNowWereText1Click}
                    >
                      customercare@bsl.com.gh
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px]">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-7 pl-0">
                      <div className="h-[39px] flex flex-col items-start justify-end py-0 px-0 box-border">
                        <div className="relative tracking-[1.15px] leading-[58.74px] uppercase font-medium">{`FOLLOW US `}</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-end justify-start gap-[17px]">
                      <div className="rounded-[31.88px] bg-darkgray-400 w-[46.3px] h-[46.8px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[19.9257869720459px] px-4 box-border">
                        <img
                          className="relative w-[13.9px] h-[15px]"
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <div className="rounded-[36.86px] bg-darkgray-400 w-[47.3px] h-[48.8px] flex flex-row items-center justify-center py-[19.9257869720459px] px-5 box-border">
                        <img
                          className="relative w-[7.8px] h-[15px]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <button className="cursor-pointer [border:none] py-[19.9257869720459px] px-3.5 bg-darkgray-400 rounded-[58.28px] w-[45.3px] h-[45.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center box-border">
                        <img
                          className="relative w-[16.7px] h-3.5"
                          alt=""
                          src="/vector1.svg"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[19.9257869720459px] px-[17px] bg-darkgray-400 rounded-[40.35px] w-[49.3px] h-[48.8px] flex flex-col items-center justify-center box-border">
                        <img
                          className="relative w-[16.1px] h-[15px]"
                          alt=""
                          src="/vector2.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="self-stretch bg-darkolivegreen-600 h-[25px] flex flex-row items-center justify-center max-w-full">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
              <div className="relative box-border w-[1329px] h-px border-t-[1px] border-solid border-white" />
            </div>
          </div>
          <div className="self-stretch bg-darkolivegreen-600 flex flex-row items-start justify-between py-2.5 px-[150px] box-border gap-[20px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[75px] mq1125:pr-[75px] mq1125:box-border mq1350:flex-wrap mq1350:justify-center">
            <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[406px] h-7 shrink-0 max-w-full">
              No 24 Maseru Street,East Legon -Accra
            </b>
            <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[533px] h-7 shrink-0 max-w-full">
              © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
            </b>
          </div>
        </section>
        <div className="relative w-[1199.7px] h-[503.2px] hidden max-w-full text-sm-9 text-seagreen-100 mq1350:h-auto mq1350:min-h-[503.2]">
          <div className="absolute top-[0px] left-[0px] w-[1199.7px] overflow-hidden flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_2.8px_43.05px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(41.66px)] h-[74.3px] overflow-hidden shrink-0">
              <div className="absolute top-[-3.5px] left-[43.7px] w-[2782.7px] h-[69.4px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1370.5px]">
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
                    className="absolute h-[calc(100%_-_20.8px)] top-[10.4px] bottom-[10.4px] left-[0px] max-h-full w-[58.3px] object-cover"
                    alt=""
                    src="/download-519@2x.png"
                  />
                  <img
                    className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                    alt=""
                    src="/download-39@2x.png"
                  />
                  <img
                    className="absolute h-[calc(100%_-_18px)] top-[9px] bottom-[9px] left-[336px] max-h-full w-[117.3px] object-cover"
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
                    className="absolute h-[calc(100%_-_20.1px)] top-[9.7px] bottom-[10.4px] left-[849.1px] max-h-full w-[86.1px] object-cover"
                    alt=""
                    src="/download-6-2@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[969.2px] max-h-full w-[69.4px] object-cover"
                    alt=""
                    src="/images-1-2@2x.png"
                  />
                  <img
                    className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                    alt=""
                    src="/download-1-2@2x.png"
                  />
                </div>
                <div className="absolute h-full top-[0px] bottom-[0px] left-[1412.2px] w-[1370.5px]">
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
                    className="absolute h-[calc(100%_-_20.8px)] top-[10.4px] bottom-[10.4px] left-[0px] max-h-full w-[58.3px] object-cover"
                    alt=""
                    src="/download-521@2x.png"
                  />
                  <img
                    className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                    alt=""
                    src="/download-310@2x.png"
                  />
                  <img
                    className="absolute h-[calc(100%_-_18px)] top-[9px] bottom-[9px] left-[336px] max-h-full w-[117.3px] object-cover"
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
                    className="absolute h-[calc(100%_-_20.1px)] top-[9.7px] bottom-[10.4px] left-[849.1px] max-h-full w-[86.1px] object-cover"
                    alt=""
                    src="/download-6-3@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[969.2px] max-h-full w-[69.4px] object-cover"
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
          <div className="absolute top-[74.3px] left-[0px] bg-darkolivegreen-600 w-full overflow-hidden flex flex-col items-center justify-start py-[20.828781127929688px] px-[55.54341506958008px] box-border max-w-full">
            <div
              className="self-stretch flex flex-row items-start justify-between py-[27.77170753479004px] px-0 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] gap-[0px] [row-gap:20px] max-w-full mq1350:flex-wrap"
              data-animate-on-scroll
            >
              <div className="w-[363px] flex flex-col items-start justify-start pt-[13.88585376739502px] px-0 pb-0 box-border gap-[5.55px] max-w-full shrink-0 text-white">
                <div className="self-stretch flex flex-row items-center justify-start p-[6.94292688369751px] text-4xl-6">
                  <div className="relative tracking-[0.62px] leading-[31.94px] uppercase mq450:text-lgi mq450:leading-[26px]">
                    TRANSFORM with
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start p-[6.94292688369751px] text-12xl-2">
                  <div className="relative tracking-[0.62px] leading-[31.94px] uppercase font-black mq450:text-lgi mq450:leading-[19px] mq800:text-6xl mq800:leading-[26px]">
                    AGROSPECTRUM
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[6.94292688369751px] pr-[7px] pl-[6.94292688369751px] box-border max-w-full text-gainsboro-200">
                  <div className="flex-1 relative leading-[22.22px] inline-block max-w-full">
                    <p className="m-0">{`Transform your agricultural practices and `}</p>
                    <p className="m-0">
                      <span className="font-poppins">
                        cultivate success with
                      </span>
                      <b className="font-poppins"> industry's best</b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className="m-0">
                      <span>{`and fostering a connected `}</span>
                      <b className="font-poppins">global community</b>
                    </p>
                  </div>
                </div>
                <div
                  className="w-[185px] flex flex-col items-start justify-start py-[6.942927360534668px] pr-[7px] pl-[6.942927360534668px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] cursor-pointer"
                  onClick={onFrameContainer3Click}
                  data-animate-on-scroll
                >
                  <div className="self-stretch rounded-[28.15px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-[43.7px] flex flex-row items-center justify-center py-[17.322946548461914px] px-[34.64589309692383px] box-border whitespace-nowrap">
                    <div className="self-stretch relative leading-[8.83px] flex items-center">
                      GET IN TOUCH
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[363px] flex flex-col items-start justify-start gap-[27.77px] max-w-full shrink-0 text-2xs-4">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.39px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-between min-w-[118px]">
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
                  <div className="flex-1 flex flex-col items-start justify-start gap-[23.61px] min-w-[118px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2.78px]">
                      <div className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase font-medium flex items-center h-[31.9px] shrink-0">{`CONTACT US `}</div>
                      <div className="self-stretch relative text-smi-5 tracking-[0.62px] leading-[31.94px] capitalize font-semibold text-white">
                        Agrospectrum Ltd.
                      </div>
                    </div>
                    <div className="self-stretch h-[76px] flex flex-col items-start justify-start gap-[4.86px] text-xs-1 text-white">
                      <div className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase font-extrabold flex items-center h-[25px] shrink-0">
                        EAST LEGON office
                      </div>
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[11.11px]">
                        <b className="self-stretch flex-1 relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center">
                          No 24 Maseru St
                        </b>
                        <b className="self-stretch flex-1 relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center">
                          East Legon,
                        </b>
                        <b className="self-stretch flex-1 relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center">
                          Accra - ghana
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[0px] [row-gap:20px] text-xs-1 text-white mq800:flex-wrap">
                  <div className="w-[181px] h-[76px] flex flex-col items-start justify-start gap-[6.94px]">
                    <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] uppercase">
                      BSL HEAD OFFICE
                    </b>
                    <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center">
                      No 24 Botwe
                    </b>
                    <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center">
                      Dzorwulu - Accra
                    </b>
                  </div>
                  <div className="w-[181px] h-[76px] flex flex-col items-start justify-start gap-[2.08px]">
                    <div className="self-stretch flex-1 relative tracking-[0.62px] leading-[31.94px] uppercase font-extrabold">
                      TAMALE office
                    </div>
                    <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center">
                      Tamale.
                    </b>
                    <b className="self-stretch relative tracking-[0.62px] leading-[31.94px] capitalize flex items-center h-[31.9px] shrink-0">
                      16 Dagomba Road,
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[363px] flex flex-col items-start justify-start py-[20.828781127929688px] pr-1 pl-[3.471463441848755px] box-border gap-[30.55px] max-w-full shrink-0 text-xs-1">
                <div className="self-stretch flex flex-row items-center justify-start gap-[29.85px] shrink-0 text-white">
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
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="relative w-[299.2px] h-0">
                    <div className="absolute w-full left-[0%] tracking-[0.93px] leading-[47.64px] uppercase font-medium flex items-center">{`PHONE `}</div>
                  </div>
                  <b className="self-stretch relative tracking-[0.93px] leading-[47.64px] capitalize flex text-white items-center h-[47.9px] shrink-0">
                    +233(0) 593 808 064
                  </b>
                </div>
                <div className="w-[183.3px] flex flex-col items-start justify-start gap-[6.94px] shrink-0">
                  <div className="self-stretch relative h-[20.1px]">
                    <div className="absolute w-[96.13%] top-[-51.74%] left-[-0.87%] tracking-[0.8px] leading-[40.78px] uppercase font-medium flex items-center">
                      EMAIL
                    </div>
                  </div>
                  <div className="self-stretch relative h-[18.1px] text-white">
                    <b className="absolute top-[4.9px] left-[-0.7px] tracking-[0.8px] leading-[40.78px] lowercase whitespace-nowrap">
                      customercare@bsl.com.gh
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-[3.471463441848755px] relative gap-[6.94px] shrink-0">
                  <div className="relative w-[91px] h-[27.1px] z-[0]">
                    <div className="absolute top-[-25.83%] left-[0%] tracking-[0.8px] leading-[40.78px] uppercase font-medium">{`FOLLOW US `}</div>
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[27.13px] left-[-0.8px] flex flex-row items-end justify-start gap-[11.8px] z-[1]">
                    <div className="rounded-[22.13px] bg-darkgray-400 w-[32.2px] h-[32.5px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13.834328651428223px] px-[11px] box-border">
                      <img
                        className="relative w-[9.7px] h-[10.4px]"
                        alt=""
                        src="/group1.svg"
                      />
                    </div>
                    <div className="rounded-[25.59px] bg-darkgray-400 w-[32.9px] h-[33.9px] flex flex-row items-center justify-center py-[13.834328651428223px] px-3.5 box-border">
                      <img
                        className="relative w-[5.4px] h-[10.4px]"
                        alt=""
                        src="/vector3.svg"
                      />
                    </div>
                    <div className="rounded-[40.47px] bg-darkgray-400 w-[31.5px] h-[31.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[13.834328651428223px] px-2.5 box-border">
                      <img
                        className="relative w-[11.6px] h-[9.7px]"
                        alt=""
                        src="/vector4.svg"
                      />
                    </div>
                    <div className="rounded-[28.01px] bg-darkgray-400 w-[34.2px] h-[33.9px] flex flex-col items-center justify-center py-[13.834328651428223px] px-[11px] box-border">
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
          <div className="absolute top-[477.2px] left-[-0.1px] bg-darkolivegreen-600 w-[1200px] flex flex-row items-end justify-center py-[6.94292688369751px] px-5 box-border gap-[0px] [row-gap:20px] max-w-full text-center text-xs-1 text-white mq1125:flex-wrap">
            <b className="relative tracking-[0.62px] leading-[31.94px] capitalize inline-block w-[496px] h-[19.4px] shrink-0 max-w-full">
              No 24 Maseru Street,East Legon -Accra
            </b>
            <b className="relative tracking-[0.62px] leading-[31.94px] capitalize inline-block w-[496px] h-[19.4px] shrink-0 max-w-full">
              © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
            </b>
          </div>
          <div className="absolute top-[460.3px] left-[0px] bg-darkolivegreen-600 w-[1199.7px] h-[17px] flex flex-row items-start justify-between gap-[0px] [row-gap:20px] max-w-full">
            <div className="self-stretch w-[1200px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
              <div className="relative box-border w-[922.69px] h-[0.69px] border-t-[0.7px] border-solid border-white" />
            </div>
          </div>
        </div>
        <div className="relative w-[960px] h-[408.9px] hidden max-w-full text-xs-1 text-seagreen-100 mq1125:h-auto mq1125:min-h-[408.9]">
          <div className="absolute top-[0px] left-[0px] w-[960px] overflow-hidden flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_2.2px_34.44px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(33.33px)] h-[59.4px] overflow-hidden shrink-0">
              <div className="absolute top-[-2.8px] left-[35px] w-[2226.7px] h-[55.6px]">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1096.7px]">
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
                    className="absolute h-full top-[0px] bottom-[0px] left-[775.6px] max-h-full w-[55.6px] object-cover"
                    alt=""
                    src="/images-1-4@2x.png"
                  />
                  <img
                    className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                    alt=""
                    src="/download-1-4@2x.png"
                  />
                </div>
                <div className="absolute h-full top-[0px] bottom-[0px] left-[1130px] w-[1096.7px]">
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
                    className="absolute h-full top-[0px] bottom-[0px] left-[775.6px] max-h-full w-[55.6px] object-cover"
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
          <div className="absolute top-[59.4px] left-[0px] bg-darkolivegreen-600 w-full overflow-hidden flex flex-col items-center justify-start py-[16.66666603088379px] px-[44.44443893432617px] box-border max-w-full">
            <div
              className="self-stretch flex flex-row flex-wrap items-start justify-between py-[22.222219467163086px] px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] gap-[0px] [row-gap:20px] shrink-0"
              data-animate-on-scroll
            >
              <div className="w-[290px] h-[222px] flex flex-col items-start justify-start pt-[11.111109733581543px] px-0 pb-0 box-border gap-[4.44px] text-white">
                <div className="self-stretch flex flex-row items-center justify-start p-[5.5555548667907715px] text-lg-9">
                  <div className="relative tracking-[0.5px] leading-[25.56px] uppercase">
                    TRANSFORM with
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start p-[5.5555548667907715px] text-6xl">
                  <div className="relative tracking-[0.5px] leading-[25.56px] uppercase font-black mq450:text-xl mq450:leading-[20px]">
                    AGROSPECTRUM
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 pb-[5.5555548667907715px] pr-1.5 pl-[5.5555548667907715px] text-gainsboro-200">
                  <div className="self-stretch flex-1 relative leading-[17.78px]">
                    <p className="m-0">{`Transform your agricultural practices and `}</p>
                    <p className="m-0">
                      <span className="font-poppins">
                        cultivate success with
                      </span>
                      <b className="font-poppins"> industry's best</b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className="m-0">
                      <span>{`and fostering a connected `}</span>
                      <b className="font-poppins">global community</b>
                    </p>
                  </div>
                </div>
                <div
                  className="w-[148px] flex flex-col items-start justify-start py-[5.55555534362793px] pr-1.5 pl-[5.55555534362793px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] cursor-pointer"
                  onClick={onFrameContainer32Click}
                  data-animate-on-scroll
                >
                  <div className="self-stretch rounded-[22.52px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-[35px] flex flex-row items-center justify-center py-[13.861384391784668px] px-[27.722768783569336px] box-border whitespace-nowrap">
                    <div className="relative leading-[7.07px]">
                      GET IN TOUCH
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[290px] flex flex-col items-start justify-start gap-[22.22px] text-4xs-3">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.11px] shrink-0 mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8.33px] min-w-[94px]">
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
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18.89px] min-w-[94px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2.22px]">
                      <div className="self-stretch relative tracking-[0.5px] leading-[25.56px] uppercase font-medium flex items-center h-[25.6px] shrink-0">{`CONTACT US `}</div>
                      <div className="self-stretch relative text-3xs tracking-[0.5px] leading-[25.56px] capitalize font-semibold text-white">
                        Agrospectrum Ltd.
                      </div>
                    </div>
                    <div className="self-stretch h-[60px] flex flex-col items-start justify-start gap-[3.89px] text-4xs-9 text-white">
                      <div className="self-stretch relative tracking-[0.5px] leading-[25.56px] uppercase font-extrabold flex items-center h-5 shrink-0">
                        EAST LEGON office
                      </div>
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8.89px]">
                        <b className="self-stretch flex-1 relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center">
                          No 24 Maseru St
                        </b>
                        <b className="self-stretch flex-1 relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center">
                          East Legon,
                        </b>
                        <b className="self-stretch flex-1 relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center">
                          Accra - ghana
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[0px] [row-gap:20px] shrink-0 text-4xs-9 text-white mq450:flex-wrap">
                  <div className="w-[145px] h-[49px] flex flex-col items-start justify-start gap-[5.56px]">
                    <b className="self-stretch flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase">
                      BSL HEAD OFFICE
                    </b>
                    <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center">
                      No 24 Botwe
                    </b>
                    <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center">
                      Dzorwulu - Accra
                    </b>
                  </div>
                  <div className="w-[145px] h-[61px] flex flex-col items-start justify-start gap-[1.67px]">
                    <div className="self-stretch flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase font-extrabold">
                      TAMALE office
                    </div>
                    <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center">
                      Tamale.
                    </b>
                    <b className="self-stretch relative tracking-[0.5px] leading-[25.56px] capitalize flex items-center h-[25.6px] shrink-0">
                      16 Dagomba Road,
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[290px] h-[203px] flex flex-col items-start justify-start py-[16.66666603088379px] pr-[3px] pl-[2.7777774333953857px] box-border gap-[24.44px] text-4xs-9">
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
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="relative w-[239.4px] h-0">
                    <div className="absolute w-full left-[0%] tracking-[0.75px] leading-[38.12px] uppercase font-medium flex items-center">{`PHONE `}</div>
                  </div>
                  <b className="self-stretch flex-1 relative tracking-[0.75px] leading-[38.12px] capitalize flex text-white items-center">
                    +233(0) 593 808 064
                  </b>
                </div>
                <div className="w-[146.7px] flex flex-col items-start justify-start gap-[5.56px]">
                  <div className="self-stretch relative h-[16.1px]">
                    <div className="absolute w-[96.11%] top-[-51.55%] left-[-0.95%] tracking-[0.64px] leading-[32.63px] uppercase font-medium flex items-center">
                      EMAIL
                    </div>
                  </div>
                  <div className="self-stretch relative h-[14.4px] text-white">
                    <b className="absolute top-[3.9px] left-[-0.6px] tracking-[0.64px] leading-[32.63px] lowercase whitespace-nowrap">
                      customercare@bsl.com.gh
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-[2.7777774333953857px] relative gap-[5.56px]">
                  <div className="relative w-[72.8px] h-[21.7px] z-[0]">
                    <div className="absolute top-[-27.65%] left-[0%] tracking-[0.64px] leading-[32.63px] uppercase font-medium">{`FOLLOW US `}</div>
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[21.7px] left-[-0.58px] flex flex-row items-end justify-start gap-[9.44px] z-[1]">
                    <div className="rounded-[17.71px] bg-darkgray-400 w-[25.7px] h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[11.069880485534668px] px-[9px] box-border">
                      <img
                        className="relative w-[7.7px] h-[8.3px]"
                        alt=""
                        src="/group2.svg"
                      />
                    </div>
                    <div className="rounded-[20.48px] bg-darkgray-400 w-[26.3px] h-[27.1px] flex flex-row items-center justify-center py-[11.069880485534668px] px-[11px] box-border">
                      <img
                        className="relative w-[4.3px] h-[8.3px]"
                        alt=""
                        src="/vector6.svg"
                      />
                    </div>
                    <div className="rounded-[32.38px] bg-darkgray-400 w-[25.2px] h-[25.2px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.069880485534668px] px-2 box-border">
                      <img
                        className="relative w-[9.3px] h-[7.8px]"
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                    <div className="rounded-[22.42px] bg-darkgray-400 w-[27.4px] h-[27.1px] flex flex-col items-center justify-center py-[11.069880485534668px] px-[9px] box-border">
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
          <div className="absolute top-[382.2px] left-[0px] bg-darkolivegreen-600 w-[960px] flex flex-row items-end justify-center py-[5.5555548667907715px] px-5 box-border gap-[0px] [row-gap:20px] max-w-full text-center text-4xs-9 text-white mq800:flex-wrap">
            <b className="relative tracking-[0.5px] leading-[25.56px] capitalize inline-block w-[397px] h-[15.6px] shrink-0 max-w-full">
              No 24 Maseru Street,East Legon -Accra
            </b>
            <b className="relative tracking-[0.5px] leading-[25.56px] capitalize inline-block w-[397px] h-[15.6px] shrink-0 max-w-full">
              © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
            </b>
          </div>
          <div className="absolute top-[368.4px] left-[0px] bg-darkolivegreen-600 w-[960px] h-3.5 flex flex-row items-start justify-between gap-[0px] [row-gap:20px] max-w-full">
            <div className="self-stretch w-[960px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
              <div className="relative box-border w-[738.56px] h-[0.56px] border-t-[0.6px] border-solid border-white" />
            </div>
          </div>
        </div>
        <div className="w-[428px] overflow-hidden hidden flex-col items-start justify-start max-w-full text-xs-6 text-white">
          <div className="relative [background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2.4px_37.73px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(36.51px)] w-[707px] h-[58px] overflow-hidden shrink-0 max-w-[165%]">
            <div className="absolute top-[-3px] left-[38.3px] w-[2438.7px] h-[60.8px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1201.1px]">
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
                  className="absolute h-full top-[0px] bottom-[0px] left-[849.4px] max-h-full w-[60.8px] object-cover"
                  alt=""
                  src="/images-1-6@2x.png"
                />
                <img
                  className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                  alt=""
                  src="/download-1-6@2x.png"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[1237.6px] w-[1201.1px]">
                <img
                  className="absolute top-[11.6px] left-[1163.4px] w-[37.7px] h-[37.7px] object-contain"
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
                  className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-contain"
                  alt=""
                  src="/download-525@2x.png"
                />
                <img
                  className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-contain"
                  alt=""
                  src="/download-312@2x.png"
                />
                <img
                  className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                  alt=""
                  src="/capture-7@2x.png"
                />
                <img
                  className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-contain"
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
                  className="absolute h-full top-[0px] bottom-[0px] left-[849.4px] max-h-full w-[60.8px] object-cover"
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
          <div className="self-stretch relative bg-darkolivegreen-600 h-[1060px] overflow-hidden shrink-0 max-w-full">
            <div className="absolute top-[808.9px] left-[59.3px] flex flex-col items-start justify-start text-seagreen-100">
              <div className="relative w-[57.8px] h-[21.1px]">
                <div className="absolute top-[-51.66%] left-[0%] tracking-[0.83px] leading-[42.67px] uppercase font-medium">
                  EMAIL
                </div>
              </div>
              <div className="self-stretch relative h-[18.9px] text-white">
                <b className="absolute top-[5.1px] left-[0px] tracking-[0.83px] leading-[42.67px] lowercase whitespace-nowrap">
                  customercare@bsl.com.gh
                </b>
              </div>
            </div>
            <div className="absolute top-[240.8px] left-[994.2px] w-[72.6px] h-[72.6px] overflow-hidden" />
            <div className="absolute top-[527.8px] left-[10.6px] w-[149.7px] h-[33.4px]" />
            <div className="absolute top-[578.4px] left-[53px] flex flex-row items-start justify-between gap-[20px] text-3xs-8">
              <div className="self-stretch w-[95px] flex flex-col items-start justify-start">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px]">
                    <b className="self-stretch flex-1 relative tracking-[0.55px] leading-[28.05px] uppercase">
                      BSL HEAD OFFICE
                    </b>
                    <b className="self-stretch relative tracking-[0.55px] leading-[28.05px] capitalize inline-block h-[9.8px] shrink-0">
                      No 24 Botwe
                    </b>
                    <b className="self-stretch relative tracking-[0.55px] leading-[28.05px] capitalize flex items-center">
                      Dzorwulu - Accra
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[98px] flex flex-col items-start justify-start gap-[2.29px] text-3xs-2">
                <div className="self-stretch relative h-[21.2px]">
                  <div className="absolute top-[-3.2px] left-[-0.4px] tracking-[0.52px] leading-[26.36px] uppercase font-extrabold inline-block w-[147.8px] h-[26.4px]">
                    TAMALE office
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9.17px]">
                  <div className="self-stretch relative h-[21.8px]">
                    <b className="absolute top-[10.6px] left-[-0.4px] tracking-[0.52px] leading-[26.36px] capitalize inline-block w-[147.8px] h-[26.4px]">
                      16 Dagomba Road,
                    </b>
                  </div>
                  <b className="self-stretch relative tracking-[0.52px] leading-[26.36px] capitalize flex items-center">
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
                <div className="self-stretch relative h-[18.9px] text-white">
                  <b className="absolute top-[5.1px] left-[0px] tracking-[0.98px] leading-[49.85px] capitalize">
                    +233(0) 593 808 064
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[374.5px] left-[53px] w-[323.5px] flex flex-row items-start justify-between gap-[20px] text-3xs-6">
              <div className="w-[92px] h-[151px] flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch relative h-[25px] text-4xs text-seagreen-100">
                  <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.54px] leading-[27.49px] uppercase font-medium inline-block">
                    business
                  </div>
                </div>
                <b className="self-stretch flex-1 relative tracking-[0.54px] leading-[27.49px] uppercase flex items-center">
                  ABOUT US
                </b>
                <b className="self-stretch flex-1 relative tracking-[0.54px] leading-[27.49px] uppercase flex items-center">
                  CAREERS
                </b>
                <b className="self-stretch flex-1 relative tracking-[0.54px] leading-[27.49px] uppercase flex items-center">
                  PARTNERS
                </b>
                <b className="self-stretch flex-1 relative tracking-[0.54px] leading-[27.49px] uppercase flex items-center">
                  PRIVACY POLICY
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-3xs-7">
                <div className="flex-1 w-[131px] flex flex-col items-start justify-start gap-[7.24px]">
                  <div className="relative w-[92.9px] h-[27.7px] text-4xs text-seagreen-100">
                    <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.54px] leading-[27.75px] uppercase font-medium inline-block">{`CONTACT US `}</div>
                  </div>
                  <div className="self-stretch relative h-[27.7px] text-2xs-9">
                    <div className="absolute top-[10.06px] left-[0px] tracking-[0.54px] leading-[27.75px] capitalize font-semibold">
                      Agrospectrum Ltd.
                    </div>
                  </div>
                  <div className="self-stretch relative h-7">
                    <div className="absolute top-[0.12px] left-[0px] tracking-[0.54px] leading-[27.75px] uppercase font-extrabold">
                      EAST LEGON office
                    </div>
                  </div>
                  <div className="self-stretch relative h-[17.5px]">
                    <b className="absolute top-[10.9px] left-[0px] tracking-[0.54px] leading-[27.75px] capitalize">
                      East Legon,
                    </b>
                  </div>
                  <b className="relative tracking-[0.54px] leading-[27.75px] capitalize flex items-center pr-5">
                    Accra - ghana
                  </b>
                  <b className="relative text-3xs-4 tracking-[0.65px] leading-[33.42px] capitalize flex items-center pr-5">
                    No 24 Maseru St
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[686.9px] left-[67.3px] flex flex-row items-center justify-between gap-[20px]">
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
            <div className="absolute top-[882.3px] left-[52.7px] flex flex-col items-start justify-start py-0 pr-1 pl-[3.6323156356811523px] gap-[7.26px] text-seagreen-100">
              <div className="self-stretch relative h-[28.3px] z-[0]">
                <div className="absolute top-[-24.73%] left-[0%] tracking-[0.83px] leading-[42.67px] uppercase font-medium">{`FOLLOW US `}</div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[28.3px] left-[0px] flex flex-row items-end justify-start gap-[12.35px] z-[1]">
                <div className="rounded-[23.16px] bg-darkgray-400 w-[33.7px] h-[34px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[14.475349426269531px] px-3 box-border">
                  <img
                    className="relative w-[10.1px] h-[10.9px]"
                    alt=""
                    src="/group3.svg"
                  />
                </div>
                <div className="rounded-[26.78px] bg-darkgray-400 w-[34.4px] h-[35.5px] flex flex-row items-center justify-center py-[14.475349426269531px] px-3.5 box-border">
                  <img
                    className="relative w-[5.7px] h-[10.9px]"
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
                <div className="rounded-[42.34px] bg-darkgray-400 w-[32.9px] h-[32.9px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[14.475349426269531px] px-2.5 box-border">
                  <img
                    className="relative w-[12.1px] h-[10.2px]"
                    alt=""
                    src="/vector10.svg"
                  />
                </div>
                <div className="rounded-[29.31px] bg-darkgray-400 w-[35.8px] h-[35.5px] flex flex-col items-center justify-center py-[14.475349426269531px] px-3 box-border">
                  <img
                    className="relative w-[11.7px] h-[10.9px]"
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[53.4px] left-[calc(50%_-_173.6px)] flex flex-col items-start justify-start gap-[14.76px] max-w-full text-4xl-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12.3px] max-w-full shrink-0">
                <div className="relative tracking-[0.55px] leading-[28.29px] uppercase inline-block w-[248.2px] h-[28.3px] shrink-0 pr-5 mq450:text-lgi mq450:leading-[23px]">
                  TRANSFORM with
                </div>
                <div className="self-stretch relative text-17xl-9 tracking-[0.55px] leading-[28.29px] uppercase font-black inline-block h-[28.3px] shrink-0 pr-[13px] mq450:text-3xl mq450:leading-[17px] mq800:text-11xl mq800:leading-[23px]">
                  AGROSPECTRUM
                </div>
                <div className="self-stretch flex flex-row items-center justify-center py-[6.1509809494018555px] px-1.5 box-border max-w-full shrink-0 text-smi-3 text-gainsboro-200">
                  <div className="flex-1 relative leading-[19.68px] inline-block max-w-full">
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
              <div className="rounded-[24.94px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[151.6px] h-[38.8px] flex flex-row items-center justify-center py-[15.347000122070312px] px-[30.694000244140625px] box-border whitespace-nowrap text-smi-3">
                <div className="self-stretch relative leading-[7.83px] flex items-center">
                  GET IN TOUCH
                </div>
              </div>
            </div>
            <div className="absolute top-[1004.3px] left-[-0.3px] w-[405.4px] h-[29.8px] text-2xs-2">
              <div className="absolute top-[-0.1px] left-[15.3px] flex flex-col items-center justify-start py-2.5 px-5 box-border gap-[10px] w-full">
                <div className="flex-1 w-[232px] flex flex-col items-center justify-start gap-[4px] z-[0]">
                  <div className="self-stretch relative tracking-[0.65px] leading-[33.42px] capitalize font-extralight">
                    Agrospectrum Ltd. All Rights Reserved.
                  </div>
                  <div className="flex-1 relative text-4xs-7 tracking-[0.65px] leading-[33.42px] capitalize font-light flex items-center w-[90.8px]">
                    © Copyright 2023
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[0.1px] left-[-0.1px] box-border w-[406.5px] h-[1.1px] z-[1] border-t-[1.1px] border-solid border-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[351.1px] overflow-hidden hidden flex-col items-start justify-start max-w-full text-3xs-5 text-white">
          <div className="relative [background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_2px_30.94px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(29.94px)] w-[579.9px] h-[47.6px] overflow-hidden shrink-0 max-w-[165%]">
            <div className="absolute top-[-2.5px] left-[31.4px] w-[2000.3px] h-[49.9px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[985.2px]">
                <img
                  className="absolute top-[9.5px] left-[954.2px] w-[30.9px] h-[30.9px] object-contain"
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
                  className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-contain"
                  alt=""
                  src="/download-527@2x.png"
                />
                <img
                  className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-contain"
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
                  className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-contain"
                  alt=""
                  src="/download-611@2x.png"
                />
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[696.7px] max-h-full w-[49.9px] object-cover"
                  alt=""
                  src="/images-1-8@2x.png"
                />
                <img
                  className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                  alt=""
                  src="/download-1-8@2x.png"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[1015.1px] w-[985.2px]">
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
                  className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-contain"
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
                  className="absolute h-full top-[0px] bottom-[0px] left-[696.7px] max-h-full w-[49.9px] object-cover"
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
          <div className="self-stretch relative bg-darkolivegreen-600 h-[869.4px] overflow-hidden shrink-0">
            <div className="absolute top-[663.5px] left-[48.6px] flex flex-col items-start justify-start text-seagreen-100">
              <div className="relative w-[51px] h-[17.3px]">
                <div className="absolute top-[-52.02%] left-[0%] tracking-[0.68px] leading-[35px] uppercase font-medium">
                  EMAIL
                </div>
              </div>
              <div className="self-stretch relative h-[15.5px] text-white">
                <b className="absolute top-[4.2px] left-[0px] tracking-[0.68px] leading-[35px] lowercase whitespace-nowrap">
                  customercare@bsl.com.gh
                </b>
              </div>
            </div>
            <div className="absolute top-[197.5px] left-[815.5px] w-[59.6px] h-[59.6px] overflow-hidden" />
            <div className="absolute top-[474.6px] left-[45.6px] flex flex-col items-start justify-start gap-[11px] text-5xs">
              <b className="self-stretch flex-1 relative tracking-[0.45px] leading-[23px] uppercase">
                BSL HEAD OFFICE
              </b>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[3px] pl-0 gap-[10px]">
                <b className="flex-1 relative tracking-[0.45px] leading-[23px] capitalize inline-block w-[57.5px]">
                  No 24 Botwe
                </b>
                <b className="self-stretch flex-1 relative tracking-[0.45px] leading-[23px] capitalize flex items-center">
                  Dzorwulu - Accra
                </b>
              </div>
            </div>
            <div className="absolute top-[432.9px] left-[8.7px] w-[122.7px] h-[27.4px]" />
            <div className="absolute top-[474.6px] left-[201.1px] flex flex-col items-start justify-start gap-[1.88px] text-5xs-5">
              <div className="self-stretch relative h-[17.4px]">
                <div className="absolute top-[-2.8px] left-[0px] tracking-[0.42px] leading-[21.62px] uppercase font-extrabold inline-block w-[121.3px] h-[21.6px]">
                  TAMALE office
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[7.52px]">
                <div className="self-stretch relative h-[17.9px]">
                  <b className="absolute top-[8.5px] left-[0px] tracking-[0.42px] leading-[21.62px] capitalize inline-block w-[121.3px] h-[21.6px]">
                    16 Dagomba Road,
                  </b>
                </div>
                <b className="relative tracking-[0.42px] leading-[21.62px] capitalize flex items-center pr-5">
                  Tamale.
                </b>
              </div>
            </div>
            <div className="absolute top-[591.4px] left-[11.1px] w-[113.2px] h-[20.9px] text-seagreen-100">
              <div className="absolute top-[16.7px] left-[37.5px] flex flex-col items-start justify-start gap-[3.58px]">
                <div className="relative w-[54.8px] h-[17.9px]">
                  <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.8px] leading-[40.89px] uppercase font-medium flex items-center">{`PHONE `}</div>
                </div>
                <div className="self-stretch relative h-[15.5px] text-white">
                  <b className="absolute top-[4.2px] left-[0px] tracking-[0.8px] leading-[40.89px] capitalize">
                    +233(0) 593 808 064
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[307.2px] left-[200.6px] flex flex-col items-start justify-start gap-[7.75px] text-5xs-9">
              <div className="self-stretch flex flex-col items-start justify-start gap-[5.94px]">
                <div className="relative w-[76.2px] h-[22.8px] text-5xs-4 text-seagreen-100">
                  <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.45px] leading-[22.76px] uppercase font-medium inline-block">{`CONTACT US `}</div>
                </div>
                <div className="self-stretch relative h-[22.8px] text-4xs-9">
                  <div className="absolute top-[8px] left-[0px] tracking-[0.45px] leading-[22.76px] capitalize font-semibold">
                    Agrospectrum Ltd.
                  </div>
                </div>
                <div className="self-stretch relative h-[22.8px]">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.45px] leading-[22.76px] uppercase font-extrabold">
                    EAST LEGON office
                  </div>
                </div>
                <div className="self-stretch relative h-[14.3px]">
                  <b className="absolute top-[8.9px] left-[0px] tracking-[0.45px] leading-[22.76px] capitalize">
                    East Legon,
                  </b>
                </div>
                <b className="relative tracking-[0.45px] leading-[22.76px] capitalize flex items-center pr-5">
                  Accra - ghana
                </b>
              </div>
              <b className="relative text-5xs-7 tracking-[0.54px] leading-[27.41px] capitalize flex items-center pr-5">
                No 24 Maseru St
              </b>
            </div>
            <div className="absolute top-[308.3px] left-[43.1px] w-[57.4px] flex flex-row flex-wrap items-start justify-start text-5xs-8">
              <div className="relative w-[59px] h-[22.6px] text-5xs-4 text-seagreen-100">
                <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.44px] leading-[22.55px] uppercase font-medium inline-block">
                  business
                </div>
              </div>
              <div className="relative w-[50px] h-[22.6px] ml-[-18.63px]">
                <b className="absolute top-[0px] left-[0px] tracking-[0.44px] leading-[22.55px] uppercase inline-block w-[126.5px] h-[22.6px]">{`ABOUT US `}</b>
              </div>
              <b className="relative tracking-[0.44px] leading-[22.55px] uppercase inline-block shrink-0 ml-[-18.63px]">
                CAREERS
              </b>
              <b className="relative tracking-[0.44px] leading-[22.55px] uppercase inline-block shrink-0 ml-[-18.63px]">
                PARTNERS
              </b>
              <b className="relative tracking-[0.44px] leading-[22.55px] uppercase flex items-center w-[71px] h-[17.6px] shrink-0 ml-[-18.63px]">
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
                className="flex-1 relative h-[29.8px] cursor-pointer"
                onClick={onNowWereContainer5Click}
              >
                <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[0.82px] leading-[41.69px] uppercase font-medium flex items-center">
                  GET DIRECTIONS
                </div>
              </div>
            </div>
            <div className="absolute top-[723.7px] left-[43.2px] flex flex-col items-start justify-start py-0 pr-[3px] pl-[2.979278564453125px] gap-[5.96px] text-seagreen-100">
              <div className="self-stretch relative h-[23.2px] z-[0]">
                <div className="absolute top-[-25.86%] left-[0%] tracking-[0.68px] leading-[35px] uppercase font-medium">{`FOLLOW US `}</div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[23.2px] left-[0px] flex flex-row items-end justify-start gap-[10.13px] z-[1]">
                <div className="rounded-lgi bg-darkgray-400 w-[27.6px] h-[27.9px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[11.872894287109375px] px-2.5 box-border">
                  <img
                    className="relative w-[8.3px] h-[8.9px]"
                    alt=""
                    src="/group4.svg"
                  />
                </div>
                <div className="rounded-[21.96px] bg-darkgray-400 w-[28.2px] h-[29.1px] flex flex-row items-center justify-center py-[11.872894287109375px] px-3 box-border">
                  <img
                    className="relative w-[4.6px] h-[8.9px]"
                    alt=""
                    src="/vector12.svg"
                  />
                </div>
                <div className="rounded-[34.73px] bg-darkgray-400 w-[27px] h-[27px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.872894287109375px] px-[9px] box-border">
                  <img
                    className="relative w-[9.9px] h-[8.3px]"
                    alt=""
                    src="/vector13.svg"
                  />
                </div>
                <div className="rounded-[24.04px] bg-darkgray-400 w-[29.4px] h-[29.1px] flex flex-col items-center justify-center py-[11.872894287109375px] px-2.5 box-border">
                  <img
                    className="relative w-[9.6px] h-[8.9px]"
                    alt=""
                    src="/vector14.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[43.8px] left-[calc(50%_-_142.45px)] flex flex-col items-start justify-start gap-[12.11px] text-lgi-2">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10.09px]">
                <div className="relative tracking-[0.45px] leading-[23.21px] uppercase inline-block w-[207.2px] h-[23.2px] shrink-0 pr-5">
                  TRANSFORM with
                </div>
                <div className="self-stretch relative text-11xl-3 tracking-[0.45px] leading-[23.21px] uppercase font-black inline-block h-[23.2px] shrink-0 pr-[11px] mq450:text-lg mq450:leading-[14px] mq800:text-5xl mq800:leading-[19px]">
                  AGROSPECTRUM
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-center p-[5.0451250076293945px] text-2xs-1 text-gainsboro-200">
                  <div className="self-stretch flex-1 relative leading-[16.14px]">
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
              <div className="rounded-[20.46px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[124.3px] flex flex-row items-center justify-center py-[12.587835311889648px] px-[25.175670623779297px] box-border whitespace-nowrap text-2xs-1">
                <div className="relative leading-[6.42px]">GET IN TOUCH</div>
              </div>
            </div>
            <div className="absolute top-[823.8px] left-[-0.3px] w-[332.5px] h-[24.4px] text-4xs-3">
              <div className="absolute top-[0px] left-[12.5px] flex flex-col items-start justify-start py-[8.202146530151367px] pr-[71px] pl-[70.53846740722656px] box-border gap-[8.2px] w-full">
                <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[3.28px] z-[0]">
                  <div className="self-stretch relative tracking-[0.54px] leading-[27.41px] capitalize font-extralight">
                    Agrospectrum Ltd. All Rights Reserved.
                  </div>
                  <div className="flex-1 relative text-5xs-2 tracking-[0.54px] leading-[27.41px] capitalize font-light flex items-center w-[74.5px]">
                    © Copyright 2023
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[-0.4px] left-[-0.4px] box-border w-[333.4px] h-[0.9px] z-[1] border-t-[0.9px] border-solid border-white" />
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

export default ContactPAge;

                src="/arrowright1.svg"