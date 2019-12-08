import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Button, GridList} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    <br/><br/><br/><br/>
    <Grid container >
      <Grid item md={1}></Grid>
      <Grid item md={5}>
        <Typography>
          &nbsp;&nbsp;All your Reports
        </Typography>
        <br/><br/>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography className={classes.heading}>General settings</Typography>
            <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Grid container >
                    <Grid item md={7}>
                        Description <br/>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </Grid>
                    <Grid item md={3} >
                    </Grid>
            </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography className={classes.heading}>Users</Typography>
            <Typography className={classes.secondaryHeading}>
                You are currently not an owner
            </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <br/><br/><br/><br/>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={3}>
      <Typography>
      &nbsp;&nbsp;Insert new Report
      </Typography>
      <br/><br/>
      <form>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={11} sm={11}>
                    <TextField
                        autoComplete="fname"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        multiline
                        rows="4"
                        id="description"
                        label="Description"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={11} sm={11}>
                    <input
                    type="file"
                    className="custom-file-input"
                    id="imageUpload"
                    aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Insert the image
                    </label>
                </Grid>
                <br/><br/><br/>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                    Submit
                </Button>
            </Grid>
        </form>
      </Grid>
    </Grid>
    </div>
  );
}