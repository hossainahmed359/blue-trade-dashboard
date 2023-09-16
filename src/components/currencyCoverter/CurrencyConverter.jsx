import React from 'react';
import { Grid, Typography } from '@mui/material';
import {  useColors } from '../../contexts/theme';
import SectionHeader from '../SectionHeader';
import ConverterForm from './ConverterForm';


const CurrencyConverter = () => {

  const { colors } = useColors();

  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <SectionHeader title={'Convert'} />
      </Grid>
      <Grid item xs={12}>
        <ConverterForm />
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            color: colors.grey[500],
            fontWeight: 500,
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

