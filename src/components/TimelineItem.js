// TimelineItem.js
import React from 'react';
import { TimelineItem as MuiTimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent, Paper, Typography } from '@material-ui/core';

const TimelineItem = ({ year, event }) => {
  return (
    <MuiTimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {year}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className="timeline-paper">
          <Typography variant="h6" component="h1">
            {event}
          </Typography>
        </Paper>
      </TimelineContent>
    </MuiTimelineItem>
  );
};

export default TimelineItem;