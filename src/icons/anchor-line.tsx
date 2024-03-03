import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgAnchorLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M2.04938 11H7V13H4.06189C4.51314 16.6187 7.38128 19.4869 11 19.9381V9.87398C9.27477 9.42994 8 7.86384 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 7.86384 14.7252 9.42994 13 9.87398V19.9381C16.6187 19.4869 19.4869 16.6187 19.9381 13H17V11H21.9506C21.9833 11.3289 22 11.6625 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 11.6625 2.01672 11.3289 2.04938 11ZM12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
    />
  </AnimatedSvg>
);

export default SvgAnchorLine;
