import styled from "styled-components/macro";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

export const StyledSlider = styled(Slider)`
width: 100px;

  :hover {
    color: #2e8b57;
  }
 .MuiSlider-thumb {
    border-radius: 1px;
  }
`;
// Beispiel um CustomSlider umzusetzen. Damit es in React Components angezeigt wird.
StyledSlider.displayName = "CustomSlider";

export const StyledTypography = styled(Typography)`
  color: #e0e0e0;
`;
