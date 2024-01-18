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
      className="self-stretch bg-darkslategray-100 overflow-hidden flex flex-row items-start justify-center py-[60px] px-[100px] [&.animate]:animate-[2s_ease-in-out_0s_1_normal_forwards_fade-in-bottom] opacity-[0] text-left text-base text-white font-poppins md:bg-gray-500 md:flex-col md:items-center md:justify-center md:py-[30px] md:px-10 md:box-border sm:gap-[15px] sm:pl-[30px] sm:pr-[30px] sm:box-border"
      id="AboutUS_ourSubsidiaries"
      data-animate-on-scroll
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[45px] md:flex-[unset] md:self-stretch">
        <div
          className="self-stretch h-[147px] flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-51xl text-darkslategray-300 md:flex md:self-stretch md:w-auto md:h-[147px] md:pt-[9px] md:px-5 md:pb-5 md:box-border [&.animate]:md:animate-[1s_ease-in-out_0s_1_normal_forwards_fade-in] md:opacity-[0] md:hover:[filter:drop-shadow(0px_4px_4px_rgba(255,_248,_227,_0.25))] sm:h-auto sm:gap-[15px]"
          data-animate-on-scroll
        >
          <div className="self-stretch flex flex-row items-center justify-center">
            <h2
              className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-inherit sm:text-25xl [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
              id="ourSubsidiaries_h2"
              data-animate-on-scroll
            >
              Affiliates
            </h2>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start p-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-[38px] gap-[30px]">
            <img
              className="relative w-[259px] h-11 overflow-hidden shrink-0 object-cover md:w-[180px] md:h-[38px]"
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
            <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-11 flex flex-row items-center justify-center box-border hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] md:w-[200px] sm:w-[200px] sm:h-11">
              <h3
                className="m-0 relative text-xl leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_fade-in] md:opacity-[0] sm:text-base"
                data-animate-on-scroll
              >
                Learn More
              </h3>
            </button>
          </div>
        </div>
        <div
          className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-[38px] gap-[30px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          data-animate-on-scroll
        >
          <img
            className="relative w-[164px] h-[41px] overflow-hidden shrink-0 object-cover"
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
          <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-12 flex flex-row items-center justify-center box-border hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] lg:w-[250px] lg:h-12">
            <h3
              className="m-0 relative text-xl leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid md:leading-[5px] sm:text-base [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:opacity-[0]"
              data-animate-on-scroll
            >
              Learn More
            </h3>
          </button>
        </div>
        <div
          className="self-stretch flex flex-col items-center justify-start [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          data-animate-on-scroll
        >
          <div className="self-stretch flex flex-col items-start justify-start p-2.5">
            <div className="self-stretch rounded-mini bg-darkolivegreen-800 flex flex-col items-start justify-start pt-[35px] px-[35px] pb-9 gap-[30px]">
              <img
                className="relative w-[130px] h-[62px] overflow-hidden shrink-0 object-cover"
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
              <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center lg:w-[250px] lg:h-12 md:w-[250px] md:h-12">
                <h3 className="m-0 relative text-mid leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid sm:text-base">
                  Learn More
                </h3>
              </button>
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-mini bg-darkolivegreen-800 h-[437.9px] flex flex-col items-start justify-start pt-[35px] px-[35px] pb-9 box-border gap-[30px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
          data-animate-on-scroll
        >
          <img
            className="max-w-full overflow-hidden h-[52px] shrink-0 object-cover md:h-[43px]"
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
          <button className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] flex-1 rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] flex flex-row items-center justify-center hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1] lg:w-[250px]">
            <h3 className="m-0 relative text-lgi leading-[12.72px] font-normal font-poppins text-white text-left md:text-mid sm:text-base">
              Learn More
            </h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContainerOurSubsidiar;
