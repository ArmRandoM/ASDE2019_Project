import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import DoctorAI from '../images/doctorAI.jpg';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Button, GridList} from '@material-ui/core';
import './../chat.css';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles(theme => ({
  root: {
      backgroundImage: "url(" + DoctorAI + ")",
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(10, 2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '25%',
      opacity: '1',
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
  expands: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

export default function Body(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  

  const [value, setValue] = React.useState(0);
  
  const reports = [
    {title: 'Report 1', valutation: 'Not Evaluated', description: 'Blablabla1',},
    {title: 'Report 2', valutation: 'Not Evaluated', description: 'Blablabla2',},
    {title: 'Report 3', valutation: 'No Problem', description: 'Blablabla3',},
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
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} sm={12} md={4}>
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square >
                <div className={classes.paper}>
                    <br/>
                    <Grid item xs={12} sm={12} md={12}>
                        <Avatar className={classes.bigAvatar} ></Avatar>
                    </Grid>
                    <br/>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h6">
                            Name: {props.name}<br/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h6">
                            Surname: {props.surname}<br/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h6">
                            E-mail: {props.email}<br/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="h6">
                            Status: <br/>
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid item xs={12} sm={12} md={12}>                            
                        <ExpansionPanel className={classes.expands} expanded={expanded === 'panelModificationData'} onChange={handleChange('panelModificationData')}>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panelbh-content"
                            id="panelbh-header"
                            >
                            <Typography className={classes.heading}>Modify your data</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <form className={classes.form} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                autoComplete="fname"
                                                name="name"
                                                variant="outlined"
                                                fullWidth
                                                id="firstName"
                                                label="Name"
                                                autoFocus
                                                onChange={props.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                id="lastName"
                                                label="Surname"
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
                                                label="E-mail"
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
                                                label="Password"
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
                                            onClick={props.submitmodificatedData}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </form>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <br/>
                    </Grid>
                </div>
            </Grid >
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <br/>
                    <Typography variant="h6">
                        Chats
                    </Typography>
                    {
                        chats.map((v)=>
                            <ExpansionPanel className={classes.expands} expanded={expanded === 'panel'+v.name} onChange={handleChange('panel'+v.name)}>
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
                    <br/>
                    <Typography variant="h6">
                        <FormControl className={classes.formControl}>
                            <Autocomplete
                            id="combo-box-demo"
                            options={names}
                            getOptionLabel={names => names.name}
                            style={{ minWidth: 220 }}
                            renderInput={params => (
                                <TextField {...params} label="Name" variant="outlined" fullWidth />
                            )}
                            />
                        </FormControl> 
                        <Button variant="contained" color="primary" onClick={() => props.addChat(personName)}>Add new chat</Button>   
                    </Typography>
                    <br/>
                </div>
            </Grid>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={12} sm={12} md={5}>
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <br/>
                    <Typography variant="h6">
                        Reports
                    </Typography>
                    <br/>
                    {
                    reports.map((v)=>
                    <ExpansionPanel className={classes.expands} expanded={expanded === 'panel'+v.title} onChange={handleChange('panel'+v.title)}>
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
                    <br/><br/>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    href="/reportpg"
                    >
                        Handle Reports
                    </Button>
                    <br/>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} component={Paper} square>
                <div className={classes.paper}>
                <FormControl className={classes.formControl}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={names}
                        getOptionLabel={names => names.name}
                        style={{ width: 220 }}
                        renderInput={params => (
                            <TextField {...params} label="Search User" variant="outlined" fullWidth />
                        )}
                    />
                </FormControl>
                <br/><Button variant="contained" color="primary" onClick={() => props.addChat(personName)}>Watch Profile</Button><br/>
                </div>
            </Grid>
            <br/><br/><br/><br/>
            <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                <BottomNavigation
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  showLabels
                >
                    <BottomNavigationAction label="Follow" />
                    <BottomNavigationAction label="Follower" />
                    </BottomNavigation>
                <GridList>
                    <List>
                        {
                        names.map((v) => 
                            <ListItem>         
                                {v.name} &emsp;<Button key={v.name}  variant="contained" color="primary" onClick={() => props.unfollow(v.name)}>Unfollow</Button>
                            </ListItem>
                        )                    
                        }
                    </List>
                </GridList>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={1}></Grid>
      </Grid>
      <br/><br/>
    </div>
  );
}



