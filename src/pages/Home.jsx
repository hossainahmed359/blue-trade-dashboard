import { Box, Grid } from '@mui/material'
import React from 'react'
import { useColors } from '../contexts/theme'
import StatBox from '../components/StatBox';

const Home = () => {

  const { colors } = useColors();


  return (
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
            <StatBox />
          </Box>
        </Grid>
        <Grid item xs={3} >
          <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
            <StatBox />
          </Box>
        </Grid>
        <Grid item xs={3} >
          <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
            <StatBox />
          </Box>
        </Grid>
        <Grid item xs={3} >
          <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
            <StatBox />
          </Box>
        </Grid>

      </Grid>
    </Box>


  )
}

export default Home
