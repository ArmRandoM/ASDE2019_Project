import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: '14px',
        textAlign: 'center',
    },
    name: {
        marginTop: '14px',
    },
    users: {
        overflow: 'auto',
        overflowX: 'hidden',
        scrollMarginRight: 0,
        [theme.breakpoints.up('sm')]: {
            maxHeight: '90%'
        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: '90%'
        },
    },
    button: {
        marginTop: '10px',
    },
    avatar: {
        marginTop: '10px',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: "3% !important",
        boxShadow: theme.shadows[5],
        [theme.breakpoints.up('sm')]: {
            width: '30%',
            height: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: '90%'
        },
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <Grid container>
                            <Grid
                                item xs={11}
                                className={classes.title}
                            >
                                Followers/Follows
                                </Grid>
                            <Grid xs={1}>
                                <IconButton
                                    title="Close"
                                    onClick={props.handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider} />
                        <div className={classes.users}>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Aldo Baglio
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Follow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYemKZt0Dcd99e-Tc3ojETV0rGuP8npCX5Tl_rl6KRfZxSVg33" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giovanni Storti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Aldo Baglio
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Follow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYemKZt0Dcd99e-Tc3ojETV0rGuP8npCX5Tl_rl6KRfZxSVg33" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giovanni Storti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Aldo Baglio
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Follow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYemKZt0Dcd99e-Tc3ojETV0rGuP8npCX5Tl_rl6KRfZxSVg33" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giovanni Storti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Aldo Baglio
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Follow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYemKZt0Dcd99e-Tc3ojETV0rGuP8npCX5Tl_rl6KRfZxSVg33" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giovanni Storti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item xs={2}
                                    className={classes.avatar}
                                >
                                    <Avatar alt="Remy Sharp" src="https://www.varesenews.it/photogallery_new/images/2017/07/avarie-623582.610x431.jpg" />
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.name}>
                                    Giacomo Poretti
                                </Grid>
                                <Grid
                                    xs={5}
                                    className={classes.button}
                                >
                                    <Button variant="small" component="span">
                                        Unfollow
                                </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}