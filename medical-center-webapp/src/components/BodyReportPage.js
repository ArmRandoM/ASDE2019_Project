import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DoctorAI from '../images/doctorAI.jpg';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PostPreviewDialog from './PostPreviewDialog';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "url(" + DoctorAI + ")",
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  input: {
    display: 'none',
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PostPreviewDialog
        handleClose2={handleClose}
        open2={open}
        classes={classes}
        followers={props.followers}
        image={props.imagePreviewUrl}
        reportName={props.reportName}
        reportDescription={props.reportDescription}
        followOperationOnFollowers={props.followOperationOnFollowers}
      />
      <Grid container >
        <Grid item xs={1} sm={1} md={1}></Grid>
        <Grid item xs={10} sm={10} md={10}>
          <br></br>
          <br></br>
          <Grid container spacing={2} className={classes.paper}>
            <Grid item xs={12}>
              <Typography variant="h4"><PostAddIcon fontSize="large" />New Report</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="reportName"
                variant="outlined"
                required
                style={{ width: 350 }}
                id="reportName"
                label="Name"
                autoFocus
                onChange={props.onChangeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="reportDescription"
                variant="outlined"
                required
                style={{ width: 350 }}
                multiline
                rows="4"
                id="reportDescription"
                label="Description"
                autoFocus
                onChange={props.onChangeDescription}
              />
            </Grid>
            <Grid xs={12}>
              <input
                accept="image/*"
                className={classes.input}
                id="text-button-file"
                multiple
                type="file"
                onChange={props.uploadImage}
              />
              <label htmlFor="text-button-file">
                <Button component="span" startIcon={<ImageSearchIcon />}>Search an image of a mole</Button>
              </label>
            </Grid>
            <Grid xs={12}>
              <label>
                <Button onClick={handleClickOpen} component="span" startIcon={<VisibilityIcon />}>Report preview</Button>
              </label>
            </Grid>
          </Grid>
          <br /><br />
          <div className={classes.paper}>
            <Grid item xs={12}>
              {props.loading ?
                <CircularProgress disableShrink />
                :
                <Button
                  style={{ width: 170 }}
                  variant="contained"
                  color="primary"
                  onClick={props.addReport}
                >
                  Submit
                </Button>
              }
            </Grid>
          </div>
          <br /><br />
          <div className={classes.paper}>
            {
              props.added ?
                <Typography variant="h6" style={{ color: 'green' }}>Report added successfully!</Typography>
                : null
            }
          </div>
        </Grid>
      </Grid>
      <br />
    </div >
  );
}