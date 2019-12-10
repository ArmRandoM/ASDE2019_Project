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

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(6),
  },
  gridMessages:{
    minHeight: 800,
    maxHeight: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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
  const chats = [0,1,2,3];
  const messages = ["A1","B1","C1","A2","B2","C2","A3","B3","C3","A4","B4","C4","A5","B5","C5","A6","B6","C6"];
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
     
      <div>
        <br/><br/><br/><br/>
        <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
            <Typography variant="h6">
                <FormControl className={classes.formControl}>
                    <Autocomplete
                    id="combo-box-demo"
                    options={names}
                    getOptionLabel={names => names.name}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Name" variant="outlined" fullWidth />
                    )}
                    />
                </FormControl>    
            </Typography>
            <Typography>
                &nbsp;<Button variant="contained" color="primary" alignItems="center" onClick={() => props.addChat(personName)}>New Chat</Button>
            </Typography>
            <br/><br/>
            <Typography variant="h6">
                &nbsp;<ChatIcon/>&nbsp;Chats
            </Typography>
            <div>
                <List>
                {
                    chats.map((v) =>
                        <ListItem>                    
                        <Button key={chats[v]} onClick={() => props.getMessages(chats[v])}><Avatar><ChatIcon /></Avatar>&nbsp;&nbsp;{chats[v]}</Button>
                        </ListItem>
                    )
                }
                </List>
            </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <GridList className={classes.gridMessages}>
                    <ul className="message-list">
                        {messages.map((message) => {
                            return (
                            <li  key={message} className="message">
                                <div>sender</div>
                                <div>{message}</div>
                            </li>
                            )
                        })}
                    </ul>
                </GridList>
                <br/>
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
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}