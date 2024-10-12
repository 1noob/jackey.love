import React from "react";

import { IconSvgProps } from "@/types";

const FLY: React.FC<IconSvgProps> = ({
  size = 16,
  shapeRendering = "geometricPrecision",
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 1280 1280"
      {...props}
    >
      
    </svg>
  );
};

const TL: React.FC<IconSvgProps> = ({
  size = 16,
  shapeRendering = "geometricPrecision",
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 1280 1280"
      {...props}
    >
      
    </svg>
  );
};

const T100: React.FC<IconSvgProps> = ({
  size = 16,
  shapeRendering = "geometricPrecision",
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 1280 1280"
      {...props}
    >
      
    </svg>
  );
};


export { TL, FLY, T100 };
