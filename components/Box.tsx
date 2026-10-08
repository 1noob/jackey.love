import { Card, CardBody } from "@heroui/react";
import React from "react";
import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <Card
      isBlurred
      shadow="none"
      radius="none"
      className={cn(
        "p-2 rounded-[12px] !bg-blur backdrop-blur-xl backdrop-saturate-150 border-dashed border border-white/15 dark:border-white/10 md:border-none",
        className
      )}
      classNames={{
        body: "overflow-hidden",
      }}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default Box;
