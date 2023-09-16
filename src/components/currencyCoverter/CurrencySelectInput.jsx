import React from 'react'
import { useColors } from '../../contexts/theme';
import { FormControl, InputBase, MenuItem, Select } from '@mui/material';


const CurrencySelectInput = ({ value, handleChange, options, colorMap }) => {

  const { colors } = useColors();

  return (
    <FormControl variant="standard">
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={handleChange}
        sx={{
          color: colorMap?.textColor || colors.greenAccent[500],
          background: colorMap?.bgColor || colors.greenAccent[800],
          borderRadius: '7px',
          padding: '3px 7px',
          fontSize: '10px',
          fontWeight: 600,

          '& .MuiSelect-select': {
            background: 'none !important',
          },

          '& .MuiSvgIcon-root': {
            color: colorMap?.textColor || colors.greenAccent[500],
          },
        }}
        input={<InputBase />}
      >

        {options.map((item) =>
          <MenuItem key={item.value} sx={{ fontSize: '10px' }} value={item.value}>
            {item.value}
          </MenuItem>)}
      </Select>
    </FormControl>
  )
}


export default CurrencySelectInput
