import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgShape2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M2 2H7V7H2V2ZM2 17H7V22H2V17ZM17 2H22V7H17V2ZM17 17H22V22H17V17ZM8 4H16V6H8V4ZM4 8H6V16H4V8ZM18 8H20V16H18V8ZM8 18H16V20H8V18Z"
    />
  </AnimatedSvg>
);

export default SvgShape2Fill;
