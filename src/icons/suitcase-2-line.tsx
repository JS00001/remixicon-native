import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSuitcase2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M18 23H16V22H8V23H6V22H5C3.89543 22 3 21.1046 3 20V7C3 5.89543 3.89543 5 5 5H8V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5H19C20.1046 5 21 5.89543 21 7V20C21 21.1046 20.1046 22 19 22H18V23ZM19 7H5V20H19V7ZM10 9V18H8V9H10ZM16 9V18H14V9H16ZM14 4H10V5H14V4Z"
    />
  </AnimatedSvg>
);

export default SvgSuitcase2Line;
