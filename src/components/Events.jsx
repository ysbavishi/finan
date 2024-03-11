import React from 'react'
import { Typography, Box } from '@mui/material'
import Filter from './Filter'
import TimeSpan from './TimeSpan'

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
        <Filter props={{filter: props.filter, setFilter: props.func1}} />
        <TimeSpan props={{period: props.period, setPeriod: props.func2}} />
        </Box>
    </Box>
  )
}

export default Events