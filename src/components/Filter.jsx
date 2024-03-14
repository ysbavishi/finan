import { Box, MenuItem, InputLabel, Input, Select, Typography } from '@mui/material'
import {React, useState} from 'react'

const Filter = ({props}) => {
    const [val , setVal] = useState("High and Sell")
    const handleChange = (e) => {
        if (e.target.value === "High and Sell") {
            props.setFilter({
                firstPrice: "High",
                secondPrice: "Close"
            })
            setVal("High and Sell")
        } else if (e.target.value === "Low and Buy") {
            props.setFilter({
                firstPrice: "Low",
                secondPrice: "Open"
            })
            setVal("Low and Buy")
        }
        console.log("HEREE", props.filter)
        // props.setFilter(e.target.value);
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
    <Box sx={props.currentCategory === 'Ticker' ? {display: 'none'}: {'display' :'block'}}>
        <Select
            id="demo-simple-select"
            value={val}
            label="Age"
            onChange={handleChange}
            sx={styleSelect}
        >
            <MenuItem value={"High and Sell"}>High and Sell</MenuItem>
            <MenuItem value={"Low and Buy"}>Low and Buy</MenuItem>
        </Select>
    </Box>
  )
}

export default Filter