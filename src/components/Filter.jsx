import { Box, MenuItem, InputLabel, Input, Select, Typography } from '@mui/material'
import React from 'react'

const Filter = ({props}) => {
    const handleChange = (e) => {
        props.setFilter(e.target.value);
    }

    const styleSelect = {backgroundColor: '#322F46', color: 'white'}
    

    const highAndSellValue = {
        firstPrice: "High",
        secondPrice: "Close"
    }

    const lowAndBuyValue = {
        firstPrice: "Low",
        secondPrice: "Open"
    }

  return (
    <Box>
        <Select
            id="demo-simple-select"
            value={highAndSellValue}
            label="Age"
            onChange={handleChange}
            sx={styleSelect}
        >
            <MenuItem value={highAndSellValue}>High and Sell</MenuItem>
            <MenuItem value={lowAndBuyValue}>Low and Buy</MenuItem>
        </Select>
    </Box>
  )
}

export default Filter