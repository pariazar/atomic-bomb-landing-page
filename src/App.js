// App.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopAppBar from './components/AppBar';
import Home from './pages/Home';
import { Typography } from '@material-ui/core';
import AppVideo from './components/AppVideo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  videoContainer: {
    // position: 'relative',
    // height: '0',
    paddingTop: 'calc(27% + 64px)', // Add 64px to account for the AppBar
  },
  videoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  videoTitle: {
    position: 'absolute',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffffff',
    fontSize: '10rem',
    fontFamily: 'Montserrat, sans-serif',
    zIndex: 1,
    textAlign: 'center',
    textShadow: '2px 2px 4px #000000',
  },
  main: {
    marginTop: theme.spacing(12), // Change this value to adjust the margin above the main content
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  grid: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: '#f9f9f9',
    padding: theme.spacing(6),
  },

}));

const App = () => {
  const classes = useStyles();
  

  return (

    <div className={classes.root}>
      <TopAppBar />
      <div className={classes.videoContainer}>
        <div className={classes.videoWrapper}>
          <video
            className={classes.video}
            src="./trinity_test_1.mp4"
            autoPlay
            muted
            loop
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className={classes.videoTitle}
          >
            Atomic Bomb
          </Typography>
        </div>
      </div> 
      <Home classes/>
    </div>


  );
};

export default App;
