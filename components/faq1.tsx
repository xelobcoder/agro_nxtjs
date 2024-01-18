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
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-5xl text-white font-poppins">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px] max-w-full">
        <h3
          className="m-0 flex-1 relative text-inherit leading-[32px] font-bold font-inherit inline-block min-w-[308px] max-w-full mq450:text-lgi mq450:leading-[26px]"
          style={whatIsHosting1Style}
        >
          {whatIsHostingUsed}
        </h3>
        <img
          className="relative w-[110px] h-12 object-contain"
          loading="eager"
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
