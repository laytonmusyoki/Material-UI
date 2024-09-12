import { Delete, Send, SupervisedUserCircle } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, Checkbox, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, IconButton, LinearProgress, Radio, RadioGroup, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'



const RegistrationForm = () => {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [id,setId]=useState('');
    const [phone,setPhone]=useState('');
    const [error,setError]=useState(false)


const HandleFormSubmission=((e)=>{
    e.preventDefault();
    

})
  return (
    <div>
        {/* <AppBar>
            <Toolbar position='sticky' gutter>

            </Toolbar>
        </AppBar> */}
        
      <Box onSubmit={HandleFormSubmission} component='form' sx={{'& .MuiTextField-root':{margin:"10px"},'& .MuiButton-root':{margin:"10px"},marginTop:'60px'}}>
        <Avatar src={<SupervisedUserCircle bg='secondary' />}  sx={{width:'100px',height:"100px"}}/>
        <FormControl fullWidth >
            <TextField error={error} required value={fname} onChange={((e)=>{setFname(e.target.value)})} label='Enter Your First Name' variant='outlined'/>
            <TextField value={lname} onChange={((e)=>{setLname(e.target.value)})} label='Enter Your Last Name' variant='outlined'/>
            <TextField value={phone} onChange={((e)=>{setPhone(e.target.value)})} label='Enter Your Phone Number' variant='outlined'/>
            <TextField value={id} onChange={((e)=>{setId(e.target.value)})} label='Enter Your National ID' variant='outlined'/>
            <FormControlLabel control={<Checkbox/>} label='Single'/>
            <FormControlLabel control={<Checkbox/>} label='Working'/>
            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue='Male'>
                <FormControlLabel value='Male' control={<Radio/>} label='Male'/>
                <FormControlLabel value='Female' control={<Radio/>} label='Female'/>
                <FormControlLabel value='Other' control={<Radio/>} label='Other'/>
            </RadioGroup>
            <Button type='submit'  endIcon={<Send/>} color='secondary' sx={{width:"200px",padding:"10px"}} variant='contained'>Register</Button>
        </FormControl>
        <CircularProgress color="inherit" />
        
        
  
      </Box>
    </div>
  )
}

export default RegistrationForm
