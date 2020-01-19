import React from 'react';
import DoctorAI from '../images/doctorAI.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Medical Center With AI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function SignInUp(props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SignIn
                            classes={classes}
                            copyright={Copyright}
                            onChange={props.onChange}
                            submitSignIn={props.submitSignIn}
                            signInError={props.signInError}
                            signUpError={props.signUpError}
                        />
                    </Route>
                    <Route exact path="/signUp">
                        <SignUp
                            loading={props.loading}
                            classes={classes}
                            copyright={Copyright}
                            onChange={props.onChange}
                            typeSwitch={props.typeSwitch}
                            submitSignUp={props.submitSignUp}
                            patient={props.patient}
                            nameOrSurnameError={props.nameOrSurnameError}
                            passwordErrorSignUp={props.passwordErrorSignUp}
                            invalidEmailErrorSignUp={props.invalidEmailErrorSignUp}
                            signUpError={props.signUpError}
                        />
                    </Route>
                    <Route exact path="/forgotPassword">
                        <ForgotPassword
                            onChange={props.onChange}
                            forgotError={props.forgotError}
                            copyright={Copyright}
                            classes={classes}
                            submitSendCredentials={props.submitSendCredentials}
                        />
                    </Route>
                </Switch>
            </Router>


        </Grid >
    );
}
