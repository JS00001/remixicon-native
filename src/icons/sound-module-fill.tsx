import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSoundModuleFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z" />
  </Svg>
);

export default SvgSoundModuleFill;
