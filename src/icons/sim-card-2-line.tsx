import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSimCard2Line = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6 4V20H18V7.82843L14.1716 4H6ZM5 2H15L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2ZM13 10V18H11V12H8V10H13ZM8 13H10V15H8V13ZM14 13H16V15H14V13ZM14 10H16V12H14V10ZM8 16H10V18H8V16ZM14 16H16V18H14V16Z" />
  </AnimatedSvg>
);

export default SvgSimCard2Line;
