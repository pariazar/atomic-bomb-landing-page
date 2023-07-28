// Timeline.js, Science.js, Ethics.js, and Legacy.js
import React from 'react';
import { Typography } from '@material-ui/core';
import legacyData from '../data/legacyData';

const Legacy = () => {
return (
        <div>
        <div id="legacy">
          <Typography variant="h4" component="h2" gutterBottom>
            Legacy of the Manhattan Project
          </Typography>
          <Typography variant="body1" gutterBottom>
            {legacyData.map((sData) => <p><h3>{sData.title}</h3> {sData.description}</p>)}
          </Typography>
        </div>
        </div>
    );
};

export default Legacy;
