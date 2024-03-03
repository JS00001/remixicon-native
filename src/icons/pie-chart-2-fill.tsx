import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPieChart2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11 2.04935V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81462 5.94668 2.55107 11 2.04935ZM13 0.542847C18.5535 1.02121 22.9788 5.4465 23.4571 11H13V0.542847Z"
    />
  </AnimatedSvg>
);

export default SvgPieChart2Fill;
