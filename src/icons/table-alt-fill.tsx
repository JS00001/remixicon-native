import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgTableAltFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M7 14V3H3C2.44772 3 2 3.44772 2 4V14H7ZM15 14V3H9V14H15ZM22 14V4C22 3.44772 21.5523 3 21 3H17V14H22ZM21 21C21.5523 21 22 20.5523 22 20V16H2V20C2 20.5523 2.44772 21 3 21H21Z"
    />
  </AnimatedSvg>
);

export default SvgTableAltFill;
