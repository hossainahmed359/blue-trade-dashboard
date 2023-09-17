import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import FilterByTime from './FilterByTime';
import FilterByMarket from './FilterByMarket';

const MarketStatusHeader = () => {

  const theme = useTheme();
  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginRight: '20px',
      gap: '20px',
      ...(matchesDownMd && {
        flexWrap: 'wrap',
      }),
      
    }}>
      <FilterByMarket />
      <FilterByTime />
    </Box>
  )
}

export default MarketStatusHeader
