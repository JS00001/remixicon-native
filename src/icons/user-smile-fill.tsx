import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgUserSmileFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12H15C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12H7Z"
    />
  </AnimatedSvg>
);

export default SvgUserSmileFill;
