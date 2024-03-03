import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgNextjsLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M17.6644 17.6493L10.2602 8H8V16H10V10.9462L16.0869 18.8788C14.8907 19.5909 13.4931 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2053 19.1077 16.2022 17.6644 17.6493ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14 12V8H16V12H14Z"
    />
  </AnimatedSvg>
);

export default SvgNextjsLine;
