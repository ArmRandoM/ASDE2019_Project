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
    {title: 'Report 1', valutation: 'Not Evaluated', description: 'Blablabla1',},
    {title: 'Report 2', valutation: 'Not Evaluated', description: 'Blablabla2',},
    {title: 'Report 3', valutation: 'Good', description: 'Blablabla3',},
    {title: 'Report 4', valutation: 'Contact a Doctor', description: 'Blablabla4',},
  ];

  return (
    <div className={classes.root}>
    <br/><br/><br/><br/>
    <Grid container >
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={5}>
        <Typography  variant="h6">
          All your Reports
        </Typography>
        <br/><br/>
        {
        reports.map((v)=>
          <ExpansionPanel expanded={expanded === 'panel'+v.title} onChange={handleChange('panel'+v.title)}>
              <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panelbh-content"
              id="panelbh-header"
              >
              <Typography className={classes.heading}>{v.title}</Typography>
              <Typography className={classes.secondaryHeading}>{v.valutation}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Grid container >
                      <Grid item md={7}>
                          {v.description}
                      </Grid>
                      <Grid item md={3} >
                      </Grid>
              </Grid>
              </ExpansionPanelDetails>
          </ExpansionPanel>
        )
        }
      </Grid>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={10} md={3}>
      <br/><br/>
      <Typography variant="h6">
        Insert new Report with description and image
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