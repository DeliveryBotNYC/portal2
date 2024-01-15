import { useState } from "react";
import './Sidebar.css';

import logo from './logo.svg';
import { Sidebar, Menu, MenuItem, MenuItemStyles  } from 'react-pro-sidebar';
import { Outlet, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import SyncIcon from '@mui/icons-material/Sync';
import SettingsIcon from '@mui/icons-material/Settings';


const Sidenav = () =>{
    
    return (
        <div style={{display:'flex', height:'100%'}}>
        <Sidebar>
            <div id="logo">
                <img src={logo}></img>
            </div>
            <Menu menuItemStyles={{
      button: ({active }) => {
          return {
            color: active ? '#6E6E6E' : '#9C9494',
            backgroundColor: active ? "transparent" : undefined,
                  "&:hover": {
                     backgroundColor: "transparent !important",
                     color: "#6E6E6E !important",
                   },
          };
      },
    }}
  >
                <MenuItem
                    component={<Link to="/" />}
                    icon={<DashboardIcon />}
                >
                </MenuItem>
                <MenuItem
                    component={<Link to="orders" />}
                    icon={<LocalShippingIcon />}
                >
                </MenuItem>
                <MenuItem
                    component={<Link to="invoices" />}
                    icon={<DescriptionIcon />}
                >
                </MenuItem>
                <MenuItem
                    component={<Link to="automation" />}
                    icon={<SyncIcon />}
                >
                </MenuItem>
                <MenuItem
                    component={<Link to="settings" />}
                    icon={<SettingsIcon />}
                >
                </MenuItem>
            </Menu>
        </Sidebar>
        </div>
    )
}
export default Sidenav;