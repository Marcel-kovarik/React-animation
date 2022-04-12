import React, {
  useState,
  useEffect,
} from 'react';
import { StyledBar } from '../bar/StyledBar.js';
import { Diagramwrapper } from './style_diagramm.js';

const BarList = ({ elements, startAnimation }) => {
  const postivlist = elements.map((value) => Math.abs(value));
  const max = postivlist.reduce((prev, current) => {
    return prev > current ? prev : current;
  }, Number.MIN_SAFE_INTEGER);
  const step = 100 / Math.log(max);
  const len = elements.length

  const [newElements, setNewElements] = useState([]);

  useEffect(() => {
    let newArr = [];
    elements.forEach((v, index) => {
      newArr[index] = {
        value: v,
        chValue: v,
        color: 'white'
      }
    });
    setNewElements(newArr);
  }, [elements])

  useEffect(() => {
    sort();
    
    async function sort() {
      if (startAnimation) {
        let swapped = true;
        let finishedCount = 0;
        do {
          swapped = false;
          for (let i = 0; i < len - 1 - finishedCount; i++) {
            colorChange(i, '#ffe861', i + 1, 'white')
            await delay(500)

            colorChange(i, '#ffe861', i + 1, '#ffc200')
            await delay(500)

            colorChange(i, '#ff7c00', i + 1, '#ff7c00')
            await delay(500)

            if (newElements[i].chValue > newElements[i + 1].chValue) {
              swap(i);
              await delay(500)
              swapped = true;
            }

            if (i === len - 2 - finishedCount) {
              colorChange(i, 'white', i + 1, 'green')
              finishedCount++;
              await delay(500)
            } else {
              colorChange(i, 'white', i + 1, 'white')
              await delay(500)
            }

          }
          colorChange(0, 'green', 1, 'green')
        }
        while (swapped)
      }
    }
  }, [startAnimation])

  function colorChange(ind1, color1, ind2, color2) {
    let newArr = [...newElements]
    const chInd1 = newArr.findIndex((el) => el.value === newArr[ind1].chValue);
    newArr[chInd1].color = color1;
    const chInd2 = newArr.findIndex((el) => el.value === newArr[ind2].chValue);
    newArr[chInd2].color = color2;
    setNewElements(newArr);
  }

  function swap(ind) {
    let newArr = [...newElements]
    const a = newArr[ind].chValue; newArr[ind].chValue = newArr[ind + 1].chValue; newArr[ind + 1].chValue = a;
    setNewElements(newArr);
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return newElements.map((item, index) => {
    const ind1 = newElements.findIndex((el) => el.chValue === item.value);
    return <StyledBar key={index.toString()} left={ind1 * 50} value={item.value} color={item.color} step={step} />
  });
};

export default React.memo(BarList);

export const Diagramm = ({ elements, startAnimation }) => {
  return (
    <Diagramwrapper style={{ height: "40vh", width: elements.length * 50 + 'px' }}>
      <BarList elements={elements} startAnimation={startAnimation} />
    </Diagramwrapper>
  );
};
