// Timeline.js, Science.js, Ethics.js, and Legacy.js
import React from 'react';
import { Typography } from '@material-ui/core';
import scienceData from '../data/scienceData';

const Science = () => {
return (
        <div>
        <div id="science">
          <Typography variant="h4" component="h2" gutterBottom>
            The Science Behind the Bomb
          </Typography>
          <Typography variant="body1" gutterBottom>
            {scienceData.map((sData) => <p><h3>{sData.title}</h3> {sData.description}</p>)}
          </Typography>
        </div>
        </div>
    );
};

export default Science;
