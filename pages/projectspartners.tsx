import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";

const Projectspartners: NextPage = () => {
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

  const onFrameButtonClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/contact-p-age");
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

  return (
    <>
      <main
        className="relative bg-darkolivegreen-1100 w-full overflow-hidden flex flex-col items-center justify-start"
        id={`7projects&partermain`}
      >
        <header className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] flex flex-col items-start justify-start">
          <nav
            className="m-0 self-stretch bg-gray-1700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
            id="navBar"
          >
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos9]:hover:flex">
                  <div
                    className="oursubsidiarylogos9 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                      src="/clip-path-group13@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                      alt=""
                      src="/clip-path-group14@2x.png"
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
                    src="/logo61@2x.png"
                  />
                </div>
              </div>
              <nav className="m-0 w-[649px] flex flex-row items-center justify-end gap-[20px]">
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
              </nav>
            </div>
          </nav>
          <nav
            className="m-0 self-stretch [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] hidden flex-row items-center justify-center py-3.5 px-[90px] border-[1px] border-solid border-gray-1800 lg:flex sm:py-2.5 sm:px-[15px] sm:box-border sm:min-h-[70px]"
            id="navBar"
          >
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="self-stretch flex-1 relative">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos10]:hover:flex">
                  <div
                    className="oursubsidiarylogos10 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                      src="/clip-path-group15@2x.png"
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
                    src="/logo11@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[30px]">
                <button className="cursor-pointer py-3 px-5 bg-[transparent] rounded-31xl box-border w-[152px] flex flex-row items-center justify-between border-[1px] border-solid border-olivedrab-100 sm:hidden">
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
        <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[42px] px-0 bg-[url('/section6partners1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-21xl text-darkslategray-200 font-poppins lg:items-center lg:justify-start sm:flex">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[42px] px-0 gap-[10px] bg-[url('/frame-12111@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch flex flex-col items-center justify-start py-[30px] px-0 gap-[42px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <h1 className="m-0 relative text-inherit font-bold font-inherit">
                  Our Projects
                </h1>
                <div className="relative text-lgi leading-[100%] font-extrabold text-darkolivegreen-100">
                  The nations’s best digital Agric Platform
                </div>
              </div>
              <section className="self-stretch flex flex-row items-start justify-center gap-[77px] lg:flex-col lg:items-center lg:justify-center sm:p-2.5 sm:box-border">
                <section className="flex flex-col items-start justify-start gap-[40px] text-left text-sm text-dimgray-100 font-poppins lg:flex-row sm:flex-col">
                  <div className="relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-white box-border w-[264px] h-[265px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
                    <div className="absolute top-[229px] left-[152px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      @Nationwide
                    </div>
                    <img
                      className="absolute top-[0px] left-[-1px] w-[265px] h-[148px] object-cover"
                      alt=""
                      src="/base42@2x.png"
                    />
                    <div className="absolute top-[172px] left-[11px] text-xs tracking-[0.01em] leading-[15px] font-light inline-block w-[250px]">
                      A flagship program of the MoFA(Ghana) that used
                      Agrospectrum’s mobile application provide input Subsidy to
                      farmers.
                    </div>
                    <div className="absolute top-[130px] left-[-2px] w-[153px] h-[33.7px] text-smi text-darkslategray-200">
                      <div className="absolute top-[0px] left-[0px] w-[153px] h-[33.7px]">
                        <div className="absolute top-[0px] left-[0px] w-[153px] h-[33.7px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-5xs rounded-b-none bg-goldenrod-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[153px] h-[33.7px] border-[1px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[5px] left-[18px] tracking-[-0.01em] leading-[32px] capitalize font-semibold flex items-center w-[123px] h-6">{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[264px] flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-center">
                    <div className="relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-white box-border w-[264px] h-[265px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
                      <div className="absolute top-[230px] left-[154px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @nationwide
                      </div>
                      <img
                        className="absolute top-[0px] left-[-1px] w-[265px] h-[148px] object-cover"
                        alt=""
                        src="/base43@2x.png"
                      />
                      <div className="absolute top-[170px] left-[12px] text-xs tracking-[0.01em] leading-[15px] inline-block w-[242px]">
                        <span className="font-light">{`A credit program spearheaded by `}</span>
                        <span className="font-medium">May and Lotte,</span>
                        <span className="font-light">
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className="absolute top-[130px] left-[-2px] w-[156px] h-[33.7px] text-smi text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[156px] h-[33.7px]">
                          <div className="absolute top-[0px] left-[0px] w-[156px] h-[33.7px]">
                            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-5xs rounded-b-none bg-goldenrod-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[156px] h-[33.7px] border-[1px] border-solid border-gray-1500" />
                          </div>
                          <div className="absolute top-[5px] left-[17px] tracking-[-0.01em] leading-[32px] capitalize font-semibold flex items-center w-[139px] h-6">{`Input Credit Mgt. `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col items-start justify-start gap-[52px] text-left text-sm text-dimgray-100 font-poppins lg:flex-row sm:flex-col sm:gap-[40px]">
                  <div className="relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-white box-border w-[264px] h-[265px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
                    <div className="absolute top-[234px] left-[122px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      @Northern Ghana
                    </div>
                    <img
                      className="absolute top-[0px] left-[-1px] w-[265px] h-[148px] object-cover"
                      alt=""
                      src="/base44@2x.png"
                    />
                    <div className="absolute top-[170px] left-[12px] text-xs tracking-[0.01em] leading-[15px] font-light inline-block w-[235px]">
                      An enumeration program by the Government of Ghana through
                      the Ministry of Food and Agriculture that profiles farmers
                      for inclusion.
                    </div>
                    <div className="absolute top-[130px] left-[1px] w-[156px] h-8 text-smi text-darkslategray-200">
                      <div className="absolute top-[0px] left-[0px] w-[156px] h-8">
                        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-tl-none rounded-tr-5xs rounded-b-none bg-goldenrod-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border overflow-hidden flex flex-row items-center justify-center py-0 px-1.5 border-[1px] border-solid border-gray-1500">
                          <div className="relative tracking-[-0.01em] leading-[32px] capitalize font-semibold whitespace-pre-wrap">{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-white box-border w-[264px] h-[265px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
                    <div className="absolute top-[236px] left-[157px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      @Nationwide
                    </div>
                    <img
                      className="absolute top-[0px] left-[-1px] w-[265px] h-[148px] object-cover"
                      alt=""
                      src="/base45@2x.png"
                    />
                    <div className="absolute top-[170px] left-[11px] text-xs tracking-[0.01em] leading-[15px] font-light inline-block w-[250px]">{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                    <div className="absolute top-[128px] left-[-2px] w-44 h-[33.7px] text-smi text-darkslategray-200">
                      <div className="absolute top-[0px] left-[0px] w-44 h-[33.7px]">
                        <div className="absolute top-[0px] left-[0px] w-44 h-[33.7px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-5xs rounded-b-none bg-goldenrod-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-44 h-[33.7px] border-[1px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[4px] left-[13px] tracking-[-0.01em] leading-[32px] capitalize font-semibold flex items-center w-[163px] h-6">
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col items-start justify-start gap-[52px] text-left text-sm text-dimgray-100 font-poppins lg:flex-row sm:flex-col sm:gap-[40px]">
                  <div className="relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-white box-border w-[264px] h-[265px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
                    <div className="absolute top-[230px] left-[149px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      @Nationwide
                    </div>
                    <img
                      className="absolute top-[0px] left-[-1px] w-[265px] h-[148px] object-contain"
                      alt=""
                      src="/base46@2x.png"
                    />
                    <div className="absolute top-[170px] left-[12px] text-xs tracking-[0.01em] leading-[15px] font-light inline-block w-[232px]">{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                    <div className="absolute top-[129px] left-[-2px] w-[153px] h-[33.7px] text-smi text-darkslategray-200">
                      <div className="absolute top-[0px] left-[0px] w-[153px] h-[33.7px]">
                        <div className="absolute top-[0px] left-[0px] w-[153px] h-[33.7px]">
                          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-5xs rounded-b-none bg-goldenrod-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[153px] h-[33.7px] border-[1px] border-solid border-gray-1500" />
                        </div>
                        <div className="absolute top-[5px] left-[15px] tracking-[-0.01em] leading-[32px] capitalize font-semibold flex items-center w-[93px] h-6">
                          FARMER KYC
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[266px] h-[265px] flex flex-col items-start justify-start lg:flex-row lg:items-start lg:justify-start lg:pl-2.5 lg:pr-2.5 lg:box-border">
                    <div className="relative rounded-tl-none rounded-tr-xl rounded-br-none rounded-bl-xl bg-white box-border w-[264px] h-[265px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray-200">
                      <div className="absolute top-[229px] left-[175px] capitalize font-medium font-lexend-deca text-transparent !bg-clip-text [background:linear-gradient(89.25deg,_#003a2b,_#f0c027)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        @Savanna
                      </div>
                      <img
                        className="absolute top-[0px] left-[-1px] w-[265px] h-[148px] object-cover"
                        alt=""
                        src="/base47@2x.png"
                      />
                      <div className="absolute top-[170px] left-[10px] text-xs tracking-[0.01em] leading-[15px] inline-block w-[250px]">
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
                      <div className="absolute top-[130px] left-[-2px] w-[161px] h-[33.7px] text-smi text-darkslategray-200">
                        <div className="absolute top-[0px] left-[0px] w-[161px] h-[33.7px]">
                          <div className="absolute top-[0px] left-[0px] w-[161px] h-[33.7px]">
                            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-5xs rounded-b-none bg-goldenrod-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[161px] h-[33.7px] border-[1px] border-solid border-gray-1500" />
                          </div>
                          <div className="absolute top-[4px] left-[13px] tracking-[-0.01em] leading-[32px] capitalize font-semibold flex items-center w-[148px] h-6">
                            Aggregation Program
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <div className="self-stretch flex flex-row items-end justify-between py-0 px-[400px]">
                <img
                  className="relative w-[43.8px] h-[16.4px] object-cover"
                  alt=""
                  src="/frame-1210.svg"
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
              <section
                className="self-stretch flex flex-row items-center justify-center lg:self-stretch lg:w-auto lg:flex-row lg:items-center lg:justify-start"
                id="partners_logos"
              >
                <div
                  className="w-[974.1px] flex flex-row flex-wrap items-start justify-center gap-[92px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                >
                  <div className="flex-1 flex flex-row items-start justify-center gap-[92px] lg:flex-1 md:flex-col">
                    <section className="w-[292px] flex flex-row items-center justify-start gap-[89px] lg:flex-row">
                      <img
                        className="relative w-[92px] h-[76.7px] object-cover"
                        alt=""
                        src="/download-548@2x.png"
                      />
                      <img
                        className="relative w-[59.8px] h-[63.6px] object-cover"
                        alt=""
                        src="/download-324@2x.png"
                      />
                    </section>
                    <section className="flex flex-row items-start justify-start gap-[68px] lg:flex-row">
                      <img
                        className="relative w-[171.4px] h-[81.1px] object-cover"
                        alt=""
                        src="/capture25@2x.png"
                      />
                      <img
                        className="relative w-[135.9px] h-[77.8px] object-cover"
                        alt=""
                        src="/download-625@2x.png"
                      />
                    </section>
                  </div>
                  <section className="flex flex-row items-start justify-center gap-[92px] lg:flex-1 lg:flex-row lg:gap-[80px] lg:py-2.5 lg:px-[15px] lg:box-border md:items-center md:justify-center">
                    <section className="flex flex-row items-center justify-start gap-[76px] lg:flex-1 lg:items-center lg:justify-center">
                      <img
                        className="relative w-[88.2px] h-[62.5px] object-cover"
                        alt=""
                        src="/download-549@2x.png"
                      />
                      <img
                        className="relative w-[65.7px] h-[71.2px] object-cover"
                        alt=""
                        src="/download-225@2x.png"
                      />
                      <img
                        className="relative w-[138px] h-[47px] object-cover mix-blend-difference"
                        alt=""
                        src="/images24@2x.png"
                      />
                    </section>
                    <section className="h-[72.4px] flex flex-row items-center justify-start gap-[43.76px] text-left text-5xs-6 text-black font-montserrat lg:items-center lg:justify-center">
                      <img
                        className="relative w-[140px] h-[59.9px] object-cover"
                        alt=""
                        src="/download-125@2x.png"
                      />
                      <img
                        className="relative w-[85.4px] h-[92.2px] object-cover"
                        alt=""
                        src="/images-125@2x.png"
                      />
                      <div className="relative w-[55.9px] h-[71.5px]">
                        <div className="absolute top-[62.5px] left-[4.9px] tracking-[0.1em] font-medium flex items-center w-[46.9px] h-[9px]">
                          AGROMITE
                        </div>
                        <img
                          className="absolute top-[0px] left-[0px] w-[55.9px] h-[61.7px] object-cover"
                          alt=""
                          src="/download24@2x.png"
                        />
                      </div>
                    </section>
                  </section>
                  <section className="flex-1 flex flex-col items-center justify-start">
                    <img
                      className="relative w-[303.5px] h-[67.9px] object-cover"
                      alt=""
                      src="/mofa-color25@2x.png"
                    />
                  </section>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <div className="relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] w-[1750px] h-[107px] overflow-hidden shrink-0">
            <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
              <div className="absolute top-[0px] left-[0px] w-[1974px] h-[100px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                  alt=""
                  src="/download-226@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                  alt=""
                  src="/download-550@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                  alt=""
                  src="/download25@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                  alt=""
                  src="/download-551@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                  alt=""
                  src="/download-325@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                  alt=""
                  src="/capture26@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                  alt=""
                  src="/mofa-color26@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images25@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                  alt=""
                  src="/download-626@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                  alt=""
                  src="/images-126@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                  alt=""
                  src="/download-126@2x.png"
                />
              </div>
              <div className="absolute top-[0px] left-[2034px] w-[1974px] h-[100px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                  alt=""
                  src="/download-226@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                  alt=""
                  src="/download-550@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                  alt=""
                  src="/download25@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                  alt=""
                  src="/download-551@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                  alt=""
                  src="/download-325@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                  alt=""
                  src="/capture26@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                  alt=""
                  src="/mofa-color26@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images25@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                  alt=""
                  src="/download-626@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                  alt=""
                  src="/images-126@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                  alt=""
                  src="/download-126@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="self-stretch bg-darkolivegreen-600 overflow-hidden flex flex-col items-center justify-start py-[30px] px-20 text-left text-15xl text-seagreen-100 font-poppins lg:self-stretch lg:w-auto">
          <div
            className="self-stretch flex flex-row items-start justify-between py-10 px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:pl-0 lg:box-border"
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
                <div className="relative tracking-[0.9px] leading-[46px] uppercase font-black sm:text-11xl">
                  AGROSPECTRUM
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-2.5 pb-2.5 text-xl text-gainsboro-200">
                <div className="flex-1 relative leading-[32px]">
                  <p className="m-0">{`Transform your agricultural practices and `}</p>
                  <p className="m-0">
                    <span className="font-poppins">cultivate success with</span>
                    <b className="font-poppins"> industry's best</b>
                    <span>—empowering farmers, streamlining operations,</span>
                  </p>
                  <p className="m-0">
                    <span>{`and fostering a connected `}</span>
                    <b className="font-poppins">global community</b>
                  </p>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                onClick={onFrameButtonClick}
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
            <div className="flex-1 flex flex-col items-start justify-start py-[30px] px-[5px] gap-[44px] text-base lg:flex-[unset] lg:self-stretch">
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
                  <div className="absolute w-[96.14%] top-[-52.41%] left-[-0.91%] tracking-[1.15px] leading-[58.74px] uppercase font-medium flex items-center">
                    EMAIL
                  </div>
                </div>
                <div className="self-stretch relative h-[26px] text-white">
                  <b className="absolute top-[6.8px] left-[-1px] tracking-[1.15px] leading-[58.74px] lowercase">
                    customercare@bsl.com.gh
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-[5px] relative gap-[10px]">
                <div className="relative w-[131px] h-[39px] z-[0]">
                  <div className="absolute top-[-25.64%] left-[0%] tracking-[1.15px] leading-[58.74px] uppercase font-medium">{`FOLLOW US `}</div>
                </div>
                <div
                  className="my-0 mx-[!important] absolute top-[38.8px] left-[-1px] flex flex-row items-end justify-start gap-[17px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[1]"
                  data-animate-on-scroll
                >
                  <div className="rounded-[31.88px] bg-darkgray-400 w-[46.3px] h-[46.8px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[19.9257869720459px] box-border">
                    <img
                      className="relative w-[13.9px] h-[15px] object-cover"
                      alt=""
                      src="/group@2x.png"
                    />
                  </div>
                  <div className="rounded-[36.86px] bg-darkgray-400 w-[47.3px] h-[48.8px] flex flex-row items-center justify-center py-[19.9257869720459px] px-[24.90723419189453px] box-border">
                    <img
                      className="relative w-[7.8px] h-[15px] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                  <div className="rounded-[58.28px] bg-darkgray-400 w-[45.3px] h-[45.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[19.9257869720459px] px-[17.4350643157959px] box-border">
                    <img
                      className="relative w-[16.7px] h-3.5 object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                  <div className="rounded-[40.35px] bg-darkgray-400 w-[49.3px] h-[48.8px] flex flex-col items-center justify-center p-[19.9257869720459px] box-border">
                    <img
                      className="relative w-[16.1px] h-[15px] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
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

export default Projectspartners;
