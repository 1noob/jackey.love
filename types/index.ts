/* eslint-disable no-unused-vars */
export interface ImageProps {
  height: string;
  width: string;
  public_id: string;
  format: string;
}

import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
