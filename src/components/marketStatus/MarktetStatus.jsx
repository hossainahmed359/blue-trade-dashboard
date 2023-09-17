import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import MyResponsiveBoxPlot from './BoxPlotChart'
import MarketStatusHeader from './MarketStatusHeader'

const MarktetStatus = () => {

  const theme = useTheme();
  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <MarketStatusHeader />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: '100%',
            height: matchesDownMd ? '250px' : '300px',
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
