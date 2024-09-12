import { AddCircleOutline, SubjectOutlined } from '@mui/icons-material'
import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const menuitems=[
    {
        text:"My Notes",
        icon:<SubjectOutlined/>,
        path:'/notes'
    },
    {
        text:"Create Notes",
        icon:<AddCircleOutline/>,
        path:'/'
    },
    {
        text:"Create Notes",
        icon:<AddCircleOutline/>,
        path:'/'
    },
    {
        text:"Create Notes",
        icon:<AddCircleOutline/>,
        path:'/'
    },
    {
        text:"Create Notes",
        icon:<AddCircleOutline/>,
        path:'/'
    },
    {
        text:"Create Notes",
        icon:<AddCircleOutline/>,
        path:'/'
    },
    {
        text:"Create Notes",
        icon:<AddCircleOutline/>,
        path:'/'
    }
]




const Layout = ({children}) => {
    const [openDrawer,setOpenDrawer]=useState(false)
    // const classes=useStyles();
    const location=useLocation();
    const navigate=useNavigate();
  return (
    <div className='root'>
        {/* appbar */}
        <AppBar>
            <Toolbar className='appbar' style={{display:"flex",alignItems:"center"}}>
                <IconButton>
                    <MenuIcon onClick={(()=>{setOpenDrawer(true)})} fontSize='large'/>
                </IconButton>
                <Typography variant='h6' paragraph color='inherit'>Welcome To Layton Notes </Typography>
            </Toolbar>
        </AppBar>
        {/* drawer */}
        <Drawer 
        open={openDrawer}
        // variant='permanent'
        onClose={(()=>{setOpenDrawer(false)})}
        anchor='right'
        classes={{paper:'drawerPaper'}}

         className='drawer'>
            <div>
                <Typography variant='h5'>
                    Engineer Notes
                </Typography>
            </div>
            <List>
                {
                    menuitems.map((item)=>(
                        <ListItem button key={item.text} className={location.pathname === item.path? 'active':null} onClick={(()=>{navigate(item.path)})}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
        <div style={{height:"50px"}}></div>
        <div className='page'>
        {children}
        </div>
    </div>
  )
}

export default Layout
