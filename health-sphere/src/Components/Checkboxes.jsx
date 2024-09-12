
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const Checkboxes = () => {
  return (
    <>
    <Checkbox size='large' disableRipple/>
    <Checkbox size='medium' disableFocusRipple disableRipple/>
    <Checkbox size='small'/>
    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} />
    <br /><br /><br />

    <FormGroup>
        <FormControlLabel control={<Checkbox color='success'/>}  label="Remember Me" />
        <FormControlLabel control={<Checkbox/>} label="Remember Me" />
        <FormControlLabel control={<Checkbox/>} label="Remember Me" />
    </FormGroup>
      
    </>
  )
}

export default Checkboxes
