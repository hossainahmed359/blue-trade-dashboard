import { Box, Typography } from '@mui/material'
import React from 'react'
import { useColors } from '../../contexts/theme'

const AssetLabelBadge = ({ item }) => {

  const { colors } = useColors()

  return (
    <Box
      sx={{
        background: colors.lightBlueAccent[500],
        padding: '4px 8px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'
      }}>
      <Box sx={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: item.color }}></Box>
      <Typography variant='p' sx={{ color: colors.blueAccent[500], fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>{item.label}</Typography>
    </Box>
  )
}

export default AssetLabelBadge
