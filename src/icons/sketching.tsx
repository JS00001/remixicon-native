import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSketching = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10.0357 7.69802C8.38492 9.55932 6.5134 12.2442 4.89465 15.4817C4.64766 15.9757 4.04698 16.1759 3.55301 15.9289C3.05903 15.6819 2.8588 15.0812 3.10579 14.5873C4.79739 11.2041 6.76494 8.37171 8.53943 6.37095C9.4251 5.37234 10.2797 4.56162 11.0449 3.99131C11.4272 3.7063 11.8049 3.46806 12.1677 3.29756C12.5193 3.13234 12.921 3 13.3336 3C13.5496 3 13.7872 3.0535 14.007 3.19476C14.2233 3.33371 14.3629 3.51925 14.4495 3.69083C14.6066 4.00215 14.624 4.33473 14.6201 4.55938C14.6118 5.03651 14.4847 5.6328 14.3216 6.23975C13.9874 7.48318 13.3994 9.13104 12.8149 10.7577L12.7329 10.9858C12.1671 12.5598 11.6101 14.1093 11.248 15.3466C11.1505 15.68 11.0706 15.9792 11.0094 16.2414C11.7035 15.6835 12.5581 14.8454 13.466 13.9534L13.4956 13.9243C14.3772 13.0581 15.3098 12.1418 16.0967 11.5127C16.4872 11.2006 16.9082 10.904 17.3138 10.7322C17.6544 10.5878 18.4343 10.3532 19.0407 10.9596C19.4251 11.344 19.5318 11.8438 19.5594 12.2164C19.5883 12.6064 19.5429 13.0267 19.4725 13.4261C19.3315 14.2258 19.0483 15.159 18.7894 16.0009L18.7478 16.136C18.5165 16.8874 18.3102 17.5577 18.1926 18.0965C18.4529 17.8352 18.7734 17.4216 19.1475 16.811C19.436 16.34 20.0517 16.1921 20.5226 16.4806C20.9935 16.7691 21.1414 17.3848 20.8529 17.8557C20.3099 18.7422 19.748 19.4622 19.1519 19.9092C18.5283 20.377 17.7121 20.6407 16.8863 20.2278C16.2779 19.9235 16.1398 19.3173 16.1091 18.9819C16.0759 18.6192 16.1284 18.2233 16.1979 17.8667C16.3288 17.1944 16.5829 16.3698 16.823 15.5907L16.8777 15.4129C17.1447 14.5451 17.3873 13.734 17.5028 13.0789C17.5117 13.0284 17.5196 12.9802 17.5266 12.9341C17.4697 12.977 17.4094 13.0239 17.3455 13.0749C16.6477 13.6328 15.785 14.4788 14.8677 15.38L14.8381 15.4091C13.9566 16.2752 13.024 17.1915 12.2371 17.8206C11.8466 18.1328 11.4255 18.4293 11.02 18.6012C10.6794 18.7455 9.89947 18.9801 9.29311 18.3738C8.9843 18.065 8.9052 17.6753 8.87972 17.4382C8.8515 17.1755 8.86901 16.8971 8.90269 16.6351C8.9706 16.1069 9.12934 15.4656 9.32855 14.7849C9.70829 13.4872 10.2842 11.8852 10.8411 10.3362L10.9327 10.0814C11.5263 8.42931 12.082 6.8674 12.3901 5.72074C12.4172 5.61968 12.4418 5.52435 12.4638 5.43468C12.3924 5.48361 12.3178 5.53695 12.2401 5.59489C11.6173 6.05907 10.8627 6.76559 10.0357 7.69802Z"
    />
  </AnimatedSvg>
);

export default SvgSketching;
