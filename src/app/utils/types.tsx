import { SVGProps } from "react";

export interface TrampCardInfo {
  name: string;
  description: string;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};