import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";

const ProductServices: NextPage = () => {
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

  const onLgoFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeCContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAbout2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onLinkPricingClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onLinkPricing2Click = useCallback(() => {
    // Please sync "product_services" to the project
  }, []);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onLinkPricing3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onLinkPricing4Click = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
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

  const onContactUsContainer1Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsText2Click = useCallback(() => {
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

  const onFrameButtonClick = useCallback(() => {
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
      <div className="relative bg-darkolivegreen-1000 w-full overflow-hidden flex flex-col items-center justify-center text-left text-base text-darkslategray-200 font-poppins">
        <header className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] flex flex-col items-start justify-start">
          <nav
            className="m-0 self-stretch bg-gray-1700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
            id="navBar"
          >
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative w-[125.7px] h-[42.7px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos10]:hover:flex">
                  <div
                    className="oursubsidiarylogos10 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
                    src="/images-2-11@2x.png"
                  />
                </button>
                <div
                  className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px] cursor-pointer"
                  onClick={onLgoFrameContainerClick}
                >
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    id="logo"
                    alt=""
                    src="/logo21@2x.png"
                  />
                </div>
              </div>
              <nav className="m-0 w-[649px] flex flex-row items-center justify-end gap-[20px]">
                <div
                  className="w-[42px] flex flex-col items-start justify-start gap-[5px] cursor-pointer"
                  onClick={onHomeCContainerClick}
                >
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[42px] h-[18px] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                    onClick={onLinkAboutClick}
                  >
                    <div
                      className="absolute top-[-5.56%] left-[0%] text-smi tracking-[0.32px] leading-[19.2px] font-medium font-poppins text-white text-left cursor-pointer"
                      onClick={onLinkAbout2Click}
                    >
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
                  <div
                    className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left cursor-pointer"
                    onClick={onLinkPricingClick}
                  >
                    About Us
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                  onClick={onProducAndServicesClick}
                >
                  <div
                    className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left cursor-pointer"
                    onClick={onLinkPricing2Click}
                  >{`Product & Services`}</div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                  onClick={onClientspartnersClick}
                >
                  <div
                    className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left cursor-pointer"
                    onClick={onLinkPricing3Click}
                  >{`Clients & Partners`}</div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
                  onClick={onMediaClick}
                >
                  <div
                    className="relative text-mini-8 tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left cursor-pointer"
                    onClick={onLinkPricing4Click}
                  >
                    Media
                  </div>
                </button>
                <button
                  className="cursor-pointer py-3 px-5 bg-[transparent] flex-1 rounded-31xl flex flex-row items-center justify-between border-[1px] border-solid border-yellowgreen-100 hover:bg-gray-1600"
                  onClick={onContactUsContainerClick}
                >
                  <div
                    className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center cursor-pointer"
                    onClick={onContactUsTextClick}
                  >
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
            className="m-0 self-stretch [background:linear-gradient(rgba(23,_35,_16,_0.2),_rgba(23,_35,_16,_0.2)),_rgba(255,_255,_255,_0.06)] shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(4px)] hidden flex-row items-center justify-center py-3.5 px-[90px] border-[1px] border-solid border-gray-1800 lg:flex sm:pl-[15px] sm:pr-[15px] sm:box-border"
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
                    src="/images-2-1-1@2x.png"
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
                  onClick={onContactUsContainer1Click}
                >
                  <div
                    className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#b6c2f1,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center cursor-pointer"
                    onClick={onContactUsText2Click}
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
        <section className="self-stretch flex flex-col items-center justify-center text-center text-53xl text-white font-poppins">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[100px] px-[200px] bg-[url('/12001@3x.png')] bg-cover bg-no-repeat bg-[top] lg:flex md:hidden">
            <div className="self-stretch flex flex-col items-center justify-start relative gap-[10px]">
              <img
                className="absolute my-0 mx-[!important] top-[-330px] left-[482px] w-[763.2px] h-[1142.9px] z-[0]"
                alt=""
                src="/bg-blur7.svg"
              />
              <div className="self-stretch [filter:drop-shadow(0px_4px_10px_rgba(0,_0,_0,_0.25))] flex flex-row items-center justify-center p-2.5 z-[1]">
                <div className="flex-1 relative tracking-[0.04em] leading-[111%] lg:text-46xl">
                  <span className="font-light">{`Empowering `}</span>
                  <span className="font-extrabold">Farmers</span>
                  <span className="font-light">{`, and `}</span>
                  <span className="font-extrabold">Unlocking Ghana's</span>
                  <span className="font-light">{` `}</span>
                  <span className="font-extrabold">Agricultural</span>
                  <span className="font-light"> Potential</span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-[120px] z-[2] text-mid-1">
                <div className="flex-1 relative tracking-[0.9px] leading-[100%] flex items-center justify-center h-[131.4px] [text-shadow:0px_4px_6px_rgba(0,_0,_0,_0.25)]">{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
              </div>
              <div className="rounded-[19.8px] box-border h-[71.7px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[30px] px-2.5 z-[3] border-[1.8px] border-solid border-darkslategray-200">
                <div className="relative rounded-[50%] bg-darkslategray-200 w-[11.7px] h-[11.7px]" />
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden hidden flex-col items-center justify-center py-[56.01852035522461px] px-20 bg-[url('/960350@3x.png')] bg-cover bg-no-repeat bg-[top] text-[40.3px] md:flex md:pl-[60px] md:pr-[60px] md:box-border">
            <div className="self-stretch flex flex-col items-center justify-start relative gap-[5.6px]">
              <img
                className="absolute my-0 mx-[!important] top-[-184.9px] left-[270px] w-[427.5px] h-[640.3px] z-[0]"
                alt=""
                src="/bg-blur8.svg"
              />
              <div className="self-stretch [filter:drop-shadow(0px_2.2px_5.6px_rgba(0,_0,_0,_0.25))] flex flex-row items-center justify-center p-[5.601851940155029px] z-[1]">
                <div className="flex-1 relative tracking-[0.04em] leading-[111%] lg:text-46xl">
                  <span className="font-light">{`Empowering `}</span>
                  <span className="font-extrabold">Farmers</span>
                  <span className="font-light">{`, and `}</span>
                  <span className="font-extrabold">Unlocking Ghana's</span>
                  <span className="font-light">{` `}</span>
                  <span className="font-extrabold">Agricultural</span>
                  <span className="font-light"> Potential</span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 px-[67.22222137451172px] z-[2] text-3xs-6">
                <div className="flex-1 relative tracking-[0.5px] leading-[100%] flex items-center justify-center h-[73.6px] [text-shadow:0px_2.2px_3.36px_rgba(0,_0,_0,_0.25)]">{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
              </div>
              <div className="rounded-[11.09px] box-border h-[40.2px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[16.80555534362793px] px-[5.601851940155029px] z-[3] border-[1px] border-solid border-darkslategray-200">
                <div className="relative rounded-[50%] bg-darkslategray-200 w-[6.6px] h-[6.6px]" />
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-darkolivegreen-900 flex flex-col items-center justify-center text-left text-mini-4 text-white font-poppins">
          <div className="w-[1732px] flex flex-col items-center justify-start py-0 px-[180px] box-border md:hidden">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[70px]">
              <img
                className="flex-1 max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ottisimage@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch relative text-44xl leading-[96.75%]">
                  <p className="m-0">
                    <b className="font-poppins">Subsidy</b>
                    <span className="font-extralight"> Program</span>
                  </p>
                </div>
                <div className="self-stretch relative">
                  The Subsidy is a 7step process; which begins with Registration
                  or on-boarding of farmers who are not already registered in
                  the system, after which there is the establishment of the
                  subsidy rate and allocation to beneficiaries.
                </div>
                <div className="self-stretch relative">
                  Thereafter, a reconciliation and settlement system is also
                  established to determine how beneficiaries will get access to
                  the inputs. The subsidy module registers input supply chain
                  members or providers like wholesalers and retailers to track
                  the redemption process.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-center justify-start py-5 px-10 text-5xs lg:hidden md:flex sm:pl-20 sm:pr-20 sm:box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[39px] sm:flex-col sm:gap-[20px]">
              <img
                className="flex-1 max-w-full overflow-hidden max-h-full object-cover sm:flex-[unset] sm:self-stretch"
                alt=""
                src="/ottisimage1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[11.14px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch relative text-[35.1px] leading-[96.75%]">
                  <p className="m-0">
                    <b className="font-poppins">Subsidy</b>
                    <span className="font-extralight"> Program</span>
                  </p>
                </div>
                <div className="self-stretch relative">
                  The Subsidy is a 7step process; which begins with Registration
                  or on-boarding of farmers who are not already registered in
                  the system, after which there is the establishment of the
                  subsidy rate and allocation to beneficiaries.
                </div>
                <div className="self-stretch relative">
                  Thereafter, a reconciliation and settlement system is also
                  established to determine how beneficiaries will get access to
                  the inputs. The subsidy module registers input supply chain
                  members or providers like wholesalers and retailers to track
                  the redemption process.
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch bg-goldenrod-200 hidden flex-col items-center justify-center p-5">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[200px] md:hidden">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[70px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
                <div className="self-stretch relative text-44xl leading-[96.75%] text-darkolivegreen-700">
                  <b>Input-Credit</b>
                  <span className="font-extralight"> Management system</span>
                </div>
                <div className="self-stretch relative">{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
                <div className="self-stretch relative">
                  The product allows for easy documentation and management of
                  inputs given at the beginning of the farming season; expected
                  returns, provides farmers with agronomic advice, allows agents
                  to monitor farmers progress during the season and adherence to
                  timely schedules of farm practices.
                </div>
              </div>
              <img
                className="flex-1 max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ottisimage2@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-10 text-4xs-9 md:flex md:pl-20 md:pr-20 md:box-border">
            <div className="self-stretch flex flex-row items-center justify-center gap-[38.94px] sm:flex-col">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16.69px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch relative text-[35px] leading-[96.75%] text-darkolivegreen-700">
                  <b>Input-Credit</b>
                  <span className="font-extralight"> Management system</span>
                </div>
                <div className="self-stretch relative">{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
                <div className="self-stretch relative">
                  The product allows for easy documentation and management of
                  inputs given at the beginning of the farming season; expected
                  returns, provides farmers with agronomic advice, allows agents
                  to monitor farmers progress during the season and adherence to
                  timely schedules of farm practices.
                </div>
              </div>
              <img
                className="flex-1 max-w-full overflow-hidden max-h-full object-cover sm:flex-[unset] sm:self-stretch"
                alt=""
                src="/ottisimage3@2x.png"
              />
            </div>
          </div>
        </div>
        <section className="self-stretch bg-darkolivegreen-900 flex flex-col items-center justify-center text-left text-mini-4 text-white font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[220px] md:hidden">
            <div className="self-stretch h-[724px] flex flex-row items-center justify-center gap-[70px]">
              <img
                className="relative w-[494px] h-[708px] object-cover"
                alt=""
                src="/frame-108-2@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch relative text-44xl leading-[96.75%]">
                  <p className="m-0">
                    <b className="font-poppins">Climate</b>
                    <span className="font-extralight">
                      {" "}
                      Smart Agric program
                    </span>
                  </p>
                </div>
                <div className="self-stretch relative">
                  This solution by Agrospectrum limited focuses on providing
                  climate friendly agricultural information, predict weather,
                  disaster risk mitigation and agronomic advice through channels
                  like Interactive Voice Recognition (IVR), a call centre and
                  SMS a to farmers intermittently in various languages.
                </div>
                <div className="self-stretch relative">
                  Currently, it is run in 9 local languages, English and French.
                  It currently provides cultivation advice for twelve crops with
                  plans underway to integrate many other crops.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-center justify-start py-0 px-10 text-5xs-9 md:flex">
            <div className="self-stretch flex flex-row items-center justify-center gap-[38.31px] sm:flex-col">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[387.5px] object-cover sm:flex-[unset] sm:self-stretch"
                alt=""
                src="/frame-108-21@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[10.95px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch relative text-[34.5px] leading-[96.75%]">
                  <p className="m-0">
                    <b className="font-poppins">Climate</b>
                    <span className="font-extralight">
                      {" "}
                      Smart Agric program
                    </span>
                  </p>
                </div>
                <div className="self-stretch relative">
                  This solution by Agrospectrum limited focuses on providing
                  climate friendly agricultural information, predict weather,
                  disaster risk mitigation and agronomic advice through channels
                  like Interactive Voice Recognition (IVR), a call centre and
                  SMS a to farmers intermittently in various languages.
                </div>
                <div className="self-stretch relative">
                  Currently, it is run in 9 local languages, English and French.
                  It currently provides cultivation advice for twelve crops with
                  plans underway to integrate many other crops.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-goldenrod-200 flex flex-col items-center justify-center text-left text-mini text-darkslategray-200 font-poppins">
          <div className="w-[1732px] flex flex-col items-center justify-start py-0 px-[220px] box-border md:hidden">
            <div className="self-stretch h-[724px] flex flex-row items-center justify-center gap-[70px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative text-44xl leading-[96.75%] text-darkolivegreen-900">
                  <p className="m-0">Aggregation</p>
                </b>
                <div className="self-stretch relative">
                  The Aggregation module looks at ensuring convenience in the
                  produce aggregation process. It allows aggregators to purchase
                  produce from both Farmers and community aggregators at the
                  market rate. The module uses an internet- of things (IOT)
                  system.
                </div>
                <div className="self-stretch relative">{`Thus it is integrated with hardware components to ensure that both the quality and quantity meets the right pricing. This solution is linked to the Broadspectrum digital payments platform which is integrated with Telco’s to facilitate the payments been made to the farmers. `}</div>
              </div>
              <img
                className="relative w-[494px] h-[708px] object-cover"
                alt=""
                src="/frame-108-22@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-center justify-start py-0 px-[121.82308197021484px] text-4xs-3 md:flex md:pl-20 md:pr-20 md:box-border sm:pl-10 sm:pr-10 sm:box-border">
            <div className="self-stretch flex flex-row items-center justify-center gap-[38.76px] sm:flex-col sm:gap-[20px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[11.07px] sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative text-[34.9px] leading-[96.75%] text-darkolivegreen-900">
                  <p className="m-0">Aggregation</p>
                </b>
                <div className="self-stretch relative">
                  The Aggregation module looks at ensuring convenience in the
                  produce aggregation process. It allows aggregators to purchase
                  produce from both Farmers and community aggregators at the
                  market rate. The module uses an internet- of things (IOT)
                  system.
                </div>
                <div className="self-stretch relative">{`Thus it is integrated with hardware components to ensure that both the quality and quantity meets the right pricing. This solution is linked to the Broadspectrum digital payments platform which is integrated with Telco’s to facilitate the payments been made to the farmers. `}</div>
              </div>
              <img
                className="relative w-[273.5px] h-[392px] object-cover"
                alt=""
                src="/frame-108-23@2x.png"
              />
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
                  src="/download-227@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                  alt=""
                  src="/download-516@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                  alt=""
                  src="/download11@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                  alt=""
                  src="/download-553@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                  alt=""
                  src="/download-326@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                  alt=""
                  src="/capture11@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                  alt=""
                  src="/mofa-color27@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images11@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                  alt=""
                  src="/download-627@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                  alt=""
                  src="/images-114@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                  alt=""
                  src="/download-127@2x.png"
                />
              </div>
              <div className="absolute top-[0px] left-[2034px] w-[1974px] h-[100px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-cover"
                  alt=""
                  src="/download-227@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-cover"
                  alt=""
                  src="/download-517@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-cover"
                  alt=""
                  src="/download11@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-cover"
                  alt=""
                  src="/download-553@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-cover"
                  alt=""
                  src="/download-326@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[484px] w-[169px] h-[74px] object-cover"
                  alt=""
                  src="/capture11@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-cover"
                  alt=""
                  src="/mofa-color27@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images11@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-cover"
                  alt=""
                  src="/download-627@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[1396px] w-[100px] h-[100px] object-cover"
                  alt=""
                  src="/images-115@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-cover"
                  alt=""
                  src="/download-127@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="self-stretch bg-darkolivegreen-600 overflow-hidden flex flex-col items-center justify-start py-[30px] px-20 text-left text-15xl text-seagreen-100 font-poppins lg:self-stretch lg:w-auto">
          <div
            className="self-stretch flex flex-row items-start justify-between py-10 px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:h-auto lg:flex-col lg:items-center lg:justify-between lg:gap-[0px] lg:pl-0 lg:box-border"
            id="footercontent"
            data-animate-on-scroll
          >
            <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 gap-[8px] text-white lg:flex-[unset] lg:self-stretch">
              <div className="self-stretch flex flex-row items-center justify-start p-2.5">
                <h1 className="m-0 relative text-inherit tracking-[0.9px] leading-[46px] uppercase font-normal font-inherit">
                  TRANSFORM with
                </h1>
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
                className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center box-border"
                onClick={onFrameButtonClick}
              >
                <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                  GET IN TOUCH
                </div>
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
                  <div className="absolute w-[148.94%] left-[0%] tracking-[1.37px] leading-[69.96px] uppercase font-medium flex items-center">
                    GET DIRECTIONS
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative h-0">
                  <div className="absolute w-[146.55%] left-[0%] tracking-[1.34px] leading-[68.62px] uppercase font-medium flex items-center">{`PHONE `}</div>
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
        <section className="self-stretch bg-darkolivegreen-600 flex flex-row items-start justify-between lg:w-auto lg:[align-self:unset] lg:h-auto lg:pl-10 lg:pr-10 lg:box-border">
          <div className="flex-1 h-[25px] flex flex-col items-start justify-start py-0 px-[200px] box-border">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white" />
          </div>
        </section>
        <div className="self-stretch bg-darkolivegreen-600 flex flex-row items-end justify-between py-2.5 px-[150px] text-center text-white lg:flex-col lg:items-center lg:justify-start lg:pl-[120px] lg:pr-[116px] lg:box-border">
          <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[406px] h-7 shrink-0">
            No 24 Maseru Street,East Legon -Accra
          </b>
          <b className="relative tracking-[0.9px] leading-[46px] capitalize inline-block w-[533px] h-7 shrink-0">
            © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
          </b>
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

export default ProductServices;
