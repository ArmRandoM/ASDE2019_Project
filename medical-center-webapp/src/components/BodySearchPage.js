import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  gridMessages:{
    minHeight: 350,
    maxHeight: "100%",
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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

export default function Body(props) {

  const classes = useStyles();

  return (
     
      <div>
        <Grid container>
            <Grid item xs={2} sm={2} md={2}></Grid>
            <Grid item xs={8} sm={8} md={8}>
                <div className={classes.paper}>
                    <List className={classes.gridMessages}>
                        {
                          props.searchResult.map((v) => 
                            <Grid container className={classes.paper}>
                              <Card style={{width:500}}>
                                <Grid container spacing={3}>
                                  <Grid item xs={4} sm={4} md={4}>
                                    <ButtonBase className={classes.profileImage}>
                                        <img className={classes.profileImage} alt="complex" src="http://www.aldogiovanniegiacomo.it/wp-content/uploads/2016/02/medici.png" />
                                    </ButtonBase>
                                  </Grid>
                                  <Grid item xs={8} sm={8} md={8}>
                                    <CardContent>
                                    <Typography component="h5" variant="h5">
                                      {v.name} 
                                    </Typography>
                                    </CardContent>
                                    <div className={classes.paper}>
                                      <Button onClick={() => props.goToProfile(v.name)}>See Profile</Button>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Card>
                            </Grid>
                          )
                        }
                    </List>
                </div>
            </Grid>
        </Grid>
      </div>
  );
}                                    