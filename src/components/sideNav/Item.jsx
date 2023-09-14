import { Typography } from '@mui/material';
import React from 'react'
import { MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

const Item = ({ title, to, icon }) => {
  const location = useLocation();
  return (
    <MenuItem
      active={location.pathname === to ? true : false}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography fontWeight={600}>{title}</Typography>
    </MenuItem>
  );
};

export default Item
