import React from 'react';
import { Button, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121', // Custom color for the app bar background
    boxShadow: 'none', // Remove the default box shadow
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px',
    [theme.breakpoints.up('md')]: {
      padding: '0 32px',
    },
  },
  brandLogo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff', // Custom color for the brand logo text
    textDecoration: 'none',
  },
  navItems: {
    display: 'none', // Hide nav items by default on smaller screens
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  navLink: {
    color: '#fff', // Custom color for nav link text
    marginLeft: theme.spacing(3),
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main, // Custom color for hover effect
    },
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff', // Custom color for the menu button text
    [theme.breakpoints.up('md')]: {
      display: 'none', // Hide menu button on larger screens
    },
  },
  brandLogo: {
    display: 'flex',
    alignItems: 'center', // Center the logo and text vertically
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff', // Custom color for the brand logo text
    textDecoration: 'none',
  },
  logoImage: {
    marginRight: theme.spacing(1), // Add some spacing between the logo and the text
    height: '40px', // Adjust the height of the logo as needed
    width: 'auto', // Allow the logo to adjust its width while maintaining the aspect ratio
  },
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="h1" className={classes.brandLogo}>
        <img src="./images/logo.png" alt="Logo" className={classes.logoImage} />

        Manhattan Project
        </Typography>

        {/* Nav Items */}
        <nav className={classes.navItems}>
          <Button color="inherit" href="#timeline" className={classes.navLink}>
            Timeline
          </Button>
          <Button color="inherit" href="#science" className={classes.navLink}>
            Science
          </Button>
          <Button color="inherit" href="#ethics" className={classes.navLink}>
            Ethics
          </Button>
          <Button color="inherit" href="#legacy" className={classes.navLink}>
            Legacy
          </Button>
          <Button color="inherit" className={classes.navLink}>
            Simulator
          </Button>
        </nav>

        {/* Menu Button (for smaller screens) */}
        <Button color="inherit" className={classes.menuButton}>
          <span className="material-icons">menu</span>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
