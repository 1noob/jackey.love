import React, { useState } from "react";
import { Navbar, NavbarContent } from "@heroui/react";
import { cn } from "@/lib/utils";
import TypedBios from "@/components/typed-bios";
import { JackeyLoveIcon } from "@/components/icon";
import { useWindowSize } from "rooks";

interface Props {
  className?: string;
  getOpacity: Function;
  parentOpacity: boolean;
}

const Typedbar: React.FC<Props> = ({
  className,
  getOpacity,
  parentOpacity,
}) => {
  const { innerWidth } = useWindowSize();
  const [opacity, setOpacity] = useState<boolean>(parentOpacity);

  const changeOpacity = (val: boolean) => {
    setOpacity(val);
    getOpacity(val);
  };

  return (
    <Navbar
      classNames={{
        base: cn(
          "z-10 border-b dark:border-gray-900 md:border-none std:rounded-b-[12px] md:rounded-[12px] bg-page/10 md:bg-blur backdrop-blur-xl",
          className
        ),
        wrapper: "p-2 grid grid-rows-2 grid-cols-1 h-full gap-y-2",
      }}
      shouldHideOnScroll
    >
      <NavbarContent
        className="flex w-full pt-2 pointer-events-none md:pointer-events-auto justify-center"
      >
        <button onClick={() => changeOpacity(!opacity)}>
          <JackeyLoveIcon
            size={innerWidth < 768 ? 25 : 30}
          />
        </button>
      </NavbarContent>
      <NavbarContent justify="center">
        <TypedBios />
      </NavbarContent>
    </Navbar>
  );
};

export default Typedbar;
