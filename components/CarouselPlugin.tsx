import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { useTheme } from "next-themes";

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const { systemTheme } = useTheme();

  return (
    <Carousel
      plugins={[plugin.current]}
      className="md:hidden relative float-right w-full rounded-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="pb-4">
            <Image
              rel="preload"
              classNames={{
                wrapper: "shadow-xl w-full dark:invert-[.88] invert-[.02]",
              }}
              className={"min-h-full"}
              radius="lg"
              shadow="none"
              src="/img/handwrite.jpeg"
              loading="eager"
              alt={"JackeyLove, 喻文波, Yu-WenBo, 阿水, 水子哥, 哥哥"}
            />
        </CarouselItem>
        <CarouselItem className="pb-4">
          <iframe
            className={"shadow-lg w-full rounded-2xl h-full"}
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={
              `https://embed.music.apple.com/cn/playlist/jackeylove-live/pl.u-gxbll0JC5vEGkPj?theme=` +
              systemTheme
            }
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselPlugin;
