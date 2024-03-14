import { Dialog } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import React from 'react'

const BarDialg = ({props}) => {
  
const colors = {
    "apple": "#F2CE72",
    "meta": "#3B48E0",
    "data": "tomato",
    "microsoft": "#02B2AF"
  }
  return (
    <Dialog
        fullWidth={'md'}
        maxWidth={'md'}
        open={props.open}
        onClose={() => props.func(false)}
        PaperProps={{
            style: {
                backgroundColor: '#201E2B',

            },
            sx: {
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
        }
    >
        <BarChart
            xAxis={[{scaleType: 'band', data: [props.ticker1, props.ticker2]}]}
            series={[{ data: [props.tickerPrice1, props.tickerPrice2]}]}
            width={350}
            height={300}
            sx={{
                "& .MuiBarElement-root:first-child": {
                    fill: props.ticker1 === "apple" ? colors.apple : props.ticker1 === "data" ? colors.data : props.ticker1 === "meta" ? colors.meta : colors.microsoft
                },
                "& .MuiBarElement-root:last-child": {
                    fill: props.ticker2 === "apple" ? colors.apple : props.ticker2 === "data" ? colors.data : props.ticker2 === "meta" ? colors.meta : colors.microsoft
                },
                }}
        />
    </Dialog>
  )
}

export default BarDialg