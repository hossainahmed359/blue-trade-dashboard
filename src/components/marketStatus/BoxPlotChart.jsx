import React from 'react'
import { ResponsiveBoxPlot } from '@nivo/boxplot'
import { useColorMode, useColors } from '../../contexts/theme'
import { DARK_THEME } from '../../configs/meta/colorPalette';
import { marketStatusChartData } from '../../configs/meta/marketStatusChartMeta';

const MyResponsiveBoxPlot = () => {

  const { colors } = useColors();
  const { mode } = useColorMode();

  return (
    <ResponsiveBoxPlot
      data={marketStatusChartData}
      theme={{
        grid: {
          line: {
            stroke: colors.grey[900],
            strokeWidth: 1, 
          },
        },
        axis: {
          domain: {
            line: {
              stroke: 'none',
            },
          },
          ticks: {
            line: {
              stroke: 'none',
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[500],
            },
          },
        },
        tooltip: {
          container: {
            color: colors.textColor,
            background: mode === DARK_THEME ? colors.grey[900] : colors.white[900],
            fontSize: '12px',
            fontWeight: 500,
            borderRadius: '10px',
          },
        },
      }}

      margin={{ top: 30, right: 25, bottom: 40, left: 25 }}
      minValue={0}
      maxValue={10}
      subGroupBy="subgroup"
      quantiles={[0.15, 0.25, 0.5, 0.75, 0.9]}
      padding={0.8}
      innerPadding={10}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      borderColor="none"
      colors={[colors.blueAccent[700], colors.blueAccent[500]]}
      medianWidth={0}
      whiskerWidth={1}
      whiskerEndSize={0.05}
      inactiveOpacity={0.7}
      // motionConfig={{
      //   mass: 1,
      //   tension: 186,
      //   friction: 39,
      //   clamp: false,
      //   precision: 0.01,
      //   velocity: 0
      // }}
    />
  )

}
export default MyResponsiveBoxPlot;