import { Box, MenuItem, InputLabel, Input, Select, Typography } from '@mui/material'
import { useState } from 'react';

const Attribute = ({props}) => {
    const handleChange = (e) => {
        props.setFilter({
            firstPrice: e.target.value,
            secondPrice: e.target.value
        });
        props.setAttribute(e.target.value)
        console.log(e.target.value)
    }
    const styleSelect = {backgroundColor: '#322F46', color: 'white'}
  return (
    <Box sx={props.currentCategory !== 'Ticker' ? {display: 'none'} : {display: 'block'}}>
        <Select
            id="demo-simple-select"
            value={props.attribute}
            label="Age"
            onChange={handleChange}
            sx={styleSelect}
        >
            <MenuItem value={'Open'}>Open</MenuItem>
            <MenuItem value={'High'}>High</MenuItem>
            <MenuItem value={'Low'}>Low</MenuItem>
            <MenuItem value={'Close'}>Close</MenuItem>
            <MenuItem value={'AClose'}>Adjust Close</MenuItem>
            <MenuItem value={'Volume'}>Volume</MenuItem>
        </Select>
    </Box>
  )
}

export default Attribute