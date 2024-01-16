import type { NextPage } from "next";
import { useEffect } from "react";

const Component: NextPage = () => {
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
    <div className="self-stretch [background:linear-gradient(180deg,_rgba(21,_35,_17,_0.6),_rgba(25,_41,_21,_0.6))] overflow-hidden flex flex-col items-center justify-start py-20 px-[200px] box-border max-h-[488.8061828613281px] text-left text-121xl text-goldenrod-100 font-poppins">
      <div
        className="self-stretch h-[159px] flex flex-row items-center justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        data-animate-on-scroll
      >
        <div className="flex-1 flex flex-row items-center justify-between">
          <img
            className="relative w-[54.5px] h-[54.5px] opacity-[0.78]"
            alt=""
            src="/left-group.svg"
          />
          <div className="w-[707px] flex flex-row items-center justify-between">
            <div className="relative tracking-[0.02em] font-extrabold">
              Mission
            </div>
          </div>
          <img
            className="relative w-[53.5px] h-[54.5px] object-contain opacity-[0.78]"
            alt=""
            src="/left-group1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch relative text-2xl-8 font-inter text-white text-center">
        To extend digitalization and innovation to agriculture through diverse
        technological channels
      </div>
    </div>
  );
};

export default Component;
