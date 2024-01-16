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
    <section className="self-stretch bg-darkolivegreen-400 overflow-hidden flex flex-row flex-wrap items-center justify-center p-[30px] box-border max-w-full text-center text-107xl-5 text-goldenrod-400 font-poppins lg:pt-5 lg:pb-5 lg:box-border">
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-0 px-5 pb-px box-border gap-[1px] min-w-[430px] max-w-full z-[1]">
        <div
          className="self-stretch flex flex-row items-center justify-center p-2 box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full shrink-0"
          data-animate-on-scroll
        >
          <b className="flex-1 relative inline-block max-w-full mq825:text-32xl mq450:text-13xl">
            Leadership Team
          </b>
        </div>
        <div className="w-[1321px] flex flex-row items-start justify-start max-w-full shrink-0 text-left text-lg text-white font-lexend-deca">
          <div className="w-[1155px] flex flex-row items-center justify-center relative max-w-full">
            <div
              className="my-0 mx-[!important] absolute top-[0px] left-[-153px] w-[361px] flex flex-row items-center justify-start py-5 pr-[18px] pl-0 box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full text-13xl"
              data-animate-on-scroll
            >
              <div className="flex-1 relative h-[552px] max-w-full">
                <img
                  className="absolute top-[0px] left-[0px] rounded-29xl w-[343px] h-[491px] object-cover"
                  alt=""
                  src="/base@2x.png"
                />
                <div className="absolute top-[444.8px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-[107.2px] z-[1] border-[1px] border-solid border-gray-1500">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-full hidden border-[1px] border-solid border-gray-1500" />
                  <h1 className="m-0 absolute top-[18.2px] left-[50px] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[259px] z-[2] mq825:text-7xl mq825:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                    RazakAwudulai
                  </h1>
                  <div className="absolute top-[58.2px] left-[67px] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[225px] h-[23px] z-[2]">
                    Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-center pt-[19px] pb-[21px] pr-5 pl-[129px] box-border relative gap-[15px] max-w-full lg:flex-wrap lg:pl-16 lg:box-border mq825:pl-8 mq825:box-border">
              <img
                className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0.5px] bottom-[0.3px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/frame.svg"
              />
              <div
                className="relative tracking-[-0.01em] leading-[30px] capitalize font-medium flex items-center w-[419.5px] h-[552px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] min-w-[419.5px] max-w-full lg:flex-1 mq825:min-w-full"
                data-animate-on-scroll
              >
                Razak is an accomplished business leader with 20+ years of
                experience in creating enabling environments and building
                high-performance teams. He is passionate about the technology
                ecosystem and has helped to grow many tech businesses both in
                the public and private sectors globally. More specifically, he
                has extensive experience working with and helping to provide
                unique and innovative digital solutions to boost Africa’s
                digital economy.
              </div>
              <div
                className="w-[363px] flex flex-row items-center justify-center pt-0 px-0 pb-2.5 box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] min-w-[363px] max-w-full text-13xl lg:flex-1 mq825:min-w-full"
                data-animate-on-scroll
              >
                <div className="relative w-[343px] h-[536px] max-w-full">
                  <img
                    className="absolute top-[-0.05px] left-[0px] rounded-11xl w-[343px] h-[491.3px] object-cover"
                    alt=""
                    src="/base1@2x.png"
                  />
                  <div className="absolute top-[428.75px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-[107.2px] z-[1] border-[1px] border-solid border-gray-1500">
                    <div className="absolute top-[0px] left-[0px] rounded-11xl bg-dimgray-200 shadow-[0px_24px_48px_rgba(33,_12,_56,_0.16)] [backdrop-filter:blur(65.24px)] box-border w-full h-full hidden border-[1px] border-solid border-gray-1500" />
                    <h1 className="m-0 absolute top-[18.2px] left-[30px] text-inherit tracking-[-0.01em] leading-[40px] capitalize font-extrabold font-inherit flex items-center w-[293px] z-[2] mq825:text-7xl mq825:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                      Nana B. Dwemoh
                    </h1>
                    <div className="absolute top-[57.3px] left-[128.5px] text-lg tracking-[-0.01em] leading-[30px] capitalize font-medium text-transparent !bg-clip-text [background:linear-gradient(89.48deg,_#003a2b,_rgba(240,_192,_39,_0.95))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[83px] h-[23px] z-[2]">
                      Chairman
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 my-0 mx-[!important] absolute top-[20px] right-[-318.5px] flex flex-row items-center justify-center p-2.5 box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full"
              data-animate-on-scroll
            >
              <div
                className="flex-1 flex flex-row items-center justify-center p-2.5 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full"
                data-animate-on-scroll
              >
                <div className="flex-1 relative tracking-[-0.01em] leading-[30px] capitalize font-medium flex items-center max-w-full">
                  Nana has 20+ years of local and international expertise in
                  banking in various management roles across several countries
                  in Africa and the UK. Nana has successfully led the team in
                  significantly growing market share and profitability across
                  the Bank’s Personal and Business Banking franchises. In
                  January 2021, Nana was appointed Managing Director of UMB Bank
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] pt-[31px] px-[29px] pb-[29px] bg-[transparent] rounded-[48.93px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[286px] flex flex-row items-center justify-center box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] whitespace-nowrap hover:bg-forestgreen-200 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
          onClick={onFrameButtonClick}
          data-animate-on-scroll
        >
          <div className="relative text-5xl-1 leading-[15.36px] font-poppins text-darkslategray-300 text-left">
            See Full Team
          </div>
        </button>
      </div>
    </section>
  );
};

export default LeaderSections;
