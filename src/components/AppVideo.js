// AppBar.js
import { Typography } from '@material-ui/core';
import React from 'react';

const AppVideo = (classes) => {
  return (
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
            Atomic Bomb and Manhattan Project
          </Typography>
        </div>
      </div> 
  );
};

export default AppVideo;
