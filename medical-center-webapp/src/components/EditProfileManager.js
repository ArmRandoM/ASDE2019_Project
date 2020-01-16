import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            maxWidth: '40%',
        },
    },
    bigAvatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:135,
        height:135,
    },
    input: {
        display: 'none',
    },
    editProfileForm: {
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    biography: {
        width: '98%',
    },
    button: {
        textTransform: 'none',
        color: '#3f51b5',
        padding: 0
    },
    whiteColor: {
        backgroundColor: '#ffffff',
    },
    form: {
        marginTop: '10px',
    },
    profileImage: {
        marginLeft: '2px',
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        borderRadius: "50% !important",
        maxWidth: "50%",
        height: "auto",
    },
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };
    
    return (
        <Paper className={classes.paper} elevation={0}>
            <AppBar position="static" className={classes.whiteColor}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Edit Profile" {...a11yProps(0)} />
                    <Tab label="Edit Password" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Grid container className={classes.editProfileForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>                               
                                Insert new profile image
                            </Grid>
                            <Grid className={classes.paper} item xs={12}>
                                {
                                    props.imageToEditUrl !== '' ?
                                    <Avatar className={classes.bigAvatar} alt="" src={props.imageToEditUrl}/>
                                    : 
                                    <Avatar className={classes.bigAvatar} alt="" src={"data:image/jpg;base64,"+props.imageToEdit}/>
                                }                          
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item >
                                        <input
                                            type="file"
                                            name="file"
                                            placeholder="Upload an image"
                                            onChange={props.uploadImage}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nameToEdit"
                                    defaultValue={props.nameToEdit}
                                    label="Name"
                                    name="nameToEdit"
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="surnameToEdit"
                                    defaultValue={props.surnameToEdit}
                                    label="Surname"
                                    name="surnameToEdit"
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="biographyToEdit"
                                    defaultValue={props.biographyToEdit}
                                    multiline
                                    rows={4}
                                    label="Biography"
                                    name="biographyToEdit"
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="primary" onClick={props.editData}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container className={classes.editProfileForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    required
                                    fullWidth
                                    id="oldPassword"
                                    label="Old Password"
                                    name="oldPassword"
                                    autoComplete=""
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    required
                                    fullWidth
                                    id="newPassword"
                                    label="New Password"
                                    name="newPassword"
                                    autoComplete=""
                                    onChange={props.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="primary" onClick={props.editPassword}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
            </SwipeableViews>
        </Paper >
    );
}