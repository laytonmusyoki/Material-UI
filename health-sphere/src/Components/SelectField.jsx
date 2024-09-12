import { FormControl, FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectField = () => {
  return (
    <div>
      <FormControl fullWidth>
      <InputLabel >Select County</InputLabel>
        <Select label='Select County'>
        <MenuItem value='Nairobi'>Nairobi</MenuItem>
        <MenuItem value='Nakuru'>Nakuru</MenuItem>
        <MenuItem value='Kisumu'>Kisumu</MenuItem>
        <MenuItem value='Mombasa'>Mombasa</MenuItem>
        </Select>
        
      </FormControl>
    </div>
  )
}

export default SelectField
