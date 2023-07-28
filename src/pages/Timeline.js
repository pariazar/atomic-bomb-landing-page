// Timeline.js, Science.js, Ethics.js, and Legacy.js
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Timeline from "@material-ui/lab/Timeline";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import timelineData from '../data/timelineData';
import { TimelineItem } from '@material-ui/lab';
// Import other data files accordingly

const TimelineElement = () => {
return (
        <div>
        <div id="timeline">
            <Typography variant="h4" component="h2" gutterBottom>
            Timeline of the Manhattan Project
            </Typography>
            <Timeline align="alternate">
            {timelineData.map((data, index) => {
                return (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {data.year}
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className="timeline-paper">
                        <Typography variant="h6" component="h1">
                        {data.event}
                        </Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                );
            })}
            </Timeline>
        </div>
        </div>
    );
};

export default TimelineElement;
