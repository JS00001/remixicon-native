import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgOilFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8 5H19C19.5523 5 20 5.44772 20 6V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V11L8 5ZM13 1H18C18.5523 1 19 1.44772 19 2V4H12V2C12 1.44772 12.4477 1 13 1ZM6 12V19H8V12H6Z"
    />
  </AnimatedSvg>
);

export default SvgOilFill;
