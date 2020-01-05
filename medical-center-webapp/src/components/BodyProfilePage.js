import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            maxWidth: '40%',
        },
    },
    profileName: {
        marginTop: '6px',
        textAlign: 'center',
    },
    profileImage: {
        marginLeft: '2px',
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        borderRadius: "50% !important",
        maxWidth: "100%",
        height: "auto",
    },
    profileDescription: {
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
    foll: {
        marginTop: '14px',
    },
    follist: {
        textAlign: 'center',
    },
    divider: {
        marginTop: '7px',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ButtonBase className={classes.profileImage}>
                            <img className={classes.profileImage} alt="complex" src="http://www.aldogiovanniegiacomo.it/wp-content/uploads/2016/02/medici.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={1} />
                            <Grid item xs={6} className={classes.profileName}>
                                Dr. Piciarnalli
                            </Grid>
                            <Grid item xs={5}>
                                <label size="small" htmlFor="outlined-button-file">
                                    <Button size="small" variant="outlined" component="span">
                                        Edit profile
                                    </Button>
                                </label>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.foll}>
                            <Grid item xs={6} className={classes.follist}>
                                <Button href="#text-buttons"><b>nr.</b> followers</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.follist}>
                                <Button href="#text-buttons"><b>nr.</b> follows</Button>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.profileName}>
                            <Grid item xs={11} className={classes.profileName}>
                                <Typography variant="h6" gutterBottom>
                                    Dr. Ernesto Piciarnalli
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1} />
                            <Grid item xs={11} className={classes.profileDescription}>
                                <Typography variant="body2" gutterBottom>
                                    Surgeon👨‍⚕️
                                    <br />
                                    Cardiologist🩺
                                    <br />
                                    Dermatologist🩹🚑
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider variant="middle" className={classes.divider} />
            </Paper >

        </div >
    );
}