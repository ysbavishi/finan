import { Drawer, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material'
import React from 'react'
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const DrawerComponent = ({props}) => {
    console.log("called")
  return (
    <Drawer open={props.open} onClose={() => props.func(false)} anchor='right'>
        <ListItem>
            <ListItemText primary={props.Date} />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemIcon>
                <NorthEastOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.green}  />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemIcon>
                <SouthEastOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.blue} />
        </ListItem>
        <Divider />

    </Drawer>
  )
}

export default DrawerComponent