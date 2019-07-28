import React, { useState, useEffect, useReducer } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router';

import scrollToElement from 'scroll-to-element';

import Navbar from './Navbar/Navbar';
import SideDrawer from './SideDrawer/SideDrawer';


const initialState = {
  section: 'home'
};

const NavDrawer = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState)
  const sections = [
    'Home',
    'About',
    'Skills',
    'Education',
    'Projects',
    'Location',
    'Contact'
  ];
  let prevSection = 'home';
  let firstLoad = true;
  const offset = 100;
  // didMount() willUnmount(), because dispatch is constant, a way of decoupling effects
  // from state
  useEffect(() => {
    localStorage.clear();
 
    const timer = setInterval(() => spy(), 100);
    return () => {      clearInterval(timer);
    }
  }, [dispatch]);

  function reducer(state, action) {
    if (action.type === 'change_section') {
      return {
        ...state,
        section: action.payload
      }
    }
  }

  const jumpToHash = (hash, mobile) => {

    // previous implementation!  
    // when the Link is clicked sets the props.location.hash ='#something'
    // after that it performs a render, and after that the effect is called
    // this function reads this and scrolls to that hash
    // console.log(props.location);
    // hash = props.location.hash;
    
    if (hash) {
      dispatch({ type: 'change_section', payload: hash.substring(1) });
      localStorage.setItem('byPassSpy', 'true');
      // // the default duration of scrollToElement is 1000ms 
      // // https://www.npmjs.com/package/scroll-to-element
      setTimeout(() => {
        localStorage.setItem('byPassSpy', 'false');

      }, 1000);

      if (hash === '#home') {
        scrollToElement(hash, { offset: -100, duration: 1000 });

      } else {
        scrollToElement(hash, { offset: 0, duration: 1000 });
      }

      
      if (mobile) {
        setMobileOpen(!mobileOpen);
      }
    }
  }


  const spy = () => {

    let sectionLocal;
    let byPassSpy;
    let rect;
    const candidates = [];
    for (let i = 0; i < sections.length; i++) {
      sectionLocal = sections[i].toLowerCase();
      const element = document.getElementById(sectionLocal);

      if (element) {

        rect = element.getBoundingClientRect();
        byPassSpy = localStorage.getItem('byPassSpy')
        
        if (rect.bottom >= offset) {
          candidates.push({section: sectionLocal });
        }
        
      }
    }
    if (byPassSpy !== 'true') {
      const section = candidates[0].section;
      if (prevSection !== section || firstLoad) {
        firstLoad = false;
        dispatch({
          type: 'change_section',
          payload: section
        });
        // window.location.hash = '#' + section;
        console.log('hit');
        prevSection = section;
        
      }
    }
  }

  const handleDrawerToggle = () => {

    console.log('andledrawtertoggle');
    setMobileOpen(!mobileOpen);
  }

  return (
    <React.Fragment>

      <Navbar
        sections={sections}
        scrollSection={state.section}
        clickedSection={jumpToHash}
        burgerClicked={handleDrawerToggle} />
      <SideDrawer
        sections={sections}
        scrollSection={state.section}
        clickedSection={jumpToHash}
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle} />

    </React.Fragment>

  );


}


export default compose(
  withRouter
  // withStyles(styles)
)(NavDrawer);