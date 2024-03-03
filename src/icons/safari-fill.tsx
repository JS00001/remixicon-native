import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSafariFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M16.7012 6.80069L10.5868 10.5858L6.80166 16.7002L6.69768 16.5962L5.28346 18.0104L5.99057 18.7175L7.40478 17.3033L7.3008 17.1993L13.4152 13.4142L17.2003 7.29982L17.3043 7.40381L18.7185 5.98959L18.0114 5.28249L16.5972 6.6967L16.7012 6.80069ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM11.501 3V5H12.501V3H11.501ZM11.501 19V21H12.501V19H11.501ZM8.09489 3.87643L8.86025 5.72418L9.78413 5.3415L9.01877 3.49374L8.09489 3.87643ZM14.2178 18.6585L14.9832 20.5063L15.9071 20.1236L15.1417 18.2758L14.2178 18.6585ZM14.9832 3.49374L14.2178 5.3415L15.1417 5.72418L15.9071 3.87643L14.9832 3.49374ZM8.86025 18.2758L8.09489 20.1236L9.01877 20.5063L9.78413 18.6585L8.86025 18.2758ZM21.001 11.5H19.001V12.5H21.001V11.5ZM5.00098 11.5H3.00098V12.5H5.00098V11.5ZM20.4593 15.1155L18.6238 14.3212L18.2267 15.2389L20.0622 16.0332L20.4593 15.1155ZM5.77527 8.76109L3.93976 7.96679L3.54261 8.88455L5.37812 9.67884L5.77527 8.76109ZM20.1245 8.09391L18.2768 8.85928L18.6595 9.78316L20.5072 9.01779L20.1245 8.09391ZM5.34248 14.2168L3.49472 14.9822L3.8774 15.9061L5.72516 15.1407L5.34248 14.2168ZM18.7185 18.0104L17.3043 16.5962L16.5972 17.3033L18.0114 18.7175L18.7185 18.0104ZM7.40478 6.6967L5.99057 5.28249L5.28346 5.98959L6.69768 7.40381L7.40478 6.6967ZM11.3132 11.3122L14.9241 9.07686L12.6888 12.6878L11.3132 11.3122Z"
    />
  </AnimatedSvg>
);

export default SvgSafariFill;
