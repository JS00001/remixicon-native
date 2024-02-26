import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgTyphoonLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M17.6544 1.70001L14.8716 4.23315C16.147 4.62331 17.3453 5.28102 18.3612 6.20626C21.8744 9.40606 21.8744 14.594 18.3612 17.7938C15.7696 20.1542 11.7644 21.6563 6.3456 22.3L9.12838 19.7669C7.85304 19.3767 6.65466 18.719 5.6388 17.7938C2.1256 14.594 2.1048 9.42501 5.6388 6.20626C8.2304 3.84585 12.2356 2.34376 17.6544 1.70001ZM12 6.00001C8.13401 6.00001 5 8.6863 5 12C5 15.3137 8.13401 18 12 18C15.866 18 19 15.3137 19 12C19 8.6863 15.866 6.00001 12 6.00001ZM12 8.30001C14.2091 8.30001 16 9.95656 16 12C16 14.0435 14.2091 15.7 12 15.7C9.79086 15.7 8 14.0435 8 12C8 9.95656 9.79086 8.30001 12 8.30001ZM12 10.3C10.8621 10.3 10 11.0975 10 12C10 12.9026 10.8621 13.7 12 13.7C13.1379 13.7 14 12.9026 14 12C14 11.0975 13.1379 10.3 12 10.3Z" />
  </AnimatedSvg>
);

export default SvgTyphoonLine;
