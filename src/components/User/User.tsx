import React from 'react';
import { Theme, withStyles } from '@material-ui/core';



import Presentation from './Presentation/Presentation';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import FeaturedWork from './FeaturedWork/FeaturedWork';
import Location from './Location/Location';
import ContactMe from './ContactMe/ContactMe';
import NavDrawer from './Navigation/NavDrawer';

const styles = (theme: Theme) => ({
  container: {
    width: '100%',
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
 



  return (
    <React.Fragment>
      
      <NavDrawer />

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
