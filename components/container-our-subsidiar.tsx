import type { NextPage } from "next";
import { useEffect } from "react";

const ContainerOurSubsidiar: NextPage = () => {
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
  return (
    <section
      className="self-stretch bg-darkslategray-100 overflow-hidden flex flex-row items-start justify-center py-[60px] px-5 box-border [&.animate]:animate-[2s_ease-in-out_0s_1_normal_forwards_fade-in-bottom] opacity-[0] max-w-full text-left text-base text-white font-poppins lg:pt-[25px] lg:pb-[25px] lg:box-border mq825:pt-5 mq825:pb-5 mq825:box-border"
      data-animate-on-scroll
    >
      <div className="w-[1550px] flex flex-col items-start justify-start gap-[45px] max-w-full mq825:gap-[22px]">
        <div
          className="self-stretch flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] min-h-[147px] max-w-full shrink-0 text-center text-51xl text-darkslategray-300"
          data-animate-on-scroll
        >
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-inherit inline-block max-w-full mq825:text-37xl mq825:leading-[56px] mq450:text-23xl mq450:leading-[42px]">
              Affiliates
            </h1>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] shrink-0"
          data-animate-on-scroll
        >
          <div className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-[38px] gap-[30px]">
            <img
              className="relative w-[259px] h-11 overflow-hidden shrink-0 object-contain"
              loading="eager"
              alt=""
              src="/bslmain-1@2x.png"
            />
            <div className="self-stretch relative">
              Broadspectrum Limited is a Ghanaian information and communication
              technology company that plays a key role in the technological
              industry. Broadspectrum has partnered with GCB Bank Limited to
              launch the first bank-backed mobile money service (G- Money) in
              Ghana.
            </div>
            <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[50px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-[63px] flex flex-row items-center justify-center box-border whitespace-nowrap hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
              <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                Learn More
              </div>
            </button>
          </div>
        </div>
        <div
          className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-[38px] gap-[30px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] shrink-0"
          data-animate-on-scroll
        >
          <img
            className="relative w-[201px] h-[55px] overflow-hidden shrink-0 object-contain"
            loading="eager"
            alt=""
            src="/spectrummain-1@2x.png"
          />
          <div className="self-stretch relative">
            <p className="m-0">Connecting you at the speed of light</p>
            <p className="m-0">
              SFL has deployed and runs the second largest and most extensive
              nonpareil fibre optic backbone network in Ghana (+4000 Km).
            </p>
            <p className="m-0">
              We are exclusively the backbone Fibre infrastructure the Western
              Region and have 4000+km of Fibre optic cable
            </p>
          </div>
          <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[50px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-[63px] flex flex-row items-center justify-center box-border whitespace-nowrap hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
            <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
              Learn More
            </div>
          </button>
        </div>
        <div
          className="self-stretch flex flex-col items-center justify-start [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] shrink-0"
          data-animate-on-scroll
        >
          <div className="self-stretch flex flex-col items-start justify-start p-2.5">
            <div className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-9 gap-[30px] mq450:pt-[23px] mq450:pb-[23px] mq450:box-border">
              <img
                className="relative w-[130px] h-[62px] overflow-hidden shrink-0 object-contain"
                loading="eager"
                alt=""
                src="/isgmain-1@2x.png"
              />
              <div className="self-stretch relative">
                <p className="m-0">{`A well-resourced infrastructure service provider in IE & Telecoms
`}</p>
                <p className="m-0">
                  Infra Services Ghana Ltd (ISG) is an infrastructure service
                  company providing logistic, deployment, maintenance, and
                  support services in the power, telecommunication, and mining
                  support service sectors of Ghana. The services of ISG are
                  internally leveraged by all affiliates for efficiency and
                  control. Our Services include:
                </p>
                <p className="m-0">- Fiber infrastructure Deployment</p>
                <p className="m-0">- Microwave Radio Deployment</p>
                <p className="m-0">- LAN infrastructure deployments</p>
                <p className="m-0">- Data Centre build and management</p>
                <p className="m-0">- Service Maintenance and Support</p>
              </div>
              <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-12 bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center whitespace-nowrap">
                <div className="relative text-mid leading-[12.72px] font-poppins text-white text-left">
                  Learn More
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-9 gap-[30px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1] shrink-0 mq450:pt-[23px] mq450:pb-[23px] mq450:box-border"
          data-animate-on-scroll
        >
          <img
            className="w-[199px] h-[52px] overflow-hidden shrink-0 object-contain"
            loading="eager"
            alt=""
            src="/bdpmain-1@2x.png"
          />
          <div className="self-stretch relative">
            <p className="m-0">{`Fully integrated enhanced EPS provider with a 3-tier solution in EMI, Switching and UPG Broadspectrum Digital Payment Ltd (BDP) is an enhanced payment services provider and is licensed and regulated by the Central Bank of Ghana. BDP has deployed a 3- tier electronic solution covering payments, financial transactions switching and Electronic Money issuing solutions. BDP products offerings include Issuance of Electronic Wallets, Digital Banking, utility services, Remittances `}</p>
            <p className="m-0">{`– Send and receive Cash, Airtime, and Internet Data top-up, Utility/Bill pay, Bank Direct `}</p>
            <p className="m-0">{`–Bank 2 Wallet, Wallet 2 Bank, Bulk payment processing. B2B Payment Solutions development & Build `}</p>
            <p className="m-0">{`– Apps and USSD solutions. `}</p>
            <p className="m-0">{`BDP has deployed the widest power revenue collection application for the Northern Electricity Development `}</p>
            <p className="m-0">
              Company covering Nine (9) regions of Ghana and serving over 1.5
              million households.
            </p>
          </div>
          <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[50px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center whitespace-nowrap hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
            <div className="relative text-lgi leading-[12.72px] font-poppins text-white text-left">
              Learn More
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContainerOurSubsidiar;
