import styled, { css } from 'styled-components/macro';

export var Bar = styled.div`
    left: ${({ left }) => left + 'px'};
    height: ${({ height }) => height + '%'};
    width: 50px;
    font-size: 15px;
    font-family:monospace;
    border: 1px solid #282c34;
    box-sizing: border-box;            /*Border + Padding + Content = width */     
    position:absolute;  
    transition: left 0.3s ease, background-color 0.2s ease;

    background-color:${({ color }) =>
      color && color
    };

    bottom:${({ barType }) =>
      barType === 'PosBar' && '50%'
    };

    ${({ barType }) =>
      barType === 'ZeroBar' && css`
        height: 10px;
      `
    };

    top:${({ barType }) =>
      barType === 'NegBar' && '50%'
    };
`;

export var BarIDValue = styled.div`
  position: absolute;
  left: 50%;
  color: ${({ barId, marked, compare, finish }) =>
    (barId === 'PosBar' && 'green') ||
    (barId === 'NegBar' && 'red') ||
    (barId === 'ZeroBar' && 'black')};
  /*Für den Fall wenn es positver Bar ist */
  ${({ barId }) =>
    barId === 'PosBar' &&
    css`
      bottom: -5px;
      transform: translate(-50%, -45%); /* im Balken */
    `}
  /*Für den Fall wenn es negative Bar ist */

${({ barId }) =>
    barId === 'NegBar' &&
    css`
      top: -5px;
      transform: translate(-50%, +30%); /* im Balken */
    `}

${({ barId }) =>
    barId === 'ZeroBar' &&
    css`
      top: 50%;
      margin-top: -9px;
      transform: translate(-50%, 0%); /* im Balken */
    `}
`;
