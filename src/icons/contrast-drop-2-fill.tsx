import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgContrastDrop2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M5.63604 6.63288L12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288H5.63604ZM12 3.09735L7.05025 8.0471C5.7835 9.31385 5 11.0638 5 12.9968H19C19 11.0638 18.2165 9.31385 16.9497 8.0471L12 3.09735Z"
    />
  </AnimatedSvg>
);

export default SvgContrastDrop2Fill;
