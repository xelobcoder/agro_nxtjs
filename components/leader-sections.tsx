import type { NextPage } from "next";
import { useCallback, useEffect } from "react";

const LeaderSections: NextPage = () => {
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

  return (
    <section className="bg-darkolivegreen-400 w-[1750px] overflow-hidden flex flex-row flex-wrap items-start justify-center py-[30px] px-[62px] box-border relative gap-[10px] text-center text-107xl-5 text-goldenrod-400 font-poppins lg:pt-[18px] lg:px-[30px] lg:pb-5 lg:box-border">
      <img
        className="absolute my-0 mx-[!important] top-[238px] left-[215px] w-[1154.5px] h-[592.7px] object-contain z-[0]"
        alt=""
        src="/vector-26@2x.png"
      />
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center min-w-[430px] z-[1] lg:flex-col">
        <div className="flex-1 flex flex-col items-center justify-start gap-[21px] lg:flex-[unset] lg:self-stretch">
          <div
            className="self-stretch flex flex-row items-center justify-center p-[8.430057525634766px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            data-animate-on-scroll
          >
            <h1
              className="m-0 flex-1 relative text-inherit font-bold font-inherit lg:text-71xl [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0] md:text-53xl sm:text-43xl"
              data-animate-on-scroll
            >
              Leadership Team
            </h1>
          </div>
          <div className="w-[1586px] flex flex-row items-start justify-center gap-[15px] text-left text-13xl text-white font-lexend-deca lg:flex-col lg:items-center lg:justify-center">
            <div className="flex-1 flex flex-row items-center justify-center gap-[25px] lg:flex-col lg:py-5 lg:px-20 lg:box-border lg:flex-[unset] lg:self-stretch">
              <div
                className="relative w-[343px] h-[552px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[343.2px] h-[552.1px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-29xl w-[343px] h-[491px] object-cover"
                    alt=""
                    src="/base15@2x.png"
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
                className="flex-1 relative text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:flex-[unset] lg:self-stretch"
                data-animate-on-scroll
              >{`Razak is an accomplished business leader with 20+ years of experience in creating enabling environments and building high-performance teams. He is passionate about the technology ecosystem and has helped to grow many tech businesses both in the public and private sectors globally. More specifically, `}</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center gap-[25px] lg:flex-col lg:py-5 lg:px-20 lg:box-border lg:flex-[unset] lg:self-stretch">
              <div
                className="relative w-[343px] h-[552px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                data-animate-on-scroll
              >
                <div className="absolute top-[0px] left-[0px] w-[343.2px] h-[552.1px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-29xl w-[343px] h-[491px] object-cover"
                    alt=""
                    src="/base110@2x.png"
                  />
                  <div className="absolute top-[444.9px] left-[0px] w-[343.2px] h-[107.2px]">
                    <div className="absolute top-[0px] left-[0px] w-[343.2px] h-[107.2px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative w-[343.2px] h-[107.2px] z-[0]">
                          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-[343.2px] h-[107.2px] border-[1px] border-solid border-gray-1500" />
                        </div>
                        <div className="my-0 mx-[!important] absolute top-[18.3px] left-[33.5px] w-[290px] flex flex-col items-center justify-start z-[1]">
                          <div className="w-[265px] flex flex-row items-center justify-center">
                            <div className="relative tracking-[-0.01em] leading-[40px] capitalize font-extrabold flex items-center w-[283px] shrink-0">
                              Nana Dwenmoh
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
                className="flex-1 relative text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] lg:flex-[unset] lg:self-stretch"
                data-animate-on-scroll
              >{`Razak is an accomplished business leader with 20+ years of experience in creating enabling environments and building high-performance teams. He is passionate about the technology ecosystem and has helped to grow many tech businesses both in the public and private sectors globally. More specifically, `}</div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-[30.11151885986328px] px-[60.22303771972656px] bg-[transparent] rounded-[48.93px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:bg-forestgreen-200 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
            onClick={onFrameButtonClick}
            data-animate-on-scroll
          >
            <div className="relative text-5xl-1 leading-[15.36px] font-poppins text-darkslategray-300 text-left">
              See Full Team
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeaderSections;
