import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgKickFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 3H21V21H3V3ZM10.5637 5.53613H6.25452V18.4635H10.5637V15.5907H12.0001V17.0271H13.4364V18.4635H17.7455V14.1543H16.3091V12.7179H14.8728V11.2816H16.3091V9.8452H17.7455V5.53613H13.4364V6.97249H12.0001V8.40884H10.5637V5.53613Z" />
  </AnimatedSvg>
);

export default SvgKickFill;
