import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { EmblaOptionsType } from "embla-carousel";
import X from "../tweet/X";
import AppleMusic from "../AppleMusic";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import TagCloud3d from "../TagCloud3d";

const options: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 6000,
      stopOnInteraction: false,
    }),
  ]);

  let components = [];

  components.push(
    <Image
      classNames={{
        wrapper:
          "bg-white dark:bg-card min-w-full h-full grid place-content-center rounded-[12px] border-dashed border dark:border-transparent md:border-transparent border-gray-400",
      }}
      className={"m-auto h-[450px] dark:invert-[.89] rounded-[12px]"}
      radius="none"
      shadow="none"
      src="/img/handwrite.jpeg"
    />
  );

  components.push(
    <TagCloud3d />
  );
  components.push(<X id="1788487122485166261" />);
  components.push(
    <AppleMusic />
  );

  return (
    <section className="embla w-full h-full">
      <div className="embla__viewport rounded-[12px]" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="w-full h-full">{components[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
