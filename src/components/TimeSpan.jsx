import { Box, MenuItem, InputLabel, Input, Select, Typography } from '@mui/material'
import React from 'react'

const TimeSpan = ({props}) => {
    const handleChange = (e) => {
        props.setPeriod(e.target.value);
        console.log(e.target.value)
    }
    const styleSelect = {backgroundColor: '#322F46', color: 'white'}
  return (
    <Box>
        <Select
            id="demo-simple-select"
            value={props.period}
            label="Age"
            onChange={handleChange}
            sx={styleSelect}
        >
            <MenuItem value={'annually'}>Annually</MenuItem>
            <MenuItem value={'firstHalf'}>First Half</MenuItem>
            <MenuItem value={'secondHalf'}>Second Half</MenuItem>
        </Select>
    </Box>
  )
}

export default TimeSpan