import { Card, CardBody } from "@nextui-org/react";
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
        "rounded-xl bg-card dark:bg-card md:bg-blur dark:md:bg-blur border-dashed border border-gray-400 dark:border-transparent md:border-none",
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
