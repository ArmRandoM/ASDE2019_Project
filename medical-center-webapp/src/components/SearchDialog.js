import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
            width: '25%',
            height: '50%'
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
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
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
                                    <div className={classes.searchIcon}>
                                    <SearchIcon />
                                    </div>
                                    <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
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
                            {
                                props.searchResult.map((user) =>
                                    <Grid container>
                                        <Grid item xs={2} className={classes.avatar}>
                                            <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                                        </Grid>
                                        <Grid xs={3} className={classes.name}>
                                            {user.status}
                                        </Grid>
                                        <Grid xs={4} className={classes.name}>
                                            {user.name}
                                        </Grid>
                                        <Grid xs={3} className={classes.button}>
                                            <Button variant="small" component="span" onClick={() => props.goToProfile(user.name)}>Info</Button>
                                        </Grid>
                                    </Grid>
                                )
                            }
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

