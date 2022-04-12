import React from 'react';
import { StyledButton } from "./style_button.js";

export const Button = (props) => {

  return (
    <div>
      <StyledButton
        variant="contained"
        onClick={props.Click} // muss man so umsetzen sonnst geht es nicht
        //disabled={lock}
      >
        {props.text}
      </StyledButton>
    </div>
  );
};
