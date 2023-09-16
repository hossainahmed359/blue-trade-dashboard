import React from 'react'
import { useColors } from '../../contexts/theme';
import { Box, Typography } from '@mui/material';

import FilterByTime from './FilterByTime';

const MarketStatusHeader = () => {

  const { colors } = useColors();


  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginRight: '20px', gap: '10px' }}>
      <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}>
        Markets
      </Typography>
     <FilterByTime/>
    </Box>
  )
}

export default MarketStatusHeader
