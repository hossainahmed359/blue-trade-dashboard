import { Box, Grid } from '@mui/material'
import React from 'react'
import { useColors } from '../contexts/theme'
import StatBox from '../components/statsBox/StatBox';
import { statBoxMeta } from '../configs/meta/statBoxMeta';

const Home = () => {

  const { colors } = useColors();


  return (
    <Box >
      <Grid container spacing={2}>
        {statBoxMeta(colors).map((item, index) =>
          <Grid key={`statsbox-${index+1}`} item xs={3} >
            <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
              <StatBox {...item}/>
            </Box>
          </Grid>)}
      </Grid>
    </Box>


  )
}

export default Home
