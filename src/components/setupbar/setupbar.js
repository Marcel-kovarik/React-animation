import { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Slider } from '../slider/slider.js'; // example das man das man eine Stufe zurückgeht
import { Button } from '../button/button.js';

export const SetupBox = ({ setElements, setStartAnimation }) => {

  const [elementLen, setElementLen] = useState(5)
  const [elementRange, setElementRange] = useState(-5)

  const changehandler1 = (val) => {
    generateEle(val, elementRange);
    setElementLen(val);
  }

  const changehandler2 = (val) => {
    generateEle(elementLen, val);
    setStartAnimation(false);
    setElementRange(val);
  }

  const generateEle = (len, range) => {
    const arr = Array.from({length: len}, () => Math.floor(Math.random() * (1000-range)+range));
    setStartAnimation(false);
    setElements(arr);
  }

  const startAnimation = () => {
    setStartAnimation(true);
  }

  return (
    <Container>
      <Slider
        val={elementLen}
        min={5}
        max={20}
        setfunction={changehandler1}
        text={'Listenlänge range'}
      />

      <Slider
        val={elementRange}
        min={-99}
        max={999}
        setfunction={changehandler2}
        text={'Min-Max range'}
      />
      <Button
        text="Start Animation"
        Click={startAnimation}
      />
    </Container>
  );
};
