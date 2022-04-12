import * as React from 'react';
import {useRef} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export function Algorithm() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const algorithm_value = useRef("Dashboard");
  const button_value = useRef();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = (event,val1) => {
    setAnchorEl(null);
    algorithm_value.current = val1;
    console.log(event)
    console.log(val1)
  };

  return (
    <div style={{position:"relative", top:"35px",  left:"20px"}}>
      <Button
        ref={button_value}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{fontSize:"22px", fontWeight:"30", color:"#2196f3"}}
      >
        {algorithm_value.current}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
      <MenuItem onClick={(e)=>handleClose(e,"Bublesort")}>BubleSort</MenuItem>
        <MenuItem onClick={(e)=>handleClose(e,"Algorithm2")}>Algorithm2</MenuItem>
        <MenuItem onClick={(e)=>handleClose(e,"Algorrithm3")}>Algorithm3</MenuItem>
      </Menu>
    </div>
  );
}