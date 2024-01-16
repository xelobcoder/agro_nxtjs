import type { NextPage } from "next";
import Faq1 from "./faq1";

const Faqs1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-5xl text-white font-poppins">
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[193px]">
          <b className="flex-1 relative leading-[32px]">
            What does the platform do
          </b>
          <img
            className="relative w-[159px] h-12 object-cover"
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
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <b className="flex-1 relative leading-[32px]">
            Is the platform free ?
          </b>
          <img
            className="relative w-[106px] h-12 object-cover"
            alt=""
            src="/frame-20961@2x.png"
          />
        </div>
        <div className="self-stretch relative bg-goldenrod-200 h-px" />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <b className="flex-1 relative leading-[32px]">
            What do i stand to benefit ?
          </b>
          <img
            className="relative w-[101px] h-12 object-cover"
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
        propMinWidth="unset"
        propWidth="94px"
      />
    </div>
  );
};

export default Faqs1;
