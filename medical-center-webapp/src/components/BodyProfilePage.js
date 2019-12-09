import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import DoctorAI from '../images/doctorAI.jpg'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Button, GridList} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChatIcon from '@material-ui/icons/Chat';
import Select from '@material-ui/core/Select';
import './../chat.css';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  root: {
      height: '100vh',
  },
  image: {
      backgroundImage: "url(" + DoctorAI + ")",
      backgroundRepeat: 'no-repeat',
      backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '25%'
  },
  error: {
      color: 'red',
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

export default function Body(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  
  
  const reports = [
    {title: 'Report 1', valutation: 'Not Evaluated', description: 'Blablabla1',},
    {title: 'Report 2', valutation: 'Not Evaluated', description: 'Blablabla2',},
    {title: 'Report 3', valutation: 'Good', description: 'Blablabla3',},
    {title: 'Report 4', valutation: 'Contact a Doctor', description: 'Blablabla4',},
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
  
  const handleChangeChat = event => {
    setPersonName(event.target.value);
  };

  const chats = [
    {name: 'robin', messages: [{sender:'Me', content:'Ciao'}, {sender:'robin', content:'Ciao'},{sender:'robin', content:'che vuoi'},{sender:'me', content:'soldi'}] },
    {name: 'ww', messages: [{sender:'Me', content:'Ciao'}, {sender:'ww', content:'Ciao'},{sender:'ww', content:'che vuoi'}] },
    {name: 'superman', messages: [{sender:'Me', content:'Ciao'}, {sender:'superman', content:'Ciao'},{sender:'superman', content:'che vuoi'}] },
    {name: 'alfred', messages: [{sender:'Me', content:'Ciao'}, {sender:'alfred', content:'Ciao'},{sender:'alfred', content:'che vuoi'}] },
  ];

  return (
    <div>
      <br/><br/><br/><br/>
      <Grid container>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={2}>
          <Typography variant="h6"></Typography>
          <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <br/>
                            <Avatar className={classes.bigAvatar} ></Avatar>
                        </Grid>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label={props.name}
                                autoFocus
                                onChange={props.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label={props.surname}
                                name="surname"
                                autoComplete="lname"
                                onChange={props.onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="emailSignUp"
                                label={props.email}
                                name="emailSignUp"
                                autoComplete="email"
                                onChange={props.onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="passwordSignUp"
                                label={props.password}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={props.onChange}
                            />
                            {props.passwordErrorSignUp ? <p className={props.classes.error}>Wrong choice! The password must contain 8 characters!</p> : null}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={props.modifyData}
                        >
                            Modify your data
                        </Button>
                    </Grid>
                </form>
            </div>
          </Grid >
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={2}>
            <Typography variant="h6">
            &nbsp;&nbsp;All your Reports
            </Typography>
            <br/><br/>
            {
            reports.map((v)=>
            <ExpansionPanel expanded={expanded === 'panel'+v.title} onChange={handleChange('panel'+v.title)}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panelbh-content"
                id="panelbh-header"
                >
                <Typography className={classes.heading}>{v.title}</Typography>
                <Typography className={classes.secondaryHeading}>{v.valutation}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {v.description}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            )
            }
            <br/><br/><br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              href="/reportpg"
            >
                Handle Reports
            </Button>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={2}>
            <Grid item xs={12} md={12}>
                <br/><br/><br/><br/>
                <Typography variant="h6">
                    &nbsp;<ChatIcon/>&nbsp;Chats
                </Typography>
                <br/><br/>
                <div>
                    <List>
                    {
                        chats.map((v)=>
                        <ExpansionPanel expanded={expanded === 'panel'+v.name} onChange={handleChange('panel'+v.name)}>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panelbh-content"
                            id="panelbh-header"
                            >
                            <Typography className={classes.heading}>{v.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid item xs={12} md={12}>
                                    <GridList>
                                        <ul className="message-list">
                                            {v.messages.map((message) => {
                                                return (
                                                <li className="message">
                                                    <div>{message.sender}</div>
                                                    <div>{message.content}</div>
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
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        )
                    }
                    </List>
                </div>
                <br/><br/>
                <Typography variant="h6">
                    <FormControl className={classes.formControl}>
                        <Autocomplete
                        id="combo-box-demo"
                        options={names}
                        getOptionLabel={names => names.name}
                        style={{ width: 220 }}
                        renderInput={params => (
                            <TextField {...params} label="Name" variant="outlined" fullWidth />
                        )}
                        />
                    </FormControl>    
                </Typography>
                <br/>
                <Typography>
                    &nbsp;<Button variant="contained" color="primary" onClick={() => props.addChat(personName)}>Add new chat</Button>
                </Typography>
                <br/><br/>
            </Grid>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
    </div>
  );
}



