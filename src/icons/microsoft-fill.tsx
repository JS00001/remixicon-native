import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMicrosoftFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z" />
  </AnimatedSvg>
);

export default SvgMicrosoftFill;
