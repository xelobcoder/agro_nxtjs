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
    <section className="self-stretch bg-darkolivegreen-400 flex flex-col items-center justify-start py-0 px-5 box-border relative gap-[98px] max-w-full text-left text-lg text-white font-inter mq825:gap-[49px] mq450:gap-[24px]">
      <div className="w-[1430px] flex flex-row items-start justify-between gap-[0px] [row-gap:20px] max-w-full mq1500:flex-wrap mq1500:justify-center">
        <div className="w-[715px] flex flex-col items-start justify-start pt-[63px] px-2.5 pb-2.5 box-border gap-[19px] max-w-full mq825:pt-[41px] mq825:pb-5 mq825:box-border">
          <h1
            className="m-0 self-stretch relative text-26xl leading-[100%] font-semibold font-poppins [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] mq825:text-17xl mq825:leading-[36px] mq450:text-8xl mq450:leading-[27px]"
            data-animate-on-scroll
          >
            Proudly Ghanaian
          </h1>
          <div
            className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 box-border [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full"
            data-animate-on-scroll
          >
            <div className="flex-1 relative inline-block max-w-full">
              Agrospectrum Limited is a leading force in the agricultural
              sector, is dedicated to transforming traditional agricultural
              paradigms and empowering stakeholders across the value chain. With
              a primary focus on Africa, the company endeavors to create an
              inclusive marketplace that caters to the diverse needs of farmers,
              government agencies, financial institutions, and service
              providers. Through a comprehensive suite of services and
              innovative solutions, Agrospectrum addresses challenges faced by
              the sector, facilitating seamless connections between farmers and
              markets, providing support services for farmer well-being,
              leveraging technology for informed decision-making, and promoting
              financial inclusion and access to inputs.
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-center p-2.5 box-border [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-full"
            data-animate-on-scroll
          >
            <div className="flex-1 relative flex items-center max-w-full">
              <span>
                <p className="m-0"></p>
                <p className="m-0">
                  Agrospectrum's commitment extends to sustainability and
                  innovation, emphasizing climate-smart agriculture to help
                  farmers adapt to changing weather patterns. The company
                  employs diverse delivery channels, including SMS, voice
                  messages, and other technological means, to ensure widespread
                  access to its services. In summary, Agrospectrum stands as a
                  catalyst for positive change, connecting futures and reshaping
                  the agricultural landscape with a holistic and inclusive
                  approach that empowers farmers and transforms the sector.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-[715px] h-[657px] overflow-hidden shrink-0 bg-[url('/drone-palceholder@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full" />
      </div>
      <img
        className="absolute my-0 mx-[!important] h-full w-[calc(100%_-_1311px)] top-[-76px] right-[297px] bottom-[76px] left-[1014px] max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[1]"
        loading="eager"
        alt=""
        src="/drone@2x.png"
        data-animate-on-scroll
      />
    </section>
  );
};

export default Container;
