import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgContractRightLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12.1715 11L7.51457 6.34311L8.92878 4.92889L15.9999 12L8.92878 19.071L7.51457 17.6568L12.1714 13L2.9996 13.0001L2.99957 11.0001L12.1715 11ZM17.9996 18.9999L17.9996 4.99991H19.9996L19.9996 18.9999H17.9996Z"
    />
  </AnimatedSvg>
);

export default SvgContractRightLine;
