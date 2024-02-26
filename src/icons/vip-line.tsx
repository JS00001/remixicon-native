import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgVipLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M2.00488 19H22.0049V21H2.00488V19ZM11.0049 8H13.0049V16H11.0049V8ZM7.97001 8L6.10912 13.1127L4.24824 8H2.12334L5.10912 15.9637H7.10912L10.0949 8H7.97001ZM17.0049 14V16H15.0049V8H19.0049C20.6617 8 22.0049 9.34315 22.0049 11C22.0049 12.6569 20.6617 14 19.0049 14H17.0049ZM17.0049 10V12H19.0049C19.5572 12 20.0049 11.5523 20.0049 11C20.0049 10.4477 19.5572 10 19.0049 10H17.0049ZM2.00488 3H22.0049V5H2.00488V3Z" />
  </AnimatedSvg>
);

export default SvgVipLine;
