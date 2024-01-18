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
    <div
      className="flex-[0.9429] rounded-18xl bg-whitesmoke-200 box-border overflow-hidden flex flex-col items-center justify-start pt-[29px] pb-[19px] pr-[15px] pl-[18px] gap-[35px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] min-w-[398px] max-w-full text-left text-5xl text-black font-poppins border-[1px] border-solid border-gray-200 mq800:gap-[17px] mq1125:pt-5 mq1125:pb-5 mq1125:box-border mq1125:min-w-full mq1350:flex-1"
      data-animate-on-scroll
    >
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5">
        <h3 className="m-0 relative text-inherit tracking-[0.04em] font-semibold font-inherit mq450:text-lgi">
          Enquiry type
        </h3>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq800:gap-[17px]">
        <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq800:flex-wrap">
          <div className="rounded-xl box-border w-[190px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 pr-[53px] pl-[52px] border-[1px] border-solid border-darkslategray-600">
            <input
              className="w-full [border:none] [outline:none] font-poppins text-lg bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-300 text-left inline-block min-w-[50px]"
              placeholder="General"
              type="text"
            />
          </div>
          <button className="cursor-pointer pt-[7px] pb-[11px] pr-[74px] pl-[66px] bg-[transparent] flex-1 rounded-xl box-border flex flex-row items-center justify-start min-w-[83px] border-[1px] border-solid border-seagreen-300 hover:bg-mediumseagreen-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen-200">
            <div className="relative text-lg tracking-[0.04em] font-poppins text-gray-300 text-left">
              Business
            </div>
          </button>
          <div className="rounded-xl box-border w-[163px] flex flex-row items-center justify-center pt-0 px-0 pb-0.5 border-[1px] border-solid border-darkslategray-600">
            <div className="flex-1 relative text-lg tracking-[0.04em] font-poppins text-gray-300 text-center flex items-center justify-center">
              Careers
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-11xl box-border overflow-hidden flex flex-row items-center justify-center py-[17px] pr-[26px] pl-[25px] max-w-full border-[1px] border-solid border-darkslategray-600">
          <input
            className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left inline-block min-w-[250px] max-w-full"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="self-stretch rounded-11xl box-border overflow-hidden flex flex-row items-center justify-center py-[17px] pr-[26px] pl-[25px] max-w-full border-[1px] border-solid border-darkslategray-600">
          <input
            className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left inline-block min-w-[250px] max-w-full"
            placeholder="Phone"
            type="text"
          />
        </div>
        <div className="self-stretch rounded-11xl box-border overflow-hidden flex flex-row items-center justify-center py-[17px] pr-[26px] pl-[25px] max-w-full border-[1px] border-solid border-darkslategray-600">
          <input
            className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left inline-block min-w-[250px] max-w-full"
            placeholder="Email"
            type="text"
          />
        </div>
        <div className="self-stretch rounded-10xl box-border overflow-hidden flex flex-row items-center justify-center pt-[21px] pb-[22px] pr-4 pl-[15px] max-w-full border-[1px] border-solid border-darkslategray-600">
          <input
            className="w-full [border:none] [outline:none] font-poppins text-sm bg-[transparent] flex-1 relative tracking-[0.04em] text-gray-1200 text-left inline-block min-w-[250px] max-w-full"
            placeholder="Company"
            type="text"
          />
        </div>
      </form>
      <textarea
        className="bg-[transparent] h-[157px] w-auto [outline:none] self-stretch rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[27px] font-poppins text-base text-gray-1200 border-[1px] border-solid border-darkslategray-600"
        placeholder="Type your message here"
        rows={8}
        cols={29}
      />
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] rounded-6xl [background:linear-gradient(102.84deg,_#449341,_#bdb32c)] w-[99px] flex flex-row items-center justify-center box-border">
        <div className="relative text-lg tracking-[0.04em] uppercase font-semibold font-poppins text-white text-left">
          send
        </div>
      </button>
    </div>
  );
};

export default CONTACTFORM;
