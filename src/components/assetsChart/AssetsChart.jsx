import React from 'react'
import { useColors } from '../../contexts/theme';
import SectionHeader from '../SectionHeader';
import { Box, Grid, Typography } from '@mui/material';
import PieChartWithCenterLabel from './PieChartWithCenterLabel';
import { getAssetsChartData } from '../../configs/meta/assetsChartMeta';

const AssetsChart = () => {

  const { colors } = useColors();

  const data = getAssetsChartData(colors);

  return (
    <Grid container gap={2}>
      <Grid item sm={12}>
        <SectionHeader title={'Assets'} />
      </Grid>
      <Grid item sm={12}>
        <PieChartWithCenterLabel />
      </Grid>
      <Grid item sm={12}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
          {data.map((item, index) =>
            <Box key={`chart-data-label-${index + 1}`} sx={{ background: colors.lightBlueAccent[500],  padding: '5px 10px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
              <Box sx={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: item.color }}></Box>
              <Typography variant='p' sx={{ color: colors.blueAccent[500], fontSize: '10px', marginTop: '2px' }}>{item.label}</Typography>
            </Box>)}
        </Box>
      </Grid>
    </Grid>
  )
}

export default AssetsChart
