import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgRoadsterLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V13.5L0.757464 13.1894C0.312297 13.0781 0 12.6781 0 12.2192V11.5C0 11.2239 0.223858 11 0.5 11H2L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11H23.5C23.7761 11 24 11.2239 24 11.5V12.2192C24 12.6781 23.6877 13.0781 23.2425 13.1894L22 13.5V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 18V13H4V18H20ZM5.47703 11H18.523C18.6502 11 18.7762 10.9757 18.8944 10.9285C19.4071 10.7234 19.6566 10.1414 19.4514 9.62861L18 6H6L4.54856 9.62861C4.50131 9.74673 4.47703 9.87278 4.47703 10C4.47703 10.5523 4.92475 11 5.47703 11ZM5 14C7.31672 14 8.87868 14.7548 9.68588 16.2643L9.68582 16.2643C9.81602 16.5078 9.72418 16.8107 9.4807 16.9409C9.40818 16.9797 9.3272 17 9.24496 17H6C5.44772 17 5 16.5523 5 16V14ZM19 14V16C19 16.5523 18.5523 17 18 17H14.755C14.6728 17 14.5918 16.9797 14.5193 16.9409C14.2758 16.8107 14.184 16.5078 14.3142 16.2643L14.3141 16.2643C15.1213 14.7548 16.6833 14 19 14Z"
    />
  </AnimatedSvg>
);

export default SvgRoadsterLine;
