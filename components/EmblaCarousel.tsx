import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { EmblaOptionsType } from "embla-carousel";
import X from "./X";
import AppleMusic from "./AppleMusic";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

const options: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const components = [];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 6000,
      stopOnInteraction: false,
    }),
  ]);

  components.push(
    <Image
      classNames={{
        wrapper: "border dark:border-0 dark:invert-[.89]",
      }}
      className={"w-full min-h-full"}
      radius="lg"
      shadow="none"
      src="/img/handwrite.jpeg"
    />
  );

  components.push(<X />);
  components.push(<AppleMusic className="border border-gray-200 dark:border-0"/>);

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
    </section>
  );
};

export default EmblaCarousel;
