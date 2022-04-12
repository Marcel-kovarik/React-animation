import { Bar, BarIDValue } from './style_bar';
import React from 'react';

function calcHeightBar(value, step) {
  const height = (Math.log(value) * step) / 2;
  if (height === 0) {
    return ((Math.log(2) / 2 + 0.2) * step) / 2;
  }
  else {
    return height;
  }
}

export const StyledBar = ({ value, step, left, color }) => {
  let barType;
  let tempvalue;

  if (value === 0) {
    barType = 'ZeroBar';
    tempvalue = 1;
  } else if (value > 0) {
    barType = 'PosBar';
    tempvalue = Math.abs(value);
  } else {
    barType = 'NegBar';
    tempvalue = Math.abs(value);
  }

  const height = calcHeightBar(tempvalue, step);

  return (
    <Bar
      barType={barType}
      height={height}
      left={left}
      id={value}
      color={color}
    >
      <BarIDValue barId={value}>{value} </BarIDValue>
    </Bar>
  );
};
