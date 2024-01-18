import type { NextPage } from "next";
import { useEffect } from "react";

const FrameComponent51: NextPage = () => {
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
    <section
      className="self-stretch flex flex-row items-center justify-center lg:self-stretch lg:w-auto lg:flex-row lg:items-center lg:justify-start"
      id="partners_logos"
    >
      <div
        className="w-[974.1px] flex flex-row flex-wrap items-start justify-center gap-[92px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >
        <div className="flex-1 flex flex-row items-start justify-center gap-[92px] lg:flex-1 md:flex-col">
          <section className="w-[292px] flex flex-row items-center justify-start gap-[89px] lg:flex-row">
            <img
              className="relative w-[92px] h-[76.7px] object-cover"
              alt=""
              src="/download-514@2x.png"
            />
            <img
              className="relative w-[59.8px] h-[63.6px] object-cover"
              alt=""
              src="/download-37@2x.png"
            />
          </section>
          <section className="flex flex-row items-start justify-start gap-[68px] lg:flex-row">
            <img
              className="relative w-[171.4px] h-[81.1px] object-cover"
              alt=""
              src="/capture8@2x.png"
            />
            <img
              className="relative w-[135.9px] h-[77.8px] object-cover"
              alt=""
              src="/download-68@2x.png"
            />
          </section>
        </div>
        <section className="flex flex-row items-start justify-center gap-[92px] lg:flex-1 lg:flex-row lg:gap-[80px] lg:py-2.5 lg:px-[15px] lg:box-border md:items-center md:justify-center">
          <section className="flex flex-row items-center justify-start gap-[76px] lg:flex-1 lg:items-center lg:justify-center">
            <img
              className="relative w-[88.2px] h-[62.5px] object-cover"
              alt=""
              src="/download-515@2x.png"
            />
            <img
              className="relative w-[65.7px] h-[71.2px] object-cover"
              alt=""
              src="/download-27@2x.png"
            />
            <img
              className="relative w-[138px] h-[47px] object-cover mix-blend-difference"
              alt=""
              src="/images7@2x.png"
            />
          </section>
          <section className="h-[72.4px] flex flex-row items-center justify-start gap-[43.76px] text-left text-5xs-6 text-black font-montserrat lg:items-center lg:justify-center">
            <img
              className="relative w-[140px] h-[59.9px] object-cover"
              alt=""
              src="/download-18@2x.png"
            />
            <img
              className="relative w-[85.4px] h-[92.2px] object-cover"
              alt=""
              src="/images-18@2x.png"
            />
            <div className="relative w-[55.9px] h-[71.5px]">
              <div className="absolute top-[62.5px] left-[4.9px] tracking-[0.1em] font-medium flex items-center w-[46.9px] h-[9px]">
                AGROMITE
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[55.9px] h-[61.7px] object-cover"
                alt=""
                src="/download7@2x.png"
              />
            </div>
          </section>
        </section>
        <section className="flex-1 flex flex-col items-center justify-start">
          <img
            className="relative w-[303.5px] h-[67.9px] object-cover"
            alt=""
            src="/mofa-color8@2x.png"
          />
        </section>
      </div>
    </section>
  );
};

export default FrameComponent51;
