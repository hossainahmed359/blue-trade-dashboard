import React, { useState } from 'react'
import { useColorMode, useColors } from '../../contexts/theme';
import { Box, Grid, InputBase } from '@mui/material';
import { DARK_THEME } from '../../configs/meta/colorPalette';
import { currencyList } from '../../configs/meta/currencyList';
import ConvertBtn from './ConvertBtn';
import CurrencySelectInput from './CurrencySelectInput';

const ConverterForm = () => {
  const { colors } = useColors();
  const { mode } = useColorMode();


  const [currecyData, setCurrectData] = useState({
    inputCurrecyCode: 'USD',
    outputCurrencyCode: 'BTC',
    inputCurrecyValue: '',
    outputCurrencyValue: '',
  })

  // CHANGE INPUT CURRENCY CODE
  const handleSelectInputCurrencyCode = (e) => {
    setCurrectData(prev => ({
      ...prev,
      inputCurrecyCode: e.target.value
    }
    ));
  }

  // CHANGE INPUT CURRENCY VALUE
  const handleChangeInputCurrencyValue = (e) => {
    setCurrectData(prev => ({
      ...prev,
      inputCurrecyValue: e.target.value
    }
    ));
  }

  // CHANGE OUTPUT CURRENCY CODE
  const handleSelectOutputCurrencyCode = (e) => {
    setCurrectData(prev => ({
      ...prev,
      outputCurrencyCode: e.target.value
    }
    ));
  }

  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        {/* INPUT */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '7px',
          padding: '10px 5px',
          width: '100%',
          background: mode === DARK_THEME ? colors.grey[900] : colors.greyLight[500],
        }}>
          <InputBase  value={currecyData.inputCurrecyValue} onChange={handleChangeInputCurrencyValue} sx={{ ml: 2, flex: 1, color: colors.grey[500], fontWeight: 600 }} placeholder='100' />
          <CurrencySelectInput
            value={currecyData.inputCurrecyCode}
            options={currencyList}
            handleChange={handleSelectInputCurrencyCode}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* INPUT */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '7px',
          padding: '10px 5px',
          width: '100%',
          background: mode === DARK_THEME ? colors.grey[900] : colors.greyLight[500],
        }}>
          <InputBase onChange={() => console.log('Typing')} sx={{ ml: 2, flex: 1, color: colors.grey[500], fontWeight: 600 }} placeholder='0.0043' />
          <CurrencySelectInput
            value={currecyData.outputCurrencyCode}
            options={currencyList}
            handleChange={handleSelectOutputCurrencyCode}
            colorMap={{
              textColor: colors.yellowAccent[500],
              bgColor: colors.yellowAccent[800]
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <ConvertBtn />
      </Grid>
    </Grid>
  )
}

export default ConverterForm;

