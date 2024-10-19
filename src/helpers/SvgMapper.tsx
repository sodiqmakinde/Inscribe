import { Clap } from "@/design/svg/Clap";
import { Inscribe } from "@/design/svg/Inscribe";
import { Search } from "@/design/svg/Search";
import { StaticImageData } from "next/image";

export interface SvgProps {
  height?: number;
  width?: number;
  responsive?: boolean;
  fill?: string;
  className?: string;
  icon?: StaticImageData;
}

interface SvgMapperProps {
  type: string;
  fill?: string;
  className?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SvgCatalogue {
  [key: string]: any;
}

const svgs: SvgCatalogue = {
  logo: Inscribe,
  search: Search,
  clap: Clap,
  comment: Comment,
};

const Svg = ({ type, ...rest }: SvgMapperProps) => {
  if (type) {
    const Component = svgs[type];
    if (Component) return <Component {...rest} />;
  }
  return null;
};

export default Svg;
