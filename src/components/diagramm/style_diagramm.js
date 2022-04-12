import styled from 'styled-components/macro';

export const Diagramwrapper = styled.div`
  position: relative;
  box-sizing: border-box; /*Platz zumachen*/
  height: 80vh;
  width: 100%; /* später 50 optional anpassen wegen pseudocode*/
  justify-content: center;
`;

export const DiagramContent = styled.div`
  height: 70%;
  width: 100%;
  display: block;
`;

export const Description = styled.div`
  height: auto;
  flex: 1;
  border-right: 2px solid white;
  border-left: 2px solid white;
  display: flex; /*TO CENTER TEXT IN THE MIDDLE */
  flex-direction: column; /*TO CENTER TEXT IN THE MIDDLE*/
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
