import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCharacterRecognitionLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4.99805 15V19H8.99805V21H2.99805V15H4.99805ZM20.998 15V21H14.998V19H18.998V15H20.998ZM12.997 6L17.397 17H15.242L14.041 14H9.95105L8.75205 17H6.59805L10.997 6H12.997ZM11.997 8.88517L10.75 12H13.242L11.997 8.88517ZM8.99805 3V5H4.99805V9H2.99805V3H8.99805ZM20.998 3V9H18.998V5H14.998V3H20.998Z"
    />
  </AnimatedSvg>
);

export default SvgCharacterRecognitionLine;
