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
  const theme = useTheme();
  //const chats = props.getChats();
  const chats = [
    {name: 'robin', messages: [{sender:'Me', content:'Ciao'}, {sender:'robin', content:'Ciao'},{sender:'robin', content:'che vuoi'},{sender:'me', content:'soldi'}] },
    {name: 'ww', messages: [{sender:'Me', content:'Ciao'}, {sender:'ww', content:'Ciao'},{sender:'ww', content:'che vuoi'}] },
    {name: 'superman', messages: [{sender:'Me', content:'Ciao'}, {sender:'superman', content:'Ciao'},{sender:'superman', content:'che vuoi'}] },
    {name: 'alfred', messages: [{sender:'Me', content:'Ciao'}, {sender:'alfred', content:'Ciao'},{sender:'alfred', content:'che vuoi'}] },
  ];
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

  const [personName, setPersonName] = React.useState([]);
  
  const handleChange = event => {
    setPersonName(event.target.value);
  };

  return (
     
      <div className={classes.root}>
        <br/><br/><br/><br/>
        <Grid container style={{ minHeight: '85vh'}}>
            <Grid item xs={2} sm={2} md={2}></Grid>
            <Grid container xs={8} sm={8} md={8} component={Paper} elevation={6} square>
              <Grid item xs={12} sm={12} md={12}>
                <br/><br/>
                <Typography variant="h6">
                    <FormControl className={classes.formControl}>
                        <Autocomplete
                        id="combo-box-demo"
                        options={names}
                        getOptionLabel={names => names.name}
                        style={{ width: 280 }}
                        renderInput={params => (
                            <TextField {...params} label="Name" variant="outlined" fullWidth />
                        )}
                        />
                    </FormControl>    
                    &nbsp;<Button variant="contained" color="primary" alignItems="center" onClick={() => props.addChat(personName)}>New Chat</Button>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <br/><br/>
                <Typography variant="h6">
                    &nbsp;<ChatIcon/>&nbsp;Chats
                </Typography>
                <div>
                    <List>
                    {
                        chats.map((v) => {
                          return (
                            <ListItem>                    
                            <Button key={v.name} onClick={() => props.getMessages(v.name)}><Avatar><ChatIcon /></Avatar>&nbsp;&nbsp;{v.name}</Button>
                            </ListItem>
                          )
                        })
                    }
                    </List>
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={6}>
                  <br/><br/>
                  <GridList className={classes.gridMessages}>
                      <ul className="message-list">
                          {chats[1].messages.map((message) => {
                              return (
                              <li  key={message.sender} className="message">
                                  <div>{message.sender}</div>
                                  <div>{message.content}</div>
                              </li>
                              )
                          })}
                      </ul>
                  </GridList>
                  <Grid>
                      <form
                        onSubmit={props.handleSubmit}
                        className="send-message-form">
                      <input
                          onChange={props.handleChange}
                          value={props.messageToSend}
                          placeholder="Reply"
                          type="text" />
                      </form>
                      <br/><br/>
                  </Grid>
              </Grid>
            </Grid>
        </Grid>
        <br/><br/>
      </div>
  );
}