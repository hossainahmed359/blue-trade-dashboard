import React from 'react';
import { useColors } from '../contexts/theme';
import { Box } from '@mui/material';


const CustomCard = ({ sx, children }) => {
  const { colors } = useColors();
  return (
    <Box sx={{
      backgroundColor: colors.elementBg,
      borderRadius: '12px',
      padding: '20px',
      height: '100%',
      ...sx
    }}>
      {children}
    </Box>
  )
}

export default CustomCard
