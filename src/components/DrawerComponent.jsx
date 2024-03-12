import { Drawer, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material'
import React from 'react'
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const DrawerComponent = ({props}) => {
    console.log("called")
  return (
    <Drawer 
        open={props.open} 
        onClose={() => props.func(false)} 
        anchor='right' 
        PaperProps={{sx: {backgroundColor: '#201E2B', color: 'white'}}}>
        <ListItem>
            <ListItemText primary={props.Date} />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemIcon>
                <NorthEastOutlinedIcon sx={{color:'greenyellow'}}/>
            </ListItemIcon>
            <ListItemText primary={props.green}  />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemIcon>
                <SouthEastOutlinedIcon sx={{color:'tomato'}} />
            </ListItemIcon>
            <ListItemText primary={props.blue} />
        </ListItem>
        <Divider />

    </Drawer>
  )
}

export default DrawerComponent