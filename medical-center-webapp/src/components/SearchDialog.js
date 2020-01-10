import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import ButtonBase from '@material-ui/core/ButtonBase';

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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();

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
                            <Grid item xs={11} className={classes.title}>
                                <div className={classes.search}>
                                    <InputBase
                                        placeholder="Search…"
                                        name="search"
                                        id="search"
                                        onChange={props.onSearchChange}
                                        onKeyDown  = {(e) => {
                                            if (e.key === 'Enter') {
                                                props.makeSearch()
                                            }
                                            }
                                        }
                                    />
                                </div>  
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    title="Close"
                                    onClick={props.handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider} />
                        <div className={classes.users}>
                            {
                                props.searchResult.map((user,i) =>
                                    <ButtonBase key={i} onClick={() => props.goToProfile(user.name)} style={{width:'100%'}}>
                                        <Grid container>
                                            <Grid item xs={2} className={classes.avatar}>
                                                <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                                            </Grid>
                                            <Grid item xs={4} className={classes.name}>
                                                {user.status}
                                            </Grid>
                                            <Grid item xs={6} className={classes.name}>
                                                {user.name}
                                            </Grid>
                                        </Grid>
                                    </ButtonBase>
                                )
                            }
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

