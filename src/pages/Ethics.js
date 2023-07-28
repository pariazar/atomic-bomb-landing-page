// Timeline.js, Science.js, Ethics.js, and Legacy.js
import React from 'react';
import { Typography } from '@material-ui/core';
import ethicsData from '../data/ethicsData';

const Ethics = () => {
return (
        <div>
        <div id="ethics">
          <Typography variant="h4" component="h2" gutterBottom>
            Ethical Debates Surrounding the Atomic Bomb
          </Typography>
          <Typography variant="body1" gutterBottom>
            {ethicsData.map((sData) => <p><h3>{sData.title}</h3> {sData.description}</p>)}
          </Typography>
        </div>
        </div>
    );
};

export default Ethics;
