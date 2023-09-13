import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export const sideNavMeta = (colors) => {

    return [
        {
            title: 'Dashboard',
            icon: <HomeOutlinedIcon />,
            link: '/',
        },
        {
            title: 'Manage',
            icon: <PeopleOutlinedIcon />,
            link: '/12121',
        },
        {
            title: 'Contacts',
            icon: <ContactsOutlinedIcon />,
            link: '#',
        },
        {
            title: 'Invoices',
            icon: <ReceiptOutlinedIcon />,
            link: '#',
        },
        {
            title: 'Profile',
            icon: <PersonOutlinedIcon />,
            link: '#',
        },
    ]
}


export const sideNavBottomMeta = (colors) => {

    return [
      {
        title: 'Help',
        icon: <HomeOutlinedIcon />,
        link: '/help',
      },
      {
        title: 'Log Out',
        icon: <PeopleOutlinedIcon />,
        link: '/log-out',
      },
    ]
  }