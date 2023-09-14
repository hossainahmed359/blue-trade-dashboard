import React from 'react'

import logoLight from '../../assets/images/logo/logo-light.svg'
import logoDark from '../../assets/images/logo/logo-dark.svg'
import { Box, Typography } from '@mui/material'
import { useColors } from '../../contexts/theme'
import { DARK_THEME } from '../../configs/meta/colorPalette'
import { Link } from 'react-router-dom'

const Logo = ({ sidebarCollapesed }) => {

  const { mode, colors } = useColors();

  return (
    <Link style={{ textDecoration: 'none' }} to={'/'}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={'5px'}
        width={'100%'}
        textAlign={'center'}
        margin={'25px 0'}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img height={30} src={mode === DARK_THEME ? logoDark : logoLight} alt="" />
        </Box>
        {
          !sidebarCollapesed &&
          <Typography textAlign={'center'} variant="h3" color={colors.blueAccent[500]} fontWeight={600} mt={'2px'}>
            Blue<span style={{ color: colors.textColor, fontWeight: 700 }}>Trade.</span>
          </Typography>
        }
      </Box>
    </Link>

  )
}

export default Logo
