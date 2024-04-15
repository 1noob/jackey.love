import { Card, CardBody } from "@nextui-org/card";
import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <Card isBlurred shadow="none" radius="md" className={"md:bg-card shadow-md"}
        classNames={{
            body: "overflow-hidden"
        }}
    >
      <CardBody>
          {children}
      </CardBody>
    </Card>
  );
};

export default Box;
