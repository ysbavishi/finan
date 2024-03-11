import { Button, Box } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const IButton = ({props}) => {
  
  const activeButtonStyle = {
    display: 'flex', 
    gap: '20px',
    backgroundColor: '#241F3C',
    border: '0.5px solid rgba(255,255,255,0.5)',
    borderRadius: '3px',
    textTransform: 'capitalize',
    borderBottom: 'none',
    color: 'white',
    width: '100px'
  }

  const disabledButtonStyle = {
    width: '100px',
    color: 'white'
  }

  const closeTabHandler = (ele) => {
    const currElement = ele;
    const currentElementIndex = props.elementArray.indexOf(currElement);
    if(currentElementIndex === 0) {
      props.setCurrentCategory(props.elementArray[1])
    } else {
      props.setCurrentCategory(props.elementArray[currentElementIndex -1])
    }
    props.setCategories(props.elementArray.filter((elem) => elem != currElement ))
  }

  return (
    <div>
        {props.ele === props.current ? 
                <Button sx={activeButtonStyle}>
                    {props.ele}
                <CloseIcon onClick={(e) => closeTabHandler(props.ele)} fontSize='6px' sx={{color: 'rgba(255,255,255,0.3)'}}/>
                </Button>
        :
            <Button sx={disabledButtonStyle} onClick={() => props.setCurrentCategory(props.ele)}>
                {props.ele}
            </Button>
        
        }
    </div>
  )
}

export default IButton