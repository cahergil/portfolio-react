import React from 'react'
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText,  Typography, withStyles, ListItemIcon, withTheme, Theme, Hidden, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
 
const drawerWidth = 150;

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
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.main
  }
});



const Header = (props: any) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {classes } = props;
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Location', 'Contact'];

  function handleDrawerToggle() {
    console.log('andledrawtertoggle');
    setMobileOpen(!mobileOpen);
  }
   
  const toolbarSections = (
    sections.map((section,index) => {
      return (
        <Link key={index} to={'#' + section.toLowerCase()}>
          <Typography className={`${classes.linkStyle} ${classes.marginRight}`}>
            {section.toUpperCase()}
          </Typography>
        </Link>
      );
    })
  );
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
    <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>
        <Hidden smUp>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon className={classes.white} />
          </IconButton>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.grow} />
          {toolbarSections}
        </Hidden>
      </Toolbar>
    </AppBar>
    <nav >
      <Hidden smUp>    
        <Drawer
          variant="temporary"
          anchor="left"  
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
    </React.Fragment>
  );

};

export default withStyles(styles)(Header);

// export default compose(
//   // withTheme(),
//   withStyles(styles)
// ) (Header);


