import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Button, GridList} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import Paper from '@material-ui/core/Paper';
import ChatIcon from '@material-ui/icons/Chat';
import Select from '@material-ui/core/Select';
import './../chat.css';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DoctorAI from '../images/doctorAI.jpg';

const useStyles = makeStyles(theme => ({
  gridMessages:{
    minHeight: 350,
    maxHeight: "100%",
  },
  root: {
      backgroundImage: "url(" + DoctorAI + ")",
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: '1',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  text: {
    alignItems: 'center',
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 350,
  },
  expands: {
      width: 350,
      marginTop: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

export default function Body(props) {

  const classes = useStyles();
  
  const names = [
    {name: 'Oliver Hansen',},
    {name: 'Van Henry',},
    {name: 'April Tucker',},
    {name: 'Ralph Hubbard',},
    {name: 'Omar Alexander',},
    {name: 'Carlos Abbott',},
    {name: 'Miriam Wagner',},
    {name: 'Bradley Wilkerson',},
    {name: 'Virginia Andrews',},
    {name: 'Kelly Snyder',},
  ];
  
  return (
     
      <div className={classes.root}>
        <br/><br/><br/><br/>
        <Grid container style={{ minHeight: '90vh'}}>
            <Grid item xs={2} sm={2} md={2}></Grid>
            <Grid item xs={8} sm={8} md={8} component={Paper} elevation={6} square>
                <br/><br/>
                <div className={classes.paper}>
                    <List className={classes.gridMessages}>
                        {
                            names.map((v) => 
                                <Typography>
                                    {v.name} &emsp;
                                    <Button variant="contained" color="primary" key={v.name} onClick={() => props.goToProfile(v.name)}>WatchProfile</Button>
                                    <br/><br/><br/>
                                </Typography>
                            )
                        }
                    </List>
                </div>
            </Grid>
        </Grid>
      </div>
  );
}