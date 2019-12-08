import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DoctorIcon from './../images/doctorIcon.png';
import PatientIcon from './../images/patientIcon.png';
import DoctorAI from '../images/doctorAI.jpg'

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
    width: 100,
    height: 100,
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
}));

export default function Body(props) {
  const classes = useStyles();

  return (
    <div>
      <br/><br/><br/><br/>
      <Grid container>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={11} md={5}>
          <Typography variant="h6"></Typography>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <br/>
                            <Avatar className={classes.bigAvatar} ></Avatar>
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                            <br/>
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
      </Grid>
    </div>
  );
}