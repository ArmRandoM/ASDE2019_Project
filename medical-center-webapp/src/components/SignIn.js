import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PrognosisIcon from './../images/prognosisIcon.png';

export default function SignIn(props) {

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={props.classes.paper}>
                <img alt="" src={PrognosisIcon} width="8%" />
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={props.classes.form} noValidate>
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
                    <Grid item xs={12}>
                        {props.signInError ? <p className={props.classes.error}>Invalid credentials! e-mail or password uncorrect!</p> : null}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={props.classes.submit}
                        onClick={props.submitSignIn}
                    >
                        Sign In
                        </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link name="forgot" href="/forgotPassword" variant=" body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link name="signIn" href="/signUp" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
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
