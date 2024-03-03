import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLineHeight = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11 4H21V6H11V4ZM6 7V11H4V7H1L5 3L9 7H6ZM6 17H9L5 21L1 17H4V13H6V17ZM11 18H21V20H11V18ZM9 11H21V13H9V11Z"
    />
  </AnimatedSvg>
);

export default SvgLineHeight;
