import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DoctorAI from '../images/doctorAI.jpg';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
      backgroundImage: "url(" + DoctorAI + ")",
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: '1',
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
  form: {
      width: '100%',
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 350,
  },
  expands: {
      width: 350,
      marginTop: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  
  
  const reports = [
    {title: 'Report 1', iaValutation: 'Not Evaluated', doctorValutation: 'Not Evaluated', description: 'Blablabla1',},
    {title: 'Report 2', iaValutation: 'Not Evaluated', doctorValutation: 'Not Evaluated', description: 'Blablabla2',},
    {title: 'Report 3', iaValutation: 'Not Evaluated', doctorValutation: 'No Problem', description: 'Blablabla3',},
    {title: 'Report 4', iaValutation: 'Not Evaluated', doctorValutation: 'No Problem', description: 'Blablabla4',},
  ];

  return (
    <div className={classes.root}>
      <br/><br/><br/>
      <Grid container >
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <br/>
          <Typography  variant="h6">Reports</Typography>
          <br/>
          {
          reports.map((v)=>
            <ExpansionPanel  className={classes.expands}  expanded={expanded === 'panel'+v.title} onChange={handleChange('panel'+v.title)}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panelbh-content"
                id="panelbh-header"
                >
                <Typography className={classes.heading}>{v.title}</Typography>
                <Typography className={classes.heading}>{v.iaValutation}</Typography>
                <Typography className={classes.heading}>{v.doctorValutation}</Typography>
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
          <br/><br/>
          <Typography variant="h6">New Report</Typography>
          <br/>
          <TextField
            autoComplete="fname"
            name="name"
            variant="outlined"
            required
            style={{ width: 350}}
            multiline
            rows="4"
            id="description"
            label="Description"
            autoFocus
          />
          <br/>
          <Typography variant="h6">   
            <input
              type="file"
              style={{ width: 350}}
              id="imageUpload"
              aria-describedby="inputGroupFileAddon01"
            />
          </Typography>
          <br/>
          <Button
            type="submit"
            style={{ width: 170}}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <br/><br/><br/><br/>
            
          <Typography variant="h6" className={classes.text}>
            Use IA
          </Typography>

          <Typography variant="h6">
            <FormControl className={classes.formControl}>
              <Autocomplete
                id="combo-box-demo"
                options={reports}
                getOptionLabel={reports => reports.title}
                style={{ width: 350}}
                renderInput={params => (
                  <TextField {...params} label="Choose report" variant="outlined" fullWidth />
                )}
              />
            </FormControl>    
          </Typography>
          <Button
            type="submit"
            style={{ width: 170}}
            variant="contained"
            color="primary"
            onClick={props.evaluateReport}
          >
            Evaluate with IA
          </Button>
          <br/><br/>
        </div>
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}