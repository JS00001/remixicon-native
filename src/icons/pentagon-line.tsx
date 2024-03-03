import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPentagonLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12.0004 3.03043L20.5309 9.22822L17.2725 19.2564H6.72821L3.46984 9.22822L12.0004 3.03043ZM22.7473 8.50806L12.0004 0.699951L1.25342 8.50806L5.35838 21.1418H18.6423L22.7473 8.50806Z"
    />
  </AnimatedSvg>
);

export default SvgPentagonLine;
