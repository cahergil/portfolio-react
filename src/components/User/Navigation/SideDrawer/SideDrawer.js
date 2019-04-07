import React from 'react';
import { Hidden, Drawer, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 150;

const styles = theme => ({
  navStyle: {
    margin: '1.6rem'
  },
  ulStyle: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  liStyle: {
    display: 'block',
    margin: '1.6rem 0'
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
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main
  }
});


const SideDrawer = (props) => {
  const { classes,sections,scrollSection, clickedSection } = props;
  
  const drawerSections = (
    <nav className={classes.navStyle}>
      <ul className={classes.ulStyle}>
      {
        sections.map((sectionElement, index) => {
          return (
            <li key={index} className={classes.liStyle}>
              <Link
                key={index}
                to={{
                  pathname: '/'
                
                }}
                onClick={() => 
                  clickedSection('#' + sectionElement.toLowerCase(), true)
                }
                style={{ color: scrollSection === sectionElement.toLowerCase() ? '#04C2C9' : '#fff' }}
                className={classes.linkStyle}>
                              
                  {sectionElement.toUpperCase()}
                
              </Link>
            </li>
          );
        })
      }
      </ul>
    </nav>

  )

  return (
    <nav >
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={props.mobileOpen}
          onClose={props.onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawerSections}
        </Drawer>
      </Hidden>

    </nav>
  );

}

export default withStyles(styles)(SideDrawer);

