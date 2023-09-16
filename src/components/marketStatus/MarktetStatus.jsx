import { Box, Grid } from '@mui/material'
import React from 'react'
import MyResponsiveBoxPlot from './BoxPlotChart'

const MarktetStatus = () => {
  return (
    <Grid container gap={3}>
      <Grid item sm={12}>
        <Box>
          Header Section
        </Box>
      </Grid>
      <Grid item sm={12}>
        <Box sx={{ width: 'auto', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MyResponsiveBoxPlot />
        </Box>
      </Grid>
    </Grid>

  )
}

export default MarktetStatus;
