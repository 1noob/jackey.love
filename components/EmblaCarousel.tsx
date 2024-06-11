import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

import { Image } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  systemTheme: string;
};

const components = [];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, systemTheme } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);


  components.push(
    <Image
      rel="preload"
      classNames={{
        wrapper: "shadow-xl magin-auto dark:invert-[.88] invert-[.02]",
      }}
      className={"min-h-full"}
      radius="lg"
      shadow="none"
      src="/img/handwrite.jpeg"
      loading="eager"
      alt={"JackeyLove, 喻文波, Yu-WenBo, 阿水, 水子哥, 哥哥"}
    />
  );

  components.push(
    <iframe
      className={"w-full rounded-2xl h-full shadow-lg bg-card"}
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={
        `https://embed.music.apple.com/cn/playlist/jackeylove-live/pl.u-gxbll0JC5vEGkPj?theme=` +
        systemTheme
      }
    />
  );

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

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default EmblaCarousel;
