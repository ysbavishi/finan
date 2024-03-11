// Header Component :- Static

import { Box, Container, Typography, Button } from '@mui/material'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { AccountBalanceOutlined, AccountCircleOutlined, ContentCopy, CopyAll, FullscreenOutlined, Share } from '@mui/icons-material';
const Header = () => {
  return (
    <Box
        width={'100%'}
        minWidth={500}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
        color={'white'}
        fontWeight={400}
        gap={80}
    >
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={1}
        >
        <CurrencyExchangeIcon sx={{color: '#F2CE72'}}/>            
        <Typography letterSpacing={1} fontWeight={200}>Finan</Typography>
        </Box>
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={1}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={3}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    gap={1.5}
                >
                   <FullscreenOutlined sx={{color: 'rgba(255,255,255,0.7)'}}/> 
                   <ContentCopy sx={{color: 'rgba(255,255,255,0.7)'}} fontSize='8px'/>
                   <Button variant='contained' sx={{':hover': {marginTop: '-5px', backgroundColor: '#f2ce72', borderColor: 'white', border: '1px solid white'}, color: 'black', textDecoration: 'none', backgroundColor: '#f2ce72', fontSize: '10px'}}>RESET</Button>
                   <Button variant='contained' sx={{':hover': {marginTop: '-5px', backgroundColor: '#f2ce72', borderColor: 'white', border: '1px solid white'},color: 'black', textDecoration: 'none', backgroundColor: '#f2ce72', fontSize: '12px'}}><Share fontSize='7px' sx={{paddingRight: '5px'}}/> SHARE WITH</Button>

                </Box>
                <AccountCircleOutlined sx={{color: 'tomato'}}/>
            </Box>
        </Box>

    </Box>
  )
}

export default Header