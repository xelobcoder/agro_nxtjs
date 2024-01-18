import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

type DrwawerMenuType = {
  onClose?: () => void;
};

const DrwawerMenu: NextPage<DrwawerMenuType> = ({ onClose }) => {
  const router = useRouter();
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

  const onLgoFrameClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBdp1ImageClick = useCallback(() => {
    window.location.href = "https://bdp.com.gh/";
    onClose && onClose();
  }, []);

  const onSpectrum1ImageClick = useCallback(() => {
    window.location.href = "https://sfl.com.gh/";
    onClose && onClose();
  }, []);

  const onIsg1ImageClick = useCallback(() => {
    window.open("https://isg.com.gh/");
    onClose && onClose();
  }, []);

  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProductsSevicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onClientsPartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onCareersClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onBdp1Image1Click = useCallback(() => {
    window.location.href = "https://bdp.com.gh/";
    onClose && onClose();
  }, []);

  const onSpectrum1Image1Click = useCallback(() => {
    window.location.href = "https://sfl.com.gh/";
    onClose && onClose();
  }, []);

  const onIsg1Image1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
    onClose && onClose();
  }, []);

  const onBslMain6IconClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
    onClose && onClose();
  }, []);

  return (
    <div
      className="rounded-t-none rounded-br-none rounded-bl-[60px] bg-beige w-full h-[518px] overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%] text-center text-sm text-black font-poppins"
      data-animate-on-scroll
    >
      <div className="absolute top-[29px] left-[44px] flex flex-col items-start justify-start py-0 px-5 gap-[22px]">
        <div className="flex flex-row items-center justify-start gap-[139px]">
          <div className="rounded-[137.35px] bg-darkslategray-400 [backdrop-filter:blur(347.67px)] w-[222px] h-[60.9px] flex flex-row items-center justify-start py-2.5 px-[27.747304916381836px] box-border gap-[40px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[89.3px] h-[56.1px]"
              onClick={onLgoFrameClick}
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                id="logo"
                alt=""
                src="/logo2@2x.png"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative w-[38.4px] [&_.oursubsiadiries]:active:flex">
              <div className="oursubsiadiries absolute top-[60px] left-[-153px] rounded-xl bg-gainsboro-100 hidden flex-col items-start justify-start p-5 gap-[20px]">
                <img
                  className="relative w-[184.9px] h-8"
                  alt=""
                  src="/group-939.svg"
                />
                <img
                  className="relative w-[125.6px] h-[33px] overflow-hidden shrink-0 object-cover cursor-pointer"
                  alt=""
                  src="/bdp-1@2x.png"
                  onClick={onClose}
                />
                <img
                  className="relative w-[113px] h-[31px] overflow-hidden shrink-0 object-cover cursor-pointer"
                  alt=""
                  src="/spectrum-1@2x.png"
                  onClick={onClose}
                />
                <img
                  className="relative w-[71px] h-[34px] overflow-hidden shrink-0 object-cover cursor-pointer"
                  alt=""
                  src="/isg-1@2x.png"
                  onClick={onClose}
                />
              </div>
              <img
                className="absolute top-[10px] left-[-1px] w-8 h-[22px] object-contain mix-blend-exclusion"
                alt=""
                src="/images-2-1@2x.png"
              />
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[27px] h-[27px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkgray-200 w-[27px] h-[27px]" />
            <img
              className="absolute top-[7px] left-[7px] w-[13.5px] h-[12.5px]"
              alt=""
              src="/cross.svg"
            />
          </button>
        </div>
        <div className="flex flex-col items-start justify-start py-0 px-[15px] gap-[9.17px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-7 leading-[26.73px] font-semibold font-poppins text-black text-center inline-block"
            onClick={onHomeClick}
          >{`Home `}</button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-7 leading-[26.73px] font-semibold font-poppins text-black text-center inline-block"
            onClick={onAboutUsClick}
          >
            About Us
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-7 leading-[26.73px] font-semibold font-poppins text-black text-center inline-block"
            onClick={onProductsSevicesClick}
          >{`Products & Sevices`}</button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-7 leading-[26.73px] font-semibold font-poppins text-black text-center inline-block"
            onClick={onClientsPartnersClick}
          >{`Clients & Partners`}</button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-7 leading-[26.73px] font-semibold font-poppins text-black text-center inline-block"
            onClick={onMediaClick}
          >
            Media
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-7 leading-[26.73px] font-semibold font-poppins text-black text-center inline-block"
            onClick={onCareersClick}
          >
            Careers
          </button>
        </div>
        <button
          className="cursor-pointer py-3 px-5 bg-white rounded-31xl box-border w-40 flex flex-row items-center justify-between border-[1px] border-solid border-darkolivegreen-200 hover:bg-olivedrab-200"
          onClick={onContactUsContainerClick}
        >
          <div
            className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-darkolivegreen-300 text-center cursor-pointer hover:text-whitesmoke-100"
            onClick={onContactUsTextClick}
          >
            Contact Us
          </div>
        </button>
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="flex flex-row items-end justify-start">
            <div className="relative leading-[26.73px] font-extralight flex items-center justify-center w-[134px] h-6 shrink-0">
              Our Subsidiaries:
            </div>
            <div className="relative box-border w-[261.5px] h-[0.5px] border-t-[0.5px] border-solid border-black" />
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="relative w-[125.6px] h-[33px] overflow-hidden shrink-0 object-cover cursor-pointer"
              alt=""
              src="/bdp-1@2x.png"
              onClick={onClose}
            />
            <img
              className="relative w-[113px] h-[31px] overflow-hidden shrink-0 object-cover cursor-pointer"
              alt=""
              src="/spectrum-1@2x.png"
              onClick={onClose}
            />
            <img
              className="relative w-[71px] h-[34px] overflow-hidden shrink-0 object-cover cursor-pointer"
              alt=""
              src="/isg-1@2x.png"
              onClick={onClose}
            />
            <img
              className="relative w-11 h-[29px] overflow-hidden shrink-0 object-cover mix-blend-normal cursor-pointer"
              alt=""
              src="/bslmain-6@2x.png"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrwawerMenu;
