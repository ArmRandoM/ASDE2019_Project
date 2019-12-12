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
}));

function Form(props) {
    const classes = useStyles();
    if (props.forgot === true) {
        return (
            <ForgotPassword
                signSwitch={props.signSwitch}
                onChange={props.onChange}
                forgotError={props.forgotError}
                copyright={Copyright}
                classes={props.classes}
                submitSendCredentials={props.submitSendCredentials}
            />
        );
    }
    else if (props.signIn === true) {
        return (
            <SignIn
                classes={classes}
                copyright={Copyright}
                onChange={props.onChange}
                submitSignIn={props.submitSignIn}
                signSwitch={props.signSwitch}
                signInError={props.signInError}
                signUpError={props.signUpError}
            />
        );
    }
    else {
        return (
            <SignUp
                classes={classes}
                copyright={Copyright}
                onChange={props.onChange}
                typeSwitch={props.typeSwitch}
                submitSignUp={props.submitSignUp}
                signSwitch={props.signSwitch}
                patient={props.patient}
                nameOrSurnameError={props.nameOrSurnameError}
                passwordErrorSignUp={props.passwordErrorSignUp}
                invalidEmailErrorSignUp={props.invalidEmailErrorSignUp}
                signUpError={props.signUpError}
            />
        );
    }
}


export default function SignInUp(props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Form
                patient={props.patient}
                signIn={props.signIn}
                signSwitch={props.signSwitch}
                typeSwitch={props.typeSwitch}
                onChange={props.onChange}
                submitSignUp={props.submitSignUp}
                submitSignIn={props.submitSignIn}
                nameOrSurnameError={props.nameOrSurnameError}
                passwordErrorSignUp={props.passwordErrorSignUp}
                invalidEmailErrorSignUp={props.invalidEmailErrorSignUp}
                signInError={props.signInError}
                signUpError={props.signUpError}
                classes={classes}
                forgot={props.forgot}
                forgotError={props.forgotError}
                submitSendCredentials={props.submitSendCredentials}
            />
        </Grid >
    );
}
