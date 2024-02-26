import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgAncientGateLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M6.96407 3H17.0358C17.2844 4.72201 18.7601 6 20.5 6 20.8321 6 21.1626 5.95272 21.4814 5.85957 21.2972 7.64386 19.7937 9 18 9H5.99997C4.20619 9 2.70278 7.64386 2.51849 5.85957 2.83733 5.95272 3.16781 6 3.49997 6 5.23982 6 6.71552 4.72201 6.96407 3ZM16.8994 6.65761C16.3391 6.1724 15.902 5.61986 15.5881 5H8.41184C8.09793 5.61986 7.66084 6.1724 7.10057 6.65761 6.9591 6.78013 6.8145 6.89426 6.66678 7H17.3331C17.1855 6.89426 17.0409 6.78013 16.8994 6.65761ZM21.5 11.5005C22.0376 11.5005 22.5422 11.3591 22.9786 11.1114 22.9927 11.2391 23 11.369 23 11.5005 23 12.8967 22.1825 14.1019 21 14.6637V21H14V19C14 17.8954 13.1046 17 12 17 10.8954 17 10 17.8954 10 19V21H3V14.6637C1.81753 14.1019 1 12.8967 1 11.5005 1 11.369 1.00725 11.2391 1.02138 11.1114 1.45778 11.3591 1.96237 11.5005 2.5 11.5005 3.61042 11.5005 4.57994 10.8972 5.09865 10.0005H18.9013C19.4201 10.8972 20.3896 11.5005 21.5 11.5005ZM18.9632 12.8097C18.5756 12.5812 18.2296 12.3115 17.9252 12.0005H6.07479C5.77042 12.3115 5.42443 12.5812 5.03683 12.8097 4.834 12.9293 4.62683 13.0333 4.41532 13.1218L5 13.3996V19H8C8 17.8954 8.39052 16.9526 9.17157 16.1716 9.95262 15.3905 10.8954 15 12 15 13.1046 15 14.0474 15.3905 14.8284 16.1716 15.6095 16.9526 16 17.8954 16 19H19V13.3996L19.5847 13.1218C19.3732 13.0333 19.166 12.9293 18.9632 12.8097Z" />
  </AnimatedSvg>
);

export default SvgAncientGateLine;
