import React, { useEffect, useRef, useState } from 'react'
import getData from '../services/getDataService'
import { getArrayData, getArrayOfDate, getClosePrice,  getHighPrice} from '../services/dataCleanService'
import { BarChart, LineChart, LineElement } from '@mui/x-charts'
import { Drawer, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material'
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import DrawerComponent from './DrawerComponent'
import BarDialg from './BarDialg'
const Ticker = ({props}) => {
    const [data,setData] = useState([])
    const [historicalDate, setHistoricalDate] = useState([])
    const [lowAndBuyPrice, setLowAndBuyPrice] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [firstPrice, setFirstPrice] = useState([])
    const [secondPrice, setSecondPrice] = useState([])
    const [openDrawer, setOpenDrawer] = useState(false)
    const [dateToPass, setDateToPass] = useState()
    const [highData, setHighData] = useState(0)
    const [closeData, setCloseData] = useState(0)
    const [screenSize, setScreenSize] = useState({
        width: 300,
        height: 600
    })
    const reqData = {
        ticker: 'AAPL',
        startDate: new Date("2023-01-01").toISOString().split('T')[0],
        endDate: new Date("2023-12-31").toISOString().split('T')[0],
    }

    const getDataHandler = async () => {
        let dat;
        await getData(`${props.currentTicker}.csv`, function(dataObj) {
            dat = dataObj;
        });
        const arrData = getArrayData(dat, props.filter ,props.period); 
        setHistoricalDate(arrData.arrayOfDate)
        setFirstPrice(arrData.firstPrice)
        // setSecondPrice(arrData.secondPrice)
        return dat
    }

    const getTickerHandler = async () => {
        let dat;
        await getData(`${props.currentTicker2}.csv`, function(dataObj) {
            dat = dataObj;
        });
        const arrData = getArrayData(dat, props.filter ,props.period); 
        setSecondPrice(arrData.firstPrice)
    }

    const drawerHandler = (event, d) => {
        const strData = JSON.stringify(d, null, 2);
        const jsonData = JSON.parse(strData);
        setDateToPass(jsonData.axisValue);
        setHighData(jsonData.seriesValues["auto-generated-id-0"])
        setCloseData(jsonData.seriesValues["auto-generated-id-1"])
        setOpenDrawer(true)
    } 

    useEffect(() => {
            const handleResize = () => {
                if (screenSize.width < window.innerWidth || screenSize.height > window.innerHeight ) {
                    setScreenSize({
                        width: screenSize.width + 100,
                        height: screenSize.height + 100
                    })
                } else if (screenSize.width > window.innerWidth || screenSize.height < window.innerHeight) {
                    setScreenSize({
                        width: screenSize.width - 100,
                        height: screenSize.height - 100
                    })
                }
            }
            setIsDataLoaded(false);
            let tempData = getDataHandler();
            setData(tempData);
            getTickerHandler();
            setIsDataLoaded(true);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            }
    },[props.period, screenSize, props.filter, props.currentTicker, props.attribute, props.currentTicker2])

  const colors = {
    "apple": "#F2CE72",
    "meta": "#3B48E0",
    "data": "tomato",
    "microsoft": "#02B2AF"
  }

  return (
    <div>
        {isDataLoaded ? 
        <div>
            <div style={{height: `${screenSize.height}px`, width: `${screenSize.width}` }}>
            <LineChart
            xAxis={[
                {scaleType:'band', 
                data: historicalDate, 
                valueFormatter: (value) => {return `${value.getDate()}/${value.getMonth()}`},
                tickSize: 250
            }]}
            series={[
                {
                    label: props.currentTicker,
                    data: firstPrice,
                    color: props.currentTicker === "apple" ? colors.apple : props.currentTicker === "data" ? colors.data : props.currentTicker === "meta" ? colors.meta : colors.microsoft
                },
                {
                    label: props.currentTicker2, 
                    data: secondPrice,
                    color: props.currentTicker2 === "apple" ? colors.apple : props.currentTicker2 === "data" ? colors.data : props.currentTicker2 === "meta" ? colors.meta : colors.microsoft
                    
                },
            ]}
            sx={{
                    //change left yAxis label styles
                "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                    strokeWidth:"0.4",
                    fill:"white"
                },
                "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                    strokeWidth:"0.4",
                    stroke:"white"
                },
                "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                    strokeWidth:"0.4",
                    stroke:"white"
                },
                "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                    strokeWidth:"0.4",
                    color: 'white',
                    fill:"white"
                },
            }}
            slotProps={
                {
                    legend: {
                        labelStyle: {
                            fontSize: 14,
                            fill: 'white'
                        }
                    }
                }
            }
            onAxisClick={(event, d) => drawerHandler(event,d)}
            /> 
            </div>
            {openDrawer ? 
                <div>
                {/* <DrawerComponent props={{func: setOpenDrawer, Date: dateToPass, green: highData, blue: closeData, open: openDrawer}} /> */}
                <BarDialg props={{func: setOpenDrawer, open: openDrawer, ticker1: props.currentTicker, ticker2:  props.currentTicker2, tickerPrice1: highData, tickerPrice2: closeData}}/>
                </div>
            :
                null
            }
        </div> 
        : <div>Loading</div>}
    </div>
  )
}

export default Ticker
