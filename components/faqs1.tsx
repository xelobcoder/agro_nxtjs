import type { NextPage } from "next";
import Faq1 from "./faq1";

const Faqs1: NextPage = () => {
  return (
    <div className="w-[968px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[15px] max-w-full z-[2] text-left text-5xl text-white font-poppins">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq800:flex-wrap">
          <input
            className="w-full [border:none] [outline:none] inline-block font-poppins text-5xl bg-[transparent] relative leading-[32px] font-bold text-white text-left max-w-full mq450:text-lgi mq450:leading-[26px]"
            placeholder="What does the platform do"
            type="text"
          />
          <img
            className="relative w-[159px] h-12 object-contain"
            alt=""
            src="/frame-20982@2x.png"
          />
        </div>
        <div className="self-stretch relative bg-goldenrod-200 h-px" />
      </div>
      <Faq1
        whatIsHostingUsed="How can I access the platform ?"
        frame2097="/frame-20971@2x.png"
        propDisplay="inline-block"
        propMinWidth="308px"
        propWidth="110px"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] inline-block font-poppins text-5xl bg-[transparent] flex-1 relative leading-[32px] font-bold text-white text-left min-w-[300px] max-w-full mq450:text-lgi mq450:leading-[26px]"
            placeholder="Is the platform free ?"
            type="text"
          />
          <img
            className="relative w-[106px] h-12 object-contain"
            alt=""
            src="/frame-20961@2x.png"
          />
        </div>
        <div className="self-stretch relative bg-goldenrod-200 h-px" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] inline-block font-poppins text-5xl bg-[transparent] flex-1 relative leading-[32px] font-bold text-white text-left min-w-[300px] max-w-full mq450:text-lgi mq450:leading-[26px]"
            placeholder="What do i stand to benefit ?"
            type="text"
          />
          <img
            className="relative w-[101px] h-12 object-contain"
            alt=""
            src="/frame-20951@2x.png"
          />
        </div>
        <div className="self-stretch relative bg-goldenrod-200 h-px" />
      </div>
      <Faq1
        whatIsHostingUsed="What are some of your partners ?"
        frame2097="/frame-20983@2x.png"
        propDisplay="flex"
        propMinWidth="326px"
        propWidth="94px"
      />
    </div>
  );
};

export default Faqs1;
