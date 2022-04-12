import {
  App,
  AppHeader,
  ContentWrapper,
  AppFooter,
} from './styleApp.js';
import { StylesProvider } from '@material-ui/core';
import { SetupBox } from './components/setupbar/setupbar.js';
import { Algorithm } from './components/setupbar/algorithms.js';
import { Diagramm } from './components/diagramm/diagramm';
import { useState } from 'react';

export const BuildApp = () => {

  const [elements, setElements] = useState([1, 12, 5, 3, -4])
  const [startAnimation, setStartAnimation] = useState(false)

  return (
    <App>
      <Algorithm />
      <StylesProvider injectFirst>
          <AppHeader>Header</AppHeader>
          <ContentWrapper>
            <SetupBox setElements={setElements} setStartAnimation={setStartAnimation} />
            <Diagramm elements={elements} startAnimation={startAnimation}/>
          </ContentWrapper>
          <AppFooter>Footer</AppFooter>
      </StylesProvider>
    </App>
  );
};
