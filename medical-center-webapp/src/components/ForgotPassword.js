import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PrognosisIcon from './../images/passwordIcon.png';

export default function SignIn(props) {

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={props.classes.paper}>
                <img alt="" src={PrognosisIcon} width="8%" />
                <Typography component="h1" variant="h5">
                    Forgot Password?
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Don't worry! This happens sometimes.
                </Typography>
                <form className={props.classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="emailForgot"
                        autoComplete="email"
                        autoFocus
                        onChange={props.onChange}
                    />
                    <Grid item xs={12}>
                        {props.forgotError ? <p className={props.classes.error}>Error! There not exists an account associated with this e-mail.</p> : null}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={props.classes.submit}
                        onClick={props.submitSendCredentials}
                    >
                        Submit
                        </Button>
                    <Grid container>
                        <Grid item>
                            <Link name="forgot" href="/" variant="body2">
                                Remembered it? Sign In.
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
        </Grid>
    );
}
