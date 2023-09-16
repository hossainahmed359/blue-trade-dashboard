import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useColors } from '../../contexts/theme';
import { Box } from '@mui/material';
import { getAssetsChartData } from '../../configs/meta/assetsChartMeta';


export default function PieChartWithCenterLabel() {

  const { colors } = useColors();

  const size = {
    width: 300,
    height: 170,
  };

  const data = getAssetsChartData(colors);

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <PieChart
        series={[{
          data,
          innerRadius: 55,
          cx: 145,
          cy: 80
        }]}
        width={200}
        height={200}
        sx={{ transform: 'rotate(170deg)' }}
        legend={{ hidden: true }}
        {...size}
        >
      </PieChart>
    </Box>
  );
}

