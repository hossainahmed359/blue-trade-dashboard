import React from 'react'
import { useColorMode, useColors } from '../../contexts/theme';
import { DARK_THEME } from '../../configs/meta/colorPalette';
import { Button } from '@mui/material';

export const ViewAllBtn = ({ onClick = () => { }, sx }) => {

    const { colors } = useColors();
    const { mode } = useColorMode();
  
    return (
      <Button
        onClick={onClick}
        variant="text"
        sx={{
          fontSize: '9px',
          color: colors.grey[500],
          fontWeight: 600,
          border: `1px solid ${colors.grey[800]}`,
          padding: '4px',
          marginRight: '14px',
          borderRadius: '7px',
          background: mode === DARK_THEME ? colors.grey[900] : 'none',
          textTransform: 'capitalize',
          ...sx
        }}>
        View All
      </Button>
    )
  }
  