import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
    button: {
        marginTop: '10px',
    },
    report: {
        width: '100%'
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    card: {
        width: '100%',
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open2}
                onClose={props.handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open2}>
                    <div className={classes.paper}>
                        <Grid container>
                            <Grid
                                item xs={11}
                                className={classes.title}
                            >
                                Post Preview
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    title="Close"
                                    onClick={props.handleClose2}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider} />
                        <div className={classes.report}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={props.reportName}
                                    style={{ textAlign: 'center' }}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={props.image}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {props.reportDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}