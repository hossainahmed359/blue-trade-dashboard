import React from 'react'
import { useColors } from '../../contexts/theme';
import SectionHeader from '../SectionHeader';
import { Box, Grid, Typography } from '@mui/material';
import PieChartWithCenterLabel from './PieChartWithCenterLabel';
import { getAssetsChartData } from '../../configs/meta/assetsChartMeta';
import AssetLabelBadge from './AssetLabelBadge';

const AssetsChart = () => {

  const { colors } = useColors();

  const data = getAssetsChartData(colors);

  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <SectionHeader title={'Assets'} />
      </Grid>
      <Grid item xs={12}>
        <PieChartWithCenterLabel />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {data.map((item, index) =>
            <AssetLabelBadge key={index + 1} item={item} />)}
        </Box>
      </Grid>
    </Grid>
  )
}

export default AssetsChart
