import { FormControl, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

const Switches = () => {
  return (
    <div>
      <FormControl>
        <FormControlLabel control={<Switch/>} label='Dark Mode'/>
        <FormControlLabel control={<Switch/>} label='Dark Mode' required/>
      </FormControl>
    </div>
  )
}

export default Switches
