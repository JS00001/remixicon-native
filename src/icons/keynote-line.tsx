import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgKeynoteLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4.43967 10H19.5605L18.3605 4H5.63967L4.43967 10ZM13.0001 12V20H17.0001V22H7.00006V20H11.0001V12H2.99187C2.44411 12 2.086 11.5703 2.19547 11.023L3.80465 2.97705C3.91258 2.43744 4.4447 2 5.00094 2H18.9992C19.552 2 20.086 2.42969 20.1955 2.97705L21.8047 11.023C21.9126 11.5626 21.5448 12 21.0083 12H13.0001Z" />
  </AnimatedSvg>
);

export default SvgKeynoteLine;
