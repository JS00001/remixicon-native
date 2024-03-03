import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgShape2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M20 16H22V22H16V20H8V22H2V16H4V8H2V2H8V4H16V2H22V8H20V16ZM18 16V8H16V6H8V8H6V16H8V18H16V16H18ZM4 4V6H6V4H4ZM4 18V20H6V18H4ZM18 4V6H20V4H18ZM18 18V20H20V18H18Z"
    />
  </AnimatedSvg>
);

export default SvgShape2Line;
