import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMobileDownloadFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12 6C12 4.46329 12.5777 3.06151 13.5278 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V11.917C18.6748 11.9716 18.3407 12 18 12C14.6863 12 12 9.31371 12 6ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17ZM22 6H19V2H17V6H14L18 10L22 6Z"
    />
  </AnimatedSvg>
);

export default SvgMobileDownloadFill;
