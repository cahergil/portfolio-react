import React from 'react';
import { Hidden, Drawer, List, ListItem, Typography, Theme, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 150;

const styles = (theme) => ({
  
  linkStyle: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.secondary
    },

    transition: '200ms color'
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main
  }
});


const SideDrawer = (props) => {
  const { classes } = props;
  

  const sections = ['Home', 'About', 'Skills', 'Projects', 'Location', 'Contact'];

  


  const drawerSections = (
    <List>
      {
        sections.map((section, index) => {
          return (
            <ListItem key={index}>
              <Link key={index} to={'#' + section.toLowerCase()}>
                <Typography
                  className={classes.linkStyle}>
                  {section.toUpperCase()}
                </Typography>
              </Link>
            </ListItem>
          );
        })
      }
    </List>

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

