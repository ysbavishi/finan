import { Divider,Typography, Box } from '@mui/material'
import React from 'react'
import IButton from './IButton'

const CCategory = ({props}) => {
  return (
    <Box sx={{color: 'white'}} marginTop={'30px'}>
        <Typography fontSize={'12px'} fontWeight={500} letterSpacing={2}>LIST OF CATEGORIES</Typography>
        <Box
          display={'flex'}
          marginTop={'20px'}
        >
        {props.categories.map((ele, index) => (
          <IButton key={index} props={{ele, current: props.currentCategory, elementArray: props.categories, setCategories: props.setCategories, setCurrentCategory: props.func}}/>
        ))}
        </Box>
        <Divider sx={{backgroundColor: 'rgba(255,255,255,0.3)'}}/>
    </Box>
  )
}

export default CCategory