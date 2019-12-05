import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DoctorIcon from './../images/doctorIcon.png';
import PatientIcon from './../images/patientIcon.png';

export default function SignUp(props) {
    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={props.classes.paper}>
                <Typography>
                    {props.patient ? <img alt=" " src={PatientIcon} /> : <img alt=" " src={DoctorIcon} />}
                </Typography>
                <Typography component="h1" variant="h5">
                    {props.patient ? "Patient - Sign up" : "Doctor - Sign up"}
                </Typography>
                <form className={props.classes.form} noValidate>
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
                            {props.nameOrSurnameError ? <p className={props.classes.error}>The name or the last name is not formed well!</p> : null}
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
                            {props.signUpError ? <p className={props.classes.error}>Already exists an account associated with this e-mail!</p> : null}
                            {props.invalidEmailErrorSignUp ? <p className={props.classes.error}>The e-mail is not formed well!</p> : null}
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
                            {props.passwordErrorSignUp ? <p className={props.classes.error}>Wrong choice! The password must contain 8 characters!</p> : null}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={props.classes.submit}
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
                    <br />
                    <br />
                    <Box mt={5}>
                        {props.copyright}
                    </Box>
                </form>
            </div>
        </Grid >
    );
}