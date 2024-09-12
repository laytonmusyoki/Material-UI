import { FormControl, TextField } from '@mui/material'
import React from 'react'

const Textfields = () => {
  return (
    <div>
      <FormControl fullWidth>
      <TextField label='Enter username' required/>
      </FormControl>
    </div>
  )
}

export default Textfields
