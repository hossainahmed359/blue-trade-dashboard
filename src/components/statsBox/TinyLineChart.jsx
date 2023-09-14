import React from 'react'
import { ChartContainer } from '@mui/x-charts';
import { LinePlot } from '@mui/x-charts/LineChart';

// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,2400, 1398, 9800, 3908, 4800, 3800, 4300, 2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   "Page A",
//   "Page B",
//   "Page C",
//   "Page D",
//   "Page E",
//   "Page F",
//   "Page G",
//   "Page H",
//   "Page I",
//   "Page J",
//   "Page K",
//   "Page L",
//   "Page M",
//   "Page N",
//   "Page O",
//   "Page P",
//   "Page Q",
//   "Page R",
//   "Page S",
//   "Page T",
//   "Page U",
// ];
export default function TinyLineChart({graphData, chosenColors}) {

  const {pData, xLabels} = graphData

  return (
    <ChartContainer
      width={200}
      height={200}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          stroke: chosenColors.primaryColor || '#8884d8',
          strokeWidth: 2,
        },
        '.MuiMarkElement-root': {
          stroke: chosenColors.primaryColor || '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },

      }}
      disableAxisListener
    >
      <LinePlot />
      {/* <MarkPlot /> */}
    </ChartContainer>
  );
}