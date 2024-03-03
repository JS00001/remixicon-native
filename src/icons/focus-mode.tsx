import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFocusMode = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 3C3.44772 3 3 3.44772 3 4V8H5V5H8V3H4ZM20 3H16V5H19V8H21V4C21 3.44772 20.5523 3 20 3ZM5 16V19H8V21H4C3.44772 21 3 20.5523 3 20V16H5ZM19 16V19H16V21H20C20.5523 21 21 20.5523 21 20V16H19ZM10 9C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H10Z"
    />
  </AnimatedSvg>
);

export default SvgFocusMode;
