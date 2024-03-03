import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMicrosoftLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11.001 5H5.00098V11H11.001V5ZM13.001 5V11H19.001V5H13.001ZM19.001 13H13.001V19H19.001V13ZM11.001 19V13H5.00098V19H11.001ZM3.00098 3H21.001V21H3.00098V3Z"
    />
  </AnimatedSvg>
);

export default SvgMicrosoftLine;
