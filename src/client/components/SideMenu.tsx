import ContextIcon from '@mui/icons-material/SwapVert';
import UsageIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import MobXIcon from '@mui/icons-material/Share';
import ZustandIcon from '@mui/icons-material/DataObject';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

export const SideMenu: React.FC = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={RouterLink} to='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={RouterLink} to='/react-state'>
          <ListItemIcon>
            <UsageIcon />
          </ListItemIcon>
          <ListItemText primary='In React' />
        </ListItem>
        <ListItem button component={RouterLink} to='/context'>
          <ListItemIcon>
            <ContextIcon />
          </ListItemIcon>
          <ListItemText primary='Context' />
        </ListItem>
        <ListItem button component={RouterLink} to='/zustand'>
          <ListItemIcon>
            <ZustandIcon />
          </ListItemIcon>
          <ListItemText primary='Zustand' />
        </ListItem>
        <ListItem button component={RouterLink} to='/mobx'>
          <ListItemIcon>
            <MobXIcon />
          </ListItemIcon>
          <ListItemText primary='Mobx' />
        </ListItem>
      </List>
    </Drawer>
  );
};
