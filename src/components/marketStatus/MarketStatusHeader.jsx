import React from 'react'
import { Box } from '@mui/material';

import FilterByTime from './FilterByTime';
import FilterByMarket from './FilterByMarket';

const MarketStatusHeader = () => {


  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginRight: '20px', gap: '20px', flexWrap: 'wrap' }}>
      <FilterByMarket />
      <FilterByTime />
    </Box>
  )
}

export default MarketStatusHeader
