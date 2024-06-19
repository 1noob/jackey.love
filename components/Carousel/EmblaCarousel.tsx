import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { EmblaOptionsType } from "embla-carousel";
import X from "../tweet/X";
import AppleMusic from "../AppleMusic";
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
        wrapper: "bg-white dark:bg-card min-w-full rounded-xl border dark:border-0",
      }}
      className={"m-auto h-[450px] dark:invert-[.89] rounded-xl"}
      radius="none"
      shadow="none"
      src="/img/handwrite.jpeg"
    />
  );

  components.push(<X id="1788487122485166261"/>);
  components.push(<AppleMusic className="border dark:border-0"/>);

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
