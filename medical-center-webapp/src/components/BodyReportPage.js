import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DoctorAI from '../images/doctorAI.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';
import PostAddIcon from '@material-ui/icons/PostAdd';

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
  },
  gridList: {
    alignItems: 'center',
    width: 500,
    height: 400,
  },
  profileImage: {
      maxWidth: 300,
      maxHeight: 300,
  },
  img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();

  return (
    <div>
      <br/><br/><br/>
      <Grid container >
        <Grid item xs={1} sm={1} md={1}></Grid>
        <Grid item xs={10} sm={10} md={10}>
          <div className={classes.paper}>
            <Typography variant="h4"><PostAddIcon fontSize="large" />New Report</Typography>
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
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={props.uploadImage}
            />
          </div>
          <br/>
          <div className={classes.paper}>
            <Typography variant="h6">Image preview</Typography>
            {
              props.image ? 
              <ButtonBase onClick={() => props.removeImage()}>
                <img className={classes.profileImage} alt="" src={props.imagePreviewUrl}/>
              </ButtonBase>
              : null
            }
            
          </div> 
          <br/><br/>
          <div className={classes.paper}>
            <Button
              style={{ width: 170}}
              variant="contained"
              color="primary"
              onClick={props.addReport}
            >
              Submit
            </Button>
          </div>
          <br/><br/>
          <div className={classes.paper}>
            {
              props.added ? 
              <Typography variant="h6">Report added successfully</Typography>
              : null
            }
          </div>
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}