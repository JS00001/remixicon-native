import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBaiduFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M5.92636 12.4965C7.98921 12.0535 7.70815 9.5883 7.64641 9.04949C7.54538 8.21882 6.56836 6.76688 5.24162 6.88173C3.57208 7.03154 3.32815 9.44324 3.32815 9.44324C3.10235 10.558 3.86869 12.9399 5.92636 12.4965ZM8.11701 16.7845C8.05656 16.9577 7.92186 17.4011 8.03843 17.787C8.26855 18.6531 9.02021 18.692 9.02021 18.692H10.1004V16.0514H8.94379C8.42397 16.2064 8.17313 16.611 8.11701 16.7845ZM9.75503 8.36259C10.8944 8.36259 11.8153 7.0514 11.8153 5.43022C11.8153 3.81076 10.8944 2.5 9.75503 2.5C8.61739 2.5 7.69433 3.81076 7.69433 5.43022C7.69433 7.0514 8.61783 8.36259 9.75503 8.36259ZM14.6622 8.55644C16.1849 8.75418 17.1641 7.12911 17.3588 5.89736C17.5574 4.66733 16.5748 3.23871 15.4967 2.99305C14.4165 2.74523 13.0678 4.47564 12.9447 5.60378C12.7979 6.98275 13.142 8.36087 14.6622 8.55644ZM14.6617 12.0039C12.7975 9.09914 10.1492 10.2812 9.26328 11.7587C8.38123 13.2356 7.00657 14.1699 6.81143 14.4173C6.61326 14.6608 3.9654 16.0903 4.55343 18.701C5.14103 21.31 7.20561 21.2604 7.20561 21.2604C7.20561 21.2604 8.72706 21.4102 10.492 21.0152C12.2578 20.6236 13.778 21.1127 13.778 21.1127C13.778 21.1127 17.9024 22.4939 19.031 19.8352C20.1582 17.1757 18.3933 15.7967 18.3933 15.7967C18.3933 15.7967 16.0373 13.9739 14.6617 12.0039ZM8.65496 19.7536C7.49703 19.5226 7.03593 18.7325 6.97765 18.5978C6.92066 18.461 6.59167 17.8259 6.76566 16.7453C7.26605 15.1262 8.69295 15.0101 8.69295 15.0101H10.1203V13.2555L11.3361 13.2741V19.7536H8.65496ZM13.2448 19.735C12.0489 19.4268 11.9932 18.5771 11.9932 18.5771V15.1651L13.2448 15.1448V18.2114C13.3212 18.5387 13.7275 18.5978 13.7275 18.5978H14.9989V15.1651H16.3304V19.735H13.2448ZM20.6983 10.6249C20.6983 10.0356 20.2087 8.26113 18.3933 8.26113C16.5748 8.26113 16.3317 9.93585 16.3317 11.1197C16.3317 12.2495 16.4271 13.8267 18.686 13.7766C20.9457 13.7265 20.6983 11.2173 20.6983 10.6249Z"
    />
  </AnimatedSvg>
);

export default SvgBaiduFill;
