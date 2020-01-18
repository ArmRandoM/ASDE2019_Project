import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    report: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        borderStyle: 'solid',
        borderRadius: '5px'
    },
    card: {
        width: '100%'
    },
    operations: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    editItems: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    description: {
        wordBreak: 'break-all'
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
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Report(props) {
    const classes = useStyles();

    return (
        <div
            className={classes.report}
            style={props.value === "Malignant" ? { borderColor: 'red' } : { borderColor: 'green' }}
        >
            <div className={classes.operations}>
                <IconButton onClick={props.switchToEdit} aria-label="edit" className={classes.margin}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={props.deleteReport} aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
            <Card className={classes.card}>
                {
                    !props.edit ?
                        <CardHeader
                            title={props.name}>
                        </CardHeader>
                        :
                        <TextField
                            name="nameReportToEdit"
                            required
                            fullWidth
                            onChange={props.onChange}
                            id="standard-basic"
                            defaultValue={props.name}
                        />
                }
                <CardMedia
                    className={classes.media}
                    image={"data:image/jpg;base64," + props.image}
                />
                <CardContent>
                    {
                        !props.edit ?
                            <Typography
                                className={classes.description}
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                {props.description}
                            </Typography>
                            :
                            <span className={classes.editItems}>
                                <TextField
                                    name="descriptionReportToEdit"
                                    required
                                    fullWidth
                                    onChange={props.onChange}
                                    id="standard-basic"
                                    multiline
                                    rows={4}
                                    defaultValue={props.description}
                                />
                                <Button component="span" onClick={props.updateReport} startIcon={<SaveIcon />}>Save Changes</Button>
                            </span>
                    }
                </CardContent>
            </ Card >
        </div >
    );
}