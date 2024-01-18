import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import DrwawerMenu from "./drwawer-menu";
import PortalDrawer from "./portal-drawer";

const Homepage1: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);
  const [isDrwawerMenu1Open, setDrwawerMenu1Open] = useState(false);
  const [isDrwawerMenu2Open, setDrwawerMenu2Open] = useState(false);
  const [isDrwawerMenu3Open, setDrwawerMenu3Open] = useState(false);

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const onHomeCContainerClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/ymjBOyJAg9AcGffejgsKEs/agrospectrum_v1.1?type=design&node-id=333-397&t=2kfRSIykcEIvJooL-0&scaling=scale-down-width&page-id=333%3A395&starting-point-node-id=333%3A397&show-proto-sidebar=1&hide-ui=1"
    );
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

  const onClipPathGroup4Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup13Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup23Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(true);
  }, []);

  const closeDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(false);
  }, []);

  const onClipPathGroup5Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup14Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup24Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu2 = useCallback(() => {
    setDrwawerMenu2Open(true);
  }, []);

  const closeDrwawerMenu2 = useCallback(() => {
    setDrwawerMenu2Open(false);
  }, []);

  const onClipPathGroup6Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup15Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup25Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu3 = useCallback(() => {
    setDrwawerMenu3Open(true);
  }, []);

  const closeDrwawerMenu3 = useCallback(() => {
    setDrwawerMenu3Open(false);
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

  const onBaseClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onFrameButton2Click = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onNowWereTextClick = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  const onFrameButton3Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameButton4Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameButton5Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

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

  const onFrameButton6Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
  }, []);

  const onNowWereText2Click = useCallback(() => {
    // Please sync "5-careers" to the project
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

  const onFrameButton7Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
  }, []);

  const onNowWereText3Click = useCallback(() => {
    // Please sync "5-careers" to the project
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
      <div className="relative bg-gray-500 w-full overflow-hidden flex flex-col items-start justify-start text-left text-sm-2 text-goldenrod-500 font-poppins">
        <div className="w-[1752px] h-20 flex flex-col items-start justify-start">
          <nav
            className="m-0 bg-gray-700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border w-[1728px] h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
            id="navBar"
          >
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos15]:hover:flex">
                  <div
                    className="oursubsidiarylogos15 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
                    id="ourSubsidiaries"
                  >
                    <img
                      className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group19.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group151@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group161@2x.png"
                      onClick={onClipPathGroup2Click}
                    />
                    <img
                      className="absolute h-[68.97%] w-[29.27%] top-[10.34%] right-[1.87%] bottom-[20.69%] left-[68.86%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-9392.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[7px] left-[5px] w-[15px] h-[21.9px] object-cover"
                    alt=""
                    src="/images-2-14@2x.png"
                  />
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo71@2x.png"
                  />
                </div>
              </div>
              <div className="w-[649px] flex flex-row items-center justify-end gap-[20px]">
                <div
                  className="w-[42px] flex flex-col items-start justify-start gap-[5px] cursor-pointer"
                  onClick={onHomeCContainerClick}
                >
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[42px] h-[18px] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                    <div
                      className="absolute top-[-5.56%] left-[0%] text-smi tracking-[0.32px] leading-[19.2px] font-medium font-poppins text-white text-left cursor-pointer"
                      onClick={onLinkAboutClick}
                    >
                      Home
                    </div>
                  </button>
                  <img
                    className="relative max-h-full w-10 object-cover"
                    alt=""
                    src="/line-12@2x.png"
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
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
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
            className="m-0 [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] box-border w-[1200px] h-20 hidden flex-row items-center justify-center py-3.5 px-[90px] border-[1px] border-solid border-gray-1800 lg:flex md:hidden sm:hidden"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos15]:hover:flex">
                  <div
                    className="oursubsidiarylogos15 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
                    id="ourSubsidiaries"
                  >
                    <img
                      className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group19.svg"
                      onClick={onClipPathGroup3Click}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group40@2x.png"
                      onClick={onClipPathGroup12Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group161@2x.png"
                      onClick={onClipPathGroup22Click}
                    />
                    <img
                      className="absolute h-[68.97%] w-[29.27%] top-[10.34%] right-[1.87%] bottom-[20.69%] left-[68.86%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-9392.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[7px] left-[5px] w-[15px] h-[21.9px] object-cover"
                    alt=""
                    src="/images-2-14@2x.png"
                  />
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo71@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-[30px]">
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
          <nav
            className="m-0 [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] box-border w-[960px] h-20 hidden flex-row items-center justify-center py-3.5 px-[50px] border-[1px] border-solid border-gray-1800 md:flex sm:hidden"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos15]:hover:flex">
                  <div
                    className="oursubsidiarylogos15 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
                    id="ourSubsidiaries"
                  >
                    <img
                      className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group19.svg"
                      onClick={onClipPathGroup4Click}
                    />
                    <img
                      className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group40@2x.png"
                      onClick={onClipPathGroup13Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group161@2x.png"
                      onClick={onClipPathGroup23Click}
                    />
                    <img
                      className="absolute h-[68.97%] w-[29.27%] top-[10.34%] right-[1.87%] bottom-[20.69%] left-[68.86%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-9392.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[7px] left-[5px] w-[15px] h-[21.9px] object-cover"
                    alt=""
                    src="/images-2-14@2x.png"
                  />
                </button>
                <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo71@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-[20px]">
                <div
                  className="h-[27px] flex flex-col items-center justify-start gap-[5px] cursor-pointer"
                  onClick={openDrwawerMenu1}
                >
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-[5px]" />
                </div>
                <button className="cursor-pointer py-3 px-5 bg-[transparent] rounded-31xl box-border w-[152px] flex flex-row items-center justify-between border-[1px] border-solid border-olivedrab-100">
                  <div className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b6c2f1,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav
            className="m-0 [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] w-[420px] h-[60px] hidden flex-row items-center justify-center py-3.5 px-5 box-border sm:flex mq350small:hidden"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between py-0 px-2.5">
              <div className="self-stretch rounded-[99px] bg-gray-800 [backdrop-filter:blur(250.6px)] w-40 flex flex-row items-center justify-start py-[5px] px-5 box-border gap-[14px]">
                <div className="relative w-[53.9px] h-[33.9px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo81@2x.png"
                  />
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative w-[27.7px] [&_.oursubsidiarylogos18]:hover:flex">
                  <div
                    className="oursubsidiarylogos18 absolute top-[1.1px] left-[35.1px] w-[314.9px] h-[23.1px] hidden"
                    id="ourSubsidiaries"
                  >
                    <img
                      className="absolute h-[86.15%] w-[23.69%] top-[12.55%] right-[76.31%] bottom-[1.3%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group31.svg"
                      onClick={onClipPathGroup5Click}
                    />
                    <img
                      className="absolute h-[83.55%] w-[12.67%] top-[-1.3%] right-[59.23%] bottom-[17.75%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group171@2x.png"
                      onClick={onClipPathGroup14Click}
                    />
                    <img
                      className="absolute h-[80.95%] w-[21.66%] top-[6.93%] right-[34.3%] bottom-[12.12%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group24@2x.png"
                      onClick={onClipPathGroup24Click}
                    />
                    <img
                      className="absolute h-[68.83%] w-[29.25%] top-[10.39%] right-[1.91%] bottom-[20.78%] left-[68.85%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-93911.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[8.3px] left-[18.7px] w-[17.5px] h-3 object-contain"
                    alt=""
                    src="/images-2-111@2x.png"
                  />
                </button>
              </div>
              <div className="flex flex-row items-center justify-end">
                <div
                  className="h-[27px] flex flex-col items-center justify-start gap-[5px] cursor-pointer"
                  onClick={openDrwawerMenu2}
                >
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
                  <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-[5px]" />
                </div>
              </div>
            </div>
          </nav>
          <nav
            className="m-0 [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] w-[350px] h-[55px] hidden flex-row items-center justify-center py-3.5 px-[15px] box-border gap-[10px] mq350small:flex"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="self-stretch rounded-[84.15px] bg-gray-800 [backdrop-filter:blur(213.01px)] w-[121.6px] flex flex-row items-center justify-center py-[4.25px] px-[17px] box-border gap-[11.9px]">
                <div className="relative w-[45.8px] h-[28.8px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo91@2x.png"
                  />
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative w-[23.5px] [&_.oursubsidiarylogos19]:hover:flex">
                  <div
                    className="oursubsidiarylogos19 absolute top-[0.9px] left-[29.8px] w-[267.6px] h-[19.6px] hidden"
                    id="ourSubsidiaries"
                  >
                    <img
                      className="absolute h-[86.22%] w-[23.69%] top-[12.76%] right-[76.31%] bottom-[1.02%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src="/clip-path-group61.svg"
                      onClick={onClipPathGroup6Click}
                    />
                    <img
                      className="absolute h-[83.67%] w-[12.67%] top-[-1.02%] right-[59.23%] bottom-[17.35%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group191@2x.png"
                      onClick={onClipPathGroup15Click}
                    />
                    <img
                      className="absolute h-[81.12%] w-[21.67%] top-[7.14%] right-[34.27%] bottom-[11.73%] left-[44.06%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group41@2x.png"
                      onClick={onClipPathGroup25Click}
                    />
                    <img
                      className="absolute h-[69.39%] w-[29.26%] top-[10.2%] right-[1.87%] bottom-[20.41%] left-[68.87%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-93921.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[7.1px] left-[15.9px] w-[14.9px] h-[10.2px] object-contain"
                    alt=""
                    src="/images-2-17@2x.png"
                  />
                </button>
              </div>
            </div>
            <div
              className="h-[27px] flex flex-col items-center justify-start gap-[5px] cursor-pointer"
              onClick={openDrwawerMenu3}
            >
              <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
              <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
              <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-[5px]" />
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-start justify-start">
          <section className="w-[1728px] overflow-hidden flex flex-col items-start justify-start py-36 px-[200px] box-border gap-[10px] bg-[url('/desktop--11@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-71xl text-white font-poppins lg:hidden">
            <b
              className="self-stretch relative tracking-[0.4px] leading-[100px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div
              className="flex flex-row items-center justify-start gap-[15px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-76xl-1"
              data-animate-on-scroll
            >
              <div className="rounded-[11.89px] bg-goldenrod-200 w-[498.3px] flex flex-row items-center justify-center py-[5.94444465637207px] px-[11.88888931274414px] box-border hover:bg-gray-500 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
                <b className="relative tracking-[0.48px] leading-[95.11px]">
                  Platform
                </b>
              </div>
              <b className="relative text-71xl tracking-[0.4px] leading-[80px] flex whitespace-pre-wrap items-center w-[735px] shrink-0">{`for the  future `}</b>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xl"
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
              className="w-[1089px] flex flex-row items-center justify-between [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg"
              data-animate-on-scroll
            >
              <div className="relative w-[125.8px] h-[47px]">
                <Box
                  className="absolute top-[0px] left-[0px]"
                  sx={{ width: 47 }}
                >
                  <CircularProgress />
                </Box>
                <img
                  className="absolute top-[18.8px] left-[65.8px] w-[13px] h-[13px]"
                  alt=""
                  src="/group-1886.svg"
                />
                <img
                  className="absolute top-[18.8px] left-[112.8px] w-[13px] h-[13px]"
                  alt=""
                  src="/group-1886.svg"
                />
              </div>
              <div className="relative w-[42px] h-[18px]">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[24px]">
                  <div className="relative leading-[100%] font-medium opacity-[0.4]">
                    1
                  </div>
                  <b className="relative leading-[100%]">3</b>
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-center py-[59px] px-[666px]">
              <img
                className="relative rounded-3xl w-[35px] h-[81px] overflow-hidden shrink-0"
                alt=""
                src="/frame-75.svg"
              />
            </div>
          </section>
          <section className="w-[1200px] overflow-hidden hidden flex-col items-start justify-start py-20 px-[120px] box-border gap-[10px] bg-[url('/12002@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-47xl-7 text-white font-poppins lg:flex md:hidden">
            <b
              className="relative tracking-[0.38px] leading-[76.24px] flex items-center w-[953px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div
              className="w-[887px] flex flex-row items-start justify-start gap-[13.3px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-52xl"
              data-animate-on-scroll
            >
              <div className="rounded-[8.87px] bg-goldenrod-200 w-[371.8px] flex flex-row items-center justify-center py-[4.434999942779541px] px-[8.869999885559082px] box-border hover:bg-gray-500">
                <b className="relative tracking-[0.35px] leading-[70.96px]">
                  Platform
                </b>
              </div>
              <b className="relative text-43xl-1 tracking-[0.35px] leading-[70.96px] flex whitespace-pre-wrap items-center w-[477.8px] shrink-0">{`for the  future `}</b>
            </div>
            <div
              className="w-[921px] flex flex-col items-center justify-center p-[9.210000038146973px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg-4"
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
              className="w-[948px] flex flex-row items-center justify-between [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mid-1"
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
                  src="/group-18811.svg"
                />
                <img
                  className="absolute top-[17.8px] left-[106.9px] w-[12.3px] h-[12.3px]"
                  alt=""
                  src="/group-1895.svg"
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
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[28.14000129699707px] pr-[550px] pl-[380px]">
              <img
                className="relative rounded-[20.64px] w-[32.8px] h-[76px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_infinite_normal_forwards_bounce-top] opacity-[1]"
                alt=""
                src="/frame-711.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className="w-[960px] overflow-hidden hidden flex-col items-start justify-start py-10 px-[90px] box-border gap-[10px] bg-[url('/9601@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-38xl-1 text-white font-poppins md:flex sm:hidden">
            <b
              className="relative tracking-[0.33px] leading-[65.3px] flex items-center w-[653px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
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
              <b className="relative text-32xl tracking-[0.29px] leading-[58.3px] flex whitespace-pre-wrap items-center w-[392.6px] shrink-0">{`for the  future `}</b>
            </div>
            <div
              className="w-[655px] flex flex-col items-center justify-center p-[8.1875px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-base-4"
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
              className="w-[619px] flex flex-row items-center justify-between [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm-9"
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
                  src="/group-18821.svg"
                />
                <img
                  className="absolute top-[14.5px] left-[87.3px] w-[10.1px] h-[10.1px]"
                  alt=""
                  src="/group-18911.svg"
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
                src="/frame-721.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className="w-[420px] overflow-hidden hidden flex-col items-start justify-start pt-[47.65595245361328px] px-[39.374996185302734px] pb-[23.82797622680664px] box-border gap-[11.91px] bg-[url('/4201@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-16xl-7 text-white font-poppins sm:flex mq350small:hidden">
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
              <b className="relative text-16xl-7 tracking-[0.13px] leading-[25.51px] flex whitespace-pre-wrap items-center w-[308.6px]">{`for the  future `}</b>
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
                  src="/group-18831.svg"
                />
                <img
                  className="absolute top-[6.4px] left-[38.2px] w-[4.4px] h-[4.4px]"
                  alt=""
                  src="/group-18921.svg"
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
            <div className="w-[293.6px] overflow-hidden flex flex-row items-start justify-center py-[9.745311737060547px] px-[216.34593200683594px] box-border">
              <img
                className="relative rounded-[7.15px] w-[11.4px] h-[26.3px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_infinite_normal_forwards_bounce-top] opacity-[1]"
                alt=""
                src="/frame-731.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className="w-[352.5px] overflow-hidden hidden flex-col items-start justify-start pt-10 px-[33.04938507080078px] pb-5 box-border gap-[10px] bg-[url('/3503@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-11xl text-white font-poppins mq350small:flex">
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
                  src="/group-18841.svg"
                />
                <img
                  className="absolute top-[5.3px] left-[32.1px] w-[3.7px] h-[3.7px]"
                  alt=""
                  src="/group-18931.svg"
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
                src="/frame-751@2x.png"
                data-animate-on-scroll
              />
            </div>
          </section>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="[background:linear-gradient(90.1deg,_#fbfbfb,_#084707)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] overflow-hidden flex flex-col items-start justify-start py-0 px-[34px] lg:hidden">
            <div className="flex flex-col items-start justify-start">
              <div className="relative w-[1658px] h-[84px]">
                <img
                  className="absolute top-[16px] left-[1605.9px] w-[52.1px] h-[52.1px] object-cover"
                  alt=""
                  src="/download-2221@2x.png"
                />
                <img
                  className="absolute top-[16.8px] left-[264.6px] w-[87.4px] h-[57.1px] object-cover"
                  alt=""
                  src="/download-5421@2x.png"
                />
                <img
                  className="absolute top-[5.9px] left-[1475.7px] w-[57.1px] h-[63px] object-cover"
                  alt=""
                  src="/download211@2x.png"
                />
                <img
                  className="absolute top-[12.6px] left-[0px] w-[70.6px] h-[58.8px] object-cover"
                  alt=""
                  src="/download-5431@2x.png"
                />
                <img
                  className="absolute top-[20.2px] left-[136.1px] w-[49.6px] h-[48.7px] object-cover"
                  alt=""
                  src="/download-3211@2x.png"
                />
                <img
                  className="absolute top-[10.9px] left-[406.5px] w-[141.9px] h-[62.2px] object-cover"
                  alt=""
                  src="/capture32@2x.png"
                />
                <img
                  className="absolute top-[16.8px] left-[597.2px] w-[248.6px] h-[52.1px] object-cover"
                  alt=""
                  src="/mofa-color271@2x.png"
                />
                <img
                  className="absolute top-[24.4px] left-[881.1px] w-[115.9px] h-[39.5px] object-cover mix-blend-difference"
                  alt=""
                  src="/images211@2x.png"
                />
                <img
                  className="absolute top-[11.8px] left-[1027.2px] w-[104.1px] h-[59.6px] object-cover"
                  alt=""
                  src="/download-6211@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1172.5px] w-[84px] h-[84px] object-cover"
                  alt=""
                  src="/images-1211@2x.png"
                />
                <img
                  className="absolute top-[15.1px] left-[1301px] w-[137.7px] h-[54.6px] object-cover"
                  alt=""
                  src="/download-1221@2x.png"
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
                  src="/download-233@2x.png"
                />
                <img
                  className="absolute top-[11.7px] left-[183.9px] w-[60.7px] h-[39.7px] object-cover"
                  alt=""
                  src="/download-562@2x.png"
                />
                <img
                  className="absolute top-[4.1px] left-[1026px] w-[39.7px] h-[43.8px] object-cover"
                  alt=""
                  src="/download221@2x.png"
                />
                <img
                  className="absolute top-[8.8px] left-[0px] w-[49.1px] h-[40.9px] object-cover"
                  alt=""
                  src="/download-5451@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[94.6px] w-[34.5px] h-[33.9px] object-cover"
                  alt=""
                  src="/download-3221@2x.png"
                />
                <img
                  className="absolute top-[7.6px] left-[282.6px] w-[98.7px] h-[43.2px] object-cover"
                  alt=""
                  src="/capture221@2x.png"
                />
                <img
                  className="absolute top-[11.7px] left-[415.2px] w-[172.9px] h-[36.2px] object-cover"
                  alt=""
                  src="/mofa-color221@2x.png"
                />
                <img
                  className="absolute top-[16.9px] left-[612.6px] w-[80.6px] h-[27.4px] object-cover mix-blend-difference"
                  alt=""
                  src="/images221@2x.png"
                />
                <img
                  className="absolute top-[8.2px] left-[714.2px] w-[72.4px] h-[41.5px] object-cover"
                  alt=""
                  src="/download-6221@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[815.2px] w-[58.4px] h-[58.4px] object-cover"
                  alt=""
                  src="/images-1221@2x.png"
                />
                <img
                  className="absolute top-[10.5px] left-[904.5px] w-[95.8px] h-[38px] object-cover"
                  alt=""
                  src="/download-1231@2x.png"
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
                  src="/download-2241@2x.png"
                />
                <img
                  className="absolute top-[9.3px] left-[147.2px] w-[48.6px] h-[31.8px] object-cover"
                  alt=""
                  src="/download-5461@2x.png"
                />
                <img
                  className="absolute top-[3.3px] left-[820.8px] w-[31.8px] h-[35px] object-cover"
                  alt=""
                  src="/download231@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[0px] w-[39.2px] h-[32.7px] object-cover"
                  alt=""
                  src="/download-5471@2x.png"
                />
                <img
                  className="absolute top-[11.2px] left-[75.7px] w-[27.6px] h-[27.1px] object-cover"
                  alt=""
                  src="/download-3231@2x.png"
                />
                <img
                  className="absolute top-[6.1px] left-[226.1px] w-[79px] h-[34.6px] object-cover"
                  alt=""
                  src="/capture33@2x.png"
                />
                <img
                  className="absolute top-[9.3px] left-[332.2px] w-[138.3px] h-[29px] object-cover"
                  alt=""
                  src="/mofa-color231@2x.png"
                />
                <img
                  className="absolute top-[13.5px] left-[490.1px] w-[64.5px] h-[22px] object-cover mix-blend-difference"
                  alt=""
                  src="/images32@2x.png"
                />
                <img
                  className="absolute top-[6.5px] left-[571.3px] w-[57.9px] h-[33.2px] object-cover"
                  alt=""
                  src="/download-6231@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[652.2px] w-[46.7px] h-[46.7px] object-cover"
                  alt=""
                  src="/images-1231@2x.png"
                />
                <img
                  className="absolute top-[8.4px] left-[723.6px] w-[76.6px] h-[30.4px] object-cover"
                  alt=""
                  src="/download-1241@2x.png"
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
                  src="/download-2251@2x.png"
                />
                <img
                  className="absolute top-[4.4px] left-[69.3px] w-[22.9px] h-[15px] object-cover"
                  alt=""
                  src="/download-5481@2x.png"
                />
                <img
                  className="absolute top-[1.5px] left-[386.5px] w-[15px] h-[16.5px] object-cover"
                  alt=""
                  src="/download241@2x.png"
                />
                <img
                  className="absolute top-[3.3px] left-[0px] w-[18.5px] h-[15.4px] object-cover"
                  alt=""
                  src="/download-5491@2x.png"
                />
                <img
                  className="absolute top-[5.3px] left-[35.6px] w-[13px] h-[12.8px] object-cover"
                  alt=""
                  src="/download-3241@2x.png"
                />
                <img
                  className="absolute top-[2.9px] left-[106.5px] w-[37.2px] h-[16.3px] object-cover"
                  alt=""
                  src="/capture241@2x.png"
                />
                <img
                  className="absolute top-[4.4px] left-[156.4px] w-[65.1px] h-[13.6px] object-cover"
                  alt=""
                  src="/mofa-color28@2x.png"
                />
                <img
                  className="absolute top-[6.4px] left-[230.8px] w-[30.4px] h-[10.3px] object-cover mix-blend-difference"
                  alt=""
                  src="/images241@2x.png"
                />
                <img
                  className="absolute top-[3.1px] left-[269.1px] w-[27.3px] h-[15.6px] object-cover"
                  alt=""
                  src="/download-632@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[307.1px] w-[22px] h-[22px] object-cover"
                  alt=""
                  src="/images-1241@2x.png"
                />
                <img
                  className="absolute top-[4px] left-[340.8px] w-[36.1px] h-[14.3px] object-cover"
                  alt=""
                  src="/download-1251@2x.png"
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
                  src="/download-234@2x.png"
                />
                <img
                  className="absolute top-[3.9px] left-[61px] w-[20.1px] h-[13.2px] object-cover"
                  alt=""
                  src="/download-5501@2x.png"
                />
                <img
                  className="absolute top-[1.4px] left-[340.3px] w-[13.2px] h-[14.5px] object-cover"
                  alt=""
                  src="/download251@2x.png"
                />
                <img
                  className="absolute top-[2.9px] left-[0px] w-[16.3px] h-[13.6px] object-cover"
                  alt=""
                  src="/download-563@2x.png"
                />
                <img
                  className="absolute top-[4.6px] left-[31.4px] w-[11.4px] h-[11.2px] object-cover"
                  alt=""
                  src="/download-3251@2x.png"
                />
                <img
                  className="absolute top-[2.5px] left-[93.7px] w-[32.7px] h-[14.3px] object-cover"
                  alt=""
                  src="/capture251@2x.png"
                />
                <img
                  className="absolute top-[3.9px] left-[137.7px] w-[57.3px] h-3 object-cover"
                  alt=""
                  src="/mofa-color251@2x.png"
                />
                <img
                  className="absolute top-[5.6px] left-[203.2px] w-[26.7px] h-[9.1px] object-cover mix-blend-difference"
                  alt=""
                  src="/images33@2x.png"
                />
                <img
                  className="absolute top-[2.7px] left-[236.9px] w-6 h-[13.8px] object-cover"
                  alt=""
                  src="/download-633@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[270.4px] w-[19.4px] h-[19.4px] object-cover"
                  alt=""
                  src="/images-1251@2x.png"
                />
                <img
                  className="absolute top-[3.5px] left-[300px] w-[31.8px] h-[12.6px] object-cover"
                  alt=""
                  src="/download-1261@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <section className="bg-gray-500 w-[1727px] overflow-hidden flex flex-col items-center justify-start pt-[60px] px-[200px] pb-20 box-border relative gap-[10px] text-left text-lgi text-goldenrod-500 font-poppins lg:hidden">
            <div
              className="absolute my-0 mx-[!important] top-[-117.9px] left-[1533px] rounded-[50%] bg-seagreen-400 [filter:blur(146.6px)] [backdrop-filter:blur(133.5px)] w-[387px] h-[387px] [&.animate]:animate-[15s_ease_0s_infinite_normal_forwards_bounce-in-top] opacity-[0] z-[0]"
              data-animate-on-scroll
            />
            <img
              className="absolute my-0 mx-[!important] top-[413px] left-[-177px] w-[795.4px] h-[1191px] [&.animate]:animate-[13s_ease_2s_infinite_normal_forwards_slide-in-top] opacity-[0] z-[1]"
              alt=""
              src="/bg-blur71.svg"
              data-animate-on-scroll
            />
            <div
              className="absolute my-0 mx-[!important] top-[1009px] left-[1170px] rounded-[50%] bg-goldenrod-400 [filter:blur(146.6px)] w-[650px] h-[650px] [&.animate]:animate-[30s_ease_0s_infinite_reverse_forwards_bounce-in-top] opacity-[0] z-[2] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_jello-horizontal] sm:opacity-[1]"
              data-animate-on-scroll
            />
            <div className="flex flex-col items-center justify-start gap-[30px] z-[3]">
              <div
                className="overflow-hidden flex flex-col items-center justify-start py-5 px-[119px] gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row items-start justify-center p-2.5">
                  <div className="flex-1 relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className="h-[140px] flex flex-row items-center justify-center p-2.5 box-border text-base text-white">
                  <div className="relative flex items-center justify-center w-[686px] shrink-0">{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className="relative text-[120px] text-goldenrod-100 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className="font-extrabold">{` Work with `}</span>
                <span>us</span>
                <span className="font-extrabold">{` `}</span>
                <span>?</span>
              </div>
              <div className="flex flex-col items-center justify-start gap-[100px] text-11xl text-white font-inter">
                <div className="w-[1068px] h-[364px] flex flex-row items-start justify-start gap-[76px]">
                  <div
                    className="relative w-[494px] h-[364px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute top-[0px] left-[19px] rounded-21xl box-border w-[475px] h-[346px] border-[2px] border-solid border-forestgreen-100" />
                    <img
                      className="absolute top-[17px] left-[0px] rounded-21xl w-[475px] h-[347px] object-cover"
                      alt=""
                      src="/rectangle-9402@2x.png"
                    />
                  </div>
                  <div className="w-[486px] flex flex-col items-start justify-start p-2.5 box-border">
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
                <div className="w-[1036px] flex flex-row items-center justify-start gap-[76px]">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
                    <div
                      className="relative font-semibold inline-block w-[454px] h-[104.6px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <p className="m-0">{`Unlocking Ghana's Agricultural `}</p>
                      <p className="m-0">Potential</p>
                    </div>
                    <div
                      className="relative text-lg inline-block w-[466px] h-[223.7px] shrink-0 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
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
                  <div
                    className="relative w-[494px] h-[364px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute top-[0px] left-[19px] rounded-21xl box-border w-[475px] h-[346px] border-[2px] border-solid border-forestgreen-100" />
                    <img
                      className="absolute top-[17px] left-[0px] rounded-21xl w-[475px] h-[347px] object-cover"
                      alt=""
                      src="/rectangle-94011@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-gray-500 w-[1199.9px] overflow-hidden hidden flex-col items-center justify-start pt-[41.663063049316406px] px-[138.87686157226562px] pb-[55.55074691772461px] box-border relative gap-[6.94px] lg:flex md:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[286.8px] left-[-122.9px] w-[552.3px] h-[827px] z-[0]"
              alt=""
              src="/bg-blur23.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[-78.5px] left-[908.3px] rounded-[50%] bg-seagreen-400 [filter:blur(101.8px)] [backdrop-filter:blur(92.7px)] w-[268.7px] h-[268.7px] z-[1]" />
            <div className="absolute my-0 mx-[!important] top-[700.6px] left-[812.4px] rounded-[50%] bg-goldenrod-400 [filter:blur(101.8px)] w-[451.3px] h-[451.3px] z-[2]" />
            <div className="flex flex-col items-center justify-start gap-[20.83px] z-[3]">
              <div
                className="overflow-hidden flex flex-col items-center justify-start py-[13.887686729431152px] px-[82.6317367553711px] gap-[6.94px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row items-start justify-center p-[6.943843364715576px]">
                  <div className="flex-1 relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className="h-[97.2px] flex flex-row items-center justify-center p-[6.943843364715576px] box-border text-xs-1 text-white">
                  <div className="relative flex items-center justify-center w-[476.3px] shrink-0">{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className="relative text-[83.3px] text-goldenrod-100 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className="font-extrabold">{` Work with `}</span>
                <span>us</span>
                <span className="font-extrabold">{` `}</span>
                <span>?</span>
              </div>
              <div className="flex flex-col items-center justify-start gap-[69.44px] text-xl-8 text-white font-inter">
                <div
                  className="w-[741.6px] h-[252.8px] flex flex-row items-start justify-start gap-[52.77px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative w-[343px] h-[252.8px]">
                    <div className="absolute top-[0px] left-[13.2px] rounded-[27.78px] box-border w-[329.8px] h-[240.3px] border-[1.4px] border-solid border-forestgreen-100" />
                    <img
                      className="absolute top-[11.8px] left-[0px] rounded-[27.78px] w-[329.8px] h-[241px] object-cover"
                      alt=""
                      src="/rectangle-9408@2x.png"
                    />
                  </div>
                  <div className="w-[337.5px] flex flex-col items-start justify-start p-[6.943843364715576px] box-border">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[33.33px]">
                      <div className="self-stretch relative font-semibold">
                        We offer a Comprehensive Suite of Agriculture Supply
                        Chain Management tools.
                      </div>
                      <div className="self-stretch relative text-smi-5">
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
                <div
                  className="w-[719.4px] flex flex-row items-center justify-start gap-[52.77px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13.89px]">
                    <div className="relative font-semibold inline-block w-[315.3px] h-[72.6px] shrink-0">
                      <p className="m-0">{`Unlocking Ghana's Agricultural `}</p>
                      <p className="m-0">Potential</p>
                    </div>
                    <div className="relative text-smi-5 inline-block w-[323.6px] h-[155.4px] shrink-0">
                      Ghana's agricultural sector holds immense potential,
                      brimming with untapped opportunities. Agrospectrum is
                      committed to unlocking this potential by providing a
                      digital infrastructure that empowers all stakeholders,
                      from farmers to processors. Our platform is not merely a
                      tool; it is a catalyst for Ghana's agricultural
                      revolution.
                    </div>
                  </div>
                  <div className="relative w-[343px] h-[252.8px]">
                    <div className="absolute top-[0px] left-[13.2px] rounded-[27.78px] box-border w-[329.8px] h-[240.3px] border-[1.4px] border-solid border-forestgreen-100" />
                    <img
                      className="absolute top-[11.8px] left-[0px] rounded-[27.78px] w-[329.8px] h-[241px] object-cover"
                      alt=""
                      src="/rectangle-9409@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[964px] overflow-hidden hidden flex-col items-center justify-start pt-[33.47222137451172px] px-[111.57406616210938px] pb-[44.62963104248047px] box-border relative gap-[5.58px] text-2xs-6 md:flex sm:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[230.4px] left-[-98.7px] w-[443.7px] h-[664.4px] z-[0]"
              alt=""
              src="/bg-blur24.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[-63px] left-[729.7px] rounded-[50%] bg-seagreen-400 [filter:blur(81.78px)] [backdrop-filter:blur(74.48px)] w-[215.9px] h-[215.9px] z-[1]" />
            <div className="absolute my-0 mx-[!important] top-[562.9px] left-[652.7px] rounded-[50%] bg-goldenrod-400 [filter:blur(81.78px)] w-[362.6px] h-[362.6px] z-[2]" />
            <div className="flex flex-col items-center justify-start gap-[16.74px] z-[3]">
              <div
                className="overflow-hidden flex flex-col items-center justify-start py-[11.157407760620117px] px-[66.3865737915039px] gap-[5.58px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="w-[232.1px] flex flex-row items-start justify-center p-[5.578703880310059px] box-border">
                  <div className="relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className="h-[78.1px] flex flex-row items-center justify-center p-[5.578703880310059px] box-border text-center text-4xs-9 text-white">
                  <div className="relative flex items-center justify-center w-[382.7px] shrink-0">{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className="relative text-[66.9px] text-goldenrod-100 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className="font-extrabold">{` Work with `}</span>
                <span>us</span>
                <span className="font-extrabold">{` `}</span>
                <span>?</span>
              </div>
              <div className="flex flex-col items-center justify-start gap-[55.79px] text-base-7 text-white font-inter">
                <div
                  className="w-[595.8px] h-[203.1px] flex flex-row items-start justify-start gap-[42.4px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative w-[275.6px] h-[203.1px]">
                    <div className="absolute top-[0px] left-[10.6px] rounded-[22.31px] box-border w-[265px] h-[193px] border-[1.1px] border-solid border-forestgreen-100" />
                    <img
                      className="absolute top-[9.5px] left-[0px] rounded-[22.31px] w-[265px] h-[193.6px] object-cover"
                      alt=""
                      src="/rectangle-94010@2x.png"
                    />
                  </div>
                  <div className="w-[271.1px] flex flex-col items-start justify-start p-[5.578703880310059px] box-border">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[26.78px]">
                      <div className="self-stretch relative font-semibold">
                        We offer a Comprehensive Suite of Agriculture Supply
                        Chain Management tools.
                      </div>
                      <div className="self-stretch relative text-3xs">
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
                <div
                  className="w-[578px] flex flex-row items-center justify-start gap-[42.4px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[11.16px]">
                    <div className="relative font-semibold inline-block w-[253.3px] h-[58.4px] shrink-0">
                      <p className="m-0">{`Unlocking Ghana's Agricultural `}</p>
                      <p className="m-0">Potential</p>
                    </div>
                    <div className="relative text-3xs inline-block w-[260px] h-[124.8px] shrink-0">
                      Ghana's agricultural sector holds immense potential,
                      brimming with untapped opportunities. Agrospectrum is
                      committed to unlocking this potential by providing a
                      digital infrastructure that empowers all stakeholders,
                      from farmers to processors. Our platform is not merely a
                      tool; it is a catalyst for Ghana's agricultural
                      revolution.
                    </div>
                  </div>
                  <div className="relative w-[275.6px] h-[203.1px]">
                    <div className="absolute top-[0px] left-[10.6px] rounded-[22.31px] box-border w-[265px] h-[193px] border-[1.1px] border-solid border-forestgreen-100" />
                    <img
                      className="absolute top-[9.5px] left-[0px] rounded-[22.31px] w-[265px] h-[193.6px] object-cover"
                      alt=""
                      src="/rectangle-9405@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[422px] overflow-hidden hidden flex-col items-center justify-start pt-[14.652776718139648px] px-0 pb-[19.537036895751953px] box-border relative gap-[2.44px] text-xs-6 sm:flex mq350small:hidden">
            <div className="absolute my-0 mx-[!important] top-[-27.6px] left-[319.4px] rounded-[50%] bg-seagreen-400 [filter:blur(35.8px)] [backdrop-filter:blur(32.6px)] w-[94.5px] h-[94.5px] z-[0]" />
            <div className="w-[414.3px] flex flex-col items-center justify-start py-0 px-[52.85044479370117px] box-border gap-[7.33px] z-[1]">
              <div
                className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[4.884259223937988px] px-[49.67941665649414px] gap-[2.44px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row items-start justify-center p-[2.442129611968994px]">
                  <div className="relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className="relative text-3xs-5 leading-[13.74px] text-white whitespace-pre-wrap text-center flex items-center justify-center w-[294.9px]">{`Agrospectrum Limited is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain, with a primary focus on Africa.  `}</div>
              </div>
              <div
                className="relative text-[29.3px] text-goldenrod-100 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className="font-extrabold">{` Work with `}</span>
                <span>us</span>
                <span className="font-extrabold">{` `}</span>
                <span>?</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[18.63px] z-[2] text-white font-inter">
              <div className="w-[191.3px] flex flex-col items-start justify-start gap-[18.63px]">
                <img
                  className="relative w-[191.5px] h-[141.1px] object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  alt=""
                  src="/group-8802@2x.png"
                  data-animate-on-scroll
                />
                <div
                  className="w-[188.4px] flex flex-col items-center justify-start p-[3.8762412071228027px] box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="self-stretch flex flex-col items-center justify-center gap-[12.42px]">
                    <div className="self-stretch relative font-semibold">
                      We offer a Comprehensive Suite of Agriculture Supply Chain
                      Management tools.
                    </div>
                    <div className="self-stretch relative text-[7px]">
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
              <div className="w-[192.5px] flex flex-col items-start justify-center gap-[28.65px] text-xs-3">
                <div
                  className="relative w-[186.2px] h-[137.2px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[0px] left-[7.2px] rounded-[15.08px] box-border w-[179.1px] h-[130.4px] border-[0.8px] border-solid border-forestgreen-100" />
                  <img
                    className="absolute top-[6.4px] left-[0px] rounded-[15.08px] w-[179.1px] h-[130.8px] object-cover"
                    alt=""
                    src="/rectangle-9406@2x.png"
                  />
                </div>
                <div
                  className="self-stretch h-[89.2px] flex flex-col items-start justify-start gap-[7.54px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative font-semibold inline-block w-[171.3px] h-[26.1px] shrink-0">
                    <p className="m-0">{`Unlocking Ghana's Agricultural `}</p>
                    <p className="m-0">Potential</p>
                  </div>
                  <div className="self-stretch relative text-[6.8px] inline-block h-[84.3px] shrink-0">
                    Ghana's agricultural sector holds immense potential,
                    brimming with untapped opportunities. Agrospectrum is
                    committed to unlocking this potential by providing a digital
                    infrastructure that empowers all stakeholders, from farmers
                    to processors. Our platform is not merely a tool; it is a
                    catalyst for Ghana's agricultural revolution.
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[144.8px] left-[-74px] w-[194.2px] h-[290.9px] z-[3]"
              alt=""
              src="/bg-blur25.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[687.6px] left-[-63.4px] w-[349.5px] h-[328.3px] object-contain z-[4]"
              alt=""
              src="/bg-blur26.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[310.8px] left-[335.1px] rounded-[50%] bg-goldenrod-400 [filter:blur(35.8px)] w-[158.7px] h-[158.7px] z-[5]" />
          </div>
          <div className="bg-gray-500 w-[350px] overflow-hidden hidden flex-col items-center justify-start pt-[12.109747886657715px] px-0 pb-[16.146331787109375px] box-border relative gap-[2.02px] text-3xs-6 mq350small:flex">
            <div className="absolute my-0 mx-[!important] top-[-22.8px] left-[264px] rounded-[50%] bg-seagreen-400 [filter:blur(29.59px)] [backdrop-filter:blur(26.94px)] w-[78.1px] h-[78.1px] z-[0]" />
            <div className="w-[342.4px] flex flex-col items-center justify-start py-2.5 px-[43.67810821533203px] box-border gap-[6.05px] z-[1]">
              <div
                className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[4.036582946777344px] px-[41.05742263793945px] gap-[2.02px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row items-start justify-center p-[2.018291473388672px]">
                  <div className="relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className="relative text-5xs-9 leading-[11.36px] text-white whitespace-pre-wrap text-center flex items-center justify-center w-[243.7px]">{`Agrospectrum Limited is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain, with a primary focus on Africa.  `}</div>
              </div>
              <div className="relative text-5xl-2 text-goldenrod-100">
                <span>Why</span>
                <span className="font-extrabold">{` Work with `}</span>
                <span>us</span>
                <span className="font-extrabold">{` `}</span>
                <span>?</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start py-2.5 px-0 gap-[13px] z-[2] text-2xs-5 text-white font-inter">
              <div className="w-[173.4px] flex flex-col items-start justify-start gap-[10px]">
                <img
                  className="relative w-[173.6px] h-[127.9px] object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  alt=""
                  src="/group-8803@2x.png"
                  data-animate-on-scroll
                />
                <div
                  className="w-[170.8px] flex flex-col items-center justify-start p-[3.514683961868286px] box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="self-stretch flex flex-col items-center justify-center gap-[11.26px]">
                    <div className="self-stretch relative font-semibold">
                      We offer a Comprehensive Suite of Agriculture Supply Chain
                      Management tools.
                    </div>
                    <div className="self-stretch relative text-6xs-3">
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
              <div className="w-[174.5px] flex flex-col items-start justify-center gap-[10px] text-2xs-3">
                <div
                  className="relative w-[168.9px] h-[124.4px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[0px] left-[6.5px] rounded-[13.67px] box-border w-[162.4px] h-[118.3px] border-[0.7px] border-solid border-forestgreen-100" />
                  <img
                    className="absolute top-[5.8px] left-[0px] rounded-[13.67px] w-[162.4px] h-[118.6px] object-cover"
                    alt=""
                    src="/rectangle-940111@2x.png"
                  />
                </div>
                <div
                  className="self-stretch h-[80.9px] flex flex-col items-start justify-start gap-[6.84px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="self-stretch relative font-semibold">
                    <p className="m-0">{`Unlocking Ghana's Agricultural `}</p>
                    <p className="m-0">Potential</p>
                  </div>
                  <div className="self-stretch relative text-6xs-2 inline-block h-[76.5px] shrink-0">
                    Ghana's agricultural sector holds immense potential,
                    brimming with untapped opportunities. Agrospectrum is
                    committed to unlocking this potential by providing a digital
                    infrastructure that empowers all stakeholders, from farmers
                    to processors. Our platform is not merely a tool; it is a
                    catalyst for Ghana's agricultural revolution.
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[119.7px] left-[-61.1px] w-[160.5px] h-[240.4px] z-[3]"
              alt=""
              src="/bg-blur27.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[448px] left-[-27px] w-[160.5px] h-[240.4px] z-[4]"
              alt=""
              src="/bg-blur28.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[256.8px] left-[276.9px] rounded-[50%] bg-goldenrod-400 [filter:blur(29.59px)] w-[131.2px] h-[131.2px] z-[5]" />
          </div>
        </div>
        <section className="flex flex-col items-start justify-start text-center text-31xl-9 text-white font-poppins">
          <div className="[background:linear-gradient(#172310,_#172310),_linear-gradient(90.57deg,_rgba(3,_11,_1,_0.6),_rgba(3,_11,_1,_0.28)_10.54%,_rgba(219,_236,_215,_0.07)_78.44%,_rgba(219,_236,_215,_0.07))] w-[1737px] overflow-hidden flex flex-row items-start justify-start py-16 px-[200px] box-border lg:hidden">
            <div
              className="w-[1316px] flex flex-row items-start justify-start gap-[80px] [&.animate]:mq350small:animate-[1s_ease_0s_1_normal_forwards_scale-up] mq350small:opacity-[1]"
              data-animate-on-scroll
            >
              <div className="w-[277px] flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[136.32%] top-[0.15%] left-[-13.97%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    1. 7 M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.04%] top-[0%] left-[0%] font-semibold inline-block">
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
              <div className="w-[277px] flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div
                    className="absolute w-[136.32%] top-[0.15%] left-[-13.97%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
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
                    className="absolute w-[100.04%] top-[0%] left-[0%] font-semibold inline-block [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
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
              <div className="w-[277px] flex flex-col items-center justify-start gap-[13.29px]">
                <div
                  className="self-stretch relative h-[67.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div
                    className="absolute w-[136.32%] top-[0.15%] left-[-13.97%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    20M+
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.04%] top-[0%] left-[0%] font-semibold inline-block">{`Farming Acres `}</div>
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
                  <div className="absolute w-[136.33%] top-[0.15%] left-[-13.96%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(100.75deg,_#358f43,_#feca3a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                    5 Acres
                  </div>
                </div>
                <div
                  className="self-stretch relative h-[37.6px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-6xl-1"
                  data-animate-on-scroll
                >
                  <div className="absolute w-[100.04%] top-[0%] left-[0%] font-semibold inline-block">
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
          <div className="[background:linear-gradient(#172310,_#172310),_linear-gradient(90.57deg,_rgba(3,_11,_1,_0.6),_rgba(3,_11,_1,_0.28)_10.54%,_rgba(219,_236,_215,_0.07)_78.44%,_rgba(219,_236,_215,_0.07))] w-[1200px] overflow-hidden hidden flex-row items-start justify-start py-[44.80368423461914px] px-[140.0115203857422px] box-border text-16xl-6 lg:flex md:hidden">
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
          <div className="[background:linear-gradient(#172310,_#172310),_linear-gradient(90.57deg,_rgba(3,_11,_1,_0.6),_rgba(3,_11,_1,_0.28)_10.54%,_rgba(219,_236,_215,_0.07)_78.44%,_rgba(219,_236,_215,_0.07))] w-[953px] overflow-hidden hidden flex-row items-start justify-start py-[35.58159255981445px] px-[111.1924819946289px] box-border text-9xl-3 md:flex sm:hidden">
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
        <section className="flex flex-col items-start justify-start gap-[10px] text-left text-lgi text-white font-poppins">
          <div className="relative [background:linear-gradient(180deg,_rgba(254,_202,_58,_0.75),_rgba(255,_255,_255,_0))] w-[1728px] h-[1195px] overflow-hidden shrink-0 lg:hidden">
            <div className="absolute top-[12px] left-[361px] w-[1065px] h-[945px] overflow-hidden">
              <b
                className="absolute top-[57px] left-[calc(50%_-_236.5px)] text-46xl [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                What we Offer
              </b>
              <div
                className="absolute top-[391px] left-[504px] capitalize font-medium inline-block w-[489px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div
                className="absolute top-[142px] left-[95px] flex flex-col items-start justify-start p-2.5 [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center"
                data-animate-on-scroll
              >
                <div className="flex flex-row items-center justify-center p-2.5">
                  <div className="relative">
                    <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className="m-0">
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[269px] left-[-1px] w-[491px] h-[547px] overflow-hidden object-cover [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/frame-945@2x.png"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[493px] left-[494px] flex flex-row items-center justify-center p-2.5 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="relative inline-block w-[531px] shrink-0">
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className="absolute top-[317px] left-[504px] w-[515px] h-[50px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-9xl"
                data-animate-on-scroll
              >
                <b className="absolute top-[0px] left-[0px] capitalize">
                  input-Credit Management Systems
                </b>
                <div className="absolute top-[45px] left-[1px] rounded-3xs bg-goldenrod-200 w-[184px] h-[5px]" />
              </div>
              <div className="absolute top-[856px] left-[506px] w-[255px] h-[11px] overflow-hidden text-center text-xl text-gray-1400">
                <div className="absolute w-[3.06%] top-[calc(50%_-_10.5px)] left-[87.57%] font-black inline-block">
                  
                </div>
                <div className="absolute h-[14.55%] w-[96.2%] top-[42.73%] right-[14.78%] bottom-[42.73%] left-[-10.98%] bg-gray-1400" />
                <div className="absolute w-[3.06%] top-[calc(50%_-_10.5px)] left-[96.94%] font-black text-sandybrown inline-block">
                  
                </div>
              </div>
              <img
                className="absolute top-[851px] left-[378px] w-[43.8px] h-[16.4px]"
                alt=""
                src="/project-arrow3.svg"
              />
            </div>
            <div
              className="absolute top-[1020px] left-[508px] w-[791px] h-[161px] [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-3xl text-goldenrod-200"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[230px] capitalize">
                input-Credit Management Systems
              </b>
              <div className="absolute top-[61px] left-[0px] text-lgi text-white text-center inline-block w-[791px] h-[100px]">
                <p className="m-0">
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className="relative [background:linear-gradient(180deg,_rgba(254,_202,_58,_0.75),_rgba(255,_255,_255,_0))] w-[1206.1px] h-[834.1px] overflow-hidden shrink-0 hidden text-sm-3 lg:flex md:hidden">
            <div className="absolute top-[8.4px] left-[252px] w-[743.4px] h-[659.6px] overflow-hidden">
              <b
                className="absolute top-[39.8px] left-[calc(50%_-_165.1px)] text-26xl-4 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                What we Offer
              </b>
              <div
                className="absolute top-[272.9px] left-[351.8px] capitalize font-medium inline-block w-[341.3px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div className="absolute top-[99.1px] left-[66.3px] flex flex-col items-start justify-start p-[6.979996681213379px] text-center">
                <div
                  className="flex flex-row items-center justify-center p-[6.979996681213379px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative">
                    <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className="m-0">
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[187.8px] left-[-0.7px] w-[342.7px] h-[381.8px] overflow-hidden object-cover [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/frame-9411@2x.png"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[344.1px] left-[344.8px] flex flex-row items-center justify-center p-[6.979996681213379px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="relative inline-block w-[370.6px] shrink-0">
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className="absolute top-[221.3px] left-[351.8px] w-[359px] h-[34.9px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lgi-5"
                data-animate-on-scroll
              >
                <b className="absolute top-[0px] left-[0px] capitalize">
                  input-Credit Management Systems
                </b>
                <div className="absolute top-[31.4px] left-[0.7px] rounded-[6.98px] bg-goldenrod-200 w-[128.4px] h-[3.5px]" />
              </div>
              <div className="absolute top-[597.5px] left-[353.2px] w-[178px] h-[7.7px] overflow-hidden text-center text-sm text-gray-1400">
                <div className="absolute w-[3.03%] top-[calc(50%_-_7.35px)] left-[87.58%] font-black inline-block">
                  
                </div>
                <div className="absolute h-[14.29%] w-[96.18%] top-[42.86%] right-[14.83%] bottom-[42.86%] left-[-11.01%] bg-gray-1400" />
                <div className="absolute w-[3.03%] top-[calc(50%_-_7.35px)] left-[96.97%] font-black text-sandybrown inline-block">
                  
                </div>
              </div>
              <div className="absolute top-[594px] left-[263.8px] w-[30.6px] h-[11.4px]">
                <div className="absolute top-[0px] left-[0px] w-[30.6px] h-[11.4px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[11.4px] h-[11.4px]"
                    alt=""
                    src="/group-1851.svg"
                  />
                  <img
                    className="absolute top-[4.6px] left-[16px] w-[3.2px] h-[3.2px]"
                    alt=""
                    src="/group-18851.svg"
                  />
                  <img
                    className="absolute top-[4.6px] left-[27.4px] w-[3.2px] h-[3.2px]"
                    alt=""
                    src="/group-18941.svg"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute top-[712px] left-[354.6px] w-[552.1px] h-[112.4px] [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-[15.4px] text-goldenrod-200"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[160.5px] capitalize">
                input-Credit Management Systems
              </b>
              <div className="absolute top-[42.6px] left-[0px] text-sm-3 text-white text-center inline-block w-[552.1px] h-[69.8px]">
                <p className="m-0">
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className="relative [background:linear-gradient(180deg,_rgba(254,_202,_58,_0.75),_rgba(255,_255,_255,_0))] w-[962.9px] h-[665.9px] overflow-hidden shrink-0 hidden text-2xs-6 md:flex sm:hidden">
            <div className="absolute top-[6.7px] left-[201.2px] w-[593.4px] h-[526.6px] overflow-hidden">
              <b
                className="absolute top-[31.8px] left-[calc(50%_-_131.8px)] text-17xl-2 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                What we Offer
              </b>
              <div
                className="absolute top-[217.9px] left-[280.8px] capitalize font-medium inline-block w-[272.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div
                className="absolute top-[79.1px] left-[52.9px] flex flex-col items-start justify-start p-[5.572251319885254px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center"
                data-animate-on-scroll
              >
                <div className="flex flex-row items-center justify-center p-[5.572251319885254px]">
                  <div className="relative">
                    <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className="m-0">
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[149.9px] left-[-0.6px] w-[273.6px] h-[304.8px] overflow-hidden object-cover [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/frame-9421@2x.png"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[274.7px] left-[275.3px] flex flex-row items-center justify-center p-[5.572251319885254px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="relative inline-block w-[295.9px] shrink-0">
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className="absolute top-[176.6px] left-[280.8px] w-[287px] h-[27.9px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-base-6"
                data-animate-on-scroll
              >
                <b className="absolute top-[0px] left-[0px] capitalize">
                  input-Credit Management Systems
                </b>
                <div className="absolute top-[25.1px] left-[0.6px] rounded-[5.57px] bg-goldenrod-200 w-[102.5px] h-[2.8px]" />
              </div>
              <div
                className="absolute top-[477px] left-[282px] w-[142.1px] h-[6.1px] overflow-hidden [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-xs-1 text-gray-1400"
                data-animate-on-scroll
              >
                <div className="absolute w-[3.03%] top-[calc(50%_-_5.85px)] left-[87.54%] font-black inline-block">
                  
                </div>
                <div className="absolute h-[14.75%] w-[96.2%] top-[42.62%] right-[14.78%] bottom-[42.62%] left-[-10.98%] bg-gray-1400" />
                <div className="absolute w-[3.03%] top-[calc(50%_-_5.85px)] left-[96.97%] font-black text-sandybrown inline-block">
                  
                </div>
              </div>
              <img
                className="absolute top-[474.2px] left-[210.6px] w-[24.4px] h-[9.1px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/project-arrow11.svg"
                data-animate-on-scroll
              />
            </div>
            <div
              className="absolute top-[568.4px] left-[283.1px] w-[440.8px] h-[89.7px] [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-smi-3 text-goldenrod-200"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[128.2px] capitalize">
                input-Credit Management Systems
              </b>
              <div className="absolute top-[34px] left-[0px] text-2xs-6 text-white text-center inline-block w-[440.8px] h-[55.7px]">
                <p className="m-0">
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(180deg,_rgba(254,_202,_58,_0.75),_rgba(255,_255,_255,_0))] overflow-hidden hidden flex-col items-center justify-start py-[3px] px-[73px] gap-[15px] text-[15.8px] sm:flex mq350small:hidden">
            <div className="w-[252px] overflow-hidden flex flex-col items-center justify-start py-0 px-5 box-border">
              <b
                className="relative [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                What we Offer
              </b>
              <div className="flex flex-col items-center justify-start p-[2.8086681365966797px] gap-[2.81px] text-center text-7xs-3">
                <div className="flex flex-row items-center justify-center p-[2.8086681365966797px]">
                  <div
                    className="relative [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className="m-0">
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[1.56px] text-5xs-2">
                  <img
                    className="relative w-[211.9px] h-[187px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    alt=""
                    src="/frame-9431@2x.png"
                    data-animate-on-scroll
                  />
                  <div
                    className="flex flex-col items-start justify-start gap-[7.79px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[195px] h-[18.9px] text-left text-2xs-6">
                      <b className="absolute top-[0px] left-[0px] capitalize">
                        input-Credit Management Systems
                      </b>
                      <div className="absolute top-[17px] left-[calc(50%_-_34.6px)] rounded-[3.78px] bg-goldenrod-200 w-[69.5px] h-[1.9px]" />
                    </div>
                    <div className="relative capitalize font-medium inline-block w-[184.7px]">
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[3.777703285217285px] px-0">
                      <div className="relative inline-block w-[200.6px] shrink-0">
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[92.9px] h-1 text-center text-8xs-8 text-gray-1400">
              <div className="absolute top-[1.2px] left-[31px] w-[61.8px] h-[2.7px] overflow-hidden">
                <div className="absolute w-[3.07%] top-[calc(50%_-_2.55px)] left-[87.54%] font-black inline-block">
                  
                </div>
                <div className="absolute h-[14.81%] w-[96.28%] top-[40.74%] right-[14.72%] bottom-[44.44%] left-[-11%] bg-gray-1400" />
                <div className="absolute w-[3.07%] top-[calc(50%_-_2.55px)] left-[96.93%] font-black text-sandybrown inline-block">
                  
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[10.6px] h-1"
                alt=""
                src="/project-arrow21.svg"
              />
            </div>
            <div
              className="relative w-[191.8px] h-[39px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-7xs-3 text-goldenrod-200"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[55.8px] capitalize">
                input-Credit Management Systems
              </b>
              <div className="absolute top-[14.8px] left-[0px] text-8xs-6 text-white text-center inline-block w-[191.8px] h-[24.2px]">
                <p className="m-0">
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className="[background:linear-gradient(180deg,_rgba(254,_202,_58,_0.75),_rgba(255,_255,_255,_0))] overflow-hidden hidden flex-col items-center justify-start py-2.5 px-[64.19597625732422px] gap-[13.19px] text-sm-9 mq350small:flex">
            <div className="w-[221.6px] overflow-hidden flex flex-col items-center justify-start py-0 px-[17.58793830871582px] box-border">
              <b
                className="relative [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                What we Offer
              </b>
              <div className="flex flex-col items-center justify-start p-[2.4699344635009766px] gap-[2.47px] text-center text-8xs-7">
                <div className="flex flex-row items-center justify-center p-[2.4699344635009766px]">
                  <div className="relative">
                    <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className="m-0">
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[1.3px] text-7xs">
                  <img
                    className="relative w-[176.3px] h-[155.5px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    alt=""
                    src="/frame-9441@2x.png"
                    data-animate-on-scroll
                  />
                  <div
                    className="flex flex-col items-start justify-start gap-[6.48px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[162px] h-[15.7px] text-left text-4xs-8">
                      <b className="absolute top-[0px] left-[0px] capitalize">
                        input-Credit Management Systems
                      </b>
                      <div className="absolute top-[14.1px] left-[calc(50%_-_28.7px)] rounded-[3.14px] bg-goldenrod-200 w-[57.8px] h-[1.6px]" />
                    </div>
                    <div className="relative capitalize font-medium inline-block w-[153.7px]">
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center py-[3.1426987648010254px] px-0">
                      <div className="relative inline-block w-[166.9px] shrink-0">
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[81.7px] h-[3.5px] text-center text-8xs-3 text-gray-1400">
              <div className="absolute top-[1.1px] left-[27.3px] w-[54.4px] h-[2.3px] overflow-hidden">
                <div className="absolute w-[3.13%] top-[calc(50%_-_2.25px)] left-[87.5%] font-black inline-block">
                  
                </div>
                <div className="absolute h-[13.04%] w-[96.14%] top-[43.48%] right-[14.89%] bottom-[43.48%] left-[-11.03%] bg-gray-1400" />
                <div className="absolute w-[3.13%] top-[calc(50%_-_2.25px)] left-[96.88%] font-black text-sandybrown inline-block">
                  
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[9.3px] h-[3.5px]"
                alt=""
                src="/project-arrow31.svg"
              />
            </div>
            <div
              className="relative w-[168.7px] h-[34.3px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-8xs-7 text-goldenrod-200"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[49px] capitalize">
                input-Credit Management Systems
              </b>
              <div className="absolute top-[13px] left-[0px] text-8xs-1 text-white text-center inline-block w-[168.7px] h-[21.3px]">
                <p className="m-0">
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start text-left text-167xl-4 text-goldenrod-100 font-poppins">
          <div className="relative w-[1723px] h-[522px] lg:hidden">
            <div className="absolute top-[-0.2px] left-[0px] w-[1723px] h-[522px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1803.1px] h-[521.8px] overflow-hidden flex flex-col items-center justify-between py-[106.23147583007812px] px-[170.5294647216797px] box-border max-h-[521.8388061523438px]">
                <div
                  className="flex-1 w-[1374.5px] flex flex-row items-center justify-start gap-[182.64px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <img
                    className="relative w-[58.2px] h-[58.2px] opacity-[0.78]"
                    alt=""
                    src="/left-group2.svg"
                  />
                  <div className="w-[861.8px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Mission
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_99.6px)] left-[calc(50%_-_381.2px)] text-4xl-3 font-inter text-white text-center flex items-center justify-center w-[812px] shrink-0 z-[1]">
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className="relative w-[57.1px] h-[58.2px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group11@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[3606.3px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1803.1px] h-[521.8px] overflow-hidden flex flex-col items-start justify-between py-[96.91292572021484px] px-[170.5294647216797px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[58.2px] h-[58.2px] opacity-[0.78]"
                    alt=""
                    src="/left-group21.svg"
                  />
                  <div className="w-[861.8px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Resourceful
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_99.6px)] left-[calc(50%_-_381.2px)] text-4xl-3 font-inter text-white text-center flex items-center w-[812px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[57.1px] h-[58.2px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group3@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[5409.4px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1803.1px] h-[521.8px] overflow-hidden flex flex-col items-start justify-between py-[96.91292572021484px] px-[170.5294647216797px] box-border text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[58.2px] h-[58.2px] opacity-[0.78]"
                    alt=""
                    src="/left-group21.svg"
                  />
                  <div className="w-[861.8px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Innovation
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_99.6px)] left-[calc(50%_-_381.2px)] text-4xl-3 font-inter text-white text-center flex items-center w-[812px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[57.1px] h-[58.2px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group35@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[1803.1px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1803.1px] h-[521.8px] overflow-hidden flex flex-col items-start justify-between py-[96.91292572021484px] px-[170.5294647216797px] box-border max-h-[521.8388061523438px] text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[58.2px] h-[58.2px] opacity-[0.78]"
                    alt=""
                    src="/left-group21.svg"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-0 px-0 pb-[3.7274200916290283px] relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Integrity
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_126px)] left-[calc(50%_-_409.2px)] text-4xl-3 font-inter text-white text-center flex items-center justify-center w-[809.8px] shrink-0 z-[1]">
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className="relative w-[57.1px] h-[58.2px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group5@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[1202.7px] h-[364.4px] hidden text-111xl-1 lg:flex md:hidden">
            <div className="absolute top-[-0.1px] left-[0px] w-[1202.7px] h-[364.4px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1258.6px] h-[364.2px] overflow-hidden flex flex-col items-center justify-between py-[74.1495361328125px] px-[119.02951049804688px] box-border max-h-[364.2433166503906px]">
                <div
                  className="flex-1 w-[959.4px] flex flex-row items-center justify-start gap-[127.49px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <img
                    className="relative w-[40.6px] h-[40.6px] opacity-[0.78]"
                    alt=""
                    src="/left-group36.svg"
                  />
                  <div className="w-[601.5px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Mission
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_77.8px)] left-[calc(50%_-_266.05px)] text-base-3 font-inter text-white text-center flex items-center justify-center w-[566.8px] shrink-0 z-[1]">
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className="relative w-[39.8px] h-[40.6px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group7@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[2517.2px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1258.6px] h-[364.2px] overflow-hidden flex flex-col items-start justify-between py-[67.64518737792969px] px-[119.02951049804688px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[40.6px] h-[40.6px] opacity-[0.78]"
                    alt=""
                    src="/left-group8.svg"
                  />
                  <div className="w-[601.5px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Resourceful
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_77.8px)] left-[calc(50%_-_266.05px)] text-base-3 font-inter text-white text-center flex items-center w-[566.8px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[39.8px] h-[40.6px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group37@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[3775.8px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1258.6px] h-[364.2px] overflow-hidden flex flex-col items-start justify-between py-[67.64518737792969px] px-[119.02951049804688px] box-border text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[40.6px] h-[40.6px] opacity-[0.78]"
                    alt=""
                    src="/left-group8.svg"
                  />
                  <div className="w-[601.5px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Innovation
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_77.8px)] left-[calc(50%_-_266.05px)] text-base-3 font-inter text-white text-center flex items-center w-[566.8px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[39.8px] h-[40.6px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group38@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[1258.6px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1258.6px] h-[364.2px] overflow-hidden flex flex-col items-start justify-between py-[67.64518737792969px] px-[119.02951049804688px] box-border max-h-[364.2433166503906px] text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[40.6px] h-[40.6px] opacity-[0.78]"
                    alt=""
                    src="/left-group8.svg"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-0 px-0 pb-[2.6017379760742188px] relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Integrity
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_99.9px)] left-[calc(50%_-_285.65px)] text-base-3 font-inter text-white text-center flex items-center justify-center w-[565.2px] shrink-0 z-[1]">
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className="relative w-[39.8px] h-[40.6px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group39@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[957.4px] h-[290px] hidden text-84xl-6 lg:hidden md:flex sm:hidden">
            <div className="absolute top-[-0.1px] left-[0px] w-[957.4px] h-[290px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1001.9px] h-[290px] overflow-hidden flex flex-col items-center justify-between py-[59.027374267578125px] px-[94.75446319580078px] box-border max-h-[289.9590148925781px]">
                <div
                  className="flex-1 w-[763.7px] flex flex-row items-center justify-start gap-[101.49px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <img
                    className="relative w-[32.3px] h-[32.3px] opacity-[0.78]"
                    alt=""
                    src="/left-group12.svg"
                  />
                  <div className="w-[478.8px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Mission
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_67.6px)] left-[calc(50%_-_211.8px)] text-smi-9 font-inter text-white text-center flex items-center justify-center w-[451.2px] shrink-0 z-[1]">
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className="relative w-[31.7px] h-[32.3px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group13@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[2003.8px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1001.9px] h-[290px] overflow-hidden flex flex-col items-start justify-between py-[53.84953308105469px] px-[94.75446319580078px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[32.3px] h-[32.3px] opacity-[0.78]"
                    alt=""
                    src="/left-group14.svg"
                  />
                  <div className="w-[478.8px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Resourceful
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_67.6px)] left-[calc(50%_-_211.8px)] text-smi-9 font-inter text-white text-center flex items-center w-[451.2px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[31.7px] h-[32.3px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group40@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[3005.7px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1001.9px] h-[290px] overflow-hidden flex flex-col items-start justify-between py-[53.84953308105469px] px-[94.75446319580078px] box-border text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[32.3px] h-[32.3px] opacity-[0.78]"
                    alt=""
                    src="/left-group14.svg"
                  />
                  <div className="w-[478.8px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Innovation
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_67.6px)] left-[calc(50%_-_211.8px)] text-smi-9 font-inter text-white text-center flex items-center w-[451.2px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[31.7px] h-[32.3px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group41@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[1001.9px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[1001.9px] h-[290px] overflow-hidden flex flex-col items-start justify-between py-[53.84953308105469px] px-[94.75446319580078px] box-border max-h-[289.9590148925781px] text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[32.3px] h-[32.3px] opacity-[0.78]"
                    alt=""
                    src="/left-group14.svg"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-0 px-0 pb-[2.0711357593536377px] relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Integrity
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_87.95px)] left-[calc(50%_-_227.4px)] text-smi-9 font-inter text-white text-center flex items-center justify-center w-[450px] shrink-0 z-[1]">
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className="relative w-[31.7px] h-[32.3px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group42@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[419px] h-[126.9px] hidden text-26xl-3 lg:hidden sm:flex mq350small:hidden">
            <div className="absolute top-[0px] left-[0px] w-[419px] h-[126.9px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[438.5px] h-[126.9px] overflow-hidden flex flex-col items-center justify-between py-[25.833425521850586px] px-[41.469444274902344px] box-border max-h-[126.90103149414062px]">
                <div
                  className="flex-1 w-[334.2px] flex flex-row items-center justify-start gap-[44.42px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <img
                    className="relative w-[14.1px] h-[14.1px] opacity-[0.78]"
                    alt=""
                    src="/left-group43.svg"
                  />
                  <div className="w-[209.6px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Mission
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_45.3px)] left-[calc(50%_-_92.7px)] text-7xs-7 font-inter text-white text-center flex items-center justify-center w-[197.5px] shrink-0 z-[1]">
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className="relative w-[13.9px] h-[14.1px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group19@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[877px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[438.5px] h-[126.9px] overflow-hidden flex flex-col items-start justify-between py-[23.56733512878418px] px-[41.469444274902344px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[14.1px] h-[14.1px] opacity-[0.78]"
                    alt=""
                    src="/left-group20.svg"
                  />
                  <div className="w-[209.6px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Resourceful
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_45.3px)] left-[calc(50%_-_92.7px)] text-7xs-7 font-inter text-white text-center flex items-center w-[197.5px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[13.9px] h-[14.1px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group211@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[1315.5px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[438.5px] h-[126.9px] overflow-hidden flex flex-col items-start justify-between py-[23.56733512878418px] px-[41.469444274902344px] box-border text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[14.1px] h-[14.1px] opacity-[0.78]"
                    alt=""
                    src="/left-group20.svg"
                  />
                  <div className="w-[209.6px] flex flex-row items-center justify-between relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Innovation
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_45.3px)] left-[calc(50%_-_92.7px)] text-7xs-7 font-inter text-white text-center flex items-center w-[197.5px] shrink-0 z-[1]">
                      <span className="w-full">
                        <p className="m-0">
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className="m-0">
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="relative w-[13.9px] h-[14.1px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group22@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[438.5px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[438.5px] h-[126.9px] overflow-hidden flex flex-col items-start justify-between py-[23.56733512878418px] px-[41.469444274902344px] box-border max-h-[126.90103149414062px] text-seagreen-200">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                  <img
                    className="relative w-[14.1px] h-[14.1px] opacity-[0.78]"
                    alt=""
                    src="/left-group20.svg"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-0 px-0 pb-[0.9064359068870544px] relative">
                    <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                      Integrity
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[calc(50%_+_62.6px)] left-[calc(50%_-_99.45px)] text-7xs-7 font-inter text-white text-center flex items-center justify-center w-[196.9px] shrink-0 z-[1]">
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className="relative w-[13.9px] h-[14.1px] object-contain opacity-[0.78]"
                    alt=""
                    src="/left-group23@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[352px] h-[108.6px] overflow-x-auto shrink-0 hidden text-21xl-9 mq350small:flex">
            <div className="absolute top-[2.6px] left-[0px] w-[352.3px] h-[106.7px] text-19xl-1 lg:hidden">
              <div className="absolute top-[0px] left-[0px] w-[352.3px] h-[106.7px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[368.6px] h-[106.7px] overflow-hidden flex flex-col items-center justify-between py-[21.718584060668945px] px-[34.86404037475586px] box-border max-h-[106.68777465820312px]">
                  <div
                    className="flex-1 w-[281px] flex flex-row items-center justify-start gap-[37.34px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <img
                      className="relative w-[11.9px] h-[11.9px] opacity-[0.78]"
                      alt=""
                      src="/left-group44.svg"
                    />
                    <div className="w-[176.2px] flex flex-row items-center justify-between relative">
                      <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                        Mission
                      </div>
                      <div className="absolute my-0 mx-[!important] top-[calc(50%_+_42.5px)] left-[calc(50%_-_77.9px)] text-8xs-8 font-inter text-white text-center flex items-center justify-center w-[166px] shrink-0 z-[1]">
                        To extend digitalization and innovation to agriculture
                        through diverse technological channels
                      </div>
                    </div>
                    <img
                      className="relative w-[11.7px] h-[11.9px] object-contain opacity-[0.78]"
                      alt=""
                      src="/left-group45@2x.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[737.3px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[368.6px] h-[106.7px] overflow-hidden flex flex-col items-start justify-between py-[19.813444137573242px] px-[34.86404037475586px] box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                    <img
                      className="relative w-[11.9px] h-[11.9px] opacity-[0.78]"
                      alt=""
                      src="/left-group26.svg"
                    />
                    <div className="w-[176.2px] flex flex-row items-center justify-between relative">
                      <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                        Resourceful
                      </div>
                      <div className="absolute my-0 mx-[!important] top-[calc(50%_+_42.5px)] left-[calc(50%_-_77.9px)] text-8xs-8 font-inter text-white text-center flex items-center w-[166px] shrink-0 z-[1]">
                        <span className="w-full">
                          <p className="m-0">
                            We offer a huge arsenal of logistics and expertise
                            to
                          </p>
                          <p className="m-0">
                            strategize and tackle most agro challenges
                          </p>
                        </span>
                      </div>
                    </div>
                    <img
                      className="relative w-[11.7px] h-[11.9px] object-contain opacity-[0.78]"
                      alt=""
                      src="/left-group46@2x.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[1105.9px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[368.6px] h-[106.7px] overflow-hidden flex flex-col items-start justify-between py-[19.813444137573242px] px-[34.86404037475586px] box-border text-seagreen-200">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                    <img
                      className="relative w-[11.9px] h-[11.9px] opacity-[0.78]"
                      alt=""
                      src="/left-group26.svg"
                    />
                    <div className="w-[176.2px] flex flex-row items-center justify-between relative">
                      <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                        Innovation
                      </div>
                      <div className="absolute my-0 mx-[!important] top-[calc(50%_+_42.5px)] left-[calc(50%_-_77.9px)] text-8xs-8 font-inter text-white text-center flex items-center w-[166px] shrink-0 z-[1]">
                        <span className="w-full">
                          <p className="m-0">
                            We offer a huge arsenal of logistics and expertise
                            to
                          </p>
                          <p className="m-0">
                            strategize and tackle most agro challenges
                          </p>
                        </span>
                      </div>
                    </div>
                    <img
                      className="relative w-[11.7px] h-[11.9px] object-contain opacity-[0.78]"
                      alt=""
                      src="/left-group28@2x.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[368.6px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[368.6px] h-[106.7px] overflow-hidden flex flex-col items-start justify-between py-[19.813444137573242px] px-[34.86404037475586px] box-border max-h-[106.68777465820312px] text-seagreen-200">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                    <img
                      className="relative w-[11.9px] h-[11.9px] opacity-[0.78]"
                      alt=""
                      src="/left-group26.svg"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-0 px-0 pb-[0.762055516242981px] relative">
                      <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                        Integrity
                      </div>
                      <div className="absolute my-0 mx-[!important] top-[calc(50%_+_58.75px)] left-[calc(50%_-_83.7px)] text-8xs-8 font-inter text-white text-center flex items-center justify-center w-[165.6px] shrink-0 z-[1]">
                        Our credibility as a brand is not only evident in the
                        authenticity of our products but, also in the numerous
                        partnerships with renowned local and international
                        industry players.
                      </div>
                    </div>
                    <img
                      className="relative w-[11.7px] h-[11.9px] object-contain opacity-[0.78]"
                      alt=""
                      src="/left-group29@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[388.2px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[395.6px] h-[114.5px] flex flex-col items-start justify-between py-[21.262367248535156px] px-[37.41358947753906px] box-border max-h-[114.48966979980469px] text-seagreen-200">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[12.8px] h-[12.8px] opacity-[0.78]"
                  alt=""
                  src="/left-group47.svg"
                />
                <div className="self-stretch flex-1 flex flex-row items-center justify-between pt-0 px-0 pb-[0.8177833557128906px] relative">
                  <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                    Integrity
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_+_63px)] left-[calc(50%_-_89.75px)] text-7xs-1 font-inter text-white text-center flex items-center justify-center w-[177.7px] shrink-0 z-[1]">
                    Our credibility as a brand is not only evident in the
                    authenticity of our products but, also in the numerous
                    partnerships with renowned local and international industry
                    players.
                  </div>
                </div>
                <img
                  className="relative w-[12.5px] h-[12.8px] object-contain opacity-[0.78]"
                  alt=""
                  src="/left-group31@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[794.1px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[395.6px] h-[114.5px] overflow-hidden flex flex-col items-start justify-between py-[21.262367248535156px] px-[37.41358947753906px] box-border">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[12.8px] h-[12.8px] opacity-[0.78]"
                  alt=""
                  src="/left-group47.svg"
                />
                <div className="w-[189.1px] flex flex-row items-center justify-between relative">
                  <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                    Resourcefulness
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_+_45.6px)] left-[calc(50%_-_83.65px)] text-7xs-1 font-inter text-white text-center flex items-center w-[178.2px] shrink-0 z-[1]">
                    <span className="w-full">
                      <p className="m-0">
                        We offer a huge arsenal of logistics and expertise to
                      </p>
                      <p className="m-0">
                        strategize and tackle most agro challenges
                      </p>
                    </span>
                  </div>
                </div>
                <img
                  className="relative w-[12.5px] h-[12.8px] object-contain opacity-[0.78]"
                  alt=""
                  src="/left-group48@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[1199.9px] [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] w-[395.6px] h-[114.5px] overflow-hidden flex flex-col items-start justify-between py-[21.262367248535156px] px-[37.41358947753906px] box-border text-seagreen-200">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[12.8px] h-[12.8px] opacity-[0.78]"
                  alt=""
                  src="/left-group47.svg"
                />
                <div className="w-[189.1px] flex flex-row items-center justify-between relative">
                  <div className="relative tracking-[0.02em] font-extrabold z-[0]">
                    Innovation
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_+_45.6px)] left-[calc(50%_-_83.65px)] text-7xs-1 font-inter text-white text-center flex items-center w-[178.2px] shrink-0 z-[1]">
                    <span className="w-full">
                      <p className="m-0">
                        We offer a huge arsenal of logistics and expertise to
                      </p>
                      <p className="m-0">
                        strategize and tackle most agro challenges
                      </p>
                    </span>
                  </div>
                </div>
                <img
                  className="relative w-[12.5px] h-[12.8px] object-contain opacity-[0.78]"
                  alt=""
                  src="/left-group34@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start text-left text-sm-5 text-darkolivegreen-100 font-poppins">
          <div className="relative bg-honeydew-100 w-[1727px] h-[1456.9px] overflow-hidden shrink-0 text-dimgray-100 lg:hidden">
            <img
              className="absolute top-[231.6px] left-[1569.4px] w-[541.1px] h-[746.7px]"
              alt=""
              src="/vector-2151.svg"
            />
            <img
              className="absolute top-[137.4px] left-[356.5px] w-[1078.3px] h-[1489.6px]"
              alt=""
              src="/vector-2241.svg"
            />
            <div className="absolute top-[40.4px] left-[calc(50%_-_498.3px)] w-[987px] h-[837.1px] overflow-hidden">
              <div
                className="absolute top-[174.9px] left-[58.6px] w-[846.7px] h-[254.7px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div
                  className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[19.22px] rounded-br-none rounded-bl-[19.22px] bg-white box-border w-[253.7px] h-[254.7px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-lexend-deca border-[1px] border-solid border-darkslategray-700"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[224.9px] left-[117.2px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Northern Ghana
                  </div>
                  <img
                    className="absolute top-[0px] left-[-1px] w-[254.7px] h-[142.2px] object-cover"
                    alt=""
                    src="/base85@2x.png"
                  />
                  <div className="absolute top-[163.4px] left-[11.5px] text-xs-5 tracking-[0.01em] leading-[14.42px] font-light font-poppins inline-block w-[225.8px]">
                    An enumeration program by the Government of Ghana through
                    the Ministry of Food and Agriculture that profiles farmers
                    for inclusion.
                  </div>
                </div>
                <div
                  className="absolute top-[0px] left-[297.9px] rounded-tl-none rounded-tr-[19.22px] rounded-br-none rounded-bl-[19.22px] bg-white box-border w-[253.7px] h-[254.7px] overflow-hidden [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-darkslategray-700"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[220.1px] left-[146.1px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-1px] w-[254.7px] h-[142.2px] object-cover"
                    alt=""
                    src="/base86@2x.png"
                  />
                  <div className="absolute top-[165.3px] left-[10.6px] text-xs-5 tracking-[0.01em] leading-[14.42px] font-light inline-block w-[240.3px]">
                    A flagship program of the MoFA(Ghana) that used
                    Agrospectrum’s mobile application provide input Subsidy to
                    farmers.
                  </div>
                  <div className="absolute top-[124.9px] left-[-1.9px] w-[147px] h-[32.4px] text-smi-5 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[147px] h-[32.4px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.69px] rounded-b-none bg-goldenrod-200 shadow-[0px_23.1px_46.13px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(62.7px)] box-border w-[147px] h-[32.4px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[4.8px] left-[17.3px] tracking-[-0.01em] leading-[30.75px] capitalize font-semibold flex items-center w-[118.2px] h-[23.1px]">{`E-Subsidy `}</div>
                  </div>
                </div>
                <div
                  className="absolute top-[0px] left-[593px] rounded-tl-none rounded-tr-[19.22px] rounded-br-none rounded-bl-[19.22px] bg-white box-border w-[253.7px] h-[254.7px] overflow-hidden [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-darkslategray-700"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[221px] left-[148px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-1px] w-[254.7px] h-[142.2px] object-cover"
                    alt=""
                    src="/base87@2x.png"
                  />
                  <div className="absolute top-[163.4px] left-[11.5px] text-xs-5 tracking-[0.01em] leading-[14.42px] inline-block w-[232.6px]">
                    <span className="font-light">{`A credit program spearheaded by `}</span>
                    <span className="font-medium">May and Lotte,</span>
                    <span className="font-light">
                      {" "}
                      leveraged our cutting-edge solutions at the crucial
                      redemption stage for a streamlined process.
                    </span>
                  </div>
                  <div className="absolute top-[124.9px] left-[-1.9px] w-[149.9px] h-[32.4px] text-smi-5 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[149.9px] h-[32.4px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.69px] rounded-b-none bg-goldenrod-200 shadow-[0px_23.1px_46.13px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(62.7px)] box-border w-[149.9px] h-[32.4px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[4.8px] left-[16.3px] tracking-[-0.01em] leading-[30.75px] capitalize font-semibold flex items-center w-[133.6px] h-[23.1px]">{`Input Credit Mgt. `}</div>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[467.1px] left-[57.7px] w-[846.7px] h-[254.7px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div
                  className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[19.22px] rounded-br-none rounded-bl-[19.22px] bg-white box-border w-[253.7px] h-[254.7px] overflow-hidden [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-darkslategray-700"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[226.8px] left-[150.9px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-1px] w-[254.7px] h-[142.2px] object-cover"
                    alt=""
                    src="/base421@2x.png"
                  />
                  <div className="absolute top-[163.4px] left-[10.6px] text-xs-5 tracking-[0.01em] leading-[14.42px] font-light inline-block w-[240.3px]">{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                  <div className="absolute top-[123px] left-[-1.9px] w-[169.1px] h-[32.4px] text-smi-5 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[169.1px] h-[32.4px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.69px] rounded-b-none bg-goldenrod-200 shadow-[0px_23.1px_46.13px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(62.7px)] box-border w-[169.1px] h-[32.4px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[3.8px] left-[12.5px] tracking-[-0.01em] leading-[30.75px] capitalize font-semibold flex items-center w-[156.7px] h-[23.1px]">
                      Climate Smart Program
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-[0px] left-[297.9px] rounded-tl-none rounded-tr-[19.22px] rounded-br-none rounded-bl-[19.22px] bg-white box-border w-[253.7px] h-[254.7px] overflow-hidden [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-darkslategray-700"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[220.1px] left-[168.2px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Savanna
                  </div>
                  <img
                    className="absolute top-[0px] left-[-1px] w-[254.7px] h-[142.2px] object-cover"
                    alt=""
                    src="/base88@2x.png"
                  />
                  <div className="absolute top-[163.4px] left-[9.6px] text-xs-5 tracking-[0.01em] leading-[14.42px] inline-block w-[240.3px]">
                    <p className="m-0">
                      <span className="font-light font-poppins">{`Run by our clients `}</span>
                      <span className="font-medium font-poppins">
                        May and Lotte,
                      </span>
                      <span className="font-light">
                        {" "}
                        employed solutions from Agrospectum to streamline
                        purchases and payments for the aggregated commodities.
                      </span>
                    </p>
                  </div>
                  <div className="absolute top-[124.9px] left-[-1.9px] w-[154.7px] h-[32.4px] text-smi-5 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[154.7px] h-[32.4px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.69px] rounded-b-none bg-goldenrod-200 shadow-[0px_23.1px_46.13px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(62.7px)] box-border w-[154.7px] h-[32.4px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[3.8px] left-[12.5px] tracking-[-0.01em] leading-[30.75px] capitalize font-semibold flex items-center w-[142.2px] h-[23.1px]">
                      Aggregation Program
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-[0px] left-[593px] rounded-tl-none rounded-tr-[19.22px] rounded-br-none rounded-bl-[19.22px] bg-white box-border w-[253.7px] h-[254.7px] overflow-hidden [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-darkslategray-700"
                  data-animate-on-scroll
                >
                  <div className="absolute top-[221px] left-[143.2px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-1px] w-[254.7px] h-[142.2px] object-contain"
                    alt=""
                    src="/base441@2x.png"
                  />
                  <div className="absolute top-[163.4px] left-[11.5px] text-xs-5 tracking-[0.01em] leading-[14.42px] font-light inline-block w-[223px]">{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                  <div className="absolute top-[124px] left-[-1.9px] w-[147px] h-[32.4px] text-smi-5 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[147px] h-[32.4px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.69px] rounded-b-none bg-goldenrod-200 shadow-[0px_23.1px_46.13px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(62.7px)] box-border w-[147px] h-[32.4px] border-[1px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[4.8px] left-[14.4px] tracking-[-0.01em] leading-[30.75px] capitalize font-semibold flex items-center w-[89.4px] h-[23.1px]">
                      FARMER KYC
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[62.5px] left-[calc(50%_-_190.8px)] text-lg-3 leading-[100%] font-extrabold text-darkolivegreen-100">
                The nations’s best digital Agric Platform
              </div>
              <b
                className="absolute top-[79.8px] left-[calc(50%_-_120.6px)] text-19xl-4 text-darkslategray-200 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                Our Projects
              </b>
              <div className="absolute top-[300.8px] left-[59.6px] w-[149.9px] h-[31px] text-smi-5 text-darkslategray-200">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.69px] rounded-b-none bg-goldenrod-200 shadow-[0px_23.1px_46.13px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(62.7px)] box-border w-[149.9px] overflow-hidden flex flex-row items-center justify-center py-0 px-[5.766277313232422px] border-[1px] border-solid border-gray-1500">
                  <div className="relative tracking-[-0.01em] leading-[30.75px] capitalize font-semibold whitespace-pre-wrap">{`Farmer Registration   `}</div>
                </div>
              </div>
              <div className="absolute top-[759.2px] left-[92.3px] w-[793.8px] h-[15.7px] text-center text-lgi-2 text-gray-1400">
                <div className="absolute top-[0px] left-[514.2px] w-[279.7px] h-[12.5px] overflow-hidden">
                  <div className="absolute w-[3.04%] top-[calc(50%_-_10.05px)] left-[87.56%] font-black inline-block">
                    
                  </div>
                  <div className="absolute h-[14.4%] w-[96.21%] top-[43.2%] right-[14.8%] bottom-[42.4%] left-[-11.01%] bg-gray-1400" />
                  <div className="absolute w-[3.04%] top-[calc(50%_-_10.05px)] left-[96.93%] font-black text-sandybrown inline-block">
                    
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[42.1px] h-[15.7px]"
                  alt=""
                  src="/paginations1.svg"
                />
              </div>
            </div>
            <div className="absolute top-[869.7px] left-[calc(50%_-_498.3px)] w-[987px] h-[540.1px] overflow-hidden text-lg-3 text-darkolivegreen-100">
              <div
                className="absolute top-[60.5px] left-[calc(50%_-_190.8px)] w-[357px] h-[77.2px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[calc(50%_-_178.5px)] leading-[100%] font-extrabold">
                  <span>{`The renown companies that `}</span>
                  <span className="text-[21.1px]">Trust Us</span>
                </div>
                <b className="absolute top-[19.2px] left-[calc(50%_-_108.3px)] text-19xl-4 text-darkslategray-200">
                  Our Partners
                </b>
              </div>
              <img
                className="absolute top-[484.4px] left-[450.7px] w-[42.1px] h-[15.7px]"
                alt=""
                src="/project-arrow4.svg"
              />
            </div>
            <img
              className="absolute top-[315.2px] left-[-396px] w-[541.1px] h-[746.7px]"
              alt=""
              src="/vector-2151.svg"
            />
            <img
              className="absolute top-[463.2px] left-[1359.9px] w-[61.5px] h-[61.5px] overflow-hidden object-contain"
              alt=""
              src="/navrightsvg-fill.svg"
            />
            <div
              className="absolute top-[1054px] left-[427px] w-[855px] flex flex-col items-center justify-start gap-[12px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-4xs-6 text-black font-montserrat"
              data-animate-on-scroll
            >
              <div className="self-stretch relative h-[75px]">
                <img
                  className="absolute top-[7.7px] left-[0px] w-[110.5px] h-[67.3px] object-cover"
                  alt=""
                  src="/download-5521@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[691.9px] w-[163.1px] h-[68.2px] object-cover"
                  alt=""
                  src="/download-6261@2x.png"
                />
                <img
                  className="absolute top-[12.5px] left-[216.9px] w-[71.8px] h-[55.7px] object-cover"
                  alt=""
                  src="/download-3261@2x.png"
                />
                <img
                  className="absolute top-[2.9px] left-[404.2px] w-[205.7px] h-[71.1px] object-cover"
                  alt=""
                  src="/capture34@2x.png"
                />
              </div>
              <div className="self-stretch relative h-[96.1px]">
                <img
                  className="absolute top-[30.8px] left-[284px] w-[136.1px] h-[45.2px] object-cover mix-blend-difference"
                  alt=""
                  src="/images261@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[644px] w-[91.3px] h-[96.1px] object-cover"
                  alt=""
                  src="/images-1261@2x.png"
                />
                <img
                  className="absolute top-[16.3px] left-[442.8px] w-[149.7px] h-[62.5px] object-cover"
                  alt=""
                  src="/download-1271@2x.png"
                />
                <img
                  className="absolute top-[25.9px] left-[0px] w-[79.4px] h-[54.8px] object-cover"
                  alt=""
                  src="/download-5531@2x.png"
                />
                <img
                  className="absolute top-[21.1px] left-[165.7px] w-[59.2px] h-[62.5px] object-cover"
                  alt=""
                  src="/download-2271@2x.png"
                />
                <div className="absolute top-[1px] left-[787.9px] w-[67.1px] h-[84px]">
                  <div className="absolute top-[73px] left-[5.9px] tracking-[0.1em] font-medium flex items-center w-[56.4px]">
                    AGROMITE
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[67.1px] h-[72.1px] object-cover"
                    alt=""
                    src="/download261@2x.png"
                  />
                </div>
              </div>
              <img
                className="relative w-[266.2px] h-[59.6px] object-cover"
                alt=""
                src="/group-915@2x.png"
              />
            </div>
            <img
              className="absolute top-[-95px] left-[-159px] w-[563px] h-[777px]"
              alt=""
              src="/vector-235.svg"
            />
          </div>
          <div className="bg-honeydew-100 w-[422.9px] overflow-hidden hidden flex-col items-center justify-start py-[9.274839401245117px] px-0 box-border relative text-xs-5 sm:flex mq350small:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-19px] left-[301px] w-[139.4px] h-[192.3px] z-[0]"
              alt=""
              src="/vector-216.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[66.8px] left-[75.6px] w-[277.8px] h-[383.7px] z-[1]"
              alt=""
              src="/vector-2212.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[12.5px] left-[-16.2px] w-[139.4px] h-[192.3px] z-[2]"
              alt=""
              src="/vector-2311.svg"
            />
            <div className="flex flex-col items-center justify-start py-[25.97657012939453px] px-0 relative gap-[24.68px] z-[3]">
              <div className="flex flex-col items-center justify-start gap-[10px] z-[0]">
                <div
                  className="flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                  <b className="relative text-5xl-2 text-darkslategray-200">
                    Our Projects
                  </b>
                </div>
                <div className="flex flex-col items-center justify-start gap-[20px] text-xs-2 text-dimgray-100">
                  <div className="flex flex-col items-start justify-start gap-[37.44px] font-lexend-deca">
                    <div
                      className="relative w-[211.2px] h-[211.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[0px] left-[0.1px] rounded-tl-none rounded-tr-[15.99px] rounded-br-none rounded-bl-[15.99px] bg-white box-border w-[211px] h-[211.8px] overflow-hidden border-[0.8px] border-solid border-darkslategray-700">
                        <div className="absolute top-[187.1px] left-[97.5px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          @Northern Ghana
                        </div>
                        <img
                          className="absolute top-[0px] left-[-0.8px] w-[211.8px] h-[118.3px] object-cover"
                          alt=""
                          src="/base451@2x.png"
                        />
                        <div className="absolute top-[135.9px] left-[9.6px] text-3xs-6 tracking-[0.01em] leading-[11.99px] font-light font-poppins inline-block w-[187.9px]">
                          An enumeration program by the Government of Ghana
                          through the Ministry of Food and Agriculture that
                          profiles farmers for inclusion.
                        </div>
                      </div>
                      <div className="absolute top-[103.6px] left-[0px] w-[124.7px] h-[26px] text-2xs-4 text-darkslategray-200 font-poppins">
                        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[6.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_19.2px_38.37px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(52.15px)] box-border w-[124.7px] overflow-hidden flex flex-row items-center justify-center py-0 px-[4.796205520629883px] border-[0.8px] border-solid border-gray-1500">
                          <div className="relative tracking-[-0.01em] leading-[25.58px] capitalize font-semibold whitespace-pre-wrap">{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative rounded-tl-none rounded-tr-[15.99px] rounded-br-none rounded-bl-[15.99px] bg-white box-border w-[211px] h-[211.8px] overflow-hidden shrink-0 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-poppins border-[0.8px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[183.1px] left-[121.5px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.8px] w-[211.8px] h-[118.3px] object-cover"
                        alt=""
                        src="/base89@2x.png"
                      />
                      <div className="absolute top-[137.5px] left-[8.8px] text-3xs-6 tracking-[0.01em] leading-[11.99px] font-light inline-block w-[199.8px]">
                        A flagship program of the MoFA(Ghana) that used
                        Agrospectrum’s mobile application provide input Subsidy
                        to farmers.
                      </div>
                      <div className="absolute top-[103.9px] left-[-1.6px] w-[122.3px] h-[27px] text-2xs-4 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[122.3px] h-[27px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[6.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_19.2px_38.37px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(52.15px)] box-border w-[122.3px] h-[27px] border-[0.8px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4px] left-[14.4px] tracking-[-0.01em] leading-[25.58px] capitalize font-semibold flex items-center w-[98.3px] h-[19.2px]">{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div
                      className="relative rounded-tl-none rounded-tr-[15.99px] rounded-br-none rounded-bl-[15.99px] bg-white box-border w-[211px] h-[211.8px] overflow-hidden shrink-0 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.8px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[188.7px] left-[125.5px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.8px] w-[211.8px] h-[118.3px] object-cover"
                        alt=""
                        src="/base90@2x.png"
                      />
                      <div className="absolute top-[135.9px] left-[8.8px] text-3xs-6 tracking-[0.01em] leading-[11.99px] font-light inline-block w-[199.8px]">{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                      <div className="absolute top-[102.3px] left-[-1.6px] w-[140.7px] h-[27px] text-2xs-4 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[140.7px] h-[27px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[6.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_19.2px_38.37px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(52.15px)] box-border w-[140.7px] h-[27px] border-[0.8px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.2px] left-[10.4px] tracking-[-0.01em] leading-[25.58px] capitalize font-semibold flex items-center w-[130.3px] h-[19.2px]">
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative rounded-tl-none rounded-tr-[15.99px] rounded-br-none rounded-bl-[15.99px] bg-white box-border w-[211px] h-[211.8px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.8px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[183.1px] left-[139.9px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Savanna
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.8px] w-[211.8px] h-[118.3px] object-cover"
                        alt=""
                        src="/base481@2x.png"
                      />
                      <div className="absolute top-[135.9px] left-[8px] text-3xs-6 tracking-[0.01em] leading-[11.99px] inline-block w-[199.8px]">
                        <p className="m-0">
                          <span className="font-light font-poppins">{`Run by our clients `}</span>
                          <span className="font-medium font-poppins">
                            May and Lotte,
                          </span>
                          <span className="font-light">
                            {" "}
                            employed solutions from Agrospectum to streamline
                            purchases and payments for the aggregated
                            commodities.
                          </span>
                        </p>
                      </div>
                      <div className="absolute top-[103.9px] left-[-1.6px] w-[128.7px] h-[27px] text-2xs-4 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[128.7px] h-[27px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[6.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_19.2px_38.37px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(52.15px)] box-border w-[128.7px] h-[27px] border-[0.8px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.2px] left-[10.4px] tracking-[-0.01em] leading-[25.58px] capitalize font-semibold flex items-center w-[118.3px] h-[19.2px]">
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div
                      className="relative rounded-tl-none rounded-tr-[15.99px] rounded-br-none rounded-bl-[15.99px] bg-white box-border w-[211px] h-[211.8px] overflow-hidden shrink-0 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.8px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[183.9px] left-[123.1px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.8px] w-[211.8px] h-[118.3px] object-cover"
                        alt=""
                        src="/base91@2x.png"
                      />
                      <div className="absolute top-[135.9px] left-[9.6px] text-3xs-6 tracking-[0.01em] leading-[11.99px] inline-block w-[193.4px]">
                        <span className="font-light">{`A credit program spearheaded by `}</span>
                        <span className="font-medium">May and Lotte,</span>
                        <span className="font-light">
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className="absolute top-[103.9px] left-[-1.6px] w-[124.7px] h-[27px] text-2xs-4 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[124.7px] h-[27px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[6.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_19.2px_38.37px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(52.15px)] box-border w-[124.7px] h-[27px] border-[0.8px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4px] left-[13.6px] tracking-[-0.01em] leading-[25.58px] capitalize font-semibold flex items-center w-[111.1px] h-[19.2px]">{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                    <div
                      className="relative rounded-tl-none rounded-tr-[15.99px] rounded-br-none rounded-bl-[15.99px] bg-white box-border w-[211px] h-[211.8px] overflow-hidden shrink-0 [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.8px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[183.9px] left-[119.1px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[211px] w-[211.8px] h-[118.3px] object-contain"
                        alt=""
                        src="/base501@2x.png"
                      />
                      <div className="absolute top-[135.9px] left-[9.6px] text-3xs-6 tracking-[0.01em] leading-[11.99px] font-light inline-block w-[185.5px]">{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                      <div className="absolute top-[103.1px] left-[-1.6px] w-[122.3px] h-[27px] text-2xs-4 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[122.3px] h-[27px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[6.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_19.2px_38.37px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(52.15px)] box-border w-[122.3px] h-[27px] border-[0.8px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4px] left-[12px] tracking-[-0.01em] leading-[25.58px] capitalize font-semibold flex items-center w-[74.3px] h-[19.2px]">
                          FARMER KYC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-start gap-[16.88px] [&.animate]:animate-[6s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[1] text-[6.6px]"
                data-animate-on-scroll
              >
                <div className="relative w-[129px] h-[27.9px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_64.5px)] leading-[100%] font-extrabold">
                    <span>{`The renown companies that `}</span>
                    <span className="text-5xs-6">Trust Us</span>
                  </div>
                  <b className="absolute top-[6.9px] left-[calc(50%_-_39.2px)] text-sm-9 text-darkslategray-200">
                    Our Partners
                  </b>
                </div>
                <div className="relative w-[225.3px] h-[97.5px] text-[3.1px] text-black font-montserrat">
                  <div className="absolute top-[31.8px] left-[2.2px] w-[218.8px] h-[65.7px]">
                    <img
                      className="absolute top-[7px] left-[92.5px] w-[51.4px] h-[16.3px] object-cover mix-blend-difference"
                      alt=""
                      src="/images27@2x.png"
                    />
                    <img
                      className="absolute top-[31px] left-[180.6px] w-[34.5px] h-[34.7px] object-cover"
                      alt=""
                      src="/images-1271@2x.png"
                    />
                    <img
                      className="absolute top-[2px] left-[162.3px] w-[56.5px] h-[22.5px] object-cover"
                      alt=""
                      src="/download-128@2x.png"
                    />
                    <img
                      className="absolute top-[4px] left-[47.4px] w-[22.3px] h-[22.5px] object-cover"
                      alt=""
                      src="/download-228@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] w-[25.3px] h-[30.3px]">
                      <div className="absolute top-[26.3px] left-[2.2px] tracking-[0.1em] font-medium flex items-center w-[21.5px]">
                        AGROMITE
                      </div>
                      <img
                        className="absolute top-[0px] left-[0px] w-[25.3px] h-[26px] object-cover"
                        alt=""
                        src="/download27@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-[225.3px] h-[27px]">
                    <img
                      className="absolute top-[2.8px] left-[0px] w-[29.1px] h-[24.3px] object-cover"
                      alt=""
                      src="/download-554@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[182.3px] w-[43px] h-[24.6px] object-cover"
                      alt=""
                      src="/download-6271@2x.png"
                    />
                    <img
                      className="absolute top-[4.5px] left-[57.2px] w-[18.9px] h-[20.1px] object-cover"
                      alt=""
                      src="/download-327@2x.png"
                    />
                    <img
                      className="absolute top-[1px] left-[106.5px] w-[54.2px] h-[25.7px] object-cover"
                      alt=""
                      src="/capture271@2x.png"
                    />
                  </div>
                  <img
                    className="absolute top-[70.7px] left-[53px] w-24 h-[21.5px] object-cover"
                    alt=""
                    src="/group-9151@2x.png"
                  />
                </div>
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[498.8px] left-[142.5px] w-[15.2px] h-[5.7px] z-[2]"
                alt=""
                src="/project-arrow5.svg"
              />
            </div>
          </div>
          <div className="relative bg-honeydew-100 w-[1200px] h-[1011.5px] overflow-hidden shrink-0 hidden text-3xs-3 text-dimgray-100 lg:flex md:hidden md:w-[1200px]">
            <img
              className="absolute top-[160.8px] left-[1089.6px] w-[375.6px] h-[518.4px]"
              alt=""
              src="/vector-217.svg"
            />
            <img
              className="absolute top-[95.4px] left-[247.5px] w-[748.6px] h-[1034.2px]"
              alt=""
              src="/vector-226.svg"
            />
            <div className="absolute top-[28px] left-[calc(50%_-_346.5px)] w-[685.2px] h-[581.2px] overflow-hidden">
              <div
                className="absolute top-[121.4px] left-[40.7px] w-[587.8px] h-[176.8px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[13.34px] rounded-br-none rounded-bl-[13.34px] bg-white box-border w-[176.1px] h-[176.8px] overflow-hidden font-lexend-deca border-[0.7px] border-solid border-darkslategray-700">
                  <div className="absolute top-[156.1px] left-[81.4px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Northern Ghana
                  </div>
                  <img
                    className="absolute top-[0px] left-[-0.7px] w-[176.8px] h-[98.7px] object-cover"
                    alt=""
                    src="/base511@2x.png"
                  />
                  <div className="absolute top-[113.4px] left-[8px] text-5xs tracking-[0.01em] leading-[10.01px] font-light font-poppins inline-block w-[156.8px]">
                    An enumeration program by the Government of Ghana through
                    the Ministry of Food and Agriculture that profiles farmers
                    for inclusion.
                  </div>
                </div>
                <div className="absolute top-[0px] left-[206.8px] rounded-tl-none rounded-tr-[13.34px] rounded-br-none rounded-bl-[13.34px] bg-white box-border w-[176.1px] h-[176.8px] overflow-hidden border-[0.7px] border-solid border-darkslategray-700">
                  <div className="absolute top-[152.8px] left-[101.4px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-0.7px] w-[176.8px] h-[98.7px] object-cover"
                    alt=""
                    src="/base521@2x.png"
                  />
                  <div className="absolute top-[114.8px] left-[7.3px] text-5xs tracking-[0.01em] leading-[10.01px] font-light inline-block w-[166.8px]">
                    A flagship program of the MoFA(Ghana) that used
                    Agrospectrum’s mobile application provide input Subsidy to
                    farmers.
                  </div>
                  <div className="absolute top-[86.7px] left-[-1.3px] w-[102.1px] h-[22.5px] text-4xs-7 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[102.1px] h-[22.5px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.34px] rounded-b-none bg-goldenrod-200 shadow-[0px_16px_32.03px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.53px)] box-border w-[102.1px] h-[22.5px] border-[0.7px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[3.3px] left-[12px] tracking-[-0.01em] leading-[21.35px] capitalize font-semibold flex items-center w-[82.1px] h-4">{`E-Subsidy `}</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[411.7px] rounded-tl-none rounded-tr-[13.34px] rounded-br-none rounded-bl-[13.34px] bg-white box-border w-[176.1px] h-[176.8px] overflow-hidden border-[0.7px] border-solid border-darkslategray-700">
                  <div className="absolute top-[153.5px] left-[102.8px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-0.7px] w-[176.8px] h-[98.7px] object-cover"
                    alt=""
                    src="/base92@2x.png"
                  />
                  <div className="absolute top-[113.4px] left-[8px] text-5xs tracking-[0.01em] leading-[10.01px] inline-block w-[161.5px]">
                    <span className="font-light">{`A credit program spearheaded by `}</span>
                    <span className="font-medium">May and Lotte,</span>
                    <span className="font-light">
                      {" "}
                      leveraged our cutting-edge solutions at the crucial
                      redemption stage for a streamlined process.
                    </span>
                  </div>
                  <div className="absolute top-[86.7px] left-[-1.3px] w-[104.1px] h-[22.5px] text-4xs-7 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[104.1px] h-[22.5px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.34px] rounded-b-none bg-goldenrod-200 shadow-[0px_16px_32.03px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.53px)] box-border w-[104.1px] h-[22.5px] border-[0.7px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[3.3px] left-[11.3px] tracking-[-0.01em] leading-[21.35px] capitalize font-semibold flex items-center w-[92.7px] h-4">{`Input Credit Mgt. `}</div>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[324.3px] left-[40px] w-[587.8px] h-[176.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[13.34px] rounded-br-none rounded-bl-[13.34px] bg-white box-border w-[176.1px] h-[176.8px] overflow-hidden border-[0.7px] border-solid border-darkslategray-700">
                  <div className="absolute top-[157.5px] left-[104.8px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[-0.7px] w-[176.8px] h-[98.7px] object-cover"
                    alt=""
                    src="/base541@2x.png"
                  />
                  <div className="absolute top-[113.4px] left-[7.3px] text-5xs tracking-[0.01em] leading-[10.01px] font-light inline-block w-[166.8px]">{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                  <div className="absolute top-[85.4px] left-[-1.3px] w-[117.4px] h-[22.5px] text-4xs-7 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[117.4px] h-[22.5px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.34px] rounded-b-none bg-goldenrod-200 shadow-[0px_16px_32.03px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.53px)] box-border w-[117.4px] h-[22.5px] border-[0.7px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[2.7px] left-[8.7px] tracking-[-0.01em] leading-[21.35px] capitalize font-semibold flex items-center w-[108.8px] h-4">
                      Climate Smart Program
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[206.8px] rounded-tl-none rounded-tr-[13.34px] rounded-br-none rounded-bl-[13.34px] bg-white box-border w-[176.1px] h-[176.8px] overflow-hidden border-[0.7px] border-solid border-darkslategray-700">
                  <div className="absolute top-[152.8px] left-[116.8px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Savanna
                  </div>
                  <img
                    className="absolute top-[0px] left-[-0.7px] w-[176.8px] h-[98.7px] object-cover"
                    alt=""
                    src="/base551@2x.png"
                  />
                  <div className="absolute top-[113.4px] left-[6.7px] text-5xs tracking-[0.01em] leading-[10.01px] inline-block w-[166.8px]">
                    <p className="m-0">
                      <span className="font-light font-poppins">{`Run by our clients `}</span>
                      <span className="font-medium font-poppins">
                        May and Lotte,
                      </span>
                      <span className="font-light">
                        {" "}
                        employed solutions from Agrospectum to streamline
                        purchases and payments for the aggregated commodities.
                      </span>
                    </p>
                  </div>
                  <div className="absolute top-[86.7px] left-[-1.3px] w-[107.4px] h-[22.5px] text-4xs-7 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[107.4px] h-[22.5px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.34px] rounded-b-none bg-goldenrod-200 shadow-[0px_16px_32.03px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.53px)] box-border w-[107.4px] h-[22.5px] border-[0.7px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[2.7px] left-[8.7px] tracking-[-0.01em] leading-[21.35px] capitalize font-semibold flex items-center w-[98.7px] h-4">
                      Aggregation Program
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[411.7px] rounded-tl-none rounded-tr-[13.34px] rounded-br-none rounded-bl-[13.34px] bg-white box-border w-[176.1px] h-[176.8px] overflow-hidden border-[0.7px] border-solid border-darkslategray-700">
                  <div className="absolute top-[153.5px] left-[99.4px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    @Nationwide
                  </div>
                  <img
                    className="absolute top-[0px] left-[176.1px] w-[176.8px] h-[98.7px] object-contain"
                    alt=""
                    src="/base561@2x.png"
                  />
                  <div className="absolute top-[113.4px] left-[8px] text-5xs tracking-[0.01em] leading-[10.01px] font-light inline-block w-[154.8px]">{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                  <div className="absolute top-[86.1px] left-[-1.3px] w-[102.1px] h-[22.5px] text-4xs-7 text-darkslategray-200">
                    <div className="absolute top-[0px] left-[0px] w-[102.1px] h-[22.5px]">
                      <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.34px] rounded-b-none bg-goldenrod-200 shadow-[0px_16px_32.03px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.53px)] box-border w-[102.1px] h-[22.5px] border-[0.7px] border-solid border-gray-1500" />
                    </div>
                    <div className="absolute top-[3.3px] left-[10px] tracking-[-0.01em] leading-[21.35px] capitalize font-semibold flex items-center w-[62.1px] h-4">
                      FARMER KYC
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[43.4px] left-[calc(50%_-_132.4px)] text-smi-7 leading-[100%] font-extrabold text-darkolivegreen-100">
                The nations’s best digital Agric Platform
              </div>
              <b
                className="absolute top-[55.4px] left-[calc(50%_-_83.7px)] text-7xl-7 text-darkslategray-200 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                Our Projects
              </b>
              <div className="absolute top-[208.8px] left-[41.4px] w-[104.1px] h-[22px] text-4xs-7 text-darkslategray-200">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.34px] rounded-b-none bg-goldenrod-200 shadow-[0px_16px_32.03px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.53px)] box-border w-[104.1px] overflow-hidden flex flex-row items-center justify-center py-0 px-[4.003338813781738px] border-[0.7px] border-solid border-gray-1500">
                  <div className="relative tracking-[-0.01em] leading-[21.35px] capitalize font-semibold whitespace-pre-wrap">{`Farmer Registration   `}</div>
                </div>
              </div>
              <div className="absolute top-[527.1px] left-[64.1px] w-[551.1px] h-[10.9px] text-center text-sm-3 text-gray-1400">
                <div className="absolute top-[0px] left-[357px] w-[194.2px] h-[8.7px] overflow-hidden">
                  <div className="absolute w-[3.04%] top-[calc(50%_-_7.05px)] left-[87.54%] font-black inline-block">
                    
                  </div>
                  <div className="absolute h-[13.79%] w-[96.19%] top-[42.53%] right-[14.83%] bottom-[43.68%] left-[-11.02%] bg-gray-1400" />
                  <div className="absolute w-[3.04%] top-[calc(50%_-_7.05px)] left-[96.91%] font-black text-sandybrown inline-block">
                    
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-[29.2px] h-[10.9px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[10.9px] h-[10.9px]"
                    alt=""
                    src="/group-18511.svg"
                  />
                  <img
                    className="absolute top-[4.4px] left-[15.3px] w-[3px] h-[3px]"
                    alt=""
                    src="/group-18861.svg"
                  />
                  <img
                    className="absolute top-[4.4px] left-[26.2px] w-[3px] h-[3px]"
                    alt=""
                    src="/group-18951.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[603.8px] left-[calc(50%_-_346.5px)] w-[685.2px] h-[375px] overflow-hidden text-center text-smi-7 text-darkolivegreen-100">
              <div
                className="absolute top-[42px] left-[calc(50%_-_132.4px)] w-[270px] h-[53.3px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[calc(50%_-_135px)] leading-[100%] font-extrabold flex items-center w-[270px]">
                  <span className="w-full">
                    <span>{`The renown companies that `}</span>
                    <span className="text-[14.7px]">Trust Us</span>
                  </span>
                </div>
                <b className="absolute top-[13.3px] left-[calc(50%_-_82.9px)] text-7xl-7 inline-block text-darkslategray-200 text-left w-[186.1px]">
                  Our Partners
                </b>
              </div>
              <div className="absolute top-[336.3px] left-[312.9px] w-[29.2px] h-[10.9px]">
                <div className="absolute top-[0px] left-[0px] w-[29.2px] h-[10.9px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[10.9px] h-[10.9px]"
                    alt=""
                    src="/group-18511.svg"
                  />
                  <img
                    className="absolute top-[4.4px] left-[15.3px] w-[3px] h-[3px]"
                    alt=""
                    src="/group-1887.svg"
                  />
                  <img
                    className="absolute top-[4.4px] left-[26.2px] w-[3px] h-[3px]"
                    alt=""
                    src="/group-18951.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[218.8px] left-[-274.9px] w-[375.6px] h-[518.4px]"
              alt=""
              src="/vector-217.svg"
            />
            <div
              className="absolute top-[731.9px] left-[296.2px] w-[578.5px] h-[177.5px] [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-7xs text-black font-montserrat"
              data-animate-on-scroll
            >
              <div className="absolute top-[57.4px] left-[0px] w-[578.5px] h-[66.7px]">
                <img
                  className="absolute top-[21.4px] left-[192.2px] w-[92.1px] h-[31.4px] object-cover mix-blend-difference"
                  alt=""
                  src="/images28@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[435.7px] w-[61.8px] h-[66.7px] object-cover"
                  alt=""
                  src="/images-128@2x.png"
                />
                <img
                  className="absolute top-[11.3px] left-[299.6px] w-[101.3px] h-[43.4px] object-cover"
                  alt=""
                  src="/download-129@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[0px] w-[53.7px] h-[38px] object-cover"
                  alt=""
                  src="/download-555@2x.png"
                />
                <img
                  className="absolute top-[14.7px] left-[112.1px] w-10 h-[43.4px] object-cover"
                  alt=""
                  src="/download-229@2x.png"
                />
                <div className="absolute top-[0.7px] left-[533.1px] w-[45.4px] h-[57.7px]">
                  <div className="absolute top-[50.7px] left-[4px] tracking-[0.1em] font-medium">
                    AGROMITE
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[45.4px] h-[50px] object-cover"
                    alt=""
                    src="/download28@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[94.7px] w-[433.7px] h-[52px]">
                <img
                  className="absolute top-[5.3px] left-[0px] w-14 h-[46.7px] object-cover"
                  alt=""
                  src="/download-556@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[351px] w-[82.7px] h-[47.4px] object-cover"
                  alt=""
                  src="/download-634@2x.png"
                />
                <img
                  className="absolute top-[8.7px] left-[110px] w-[36.4px] h-[38.7px] object-cover"
                  alt=""
                  src="/download-328@2x.png"
                />
                <img
                  className="absolute top-[2px] left-[205px] w-[104.4px] h-[49.4px] object-cover"
                  alt=""
                  src="/capture35@2x.png"
                />
              </div>
              <img
                className="absolute top-[136.1px] left-[196.8px] w-[184.8px] h-[41.4px] object-cover"
                alt=""
                src="/group-9152@2x.png"
              />
            </div>
          </div>
          <div className="bg-honeydew-100 w-[964px] overflow-hidden hidden flex-col items-center justify-start py-[21.162277221679688px] px-0 box-border relative text-sm-3 md:flex sm:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-43.4px] left-[686.7px] w-[318px] h-[438.9px] z-[0]"
              alt=""
              src="/vector-218.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[28.6px] left-[-37px] w-[318px] h-[438.9px] z-[1]"
              alt=""
              src="/vector-218.svg"
            />
            <div className="flex flex-col items-center justify-start py-[52.34640121459961px] px-0 relative gap-[49.73px] z-[2]">
              <img
                className="absolute my-0 mx-[!important] top-[523.8px] left-[-29.7px] w-[633.8px] h-[875.5px] z-[0]"
                alt=""
                src="/vector-227.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[39.26px] z-[1]">
                <div
                  className="flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                  <b className="relative text-8xl-9 text-darkslategray-200">
                    Our Projects
                  </b>
                </div>
                <div className="flex flex-col items-center justify-start gap-[48.46px] text-smi-9 text-dimgray-100">
                  <div
                    className="flex flex-row items-start justify-start gap-[43.27px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-lexend-deca"
                    data-animate-on-scroll
                  >
                    <div className="relative w-[244.1px] h-[244.8px]">
                      <div className="absolute top-[0px] left-[0.2px] rounded-tl-none rounded-tr-[18.48px] rounded-br-none rounded-bl-[18.48px] bg-white box-border w-[243.9px] h-[244.8px] overflow-hidden border-[0.9px] border-solid border-darkslategray-700">
                        <div className="absolute top-[216.2px] left-[112.7px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          @Northern Ghana
                        </div>
                        <img
                          className="absolute top-[0px] left-[-0.9px] w-[244.8px] h-[136.7px] object-cover"
                          alt=""
                          src="/base571@2x.png"
                        />
                        <div className="absolute top-[157.1px] left-[11.1px] text-xs-1 tracking-[0.01em] leading-[13.86px] font-light font-poppins inline-block w-[217.1px]">
                          An enumeration program by the Government of Ghana
                          through the Ministry of Food and Agriculture that
                          profiles farmers for inclusion.
                        </div>
                      </div>
                      <div className="absolute top-[119.7px] left-[0px] w-[144.1px] h-[30px] text-xs text-darkslategray-200 font-poppins">
                        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_22.2px_44.35px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(60.27px)] box-border w-[144.1px] overflow-hidden flex flex-row items-center justify-center py-0 px-[5.543385982513428px] border-[0.9px] border-solid border-gray-1500">
                          <div className="relative tracking-[-0.01em] leading-[29.56px] capitalize font-semibold whitespace-pre-wrap">{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-tl-none rounded-tr-[18.48px] rounded-br-none rounded-bl-[18.48px] bg-white box-border w-[243.9px] h-[244.8px] overflow-hidden shrink-0 font-poppins border-[0.9px] border-solid border-darkslategray-700">
                      <div className="absolute top-[211.6px] left-[140.4px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.9px] w-[244.8px] h-[136.7px] object-cover"
                        alt=""
                        src="/base581@2x.png"
                      />
                      <div className="absolute top-[158.9px] left-[10.2px] text-xs-1 tracking-[0.01em] leading-[13.86px] font-light inline-block w-[231px]">
                        A flagship program of the MoFA(Ghana) that used
                        Agrospectrum’s mobile application provide input Subsidy
                        to farmers.
                      </div>
                      <div className="absolute top-[120.1px] left-[-1.8px] w-[141.4px] h-[31.2px] text-xs text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[141.4px] h-[31.2px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_22.2px_44.35px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(60.27px)] box-border w-[141.4px] h-[31.2px] border-[0.9px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4.6px] left-[16.6px] tracking-[-0.01em] leading-[29.56px] capitalize font-semibold flex items-center w-[113.6px] h-[22.2px]">{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start gap-[43.27px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative rounded-tl-none rounded-tr-[18.48px] rounded-br-none rounded-bl-[18.48px] bg-white box-border w-[243.9px] h-[244.8px] overflow-hidden shrink-0 border-[0.9px] border-solid border-darkslategray-700">
                      <div className="absolute top-[218px] left-[145.1px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.9px] w-[244.8px] h-[136.7px] object-cover"
                        alt=""
                        src="/base93@2x.png"
                      />
                      <div className="absolute top-[157.1px] left-[10.2px] text-xs-1 tracking-[0.01em] leading-[13.86px] font-light inline-block w-[231px]">{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                      <div className="absolute top-[118.3px] left-[-1.8px] w-[162.6px] h-[31.2px] text-xs text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[162.6px] h-[31.2px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_22.2px_44.35px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(60.27px)] box-border w-[162.6px] h-[31.2px] border-[0.9px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.7px] left-[12px] tracking-[-0.01em] leading-[29.56px] capitalize font-semibold flex items-center w-[150.6px] h-[22.2px]">
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-tl-none rounded-tr-[18.48px] rounded-br-none rounded-bl-[18.48px] bg-white box-border w-[243.9px] h-[244.8px] overflow-hidden shrink-0 border-[0.9px] border-solid border-darkslategray-700">
                      <div className="absolute top-[211.6px] left-[161.7px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Savanna
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.9px] w-[244.8px] h-[136.7px] object-cover"
                        alt=""
                        src="/base60@2x.png"
                      />
                      <div className="absolute top-[157.1px] left-[9.2px] text-xs-1 tracking-[0.01em] leading-[13.86px] inline-block w-[231px]">
                        <p className="m-0">
                          <span className="font-light font-poppins">{`Run by our clients `}</span>
                          <span className="font-medium font-poppins">
                            May and Lotte,
                          </span>
                          <span className="font-light">
                            {" "}
                            employed solutions from Agrospectum to streamline
                            purchases and payments for the aggregated
                            commodities.
                          </span>
                        </p>
                      </div>
                      <div className="absolute top-[120.1px] left-[-1.8px] w-[148.7px] h-[31.2px] text-xs text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[148.7px] h-[31.2px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_22.2px_44.35px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(60.27px)] box-border w-[148.7px] h-[31.2px] border-[0.9px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.7px] left-[12px] tracking-[-0.01em] leading-[29.56px] capitalize font-semibold flex items-center w-[136.7px] h-[22.2px]">
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start gap-[36.35px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="relative rounded-tl-none rounded-tr-[18.48px] rounded-br-none rounded-bl-[18.48px] bg-white box-border w-[243.9px] h-[244.8px] overflow-hidden shrink-0 border-[0.9px] border-solid border-darkslategray-700">
                      <div className="absolute top-[212.5px] left-[142.3px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.9px] w-[244.8px] h-[136.7px] object-cover"
                        alt=""
                        src="/base61@2x.png"
                      />
                      <div className="absolute top-[157.1px] left-[11.1px] text-xs-1 tracking-[0.01em] leading-[13.86px] inline-block w-[223.6px]">
                        <span className="font-light">{`A credit program spearheaded by `}</span>
                        <span className="font-medium">May and Lotte,</span>
                        <span className="font-light">
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className="absolute top-[120.1px] left-[-1.8px] w-[144.1px] h-[31.2px] text-xs text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[144.1px] h-[31.2px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_22.2px_44.35px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(60.27px)] box-border w-[144.1px] h-[31.2px] border-[0.9px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4.6px] left-[15.7px] tracking-[-0.01em] leading-[29.56px] capitalize font-semibold flex items-center w-[128.4px] h-[22.2px]">{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                    <div className="relative rounded-tl-none rounded-tr-[18.48px] rounded-br-none rounded-bl-[18.48px] bg-white box-border w-[243.9px] h-[244.8px] overflow-hidden shrink-0 border-[0.9px] border-solid border-darkslategray-700">
                      <div className="absolute top-[212.5px] left-[137.7px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[243.9px] w-[244.8px] h-[136.7px] object-contain"
                        alt=""
                        src="/base62@2x.png"
                      />
                      <div className="absolute top-[157.1px] left-[11.1px] text-xs-1 tracking-[0.01em] leading-[13.86px] font-light inline-block w-[214.3px]">{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                      <div className="absolute top-[119.2px] left-[-1.8px] w-[141.4px] h-[31.2px] text-xs text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[141.4px] h-[31.2px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[7.39px] rounded-b-none bg-goldenrod-200 shadow-[0px_22.2px_44.35px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(60.27px)] box-border w-[141.4px] h-[31.2px] border-[0.9px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4.6px] left-[13.9px] tracking-[-0.01em] leading-[29.56px] capitalize font-semibold flex items-center w-[85.9px] h-[22.2px]">
                          FARMER KYC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-start gap-[34.03px] [&.animate]:animate-[55s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[2]"
                data-animate-on-scroll
              >
                <div className="relative w-[260px] h-14">
                  <div className="absolute top-[0px] left-[calc(50%_-_130px)] leading-[100%] font-extrabold">
                    <span>{`The renown companies that `}</span>
                    <span className="text-[15.4px]">Trust Us</span>
                  </div>
                  <b className="absolute top-[14px] left-[calc(50%_-_79px)] text-8xl-9 text-darkslategray-200">
                    Our Partners
                  </b>
                </div>
                <div className="relative w-[605.7px] h-[185.8px] text-6xs-3 text-black font-montserrat">
                  <div className="absolute top-[60.1px] left-[0px] w-[605.7px] h-[69.9px]">
                    <img
                      className="absolute top-[22.4px] left-[201.2px] w-[96.4px] h-[32.8px] object-cover mix-blend-difference"
                      alt=""
                      src="/images29@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[456.2px] w-[64.7px] h-[69.9px] object-cover"
                      alt=""
                      src="/images-129@2x.png"
                    />
                    <img
                      className="absolute top-[11.9px] left-[313.7px] w-[106px] h-[45.4px] object-cover"
                      alt=""
                      src="/download-133@2x.png"
                    />
                    <img
                      className="absolute top-[18.9px] left-[0px] w-[56.3px] h-[39.8px] object-cover"
                      alt=""
                      src="/download-557@2x.png"
                    />
                    <img
                      className="absolute top-[15.4px] left-[117.4px] w-[41.9px] h-[45.4px] object-cover"
                      alt=""
                      src="/download-230@2x.png"
                    />
                    <div className="absolute top-[0.7px] left-[558.2px] w-[47.5px] h-[61.1px]">
                      <div className="absolute top-[53.1px] left-[4.2px] tracking-[0.1em] font-medium">
                        AGROMITE
                      </div>
                      <img
                        className="absolute top-[0px] left-[0px] w-[47.5px] h-[52.4px] object-cover"
                        alt=""
                        src="/download29@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[99.2px] w-[454.1px] h-[54.5px]">
                    <img
                      className="absolute top-[5.6px] left-[0px] w-[58.7px] h-[48.9px] object-cover"
                      alt=""
                      src="/download-564@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[367.5px] w-[86.6px] h-[49.6px] object-cover"
                      alt=""
                      src="/download-635@2x.png"
                    />
                    <img
                      className="absolute top-[9.1px] left-[115.2px] w-[38.1px] h-[40.5px] object-cover"
                      alt=""
                      src="/download-329@2x.png"
                    />
                    <img
                      className="absolute top-[2.1px] left-[214.7px] w-[109.3px] h-[51.7px] object-cover"
                      alt=""
                      src="/capture29@2x.png"
                    />
                  </div>
                  <img
                    className="absolute top-[142.5px] left-[206.1px] w-[193.5px] h-[43.3px] object-cover"
                    alt=""
                    src="/group-9153@2x.png"
                  />
                </div>
              </div>
              <div className="absolute my-0 mx-[!important] top-[1005.1px] left-[287.1px] w-[30.6px] h-[11.4px] z-[3]">
                <div className="absolute top-[0px] left-[0px] w-[30.6px] h-[11.4px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[11.4px] h-[11.4px]"
                    alt=""
                    src="/group-1852.svg"
                  />
                  <img
                    className="absolute top-[4.6px] left-[16px] w-[3.2px] h-[3.2px]"
                    alt=""
                    src="/group-1888.svg"
                  />
                  <img
                    className="absolute top-[4.6px] left-[27.4px] w-[3.2px] h-[3.2px]"
                    alt=""
                    src="/group-1896.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-honeydew-100 w-[350px] overflow-hidden hidden flex-col items-center justify-start py-[7.6750407218933105px] px-0 box-border relative text-3xs-5 mq350small:flex">
            <img
              className="absolute my-0 mx-[!important] top-[-15.7px] left-[249.1px] w-[115.3px] h-[159.2px] z-[0]"
              alt=""
              src="/vector-219.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[55.3px] left-[62.6px] w-[229.8px] h-[317.5px] z-[1]"
              alt=""
              src="/vector-228.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[10.4px] left-[-13.4px] w-[115.3px] h-[159.2px] z-[2]"
              alt=""
              src="/vector-237.svg"
            />
            <div className="flex flex-col items-center justify-start py-[21.495922088623047px] px-0 relative gap-[20.42px] z-[3]">
              <div className="flex flex-col items-center justify-start gap-[8.28px] z-[0]">
                <div
                  className="flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="relative leading-[100%] font-extrabold">
                    The nations’s best digital Agric Platform
                  </div>
                  <b className="relative text-xl text-darkslategray-200">
                    Our Projects
                  </b>
                </div>
                <div className="flex flex-col items-center justify-start gap-[16.55px] text-3xs-3 text-dimgray-100">
                  <div className="flex flex-col items-start justify-start gap-[30.98px] font-lexend-deca">
                    <div
                      className="relative w-[174.8px] h-[175.3px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[0px] left-[0.1px] rounded-tl-none rounded-tr-[13.23px] rounded-br-none rounded-bl-[13.23px] bg-white box-border w-[174.6px] h-[175.3px] overflow-hidden border-[0.7px] border-solid border-darkslategray-700">
                        <div className="absolute top-[154.8px] left-[80.7px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          @Northern Ghana
                        </div>
                        <img
                          className="absolute top-[0px] left-[-0.7px] w-[175.3px] h-[97.9px] object-cover"
                          alt=""
                          src="/base63@2x.png"
                        />
                        <div className="absolute top-[112.5px] left-[7.9px] text-5xs-9 tracking-[0.01em] leading-[9.92px] font-light font-poppins inline-block w-[155.4px]">
                          An enumeration program by the Government of Ghana
                          through the Ministry of Food and Agriculture that
                          profiles farmers for inclusion.
                        </div>
                      </div>
                      <div className="absolute top-[85.7px] left-[0px] w-[103.2px] h-[22px] text-4xs-6 text-darkslategray-200 font-poppins">
                        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.29px] rounded-b-none bg-goldenrod-200 shadow-[0px_15.9px_31.75px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.15px)] box-border w-[103.2px] overflow-hidden flex flex-row items-center justify-center py-0 px-[3.9689176082611084px] border-[0.7px] border-solid border-gray-1500">
                          <div className="relative tracking-[-0.01em] leading-[21.17px] capitalize font-semibold whitespace-pre-wrap">{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative rounded-tl-none rounded-tr-[13.23px] rounded-br-none rounded-bl-[13.23px] bg-white box-border w-[174.6px] h-[175.3px] overflow-hidden shrink-0 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-poppins border-[0.7px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[151.5px] left-[100.5px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.7px] w-[175.3px] h-[97.9px] object-cover"
                        alt=""
                        src="/base94@2x.png"
                      />
                      <div className="absolute top-[113.8px] left-[7.3px] text-5xs-9 tracking-[0.01em] leading-[9.92px] font-light inline-block w-[165.4px]">
                        A flagship program of the MoFA(Ghana) that used
                        Agrospectrum’s mobile application provide input Subsidy
                        to farmers.
                      </div>
                      <div className="absolute top-[86px] left-[-1.3px] w-[101.2px] h-[22.3px] text-4xs-6 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[101.2px] h-[22.3px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.29px] rounded-b-none bg-goldenrod-200 shadow-[0px_15.9px_31.75px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.15px)] box-border w-[101.2px] h-[22.3px] border-[0.7px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.3px] left-[11.9px] tracking-[-0.01em] leading-[21.17px] capitalize font-semibold flex items-center w-[81.4px] h-[15.9px]">{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16.55px]">
                    <div
                      className="relative rounded-tl-none rounded-tr-[13.23px] rounded-br-none rounded-bl-[13.23px] bg-white box-border w-[174.6px] h-[175.3px] overflow-hidden shrink-0 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.7px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[156.1px] left-[103.9px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.7px] w-[175.3px] h-[97.9px] object-cover"
                        alt=""
                        src="/base95@2x.png"
                      />
                      <div className="absolute top-[112.5px] left-[7.3px] text-5xs-9 tracking-[0.01em] leading-[9.92px] font-light inline-block w-[165.4px]">{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                      <div className="absolute top-[84.7px] left-[-1.3px] w-[116.4px] h-[22.3px] text-4xs-6 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[116.4px] h-[22.3px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.29px] rounded-b-none bg-goldenrod-200 shadow-[0px_15.9px_31.75px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.15px)] box-border w-[116.4px] h-[22.3px] border-[0.7px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[2.6px] left-[8.6px] tracking-[-0.01em] leading-[21.17px] capitalize font-semibold flex items-center w-[107.8px] h-[15.9px]">
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative rounded-tl-none rounded-tr-[13.23px] rounded-br-none rounded-bl-[13.23px] bg-white box-border w-[174.6px] h-[175.3px] overflow-hidden shrink-0 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.7px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[151.5px] left-[115.8px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Savanna
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.7px] w-[175.3px] h-[97.9px] object-cover"
                        alt=""
                        src="/base66@2x.png"
                      />
                      <div className="absolute top-[112.5px] left-[6.6px] text-5xs-9 tracking-[0.01em] leading-[9.92px] inline-block w-[165.4px]">
                        <p className="m-0">
                          <span className="font-light font-poppins">{`Run by our clients `}</span>
                          <span className="font-medium font-poppins">
                            May and Lotte,
                          </span>
                          <span className="font-light">
                            {" "}
                            employed solutions from Agrospectum to streamline
                            purchases and payments for the aggregated
                            commodities.
                          </span>
                        </p>
                      </div>
                      <div className="absolute top-[86px] left-[-1.3px] w-[106.5px] h-[22.3px] text-4xs-6 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[106.5px] h-[22.3px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.29px] rounded-b-none bg-goldenrod-200 shadow-[0px_15.9px_31.75px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.15px)] box-border w-[106.5px] h-[22.3px] border-[0.7px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[2.6px] left-[8.6px] tracking-[-0.01em] leading-[21.17px] capitalize font-semibold flex items-center w-[97.9px] h-[15.9px]">
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16.55px]">
                    <div
                      className="relative rounded-tl-none rounded-tr-[13.23px] rounded-br-none rounded-bl-[13.23px] bg-white box-border w-[174.6px] h-[175.3px] overflow-hidden shrink-0 [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.7px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[152.1px] left-[101.9px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-0.7px] w-[175.3px] h-[97.9px] object-cover"
                        alt=""
                        src="/base96@2x.png"
                      />
                      <div className="absolute top-[112.5px] left-[7.9px] text-5xs-9 tracking-[0.01em] leading-[9.92px] inline-block w-[160.1px]">
                        <span className="font-light">{`A credit program spearheaded by `}</span>
                        <span className="font-medium">May and Lotte,</span>
                        <span className="font-light">
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className="absolute top-[86px] left-[-1.3px] w-[103.2px] h-[22.3px] text-4xs-6 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[103.2px] h-[22.3px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.29px] rounded-b-none bg-goldenrod-200 shadow-[0px_15.9px_31.75px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.15px)] box-border w-[103.2px] h-[22.3px] border-[0.7px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.3px] left-[11.2px] tracking-[-0.01em] leading-[21.17px] capitalize font-semibold flex items-center w-[91.9px] h-[15.9px]">{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                    <div
                      className="relative rounded-tl-none rounded-tr-[13.23px] rounded-br-none rounded-bl-[13.23px] bg-white box-border w-[174.6px] h-[175.3px] overflow-hidden shrink-0 [&.animate]:animate-[6s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.7px] border-solid border-darkslategray-700"
                      data-animate-on-scroll
                    >
                      <div className="absolute top-[152.1px] left-[98.6px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[174.6px] w-[175.3px] h-[97.9px] object-contain"
                        alt=""
                        src="/base68@2x.png"
                      />
                      <div className="absolute top-[112.5px] left-[7.9px] text-5xs-9 tracking-[0.01em] leading-[9.92px] font-light inline-block w-[153.5px]">{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                      <div className="absolute top-[85.3px] left-[-1.3px] w-[101.2px] h-[22.3px] text-4xs-6 text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[101.2px] h-[22.3px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[5.29px] rounded-b-none bg-goldenrod-200 shadow-[0px_15.9px_31.75px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(43.15px)] box-border w-[101.2px] h-[22.3px] border-[0.7px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[3.3px] left-[9.9px] tracking-[-0.01em] leading-[21.17px] capitalize font-semibold flex items-center w-[61.5px] h-[15.9px]">
                          FARMER KYC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-start gap-[13.97px] [&.animate]:animate-[7s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[1] text-[5.5px]"
                data-animate-on-scroll
              >
                <div className="relative w-[107px] h-[22.7px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_53.5px)] leading-[100%] font-extrabold">
                    <span>{`The renown companies that `}</span>
                    <span className="text-6xs-3">Trust Us</span>
                  </div>
                  <b className="absolute top-[5.7px] left-[calc(50%_-_32.6px)] text-xs-5 text-darkslategray-200">
                    Our Partners
                  </b>
                </div>
                <div className="relative w-[186.5px] h-[80.7px] text-[2.6px] text-black font-montserrat">
                  <div className="absolute top-[26.3px] left-[1.8px] w-[181.1px] h-[54.3px]">
                    <img
                      className="absolute top-[5.8px] left-[76.5px] w-[42.5px] h-[13.5px] object-cover mix-blend-difference"
                      alt=""
                      src="/images30@2x.png"
                    />
                    <img
                      className="absolute top-[25.7px] left-[149.4px] w-[28.5px] h-[28.7px] object-cover"
                      alt=""
                      src="/images-130@2x.png"
                    />
                    <img
                      className="absolute top-[1.7px] left-[134.3px] w-[46.8px] h-[18.6px] object-cover"
                      alt=""
                      src="/download-131@2x.png"
                    />
                    <img
                      className="absolute top-[3.3px] left-[39.2px] w-[18.5px] h-[18.6px] object-cover"
                      alt=""
                      src="/download-231@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] w-[20.9px] h-[24.8px]">
                      <div className="absolute top-[21.8px] left-[1.8px] tracking-[0.1em] font-medium flex items-center w-[17.8px]">
                        AGROMITE
                      </div>
                      <img
                        className="absolute top-[0px] left-[0px] w-[20.9px] h-[21.5px] object-cover"
                        alt=""
                        src="/download30@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-[186.5px] h-[22.4px]">
                    <img
                      className="absolute top-[2.3px] left-[0px] w-[24.1px] h-[20.1px] object-cover"
                      alt=""
                      src="/download-559@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[150.9px] w-[35.6px] h-[20.4px] object-cover"
                      alt=""
                      src="/download-630@2x.png"
                    />
                    <img
                      className="absolute top-[3.7px] left-[47.3px] w-[15.7px] h-[16.6px] object-cover"
                      alt=""
                      src="/download-330@2x.png"
                    />
                    <img
                      className="absolute top-[0.9px] left-[88.2px] w-[44.9px] h-[21.2px] object-cover"
                      alt=""
                      src="/capture30@2x.png"
                    />
                  </div>
                  <img
                    className="absolute top-[58.5px] left-[43.9px] w-[79.5px] h-[17.8px] object-cover"
                    alt=""
                    src="/group-9155@2x.png"
                  />
                </div>
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[412.7px] left-[117.9px] w-[12.6px] h-[4.7px] z-[2]"
                alt=""
                src="/project-arrow6.svg"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start gap-[10px] text-left text-lgi text-goldenrod-200 font-poppins">
          <div className="bg-gray-500 w-[1728px] overflow-hidden flex flex-col items-center justify-start py-[60px] px-0 box-border relative gap-[20px] lg:hidden md:hover:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[758px] left-[295px] w-[835.5px] h-[1191px] z-[0]"
              alt=""
              src="/vector-2110.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[-634px] left-[-273px] w-[835.5px] h-[1191px] z-[1]"
              alt=""
              src="/vector-2110.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-5 gap-[5px] z-[2]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className="relative text-21xl text-white">
                <span>{`Our Teams & `}</span>
                <span className="[background:linear-gradient(92.14deg,_#fff,_#f0c024)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experts
                </span>
              </b>
            </div>
            <div
              className="relative w-[1054.4px] h-[497px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[3] text-6xl text-white font-lexend-deca"
              data-animate-on-scroll
            >
              <div className="absolute top-[4px] left-[0px] w-[317.4px] h-[416px]">
                <div className="absolute top-[0px] left-[0px] w-[317.4px] h-[416px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-12xl w-[317px] h-[373px] object-cover"
                    alt=""
                    src="/base97@2x.png"
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
              <div className="absolute top-[0px] left-[327.8px] w-[383.4px] h-[497px]">
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-11xl w-[383.2px] h-[433.2px] object-cover"
                  alt=""
                  src="/base98@2x.png"
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
              <div className="absolute top-[4px] left-[717.8px] w-[336.6px] h-[416px] text-9xl">
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-11xl w-[336.4px] h-[362.4px] object-cover"
                  alt=""
                  src="/base99@2x.png"
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
            <div className="flex flex-row items-start justify-start gap-[10px] z-[4]">
              <div className="relative bg-gainsboro-300 w-[15px] h-1.5" />
              <div className="relative bg-goldenrod-200 w-[30px] h-1.5" />
              <div className="relative bg-gainsboro-300 w-[15px] h-1.5" />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[1605px] left-[1070px] w-[835.5px] h-[1191px] z-[5]"
              alt=""
              src="/vector-2110.svg"
            />
            <div className="relative w-[1401px] h-[639px] z-[6] text-mini text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[90px] left-[80.5px] bg-white w-[1320px] h-[448px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <button
                className="cursor-pointer p-0 bg-dimgray-300 absolute top-[386px] left-[692.5px] box-border w-[243px] h-[60px] border-[1px] border-solid border-goldenrod-200"
                onClick={onBaseClick}
              />
              <div className="absolute top-[386px] left-[691.5px] w-[62px] h-[60px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[62px] h-[60px] object-contain"
                  alt=""
                  src="/base310.svg"
                />
                <img
                  className="absolute top-[21px] left-[16px] w-5 h-5 overflow-hidden"
                  alt=""
                  src="/arrowright4.svg"
                />
              </div>
              <div className="absolute top-[406px] left-[775.5px] uppercase font-semibold">
                view produCts
              </div>
              <div className="absolute top-[538px] left-[30.5px] bg-goldenrod-200 w-[500px] h-2.5" />
              <b
                className="absolute top-[182px] left-[691.5px] text-19xl tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[0px] left-[-0.5px] w-[700px] h-[686px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients9@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[570px] h-[615px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[calc(50%_+_3px)] tracking-[3px] leading-[32px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[50px] left-[0px] w-[570px] h-[540px] text-37xl text-white">
                <b className="absolute top-[0px] left-[0px] tracking-[-2px] leading-[64px]">
                  <p className="m-0">{`Frequently `}</p>
                  <p className="m-0">Asked Questions</p>
                </b>
                <div className="absolute top-[157px] left-[0px] text-xl leading-[32px] inline-block w-[570px] h-[69px]">
                  <p className="m-0">{`Browse through our mostly asked questions and `}</p>
                  <p className="m-0">enquiries for fast response.</p>
                </div>
                <div className="absolute top-[268px] left-[0px] w-[417px] h-[272px] text-5xl">
                  <b className="absolute top-[0px] left-[0px] leading-[32px] inline-block w-[353.6px]">
                    What does the platform do
                  </b>
                  <b className="absolute top-[80px] left-[0px] leading-[32px] inline-block w-[417px]">
                    How can I access the platform ?
                  </b>
                  <b className="absolute top-[160px] left-[0px] leading-[32px] inline-block w-[270.8px]">
                    Is the platform free ?
                  </b>
                  <b className="absolute top-[240px] left-[0px] leading-[32px] inline-block w-[359px]">
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <div className="absolute top-[310px] left-[0px] w-[570px] h-[305px]">
                <img
                  className="absolute top-[0px] left-[522px] w-12 h-12 object-cover"
                  alt=""
                  src="/icon24@2x.png"
                />
                <div className="absolute top-[64px] left-[0px] bg-goldenrod-200 w-[570px] h-px" />
                <img
                  className="absolute top-[80px] left-[522px] w-12 h-12 object-cover"
                  alt=""
                  src="/icon25@2x.png"
                />
                <div className="absolute top-[144px] left-[0px] bg-goldenrod-200 w-[570px] h-px" />
                <img
                  className="absolute top-[160px] left-[522px] w-12 h-12 object-cover"
                  alt=""
                  src="/icon24@2x.png"
                />
                <div className="absolute top-[224px] left-[0px] bg-goldenrod-200 w-[570px] h-px" />
                <img
                  className="absolute top-[240px] left-[522px] w-12 h-12 object-cover"
                  alt=""
                  src="/icon24@2x.png"
                />
                <div className="absolute top-[304px] left-[0px] bg-goldenrod-200 w-[570px] h-px" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[1200px] overflow-hidden hidden flex-col items-center justify-start py-[41.222713470458984px] px-0 box-border relative gap-[13.74px] text-sm-1 lg:flex md:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-435.6px] left-[-187.6px] w-[574px] h-[818.3px] z-[0]"
              alt=""
              src="/vector-236.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[13.740903854370117px] gap-[3.44px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className="relative text-8xl-5 text-white">
                <span>{`Our Teams & `}</span>
                <span className="[background:linear-gradient(92.14deg,_#fff,_#f0c024)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experts
                </span>
              </b>
            </div>
            <div className="relative w-[724.4px] h-[341.5px] z-[2] text-mid-2 text-white font-lexend-deca">
              <div
                className="absolute top-[2.7px] left-[0px] w-[218px] h-[285.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[218px] h-[285.8px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-2xl-3 w-[217.8px] h-[256.3px] object-cover"
                    alt=""
                    src="/base100@2x.png"
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
                className="absolute top-[0px] left-[225.2px] w-[263.4px] h-[341.5px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-[20.61px] w-[263.3px] h-[297.6px] object-cover"
                  alt=""
                  src="/base101@2x.png"
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
                className="absolute top-[2.7px] left-[493.1px] w-[231.3px] h-[285.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lgi-2"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.2px] rounded-[20.61px] w-[231.1px] h-[249px] object-cover"
                  alt=""
                  src="/base102@2x.png"
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
              className="absolute my-0 mx-[!important] top-[520.8px] left-[202.7px] w-[574px] h-[818.3px] z-[4]"
              alt=""
              src="/vector-2111.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[1102.7px] left-[735.1px] w-[574px] h-[818.3px] z-[5]"
              alt=""
              src="/vector-225.svg"
            />
            <div className="relative w-[962.6px] h-[439px] z-[6] text-2xs-3 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[61.8px] left-[55.3px] bg-white w-[906.9px] h-[307.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <div className="absolute top-[265.2px] left-[475.8px] bg-dimgray-300 box-border w-[167px] h-[41.2px] border-[0.7px] border-solid border-goldenrod-200" />
              <div className="absolute top-[265.2px] left-[475.1px] w-[42.6px] h-[41.2px]">
                <img
                  className="absolute top-[0px] left-[42.6px] w-[42.6px] h-[41.2px] object-contain"
                  alt=""
                  src="/base71.svg"
                />
                <img
                  className="absolute top-[14.4px] left-[11px] w-[13.7px] h-[13.7px] overflow-hidden"
                  alt=""
                  src="/arrowright11.svg"
                />
              </div>
              <div className="absolute top-[278.9px] left-[532.8px] uppercase font-semibold">
                view produCts
              </div>
              <div className="absolute top-[369.6px] left-[21px] bg-goldenrod-200 w-[343.5px] h-[6.9px]" />
              <b
                className="absolute top-[125px] left-[475.1px] text-7xl-1 tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[0px] left-[-0.3px] w-[480.9px] h-[471.3px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients10@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[391.6px] h-[422.5px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[calc(50%_+_2.1px)] tracking-[2.06px] leading-[21.99px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[34.4px] left-[0px] w-[391.6px] h-[371px] text-19xl-5 text-white">
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
              <div className="absolute top-[213px] left-[0px] w-[391.6px] h-[209.5px]">
                <img
                  className="absolute top-[0px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon26@2x.png"
                />
                <div className="absolute top-[44px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[55px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon27@2x.png"
                />
                <div className="absolute top-[98.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[109.9px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon28@2x.png"
                />
                <div className="absolute top-[153.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
                <img
                  className="absolute top-[164.9px] left-[358.6px] w-[33px] h-[33px] object-cover"
                  alt=""
                  src="/icon29@2x.png"
                />
                <div className="absolute top-[208.9px] left-[0px] bg-goldenrod-200 w-[391.6px] h-[0.7px]" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[960px] overflow-hidden hidden flex-col items-center justify-start py-[33.10615158081055px] px-0 box-border relative gap-[11.04px] text-2xs-5 md:flex sm:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-349.8px] left-[-150.6px] w-[461px] h-[657.2px] z-[0]"
              alt=""
              src="/vector-2312.svg"
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
                className="absolute top-[2.2px] left-[0px] w-[175.1px] h-[229.5px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[175.1px] h-[229.5px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-mid-1 w-[174.9px] h-[205.8px] object-cover"
                    alt=""
                    src="/base103@2x.png"
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
                className="absolute top-[0px] left-[180.9px] w-[211.6px] h-[274.2px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[16.55px] w-[211.4px] h-[239px] object-cover"
                  alt=""
                  src="/base104@2x.png"
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
                className="absolute top-[2.2px] left-[396px] w-[185.7px] h-[229.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-[15.4px]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[16.55px] w-[185.6px] h-[199.9px] object-cover"
                  alt=""
                  src="/base105@2x.png"
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
              className="absolute my-0 mx-[!important] top-[418.2px] left-[162.8px] w-[461px] h-[657.2px] z-[4]"
              alt=""
              src="/vector-2121.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[885.6px] left-[590.4px] w-[461px] h-[657.2px] z-[5]"
              alt=""
              src="/vector-2211.svg"
            />
            <div className="relative w-[773px] h-[352.6px] z-[6] text-4xs-3 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[49.7px] left-[44.4px] bg-white w-[728.3px] h-[247.2px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[213px] left-[382.1px] bg-dimgray-300 box-border w-[134.1px] h-[33.1px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[0.6px] border-solid border-goldenrod-200"
                data-animate-on-scroll
              />
              <div className="absolute top-[213px] left-[381.5px] w-[34.2px] h-[33.1px]">
                <img
                  className="absolute top-[0px] left-[34.2px] w-[34.2px] h-[33.1px] object-contain"
                  alt=""
                  src="/base111.svg"
                />
                <img
                  className="absolute top-[11.6px] left-[8.8px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/arrowright21.svg"
                />
              </div>
              <div className="absolute top-[224px] left-[427.9px] uppercase font-semibold">
                view produCts
              </div>
              <div className="absolute top-[296.9px] left-[16.8px] bg-goldenrod-200 w-[275.9px] h-[5.5px]" />
              <b
                className="absolute top-[100.4px] left-[381.5px] text-2xl tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[0px] left-[-0.3px] w-[386.2px] h-[378.5px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients11@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[314.5px] h-[339.3px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[calc(50%_+_1.65px)] tracking-[1.66px] leading-[17.66px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[27.6px] left-[0px] w-[314.5px] h-[298.3px] text-11xl-9 text-white">
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
              <div className="absolute top-[171px] left-[0px] w-[314.5px] h-[168.3px]">
                <img
                  className="absolute top-[0px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon30@2x.png"
                />
                <div className="absolute top-[35.3px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[44.1px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon31@2x.png"
                />
                <div className="absolute top-[79.5px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[88.3px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon32@2x.png"
                />
                <div className="absolute top-[123.6px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
                <img
                  className="absolute top-[132.4px] left-[288px] w-[26.5px] h-[26.5px] object-cover"
                  alt=""
                  src="/icon33@2x.png"
                />
                <div className="absolute top-[167.7px] left-[0px] bg-goldenrod-200 w-[314.5px] h-[0.6px]" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 w-[420px] overflow-hidden hidden flex-col items-center justify-start py-[15.49566650390625px] px-0 box-border relative gap-[5.17px] text-8xs-9 sm:flex mq350small:hidden">
            <img
              className="absolute my-0 mx-[!important] top-[-163.7px] left-[-70.5px] w-[215.8px] h-[307.6px] z-[0]"
              alt=""
              src="/vector-2321.svg"
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
                className="absolute top-[1px] left-[0px] w-[82px] h-[107.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[82px] h-[107.4px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[8.01px] w-[81.9px] h-[96.3px] object-cover"
                    alt=""
                    src="/base106@2x.png"
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
                className="absolute top-[0px] left-[84.7px] w-[99px] h-[128.4px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[7.75px] w-[99px] h-[111.9px] object-cover"
                  alt=""
                  src="/base107@2x.png"
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
                className="absolute top-[1px] left-[185.4px] w-[86.9px] h-[107.4px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xs-2"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[7.75px] w-[86.9px] h-[93.6px] object-cover"
                  alt=""
                  src="/base108@2x.png"
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
              className="absolute my-0 mx-[!important] top-[195.8px] left-[76.2px] w-[215.8px] h-[307.6px] z-[4]"
              alt=""
              src="/vector-2131.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[414.5px] left-[276.3px] w-[215.8px] h-[307.6px] z-[5]"
              alt=""
              src="/vector-2221.svg"
            />
            <div className="relative w-[340px] h-[122px] z-[6] text-9xs-9 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[18.7px] left-[30px] bg-white box-border w-[281px] h-[93px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] border-[1px] border-solid border-black"
                data-animate-on-scroll
              />
              <div
                className="absolute top-[78.7px] left-[131px] w-[63px] h-[15.5px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0.3px] bg-dimgray-300 box-border w-[62.8px] h-[15.5px] border-[0.3px] border-solid border-goldenrod-200" />
                <img
                  className="absolute top-[0px] left-[16px] w-4 h-[15.5px] object-contain"
                  alt=""
                  src="/base151.svg"
                />
                <img
                  className="absolute top-[5.4px] left-[4.1px] w-[5.2px] h-[5.2px] overflow-hidden"
                  alt=""
                  src="/arrowright31.svg"
                />
                <div className="absolute top-[5.2px] left-[21.7px] uppercase font-semibold">
                  view produCts
                </div>
              </div>
              <div className="absolute top-[110.7px] left-[8px] bg-goldenrod-200 w-[129.1px] h-[2.6px]" />
              <b
                className="absolute top-[35.7px] left-[127px] text-3xs-8 tracking-[-0.02em] capitalize [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[11.7px] left-[20px] w-[117px] h-[115px] overflow-hidden object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients12@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[147.2px] h-[158.8px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[calc(50%_+_0.8px)] tracking-[0.77px] leading-[8.26px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[12.9px] left-[0px] w-[147.2px] h-[140.2px] text-mini-5 text-white">
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
                className="absolute top-[80.1px] left-[0px] w-[147.2px] h-[78.8px] object-contain"
                alt=""
                src="/group-89331@2x.png"
              />
            </div>
          </div>
          <div className="bg-gray-500 w-[351px] overflow-hidden hidden flex-col items-center justify-start py-[12.949950218200684px] px-0 box-border relative gap-[4.32px] text-8xs-1 mq350small:flex">
            <img
              className="absolute my-0 mx-[!important] top-[-136.8px] left-[-58.9px] w-[180.3px] h-[257.1px] z-[0]"
              alt=""
              src="/vector-23121.svg"
            />
            <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[4.316649913787842px] gap-[1.08px] z-[1]">
              <div className="relative leading-[100%] font-extrabold">
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className="relative text-4xs-6 text-white">
                <span>{`Our Teams & `}</span>
                <span className="[background:linear-gradient(92.14deg,_#fff,_#f0c024)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experts
                </span>
              </b>
            </div>
            <div className="relative w-[227.6px] h-[107.3px] z-[2] text-7xs-4 text-white font-lexend-deca">
              <div
                className="absolute top-[0.9px] left-[0px] w-[68.5px] h-[89.8px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[68.5px] h-[89.8px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[6.69px] w-[68.4px] h-[80.5px] object-cover"
                    alt=""
                    src="/base109@2x.png"
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
                className="absolute top-[0px] left-[70.7px] w-[82.8px] h-[107.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0px] rounded-[6.47px] w-[82.7px] h-[93.5px] object-cover"
                  alt=""
                  src="/base110@2x.png"
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
                className="absolute top-[0.9px] left-[154.9px] w-[72.7px] h-[89.8px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-7xs"
                data-animate-on-scroll
              >
                <img
                  className="absolute top-[0px] left-[0.1px] rounded-[6.47px] w-[72.6px] h-[78.2px] object-cover"
                  alt=""
                  src="/base1111@2x.png"
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
              className="absolute my-0 mx-[!important] top-[163.6px] left-[63.7px] w-[180.3px] h-[257.1px] z-[4]"
              alt=""
              src="/vector-2114.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[346.4px] left-[230.9px] w-[180.3px] h-[257.1px] z-[5]"
              alt=""
              src="/vector-2213.svg"
            />
            <div className="relative w-[284.1px] h-[102px] z-[6] text-9xs-2 text-darkslategray-200 font-lexend-deca">
              <div
                className="absolute top-[15.7px] left-[25.1px] bg-white w-[234.8px] h-[77.7px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              />
              <div className="absolute top-[65.8px] left-[109.5px] w-[52.7px] h-[12.9px]">
                <div className="absolute top-[0px] left-[0.2px] bg-dimgray-300 box-border w-[52.4px] h-[12.9px] border-[0.2px] border-solid border-goldenrod-200" />
                <img
                  className="absolute top-[0px] left-[13.4px] w-[13.4px] h-[12.9px] object-contain"
                  alt=""
                  src="/base84.svg"
                />
                <img
                  className="absolute top-[4.5px] left-[3.5px] w-[4.3px] h-[4.3px] overflow-hidden"
                  alt=""
                  src="/arrowright7.svg"
                />
                <div className="absolute top-[4.3px] left-[18.1px] uppercase font-semibold">
                  view produCts
                </div>
              </div>
              <div className="absolute top-[92.5px] left-[6.7px] bg-goldenrod-200 w-[107.9px] h-[2.2px]" />
              <b
                className="absolute top-[29.9px] left-[106.1px] text-4xs-2 tracking-[-0.02em] capitalize [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <p className="m-0">We support Agribusiness Industry</p>
                <p className="m-0">To Utilize modern Equipments</p>
                <p className="m-0">for a Better Result.</p>
              </b>
              <img
                className="absolute top-[9.8px] left-[16.7px] w-[97.8px] h-[96.1px] overflow-hidden object-cover [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                alt=""
                src="/gradients13@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div
              className="relative w-[123px] h-[132.7px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[7]"
              data-animate-on-scroll
            >
              <b className="absolute top-[0px] left-[calc(50%_+_0.7px)] tracking-[0.65px] leading-[6.91px] uppercase">
                FAQ
              </b>
              <div className="absolute top-[10.8px] left-[0px] w-[123px] h-[116.6px] text-smi-1 text-white">
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
                className="absolute top-[66.9px] left-[0px] w-[123px] h-[65.8px] object-contain"
                alt=""
                src="/group-8934@2x.png"
              />
            </div>
          </div>
        </section>
        <footer className="flex flex-col items-center justify-start text-left text-15xl text-seagreen-100 font-poppins">
          <div className="flex flex-col items-center justify-start">
            <div
              className="flex flex-col items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:hidden"
              data-animate-on-scroll
            >
              <div className="w-[1728px] overflow-hidden flex flex-col items-start justify-start">
                <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] w-[1750px] h-[107px] overflow-hidden shrink-0">
                  <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
                    <div className="absolute top-[0px] left-[0px] w-[1974px] h-[100px]">
                      <img
                        className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                        alt=""
                        src="/download-232@2x.png"
                      />
                      <img
                        className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                        alt=""
                        src="/download-560@2x.png"
                      />
                      <img
                        className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                        alt=""
                        src="/download31@2x.png"
                      />
                      <img
                        className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                        alt=""
                        src="/download-561@2x.png"
                      />
                      <img
                        className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                        alt=""
                        src="/download-331@2x.png"
                      />
                      <img
                        className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                        alt=""
                        src="/capture31@2x.png"
                      />
                      <img
                        className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                        alt=""
                        src="/mofa-color261@2x.png"
                      />
                      <img
                        className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                        alt=""
                        src="/images31@2x.png"
                      />
                      <img
                        className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                        alt=""
                        src="/download-631@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                        alt=""
                        src="/images-131@2x.png"
                      />
                      <img
                        className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                        alt=""
                        src="/download-132@2x.png"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[2034px] w-[1974px] h-[100px]">
                      <img
                        className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                        alt=""
                        src="/download-232@2x.png"
                      />
                      <img
                        className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                        alt=""
                        src="/download-560@2x.png"
                      />
                      <img
                        className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                        alt=""
                        src="/download31@2x.png"
                      />
                      <img
                        className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                        alt=""
                        src="/download-561@2x.png"
                      />
                      <img
                        className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                        alt=""
                        src="/download-331@2x.png"
                      />
                      <img
                        className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                        alt=""
                        src="/capture31@2x.png"
                      />
                      <img
                        className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                        alt=""
                        src="/mofa-color261@2x.png"
                      />
                      <img
                        className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                        alt=""
                        src="/images31@2x.png"
                      />
                      <img
                        className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                        alt=""
                        src="/download-631@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                        alt=""
                        src="/images-131@2x.png"
                      />
                      <img
                        className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                        alt=""
                        src="/download-132@2x.png"
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
                      className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <button
                        className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center box-border"
                        onClick={onFrameButton1Click}
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
                        <div className="self-stretch h-36 flex flex-col items-start justify-between">
                          <button
                            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[29px] flex flex-row items-center justify-start"
                            onClick={onFrameButton2Click}
                          >
                            <b
                              className="flex-1 relative text-base tracking-[0.9px] leading-[46px] uppercase flex font-poppins text-white text-left items-center h-[37px] cursor-pointer"
                              onClick={onNowWereTextClick}
                            >
                              CAREERS
                            </b>
                          </button>
                          <button
                            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[29px] flex flex-row items-center justify-start"
                            onClick={onFrameButton3Click}
                          >
                            <b className="flex-1 relative text-base tracking-[0.9px] leading-[46px] uppercase flex font-poppins text-white text-left items-center h-7">{`ABOUT US `}</b>
                          </button>
                          <button
                            className="cursor-pointer [border:none] py-2.5 px-0 bg-[transparent] self-stretch h-[35px] flex flex-row items-center justify-start box-border"
                            onClick={onFrameButton4Click}
                          >
                            <b className="flex-1 relative text-base tracking-[0.9px] leading-[46px] uppercase flex font-poppins text-white text-left items-center h-7">
                              PRIVACY POLICY
                            </b>
                          </button>
                          <button
                            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center"
                            onClick={onFrameButton5Click}
                          >
                            <b className="flex-1 relative text-base tracking-[0.9px] leading-[46px] uppercase flex font-poppins text-white text-left items-center h-8">
                              PARTNERS
                            </b>
                          </button>
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
                  <div className="w-[441px] h-[416px] flex flex-col items-start justify-start py-[30px] px-[5px] box-border gap-[44px] text-base">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[43px] text-white">
                      <img
                        className="relative max-h-full w-[33.6px] cursor-pointer"
                        alt=""
                        src="/arrow-651.svg"
                        onClick={onArrowIconClick}
                      />
                      <div
                        className="self-stretch flex-1 relative cursor-pointer"
                        onClick={onNowWereContainerClick}
                      >
                        <div className="absolute h-[175%] w-[152.1%] top-[0%] left-[0%] tracking-[1.37px] leading-[69.96px] uppercase font-medium flex items-center">
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
                            src="/group7.svg"
                          />
                        </div>
                        <div className="rounded-[36.86px] bg-darkgray-400 w-[47.3px] h-[48.8px] flex flex-row items-center justify-center py-[19.9257869720459px] px-[24.90723419189453px] box-border">
                          <img
                            className="relative w-[7.8px] h-[15px]"
                            alt=""
                            src="/vector15.svg"
                          />
                        </div>
                        <div className="rounded-[58.28px] bg-darkgray-400 w-[45.3px] h-[45.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[19.9257869720459px] px-[17.4350643157959px] box-border">
                          <img
                            className="relative w-[16.7px] h-3.5"
                            alt=""
                            src="/vector16.svg"
                          />
                        </div>
                        <div className="rounded-[40.35px] bg-darkgray-400 w-[49.3px] h-[48.8px] flex flex-col items-center justify-center p-[19.9257869720459px] box-border">
                          <img
                            className="relative w-[16.1px] h-[15px]"
                            alt=""
                            src="/vector21.svg"
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
                        src="/download-235@2x.png"
                      />
                      <img
                        className="absolute top-[13.9px] left-[218.7px] w-[72.2px] h-[47.2px] object-cover"
                        alt=""
                        src="/download-565@2x.png"
                      />
                      <img
                        className="absolute top-[4.9px] left-[1219.9px] w-[47.2px] h-[52.1px] object-cover"
                        alt=""
                        src="/download32@2x.png"
                      />
                      <img
                        className="absolute top-[10.4px] left-[0px] w-[58.3px] h-[48.6px] object-cover"
                        alt=""
                        src="/download-566@2x.png"
                      />
                      <img
                        className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                        alt=""
                        src="/download-332@2x.png"
                      />
                      <img
                        className="absolute top-[9px] left-[336px] w-[117.3px] h-[51.4px] object-cover"
                        alt=""
                        src="/capture36@2x.png"
                      />
                      <img
                        className="absolute top-[13.9px] left-[493.6px] w-[205.5px] h-[43px] object-cover"
                        alt=""
                        src="/mofa-color29@2x.png"
                      />
                      <img
                        className="absolute top-[20.1px] left-[728.3px] w-[95.8px] h-[32.6px] object-cover mix-blend-difference"
                        alt=""
                        src="/images34@2x.png"
                      />
                      <img
                        className="absolute top-[9.7px] left-[849.1px] w-[86.1px] h-[49.3px] object-cover"
                        alt=""
                        src="/download-636@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[969.2px] w-[69.4px] h-[69.4px] object-cover"
                        alt=""
                        src="/images-132@2x.png"
                      />
                      <img
                        className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                        alt=""
                        src="/download-134@2x.png"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[1412.2px] w-[1370.5px] h-[69.4px]">
                      <img
                        className="absolute top-[13.2px] left-[1327.5px] w-[43px] h-[43px] object-cover"
                        alt=""
                        src="/download-236@2x.png"
                      />
                      <img
                        className="absolute top-[13.9px] left-[218.7px] w-[72.2px] h-[47.2px] object-cover"
                        alt=""
                        src="/download-567@2x.png"
                      />
                      <img
                        className="absolute top-[4.9px] left-[1219.9px] w-[47.2px] h-[52.1px] object-cover"
                        alt=""
                        src="/download33@2x.png"
                      />
                      <img
                        className="absolute top-[10.4px] left-[0px] w-[58.3px] h-[48.6px] object-cover"
                        alt=""
                        src="/download-568@2x.png"
                      />
                      <img
                        className="absolute top-[16.7px] left-[112.5px] w-[41px] h-[40.3px] object-cover"
                        alt=""
                        src="/download-333@2x.png"
                      />
                      <img
                        className="absolute top-[9px] left-[336px] w-[117.3px] h-[51.4px] object-cover"
                        alt=""
                        src="/capture37@2x.png"
                      />
                      <img
                        className="absolute top-[13.9px] left-[493.6px] w-[205.5px] h-[43px] object-cover"
                        alt=""
                        src="/mofa-color30@2x.png"
                      />
                      <img
                        className="absolute top-[20.1px] left-[728.3px] w-[95.8px] h-[32.6px] object-cover mix-blend-difference"
                        alt=""
                        src="/images35@2x.png"
                      />
                      <img
                        className="absolute top-[9.7px] left-[849.1px] w-[86.1px] h-[49.3px] object-cover"
                        alt=""
                        src="/download-637@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[969.2px] w-[69.4px] h-[69.4px] object-cover"
                        alt=""
                        src="/images-133@2x.png"
                      />
                      <img
                        className="absolute top-[12.5px] left-[1075.5px] w-[113.9px] h-[45.1px] object-cover"
                        alt=""
                        src="/download-135@2x.png"
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
                      onClick={onFrameButton6Click}
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
                            <b
                              className="flex-1 relative tracking-[0.62px] leading-[31.94px] uppercase flex items-center h-[25.7px] cursor-pointer"
                              onClick={onNowWereText2Click}
                            >
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
                        src="/arrow-611.svg"
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
                            src="/group11.svg"
                          />
                        </div>
                        <div className="rounded-[25.59px] bg-darkgray-400 w-[32.9px] h-[33.9px] flex flex-row items-center justify-center py-[13.834328651428223px] px-[17.292909622192383px] box-border">
                          <img
                            className="relative w-[5.4px] h-[10.4px]"
                            alt=""
                            src="/vector31.svg"
                          />
                        </div>
                        <div className="rounded-[40.47px] bg-darkgray-400 w-[31.5px] h-[31.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[13.834328651428223px] px-[12.105037689208984px] box-border">
                          <img
                            className="relative w-[11.6px] h-[9.7px]"
                            alt=""
                            src="/vector41.svg"
                          />
                        </div>
                        <div className="rounded-[28.01px] bg-darkgray-400 w-[34.2px] h-[33.9px] flex flex-col items-center justify-center p-[13.834328651428223px] box-border">
                          <img
                            className="relative w-[11.2px] h-[10.4px]"
                            alt=""
                            src="/vector51.svg"
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
                        src="/download-237@2x.png"
                      />
                      <img
                        className="absolute top-[11.1px] left-[175px] w-[57.8px] h-[37.8px] object-cover"
                        alt=""
                        src="/download-569@2x.png"
                      />
                      <img
                        className="absolute top-[3.9px] left-[976.1px] w-[37.8px] h-[41.7px] object-cover"
                        alt=""
                        src="/download34@2x.png"
                      />
                      <img
                        className="absolute top-[8.3px] left-[0px] w-[46.7px] h-[38.9px] object-cover"
                        alt=""
                        src="/download-570@2x.png"
                      />
                      <img
                        className="absolute top-[13.3px] left-[90px] w-[32.8px] h-[32.2px] object-cover"
                        alt=""
                        src="/download-334@2x.png"
                      />
                      <img
                        className="absolute top-[7.2px] left-[268.9px] w-[93.9px] h-[41.1px] object-cover"
                        alt=""
                        src="/capture38@2x.png"
                      />
                      <img
                        className="absolute top-[11.1px] left-[395px] w-[164.4px] h-[34.4px] object-cover"
                        alt=""
                        src="/mofa-color31@2x.png"
                      />
                      <img
                        className="absolute top-[16.1px] left-[582.8px] w-[76.7px] h-[26.1px] object-cover mix-blend-difference"
                        alt=""
                        src="/images36@2x.png"
                      />
                      <img
                        className="absolute top-[7.8px] left-[679.4px] w-[68.9px] h-[39.4px] object-cover"
                        alt=""
                        src="/download-638@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[775.6px] w-[55.6px] h-[55.6px] object-cover"
                        alt=""
                        src="/images-134@2x.png"
                      />
                      <img
                        className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                        alt=""
                        src="/download-136@2x.png"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[1130px] w-[1096.7px] h-[55.6px]">
                      <img
                        className="absolute top-[10.6px] left-[1062.2px] w-[34.4px] h-[34.4px] object-cover"
                        alt=""
                        src="/download-238@2x.png"
                      />
                      <img
                        className="absolute top-[11.1px] left-[175px] w-[57.8px] h-[37.8px] object-cover"
                        alt=""
                        src="/download-569@2x.png"
                      />
                      <img
                        className="absolute top-[3.9px] left-[976.1px] w-[37.8px] h-[41.7px] object-cover"
                        alt=""
                        src="/download34@2x.png"
                      />
                      <img
                        className="absolute top-[8.3px] left-[0px] w-[46.7px] h-[38.9px] object-cover"
                        alt=""
                        src="/download-570@2x.png"
                      />
                      <img
                        className="absolute top-[13.3px] left-[90px] w-[32.8px] h-[32.2px] object-cover"
                        alt=""
                        src="/download-334@2x.png"
                      />
                      <img
                        className="absolute top-[7.2px] left-[268.9px] w-[93.9px] h-[41.1px] object-cover"
                        alt=""
                        src="/capture38@2x.png"
                      />
                      <img
                        className="absolute top-[11.1px] left-[395px] w-[164.4px] h-[34.4px] object-cover"
                        alt=""
                        src="/mofa-color31@2x.png"
                      />
                      <img
                        className="absolute top-[16.1px] left-[582.8px] w-[76.7px] h-[26.1px] object-cover mix-blend-difference"
                        alt=""
                        src="/images36@2x.png"
                      />
                      <img
                        className="absolute top-[7.8px] left-[679.4px] w-[68.9px] h-[39.4px] object-cover"
                        alt=""
                        src="/download-638@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[775.6px] w-[55.6px] h-[55.6px] object-cover"
                        alt=""
                        src="/images-135@2x.png"
                      />
                      <img
                        className="absolute top-[10px] left-[860.6px] w-[91.1px] h-[36.1px] object-cover"
                        alt=""
                        src="/download-137@2x.png"
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
                      onClick={onFrameButton7Click}
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
                            <b
                              className="flex-1 relative tracking-[0.5px] leading-[25.56px] uppercase flex items-center h-[20.6px] cursor-pointer"
                              onClick={onNowWereText3Click}
                            >
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
                        src="/arrow-621.svg"
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
                            src="/group21.svg"
                          />
                        </div>
                        <div className="rounded-[20.48px] bg-darkgray-400 w-[26.3px] h-[27.1px] flex flex-row items-center justify-center py-[11.069880485534668px] px-[13.837349891662598px] box-border">
                          <img
                            className="relative w-[4.3px] h-[8.3px]"
                            alt=""
                            src="/vector61.svg"
                          />
                        </div>
                        <div className="rounded-[32.38px] bg-darkgray-400 w-[25.2px] h-[25.2px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.069880485534668px] px-[9.686145782470703px] box-border">
                          <img
                            className="relative w-[9.3px] h-[7.8px]"
                            alt=""
                            src="/vector71.svg"
                          />
                        </div>
                        <div className="rounded-[22.42px] bg-darkgray-400 w-[27.4px] h-[27.1px] flex flex-col items-center justify-center p-[11.069880485534668px] box-border">
                          <img
                            className="relative w-[9px] h-[8.3px]"
                            alt=""
                            src="/vector81.svg"
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
                      src="/download-239@2x.png"
                    />
                    <img
                      className="absolute top-[12.2px] left-[191.7px] w-[63.3px] h-[41.4px] object-cover"
                      alt=""
                      src="/download-571@2x.png"
                    />
                    <img
                      className="absolute top-[4.3px] left-[1069.1px] w-[41.4px] h-[45.6px] object-cover"
                      alt=""
                      src="/download35@2x.png"
                    />
                    <img
                      className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-cover"
                      alt=""
                      src="/download-572@2x.png"
                    />
                    <img
                      className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-cover"
                      alt=""
                      src="/download-335@2x.png"
                    />
                    <img
                      className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                      alt=""
                      src="/capture39@2x.png"
                    />
                    <img
                      className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-cover"
                      alt=""
                      src="/mofa-color32@2x.png"
                    />
                    <img
                      className="absolute top-[17.6px] left-[638.3px] w-[84px] h-[28.6px] object-cover mix-blend-difference"
                      alt=""
                      src="/images37@2x.png"
                    />
                    <img
                      className="absolute top-[8.5px] left-[744.2px] w-[75.5px] h-[43.2px] object-cover"
                      alt=""
                      src="/download-639@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[849.4px] w-[60.8px] h-[60.8px] object-cover"
                      alt=""
                      src="/images-136@2x.png"
                    />
                    <img
                      className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                      alt=""
                      src="/download-138@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[1237.6px] w-[1201.1px] h-[60.8px]">
                    <img
                      className="absolute top-[11.6px] left-[1163.4px] w-[37.7px] h-[37.7px] object-cover"
                      alt=""
                      src="/download-240@2x.png"
                    />
                    <img
                      className="absolute top-[12.2px] left-[191.7px] w-[63.3px] h-[41.4px] object-cover"
                      alt=""
                      src="/download-573@2x.png"
                    />
                    <img
                      className="absolute top-[4.3px] left-[1069.1px] w-[41.4px] h-[45.6px] object-cover"
                      alt=""
                      src="/download36@2x.png"
                    />
                    <img
                      className="absolute top-[9.1px] left-[0px] w-[51.1px] h-[42.6px] object-cover"
                      alt=""
                      src="/download-574@2x.png"
                    />
                    <img
                      className="absolute top-[14.6px] left-[98.6px] w-[35.9px] h-[35.3px] object-cover"
                      alt=""
                      src="/download-336@2x.png"
                    />
                    <img
                      className="absolute top-[7.9px] left-[294.5px] w-[102.8px] h-[45px] object-cover"
                      alt=""
                      src="/capture40@2x.png"
                    />
                    <img
                      className="absolute top-[12.2px] left-[432.6px] w-[180.1px] h-[37.7px] object-cover"
                      alt=""
                      src="/mofa-color33@2x.png"
                    />
                    <img
                      className="absolute top-[17.6px] left-[638.3px] w-[84px] h-[28.6px] object-cover mix-blend-difference"
                      alt=""
                      src="/images38@2x.png"
                    />
                    <img
                      className="absolute top-[8.5px] left-[744.2px] w-[75.5px] h-[43.2px] object-cover"
                      alt=""
                      src="/download-640@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[849.4px] w-[60.8px] h-[60.8px] object-cover"
                      alt=""
                      src="/images-137@2x.png"
                    />
                    <img
                      className="absolute top-[11px] left-[942.5px] w-[99.8px] h-[39.6px] object-cover"
                      alt=""
                      src="/download-139@2x.png"
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
                    src="/arrow-631.svg"
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
                        src="/group31.svg"
                      />
                    </div>
                    <div className="rounded-[26.78px] bg-darkgray-400 w-[34.4px] h-[35.5px] flex flex-row items-center justify-center py-[14.475349426269531px] px-[18.094186782836914px] box-border">
                      <img
                        className="relative w-[5.7px] h-[10.9px]"
                        alt=""
                        src="/vector91.svg"
                      />
                    </div>
                    <div className="rounded-[42.34px] bg-darkgray-400 w-[32.9px] h-[32.9px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[14.475349426269531px] px-[12.665931701660156px] box-border">
                      <img
                        className="relative w-[12.1px] h-[10.2px]"
                        alt=""
                        src="/vector101.svg"
                      />
                    </div>
                    <div className="rounded-[29.31px] bg-darkgray-400 w-[35.8px] h-[35.5px] flex flex-col items-center justify-center p-[14.475349426269531px] box-border">
                      <img
                        className="relative w-[11.7px] h-[10.9px]"
                        alt=""
                        src="/vector111.svg"
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
                    <div className="relative leading-[7.83px]">
                      GET IN TOUCH
                    </div>
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
                      src="/download-241@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[157.2px] w-[51.9px] h-[33.9px] object-cover"
                      alt=""
                      src="/download-575@2x.png"
                    />
                    <img
                      className="absolute top-[3.5px] left-[876.9px] w-[33.9px] h-[37.4px] object-cover"
                      alt=""
                      src="/download37@2x.png"
                    />
                    <img
                      className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-cover"
                      alt=""
                      src="/download-576@2x.png"
                    />
                    <img
                      className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-cover"
                      alt=""
                      src="/download-337@2x.png"
                    />
                    <img
                      className="absolute top-[6.5px] left-[241.6px] w-[84.3px] h-[36.9px] object-cover"
                      alt=""
                      src="/capture41@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[354.8px] w-[147.7px] h-[30.9px] object-cover"
                      alt=""
                      src="/mofa-color34@2x.png"
                    />
                    <img
                      className="absolute top-[14.5px] left-[523.5px] w-[68.9px] h-[23.5px] object-cover mix-blend-difference"
                      alt=""
                      src="/images39@2x.png"
                    />
                    <img
                      className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-cover"
                      alt=""
                      src="/download-641@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[696.7px] w-[49.9px] h-[49.9px] object-cover"
                      alt=""
                      src="/images-138@2x.png"
                    />
                    <img
                      className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                      alt=""
                      src="/download-140@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[1015.1px] w-[985.2px] h-[49.9px]">
                    <img
                      className="absolute top-[9.5px] left-[954.2px] w-[30.9px] h-[30.9px] object-cover"
                      alt=""
                      src="/download-242@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[157.2px] w-[51.9px] h-[33.9px] object-cover"
                      alt=""
                      src="/download-577@2x.png"
                    />
                    <img
                      className="absolute top-[3.5px] left-[876.9px] w-[33.9px] h-[37.4px] object-cover"
                      alt=""
                      src="/download38@2x.png"
                    />
                    <img
                      className="absolute top-[7.5px] left-[0px] w-[41.9px] h-[34.9px] object-cover"
                      alt=""
                      src="/download-578@2x.png"
                    />
                    <img
                      className="absolute top-[12px] left-[80.9px] w-[29.4px] h-[28.9px] object-cover"
                      alt=""
                      src="/download-338@2x.png"
                    />
                    <img
                      className="absolute top-[6.5px] left-[241.6px] w-[84.3px] h-[36.9px] object-cover"
                      alt=""
                      src="/capture42@2x.png"
                    />
                    <img
                      className="absolute top-[10px] left-[354.8px] w-[147.7px] h-[30.9px] object-cover"
                      alt=""
                      src="/mofa-color35@2x.png"
                    />
                    <img
                      className="absolute top-[14.5px] left-[523.5px] w-[68.9px] h-[23.5px] object-cover mix-blend-difference"
                      alt=""
                      src="/images40@2x.png"
                    />
                    <img
                      className="absolute top-[7px] left-[610.4px] w-[61.9px] h-[35.4px] object-cover"
                      alt=""
                      src="/download-642@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[696.7px] w-[49.9px] h-[49.9px] object-cover"
                      alt=""
                      src="/images-139@2x.png"
                    />
                    <img
                      className="absolute top-[9px] left-[773.1px] w-[81.8px] h-[32.4px] object-cover"
                      alt=""
                      src="/download-141@2x.png"
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
                    src="/arrow-641.svg"
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
                        src="/group41.svg"
                      />
                    </div>
                    <div className="rounded-[21.96px] bg-darkgray-400 w-[28.2px] h-[29.1px] flex flex-row items-center justify-center py-[11.872894287109375px] px-[14.841116905212402px] box-border">
                      <img
                        className="relative w-[4.6px] h-[8.9px]"
                        alt=""
                        src="/vector121.svg"
                      />
                    </div>
                    <div className="rounded-[34.73px] bg-darkgray-400 w-[27px] h-[27px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[11.872894287109375px] px-[10.38878345489502px] box-border">
                      <img
                        className="relative w-[9.9px] h-[8.3px]"
                        alt=""
                        src="/vector131.svg"
                      />
                    </div>
                    <div className="rounded-[24.04px] bg-darkgray-400 w-[29.4px] h-[29.1px] flex flex-col items-center justify-center p-[11.872894287109375px] box-border">
                      <img
                        className="relative w-[9.6px] h-[8.9px]"
                        alt=""
                        src="/vector141.svg"
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
                    <div className="relative leading-[6.42px]">
                      GET IN TOUCH
                    </div>
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
      {isDrwawerMenu1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu1}
        >
          <DrwawerMenu onClose={closeDrwawerMenu1} />
        </PortalDrawer>
      )}
      {isDrwawerMenu2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu2}
        >
          <DrwawerMenu onClose={closeDrwawerMenu2} />
        </PortalDrawer>
      )}
      {isDrwawerMenu3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu3}
        >
          <DrwawerMenu onClose={closeDrwawerMenu3} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Homepage1;
