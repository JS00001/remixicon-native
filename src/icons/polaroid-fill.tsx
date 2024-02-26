import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgPolaroidFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M20.6586 10C19.8349 7.66962 17.6124 6 15 6C11.6863 6 9 8.68629 9 12C9 15.3137 11.6863 18 15 18C17.6124 18 19.8349 16.3304 20.6586 14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V10H20.6586ZM5 6V9H7V6H5ZM15 16C12.7909 16 11 14.2091 11 12C11 9.79086 12.7909 8 15 8C17.2091 8 19 9.79086 19 12C19 14.2091 17.2091 16 15 16ZM15 14C16.1046 14 17 13.1046 17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14Z" />
  </AnimatedSvg>
);

export default SvgPolaroidFill;
