import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgDropFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M5.63604 6.63288L12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288H5.63604Z" />
  </AnimatedSvg>
);

export default SvgDropFill;
