
import React from 'react'
import { useColors } from '../../../contexts/theme';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { CategoryBtn } from '../../button/CategoryBtn';
import { marketCategory } from '../../../configs/meta/marketsTableMeta';
import { useTheme } from '@emotion/react';

const MarketsCategorySection = ({ category, setCategory }) => {
  const { colors } = useColors();
  const theme = useTheme();
  const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        marginRight: '20px',
        ...(matchesDownLg && {
          flexWrap: 'wrap',
        }),
        ...(matchesDownMd && {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '15px',
        }),

      }}>
      <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}>
        Markets
      </Typography>
      <Box sx={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: matchesDownMd ? 'flex-start' : 'flex-end', gap: '5px',
        ...(matchesDownLg && {
          flexWrap: 'wrap'
        })
      }}>
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