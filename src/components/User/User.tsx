import React from 'react';
import classesSass from './User.module.scss';
import Presentation from './Presentation/Presentation';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import FeaturedWork from './FeaturedWork/FeaturedWork';
import Navbar from './Navbar/Navbar';
import Location from './Location/Location';
import ContactMe from './ContactMe/ContactMe';
import Header from './Header/Header';

const User = (props: any) => {
  
  return (
    <React.Fragment>
      
      {/* <Header /> */}
      
      <main className={classesSass.Container}>
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

export default User