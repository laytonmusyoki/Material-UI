import { Rating } from '@mui/material'
import React from 'react'

const Ratings = () => {
  return (
    <div>
      <Rating size='large' defaultValue={3.5} precision={0.5}/>
    </div>
  )
}

export default Ratings
