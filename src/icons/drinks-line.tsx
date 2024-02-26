import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgDrinksLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M14 2H6.20495C5.6091 2 5.09608 2.42057 4.97923 3.00485L4.1802 7H2V9H4.10875L5.48105 20.8933C5.55383 21.524 6.08789 22 6.72281 22H17.2772C17.9121 22 18.4462 21.524 18.5189 20.8933L19.8912 9H22V7H19.8198L19.0208 3.00485C18.9039 2.42057 18.3909 2 17.795 2H16V0H14V2ZM17.7802 7H6.2198L6.8198 4H17.1802L17.7802 7ZM6.12202 9H17.878L16.6088 20H7.39125L6.12202 9Z" />
  </AnimatedSvg>
);

export default SvgDrinksLine;
