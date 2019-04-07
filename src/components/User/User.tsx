import React from 'react';
import { Theme, withStyles } from '@material-ui/core';



import Presentation from './Presentation/Presentation';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';

import FeaturedWork from './FeaturedWork/FeaturedWork';
import Navbar from './Navigation/Navbar/Navbar';
import Location from './Location/Location';
import ContactMe from './ContactMe/ContactMe';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';

const styles = (theme: Theme) => ({
  container: {
    display: 'grid',
    // default case when >550 && < 600
    gridTemplateRows: 'calc(100vh - 4rem) repeat(5, min-content)',
    [theme.breakpoints.up('sm')]: {
      gridTemplateRows: 'calc(100vh - 6.4rem) repeat(5, min-content)'
    },
    [theme.breakpoints.down(550)]: {
      gridTemplateRows: 'calc(100vh - 5.6rem) repeat(5, min-content)'
    }
    
  }
});

const User = (props: any) => {
 
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    console.log('andledrawtertoggle');
    setMobileOpen(!mobileOpen);
  }

  return (
    <React.Fragment>
      
     
      <Navbar burgerClicked={handleDrawerToggle}/>
      <SideDrawer
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle} />
      <main className={classes.container}>
        <Presentation />
        <AboutMe />
        <Skills />
        <FeaturedWork />
        <Location />
        <ContactMe />
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles)(User);
// export default compose(
//   // withTheme(),
//   withStyles(styles)
// ) (Header);
