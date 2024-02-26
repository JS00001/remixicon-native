import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCactusLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M11.998 2C14.2072 2 15.998 3.79086 15.998 6V15H16.998C17.548 15 17.998 14.55 17.998 14V8C17.998 7.44772 18.4458 7 18.998 7C19.5503 7 19.998 7.44772 19.998 8V14C19.998 15.66 18.658 17 16.998 17H15.998V20H17.998V22H5.99805V20H7.99805V14H6.99805C5.34119 14 3.99805 12.6569 3.99805 11V9C3.99805 8.44772 4.44576 8 4.99805 8C5.55033 8 5.99805 8.44772 5.99805 9V11C5.99805 11.55 6.44805 12 6.99805 12H7.99805V6C7.99805 3.79086 9.78891 2 11.998 2ZM11.998 4C10.8935 4 9.99805 4.89543 9.99805 6V20H13.998V6C13.998 4.89543 13.1026 4 11.998 4Z" />
  </AnimatedSvg>
);

export default SvgCactusLine;
