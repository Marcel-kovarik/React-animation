import styled from 'styled-components/macro';
export const body = styled.body`
  font-family: monospace;
`;

export const App = styled.div``;

export const AppHeader = styled.header`
  min-height: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: white;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  border-top: 2px solid white;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center; /*CENTER TEXT INHALT auf die Kinder Ebenen*/
`;

export const AppFooter = styled.footer`
  background: #282c34;
  min-height: 11vh;
  width: 100%;
  border-top: 2px solid white;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
