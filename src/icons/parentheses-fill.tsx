import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgParenthesesFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6.92316 21C5.11268 18.6642 4 15.493 4 12C4 8.50702 5.11268 5.33579 6.92316 3H8.93729C7.23506 5.3884 6.2 8.54241 6.2 12C6.2 15.4576 7.23506 18.6116 8.93729 21H6.92316ZM17.0741 21H15.06C16.7622 18.6116 17.7973 15.4576 17.7973 12C17.7973 8.54241 16.7622 5.3884 15.06 3H17.0741C18.8846 5.33579 19.9973 8.50702 19.9973 12C19.9973 15.493 18.8846 18.6642 17.0741 21Z" />
  </AnimatedSvg>
);

export default SvgParenthesesFill;
