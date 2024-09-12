import React from 'react'
import { Delete, Edit, Send } from '@mui/icons-material';
import { Button, ButtonGroup, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Buttons = () => {
  return (
    <>
      <Button variant='contained' endIcon={<Send/>}>Home</Button>
      <Button variant='outlined' endIcon={<Delete/>}>Home</Button>
      <Button variant='text' endIcon={<Edit/>}>Home</Button><br /> <br />

      <ButtonGroup variant='contained'>
      <Button startIcon={<Send/>}>Home</Button>
      <Button  startIcon={<Delete/>}>Home</Button>
      <Button  startIcon={<Edit/>}>Home</Button>
      </ButtonGroup>

      <br /><br />

      <IconButton>
        <MenuIcon/>
      </IconButton>
      
      
    </>
  )
}

export default Buttons
