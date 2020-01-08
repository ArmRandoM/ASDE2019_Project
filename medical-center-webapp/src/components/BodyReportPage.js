import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DoctorAI from '../images/doctorAI.jpg';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import GridList from '@material-ui/core/GridList';
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
      marginLeft: '2px',
      boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      borderRadius: "50% !important",
      maxWidth: "100%",
      height: "auto",
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
              id="multi"
              onChange={props.uploadImage}
              multiple
            />
          </div>
          <br/><br/>
          <div className={classes.paper}>
            <GridList className={classes.gridList}>
              {props.images.map((image,i) => (
                  <Card style={{width:230}} key={i} onMouseEnter={props.halfOpacity} onMouseLeave={props.normalOpacity}>
                    <ButtonBase onClick={() => props.removeImage(i)}>
                      <Grid container spacing={3}>
                          <img className={classes.profileImage} alt="image" src={image}/>
                      </Grid>
                    </ButtonBase>
                  </Card>
              ))}
            </GridList>
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
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}