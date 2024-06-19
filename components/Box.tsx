import { Card, CardBody } from "@nextui-org/react";
import React from "react";

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
      className={
        "rounded-xl bg-card dark:bg-card md:bg-blur dark:md:bg-blur border-dashed border border-gray-300 dark:border-0 md:border-0"
      }
      classNames={{
        body: "overflow-hidden",
      }}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default Box;
