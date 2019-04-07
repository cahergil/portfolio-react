import React, { useEffect, useReducer} from 'react'
import { AppBar, Toolbar, Hidden, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import scrollToElement from 'scroll-to-element';
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
  }
});

const initialState = {
  section: 'home'
}

const Navbar = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const offset = 100;
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Location', 'Contact'];
  const { classes, burgerClicked } = props;
  

  // useEffect(() => {
  //   //  console.log(props);
  //    jumpToHash();
  // });

  function reducer(state, action) {
    if (action.type === 'change_section') {
      return {
        ...state,
        section: action.payload
      }
    }
  }

  // didMount() willUnmount(), because dispatch is constant, a way of decoupling effects
  // from state
  useEffect(() => {
    console.log('create interval #############')
    const timer = setInterval(() => spy(), 100);
    return () => {
      console.log('clear interval #############')
      clearInterval(timer);
    }
  }, [dispatch]);
 
   
  const jumpToHash = (hash) => {
    
    // previous implementation!  
    // when the Link is clicked sets the props.location.hash ='#something'
    // after that it performs a render, and after that the effect is called
    // this function reads this and scrolls to that hash
    // console.log(props.location);
    // hash = props.location.hash;
    console.log('insideJumptohash, hash', hash);
    if (hash) {
      dispatch({ type: 'change_section', payload: hash.substring(1) });
      localStorage.setItem('byPassSpy', 'true');
      // // the default duration of scrollToElement is 1000ms 
      // // https://www.npmjs.com/package/scroll-to-element
      // // console.log('beforesetTimeout');
      setTimeout(() => {
        localStorage.setItem('byPassSpy', 'false');
     
      }, 1000);

      if (hash === '#home') {
        console.log('scroll to home');
        scrollToElement(hash, { offset: -100, duration: 1000 });
       
      } else {
        console.log('scroll to other');
        scrollToElement(hash, { offset: 0, duration: 1000 });
      }
  
     
      // // void the hash so that it doesn't jump to the previous hash
      props.location.hash = ''
   
      
    }
  }

  const spy = () => {
    
    for (let i = 0; i < sections.length; i++) {
      const sectionLocal = sections[i].toLowerCase();
      const element = document.getElementById(sectionLocal);
      
      if (element) {
        
        const rect = element.getBoundingClientRect();
        const byPassSpy =localStorage.getItem('byPassSpy')
        if (rect.bottom >= offset && byPassSpy !== 'true') {
          
          dispatch({ type: 'change_section', payload: sectionLocal });
          break;
        }
      }
    }
 

   
    
  }
 
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
                    pathname: '/',
                    hash: '#' + sectionElement.toLowerCase()
                  }}
                  // pressing Link causes a render, we can caputre props.location.hash
                  // with onClick this is not necessary
                  onClick={() => jumpToHash('#' + sectionElement.toLowerCase())}
                  style={{ color: state.section === sectionElement.toLowerCase() ? '#04C2C9':'#fff'}}
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

export default compose(
  withRouter,
  withStyles(styles)
)(Navbar);
