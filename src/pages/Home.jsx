import { Box, Grid } from '@mui/material'
import React from 'react'
import { useColors } from '../contexts/theme'
import StatBox from '../components/statsBox/StatBox';
import { statBoxMeta } from '../configs/meta/statBoxMeta';
import MarketsTable from '../components/table/MarketsTable';

const Home = () => {

  const { colors } = useColors();

  return (
    <Grid container spacing={2}>
      {/* TOP SECTION */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {statBoxMeta(colors).map((item, index) =>
            <Grid key={`statsbox-${index + 1}`} item xs={12} sm={6} lg={3}>
              <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
                <StatBox {...item} />
              </Box>
            </Grid>)}
        </Grid>
      </Grid>


      {/* MIDDLE SECTION */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
                Item
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px' }}>
                <MarketsTable/>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* BOTTOM SECTION */}


    </Grid>


  )
}

export default Home
