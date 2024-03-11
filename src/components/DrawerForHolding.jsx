
import { Drawer, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material'
import React from 'react'
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const DrawerForHolding = ({props}) => {
    console.log("called")
  return (
    <Drawer open={props.open} onClose={() => props.func(false)} anchor='right'>
        <ListItem>
            <ListItemText primary={props.params.Date} />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText primary={`Open: ${props.params.Open}`}  />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText primary={`Close: ${props.params.Close}`} />
        </ListItem>
        <ListItem>
            <ListItemText primary={`High: ${props.params.High}`} />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText primary={`Low: ${props.params.Low}`}  />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText primary={`AClose: ${props.params.AClose}`} />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText primary={`Volume: ${props.params.Volume}`} />
        </ListItem>
        <Divider />

    </Drawer>
  )
}

export default DrawerForHolding