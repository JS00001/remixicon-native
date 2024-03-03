import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLuggageDepositFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M15 3C15.5523 3 16 3.44772 16 4V6H20C20.5523 6 21 6.44772 21 7V19H23V21H1V19H3V7C3 6.44772 3.44772 6 4 6H8V4C8 3.44772 8.44772 3 9 3H15ZM10 8H8V19H10V8ZM16 8H14V19H16V8ZM14 5H10V6H14V5Z"
    />
  </AnimatedSvg>
);

export default SvgLuggageDepositFill;
