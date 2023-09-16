import { Box } from '@mui/material'
import React, { useState } from 'react'
import { CategoryBtn } from '../button/CategoryBtn'
import { currencyTimeRange } from '../../configs/meta/currencyTimeRange'
import { DARK_THEME } from '../../configs/meta/colorPalette'
import { useColorMode, useColors } from '../../contexts/theme'

const FilterByTime = () => {

  const { colors } = useColors();
  const { mode } = useColorMode();


  const [activeRange, setActiveRange] = useState('1H');

  return (
    <Box sx={{ marginLeft: 'auto', flex: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
      {currencyTimeRange.map((item, index) =>
        <CategoryBtn
          key={`category-${index + 1}`}
          sx={{
            background: mode === DARK_THEME ? colors.lightBlack[500] : colors.greyLight[500],
            '&:hover , &.active': {
              color: colors.blueAccent[500],
              background: mode === DARK_THEME ? colors.grey[900] : colors.lightBlueAccent[500]
            },
          }}
          onClick={() => setActiveRange(item)}
          active={item === activeRange ? true : false}
        >
          {item}
        </CategoryBtn>)}
    </Box>
  )
}

export default FilterByTime
