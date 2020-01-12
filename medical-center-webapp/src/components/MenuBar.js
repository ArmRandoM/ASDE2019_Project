import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchDialog from './SearchDialog.js';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };


  return (
    <div className={classes.grow}>
      <SearchDialog
        handleClose={handleClose}
        open={open}
        classes={classes}
        search={props.search}
        onSearchChange={props.onSearchChange}
        followOperation={props.followOperation}
        makeSearch={props.makeSearch}
        searchResult={props.searchResult} 
      />
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            MEDIC-AI
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.sectionDesktop}>
            <IconButton
              title="Profile"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              href="profilepg"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              title="Add Report"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              href="reportpg"
            >
              <PostAddIcon />
            </IconButton>
            <IconButton
              title="Search"
              color="inherit" 
              onClick={handleClickOpen} 
              href="#text-buttons"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              title="Log-Out"
              color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}