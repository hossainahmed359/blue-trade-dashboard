import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useColorMode, useColors } from '../../contexts/theme';
import { Button } from '@mui/material';
import { DARK_THEME } from '../../configs/meta/colorPalette';
import SectionHeader from './SectionHeader';
import ConverterForm from './ConverterForm';


const CurrencyConverter = () => {

  const { colors } = useColors();


  return (
    <Grid container gap={2}>
      <Grid item sm={12}>
        <SectionHeader title={'Convert'} />
      </Grid>
      <Grid item sm={12}>
        <ConverterForm />
      </Grid>
      <Grid item sm={12}>
        <Typography
          sx={{
            color: colors.grey[500],
            fontWeight: '600',
            fontSize: '9px',
            lineHeight: '16px'
          }}>
          The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CurrencyConverter;

