import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const Radiogroup = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Choose Your Gender</FormLabel>
        <RadioGroup defaultValue='female'>
            <FormControlLabel value='female' control={<Radio/>} label='Female'/>
            <FormControlLabel value='male' control={<Radio/>} label='Male'/>
            <FormControlLabel value='other' control={<Radio/>} label='Choose not to say' />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default Radiogroup
