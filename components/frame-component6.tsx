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
    <div className="flex-1 flex flex-col items-center justify-start py-5 px-0 gap-[34px] text-left text-11xl text-darkgray-100 font-poppins">
      <div
        className="self-stretch flex flex-row items-center justify-start p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-61xl text-goldenrod-100"
        data-animate-on-scroll
      >
        <h1 className="m-0 flex-1 relative text-inherit leading-[96.75%] font-inherit">
          <span className="font-light">{`Make an `}</span>
          <span className="font-extrabold">enquiry</span>
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-white">
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit text-darkgray-300 whitespace-pre-wrap">
          CONTACT US
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-normal font-inherit">
          Agrospectrum Ltd.
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit">
          HEAD OFFICE
        </h2>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit">{`No. 24 Maseru St `}</h2>
        <div className="relative tracking-[0.04em] font-light">
          East Legon, G/A
        </div>
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-light font-inherit">
          Accra - Ghana
        </h2>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[19px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >
        <h2 className="m-0 relative text-inherit tracking-[0.04em] font-extralight font-inherit">
          PHONE
        </h2>
        <div className="relative tracking-[0.04em] text-white">
          +233(0) 593 808 064
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[19px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <h2 className="m-0 relative text-inherit tracking-[0.05em] font-extralight font-inherit">
          EMAIL
        </h2>
        <div className="relative tracking-[0.04em] text-white">
          customercare@bsl.com.gh
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
