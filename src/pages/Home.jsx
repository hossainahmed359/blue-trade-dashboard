import { Box, Grid } from '@mui/material'
import React from 'react'
import { useColors } from '../contexts/theme'
import StatBox from '../components/statsBox/StatBox';
import { statBoxMeta } from '../configs/meta/statBoxMeta';
import MarketsTable from '../components/table/marktesTable/MarketsTable';
import HistoryTable from '../components/table/historyTable/HistoryTable';

const Home = () => {

  const { colors } = useColors();

  return (
    <Box>
      <Grid container spacing={2} sx={{paddingBottom: '2rem'}}>
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
              <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px', height: '100%' }}>
                BOX PLOT CHART
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px', height: '100%' }}>
                <MarketsTable />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* BOTTOM SECTION */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px', height: '100%' }}>
                PIE CHART
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px', height: '100%' }}>
                CONVERTER
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box sx={{ backgroundColor: colors.elementBg, borderRadius: '12px', padding: '20px', height: '100%' }}>
                <HistoryTable />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>


  )
}

export default Home
