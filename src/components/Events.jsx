import React from 'react'
import { Typography, Box } from '@mui/material'
import Filter from './Filter'
import TimeSpan from './TimeSpan'
import TickerFilter from './TickerFilter'
import Attribute from './Attribute'

const Events = ({props}) => {
  return (
    <Box 
        paddingTop={'30px'} 
        paddingLeft={'20px'}
    >
        <Typography  fontSize={'12px'} fontWeight={500} letterSpacing={2} sx={{color:'white'}}>EVENT FILTERS</Typography>
        <Box
          display={'flex'}
          marginTop={'20px'}
          gap = {2}
        >
        <Filter props={{currentCategory: props.currentCategory, filter: props.filter, setFilter: props.func1}} />
        <TimeSpan props={{period: props.period, setPeriod: props.func2}} />
        <TickerFilter props={{currentCategory: props.currentCategory, currentTicker: props.currentTicker, setCurrentTicker: props.setCurrentTicker,ticker: props.ticker}} />
        <TickerFilter props={{currentCategory: props.currentCategory, currentTicker: props.currentTicker2, setCurrentTicker: props.setCurrentTicker2,ticker: props.ticker}} />
        <Attribute props={{currentCategory: props.currentCategory, attribute: props.attribute, setFilter: props.func1, setAttribute: props.setAttribute }} />
        </Box>
    </Box>
  )
}

export default Events