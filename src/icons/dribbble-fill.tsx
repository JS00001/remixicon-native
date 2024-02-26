import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgDribbbleFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 2C6.47939 2 2 6.47939 2 12C2 17.5206 6.47939 22 12 22C17.5098 22 22 17.5206 22 12C22 6.47939 17.5098 2 12 2ZM18.6052 6.60954C19.7983 8.06291 20.5141 9.91756 20.5358 11.9241C20.2538 11.8699 17.4338 11.295 14.5922 11.6529C14.5271 11.5119 14.4729 11.3601 14.4078 11.2083C14.2343 10.7961 14.0391 10.3731 13.8438 9.97181C16.9891 8.692 18.4208 6.84816 18.6052 6.60954ZM12 3.47506C14.1692 3.47506 16.154 4.28851 17.6616 5.62256C17.5098 5.83948 16.2191 7.56399 13.1822 8.70281C11.7831 6.13232 10.2321 4.0282 9.9935 3.70282C10.6334 3.55097 11.3059 3.47506 12 3.47506ZM8.36662 4.27766C8.59437 4.58134 10.1128 6.69631 11.5336 9.21256C7.5423 10.2755 4.01736 10.2538 3.63774 10.2538C4.19089 7.60738 5.98047 5.40564 8.36662 4.27766ZM3.45336 12.0109C3.45336 11.9241 3.45336 11.8373 3.45336 11.7506C3.82212 11.7614 7.96529 11.8156 12.2277 10.5358C12.4773 11.013 12.705 11.5011 12.9219 11.9891C12.8134 12.0217 12.6941 12.0542 12.5857 12.0868C8.18221 13.5076 5.83948 17.3904 5.64425 17.7158C4.2885 16.2083 3.45336 14.2017 3.45336 12.0109ZM12 20.5466C10.026 20.5466 8.20391 19.8742 6.76139 18.7462C6.91323 18.4317 8.64856 15.0911 13.4642 13.41C13.4859 13.3991 13.4967 13.3991 13.5184 13.3883C14.7223 16.5011 15.2104 19.1149 15.3406 19.8633C14.3102 20.308 13.1822 20.5466 12 20.5466ZM16.7614 19.0824C16.6746 18.5618 16.2191 16.0672 15.1019 12.9978C17.7809 12.5748 20.1236 13.269 20.4165 13.3666C20.0478 15.7419 18.6811 17.7917 16.7614 19.0824Z" />
  </AnimatedSvg>
);

export default SvgDribbbleFill;
