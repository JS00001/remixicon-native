import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgAnchorFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M13 9.87398V19.928C16.6187 19.4745 19.4869 16.5923 19.9381 12.9558H17L20.7042 7C21.529 8.46132 22 10.1508 22 11.9509C22 17.5009 17.5228 22 12 22C6.47715 22 2 17.5009 2 11.9509C2 10.1508 2.47097 8.46132 3.29582 7L7 12.9558H4.06189C4.51314 16.5923 7.38128 19.4745 11 19.928V9.87398C9.27477 9.42994 8 7.86384 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 7.86384 14.7252 9.42994 13 9.87398ZM12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
    />
  </AnimatedSvg>
);

export default SvgAnchorFill;
