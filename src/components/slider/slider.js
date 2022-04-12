import { useState } from 'react';
import { StyledSlider, StyledTypography } from './style_slider.js';

export const Slider = ({
  text,
  val,
  min,
  max,
  setfunction, //lock
}) => {
  const [internValue, setInternValue] = useState(val);

  const commit = (event, value) => {
    setfunction(value);
  };
  const handleChange = (event, value) => {
    setInternValue(value);
  };

  return (
    <div>
      <StyledTypography>{text}</StyledTypography>
      <StyledSlider
        min={min}
        max={max}
        disabled={false}
        step={1}
        value={internValue} // value wird in handle Change benutzt
        onChangeCommitted={commit} //
        onChange={handleChange} // muss man so umsetzen sonnst geht es nicht
        valueLabelDisplay="auto"
      />
    </div>
  );
};
