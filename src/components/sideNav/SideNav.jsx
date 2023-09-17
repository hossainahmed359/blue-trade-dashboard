import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useColorMode, useColors } from '../../contexts/theme';
import {
  Sidebar,
  Menu
} from 'react-pro-sidebar';
import Logo from './Logo';
import { sideNavBottomMeta, sideNavMeta } from '../../configs/meta/sideNavMeta';
import SideBarToggler from './SideBarToggler';
import Item from './Item';
import { useTheme } from '@emotion/react';
import { DARK_THEME } from '../../configs/meta/colorPalette';

const SideNav = ({ sidebarCollapesed, setSidebarCollapsed, collapsedWidth = "4.5rem" }) => {

  const { colors } = useColors();
  const theme = useTheme();
  const {mode} = useColorMode();
  const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        ...(matchesDownLg &&  {
          boxShadow: mode === DARK_THEME ? '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)' : 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
        })
      }}
    >
      <Sidebar
        collapsedWidth={collapsedWidth}
        rootStyles={{
          border: 'none',

        }}
        backgroundColor={colors.elementBg}
        collapsed={sidebarCollapesed}
      >
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                borderRadius: '8px',
                backgroundColor: active ? colors.blueAccent[800] : 'none',
                color: active ? colors.blueAccent[500] : colors.textColor,

                [`&:hover`]: {
                  backgroundColor: colors.blueAccent[800],
                  color: colors.blueAccent[500],
                },

                margin: '2vh auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '200px'
              }
            },

            icon: {
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
              // margin: 'auto',
              marginRight: sidebarCollapesed ? 'auto' : '4px'
            }
          }}>

          {/* LOGO */}
          <Logo sidebarCollapesed={sidebarCollapesed} />

          {/* MENU ITEMS */}
          <Box
            margin={'10px'}
            marginTop={'10vh'}
          >
            {sideNavMeta(colors).map((item, index) =>
              <Item
                key={index + 1}
                title={item.title}
                to={item.link}
                icon={item.icon}
              />
            )}
          </Box>

          {/* DIVIDER */}
          {!sidebarCollapesed
            &&
            <Box
              backgroundColor={colors.grey[800]}
              opacity={0.5}
              margin={'5vh auto'}
              width={'140px'}
              height={'1px'}></Box>
          }

          {/* BOTTOM LINKS */}
          <Box margin={'10px'}>
            {sideNavBottomMeta(colors).map((item, index) =>
              <Item
                key={index + 1}
                title={item.title}
                to={item.link}
                icon={item.icon}
              />
            )}
          </Box>

        </Menu>

        {/* SIDEBAR COLLAPSE */}
        <SideBarToggler
          setSidebarCollapsed={setSidebarCollapsed}
        />
      </Sidebar>
    </Box>
  )
}

export default SideNav;
