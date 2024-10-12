import React, { useState } from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import TypedBios from "./typed-bios";
import { JackeyLoveIcon } from "./icon";
import { useWindowSize } from "rooks";

interface Props {
  className?: string;
  getOpacity: Function;
}

const Typedbar: React.FC<Props> = ({ className, getOpacity }) => {
  const { innerWidth } = useWindowSize();
  const [opacity, setOpacity] = useState<boolean>(false);

  const changeOpacity = (val: boolean) => {
    if (innerWidth > 768) {
      setOpacity(val);
      getOpacity(val);
    }
  };

  return (
    <Navbar
      classNames={{
        base: cn(
          "border-b dark:border-gray-900 md:border-none std:rounded-b-[12px] md:rounded-[12px] bg-page/10 md:bg-blur backdrop-blur-xl",
          className
        ),
        wrapper: "p-2 grid grid-rows-2 grid-cols-1 h-full gap-y-2",
      }}
      shouldHideOnScroll
    >
      <NavbarContent className="flex w-full pt-2" justify="center">
        <button onClick={() => changeOpacity(true)}>
          <JackeyLoveIcon
            className="dark:brightness-150 w-full flex m-auto justify-center"
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
