import React from 'react'
import { useColorMode, useColors } from '../../contexts/theme';
import { Button } from '@mui/material';
import { DARK_THEME } from '../../configs/meta/colorPalette';

export const CategoryBtn = ({ onClick = () => { }, active, sx,children }) => {

  const { colors } = useColors();
  const {mode} = useColorMode();

  return (
    <Button
      onClick={onClick}
      className={`${active ? 'active' : ''}`}
      sx={{
        textTransform: 'capitalize',
        color: colors.textColor,
        fontWeight: 600,
        background: mode === DARK_THEME ?  colors.grey[900] : colors.greyLight[500],
        fontSize: '9px',
        borderRadius: '7px',
        transition: 'all 0.2s',
        '&:hover , &.active': {
          color: colors.blueAccent[500],
          background: mode === DARK_THEME ?  colors.grey[900] :  colors.lightBlueAccent[500],
        },
        minWidth: 'max-content',
        minHeight: 'max-content',
        padding: '5px 10px',
        ...sx

      }}>
      {children}
    </Button>
  )
}
