import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";

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

  const onFrameButtonClick = useCallback(() => {
    window.location.href = "https://bsl.com.gh/about/management";
  }, []);

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
      <div className="relative w-full flex flex-col items-center justify-start">
        <div className="self-stretch bg-gray-1300 [backdrop-filter:blur(200px)] flex flex-col items-start justify-start">
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
                    src="/logo4@2x.png"
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
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos9]:hover:flex">
                  <div
                    className="oursubsidiarylogos9 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
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
        <section
          className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[100px] bg-[url('/herosec@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-hard-light text-center text-51xl text-white font-poppins lg:h-[600px] lg:gap-[100px] lg:pl-5 lg:pt-0 lg:pr-5 lg:box-border"
          id="aboutUs_herosection"
        >
          <div
            className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[120px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div
              className="self-stretch flex-1 relative leading-[100%] whitespace-pre-wrap flex items-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <span>
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
            </div>
          </div>
        </section>
        <section className="self-stretch bg-darkolivegreen-400 flex flex-col items-center justify-start py-0 px-40 relative gap-[98px] text-left text-lg text-white font-inter lg:flex-col lg:items-start lg:justify-start lg:pl-20 lg:pr-20 lg:box-border">
          <div className="self-stretch flex flex-row items-start justify-between z-[0]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[63px] px-2.5 pb-2.5 gap-[19px]">
              <div
                className="self-stretch relative text-26xl leading-[100%] font-semibold font-poppins [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                Proudly Ghanaian
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="flex-1 relative">
                  Agrospectrum Limited is a leading force in the agricultural
                  sector, is dedicated to transforming traditional agricultural
                  paradigms and empowering stakeholders across the value chain.
                  With a primary focus on Africa, the company endeavors to
                  create an inclusive marketplace that caters to the diverse
                  needs of farmers, government agencies, financial institutions,
                  and service providers. Through a comprehensive suite of
                  services and innovative solutions, Agrospectrum addresses
                  challenges faced by the sector, facilitating seamless
                  connections between farmers and markets, providing support
                  services for farmer well-being, leveraging technology for
                  informed decision-making, and promoting financial inclusion
                  and access to inputs.
                </div>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-center p-2.5 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="flex-1 relative">
                  <p className="m-0"></p>
                  <p className="m-0">
                    Agrospectrum's commitment extends to sustainability and
                    innovation, emphasizing climate-smart agriculture to help
                    farmers adapt to changing weather patterns. The company
                    employs diverse delivery channels, including SMS, voice
                    messages, and other technological means, to ensure
                    widespread access to its services. In summary, Agrospectrum
                    stands as a catalyst for positive change, connecting futures
                    and reshaping the agricultural landscape with a holistic and
                    inclusive approach that empowers farmers and transforms the
                    sector.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative h-[657px] overflow-hidden bg-[url('/drone-palceholder@3x.png')] bg-cover bg-no-repeat bg-[top] lg:flex" />
          </div>
          <img
            className="absolute my-0 mx-[!important] h-full w-[calc(100%_-_1311px)] top-[-76px] right-[297px] bottom-[76px] left-[1014px] max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[1]"
            alt=""
            src="/drone@2x.png"
            data-animate-on-scroll
          />
        </section>
        <section className="self-stretch bg-honeydew-200 overflow-hidden flex flex-col items-center justify-start py-0 px-[199px] text-left text-41xl text-darkslategray-300 font-poppins md:py-2.5 md:px-20 md:box-border">
          <div className="self-stretch h-[664px] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-start justify-between pt-[60px] px-0 pb-0 md:flex-col md:items-center md:justify-start md:pl-[15px] md:pt-[30px] md:pr-[15px] md:box-border">
              <div
                className="flex-1 flex flex-row flex-wrap items-center justify-center p-2.5 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] md:flex-[unset] md:self-stretch"
                data-animate-on-scroll
              >
                <div className="flex-1 relative leading-[100%] font-semibold">{`Leading the way in Innovation & technology in the Agriculture Space`}</div>
              </div>
              <div
                className="flex-1 flex flex-col items-start justify-start gap-[20px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg font-inter md:flex-[unset] md:self-stretch"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row items-center justify-center p-2.5">
                  <div className="flex-1 relative">
                    In the fertile fields of innovation, we're sowing the seeds
                    of a smarter, more sustainable future for agriculture. We
                    harness cutting-edge technology to empower every stakeholder
                    – from farmer to financier – nurturing connections,
                    optimizing resources, and unlocking boundless potential.
                    With each bold stride, we lead the way, cultivating a
                    harvest of abundance and prosperity for generations to come.
                  </div>
                </div>
                <div
                  className="rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-60 h-[53px] flex flex-row items-center justify-center py-[24.95049285888672px] px-[49.90098571777344px] box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xl text-white font-poppins"
                  data-animate-on-scroll
                >
                  <div className="relative leading-[12.72px]">GET IN TOUCH</div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[424px] shrink-0 object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] mt-[-80px]"
              alt=""
              src="/unsplashyo5m9vczbcm@2x.png"
              data-animate-on-scroll
            />
          </div>
        </section>
        <section className="self-stretch bg-darkolivegreen-400 overflow-hidden flex flex-row flex-wrap items-start justify-center py-[30px] px-[62px] relative gap-[10px] text-center text-[126.5px] text-goldenrod-400 font-poppins lg:pt-[18px] lg:px-[30px] lg:pb-5 lg:box-border">
          <img
            className="absolute my-0 mx-[!important] top-[238px] left-[215px] w-[1154.5px] h-[592.7px] object-contain z-[0]"
            alt=""
            src="/vector-26.svg"
          />
          <div className="flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-center min-w-[430px] z-[1]">
            <div className="flex-1 flex flex-col items-center justify-start gap-[21px]">
              <div
                className="self-stretch flex flex-row items-center justify-center p-[8.430057525634766px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <h1
                  className="m-0 flex-1 relative text-inherit font-bold font-inherit lg:text-71xl [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0] md:text-53xl sm:text-[62px]"
                  data-animate-on-scroll
                >
                  Leadership Team
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[15px] text-left text-13xl text-white font-lexend-deca lg:flex-col lg:py-5 lg:px-[30px] lg:box-border md:flex-col md:py-5 md:px-[30px] md:box-border sm:gap-[10px] sm:items-center sm:justify-center sm:py-2.5 sm:px-5 sm:box-border">
                <div className="flex-1 flex flex-row items-center justify-center gap-[25px] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div
                    className="relative w-[361px] h-[552px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute top-[0px] left-[0px] w-[343.2px] h-[552.1px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-[48px] w-[343px] h-[491px] object-cover"
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className="absolute top-[444.9px] left-[0px] w-[343.2px] h-[107.2px]">
                        <div className="absolute top-[0px] left-[0px] w-[343.2px] h-[107.2px]">
                          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[10px]">
                            <div className="relative w-[343.2px] h-[107.2px] z-[0]">
                              <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[343.2px] h-[107.2px] border-[1px] border-solid border-gray-1500" />
                            </div>
                            <div className="my-0 mx-[!important] absolute top-[18.1px] left-[47px] flex flex-col items-center justify-start z-[1]">
                              <div className="w-[265px] flex flex-row items-center justify-center">
                                <div className="relative tracking-[-0.01em] leading-[40px] capitalize font-extrabold flex items-center w-[259px] shrink-0">
                                  RazakAwudulai
                                </div>
                              </div>
                              <div className="relative text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[225px] h-[23px] shrink-0">
                                Chief Executive Officer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch flex-1 relative text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium flex items-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    Razak is an accomplished business leader with 20+ years of
                    experience in creating enabling environments and building
                    high-performance teams. He is passionate about the
                    technology ecosystem and has helped to grow many tech
                    businesses both in the public and private sectors globally.
                    More specifically, he has extensive experience working with
                    and helping to provide unique and innovative digital
                    solutions to boost Africa’s digital economy.
                  </div>
                </div>
                <div className="flex-1 h-[546.1px] flex flex-row items-start justify-start gap-[1px] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div
                    className="self-stretch relative w-[363px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                    data-animate-on-scroll
                  >
                    <div className="absolute top-[0px] left-[0px] w-[363.2px] h-[546.1px]">
                      <img
                        className="absolute top-[0px] left-[10px] rounded-11xl w-[343px] h-[491.3px] object-cover"
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className="absolute top-[418.9px] left-[0px] w-[363.2px] h-[127.2px]">
                        <div className="absolute top-[0px] left-[0px] w-[363.2px] h-[127.2px]">
                          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start p-2.5">
                            <div className="flex flex-col items-start justify-start relative gap-[10px]">
                              <div className="relative w-[343.2px] h-[107.2px] z-[0]">
                                <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[343.2px] h-[107.2px] border-[1px] border-solid border-gray-1500" />
                              </div>
                              <div className="my-0 mx-[!important] absolute top-[18.1px] left-[34px] flex flex-col items-center justify-start z-[1]">
                                <div className="w-[285px] flex flex-row items-center justify-center">
                                  <div className="relative tracking-[-0.01em] leading-[40px] capitalize font-extrabold flex items-center w-[293px] shrink-0">
                                    Nana B. Dwemoh
                                  </div>
                                </div>
                                <div className="relative text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-24 h-[23px] shrink-0">
                                  Chairman
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch flex-1 flex flex-col items-center justify-center p-2.5 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg"
                    data-animate-on-scroll
                  >
                    <div
                      className="self-stretch flex-1 flex flex-row items-center justify-center p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                      data-animate-on-scroll
                    >
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[30px] capitalize font-medium flex items-center">
                        Nana has 20+ years of local and international expertise
                        in banking in various management roles across several
                        countries in Africa and the UK. Nana has successfully
                        led the team in significantly growing market share and
                        profitability across the Bank’s Personal and Business
                        Banking franchises. In January 2021, Nana was appointed
                        Managing Director of UMB Bank
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] py-[30.11151885986328px] px-[60.22303771972656px] bg-[transparent] rounded-[48.93px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:bg-forestgreen-200 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                onClick={onFrameButtonClick}
                data-animate-on-scroll
              >
                <div className="relative text-[24.1px] leading-[15.36px] font-poppins text-darkslategray-300 text-left">
                  See Full Team
                </div>
              </button>
            </div>
          </div>
        </section>
        <section
          className="self-stretch bg-darkslategray-100 overflow-hidden flex flex-row items-start justify-center py-[60px] px-[100px] [&.animate]:animate-[2s_ease-in-out_0s_1_normal_forwards_fade-in-bottom] opacity-[0] text-left text-base text-white font-poppins md:bg-gray-500 md:flex-col md:items-center md:justify-center md:py-[30px] md:px-10 md:box-border sm:gap-[15px] sm:pl-[30px] sm:pr-[30px] sm:box-border"
          id="AboutUS_ourSubsidiaries"
          data-animate-on-scroll
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[45px] md:flex-[unset] md:self-stretch">
            <div
              className="self-stretch h-[147px] flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-51xl text-darkslategray-300 md:flex md:self-stretch md:w-auto md:h-[147px] md:pt-[9px] md:px-5 md:pb-5 md:box-border [&.animate]:md:animate-[1s_ease-in-out_0s_1_normal_forwards_fade-in] md:opacity-[0] md:hover:[filter:drop-shadow(0px_4px_4px_rgba(255,_248,_227,_0.25))] sm:h-auto sm:gap-[15px]"
              data-animate-on-scroll
            >
              <div className="self-stretch flex flex-row items-center justify-center">
                <h2
                  className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-inherit sm:text-[44px] [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
                  id="ourSubsidiaries_h2"
                  data-animate-on-scroll
                >
                  Affiliates
                </h2>
              </div>
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-[38px] gap-[30px]">
                <img
                  className="relative w-[259px] h-11 overflow-hidden shrink-0 object-cover md:w-[180px] md:h-[38px]"
                  alt=""
                  src="/bslmain-1@2x.png"
                />
                <div className="self-stretch relative">
                  Broadspectrum Limited is a Ghanaian information and
                  communication technology company that plays a key role in the
                  technological industry. Broadspectrum has partnered with GCB
                  Bank Limited to launch the first bank-backed mobile money
                  service (G- Money) in Ghana.
                </div>
                <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-11 flex flex-row items-center justify-center box-border hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] md:w-[200px] sm:w-[200px] sm:h-11">
                  <h3
                    className="m-0 relative text-xl leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_fade-in] md:opacity-[0] sm:text-base"
                    data-animate-on-scroll
                  >
                    Learn More
                  </h3>
                </button>
              </div>
            </div>
            <div
              className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-[38px] gap-[30px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <img
                className="relative w-[201px] h-[55px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/spectrummain-1@2x.png"
              />
              <div className="self-stretch relative">
                <p className="m-0">Connecting you at the speed of light</p>
                <p className="m-0">
                  SFL has deployed and runs the second largest and most
                  extensive nonpareil fibre optic backbone network in Ghana
                  (+4000 Km).
                </p>
                <p className="m-0">
                  We are exclusively the backbone Fibre infrastructure the
                  Western Region and have 4000+km of Fibre optic cable
                </p>
              </div>
              <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-12 flex flex-row items-center justify-center box-border hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] lg:w-[250px] lg:h-12">
                <h3
                  className="m-0 relative text-xl leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid md:leading-[5px] sm:text-base [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
                  data-animate-on-scroll
                >
                  Learn More
                </h3>
              </button>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-start [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="self-stretch flex flex-col items-start justify-start p-2.5">
                <div className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-9 gap-[30px]">
                  <img
                    className="relative w-[130px] h-[62px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/isgmain-1@2x.png"
                  />
                  <div className="self-stretch relative">
                    <p className="m-0">{`A well-resourced infrastructure service provider in IE & Telecoms`}</p>
                    <p className="m-0">
                      Infra Services Ghana Ltd (ISG) is an infrastructure
                      service company providing logistic, deployment,
                      maintenance, and support services in the power,
                      telecommunication, and mining support service sectors of
                      Ghana. The services of ISG are internally leveraged by all
                      affiliates for efficiency and control. Our Services
                      include:
                    </p>
                    <p className="m-0">- Fiber infrastructure Deployment</p>
                    <p className="m-0">- Microwave Radio Deployment</p>
                    <p className="m-0">- LAN infrastructure deployments</p>
                    <p className="m-0">- Data Centre build and management</p>
                    <p className="m-0">- Service Maintenance and Support</p>
                  </div>
                  <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center lg:w-[250px] lg:h-12 md:w-[250px] md:h-12">
                    <h3 className="m-0 relative text-mid leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid sm:text-base">
                      Learn More
                    </h3>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="self-stretch rounded-mini bg-darkolivegreen-800 h-[437.9px] flex flex-col items-start justify-start pt-[35px] px-[35px] pb-9 box-border gap-[30px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <img
                className="max-w-full overflow-hidden h-[52px] shrink-0 object-cover md:h-[43px]"
                alt=""
                src="/bdpmain-1@2x.png"
              />
              <div className="self-stretch relative">
                <p className="m-0">{`Fully integrated enhanced EPS provider with a 3-tier solution in EMI, Switching and UPG Broadspectrum Digital Payment Ltd (BDP) is an enhanced payment services provider and is licensed and regulated by the Central Bank of Ghana. BDP has deployed a 3- tier electronic solution covering payments, financial transactions switching and Electronic Money issuing solutions. BDP products offerings include Issuance of Electronic Wallets, Digital Banking, utility services, Remittances `}</p>
                <p className="m-0">{`– Send and receive Cash, Airtime, and Internet Data top-up, Utility/Bill pay, Bank Direct `}</p>
                <p className="m-0">{`–Bank 2 Wallet, Wallet 2 Bank, Bulk payment processing. B2B Payment Solutions development & Build `}</p>
                <p className="m-0">{`– Apps and USSD solutions. `}</p>
                <p className="m-0">{`BDP has deployed the widest power revenue collection application for the Northern Electricity Development `}</p>
                <p className="m-0">
                  Company covering Nine (9) regions of Ghana and serving over
                  1.5 million households.
                </p>
              </div>
              <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] flex-1 rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] lg:w-[250px]">
                <h3 className="m-0 relative text-lgi leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid sm:text-base">
                  Learn More
                </h3>
              </button>
            </div>
          </div>
        </section>
        <div
          className="w-[1766px] overflow-hidden flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]"
          data-animate-on-scroll
        >
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
                className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center py-[24.95049285888672px] px-[49.90098571777344px] box-border">
                  <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                    GET IN TOUCH
                  </div>
                </div>
              </button>
            </div>
            <div
              className="self-stretch flex-1 flex flex-col items-start justify-start gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-mini lg:flex-[unset] lg:self-stretch"
              data-animate-on-scroll
            >
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
            <div className="w-[401px] flex flex-col items-start justify-start py-[30px] px-[5px] box-border gap-[44px] text-base">
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
                  className="my-0 mx-[!important] absolute top-[38.8px] left-[-1px] flex flex-row items-end justify-start gap-[17px] [&.animate]:animate-[5s_ease_0s_infinite_normal_forwards_scale-up] opacity-[1] z-[1]"
                  data-animate-on-scroll
                >
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
