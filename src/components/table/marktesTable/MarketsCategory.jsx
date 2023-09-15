
import React from 'react'
import { useColors } from '../../../contexts/theme';
import { Box, Typography } from '@mui/material';
import { CategoryBtn } from '../../button/CategoryBtn';
import { marketCategory } from '../../../configs/meta/marketsTableMeta';

const MarketsCategorySection = ({ category, setCategory }) => {
  const { colors } = useColors();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '20px', gap: '10px' }}>
      <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}>
        Markets
      </Typography>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
        {marketCategory.map((item, index) =>
          <CategoryBtn
            key={`category-${index + 1}`}
            onClick={() => setCategory(item)}
            active={item === category ? true : false}
          >
            {item}
          </CategoryBtn>)}
      </Box>
    </Box>

  )
}

export default MarketsCategorySection;