import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgOpenbaseFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12.0001 2.76001L21.9992 5.996L21.1001 15.464L12.0001 22.3235L2.90012 15.46L2.01074 6.00001L12.0001 2.76001ZM12.0001 3.58535L3.18898 6.43501L12.0001 20.7932L20.8058 6.43501L12.0001 3.58535Z"
    />
  </AnimatedSvg>
);

export default SvgOpenbaseFill;
