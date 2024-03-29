import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Transform1: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 gap-[8px] text-left text-15xl text-white font-poppins lg:flex-[unset] lg:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-start p-2.5">
        <div className="relative tracking-[0.9px] leading-[46px] uppercase">
          TRANSFORM with
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start p-2.5 text-26xl">
        <div className="relative tracking-[0.9px] leading-[46px] uppercase font-black sm:text-21xl">
          AGROSPECTRUM
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-2.5 pb-2.5 text-xl text-gainsboro-200">
        <div className="flex-1 relative leading-[32px]">
          <p className="m-0">{`Transform your agricultural practices and `}</p>
          <p className="m-0">
            <span className="font-poppins">cultivate success with</span>
            <b className="font-poppins"> industry's best</b>
            <span>—empowering farmers, streamlining operations,</span>
          </p>
          <p className="m-0">
            <span>{`and fostering a connected `}</span>
            <b className="font-poppins">global community</b>
          </p>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-[246.4px] h-[63px] flex flex-row items-center justify-center box-border"
        onClick={onFrameButtonClick}
      >
        <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
          GET IN TOUCH
        </div>
      </button>
    </div>
  );
};

export default Transform1;
