import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
//import {fade} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
//import {TextField} from '@material-ui/core';
import List from '@material-ui/core/List';
//import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      
        <IconButton onClick={toggleDrawer('left', true)}>
            <ChevronLeftIcon />
        </IconButton>
        <List>
          <ListItem>
            <Button href="/homepg"><HomeIcon/>HomePage</Button>
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem>
            <Button href="/reportpg"><LocalHospitalIcon/>My Report</Button>
          </ListItem>
          <ListItem>
            <Button href="/chatpg"><ChatIcon/>My Messages</Button>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Button href="/profilepg"><AccountCircleIcon/>My Profile</Button>
          </ListItem>
          <ListItem>
            <Button href="/" onClick={() => props.logOut()}><ExitToAppIcon/>LogOut</Button>
          </ListItem>
        </List>

    </div>
  );

  return (
    <div>

      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}