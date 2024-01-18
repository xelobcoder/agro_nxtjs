import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Faq1Type = {
  whatIsHostingUsed?: string;
  frame2097?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Faq1: NextPage<Faq1Type> = ({
  whatIsHostingUsed,
  frame2097,
  propDisplay,
  propMinWidth,
  propWidth,
}) => {
  const whatIsHosting1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-left text-5xl text-white font-poppins">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b
          className="flex-1 relative leading-[32px]"
          style={whatIsHosting1Style}
        >
          {whatIsHostingUsed}
        </b>
        <img
          className="relative w-[110px] h-12 object-cover"
          alt=""
          src={frame2097}
          style={frameIcon1Style}
        />
      </div>
      <div className="self-stretch relative bg-goldenrod-200 h-px" />
    </div>
  );
};

export default Faq1;
