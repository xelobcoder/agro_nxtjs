import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FaqType = {
  whatIsHostingUsed?: string;
  frame2097?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Faq: NextPage<FaqType> = ({
  whatIsHostingUsed,
  frame2097,
  propDisplay,
  propMinWidth,
  propWidth,
}) => {
  const whatIsHostingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-left text-5xl text-white font-poppins">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b
          className="flex-1 relative leading-[32px]"
          style={whatIsHostingStyle}
        >
          {whatIsHostingUsed}
        </b>
        <img
          className="relative w-[110px] h-12 object-cover"
          alt=""
          src={frame2097}
          style={frameIconStyle}
        />
      </div>
      <div className="self-stretch relative bg-goldenrod-200 h-px" />
    </div>
  );
};

export default Faq;
