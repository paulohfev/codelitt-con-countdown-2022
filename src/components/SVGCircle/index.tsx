import React from 'react';
import { SVGCircleColor } from 'enums/SVGCirleColors';
import styles from './SVGCircle.module.scss';

type Props = {
  color: SVGCircleColor;
  radius: number;
};

const SVGCircle: React.FC<Props> = ({ color, radius }) => {
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    let start = polarToCartesian(x, y, radius, endAngle);
    let end = polarToCartesian(x, y, radius, startAngle);
    let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    let d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
  }

  return (
    <svg className={styles['countdown-svg']}>
      <path fill="none" stroke={color} stroke-width="3" d={describeArc(50, 50, 48, 0, radius)}/>
    </svg>
  );
};

export default SVGCircle;
