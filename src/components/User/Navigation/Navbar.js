import React, { useEffect,useState} from 'react'
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

const Navbar = (props) => {
 
  const [section, setSection] = useState('home');
  // let section = 'home';
  let byPassSpy = false;  
  let hash = '';
  const offset = 100;
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Location', 'Contact'];
  const { classes, burgerClicked } = props;
  
  // is it enough to implement this functionality in this component
  // useEffect(() => {
  //   //  console.log(props);
  //   //  jumpToHash();
  // });

  // didMount() willUnmount()
  useEffect(() => {
    const timer = setInterval(() => spy(), 100);
    return () => {
      clearInterval(timer);
    }
  }, []);
 
  // useEffect(() => {
    
  //   if (timer) {
  //     clearInterval(timer);
  //   }
  //   timer = setInterval(() => spy(), 100);
   
  // });
 
   
  const jumpToHash = () => {
    
    
    // when the Link is clicked sets the props.location.hash ='#something'
    // after that it performs a render, and after that the effect is called
    // this function reads this and scrolls to that hash
    // console.log(props.location);
    hash = props.location.hash;
    // console.log('insideJumptohash, hash', hash);
    if (hash) {
       byPassSpy = true
       console.log('beginjumpToHash, bypassSpy', byPassSpy);
      // // the default duration of scrollToElement is 1000ms 
      // // https://www.npmjs.com/package/scroll-to-element
      // // console.log('beforesetTimeout');
      setTimeout(() => {
        byPassSpy = false
        // bypassSpy = false;
        console.log('endSetTimeout, bypassSpy',byPassSpy);
      }, 5000);

      if (hash === '#home') {
        scrollToElement(hash, { offset: -100, duration: 5000 });
        // window.location.hash = ''
      } else {

        scrollToElement(hash, { offset: 0, duration: 5000 });
      }
  
      // // spy executes each 400ms, and it causes a rerender(because changes the state)
      // // void the hash so that it doesn't jump to the previous hash
      props.location.hash = ''
   
      
    }
  }

  const spy = () => {
     console.log('inside spy, bypassSpy',byPassSpy);
    
    for (let i = 0; i < sections.length; i++) {
      const sectionLocal = sections[i].toLowerCase();
      const element = document.getElementById(sectionLocal);
      
      if (element) {
        
        const rect = element.getBoundingClientRect();
 
        if (rect.bottom >= offset && !byPassSpy) {
          
          setSection(section)
          // console.log('settingSection',bypassSpy);
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
                  onClick={jumpToHash}
                  style={{ color: section === sectionElement.toLowerCase() ? '#04C2C9':'#fff'}}
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

// export default withStyles(styles)(Navbar)
export default compose(
  withRouter,
  withStyles(styles)
)(Navbar);
