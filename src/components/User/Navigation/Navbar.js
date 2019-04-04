import React, { useEffect} from 'react'
import { AppBar, Toolbar, Hidden, IconButton, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import scrollToElement from 'scroll-to-element';


const styles = (theme) => ({
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
  },
  AppBarUnderline: {
    borderBottom: `2px solid ${theme.palette.secondary.main} `
  }
});

const Navbar = (props) => {
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Location', 'Contact'];
  const { classes,burgerClicked } = props;
  
  // is it enough to implement this functionality in this component
  useEffect(() => {
    jumpToHash();
  });
  
  const jumpToHash = () => {
    const hash = props.location.hash;
    if (hash) {
      if (hash === '#home') {
        scrollToElement(hash, { offset: -100 });
        return;
      }
      scrollToElement(hash, { offset: 0 });
    }
  }

 
  const toolbarSections = (
    sections.map((section, index) => {
      return (
        <Link key={index} to={'/#' + section.toLowerCase()}>
          <Typography className={`${classes.linkStyle} ${classes.marginRight}`}>
            {section.toUpperCase()}
          </Typography>
        </Link>
      );
    })
  );


  return (
    // sticky does the same as fixed, but the other components aren place under the navbar
    <AppBar position="sticky" className={classes.AppBarUnderline} >
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

// export default withStyles(styles)(Navbar)
export default compose(
  withRouter,
  withStyles(styles)
)(Navbar);