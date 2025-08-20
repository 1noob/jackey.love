import React, { useState } from "react";
import { Navbar, NavbarContent } from "@heroui/react";
import { cn } from "@/lib/utils";
import TypedBios from "@/components/typed-bios";
import { JackeyLoveIcon } from "@/components/icon";

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
  const [opacity, setOpacity] = useState<boolean>(parentOpacity);

  const changeOpacity = (val: boolean) => {
    setOpacity(val);
    getOpacity(val);
  };

  return (
    <Navbar
      classNames={{
        base: cn(
          "hidden md:grid border-none rounded-[12px] bg-blur backdrop-blur-xl",
          className
        ),
        wrapper: "p-2 grid grid-rows-2 grid-cols-1 h-full gap-y-2",
      }}
    >
      <NavbarContent
        className="flex w-full pt-2 justify-center"
      >
        <button onClick={() => changeOpacity(!opacity)}>
          <JackeyLoveIcon
            size={30}
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
