import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMarkdownLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM7 15.5H5V8.5H7L9 10.5L11 8.5H13V15.5H11V11.5L9 13.5L7 11.5V15.5ZM18 12.5H20L17 15.5L14 12.5H16V8.5H18V12.5Z"
    />
  </AnimatedSvg>
);

export default SvgMarkdownLine;
