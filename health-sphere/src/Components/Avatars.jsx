import { SupervisedUserCircle } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const Avatars = () => {
  return (
    <div>
      <Avatar sx={{width:"100px",height:"100px"}} src={<SupervisedUserCircle/>} />
    </div>
  )
}

export default Avatars
