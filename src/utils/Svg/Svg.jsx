import React from 'react';
import Icons from './icons.svg';

const Svg = ({classname, icon, fill, stroke, size}) => (
   <svg className={classname}
      fill={fill}
      stroke={stroke}
      width={size} height={size}>
       <use href={`${Icons}#${icon}`} />
   </svg>
);

Svg.defaultProps = {
   size: 30,
   color: 'black',
};

export default Svg;