import React from 'react'
import { useColors } from '../../contexts/theme';
import { Button } from '@mui/material';

export const CategoryBtn = ({ onClick = () => { }, active, children }) => {

  const { colors } = useColors();

  return (
    <Button
      onClick={onClick}
      className={`${active ? 'active' : ''}`}
      sx={{
        textTransform: 'capitalize',
        color: colors.textColor,
        fontWeight: 600,
        background: colors.grey[900],
        fontSize: '9px',
        borderRadius: '7px',
        transition: 'all 0.2s',
        '&:hover , &.active': {
          color: colors.blueAccent[500],
          background: colors.grey[900],
        },
        minWidth: 'max-content',
        minHeight: 'max-content',
        padding: '5px 10px'

      }}>
      {children}
    </Button>
  )
}
