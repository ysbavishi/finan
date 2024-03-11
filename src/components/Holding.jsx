import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, {useState, useEffect} from 'react'
import getData from '../services/getDataService'
import DrawerForHolding from './DrawerForHolding'

const Holding = ({props}) => {
    const [data,setData] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [params, setParams] = useState()
    const [openDrawer, setOpenDrawer] = useState(false)

    const getDataHandler = async () => {
        let dat;
        await getData(function(dataObj) {
            dat = dataObj;
        });
        setData(dat);
        console.log("THIS", dat)
        setIsDataLoaded(true);
    }

    useEffect(() => {
        if (data.length === 0) {
            setIsDataLoaded(false)
            getDataHandler();
        }
    },[data])
    const dataColumns = [
        {
            field: 'Date',
            headerName: 'Date',
            width: 150
        },
        {
            field: 'Open',
            headerName: 'Open',
            width: 150
        },
        {
            field: 'High',
            headerName: 'High',
            width: 150
        },
        {
            field: 'Low',
            headerName: 'Low',
            width: 150
        },
        {
            field: 'Close',
            headerName: 'Close',
            width: 150
        },
        {
            field: 'AClose',
            headerName: 'Adj Close',
            width: 150
        },
        {
            field: 'Volume',
            headerName: 'Volume',
            width: 150
        }
    ]

    const handleRowClick = (params, event, details) => {
        setParams(params.row)
        setOpenDrawer(true)
    }

        {console.log("DATAAAA", data)}
  return (
    <Box sx={{marginTop: '20px'}}>
        {isDataLoaded ? (
        <div>
        <DataGrid columns={dataColumns} rows={data} getRowId={(row) => row.Open + row.Low}
            sx={{
                color: '#F2CE72',
                width: '80vw',
                margin: 'auto'
            }}
            onRowClick={handleRowClick}
        />
        {openDrawer ? 
            <DrawerForHolding props={{params, open: {openDrawer}, func: setOpenDrawer}} />
            : null
        }
        </div>
        )
        :
        <div>Loading</div>
        }
    </Box>
  )
}

export default Holding