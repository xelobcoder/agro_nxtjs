import type { NextPage } from "next";
import { useCallback } from "react";

const ArrowFrame: NextPage = () => {
  const onBdp1ImageClick = useCallback(() => {
    window.location.href = "https://bdp.com.gh/";
  }, []);

  const onSpectrum1ImageClick = useCallback(() => {
    window.location.href = "https://sfl.com.gh/";
  }, []);

  const onIsg1ImageClick = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[38.4px] h-[40.9px]">
      <div className="absolute top-[43px] left-[-171px] rounded-xl bg-gainsboro-100 hidden flex-col items-start justify-start p-5 gap-[20px]">
        <img
          className="relative w-[184.9px] h-8"
          alt=""
          src="/group-9391.svg"
        />
        <img
          className="relative w-[125.6px] h-[33px] overflow-hidden shrink-0 object-cover cursor-pointer"
          alt=""
          src="/bdp-1@2x.png"
          onClick={onBdp1ImageClick}
        />
        <img
          className="relative w-[113px] h-[31px] overflow-hidden shrink-0 object-cover cursor-pointer"
          alt=""
          src="/spectrum-1@2x.png"
          onClick={onSpectrum1ImageClick}
        />
        <img
          className="relative w-[71px] h-[34px] overflow-hidden shrink-0 object-cover cursor-pointer"
          alt=""
          src="/isg-1@2x.png"
          onClick={onIsg1ImageClick}
        />
      </div>
      <img
        className="absolute top-[10px] left-[-1px] w-8 h-[22px] object-contain mix-blend-exclusion"
        alt=""
        src="/images-2-13@2x.png"
      />
    </button>
  );
};

export default ArrowFrame;
