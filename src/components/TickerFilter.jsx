import { Box, MenuItem, InputLabel, Input, Select, Typography } from '@mui/material'
import { useState } from 'react';

const TickerFilter = ({props}) => {
    const handleChange = (e) => {
        props.setCurrentTicker(e.target.value);
        console.log(e.target.value)
    }
    const styleSelect = {backgroundColor: '#322F46', color: 'white'}
  return (
    <Box sx={props.currentCategory !== 'Ticker' ? {display: 'none'} : {display: 'block'}}>
        <Select
            id="demo-simple-select"
            value={props.currentTicker}
            label="Age"
            onChange={handleChange}
            sx={styleSelect}
        >
            <MenuItem value={'data'}>Sensex</MenuItem>
            <MenuItem value={'apple'}>Apple</MenuItem>
            <MenuItem value={'meta'}>Meta</MenuItem>
            <MenuItem value={'microsoft'}>Microsoft</MenuItem>
        </Select>
    </Box>
  )
}

export default TickerFilter