import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgImage2Line = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM5 13.9289V19H8.1005L11.0858 16.0147L7 11.9289L5 13.9289ZM10.9289 19H19V16.9289L16 13.9289L10.9289 19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" />
  </AnimatedSvg>
);

export default SvgImage2Line;
