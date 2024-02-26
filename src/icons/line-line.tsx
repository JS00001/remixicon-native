import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgLineLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M22.001 10.6904C22.001 12.477 21.3143 14.0895 19.8776 15.6637C17.7776 18.0779 13.0901 21.027 12.0143 21.4762C10.9401 21.927 11.1026 21.1895 11.1401 20.9387L11.2768 20.0887C11.311 19.827 11.3451 19.4395 11.2451 19.1887C11.1326 18.912 10.6893 18.7654 10.3635 18.697C5.55931 18.0587 2.00098 14.6995 2.00098 10.6904C2.00098 6.21452 6.48848 2.57202 12.001 2.57202C17.5135 2.57202 22.001 6.21452 22.001 10.6904ZM18.4004 14.3155C19.514 13.0952 20.001 11.954 20.001 10.6904C20.001 7.42195 16.4903 4.57202 12.001 4.57202C7.51164 4.57202 4.00098 7.42195 4.00098 10.6904C4.00098 13.5953 6.7293 16.1966 10.6269 16.7144L10.774 16.7396C11.8525 16.9658 12.6581 17.3539 13.1029 18.448C13.1158 18.4802 13.1279 18.5121 13.1395 18.5438C14.9449 17.3676 17.313 15.565 18.4004 14.3155ZM18.1385 10.3145C18.4293 10.3145 18.6635 10.552 18.6635 10.8404C18.6635 11.1279 18.4293 11.3654 18.1385 11.3654H16.676V12.3029H18.1385C18.4293 12.3029 18.6635 12.5387 18.6635 12.8279C18.6635 13.1145 18.4293 13.352 18.1385 13.352H16.1501C15.8626 13.352 15.6276 13.1145 15.6276 12.8279V8.85202C15.6276 8.56452 15.8626 8.32702 16.1526 8.32702H18.141C18.4293 8.32702 18.6635 8.56452 18.6635 8.85202C18.6635 9.14286 18.4293 9.37702 18.1385 9.37702H16.676V10.3145H18.1385ZM14.926 12.8279C14.926 13.0529 14.781 13.2529 14.566 13.3245C14.5126 13.342 14.4551 13.3504 14.4001 13.3504C14.2243 13.3504 14.0743 13.2754 13.9751 13.142L11.9393 10.3779V12.8279C11.9393 13.1145 11.7068 13.352 11.4135 13.352C11.1251 13.352 10.8918 13.1145 10.8918 12.8279V8.85202C10.8918 8.62702 11.036 8.42702 11.2501 8.35619C11.3001 8.33702 11.3635 8.32869 11.4118 8.32869C11.5743 8.32869 11.7243 8.41536 11.8243 8.54036L13.876 11.3154V8.85202C13.876 8.56452 14.111 8.32702 14.401 8.32702C14.6885 8.32702 14.926 8.56452 14.926 8.85202V12.8279ZM10.1418 12.8279C10.1418 13.1145 9.90681 13.352 9.61598 13.352C9.32848 13.352 9.09348 13.1145 9.09348 12.8279V8.85202C9.09348 8.56452 9.32848 8.32702 9.61848 8.32702C9.90681 8.32702 10.1418 8.56452 10.1418 8.85202V12.8279ZM8.08681 13.352H6.09848C5.81098 13.352 5.57348 13.1145 5.57348 12.8279V8.85202C5.57348 8.56452 5.81098 8.32702 6.09848 8.32702C6.38848 8.32702 6.62348 8.56452 6.62348 8.85202V12.3029H8.08681C8.37681 12.3029 8.61098 12.5387 8.61098 12.8279C8.61098 13.1145 8.37598 13.352 8.08681 13.352Z" />
  </AnimatedSvg>
);

export default SvgLineLine;
