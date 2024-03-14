import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import { useState } from 'react';
import CCategory from '../components/Categories'
import Filter from '../components/Filter';
import TimeSpan from '../components/TimeSpan';
import Events from '../components/Events';
import Line from '../components/Line';
import Holding from '../components/Holding';
import Progress from '../components/In-progress';
import Ticker from '../components/Ticker';
const Landing = () => {
    const navigate = useNavigate();
    const navigateToBar = () => {
        navigate("bar");
    }
  
  const [attribute, setAttribute] = useState('High');
  const ticker = ['data', 'apple', 'meta', 'microsoft']
  const [currentTicker, setCurrentTicker]= useState('data')
  const [currentTicker2, setCurrentTicker2]= useState('apple')
  const [categories, setCategories] = useState(["Line", "Bar", "Scatter", "Pie", "Histogram","Sensex", "Ticker"])
  const [currentCategory, setCurrentCategory] = useState("Line");
  const [filter, setFilter] = useState({
    firstPrice: "High",
    secondPrice: "Close"
  });
  const [period, setPeriod]= useState('annually');

  return (
    <div>
        <Box
          maxWidth={'90vw'}
          margin={'auto'}
          marginTop={2}
        >
        <Header />
        <Divider sx={{backgroundColor: 'white', marginTop: '20px'}}/>
        <CCategory props={{func: setCurrentCategory, setCategories,categories, currentCategory }}/>
        {/* <Button onClick={navigateToBar} variant='contained'>Navigate To Bar</Button> */}
        <div
          style={{
          width: '90vw' ,
          backgroundColor:'#241F3C'
          }}
        >
          <Events props={{filter, period, ticker, currentCategory, currentTicker, attribute, currentTicker2, setCurrentTicker2, setAttribute, setCurrentTicker, func1: setFilter, func2:setPeriod}}/>
        {currentCategory === 'Line' ? 
          <Line props={{period, filter}}/>
        
        :
          currentCategory === 'Sensex' ?
            <Holding/>
          : currentCategory === 'Ticker' ? 
            <Ticker props={{currentTicker, currentTicker2,period, filter, attribute}} />
          :<Progress />
        }
        </div>
        </Box>
    </div>
  )
}

export default Landing