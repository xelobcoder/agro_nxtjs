import type { NextPage } from "next";
import { useEffect } from "react";

const Container: NextPage = () => {
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
    <section className="self-stretch bg-darkolivegreen-400 flex flex-col items-center justify-start py-0 px-40 text-left text-lg text-white font-inter lg:flex-col lg:items-start lg:justify-start lg:pl-20 lg:pr-20 lg:box-border">
      <div className="self-stretch flex flex-row items-start justify-center gap-[98px]">
        <div className="flex-1 flex flex-row items-start justify-between">
          <div className="flex-1 flex flex-col items-start justify-start pt-[63px] px-2.5 pb-2.5 gap-[19px]">
            <div
              className="self-stretch relative text-26xl leading-[100%] font-semibold font-poppins [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              Proudly Ghanaian
            </div>
            <div
              className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="flex-1 relative">
                Agrospectrum Limited is a leading force in the agricultural
                sector, is dedicated to transforming traditional agricultural
                paradigms and empowering stakeholders across the value chain.
                With a primary focus on Africa, the company endeavors to create
                an inclusive marketplace that caters to the diverse needs of
                farmers, government agencies, financial institutions, and
                service providers. Through a comprehensive suite of services and
                innovative solutions, Agrospectrum addresses challenges faced by
                the sector, facilitating seamless connections between farmers
                and markets, providing support services for farmer well-being,
                leveraging technology for informed decision-making, and
                promoting financial inclusion and access to inputs.
              </div>
            </div>
            <div
              className="self-stretch flex flex-row items-center justify-center p-2.5 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            >
              <div className="flex-1 relative">
                <p className="m-0"></p>
                <p className="m-0">{`Agrospectrum's commitment extends to sustainability and innovation, emphasizing climate-smart agriculture to help farmers adapt to changing weather patterns. `}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[636px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/drone@2x.png"
          data-animate-on-scroll
        />
      </div>
    </section>
  );
};

export default Container;
