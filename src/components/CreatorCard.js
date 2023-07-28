// CreatorCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const CreatorCard = ({ name, role, image, description }) => {
  return (
    <Card>
      <CardMedia component="img" src={image} height={500} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {role}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;
