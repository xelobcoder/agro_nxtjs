import type { NextPage } from "next";
import { useEffect } from "react";

const FrameComponent6: NextPage = () => {
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
    <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[34px] min-w-[398px] max-w-full text-left text-11xl text-darkgray-100 font-poppins mq800:gap-[17px] mq1125:min-w-full mq1350:flex-1">
      <div
        className="self-stretch flex flex-row items-center justify-center p-2.5 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full text-61xl text-goldenrod-100"
        data-animate-on-scroll
      >
        <h1 className="m-0 flex-1 relative text-inherit leading-[96.75%] inline-block max-w-full font-inherit mq450:text-5xl mq450:leading-[31px] mq800:text-21xl mq800:leading-[46px]">
          <span className="font-light">{`Make an `}</span>
          <span className="font-extrabold">enquiry</span>
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-white">
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit text-darkgray-300 whitespace-pre-wrap mq450:text-lg mq800:text-5xl">
          CONTACT US
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-normal font-inherit mq450:text-lg mq800:text-5xl">
          Agrospectrum Ltd.
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit mq450:text-lg mq800:text-5xl">
          HEAD OFFICE
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit mq450:text-lg mq800:text-5xl">{`No. 24 Maseru St `}</h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit mq450:text-lg mq800:text-5xl">
          East Legon, G/A
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit mq450:text-lg mq800:text-5xl">
          Accra - Ghana
        </h2>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[19px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full"
        data-animate-on-scroll
      >
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit mq450:text-lg mq800:text-5xl">
          PHONE
        </h2>
        <div className="relative tracking-[0.04em] text-white inline-block max-w-full mq450:text-lg mq800:text-5xl">
          +233(0) 593 808 064
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[19px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
        data-animate-on-scroll
      >
        <h2 className="m-0 relative text-inherit tracking-[0.05em] font-extralight font-inherit mq450:text-lg mq800:text-5xl">
          EMAIL
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-normal font-inherit text-white inline-block max-w-full whitespace-nowrap mq450:text-lg mq800:text-5xl">
          customercare@bsl.com.gh
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent6;
