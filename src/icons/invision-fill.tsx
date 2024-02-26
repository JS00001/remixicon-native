import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgInvisionFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM6.98859 14.065C6.92833 14.3319 6.89804 14.6202 6.89804 14.8553C6.89804 15.7819 7.38103 16.397 8.40727 16.397C9.25846 16.397 9.94845 15.8711 10.4453 15.022L10.1419 16.2887H11.8321L12.798 12.2578C13.0395 11.2372 13.5073 10.7074 14.2167 10.7074C14.7751 10.7074 15.1222 11.0687 15.1222 11.6652C15.1222 11.838 15.1071 12.0263 15.0468 12.2304L14.5486 14.0832C14.4732 14.3502 14.4431 14.6173 14.4431 14.8683C14.4431 15.7479 14.941 16.3913 15.9824 16.3913C16.8729 16.3913 17.5821 15.7949 17.9746 14.366L17.3106 14.0993C16.9785 15.0566 16.6917 15.2297 16.4654 15.2297C16.239 15.2297 16.1182 15.0727 16.1182 14.7589C16.1182 14.6176 16.1485 14.4607 16.1937 14.2719L16.6767 12.4668C16.7974 12.043 16.8428 11.6671 16.8428 11.3218C16.8428 9.97143 16.0579 9.26673 15.1071 9.26673C14.2167 9.26673 13.3111 10.1023 12.8585 10.9817L13.1904 9.40324H10.6098L10.2475 10.7936H11.4549L10.7114 13.8906C10.1275 15.2409 9.05502 15.2628 8.92043 15.2314C8.69942 15.1796 8.55815 15.0923 8.55815 14.7935C8.55815 14.6211 8.58825 14.3735 8.66372 14.0749L9.79573 9.40324H6.92833L6.56612 10.7936H7.75826L6.98859 14.065ZM8.62598 8.625C9.2473 8.625 9.75098 8.12132 9.75098 7.5C9.75098 6.87868 9.2473 6.375 8.62598 6.375C8.00466 6.375 7.50098 6.87868 7.50098 7.5C7.50098 8.12132 8.00466 8.625 8.62598 8.625Z" />
  </AnimatedSvg>
);

export default SvgInvisionFill;
