import React from 'react'
import { useColors } from '../contexts/theme'
import { Box, Typography } from '@mui/material';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const StatBox = () => {

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
              <Box sx={{ backgroundColor: colors.blueAccent[800], padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
                <AccountBalanceWalletIcon sx={{ color: colors.blueAccent[500], fontSize: '1.7rem' }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ color: colors.textColor, fontWeight: '600' }}>
                  Estimated Balance
                </Typography>
                <Typography variant="p" sx={{ color: colors.grey[500], fontWeight: '600' }}>
                  Bitcoin
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', flex: 1, textAlign: 'right' }}>
                <RemoveRedEyeOutlinedIcon sx={{ color: colors.grey[500], fontSize: '1.3rem', }} />
              </Box>
            </Box>
          </Box>
          {/* BALANCE */}
          <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}> {/* h3 */}
            $123,987
          </Typography>

          {/* GRAPH */}
          <Box
            sx={{ position: 'absolute', right: '20px', bottom: 0 }}
          >
            Graph
          </Box>
        </Box>
      </Box>

      {/* BOTTOM SECTION */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant="p" sx={{ color: colors.grey[500], fontWeight: 500 }}>
          Monthly Profit
        </Typography>
        <Typography variant="p" sx={{ color: colors.greenAccent[500], fontWeight: 500 }}>
          +$2560.78
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
          +14.67%
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
