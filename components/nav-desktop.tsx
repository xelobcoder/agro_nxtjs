import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const NavDesktop: NextPage = () => {
  const router = useRouter();

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const onLinkAboutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactUsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <nav
      className="m-0 self-stretch bg-gray-1700 shadow-[0px_0px_30px_rgba(255,_255,_255,_0.02)_inset] [backdrop-filter:blur(40px)] box-border h-20 flex flex-col items-center justify-center py-3.5 px-[150px] min-w-[944px] border-[1px] border-solid border-gray-1800 lg:hidden"
      id="navBar"
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="relative w-[125.7px] h-[42.7px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[9px] left-[77px] w-[34.7px] h-[34.7px] [&_.oursubsidiarylogos19]:hover:flex">
            <div
              className="oursubsidiarylogos19 absolute top-[1.4px] left-[44px] w-[395px] h-[29px] hidden"
              id="ourSubsidiaries"
            >
              <img
                className="absolute h-[86.21%] w-[23.7%] top-[12.41%] right-[76.3%] bottom-[1.38%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
                alt=""
                src="/clip-path-group.svg"
                onClick={onClipPathGroupClick}
              />
              <img
                className="absolute h-[83.45%] w-[12.66%] top-[-1.38%] right-[59.24%] bottom-[17.93%] left-[28.1%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                alt=""
                src="/clip-path-group9@2x.png"
                onClick={onClipPathGroup1Click}
              />
              <img
                className="absolute h-[80.69%] w-[21.65%] top-[6.9%] right-[34.3%] bottom-[12.41%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                alt=""
                src="/clip-path-group10@2x.png"
                onClick={onClipPathGroup2Click}
              />
              <img
                className="absolute h-[68.97%] w-[29.27%] top-[10.34%] right-[1.87%] bottom-[20.69%] left-[68.86%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-939.svg"
              />
            </div>
            <img
              className="absolute top-[7px] left-[5px] w-[15px] h-[21.9px] object-cover"
              alt=""
              src="/images-2-11@2x.png"
            />
          </button>
          <div className="absolute top-[0px] left-[0px] w-[67.6px] h-[42.5px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              id="logo"
              alt=""
              src="/logo41@2x.png"
            />
          </div>
        </div>
        <nav className="m-0 w-[649px] flex flex-row items-center justify-end gap-[20px]">
          <div className="w-[42px] flex flex-col items-start justify-start gap-[5px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[42px] h-[18px] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              onClick={onLinkAboutClick}
            >
              <div className="absolute top-[-5.56%] left-[0%] text-smi tracking-[0.32px] leading-[19.2px] font-medium font-poppins text-white text-left">
                Home
              </div>
            </button>
            <img
              className="relative max-h-full w-10 object-cover"
              alt=""
              src="/line-1@2x.png"
            />
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
            onClick={onAboutUsClick}
          >
            <div className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              About Us
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onProducAndServicesClick}
          >
            <div className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">{`Product & Services`}</div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
            onClick={onClientspartnersClick}
          >
            <div className="relative text-smi tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">{`Clients & Partners`}</div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
            onClick={onMediaClick}
          >
            <div className="relative text-mini-8 tracking-[0.32px] leading-[19.2px] font-medium font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fdfdfd,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
              Media
            </div>
          </button>
          <button
            className="cursor-pointer py-3 px-5 bg-[transparent] flex-1 rounded-31xl flex flex-row items-center justify-between border-[1px] border-solid border-yellowgreen-100 hover:bg-gray-1600"
            onClick={onContactUsContainerClick}
          >
            <div
              className="flex-1 relative text-mini leading-[20.4px] font-semibold font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#ebefff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center cursor-pointer"
              data-scroll-to="contactUsText"
              onClick={onContactUsTextClick}
            >
              Contact Us
            </div>
          </button>
          <div className="h-[25px] hidden flex-col items-start justify-start relative gap-[5px]">
            <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[29.5px] h-[5.3px] z-[0]" />
            <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[29.5px] h-[5.3px] z-[1]" />
            <div className="absolute my-0 mx-[!important] top-[19.7px] left-[0px] rounded-[378.41px] bg-yellowgreen-200 w-[29.5px] h-[5.3px] z-[2]" />
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavDesktop;
