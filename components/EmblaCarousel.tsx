import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import AppleMusic from "./AppleMusic";
import useEmblaCarousel from "embla-carousel-react";

import { Image } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const components = [];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 6000,
      stopOnInteraction: false,
    }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  components.push(
    <Image
      rel="preload"
      classNames={{
        wrapper: "magin-auto dark:invert-[.89] invert-[.02]",
      }}
      className={"min-h-full"}
      radius="lg"
      shadow="none"
      src="/img/handwrite.jpeg"
      loading="eager"
      alt={"JackeyLove, 喻文波, Yu-WenBo, 阿水, 水子哥, 哥哥"}
    />
  );

  components.push(<AppleMusic />);

  return (
    <section className="embla md:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number pb-4 h-full">
                {components[index]}
              </div>
            </div>
          ))}
        </div>
      </div>


        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
    </section>
  );
};

export default EmblaCarousel;
