import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DoctorAI from '../images/doctorAI.jpg';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageUploader from 'react-images-upload';

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
  gridList: {
    alignItems: 'center',
    width: 500,
    height: 300,
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();

  return (
    <div>
      <br/><br/><br/>
      <Grid container >
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={4}>
        <div className={classes.paper}>
          <Typography variant="h4">Insert New Report</Typography>
          <br/>
          <TextField
            autoComplete="fname"
            name="reportName"
            variant="outlined"
            required
            style={{ width: 350}}
            id="reportName"
            label="Name"
            autoFocus
            onChange={props.onChangeName}
          />
          <br/>
          <TextField
            autoComplete="fname"
            name="reportDescription"
            variant="outlined"
            required
            style={{ width: 350}}
            multiline
            rows="4"
            id="reportDescription"
            label="Description"
            autoFocus
            onChange={props.onChangeDescription}
          />
          <br/>
          <ImageUploader style={{ width: 350}}
                withIcon={true}
                buttonText='Choose images'
                onChange={props.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
          <br/>
          <br/>
        </div>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={4}>
            <br/>
            <br/>
          <div className={classes.paper}>
            <Grid container>
                <GridList className={classes.gridList}>
                  {props.images.map(v => (
                    <GridListTile>
                      <img src={v} alt=""/>
                    </GridListTile>
                  ))}
                </GridList>
            </Grid>
          </div>  
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        
        <Grid item xs={12} md={12}>
          <div className={classes.paper}>
            <br/>
            <Button
              style={{ width: 170}}
              variant="contained"
              color="primary"
              onClick={props.addReport}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}