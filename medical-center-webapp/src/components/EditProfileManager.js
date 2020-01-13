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
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    form: {
        marginTop: '10px',
    }
}));

export default function FullWidthTabs() {
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
            <AppBar position="static" color="white">
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
                            <Grid className={classes.avatar} item xs={6}>
                                <Avatar alt="Remy Sharp" src="https://assets.mubi.com/images/cast_member/531070/image-w240.jpg?1564128420" />
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item >
                                        ajeje_brazorf@gmail.com
                                    </Grid>
                                    <Grid item >
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="text-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="text-button-file">
                                            <Button className={classes.button} component="span">Change profile image</Button>
                                        </label>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    name="name"
                                    autoComplete=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="surname"
                                    autoComplete=""
                                />
                            </Grid>
                            <Grid item xs={12}>
                                Biography:
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={classes.biography}
                                    rowsMax={4}
                                    rowsMin={3}
                                    rows={6}
                                    aria-label="maximum height"
                                    placeholder="Maximum 4 rows"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
            </SwipeableViews>
        </Paper >
    );
}