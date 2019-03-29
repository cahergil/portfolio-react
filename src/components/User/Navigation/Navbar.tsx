import React from 'react'
import { AppBar, Toolbar, Hidden, IconButton, Theme, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) => ({
  linkStyle: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.secondary
    },

    transition: '200ms color'
  },
  marginRight: {
    marginRight: '2rem'
  },
  white: {
    color: theme.palette.text.primary
  },
  grow: {
    flexGrow: 1
  }
});

const Navbar = (props: any) => {
  const { classes,burgerClicked } = props;

  
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Location', 'Contact'];


 
  const toolbarSections = (
    sections.map((section, index) => {
      return (
        <Link key={index} to={'#' + section.toLowerCase()}>
          <Typography className={`${classes.linkStyle} ${classes.marginRight}`}>
            {section.toUpperCase()}
          </Typography>
        </Link>
      );
    })
  );


  return (
    // sticky does the same as fixed, but the other components aren place under the navbar
    <AppBar position="sticky">
      <Toolbar>
        <Hidden smUp>
          <IconButton onClick={burgerClicked}>
            <MenuIcon className={classes.white} />
          </IconButton>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.grow} />
          {toolbarSections}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar)
