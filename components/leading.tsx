import type { NextPage } from "next";
import { useEffect } from "react";

const Leading: NextPage = () => {
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
    <section className="self-stretch bg-honeydew-200 overflow-hidden flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-left text-41xl text-darkslategray-300 font-poppins">
      <div className="w-[1352px] flex flex-col items-center justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between pt-[60px] px-0 pb-0 box-border gap-[0px] [row-gap:20px] max-w-full mq1500:flex-wrap">
          <div
            className="w-[676px] flex flex-row flex-wrap items-center justify-center p-2.5 box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full"
            data-animate-on-scroll
          >
            <h1 className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-inherit inline-block max-w-full mq825:text-29xl mq825:leading-[48px] mq450:text-17xl mq450:leading-[36px]">{`Leading the way in Innovation & technology in the Agriculture Space`}</h1>
          </div>
          <div
            className="w-[676px] flex flex-col items-start justify-start gap-[20px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full text-lg font-inter"
            data-animate-on-scroll
          >
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 box-border max-w-full">
              <div className="flex-1 relative inline-block max-w-full">
                In the fertile fields of innovation, we're sowing the seeds of a
                smarter, more sustainable future for agriculture. We harness
                cutting-edge technology to empower every stakeholder – from
                farmer to financier – nurturing connections, optimizing
                resources, and unlocking boundless potential. With each bold
                stride, we lead the way, cultivating a harvest of abundance and
                prosperity for generations to come.
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] h-[53px] flex flex-row items-center justify-center box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] whitespace-nowrap"
              data-animate-on-scroll
            >
              <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                GET IN TOUCH
              </div>
            </button>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[424px] shrink-0 object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[1] mt-[-80px]"
          loading="eager"
          alt=""
          src="/unsplashyo5m9vczbcm@2x.png"
          data-animate-on-scroll
        />
      </div>
    </section>
  );
};

export default Leading;
