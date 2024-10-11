import React from "react";

import { IconSvgProps } from "@/types";

const GAM: React.FC<IconSvgProps> = ({
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

const PSG: React.FC<IconSvgProps> = ({
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


export { GAM, PSG};
