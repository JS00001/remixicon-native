import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgDriveLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M9.09742 6.15015L4.31009 14.4431L6.06471 17.4746L10.8502 9.18597L9.09742 6.15015ZM7.79701 18.4742H17.3651L19.1162 15.44H9.54877L7.79701 18.4742ZM19.1109 13.44L14.3252 5.15002H10.8294L15.6156 13.44H19.1109ZM8.52 3.15002H15.48L22 14.4444L18.52 20.4742H5.49L2 14.4444L8.52 3.15002ZM12.0049 11.186L10.7035 13.44H13.3062L12.0049 11.186Z" />
  </AnimatedSvg>
);

export default SvgDriveLine;
