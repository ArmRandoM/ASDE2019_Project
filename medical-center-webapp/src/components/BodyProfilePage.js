import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import FollowsDialog from './FollowsDialog.js';
import FollowersDialog from './FollowersDialog.js';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import EditProfileManager from './EditProfileManager.js';

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
    users: {
        overflow: 'auto',
        overflowX: 'hidden',
        scrollMarginRight: 0,
        [theme.breakpoints.up('sm')]: {
            maxHeight: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: '90%'
        },
    },
    reports: {
        overflow: 'auto',
        overflowX: 'hidden',
        scrollMarginRight: 0,
        [theme.breakpoints.up('sm')]: {
            maxHeight: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: '90%'
        },
    },
    card: {
      width:'100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
}));


export default function ComplexGrid(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    if(props.edit){
        return(
            <EditProfileManager
                uploadImage={props.uploadImage}
                imageToEdit={props.imageToEdit}
                imageToEditUrl={props.imageToEditUrl}
                nameToEdit={props.nameToEdit}
                surnameToEdit={props.surnameToEdit}
                editPassword={props.editPassword}
                setEdit={props.setEdit}
                editData={props.editData}
                onChange={props.onChange}
            />
        )
    }
    else{
        return (
            <div className={classes.root}>
                <FollowsDialog
                    handleClose={handleClose}
                    open={open}
                    classes={classes}
                    follows={props.follows}
                    followOperationOnFollows={props.followOperationOnFollows}
                />
                <FollowersDialog
                    handleClose2={handleClose2}
                    open2={open2}
                    classes={classes}
                    followers={props.followers}
                    followOperationOnFollowers={props.followOperationOnFollowers}
                />
                <Paper className={classes.paper} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img className={classes.profileImage} alt="" src={"data:image/jpg;base64,"+props.loggedUser.image} />
                        </Grid>
                        <Grid item xs={8}>
                            <Grid className={classes.paper}>
                                <Button size="small" variant="outlined" component="span" onClick={props.setEdit}>
                                        Edit
                                </Button>
                            </Grid>
                            <Grid container className={classes.foll}>
                                <Grid item xs={12} sm={6} md={6} className={classes.follist}>
                                    <Button onClick={handleClickOpen} href="#text-buttons"><b>{props.follows.length}</b> follows</Button>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}  className={classes.follist}>
                                    <Button onClick={handleClickOpen2} href="#text-buttons"><b>{props.followers.length}</b> followers</Button>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.profileName}>
                                <Grid item xs={11} className={classes.profileName}>
                                    <Typography variant="h6" gutterBottom>
                                        {
                                            props.loggedUser.doctor
                                            ? <span>Dr.</span> :null
                                        } 
                                        {props.loggedUser.name} {props.loggedUser.surname}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" className={classes.divider} />
                </Paper >
                <Grid container spacing={2}>
                    <Grid item xs={1} sm={1} md={1}></Grid>
                    <Grid item xs={10} sm={10} md={2}>
                        {
                            props.isDoctor ?
                            <Typography variant="h6" className={classes.paper}>Patients</Typography>
                            : null
                        }
                        <div className={classes.users}>
                            {
                                props.isDoctor ?
                                props.patients.map((v,i) =>
                                    <ButtonBase key={i} onClick={() => props.selectPatient(v)} style={{width:'100%'}}>
                                        <Grid container>
                                            <Grid item xs={3} className={classes.avatar}>
                                                <Avatar alt="Remy Sharp" src={"data:image/jpg;base64,"+v.image} />
                                            </Grid>
                                            <Grid item xs={9}>
                                                {v.name}
                                            </Grid>
                                        </Grid>
                                        <br/><br/><br/><br/>
                                    </ButtonBase>
                                )
                                : null
                            }
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}></Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            {
                                props.reports.map((v,i)=>
                                    <div key={i}>
                                        <Card className={classes.card}>
                                            <CardHeader title={v.reportName}/>
                                            <CardMedia
                                                className={classes.media} alt="" title="image"
                                                image={v.image}
                                            />
                                            <CardContent>
                                                <Grid>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {v.reportDescription}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={5}>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {v.iaValutation}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={5}>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {v.docValutation}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                {
                                                    props.isDoctor ?
                                                    <InputBase
                                                        placeholder="Insert Valutation..."
                                                        name="valutation"
                                                        id="valutation"
                                                        onChange={props.onValutationChange}
                                                        onKeyDown  = {(e) => {
                                                            if (e.key === 'Enter') {
                                                                props.insertValutation(i)
                                                            }
                                                            }
                                                        }
                                                    />
                                                    : <Button className={classes.paper} onClick={() => props.deleteReport(i)}>Delete</Button>
                                                }
                                            </CardActions>
                                        </Card>
                                        <br/><br/><br/><br/><br/>
                                    </div>
                                )
                            }
                        </div>
                    </Grid>
                </Grid>
            </div >
        );
    }
}