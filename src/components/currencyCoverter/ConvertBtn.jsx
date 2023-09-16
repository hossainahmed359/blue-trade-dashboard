import { Button } from '@mui/material'
import React from 'react'
import { useColors } from '../../contexts/theme'

const ConvertBtn = ({ onClick }) => {

  const { colors } = useColors();

  return (
    <Button
      onClick={onClick}
      variant='contained'
      sx={{
        width: '100%',
        padding: '12px',
        textTransform: 'capitalize',
        borderRadius: '7px',
        fontSize: '14px',
        background: colors.blueAccent[500],
        '&:hover': {
          background: colors.blueAccent[400],
        }
      }}>
      Convert Now
    </Button>
  )
}

export default ConvertBtn;
