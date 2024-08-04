import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image } from "@nextui-org/react";
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import X from "../tweet/X";
import AppleMusic from "../AppleMusic";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import TagCloud3d from "../TagCloud3d";

const options: EmblaOptionsType = { loop: true , duration: 30};
const SLIDE_COUNT = 4;
const TWEEN_FACTOR_BASE = 0.2
const slides = Array.from(Array(SLIDE_COUNT).keys());
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 5000,
      stopOnInteraction: false,
    }),
  ]);

  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])


  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )
  
  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  let components = [];

  components.push(
    <Image
      classNames={{
        wrapper:
          "min-w-full h-full grid place-content-center rounded-[12px] bg-box",
      }}
      className={"m-auto h-[450px] dark:invert-[.89] rounded-[12px]"}
      radius="none"
      shadow="none"
      src="/img/handwrite.jpeg"
    />
  );

  components.push(<TagCloud3d />);
  components.push(<X id="1788487122485166261" />);
  components.push(<AppleMusic />);

  return (
    <section className="embla w-full h-full">
      <div className="embla__viewport rounded-[12px]" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number w-full h-full md:grayscale-[30%]">{components[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
