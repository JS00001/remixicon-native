import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgArrowTurnForwardLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M17.0004 5.82843V13C17.0004 16.3137 14.3142 19 11.0004 19C7.68673 19 5.00044 16.3137 5.00044 13V4H3.00044V13C3.00044 17.4183 6.58216 21 11.0004 21C15.4187 21 19.0004 17.4183 19.0004 13V5.82843L21.536 8.36396L22.9502 6.94975L18.0004 2L13.0507 6.94975L14.4649 8.36396L17.0004 5.82843Z" />
  </AnimatedSvg>
);

export default SvgArrowTurnForwardLine;
