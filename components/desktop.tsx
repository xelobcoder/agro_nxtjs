import type { NextPage } from "next";
import { useEffect } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";

const Desktop: NextPage = () => {
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
    <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-36 px-[200px] gap-[10px] bg-[url('/desktop--1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-71xl text-white font-poppins lg:hidden">
      <b
        className="self-stretch relative tracking-[0.4px] leading-[100px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >{`Digitalization `}</b>
      <div
        className="self-stretch flex flex-row items-center justify-start gap-[15px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-76xl-1"
        data-animate-on-scroll
      >
        <div className="rounded-[11.89px] bg-goldenrod-200 w-[498.3px] flex flex-row items-center justify-center py-[5.94444465637207px] px-[11.88888931274414px] box-border hover:bg-gray-500 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
          <b className="relative tracking-[0.48px] leading-[95.11px]">
            Platform
          </b>
        </div>
        <b className="flex-1 relative text-71xl tracking-[0.4px] leading-[80px] whitespace-pre-wrap">{`for the  future `}</b>
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-center p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-xl"
        data-animate-on-scroll
      >
        <div className="self-stretch relative leading-[120%] font-medium">
          <p className="m-0">{`We provide an ecosystem for all the players in the agricultural supply chain to `}</p>
          <p className="m-0">{`function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
          <p className="m-0">
            dedicated to transforming traditional agricultural paradigms.
          </p>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-center justify-between [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg"
        data-animate-on-scroll
      >
        <div className="relative w-[125.8px] h-[47px]">
          <Box className="absolute top-[0px] left-[0px]" sx={{ width: 47 }}>
            <CircularProgress />
          </Box>
          <img
            className="absolute top-[18.8px] left-[65.8px] w-[13px] h-[13px]"
            alt=""
            src="/group-1886.svg"
          />
          <img
            className="absolute top-[18.8px] left-[112.8px] w-[13px] h-[13px]"
            alt=""
            src="/group-1886.svg"
          />
        </div>
        <div className="relative w-[42px] h-[18px]">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[24px]">
            <div className="relative leading-[100%] font-medium opacity-[0.4]">
              1
            </div>
            <b className="relative leading-[100%]">3</b>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[59px] px-[666px]">
        <img
          className="relative rounded-3xl w-[35px] h-[81px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-7@2x.png"
        />
      </div>
    </section>
  );
};

export default Desktop;
