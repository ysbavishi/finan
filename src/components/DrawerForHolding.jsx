
import { Drawer, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material'
import React from 'react'
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const DrawerForHolding = ({props}) => {
    console.log("called")
  return (
    <Drawer open={props.open} onClose={() => props.func(false)} anchor='right' PaperProps={{
        sx: {backgroundColor: '#201E2B', color: 'white'}
    }}>
        <ListItem>
            <ListItemText primary={props.params.Date} />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemText primary={`Open: ${props.params.Open}`}  />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemText primary={`Close: ${props.params.Close}`} />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemText primary={`High: ${props.params.High}`} />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemText primary={`Low: ${props.params.Low}`}  />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemText primary={`AClose: ${props.params.AClose}`} />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>
        <ListItem>
            <ListItemText primary={`Volume: ${props.params.Volume}`} />
        </ListItem>
        <Divider sx={{backgroundColor: '#F2CE72'}}/>

    </Drawer>
  )
}

export default DrawerForHolding