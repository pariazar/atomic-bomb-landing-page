// Home.js
import React from 'react';
import { Container, Typography, Button, Grid, Divider } from '@material-ui/core';
import CreatorCard from '../components/CreatorCard';
import creators from '../data/creators';
import Timeline from './Timeline';
import TimelineElement from './Timeline';
import Science from './Science';
import Legacy from './Legacy';
import Ethics from './Ethics';
import Simulator from './Simulator';

const Home = (classes) => {
  return (
    <div> 
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h5" component="h2" gutterBottom>
          Welcome to our website dedicated to exploring the history of the atomic bomb and Manhattan
          Project.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can find information about the scientists, engineers, and military personnel who
          worked on the Manhattan Project, the development of the atomic bomb, and the decision to use
          it on Japan.
        </Typography>
        {/* <Button variant="contained" color="primary" href="#topics">
          Learn More
        </Button> */}
      <br></br>
      

        
        <Grid container spacing={3} className={classes.grid}>
        {creators.map((creator) => (
            <Grid key={creator.name} item xs={12} md={4} className={classes.card}>
            <CreatorCard {...creator} />
            </Grid>
        ))}
        </Grid>
        
        
        <br></br>
        
        <TimelineElement />
        <Divider variant="middle" />
        <br></br>
        
        <Science />
        
        <Divider variant="middle" />
        <br></br>

        <Ethics />

        <Divider variant="middle" />
        <br></br>
        <Legacy />
      </Container>
        {/* <Simulator/> */}
      <footer className={classes.footer}>
        <Typography variant="body1">© {new Date().getFullYear()} Atomic Bomb and Manhattan Project</Typography>
      </footer>
    </div>
  );
};

export default Home;
