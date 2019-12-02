import React from 'react';
import DoctorAI from '../images/doctorAI.jpg'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DoctorIcon from './../images/doctorIcon.png';
import PatientIcon from './../images/patientIcon.png';
import PrognosisIcon from './../images/prognosisIcon.png';

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
    if (props.signIn === true) {
        return (
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img alt="" src={PrognosisIcon} width="8%" />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="emailSignIn"
                            autoComplete="email"
                            autoFocus
                            onChange={props.onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="passwordSignIn"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={props.onChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link name="signIn" href="#" variant="body2" onClick={props.signSwitch}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        );
    }
    else {
        return (
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography>
                        {props.patient ? <img alt=" " src={PatientIcon} /> : <img alt=" " src={DoctorIcon} />}
                    </Typography>
                    <Typography component="h1" variant="h5">
                        {props.patient ? "Patient - Sign up" : "Doctor - Sign up"}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="surname"
                                    autoComplete="lname"
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {props.nameOrSurnameError ? <p className={classes.error}>The name or the last name is not formed well!</p> : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="emailSignUp"
                                    label="Email Address"
                                    name="emailSignUp"
                                    autoComplete="email"
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {props.emailErrorSignUp ? <p className={classes.error}>Already exists an account associated with this e-mail!</p> : null}
                                {props.invalidEmailErrorSignUp ? <p className={classes.error}>The e-mail is not formed well!</p> : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="passwordSignUp"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={props.onChange}
                                />
                                {props.passwordErrorSignUp ? <p className={classes.error}>Wrong choice! The password must contain 8 characters!</p> : null}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={props.submitSignUp}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link name={props.patient ? "patient" : "doctor"} onClick={props.typeSwitch} href="#" variant="body2">
                                        {props.patient ? "Are you a doctor? Switch to doctor Sign Up!" : "Are you a patient? Switch to patient Sign Up!"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link name="signIn" href="#" variant="body2" onClick={props.signSwitch}>
                                        {"Already have an account? Sign in"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid >
        );
    }
}

export default function SignInSide(props) {
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
                nameOrSurnameError={props.nameOrSurnameError}
                passwordErrorSignUp={props.passwordErrorSignUp}
                invalidEmailErrorSignUp={props.invalidEmailErrorSignUp}
            />
        </Grid >
    );
}