import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent41: NextPage = () => {
  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainerClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  return (
    <div className="flex-1 h-[416px] flex flex-col items-start justify-start py-[30px] px-[5px] box-border gap-[44px] text-left text-base text-seagreen-100 font-poppins lg:flex-[unset] lg:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-start gap-[43px] text-white">
        <img
          className="relative max-h-full w-[33.6px] cursor-pointer"
          alt=""
          src="/arrow-6.svg"
          onClick={onArrowIconClick}
        />
        <div
          className="flex-1 relative h-0 cursor-pointer"
          onClick={onNowWereContainerClick}
        >
          <div className="absolute w-full left-[0%] tracking-[1.37px] leading-[69.96px] uppercase font-medium flex items-center">
            GET DIRECTIONS
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative h-0">
          <div className="absolute w-full left-[0%] tracking-[1.34px] leading-[68.62px] uppercase font-medium flex items-center">{`PHONE `}</div>
        </div>
        <b className="self-stretch relative tracking-[1.34px] leading-[68.62px] capitalize flex text-white items-center h-[69px] shrink-0">
          +233(0) 593 808 064
        </b>
      </div>
      <div className="w-[264px] flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch relative h-[29px]">
          <div className="absolute w-[96.14%] top-[-51.72%] left-[-0.91%] tracking-[1.15px] leading-[58.74px] uppercase font-medium flex items-center">
            EMAIL
          </div>
        </div>
        <div className="self-stretch relative h-[26px] text-white">
          <b className="absolute top-[7px] left-[-1px] tracking-[1.15px] leading-[58.74px] lowercase">
            customercare@bsl.com.gh
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[5px] relative gap-[10px]">
        <div className="relative w-[131px] h-[39px] z-[0]">
          <div className="absolute top-[-25.64%] left-[0%] tracking-[1.15px] leading-[58.74px] uppercase font-medium">{`FOLLOW US `}</div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[39px] left-[-1px] flex flex-row items-end justify-start gap-[17px] z-[1]">
          <div className="rounded-[31.88px] bg-darkgray-400 w-[46.3px] h-[46.8px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[19.9257869720459px] box-border">
            <img
              className="relative w-[13.9px] h-[15px]"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className="rounded-[36.86px] bg-darkgray-400 w-[47.3px] h-[48.8px] flex flex-row items-center justify-center py-[19.9257869720459px] px-[24.90723419189453px] box-border">
            <img
              className="relative w-[7.8px] h-[15px]"
              alt=""
              src="/vector151.svg"
            />
          </div>
          <div className="rounded-[58.28px] bg-darkgray-400 w-[45.3px] h-[45.3px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[19.9257869720459px] px-[17.4350643157959px] box-border">
            <img
              className="relative w-[16.7px] h-3.5"
              alt=""
              src="/vector161.svg"
            />
          </div>
          <div className="rounded-[40.35px] bg-darkgray-400 w-[49.3px] h-[48.8px] flex flex-col items-center justify-center p-[19.9257869720459px] box-border">
            <img
              className="relative w-[16.1px] h-[15px]"
              alt=""
              src="/vector21.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent41;
