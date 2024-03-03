import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSidebarUnfoldFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M13 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H13V3ZM15 21V3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15ZM7 8.5L11 12L7 15.5V8.5Z"
    />
  </AnimatedSvg>
);

export default SvgSidebarUnfoldFill;
