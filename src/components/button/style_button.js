import styled from "styled-components/macro";
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
  width: 200px;
  background-color: #2196f3;
  color: white;
  :hover {
    background-color: #0069c0;

  }


  margin-bottom: 20px;
`;// margin-bottom: 20px temporäre Lösung später im Container einbinden 

// 
// Beispiel um CustomSlider umzusetzen. Damit es in React Components angezeigt wird. 
StyledButton.displayName = "CustomButtonStartSwap"