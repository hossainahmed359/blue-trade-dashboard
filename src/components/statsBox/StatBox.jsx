import React from 'react'
import { useColors } from '../../contexts/theme'
import { Box, Typography } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TinyLineChart from './TinyLineChart';

const StatBox = ({ IconElement, chosenColors, isMainBalance, title, subtitle, balance, stats, graphData }) => {

  const { colors } = useColors();

  console.log(colors)

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '2rem',
          width: '100%',
          position: 'relative'
        }}>
          <Box sx={{ width: '100%' }}>
            {/* TOP HEADER */}
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
              <Box sx={{ backgroundColor: chosenColors.bgColor, padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
                {IconElement(chosenColors.primaryColor)}
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: colors.textColor, fontWeight: '600' }}>
                  {title}
                </Typography>
                {subtitle &&
                  <Typography variant="p" sx={{ color: colors.grey[500], fontWeight: '600' }}>
                    {subtitle}
                  </Typography>}
              </Box>
              {isMainBalance &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', flex: 1, textAlign: 'right' }}>
                  <RemoveRedEyeOutlinedIcon sx={{ color: colors.grey[500], fontSize: '1.3rem', }} />
                </Box>}

            </Box>
          </Box>
          {/* BALANCE */}
          <Typography variant={isMainBalance ? "h3" : "h4"} sx={{ color: colors.textColor, fontWeight: '600' }}> {/* h3 */}
            {balance}
          </Typography>

          {/* CHART */}
          {!isMainBalance &&
            <Box
              sx={{
                position: 'absolute',
                right: '-10% ',
                bottom: '-15%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '150px',
                maxHeight: '100px',
                overflow: 'hidden'

              }}
            >
              <TinyLineChart graphData={graphData} chosenColors={chosenColors} />
            </Box>}
        </Box>
      </Box>

      {/* STATS */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant="p" sx={{ color: colors.grey[500], fontWeight: 500 }}>
          {stats.statsTitle}
        </Typography>
        <Typography variant="p" sx={{ color: `${stats.isBalanceNeg ? colors.redAccent[500] : colors.greenAccent[500]}`, fontWeight: 500 }}>
          {stats.statsPrice}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: colors.greenAccent[500],
            fontSize: '10px',
            fontWeight: 500,
            padding: '3px 10px',
            backgroundColor: colors.greenAccent[800],
            borderRadius: '30px'
          }}>
          {stats.statsPercentage}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
