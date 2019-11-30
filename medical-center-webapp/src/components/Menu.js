import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
}));

export default function SwipeableTemporaryDrawer() {
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
      <Divider />
      <List>
          {['My Reports', 'Messages'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <LocalHospitalIcon /> : <ChatIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['My Profile', 'LogOut'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon /> : <ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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