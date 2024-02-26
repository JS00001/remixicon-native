import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMastercardFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12.001 6.65407C13.5816 7.89878 14.5965 9.82972 14.5965 11.9977C14.5965 14.1657 13.5816 16.0966 12.001 17.3413C10.4204 16.0966 9.40547 14.1657 9.40547 11.9977C9.40547 9.82972 10.4204 7.89878 12.001 6.65407ZM11.1316 6.0717C9.46024 7.50229 8.40098 9.62742 8.40098 12C8.40098 14.371 9.45891 16.4949 11.1285 17.9255C10.1444 18.4795 9.00847 18.7955 7.79873 18.7955C4.04443 18.7955 1.00098 15.752 1.00098 11.9977C1.00098 8.24341 4.04443 5.19995 7.79873 5.19995C9.00976 5.19995 10.1468 5.51663 11.1316 6.0717ZM12.8735 17.9255C14.543 16.4949 15.601 14.371 15.601 12C15.601 9.62742 14.5417 7.50229 12.8703 6.0717C13.8551 5.51663 14.9922 5.19995 16.2032 5.19995C19.9575 5.19995 23.001 8.24341 23.001 11.9977C23.001 15.752 19.9575 18.7955 16.2032 18.7955C14.9935 18.7955 13.8576 18.4795 12.8735 17.9255Z" />
  </AnimatedSvg>
);

export default SvgMastercardFill;
