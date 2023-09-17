/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Box, IconButton, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import { useColors } from '../../contexts/theme';
import { useTheme } from '@emotion/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profileImg from '../../assets/images/profile.png';

const NavProfile = () => {

  const { colors } = useColors();
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {matchesMd ?
        <Box sx={{
          marginLeft: '10px',
          padding: '7px 10px',
          background: theme.palette.background.default,
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: matchesLg ? '256px' : 'max-content'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <ImageListItem sx={{ height: '40px' }}>
                <img
                  src={profileImg}
                  srcSet={profileImg}
                  alt={'Profile Image'}
                  loading="lazy"
                  style={{ height: '40px' }}
                />
              </ImageListItem>
            </Box>

            <Box sx={{
              display: matchesLg ? 'flex' : 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '2px'
            }}>
              <Typography variant="p" sx={{ color: colors.textColor, fontWeight: 600, fontSize: '13px' }}>
                Andy Warhol
              </Typography>
              <Typography variant="p" sx={{ color: colors.grey[500], fontWeight: 500, fontSize: '11px' }}>
                andywarhol@mail.com
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <MoreVertIcon sx={{ color: colors.grey[700] }} />
          </IconButton>
        </Box> :
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ImageListItem sx={{ height: '40px' }}>
            <img
              src={profileImg}
              srcSet={profileImg}
              alt={'Profile Image'}
              loading="lazy"
              style={{ height: '40px' }}
            />
          </ImageListItem>
        </Box>}
    </>

  )
}

export default NavProfile;



