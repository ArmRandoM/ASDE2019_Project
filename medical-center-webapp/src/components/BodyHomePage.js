import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import DoctorAI from '../images/doctorAI.jpg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
      backgroundImage: "url(" + DoctorAI + ")",
      minHeight: '60vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: "#eceff1",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#eceff1",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(7),
  },
}));


export default function Body(props) {
  const classes = useStyles();
  const cards = [
    {title:'Reports', description:'Here you can see and modify all your medical reports.', route:'/reportpg'},
    {title:'My Profile', description:'Here you can see and modify your personal information.', route:'/profilepg'},
  ]

  return (
    <div>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
              <br/><br/>
              <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                Welcome {props.name} {props.surname}
              </Typography>
              <br/>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Let's interact with the system and the artificial intelligence to make your life easier and healthier.
              </Typography>
          </div>
          <Grid className={classes.root}>
            <Grid container className={classes.cardGrid}>
              <Grid item xs={1} sm={1} md={2}></Grid>
              {
                  cards.map((v)=>
                    <Grid item xs={12} sm={12} md={4}>
                      <Grid item xs={12} sm={12} md={10}>
                        <Card className={classes.card}>
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {v.title}
                            </Typography>
                            <Typography>
                              {v.description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button href={v.route} size="small" color="primary">
                              Go
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={1} sm={1} md={2}></Grid>
                      <br/><br/>
                    </Grid>
                  )
              }
            </Grid>
          </Grid>
        </main>
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Medical Center With AI
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    </div>
    
  );
}