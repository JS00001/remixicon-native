import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgHqFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.5 11.25V9H6V15H7.5V12.75H9.5V15H11V9H9.5V11.25H7.5ZM16.25 15H17C17.5523 15 18 14.5523 18 14V10C18 9.44772 17.5523 9 17 9H14C13.4477 9 13 9.44772 13 10V14C13 14.5523 13.4477 15 14 15H14.75V16.5H16.25V15ZM14.5 10.5H16.5V13.5H14.5V10.5Z"
    />
  </AnimatedSvg>
);

export default SvgHqFill;
