import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgRestaurant2Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4.22235 3.80753L10.9399 10.525L8.11144 13.3535L4.22235 9.46438C2.66026 7.90229 2.66026 5.36963 4.22235 3.80753ZM14.2683 12.1464L13.4147 12.9999L20.4858 20.071L19.0716 21.4852L12.0005 14.4141L4.92946 21.4852L3.51525 20.071L12.854 10.7322C12.2664 9.27525 12.8738 7.1769 14.4754 5.5753C16.428 3.62268 19.119 3.1478 20.4858 4.51464C21.8526 5.88147 21.3778 8.57242 19.4251 10.525C17.8235 12.1267 15.7252 12.7341 14.2683 12.1464Z" />
  </AnimatedSvg>
);

export default SvgRestaurant2Fill;
