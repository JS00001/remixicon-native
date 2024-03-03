import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSignalWifiLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM12.0005 5C8.97296 5 6.07788 5.84185 3.57997 7.39179L12.0005 17.8169L20.4204 7.39132C17.9226 5.84167 15.0278 5 12.0005 5Z"
    />
  </AnimatedSvg>
);

export default SvgSignalWifiLine;
