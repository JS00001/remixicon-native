import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgOpenaiLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M11 4C11.6487 4 12.2498 4.20569 12.7411 4.55646C11.4486 5.22914 10.2602 6.07623 8.99996 6.80385L9.99996 8.5359C11.575 7.62654 13.0517 6.48541 14.7608 5.83037C16.1134 5.31198 17.681 5.83976 18.4282 7.13398C18.7526 7.69582 18.8749 8.31917 18.8168 8.92006C17.588 8.13708 16.2602 7.53146 15 6.80385L14 8.5359C15.575 9.44525 17.3016 10.1536 18.7234 11.3061C19.8487 12.2183 20.1754 13.8398 19.4282 15.134C19.1037 15.696 18.6249 16.1137 18.0752 16.3638C18.1385 14.9081 18 13.4553 18 12H16C16 13.8184 16.2498 15.6685 15.9626 17.4758C15.7353 18.9063 14.4944 20 13 20C12.351 20 11.7498 19.7942 11.2584 19.4432C12.5508 18.7701 13.7396 17.9238 15 17.1962L14 15.4641C12.4252 16.3733 10.9478 17.5147 9.23912 18.1696C7.88657 18.688 6.31898 18.1602 5.57176 16.866C5.24729 16.304 5.12493 15.6805 5.18316 15.0794C6.41224 15.8621 7.73964 16.4685 8.99997 17.1962L9.99997 15.4641C8.42517 14.5549 6.69801 13.8462 5.27649 12.6939C4.15128 11.7817 3.82455 10.1602 4.57176 8.86602C4.89624 8.30402 5.37506 7.88628 5.9247 7.63618C5.86145 9.09192 5.99997 10.5447 5.99997 12H7.99997C7.99997 10.1816 7.75013 8.33148 8.03733 6.52422C8.26467 5.09369 9.50554 4 11 4ZM14.7925 3.74171C13.8765 2.67659 12.5176 2 11 2C8.7782 2 6.89621 3.44833 6.24435 5.45243C4.86393 5.71314 3.59851 6.55175 2.83971 7.86602C1.72883 9.79013 2.04213 12.1442 3.4518 13.7107C2.98737 15.0366 3.08092 16.5518 3.83971 17.866C4.95059 19.7901 7.14589 20.6958 9.20742 20.2583C10.1234 21.3234 11.4824 22 13 22C15.2217 22 17.1037 20.5517 17.7556 18.5476C19.136 18.2869 20.4014 17.4482 21.1602 16.134C22.2711 14.2099 21.9578 11.8559 20.5481 10.2893C21.0126 8.96345 20.919 7.44825 20.1602 6.13398C19.0493 4.20987 16.854 3.30419 14.7925 3.74171Z" />
  </AnimatedSvg>
);

export default SvgOpenaiLine;
