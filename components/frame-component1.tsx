import type { NextPage } from "next";
import { useEffect } from "react";

const FrameComponent1: NextPage = () => {
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
  return (
    <section className="flex flex-row items-start justify-end py-0 px-0 box-border max-w-full">
      <div className="w-[1758px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
        <div
          className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 pr-4 pl-0 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1] max-w-full"
          data-animate-on-scroll
        >
          <div className="flex-1 relative [background:linear-gradient(90.24deg,_#fbfbfb_17.92%,_#12500c)] shadow-[0px_4px_62px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(60px)] h-[107px] overflow-hidden max-w-full">
            <div className="absolute top-[-5px] left-[63px] w-[4008px] h-[100px]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1974px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-contain"
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-contain"
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-contain"
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-contain"
                  alt=""
                  src="/download-51@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-contain"
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className="absolute h-[calc(100%_-_26px)] top-[13px] bottom-[13px] left-[484px] max-h-full w-[169px] object-contain"
                  loading="eager"
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-contain"
                  loading="eager"
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-contain"
                  loading="eager"
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[1396px] max-h-full w-[100px] object-contain"
                  loading="eager"
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-contain"
                  loading="eager"
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[2034px] w-[1974px]">
                <img
                  className="absolute top-[19px] left-[1912px] w-[62px] h-[62px] object-contain"
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[315px] w-[104px] h-[68px] object-contain"
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[1757px] w-[68px] h-[75px] object-contain"
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className="absolute top-[15px] left-[0px] w-[84px] h-[70px] object-contain"
                  alt=""
                  src="/download-51@2x.png"
                />
                <img
                  className="absolute top-[24px] left-[162px] w-[59px] h-[58px] object-contain"
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className="absolute h-[calc(100%_-_26px)] top-[13px] bottom-[13px] left-[484px] max-h-full w-[169px] object-contain"
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className="absolute top-[20px] left-[711px] w-[296px] h-[62px] object-contain"
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className="absolute top-[29px] left-[1049px] w-[138px] h-[47px] object-cover mix-blend-difference"
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className="absolute top-[14px] left-[1223px] w-[124px] h-[71px] object-contain"
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[1396px] max-h-full w-[100px] object-contain"
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className="absolute top-[18px] left-[1549px] w-[164px] h-[65px] object-contain"
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
