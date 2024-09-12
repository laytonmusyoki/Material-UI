import { AbcOutlined, ContactMail, Feedback, Home, Menu, Phone } from '@mui/icons-material'
import { AppBar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const menuitems=[
  {
    "text":"Home",
    "icon":<Home/>,
    "path":"/"
  },
  {
    "text":"About",
    "icon":<Phone/>,
    "path":"/notes"
  },
  {
    "text":"Contact",
    "icon":<ContactMail/>,
    "path":"/contact"
  },
  {
    "text":"Tables",
    "icon":<ContactMail/>,
    "path":"/table"
  },
  {
    "text":"Testimonials",
    "icon":<Feedback/>,
    "path":"/testimonial"
  }
]

const PractiSe = () => {
  const navigate=useNavigate();
  return (
    <>
    {/* appbar */}
    <AppBar className='appbar'>
      <Toolbar>
        <Typography variant='h4'>Hello</Typography>
        <Typography variant='h4'>Hello</Typography>
        <Typography variant='h4'>Hello</Typography>
      </Toolbar>
    </AppBar>
    {/* drawer */}
      <Drawer anchor='left' variant='permanent' classes={{"paper":"mycustom"}}>
        <List>
          {
            menuitems.map((item)=>(
              <ListItem button key={item.text} onClick={(()=>{navigate(item.path)})}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText><Typography>{item.text}</Typography></ListItemText>
              <hr />
              </ListItem> 
              
            ))
          }
          
        </List>
      </Drawer>
    </>
  )
}

export default PractiSe
