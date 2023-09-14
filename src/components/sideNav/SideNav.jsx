import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../../contexts/theme';
import {
  Sidebar,
  Menu
} from 'react-pro-sidebar';
import Logo from './Logo';
import { sideNavBottomMeta, sideNavMeta } from '../../configs/meta/sideNavMeta';
import SideBarToggler from './SideBarToggler';
import Item from './Item';

const SideNav = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [sidebarCollapesed, setSidebarCollapsed] = useState(false);

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        border: 'none !important',
      }}
    >
      <Sidebar
        rootStyles={{
          border: 'none'
        }}
        backgroundColor={colors.elementBg} collapsed={sidebarCollapesed}>
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

                margin: sidebarCollapesed ? '2vh auto' : '2vh 1vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            },

            icon: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
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

          {/* SIDEBAR COLLAPSE */}
          <SideBarToggler
            colors={colors}
            sidebarCollapesed={sidebarCollapesed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideNav;
