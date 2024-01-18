import type { NextPage } from "next";
import { useEffect } from "react";

const CONTACTFORM: NextPage = () => {
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
      className="flex-1 rounded-18xl bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start py-[19px] px-[18px] gap-[35px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-5xl text-black font-poppins border-[1px] border-solid border-gray-200"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-row items-center justify-center p-2.5">
        <h3 className="m-0 relative text-inherit tracking-[0.04em] font-semibold font-inherit">
          Enquiry type
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start text-lg text-gray-300">
        <div className="rounded-xl box-border w-[190px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[43px] border-[1px] border-solid border-darkslategray-600">
          <div className="relative tracking-[0.04em] inline-block w-[83px] shrink-0">
            General
          </div>
        </div>
        <div className="flex-1 relative rounded-xl box-border h-[45px] border-[1px] border-solid border-seagreen-300">
          <div className="absolute top-[-11.3px] left-[119.5px] w-[22px] h-5">
            <div className="absolute top-[19px] left-[-53px] tracking-[0.04em]">
              Business
            </div>
          </div>
        </div>
        <div className="rounded-xl box-border w-[163px] h-[47px] flex flex-col items-start justify-start text-center border-[1px] border-solid border-darkslategray-600">
          <div className="self-stretch relative tracking-[0.04em] flex items-center justify-center h-[45px] shrink-0">
            Careers
          </div>
        </div>
      </div>
      <input
        className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded-11xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-[27px] text-gray-1200 border-[1px] border-solid border-darkslategray-600"
        placeholder="Name"
        type="text"
      />
      <input
        className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded-11xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-[27px] text-gray-1200 border-[1px] border-solid border-darkslategray-600"
        placeholder="Phone"
        type="text"
      />
      <input
        className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded-11xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-[27px] text-gray-1200 border-[1px] border-solid border-darkslategray-600"
        placeholder="Email"
        type="text"
      />
      <input
        className="[outline:none] font-poppins text-sm bg-[transparent] self-stretch rounded-10xl box-border h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 px-[17px] text-gray-1200 border-[1px] border-solid border-darkslategray-600"
        placeholder="Company"
        type="text"
      />
      <textarea
        className="bg-[transparent] font-poppins text-base [outline:none] self-stretch rounded-3xl box-border h-[157px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[27px] text-gray-1200 border-[1px] border-solid border-darkslategray-600"
        placeholder="Type your message here"
      />
      <div className="self-stretch flex flex-col items-center justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[99px] h-[47px]">
          <div className="absolute top-[0px] left-[calc(50%_-_49.5px)] rounded-6xl [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] flex flex-row items-center justify-center py-2.5 px-[25px]">
            <div className="relative text-lg tracking-[0.04em] uppercase font-semibold font-poppins text-white text-left">
              send
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default CONTACTFORM;
