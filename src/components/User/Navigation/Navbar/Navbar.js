import React from 'react'
import { AppBar, Toolbar, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link } from 'react-router-dom';


import  './Navbar.module.scss';


const styles = theme => ({
  ulStyle: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  liStyle: {
    display: 'inline-block'
  },
  linkStyle: {
    textDecoration: 'none',
    '&:link,&:visited': {
      color: theme.palette.text.primary
    },
    '&:hover,&:active': {
       color: theme.palette.text.secondary + ' !important'
    },
    fontSize: '1.5rem',
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
  },
  activeLink: {
     color: theme.palette.secondary.main
  },
  iconWrapper: {
    [theme.breakpoints.up(650)]: {
      display: 'none'
    }
  },
  sectionsWrapper: {
    [theme.breakpoints.down(650)]: {
      display: 'none'
    }
  }
});



const Navbar = (props) => {


 
  
  const { classes, burgerClicked,sections,clickedSection, scrollSection } = props;
  
 
  const toolbarSections = (
    <nav>
      <ul className={classes.ulStyle}>
         {
          sections.map((sectionElement, index) => {
            return (
              <li key={index} className={classes.liStyle}>
                <Link
                  // activeClass(NavLink) only works with this form of 'to'
                  to={{
                    pathname: '/'
                  
                  }}
                  // pressing Link causes a render, we can caputre props.location.hash
                  // with onClick this is not necessary
                  onClick={() => clickedSection('#' + sectionElement.toLowerCase(), false)}
                  style={{ color: scrollSection === sectionElement.toLowerCase() ? '#04C2C9':'#fff'}}
                  className={`${classes.linkStyle} ${
                    classes.marginRight
                  }`}
                >
                  {sectionElement.toUpperCase()}
                </Link>
              </li>
            );
          })
        }
  
      </ul>
    </nav>
    
  );

   return (
    
    // sticky does the same as fixed, but the other components aren place under the navbar
    <AppBar position="sticky" className={classes.AppBarUnderline} >
       <Toolbar>
         <div className={classes.iconWrapper}>
            <IconButton onClick={burgerClicked}>
              <MenuIcon className={classes.white} />
           </IconButton>
         </div>
        <div className={classes.grow} />
        <div className={classes.sectionsWrapper}>
           {toolbarSections}
         </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
