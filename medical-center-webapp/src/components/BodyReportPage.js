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
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
  text: {
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  
  
  const reports = [
    {title: 'Report 1', description: '',},
    {title: 'Report 2', description: '',},
    {title: 'Report 3', description: '',},
    {title: 'Report 4', description: '',},
  ];

  return (
    <div className={classes.root}>
    <br/><br/><br/><br/>
    <Grid container >
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={5}>
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
            <Typography className={classes.heading}>Report 1</Typography>
            <Typography className={classes.secondaryHeading}>Not evaluated</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Grid container >
                    <Grid item md={7}>
                        Bla bla bla
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
            <Typography className={classes.heading}>Report 2</Typography>
            <Typography className={classes.secondaryHeading}>
                Not evaluated
            </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Grid container >
                    <Grid item md={7}>
                        Bla bla bla
                    </Grid>
                    <Grid item md={3} >
                    </Grid>
            </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography className={classes.heading}>Report 3</Typography>
            <Typography className={classes.secondaryHeading}>
                Good
            </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Grid container >
                    <Grid item md={7}>
                        Bla bla bla
                    </Grid>
                    <Grid item md={3} >
                    </Grid>
            </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography className={classes.heading}>Report 4</Typography>
            <Typography className={classes.secondaryHeading}>
                Contact a doctor
            </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Grid container >
                    <Grid item md={7}>
                        Bla bla bla
                    </Grid>
                    <Grid item md={3} >
                    </Grid>
            </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={3}>
      <Typography>
      &nbsp;&nbsp;Insert new Report with description and image
      </Typography>
      <br/><br/>
      <form>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1} md={1}></Grid>
                <Grid item xs={10} sm={10} md={10}>
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
                <Grid item xs={1} sm={1} md={1}></Grid>
                <Grid item xs={1} sm={1} md={1}></Grid>
                <Grid item xs={10} sm={10} md={10}>
                    <input
                    type="file"
                    id="imageUpload"
                    aria-describedby="inputGroupFileAddon01"
                    />
                </Grid>
                <Grid item xs={1} sm={1} md={1}></Grid>
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
    <br/><br/><br/><br/>
    <Grid container >
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={5}>
        
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.text}>Use IA to evaluate your reports</Typography>
        </Grid>
        <Grid>
            <Typography variant="h6">
              <FormControl className={classes.formControl}>
                &emsp;<Autocomplete
                  id="combo-box-demo"
                  options={reports}
                  getOptionLabel={reports => reports.title}
                  style={{ width: 250}}
                  renderInput={params => (
                    <TextField {...params} label="Choose report" variant="outlined" fullWidth />
                  )}
                />
              </FormControl>    
            </Typography>
            &nbsp;&nbsp;<Button
              type="submit"
              style={{ width: 250}}
              variant="contained"
              color="primary"
              onClick={props.evaluateReport}
            >
              Evaluate with IA
            </Button>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1}></Grid>
    </Grid>
    <br/><br/><br/><br/>
    </div>
  );
}