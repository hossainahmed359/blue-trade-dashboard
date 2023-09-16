import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useColors } from '../contexts/theme';

const SectionHeader = ({title}) => {

  const { colors } = useColors();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
      <Typography variant="h4" sx={{ color: colors.textColor, fontWeight: '600' }}>
        {title}
      </Typography>
      <IconButton
        variant="text"
        sx={{
          fontSize: '9px',
          color: colors.grey[600],
          fontWeight: 600,
          border: `1px solid ${colors.grey[800]}`,
          padding: '1px 5px',
          borderRadius: '7px',
          maxWidth: 'max-content'
        }}>
        <MoreHorizIcon />
      </IconButton>
    </Box>
  )
}

export default SectionHeader
