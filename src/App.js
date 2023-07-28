import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from '@material-ui/core';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';



import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  videoContainer: {
    position: 'relative',
    height: '0',
    paddingTop: 'calc(56.25% + 64px)', // Add 64px to account for the AppBar
  },
  videoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffffff',
    fontSize: '4rem',
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

function CreatorCard({ name, role, image, description }) {
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
}

export default function App() {
  const classes = useStyles();
  const creators = [
    {
      name: 'Robert Oppenheimer',
      role: 'Director',
      image: './images/oppenheimer.jpg',
      description:
        'Scientist who served as the director of the Los Alamos Laboratory during the Manhattan Project.',
    },
    {
      name: 'Enrico Fermi',
      role: 'Physicist',
      image: './images/fermi.jpg',
      description:
        'Italian physicist who worked on the first nuclear reactor at the University of Chicago as part of the Manhattan Project.',
    },
    {
      name: 'Leo Szilard',
      role: 'Physicist',
      image: './images/szilard.png',
      description:
        'Hungarian physicist and inventor who conceived the nuclear chain reaction and helped develop the atomic bomb.',
    },
  ];

  const timelineData = [
    {
      year: 1939,
      event: "Discovery of nuclear fission"
    },
    {
      year: 1942,
      event: "Manhattan Project officially begins"
    },
    {
      year: 1945,
      event: "Atomic bombs dropped on Hiroshima and Nagasaki"
    },
    {
      year: 1946,
      event: "US Atomic Energy Commission established"
    },
    {
      year: 1952,
      event: "US develops first hydrogen bomb"
    }
  ];

  const scienceData = [
    {
      title: "Nuclear Fission",
      description:
        "Nuclear fission is a nuclear reaction in which the nucleus of an atom splits into smaller parts. This releases a large amount of energy, which can be harnessed for various purposes, including nuclear power and nuclear bombs."
    },
    {
      title: "Uranium Enrichment",
      description:
        "Uranium enrichment is the process of increasing the percentage of uranium-235 (the fissile isotope) in natural uranium to make it usable as fuel for nuclear reactors or as material for nuclear weapons."
    },
    {
      title: "Plutonium Production",
      description:
        "Plutonium is an element that can be used as fuel for nuclear reactors or as material for nuclear weapons. It is produced by irradiating uranium-238 in a nuclear reactor and then extracting the plutonium from the spent fuel."
    }
  ];

  const ethicsData = [
    {
      title: "Targeting Civilians",
      description:
        "One of the main ethical debates surrounding the use of atomic bombs on Japan is whether it was justified to target civilian populations. Many argue that the indiscriminate killing of non-combatants is always morally wrong, while others argue that it was necessary to shorten the war and save lives."
    },
    {
      title: "Long-term Health Effects",
      description:
        "The use of atomic bombs has had long-term health effects on the survivors and their descendants, including increased rates of cancer, birth defects, and other health problems. Some argue that the decision to use atomic bombs was unethical because it led to these long-term consequences."
    },
    {
      title: "Nuclear Proliferation",
      description:
        "The development and use of atomic bombs has also raised concerns about nuclear proliferation and the possibility of nuclear war. Some argue that the use of atomic bombs was unethical because it set a dangerous precedent and encouraged other countries to develop nuclear weapons."
    }
  ];

  const legacyData = [
    {
      title: "Cold War Arms Race",
      description:
        "The use of atomic bombs and the subsequent arms race between the US and the Soviet Union during the Cold War had lasting effects on global politics and security."
    },
    {
      title: "Nuclear Power",
      description:
        "The development of nuclear power and the use of nuclear reactors for energy has been another legacy of the Manhattan Project."
    },
    {
      title: "Nuclear Non-Proliferation",
      description:
        "The Manhattan Project and the subsequent use of atomic bombs helped to spur international efforts to prevent the spread of nuclear weapons, including the creation of the International Atomic Energy Agency."
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit" href="#timeline">Timeline</Button>
          <Button color="inherit" href="#science">Science</Button>
          <Button color="inherit" href="#ethics">Ethics</Button>
          <Button color="inherit" href="#legacy">Legacy</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
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
        <Button variant="contained" color="primary" href="#topics">
          Learn More
        </Button>
        <Grid container spacing={3} className={classes.grid}>
          {creators.map((creator) => (
            <Grid key={creator.name} item xs={12} md={4} className={classes.card}>
              <CreatorCard {...creator} />
            </Grid>
          ))}
        </Grid>
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

        <div id="science">
          <Typography variant="h4" component="h2" gutterBottom>
            The Science Behind the Bomb
          </Typography>
          <Typography variant="body1" gutterBottom>
            {scienceData.map((sData) => <p><h3>{sData.title}</h3> {sData.description}</p>)}
          </Typography>
        </div>
        <div id="ethics">
          <Typography variant="h4" component="h2" gutterBottom>
            Ethical Debates Surrounding the Atomic Bomb
          </Typography>
          <Typography variant="body1" gutterBottom>
            {ethicsData.map((sData) => <p><h3>{sData.title}</h3> {sData.description}</p>)}
          </Typography>
        </div>
        <div id="legacy">
          <Typography variant="h4" component="h2" gutterBottom>
            Legacy of the Manhattan Project
          </Typography>
          <Typography variant="body1" gutterBottom>
            {legacyData.map((sData) => <p><h3>{sData.title}</h3> {sData.description}</p>)}
          </Typography>
        </div>
        {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]}>

          </Marker>
        </MapContainer> */}
      </Container>

      <footer className={classes.footer}>
        <Typography variant="body1">© {new Date().getFullYear()} Atomic Bomb and Manhattan Project</Typography>
      </footer>
    </div>
  );
}
