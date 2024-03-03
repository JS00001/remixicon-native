import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCollapseDiagonal2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M9.00008 4.00008H11.0001V11.0001H4.00008V9.00008H7.58586L3.29297 4.70718L4.70718 3.29297L9.00008 7.58586V4.00008ZM20 15H16.4142L20.7071 19.2929L19.2929 20.7071L15 16.4142V20H13V13H20V15Z"
    />
  </AnimatedSvg>
);

export default SvgCollapseDiagonal2Line;
