import type { NextPage } from "next";
import { useEffect } from "react";

const ProductAndServicesSec: NextPage = () => {
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
    <div className="self-stretch [background:linear-gradient(180deg,_rgba(254,_202,_58,_0.75),_rgba(255,_255,_255,_0))] overflow-hidden flex flex-col items-start justify-start py-3 px-[275px] gap-[40px] text-center text-lgi text-white font-poppins lg:hidden">
      <b
        className="self-stretch relative text-46xl [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >
        What we Offer
      </b>
      <div
        className="self-stretch flex flex-col items-start justify-start p-2.5 [&.animate]:animate-[5s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-row items-center justify-center p-2.5">
          <div className="relative">
            <p className="m-0">{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
            <p className="m-0">
              beacon of innovation poised to transform the industry through the
              power of digitalization.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-left">
        <img
          className="flex-1 max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          alt=""
          src="/frame-94@2x.png"
          data-animate-on-scroll
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[3px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-9xl"
            data-animate-on-scroll
          >
            <b className="self-stretch relative capitalize">
              input-Credit Management Systems
            </b>
            <div className="self-stretch relative rounded-3xs bg-goldenrod-200 h-[5px]" />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div
              className="flex-1 relative capitalize font-medium [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              the input credit management system allows VCEs and Aggregators to
              give farmers access to input on credit and pay back with produce
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-center p-2.5 [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            data-animate-on-scroll
          >
            <div className="flex-1 relative">
              This product digitalises the input-credit process while promoting
              efficiency and productivity on the part of the farmer. This
              solution ensures easy documentation and management of inputs given
              at the beginning of the farming season; gives insights to expected
              returns, provides farmers with agronomic advice, allows agents to
              monitor farmers progress during the season and adherence to timely
              schedules of farm practices. It also documents and manages the
              recovery process by the VCEs and aggregators.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-xl text-gray-1400">
        <div className="flex flex-col items-start justify-start">
          <img
            className="relative w-[43.8px] h-[16.4px]"
            alt=""
            src="/paginations.svg"
          />
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[11px]">
          <div className="relative bg-gray-1400 w-[245.3px] h-[1.6px]" />
          <div className="relative font-black inline-block w-[7.8px] shrink-0">
            
          </div>
          <div className="relative font-black text-sandybrown inline-block w-[7.8px] shrink-0">
            
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] text-3xl text-goldenrod-200">
        <b className="self-stretch relative capitalize">
          input-Credit Management Systems
        </b>
        <div className="self-stretch relative text-lgi text-white inline-block h-[100px] shrink-0">
          <p className="m-0">
            This product also determines and distinguishes farmers from
            community aggregators by registering such value chain actors and
            their businesses in a system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductAndServicesSec;
