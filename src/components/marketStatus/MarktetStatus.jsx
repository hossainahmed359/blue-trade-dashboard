import { Box, Grid } from '@mui/material'
import React from 'react'
import MyResponsiveBoxPlot from './BoxPlotChart'
import MarketStatusHeader from './MarketStatusHeader'

const MarktetStatus = () => {

  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <MarketStatusHeader />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: '100%',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MyResponsiveBoxPlot />
        </Box>
      </Grid>
    </Grid>

  )
}

export default MarktetStatus;
