import React from 'react'
import { useColors } from '../../contexts/theme';
import SectionHeader from '../SectionHeader';
import { Grid } from '@mui/material';
import PieChartWithCenterLabel from './PieChartWithCenterLabel';

const AssetsChart = () => {

  const { colors } = useColors();

  return (
    <Grid container gap={2}>
      <Grid item sm={12}>
        <SectionHeader title={'Assets'} />
      </Grid>
      <Grid item sm={12}>
       <PieChartWithCenterLabel/>
      </Grid>
      <Grid item sm={12}>
        {/* LIST */}
      </Grid>
    </Grid>
  )
}

export default AssetsChart
