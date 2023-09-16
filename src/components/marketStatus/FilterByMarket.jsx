import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'
import { useColorMode, useColors } from '../../contexts/theme'
import { DARK_THEME } from '../../configs/meta/colorPalette';
import { marketList } from '../../configs/meta/marketsTableMeta';
import SelectedMarktetLabel from './SelectedMarktetLabel';

const data = marketList;

const FilterByMarket = () => {

  const [showDropdown, setShowDropDown] = useState(false);
  const [activeMarket, setActiveMarket] = useState(data[1]);

  const handleSelect = (clickedData) => {
    const clickedMarket = data.filter((item) => item.market === clickedData.market)[0];
    setActiveMarket(clickedMarket);
    setShowDropDown(false)
  }

  return (
    <Box sx={{ flex: 'auto', position: 'relative', height: '80px', maxWidth: '300px' }}>
      <SelectedMarktetLabel activeMarket={activeMarket} onClick={() => setShowDropDown(prev => !prev)} />
      {/* CUSTOM DROPDOWN */}
      <CustomDropDown show={showDropdown} setShow={setShowDropDown} handleSelect={handleSelect} optionsData={data} />

    </Box>
  )
}

export default FilterByMarket;

const CustomDropDown = ({ show, handleSelect, optionsData = [] }) => {

  const { colors } = useColors();
  const { mode } = useColorMode();
  return (

    <Box
      sx={{
        display: show ? 'slide-in-top block' : 'none',
        position: 'absolute',
        top: '90px',
        bottom: 0,
        zIndex: '100',
        background: mode === DARK_THEME ? colors.grey[800] : colors.white[900],
        padding: '10px 0',
        borderRadius: '5px',
        width: '300px',
        height: 'max-content',
        ...(mode !== DARK_THEME && { boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;' })
      }}>
      {optionsData.map((item, index) =>

        <CustomOption
          key={`custom-option-${index + 1}`}
          data={item}
          handleSelect={handleSelect}
          lastItem={optionsData.indexOf(item) === optionsData.length - 1 ? true : false}
        />)}
    </Box>
  )
}


const CustomOption = ({ data = {}, handleSelect, lastItem = false }) => {

  const { colors } = useColors();

  return (
    <Box
      onClick={() => handleSelect(data)}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        cursor: 'pointer',
        ...(!lastItem && { borderBottom: `1px solid ${colors.grey[900]}`, }),
        '&:hover': {
          backgroundColor: colors.grey[900]
        }
      }}>
      <Typography sx={{ color: colors.textColor, fontWeight: 500, fontSize: '14px' }}>
        {data.market}
      </Typography>
      <Typography sx={{ color: colors.grey[500], fontWeight: 500, fontSize: '12px' }}>
        {data.currency}
      </Typography>
    </Box>

  )
} 