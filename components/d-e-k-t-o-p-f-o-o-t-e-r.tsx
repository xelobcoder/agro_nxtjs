import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const DEKTOPFOOTER: NextPage = () => {
  const router = useRouter();
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

  const onFrameButton1Click = useCallback(() => {
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

  return (
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
              <button
                className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center box-border"
                onClick={onFrameButton1Click}
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl leading-[12.72px] font-poppins text-white text-left inline-block">
                  GET IN TOUCH
                </button>
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
  );
};

export default DEKTOPFOOTER;
