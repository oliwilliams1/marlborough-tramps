import { SVGProps } from "react";

export interface TrampCardInfo {
  name: string;
  description: string;
  longDescription: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  distanceKm: number;
  keyFeatures: string[];
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};