import DashboardIcon from '@mui/icons-material/Dashboard';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const sideNavMeta = (colors) => {

    return [
        {
            title: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/',
        },
        {
            title: 'Markets',
            icon: <CandlestickChartIcon />,
            link: '/12121',
        },
        {
            title: 'Transactions',
            icon: <SyncAltIcon />,
            link: '#',
        },
        {
            title: 'Profile',
            icon: <PersonOutlineIcon />,
            link: '#',
        },
        {
            title: 'Setting',
            icon: <SettingsIcon />,
            link: '#',
        },
    ]
}


export const sideNavBottomMeta = (colors) => {

    return [
      {
        title: 'Help',
        icon: <HelpOutlineIcon />,
        link: '/help',
      },
      {
        title: 'Log Out',
        icon: <LogoutIcon />,
        link: '/log-out',
      },
    ]
  }