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
    <section className="self-stretch bg-honeydew-200 overflow-hidden flex flex-col items-center justify-start py-0 px-[199px] text-left text-41xl text-darkslategray-300 font-poppins md:py-2.5 md:px-20 md:box-border">
      <div className="self-stretch h-[664px] flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row items-start justify-between pt-[60px] px-0 pb-0 md:flex-col md:items-center md:justify-start md:pl-[15px] md:pt-[30px] md:pr-[15px] md:box-border">
          <div
            className="flex-1 flex flex-row flex-wrap items-center justify-center p-2.5 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] md:flex-[unset] md:self-stretch"
            data-animate-on-scroll
          >
            <div className="flex-1 relative leading-[100%] font-semibold">{`Leading the way in Innovation & technology in the Agriculture Space`}</div>
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start gap-[20px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg font-inter md:flex-[unset] md:self-stretch"
            data-animate-on-scroll
          >
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative">
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
              className="cursor-pointer [border:none] py-[24.95049285888672px] px-[49.90098571777344px] bg-[transparent] rounded-[40.54px] [background:linear-gradient(93.32deg,_#4f943e,_#c1ad28)] w-60 h-[53px] flex flex-row items-center justify-center box-border [&.animate]:animate-[2s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="relative text-xl leading-[12.72px] font-poppins text-white text-left">
                GET IN TOUCH
              </div>
            </button>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[424px] shrink-0 object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] mt-[-80px]"
          alt=""
          src="/unsplashyo5m9vczbcm@2x.png"
          data-animate-on-scroll
        />
      </div>
    </section>
  );
};

export default Leading;
