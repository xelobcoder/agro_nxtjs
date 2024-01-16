import type { NextPage } from "next";
import { useCallback, useEffect } from "react";

const FrameComponent: NextPage = () => {
  const onNowWereContainerClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
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
  return (
    <div className="w-[401px] flex flex-col items-center justify-start py-[30px] pr-[5px] pl-[3px] box-border relative gap-[29px] max-w-full text-left text-base text-seagreen-100 font-poppins mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-px box-border max-w-full text-white">
        <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq450:gap-[22px]">
          <div className="self-stretch h-0 flex flex-col items-start justify-start">
            <div className="self-stretch h-0 flex flex-row items-start justify-end">
              <div
                className="w-[314px] h-0 flex flex-row items-center justify-center cursor-pointer"
                onClick={onNowWereContainerClick}
              >
                <div className="flex-1 relative tracking-[1.37px] leading-[69.96px] uppercase font-medium">
                  GET DIRECTIONS
                </div>
              </div>
            </div>
            <img
              className="relative w-[33.6px] h-[22.1px] cursor-pointer"
              alt=""
              src="/arrow-6.svg"
              onClick={onArrowIconClick}
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full text-seagreen-100">
            <div className="flex-1 relative tracking-[1.34px] leading-[68.62px] uppercase font-medium inline-block max-w-full">{`PHONE `}</div>
          </div>
        </div>
        <b className="self-stretch relative tracking-[1.34px] leading-[68.62px] capitalize">
          +233(0) 593 808 064
        </b>
      </div>
      <div className="self-stretch h-[95px] flex flex-row items-start justify-start">
        <div className="w-[254px] flex flex-col items-center justify-start gap-[2px]">
          <div className="self-stretch relative tracking-[1.15px] leading-[58.74px] uppercase font-medium">
            EMAIL
          </div>
          <b className="relative tracking-[1.15px] leading-[58.74px] lowercase flex text-white items-center whitespace-nowrap">
            customercare@bsl.com.gh
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px]">
        <div className="flex flex-row items-center justify-start py-0 pr-7 pl-0">
          <div className="h-[39px] flex flex-col items-start justify-end py-0 px-0 box-border">
            <div className="relative tracking-[1.15px] leading-[58.74px] uppercase font-medium">{`FOLLOW US `}</div>
          </div>
        </div>
      </div>
      <div
        className="my-0 mx-[!important] absolute bottom-[-18.7px] left-[4px] flex flex-row items-end justify-start gap-[17px] [&.animate]:animate-[5s_ease_0s_infinite_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >
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
        <div className="h-11 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <button className="cursor-pointer [border:none] py-[19.9257869720459px] px-3.5 bg-darkgray-400 rounded-[58.28px] w-[45.3px] h-[45.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center box-border">
            <img
              className="relative w-[16.7px] h-3.5"
              alt=""
              src="/vector1.svg"
            />
          </button>
        </div>
        <button className="cursor-pointer [border:none] py-[19.9257869720459px] px-[17px] bg-darkgray-400 rounded-[40.35px] w-[49.3px] h-[48.8px] flex flex-col items-center justify-center box-border">
          <img
            className="relative w-[16.1px] h-[15px]"
            alt=""
            src="/vector2.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
