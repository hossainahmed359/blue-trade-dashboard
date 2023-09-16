import { Box, Grid } from '@mui/material'
import React from 'react'
import { useColors } from '../contexts/theme'
import StatBox from '../components/statsBox/StatBox';
import { statBoxMeta } from '../configs/meta/statBoxMeta';
import MarketsTable from '../components/table/marktesTable/MarketsTable';
import HistoryTable from '../components/table/historyTable/HistoryTable';
import CurrencyConverter from '../components/currencyCoverter/CurrencyConverter';
import AssetsChart from '../components/assetsChart/AssetsChart';
import MarktetStatus from '../components/marketStatus/MarktetStatus';
import CustomCard from '../components/CustomCard';

const Home = () => {

  const { colors } = useColors();

  return (
    <Box>
      <Grid container spacing={2} sx={{ paddingBottom: '2rem' }}>
        {/* TOP SECTION */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {statBoxMeta(colors).map((item, index) =>
              <Grid key={`statsbox-${index + 1}`} item xs={12} sm={6} lg={3}>
                <CustomCard>
                  <StatBox {...item} />
                </CustomCard>
              </Grid>)}
          </Grid>
        </Grid>


        {/* MIDDLE SECTION */}
        {/* <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <CustomCard >
                <MarktetStatus />
              </CustomCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomCard>
                <MarketsTable />
              </CustomCard>
            </Grid>
          </Grid>
        </Grid> */}

        {/* BOTTOM SECTION */}
        {/* <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CustomCard>
                    <AssetsChart />
                  </CustomCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomCard >
                    <CurrencyConverter />
                  </CustomCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <CustomCard >
                <HistoryTable />
              </CustomCard>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </Box>


  )
}

export default Home
